# @paulirish/agent-skills

A collection of expert agent skills and CLIs.

## Installing Skills

Skills can be installed directly into your coding agent using the `skills` CLI:

```bash
npx skills add paulirish/agent-skills --skill <skill-name>
```

## Available Skills

Here is the list of available skills that you can add to your agent configuration:

### 🛠️ [buildless-types](skills/buildless-types/SKILL.md)
Use when setting up type checking/type safety without a compilation/build step (e.g., using JSDoc for browsers or erasable syntax for Node.js).
```bash
npx skills add paulirish/agent-skills --skill buildless-types
```

### 📄 [distill-page](https://github.com/paulirish/page-distiller)
Extract high-quality, noise-free Markdown content from a webpage using Chromium's experimental on-device ML page content annotation (`Page.getAnnotatedPageContent`). Moved to its own repository: [paulirish/page-distiller](https://github.com/paulirish/page-distiller).
```bash
npx skills add paulirish/page-distiller
```

### 🌐 [fetch-as-markdown](skills/fetch-as-markdown/SKILL.md)
Fetch a URL using Playwright and convert rendered DOM content into clean Markdown using markpaste.
```bash
npx skills add paulirish/agent-skills --skill fetch-as-markdown
```

### 💬 [github-pr-comments](skills/github-pr-comments/SKILL.md)
Easily query for open discussions, review feedback, and comments on a GitHub pull request to resolve them directly from your agent workflow.
```bash
npx skills add paulirish/agent-skills --skill github-pr-comments
```

### 🔍 [google-ai-search](skills/google-ai-search/SKILL.md)
Run a Google Search query and capture the AI Overview response via CDP connection to Chrome.
```bash
npx skills add paulirish/agent-skills --skill google-ai-search
```

### 🔬 [heap-snapshot-inspection](skills/heap-snapshot-inspection/SKILL.md)
Provides expert guidance and step-by-step workflows for inspecting heap snapshots and resolving memory leaks in Chromium, Node.js, and Electron.
```bash
npx skills add paulirish/agent-skills --skill heap-snapshot-inspection
```

### ⚡ [hot-reload-chrome-ext](skills/hot-reload-chrome-ext/SKILL.md)
Sets up a zero-dependency hot-reloading system for Manifest V3 Chrome extensions to automatically refresh open pages and reload the extension when source files change.
```bash
npx skills add paulirish/agent-skills --skill hot-reload-chrome-ext
```

### 📖 [lexicon](skills/lexicon/SKILL.md)
Define, review, and audit a project's domain vocabulary across code and documentation to prevent terminology drift and conceptual confusion.
```bash
npx skills add paulirish/agent-skills --skill lexicon
```

### 🎨 [modern-css](skills/modern-css/SKILL.md)
Brings specialized knowledge for writing high-quality modern CSS (including View Transitions, Container Queries, Scroll-driven animations, Masonry, `:has()`, and more) and refactoring legacy styles.
```bash
npx skills add paulirish/agent-skills --skill modern-css
```

### 🔑 [npm-trusted-publishing](skills/npm-trusted-publishing/SKILL.md)
Expert walkthrough for setting up or debugging npm Trusted Publishing (OIDC) from GitHub Actions, handling secure credential-less publishing, provenance, and metadata validation.
```bash
npx skills add paulirish/agent-skills --skill npm-trusted-publishing
```

### 🏗️ [pauls-project-setup](skills/pauls-project-setup/SKILL.md)
Applies Paul's modern project stack conventions for new repos (pnpm, native node test runner, esbuild, buildless JSDoc type checking, etc.).
```bash
npx skills add paulirish/agent-skills --skill pauls-project-setup
```

### 🔎 [qmd-expert](skills/qmd-expert/SKILL.md)
Enables advanced usage of QMD (Quick Markdown Search) to run multi-query searches, retrieve deep contextual knowledge, and extract high-scoring chunk IDs.
```bash
npx skills add paulirish/agent-skills --skill qmd-expert
```
