import { chromium } from 'playwright';
import TurndownService from 'turndown';
// @ts-expect-error - no types for turndown-plugin-gfm
import { gfm } from 'turndown-plugin-gfm';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export async function fetchAsMarkdown(url: string): Promise<string> {
  const browser = await chromium.launch({ headless: true });
  try {
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'load', timeout: 30000 });
    const html = await page.content();

    const turndownService = new TurndownService({
      headingStyle: 'atx',
      codeBlockStyle: 'fenced'
    });
    turndownService.use(gfm);

    return turndownService.turndown(html);
  } finally {
    await browser.close();
  }
}

// CLI entry point
const currentFilePath = fileURLToPath(import.meta.url);
const entryFilePath = process.argv[1] ? path.resolve(process.argv[1]) : '';

if (currentFilePath === entryFilePath) {
  const url = process.argv[2];
  if (!url) {
    console.error('Usage: fetch-as-markdown <url>');
    process.exit(1);
  }
  try {
    const md = await fetchAsMarkdown(url);
    process.stdout.write(md + '\n');
  } catch (err) {
    console.error('Error fetching page:', err);
    process.exit(1);
  }
}
