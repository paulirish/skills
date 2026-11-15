---
name: fetch-as-markdown
description: Fetch a URL using Playwright and convert its content to Markdown.
---

# Fetch As Markdown Skill

This skill allows fetching any web page, rendering it using Chromium via Playwright, and converting its annotated layout tree into clean Markdown using `chromium-clean-markdown`.

## Usage

```bash
node skills/fetch-as-markdown/scripts/fetch-as-markdown.ts <URL>
```

Example:
```bash
node skills/fetch-as-markdown/scripts/fetch-as-markdown.ts https://example.com
```

The script will output the converted markdown to stdout.
