---
name: grizzled-red-teaming
description: >-
  Critically reviews code and architecture plans by invoking the "Grizz" subagent, a grizzled
  Principal Engineer. Use when you need a skeptical, production-hardened review of a file, a
  system design, or a plan you haven't built yet — looking for wrong premises, architectural
  smells, security flaws, or over-engineering.
  Triggers on requests like "red-team [file]", "review [topic] with Grizz", or "grizzled-red-teaming [input]".
---

# Grizzled Red Teaming

Invokes `grizz` — a grizzled, pragmatic Principal Software Engineer — to review code, architecture, or a plan as an adversary rather than a collaborator.

Grizz **recommends**; it does not edit. For a skill that performs the cleanup, use `janitor`.

> [!IMPORTANT]
> Grizz is a **statically registered agent**, defined at [grizz.md](../../agents/grizz.md) and loaded from disk by the runtime.
>
> Do **not** call `define_subagent`. Invoke it directly by name: `invoke_subagent(TypeName="grizz", ...)`.
>
> This is deliberate. Grizz's persona and its read-only tool whitelist are enforced by the runtime, and neither can be rewritten at spawn time. See [why](#why-the-persona-lives-elsewhere).

## Workflow

1.  **Identify the target.** A file, a directory, a plan, or a described concept ("the messaging flow").

2.  **Read the target.** If it's a file or directory, `view_file` it. Grizz has read tools of its own and can follow references, but it starts from what you give it.

3.  **Assemble the review packet.** Four fields, all required:

    | Field | Content |
    | --- | --- |
    | `TARGET` | The code, plan, or system under review. |
    | `INTENT` | What this is trying to accomplish, and why. |
    | `ABANDONED` | Approaches tried and dropped. |
    | `OUT OF SCOPE` | What was deliberately left out. |

    > [!WARNING]
    > `unknown` is a legal value for `INTENT`, `ABANDONED`, and `OUT OF SCOPE` — and it is the **required** value when you don't actually know. Never infer or invent intent to fill the field. A fabricated premise sends Grizz to interrogate something that was never true, which is worse than no premise at all.

    If the user is present and the intent is genuinely unclear, ask them. One question is cheaper than a wasted review.

4.  **Invoke.** `invoke_subagent(TypeName="grizz", Role="Red Team Critic", Prompt=<the four-field packet>)`.

5.  **Report.** Return the critique as-is. Do not soften it, and do not drop the `Residual Risk` or `Could Not Verify` sections — those are the anti-complacency artifacts, and they're the first thing a summarizer throws away.

6.  **Log the reaction.** Once the user responds, append one line to `~/.gemini/grizz-log.md`:

    ```
    YYYY-MM-DD | <target> | <user's verbatim reaction>
    ```

    Verbatim, not classified. Silence is not acceptance — if the user didn't react to a finding, don't log one. After enough reviews this shows which of Grizz's five responsibilities actually earn their keep, so the prompt can be rebalanced on evidence.

## Use it at plan time

The cheapest possible redirect is the one that happens before the code exists. Grizz is at its best reviewing a plan, a design sketch, or a one-paragraph description of an approach — responsibility #1 (interrogate the premise) is worth far more then than it is after the thing is built.

When invoked on a plan, `TARGET` is the plan text and `INTENT` is usually well known, which is the ideal case.

## Why the persona lives elsewhere

This skill used to carry the full persona inline and hand it to `define_subagent` on every run. That was measured and abandoned.

Across 33 recovered spawns, **zero** reproduced the prompt faithfully. The orchestrator treats an inline prompt as a template to improvise on, and prunes whatever looks least task-relevant — which is precisely the calibration (severity bar, null action, mandatory closing sections). Load-bearing instructions went missing 9–36% of the time. Separately, 18% of spawns handed this read-only reviewer `write_to_file` and `run_command`.

A static definition eliminates both: the runtime loads the prompt and the tool list, and the orchestrator cannot touch either.

Per-task context belongs in the **review packet**, not in a rewritten persona. That's what step 3 is for.

## Example

User: `grizzled-red-teaming parser.ts`

Agent:
1.  Reads `parser.ts`.
2.  Builds the packet — `TARGET` is the file; `INTENT`/`ABANDONED`/`OUT OF SCOPE` are `unknown` unless the user said otherwise.
3.  Calls `invoke_subagent(TypeName="grizz", ...)`.
4.  Returns Grizz's critique, severity tags and closing sections intact.
