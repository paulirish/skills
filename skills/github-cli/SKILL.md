---
name: github-cli
description: >-
  Non-obvious GitHub CLI (`gh`) workflows, newer commands, and `gh stack` usage.
  Use when running `gh` against GitHub (Actions watches, PR review threads,
  stacked PRs, or remote repo reads). Don't use for plain local `git` operations.
---

# GitHub CLI (`gh`)

Targeted guidance for `gh` (`v2.104.0`) and `gh stack` (`github/gh-stack` `v0.3.0`)—focusing on agent gotchas, newer commands, and bundled tooling rather than basic `gh` syntax.

## Watching GitHub Actions for updated status

Check every 60 seconds (`--interval 60`) so polling does not flood the context window (`gh run watch` defaults to 3s; `gh pr checks --watch` defaults to 10s).

```bash
# Watch an Actions run without flooding context
gh run watch 24320093398 --interval 60 --repo paulirish/guidance
gh run watch <run-id> --interval 60 --compact --exit-status --repo <owner/repo>

# Watch PR checks
gh pr checks <pr> --watch --interval 60 --fail-fast
```

## Reading PR Comments & Review Threads

Prefer the bundled GraphQL script over `gh pr view --comments`: it returns inline review threads with `isResolved` status and diff hunk context, top-level review summaries, and general PR comments as Markdown.

```bash
node scripts/gather-reviews.ts <owner/repo> <pr_number>
```

## Stacked PRs (`gh stack` extension)

`gh stack` (`github/gh-stack`) manages local branch stacks and GitHub stacked PRs. Pass `--auto` / `--yes` in non-interactive agent runs to avoid opening TUI editors or prompts (`gh stack view --short` and `--json` are safe read-only inspections).

```bash
# Inspect current stack
gh stack view --short
gh stack view --json

# Start or adopt a stack, then layer branches
gh stack init [branches...] [--base <trunk>]
gh stack add [branch] [-A -m "commit msg"]

# Submit / update PRs non-interactively (creates drafts unless --open)
gh stack submit --auto [--open] [--no-atomic]

# Reconcile, rebase, and push after upstream/base changes (prune merged locals)
gh stack sync --prune [--accept-base-change] [--no-atomic]
gh stack rebase [--downstack | --upstack | --no-trunk | --continue | --abort]

# Link existing PRs/branches into a stack without local tracking
gh stack link <pr-or-branch>... [--base <branch>]

# Atomically merge stack (or up to a PR/stack number) headlessly
gh stack merge [<pr-or-stack-num>] --yes --squash   # or --merge / --rebase

# Navigate stack: up, down, top, bottom, trunk, switch
```

## Newer `gh` Commands & Flags (post-cutoff)

- **Read remote files/dirs without cloning** (preview):
  ```bash
  gh repo read-file <path> --repo owner/repo [--ref branch-or-sha] [-o local-path]
  gh repo read-dir [<path>] --repo owner/repo [--ref branch-or-sha]
  ```
- **Check out a PR into a git worktree**:
  ```bash
  gh pr checkout <pr> --worktree ../wt-pr
  ```
- **Attach local images/videos** (up to 50) on `gh issue` or `gh pr` (`create`, `edit`, `comment`):
  ```bash
  gh pr create --attach './before.png#Before fix' --attach ./after.png
  ```
- **Issue types & sub-issues**: `gh issue create|edit --type Bug --parent 100` and `gh issue edit 100 --add-sub-issue 123`.
- **Delete private repo with forks non-interactively**: `gh repo delete owner/repo --yes --accept-cascading-deletion-of-private-forks` (required even with `--yes`).
- **Expiring OAuth tokens**: `gh auth login --expiring` / `gh config set expiring_credentials enabled` (never cache `gh auth token` output across runs).
- **Other built-in command groups** (run `<cmd> --help` when needed): `gh discussion` (preview), `gh skill` (preview: `search`/`preview`/`install --allow-hidden-dirs`/`list`/`update`/`publish`), `gh agent-task` (preview), `gh attestation`, `gh ruleset`, `gh status`, `gh copilot` (preview).

## High-Value `gh` Gotchas

- `gh api --paginate --jq '...'` filters **per page**; add `--slurp` when aggregating or indexing across pages.
- `gh api`: `-f` sends raw strings; `-F` coerces ints/bools/`null` and reads `@file` (or `-` for stdin).
- `gh pr merge` requires an explicit method (`-s`/`-m`/`-r`) in non-interactive runs.
- `gh pr list --json` / `gh issue list --json`: pass `--json` alone (or an invalid field) to print valid field names.
