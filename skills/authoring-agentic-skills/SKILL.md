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

If a script passes the test, keep it narrow: it computes or verifies and **prints data for the agent to interpret**. It doesn't decide what matters, choose what to include, or orchestrate the workflow.

## Smells: code that should be agent work

| You're about to write... | Do this instead |
| --- | --- |
| A subprocess wrapper around a CLI the agent already has | List the 2–4 real commands with concrete flags in SKILL.md. |
| A regex or keyword list to decide "is this relevant / real / finished / substantive" | State the criteria in prose, with the *why*. A subagent applies them and handles the cases your regex would miss. |
| Similarity thresholds, shingle indexes, fuzzy matching to find related material | Tell the agent to `rg` a few distinctive phrases and read what matches. |
| Percentile sorts or heuristics to "pick representative examples" | Ask the agent to pick N and say why each one is representative. |
| A file-size, line-count, or existence checker | Inline `wc -c`, `ls \| wc -l`, `test -s` in the workflow. |
| A driver script that sequences the steps | A numbered workflow in SKILL.md. The agent is the orchestrator. |
| Tuned constants (`0.12`, `2.2x`, `>= 40 chars`) | They're judgment pretending to be precision. Describe the intent instead. |
| Flags and modes for every variation | One default path and one escape hatch. |
| A shared `common.py` for scripts that barely exist | Delete it. Rule of three applies to skills too. |

A useful gut check: if the code's correctness depends on whether its heuristics match the agent's understanding of the goal, the agent should be doing it.

## Where things go

- **SKILL.md**: the goal and why it matters, the workflow, decision criteria, gotchas from real failures, exact commands, and how to verify success. Keep it lean enough that the agent reads all of it.
- **`references/`**: material loaded on demand: subagent briefs, long examples, domain detail, case studies. Link each file from SKILL.md with a sentence on when to read it.
- **Subagents**: fan-out of judgment work (harvesting, classifying, drafting, reviewing). This is usually where the code you were about to write belongs.
- **`scripts/`**: only what passed the script test. Zero dependencies, runnable directly (`node script.ts`, `python3 script.py`, native `sqlite3`), plain or JSON output, loud failures with actionable messages, no silent fallbacks.

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
- **Signal over noise.** Keep gotchas, exact commands, and the anti-patterns the agent falls into without warning. Cut what the model already knows ("validate your output", explanations of common tools).
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
