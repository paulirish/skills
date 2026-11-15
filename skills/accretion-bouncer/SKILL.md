---
name: accretion-bouncer
description: >-
  Challenges and collapses additive code bloat, translation ceremony, multi-pass
  cleanup loops, and single-caller helper sprawl by invoking the "accretion_bouncer"
  subagent. Use when a feature or refactor added disproportionate lines of code,
  when reviewing a diff or file for over-engineering, or when asked to "run accretion
  bouncer", "bounce accretion", or "trim ceremony".
---

# Accretion Bouncer

Invokes `accretion_bouncer` to audit recent changes or files for additive bloat—challenging why that much mechanism exists at all and finding the reframing that makes whole helpers, conversion passes, or cleanup loops disappear.

> [!IMPORTANT]
> `accretion_bouncer`'s persona is defined in [accretion_bouncer.md](./accretion_bouncer.md) right next to this file.
>
> Read `accretion_bouncer.md` and pass its body **verbatim** as the prompt/instructions to a fresh read-only subagent. Do **not** rewrite, summarize, or improvise its persona inline.
>
> If your environment does not support subagents, read `accretion_bouncer.md` in full and perform the read-only audit directly under its rules.

## Workflow

1. **Identify the target.**
   - By default, target recent changes (`git diff`, `git show HEAD`, or the branch diff against `origin/main`), or whatever files/commits the user named.

2. **Invoke.**
   - Spawn or invoke the `accretion_bouncer` read-only subagent (`Role: "Accretion Bouncer"`) and pass it the file paths or git range and a one-line summary of what the change is trying to accomplish so it can read the full files and surrounding callers.

3. **Bounce or report.**
   - If the user asked for a **review**, return `accretion_bouncer`'s findings and concrete replacement code directly.
   - If the user asked to **clean up / bounce the accretion**, apply the reframings in place, run the relevant tests to confirm behavioral parity, and report the net line delta.
