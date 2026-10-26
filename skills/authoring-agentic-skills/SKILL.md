---
name: authoring-agentic-skills
description: >-
  Designs, writes, and reviews agent skills (SKILL.md plus optional references,
  subagent briefs, and scripts) so judgment stays with the agent and code is kept
  for the narrow jobs where variation is a bug. Use when creating a new skill,
  turning a workflow or conversation into a skill, adding a scripts/ directory or
  helper code to a skill, deciding whether a step should be a script or a subagent
  brief, or reviewing a skill that feels heavy, over-scripted, or brittle. Don't
  use for general code review outside skill directories or for writing a
  standalone subagent persona.
---

# Authoring Agentic Skills

The runtime for a skill is a capable agent. It runs shell commands, reads files, calls CLIs, discovers other skills, and spawns subagents. A skill exists to hand that agent the **context and judgment it lacks**: the goal, the criteria, the gotchas, the commands that work. It does not exist to replace the agent with a pipeline.

Models writing skills default the other way. They reach for Python, re-encode judgment as regexes and thresholds, wrap CLIs the agent could call directly, and ship thousands of lines that are brittle exactly where the task is fuzzy. Push against that default on every skill you write or review. Most good skills have no code at all, and when one does, the scripts are small.

## The script test

Write code for a step only when at least one of these is true. Otherwise, write instructions.

1. **Exact aggregation.** The step needs exact counts, ratios, or distributions across more material than an agent can reliably read and tally (e.g., punctuation rates across 200 documents). LLMs estimate; they don't count.
2. **Independent verification.** The step checks the agent's own output, and the check must be falsifiable: verbatim-quote matching, leak detection, schema validation, size budgets enforced as a gate. Don't let the model grade itself.
3. **Observed fragility.** You *watched* agents get a mechanical sequence slightly wrong across runs (a binary format, an auth handshake, an exact API call order). Speculative fragility doesn't count.
4. **Volume where the per-item decision is mechanical.** Thousands of items, and the decision per item really is a lookup or a transform rather than a judgment call.
5. **Repetition.** Agents independently wrote the same helper across several runs. Bundle it *after* seeing that, not before.
6. **Stateful orchestration invariants (`run_workflow`).** Multi-phase loops where prose rules decay as the context window grows—e.g., enforcing *"implement → commit → fresh cross-family reviewer → single fix pass → observer exit gate"*, invalidating downstream artifacts when upstream rules change, or rotating the conductor after N steps/compactions. Judgment stays in the `agent()` briefs; the state machine and hard gates belong in a `run_workflow` script, not `AGENTS.md` prose.

If a bundled helper script passes tests 1–5, keep it narrow: it computes or verifies and **prints data for the agent to interpret**. If a multi-agent loop passes test 6, put only the **control-flow invariant and gate checks** in the `run_workflow` script while leaving content and trade-off judgment inside each agent's prompt.

The test applies to code you **bundle** in `scripts/`, not to code the agent writes at runtime. Throwaway code written against the real data in front of it is often the best tool: the agent fetches a payload, looks at its actual shape, and writes a quick parser for this run. That survives format changes that would break a bundled parser, so the skill should encourage it rather than pre-build it.

## Smells: code that should be agent work

| You're about to write... | Do this instead |
| --- | --- |
| A subprocess wrapper around a CLI the agent already has | List the 2–4 real commands with concrete flags in SKILL.md. |
| A regex or keyword list to decide "is this relevant / real / finished / substantive" | State the criteria in prose, with the *why*. A subagent applies them and handles the cases your regex would miss. |
| Similarity thresholds, shingle indexes, fuzzy matching to find related material | Tell the agent to `rg` a few distinctive phrases and read what matches. |
| A parser hardcoded to an endpoint's JSON or HTML shape | Have the agent fetch a sample, inspect it, and write a throwaway parser. |
| Percentile sorts or heuristics to "pick representative examples" | Ask the agent to pick N and say why each one is representative. |
| A file-size, line-count, or existence checker | Inline `wc -c`, `ls \| wc -l`, `test -s` in the workflow. |
| A driver script that sequences a simple linear task | A numbered workflow in SKILL.md. The agent is the orchestrator. |
| All-caps `MUST`/`NEVER` prose trying to force a long-running orchestrator to spawn reviewers, wait for gates, or re-run downstream steps | A small `run_workflow` script that enforces the state machine and hard gates in code while passing judgment briefs to `agent()`. |
| Tuned constants (`0.12`, `2.2x`, `>= 40 chars`) | They're judgment pretending to be precision. Describe the intent instead. |
| Flags and modes for every variation | One default path and one escape hatch. |
| A shared `common.py` for scripts that barely exist | Delete it. Rule of three applies to skills too. |

