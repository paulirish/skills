# paulirish/skills

Agent skills and CLI helpers for coding agents.

```bash
npx skills add paulirish/skills --skill <skill-name>
```

## Code Review, Architecture & Skills

- **[grizzled-red-teaming](skills/grizzled-red-teaming/SKILL.md)** (`grizz.md`). Adversarial principal-engineer review of code, diffs, or plans. Interrogates the premise first, requires concrete failure scenarios for blockers, and checks for vacuous tests/validators.
- **[accretion-bouncer](skills/accretion-bouncer/SKILL.md)** (`accretion_bouncer.md`). Challenges additive complexity (single-caller helpers, string round-trips, multi-pass cleanup loops, test-only shims) and proposes structural deletions.
- **[lexicon](skills/lexicon/SKILL.md)**. Defines and audits a project's domain vocabulary across code and docs to catch terminology drift and synonym sprawl.
- **[authoring-agentic-skills](skills/authoring-agentic-skills/SKILL.md)**. How to write and trim `SKILL.md` skills so judgment stays with the agent and bundled scripts are kept to narrow, deterministic jobs.

## Web, Chrome & Performance

- **[modern-css](skills/modern-css/SKILL.md)**. Modern CSS patterns (View Transitions, Container Queries, scroll-driven animations, anchor positioning, `:has()`, `light-dark()`) and legacy style refactors.
- **[buildless-types](skills/buildless-types/SKILL.md)**. Type safety without a build step: JSDoc + `tsc --noEmit` in the browser and native TypeScript (erasable syntax) in Node.js.
- **[heap-snapshot-inspection](skills/heap-snapshot-inspection/SKILL.md)**. Inspecting V8 `.heapsnapshot` files and tracking down retainers/memory leaks with `heap-snapshot-toolkit`.
- **[hot-reload-chrome-ext](skills/hot-reload-chrome-ext/SKILL.md)**. Zero-dependency SSE hot-reload server + client snippet for Manifest V3 Chrome extensions.
- **[fetch-as-markdown](skills/fetch-as-markdown/SKILL.md)**. Renders a URL in headless Playwright and extracts clean Markdown via [`chromium-clean-markdown`](https://github.com/paulirish/chromium-clean-markdown).
- **[google-ai-search](skills/google-ai-search/SKILL.md)**. Runs a Google Search over CDP and extracts the AI Overview response + citations as Markdown.

## Dev Workflow & Tooling

- **[github-cli](skills/github-cli/SKILL.md)**. Non-obvious `gh` workflows, low-noise Actions watching (`--interval 60`), GraphQL PR review thread extraction ([gather-reviews.ts](skills/github-cli/scripts/gather-reviews.ts)), and `gh stack`.
- **[npm-trusted-publishing](skills/npm-trusted-publishing/SKILL.md)**. Setting up and validating passwordless npm Trusted Publishing (OIDC + provenance) from GitHub Actions.
- **[pauls-project-setup](skills/pauls-project-setup/SKILL.md)**. Stack defaults for new Node/TS projects (`pnpm`, native `node --test`, Node >= 24 native TS execution, `tsdown`/`esbuild`).
- **[qmd-expert](skills/qmd-expert/SKILL.md)**. Multi-query searches (`lex` + `vec`) and chunk retrieval against local markdown knowledge bases with `qmd`.

## Standalone Skill Repos

- **[paulirish/chromium-clean-markdown](https://github.com/paulirish/chromium-clean-markdown)**. Extracts noise-free reader Markdown using Chromium's on-device ML `Page.getAnnotatedPageContent` (`npx skills add paulirish/chromium-clean-markdown`).
