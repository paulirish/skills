# Case study: a writing-voice skill, 3,000 lines → 300

A skill for building a personal writing-voice guide mines a user's documents, comments, and chat for real writing samples, measures their style, and generates a voice guide that's checked against held-out samples. The first version shipped about 3,000 lines of Python across 9 scripts. A review against the script test cut it to 2 scripts and about 300 lines, and moved the rest into subagent briefs.

## What got converted to agent work

| Script responsibility | Why it was code | Why an agent does it better |
| --- | --- | --- |
| Cross-referencing agent drafts against shipped documents (~750 lines) | An inverted 5-word shingle index, `SequenceMatcher` thresholds (`0.12`, `0.985`), a `2.2x` paragraph window, and regexes over transcript files | A subagent picks 2–3 distinctive phrases from the shipped doc, `rg`s the transcript directory for them, and reads the draft next to the final. It notices when a draft was reorganized; the shingle heuristic guessed. |
| Harvesting docs, comments, and chat (~670 lines) | Subprocess wrappers around the Docs and Chat CLIs, title-filter regexes, character-length thresholds | Harvester subagents already know those CLIs. The brief lists the four commands and the five corpus criteria (written for an audience, finished, mostly the user's own prose, pre-AI baseline vs. later edits). A subagent can tell a real design doc from a scratchpad; a title regex can't. |
| Mining steering prompts from agent transcripts (~120 lines) | A two-pass scanner with a 30-word keyword regex (`rewrite\|concise\|fluff\|tone...`) | A subagent searches for writing corrections, reads the surrounding steps, discards false positives like code refactors that happen to say "rewrite", and summarizes the recurring editing rules. |
| Holdout selection and size budgets (~260 lines) | A 60th–80th percentile word-count sort to pick holdout files, plus a script to check file sizes and concatenate prompts | Picking 2 representative docs to hold out is one agent decision with a stated reason. Size budgets are `wc -c`. |

## What stayed code, and why

- **Fingerprint measurement (~130 lines).** Exact per-mode ratios across the whole corpus: sentences per paragraph, words per sentence, lowercase sentence starts, dropped apostrophes, per-1k punctuation rates, and confirmed zero counts for banned words. This is exact aggregation; an agent reading samples would estimate and drift.
- **Lint and verify (~180 lines).** A mechanical anti-slop linter calibrated against the user's real pre-AI writing, plus a gate that every quoted example in the generated guide appears verbatim in the training corpus and that no 50-character substring leaked from the holdout set. This is independent verification of the agent's own output, so the agent can't be the one checking it.

## Lessons

- **The heavy code was all in the fuzzy parts.** Every heuristic constant was a guess at a judgment call the agent could just make.
- **CLI wrappers add nothing.** If the agent already has the CLI, the skill needs the commands and the criteria, not a Python layer around them.
- **The surviving scripts compute and verify; they don't decide.** They print numbers and pass/fail results, and the agent interprets them.
- **The over-scripting came from the authoring model's default, not from the task.** Nobody asked for 3,000 lines. Run the script test while drafting, not after the review.