A useful gut check: if the code's correctness depends on whether its heuristics match the agent's understanding of the goal, the agent should be doing it.

## Where things go

- **SKILL.md**: the goal and why it matters, the workflow, decision criteria, gotchas from real failures, exact commands, and how to verify success. Keep it lean enough that the agent reads all of it.
- **`references/`**: material loaded on demand: subagent briefs, long examples, domain detail, case studies. Link each file from SKILL.md with a sentence on when to read it.
- **Subagents**: fan-out of judgment work (harvesting, classifying, drafting, reviewing). This is usually where the code you were about to write belongs.
- **`scripts/`**: only what passed the script test. Zero dependencies, runnable directly (`node script.ts`, `python3 script.py`, native `sqlite3`), plain or JSON output, loud failures with actionable messages, no silent fallbacks.

For skills that pull data, **fetch once, then explore the copy**: save the raw response (API payload, export, page) to a scratch file in one step, and do all inspection, parsing, and formatting against that file. This keeps network calls, auth steps, and approval prompts out of the exploration loop.

## Write a brief instead of code

When a step is judgment work, replace the would-be script with a subagent brief. Give goals and criteria and let the subagent plan; don't hand it a recipe. A brief covers:

- **Goal**: what this step produces and why the overall skill needs it.
- **Where to look**: the sources, and the handful of commands that reach them.
- **Criteria**: what counts, what doesn't, and the reasoning, so edge cases generalize.
- **Output contract**: the exact file path and format to write. Have subagents write results to files rather than relying on return messages, which get lost to context compaction.
- **Budget and stop condition**: how much is enough.

For a worked example of a 3,000-line skill cut down to 300 lines by applying these rules, read [the over-scripting case study](references/over-scripting-case-study.md).

## Writing SKILL.md

- **The description is the trigger contract.** It's all the agent sees before deciding to load the skill. Start with a third-person capability statement, then `Use when...` with concrete scenarios, then `Don't use for...` to disambiguate from neighboring skills. Stay under 1024 characters, use `>-` rather than bare `>`, and leave out summaries of the body, paths, and flags.
- **Explain why instead of shouting.** A rule with its reason generalizes to cases the rule doesn't literally cover. Save MUST/NEVER for real safety constraints and irreversible actions.
- **Signal over noise.** Keep gotchas the agent can't discover by inspecting the data, exact commands, and the anti-patterns it falls into without warning. Cut:
  - what the model already knows ("validate your output", tutorials on common tools or formats)
  - sample JSON or schema trees, internal code-to-meaning mappings, and category lists the data already contains; the agent reads the real payload
  - large output templates; a checklist of fields to include works better
  - the history of approaches that failed; explain why current rules exist, not what you tried before
- **Defaults, and no guessing.** State a sensible default for each parameter (current user, current year, usual date range). When something required has no default, have the agent ask rather than invent a value.
- **Keep it short.** Aim for a SKILL.md under ~150 lines and move detail into `references/`. Once loaded, every line stays in context for the rest of the session.
- **Make every step verifiable.** Pair steps with a command, an expected output, or a concrete success criterion.
- **Generalize from incidents.** When a test run fails, write the general principle with open-ended examples (`e.g.`), not a patch for that one input.
- **One job per skill.** If the description needs "and" between unrelated capabilities, split it.

## Workflow

### Creating a skill

1. **Observe before writing.** Do the task once with an agent, or mine a past conversation where it happened. Note where the agent went wrong, what context it was missing, and what it rebuilt from scratch. That's the raw material for the skill.
2. **Draft SKILL.md with zero scripts.** Write the workflow, criteria, and commands. Put subagent briefs in `references/` if they're long.
3. **Beta test on a real input.** Run the skill with a fresh subagent and read the trajectory, not just the final output.
4. **Fix failures with instructions first.** Most failures are missing context or unclear criteria.
5. **Add code only for failures that pass the script test**, and keep each script single-purpose.

### Reviewing a skill (including one you just wrote)

1. Inventory: `wc -l` every file, and list each script's functions.
2. Run every script, function by function, through the script test. Classify each as **keep**, **convert to brief/instructions**, or **replace with a one-liner**.
3. Check the description against the trigger rules above.
4. Report the classification with line counts and the proposed net delta, then apply it if asked.

As a rough budget, a personal skill whose scripts exceed ~300 lines total should justify each one against the script test. That's a smell threshold, not a hard cap.
