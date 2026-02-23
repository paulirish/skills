import test from 'node:test';
import {chromium} from 'playwright';
import path from 'node:path';
import {decodeAnnotatedPageContent, convertToMarkdown} from '../../lib/distiller/decode_annotations.ts';

test('Run Turndown cases against CDP getAnnotatedPageContent', async () => {
  const browser = await chromium.launch({
    headless: false,
    args: [
      '--headless=new',
      '--enable-features=OptimizationHints,PageContentAnnotation,OptimizationGuideModelDownloading',
      '--enable-dom-distiller',
      '--no-sandbox',
      '--disable-setuid-sandbox',
    ],
  });

  const context = await browser.newContext();
  const indexPage = await context.newPage();

  const indexPath = path.resolve('./utils/distiller/turndown_tmp/test/index.html');
  await indexPage.goto('file://' + indexPath);

  const testCases = await indexPage.evaluate(() => {
    return Array.from(document.querySelectorAll('.case')).map(node => ({
      name: node.getAttribute('data-name'),
      inputHtml: node.querySelector('.input')?.innerHTML || '',
      expected: node.querySelector('.expected')?.textContent || '',
    }));
  });

  await indexPage.close();

  console.log(`Found ${testCases.length} test cases.`);

  // To avoid 200s runtime, we can just run the first 5 tests or specific ones
  // that we want to try supporting.
  let passed = 0;
  let failed = 0;

  const page = await context.newPage();
  const client = await page.context().newCDPSession(page);
  await client.send('Page.enable');

  for (const tc of testCases.slice(0, 10)) {
    // Navigate to a data URL with the input HTML
    const dataUrl = 'data:text/html;charset=utf-8,' + encodeURIComponent(`<!DOCTYPE html><html><body>${tc.inputHtml}</body></html>`);
    await page.goto(dataUrl, {waitUntil: 'load'});
    await page.bringToFront();

    // Inject semantic markers
    await page.evaluate(() => {
      document.querySelectorAll('code').forEach(el => {
        if (!el.closest('pre')) {
          el.insertAdjacentText('afterbegin', '`');
          el.insertAdjacentText('beforeend', '`');
        }
      });
      document.querySelectorAll('pre').forEach(el => {
        el.insertAdjacentText('afterbegin', '\n```\n');
        el.insertAdjacentText('beforeend', '\n```\n');
      });
      document.querySelectorAll('blockquote').forEach(el => {
        const p = document.createElement('span');
        p.textContent = '> ';
        el.prepend(p);
      });
    });

    // wait a small bit for CDP to digest
    await page.waitForTimeout(500);

    let actualMd = '';
    try {
      const {content} = await client.send('Page.getAnnotatedPageContent');
      const decoded = decodeAnnotatedPageContent(content);
      actualMd = convertToMarkdown(decoded) || '';
    } catch (e) {
      console.error(`Failed on ${tc.name}`, e);
    }

    if (actualMd === tc.expected) {
      passed++;
    } else {
      console.log(`\n❌ Failed: ${tc.name}`);
      console.log(`EXPECTED:\n${tc.expected}`);
      console.log(`ACTUAL:\n${actualMd}`);
      failed++;
    }
  }

  await browser.close();
  console.log(`\nResults: ${passed} passed, ${failed} failed`);
});
