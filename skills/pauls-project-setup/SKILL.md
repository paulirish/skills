---
name: pauls-project-setup
description: Paul's modern stack conventions for new projects (pnpm, native node test, esbuild, buildless-types, hardened GitHub Actions with zizmor). Consult when starting a new project, repository, or CI workflow.
---

# Paul's Project Setup

When setting up a new project or initializing a repository, use this modern stack and these specific configuration conventions.

## Core Stack Strategy

We use this specific stack to maximize execution speed, minimize configuration overhead, and avoid slow build steps during development.

- **Package Manager**: `pnpm` (for strict dependency resolution and speed)
- **Runtime**: Node.js 24+ (`"engines": { "node": ">=24" }` in `package.json`) for native TypeScript execution, `Map.groupBy`, and modern V8 features.
- **Type Checking**: `buildless-types` standard (JSDoc or Erasable Syntax with `tsc --noEmit` to get type safety without the overhead of a build step)
- **Testing**: Node.js native test runner (`node --test`)`. We avoid Jest entirely because it is notoriously slow and requires complex transpilation pipelines.
- **Bundler / Dev Server**: `esbuild` (for fast Node.js tooling compilation).
- **Linting**: `oxlint` (for ultra-fast linting without ESLint overhead).
- **Isomorphic Core**: Keep core orchestration, logic, and math in a browser-agnostic library testable directly in Node.js. The Web UI should be a thin presentation layer. This allows coding agents to iterate and test logic instantly via CLI/Node unit tests without browser automation overhead (which is ~20x slower).

## Configuration Standards

Apply these baseline settings to enable the preferred workflow.

### 1. `package.json` Scripts & Settings

Ensure the project is an ES Module and defines standard scripts inspired by Paul's existing projects:

```json
{
  "type": "module",
  "engines": {
    "node": ">=24"
  },
  "scripts": {
    "test": "pnpm run typecheck && pnpm run test:node",
    "test:node": "node --test test/**/*.test.js",
    "typecheck": "tsc --noEmit",
    "lint": "oxlint",
    "preflight": "pnpm typecheck && pnpm lint && pnpm test"
  }
}
```

### 2. Type Safety (`buildless-types`)
- Use modern Node.js features to run `.ts` files directly using erasable syntax, or use complete JSDoc annotations in `.js` files.
- The `tsconfig.json` should align with the `buildless-types` skill constraints (e.g., `erasableSyntaxOnly: true`, `verbatimModuleSyntax: true`, `allowImportingTsExtensions: true`).
- Execute files directly with `node script.ts`. **Do not use** tools like `npx tsx` or `ts-node`.

### 3. Testing
- Prefer the built-in Node.js test runner (`node --test`) for unit and integration testing. It requires zero configuration and runs extremely fast.
- If a richer ecosystem or browser-like testing environment is required, use `vitest`.
- Avoid `jest` completely due to its performance overhead and configuration complexity.

### 4. Bundling
- Use `esbuild` for fast Node.js CLI tooling compilation or generic JS bundling.

### 5. Linting
- Use `oxlint` for ultra-fast linting. Configure it with a `.oxlintrc.json` file in the root of the project using the following template:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "env": {
    "node": true,
    "browser": true,
    "builtin": true
  },
  "rules": {
    "no-unused-vars": [
      "error",
      {
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_",
        "caughtErrorsIgnorePattern": "^.*$"
      }
    ],
    "no-explicit-any": "error",
    "typescript/no-restricted-types": [
      "error",
      {
        "types": {
          "unknown": "Restrict weak/imprecise unknown type usages."
        }
      }
    ]
  }
}
```

### 6. GitHub Actions & CI Hardening
When adding `.github/workflows/*.yml`, harden them for [Zizmor](https://docs.zizmor.sh/):

- **Pin every `uses:` to a full 40-char commit SHA** with the version tag as a trailing comment (tags are mutable; SHAs are not):
  ```yaml
  - uses: actions/checkout@3d3c42e5aac5ba805825da76410c181273ba90b1 # v7.0.1
    with:
      persist-credentials: false
  ```
- **Least-privilege permissions**: set `permissions: contents: read` at the workflow level (or `permissions: {}` at workflow level and grant write scopes per-job only where needed).
- **Avoid persisted credentials (`artipacked`)**: set `persist-credentials: false` on `actions/checkout` unless a subsequent step explicitly needs to push commits or tags.
- **Named jobs, concurrency, Node 24 actions**: give every job a `name:`, cancel superseded PR runs with `concurrency`, and set `FORCE_JAVASCRIPT_ACTIONS_TO_NODE24: true`.
- **Audit locally with `zizmor`** before committing workflow changes (`--fix=all` auto-pins bare tags and adds `persist-credentials: false`, though always review its diff):
  ```sh
  uvx zizmor@1.25.2 --persona=pedantic --gh-token="$(gh auth token)" .github/
  ```
- **Keep pinned SHAs updated with Dependabot** in `.github/dependabot.yml` (monthly schedule + cooldown avoids noise and supply-chain churn):
  ```yaml
  version: 2
  updates:
    - package-ecosystem: "github-actions"
      directory: "/"
      schedule:
        interval: "monthly"
      open-pull-requests-limit: 1
      cooldown:
        default-days: 14
  ```
