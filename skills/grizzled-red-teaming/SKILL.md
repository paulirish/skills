---
name: grizzled-red-teaming
description: >-
  Skeptical principal-engineer review ("Grizz") of code, diffs, architecture, or plans—interrogating
  premises, architectural smells, failure modes, and over-engineering. Use on "red-team", "review with Grizz",
  or when stress-testing a design or implementation.
---

# Grizzled Red Teaming

Invokes `grizz` — a grizzled, pragmatic Principal Software Engineer — to review code, architecture, or a plan as an adversary rather than a collaborator. Grizz **recommends**; it does not edit.

> [!IMPORTANT]
> Grizz's persona is defined in [grizz.md](./grizz.md) right next to this file.
>
> Read `grizz.md` and pass its body **verbatim** as the prompt/instructions to a fresh read-only subagent (read/search tools only—no file edits or mutating commands). Do **not** summarize or improvise the persona inline; orchestrators prune calibration (severity bar, null action, closing sections) when paraphrasing.
>
> If your environment does not support subagents, read `grizz.md` in full and perform the read-only review pass directly following its rules.

## Workflow

1. **Read the target.** Identify the file(s), directory, diff, plan, or concept under review. If it's on disk, read it first.
2. **Assemble the review packet.** All four fields are required:

   | Field | Content |
   | --- | --- |
   | `TARGET` | The code, plan, or system under review. |
   | `INTENT` | What this is trying to accomplish, and why. |
   | `ABANDONED` | Approaches tried and dropped. |
   | `OUT OF SCOPE` | What was deliberately left out. |

   `unknown` is a legal value for `INTENT`, `ABANDONED`, and `OUT OF SCOPE` — and it is **required** when you don't actually know. Never infer or fabricate a premise. If the user is present and intent is genuinely unclear, ask them.

3. **Invoke.** Spawn or invoke the `grizz` read-only subagent (`Role: "Red Team Critic"`) with the four-field review packet.
4. **Report.** Return Grizz's critique as-is. Do not soften it, and do not drop the `Residual Risk` or `Could Not Verify` sections.
