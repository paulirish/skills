import { chromium } from 'playwright';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

async function getConverter() {
  try {
    // Try local path first (assuming markpaste is a sibling to dotfiles repo)
    const localUrl = new URL('../../../../../markpaste/src/index.js', import.meta.url).href;
    const module = await import(localUrl);
    return module.convert;
  } catch (e: any) {
    // Fall back to npm package
    try {
      const module = await import('markpaste');
      return module.convert;
    } catch (npmError: any) {
      console.error('Error: Could not load markpaste locally or from npm.');
      console.error(`Local error: ${e.message}`);
      console.error(`NPM error: ${npmError.message}`);
      process.exit(1);
    }
  }
}

export async function fetchAsMarkdown(url: string): Promise<string> {
  const convert = await getConverter();
  const browser = await chromium.launch({ headless: true });
  try {
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'load', timeout: 30000 });
    const bodyHtml = await page.content();
    return await convert(bodyHtml, { converter: 'turndown' });
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
