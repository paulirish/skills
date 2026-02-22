#!/usr/bin/env node
import { chromium } from 'playwright';

const url = process.argv[2];

if (!url) {
  console.log(`
Usage: ./distill-page.js <URL>
Example: ./distill-page.js https://www.debugbear.com/blog/content-visibility-api
  `);
  process.exit(1);
}

async function distill() {
  let browser;
  try {
    browser = await chromium.launch({
      args: ['--enable-dom-distiller']
    });
    const context = await browser.newContext();
    const page = await context.newPage();
    
    // Create a CDP session to the page
    const client = await page.context().newCDPSession(page);
    
    // Enable the Page domain for experimental commands
    await client.send('Page.enable');
    
    await page.goto(url, { waitUntil: 'load' });
    await page.bringToFront();
    await page.waitForTimeout(2000); 
    
    // Page.getAnnotatedPageContent returns distilled/annotated HTML content
    const { content } = await client.send('Page.getAnnotatedPageContent');
    
    process.stdout.write(content);
    
    await browser.close();
  } catch (error) {
    console.error('Error:', error.message);
    if (browser) await browser.close();
    process.exit(1);
  }
}

distill();
