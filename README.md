A subset of my agent skills that don't suck.

```bash
npx skills add paulirish/skills --skill <skill-name>
```

## Code Review, Architecture & Skills

- **[grizzled-red-teaming](skills/grizzled-red-teaming/SKILL.md)** aka "Grizz". Adversarial reviewer. Interrogates the premise (XY problem), and more. He's a pain in the ass sometimes. :) 
- **[accretion-bouncer](skills/accretion-bouncer/SKILL.md)** Agents solve problems by adding code (thus "accretion"). Never taking away. Like a burly bouncer at the door, this review agent challenges complexity and looks to solve the problem at a lower level, reducing the size of the patch.
- **[lexicon](skills/lexicon/SKILL.md)**. If you've noticed inconsistent terminology infecting your codebase, this corrals it. 
- **[authoring-agentic-skills](skills/authoring-agentic-skills/SKILL.md)**. Agents typically overcomplicate scripts. This enforces a good balance between the agentic components and the deterministic scripted bits.

## Web, Chrome & Performance

- **[buildless-types](skills/buildless-types/SKILL.md)**. Modern type safety without a build step. Erasable syntax in node.
- **[hot-reload-chrome-ext](skills/hot-reload-chrome-ext/SKILL.md)**.

## Dev Workflow & Tooling

- **[github-cli](skills/github-cli/SKILL.md)**. 2026 models mostly know `gh` CLI basics. This fills in the gaps: context-window-friendly polling, better review thread extraction, and `gh stack` usage.
- **[npm-trusted-publishing](skills/npm-trusted-publishing/SKILL.md)**. Set up passwordless npm Trusted Publishing (OIDC + provenance) w/ GitHub Actions. 
- **[pauls-project-setup](skills/pauls-project-setup/SKILL.md)**. My personal defaults for new Node/TS projects. pnpm, native `node --test`, node >=24 native TS, tsdown, esbuild, oxlint, oxfmt).

## Standalone Skill Repos

- **[paulirish/chromium-clean-markdown](https://github.com/paulirish/chromium-clean-markdown)**. Extracts noise-free reader Markdown using Chromium's on-device ML `Page.getAnnotatedPageContent` (`npx skills add paulirish/chromium-clean-markdown`).

