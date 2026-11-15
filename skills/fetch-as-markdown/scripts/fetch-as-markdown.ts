#!/usr/bin/env node

import { processPage, convertToMarkdown } from 'chromium-clean-markdown';

async function main() {
  const url = process.argv[2];

  if (!url) {
    console.error('Usage: node skills/fetch-as-markdown/scripts/fetch-as-markdown.ts <URL>');
    process.exit(1);
  }

  try {
    const decoded = await processPage(url);
    console.log(convertToMarkdown(decoded));
  } catch (error) {
    console.error(`Error: ${error instanceof Error ? error.message : String(error)}`);
    process.exit(1);
  }
}

main();
