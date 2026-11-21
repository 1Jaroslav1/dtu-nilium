---
name: hypothesis-research
description: Research product hypotheses from a startup-builder hypotheses tracker with desk research (web, papers, registries, regulators), then record a verdict, evidence and sources and update the tracker. Use when the user says "research the hypotheses", "check S1/S2", "verify H3", "is this true?", "find evidence for…", or points at a "🧪 Hypotheses — tracker" file. Works on any discovery folder that follows the startup-builder layout (e.g. cough-tracker/). Not for running customer interviews; for those it prepares what to ask instead.
---

# Hypothesis research

This skill handles the **desk half of discovery** in the startup-builder arc (Aulet steps 20–21: identify and test key assumptions). It takes hypotheses from a tracker, researches them honestly, and writes the result back in the same format the tracker uses.

The tone is the same as startup-builder: **evidence over opinion, look as hard for the refutation as for the confirmation, and be willing to kill a direction.**

## First move — always

1. **Find the discovery folder.** Look for `01 🧪 Hypotheses — tracker.md` in the working directory (e.g. `cough-tracker/`). If there are several, ask which project. Read its `README.md` to see where it is in the arc.
2. **Read the tracker and its neighbours:** `04 🎯 Segmentation & Beachhead`, `06 📦 Offer & use cycle` and `07 ⚔️ Competition map`. Research that ignores what's already known repeats work and misses contradictions.
3. **Pick the hypotheses.** If the user named them (e.g. "S1, H4"), use those. Otherwise take every desk hypothesis (`S#`) not marked `done`. Work through them one at a time, not as a blended mush.

## Desk vs conversation hypotheses: respect the split

The tracker separates **conversation hypotheses (H#)** from **desk hypotheses (S#)** on purpose.

- **S# (desk):** research them fully. This is what the skill is for.
- **H# (conversation):** desk research **cannot confirm or refute them**, because they're about what *these* customers do. Don't set a verdict. Instead, produce:
  - **Proxy evidence:** literature or public data suggesting what to expect, labelled as a proxy.
  - **Sharper interview questions:** past-behaviour, Mom Test style, added to `02 🎤 Interview script`.
  - If the research shows the H# is already answered publicly (e.g. a regulation decides it), propose turning it into an S# and log the change.

Never write "H1 confirmed" based on web pages. That's exactly the "opinion as evidence" failure this whole methodology exists to prevent.

## Research protocol (per hypothesis)

### 1. Pre-commit before searching

Write these down in the evidence note **before** running any search, so the goalposts can't move:

- The hypothesis, restated so it's falsifiable (who, what, how much).
- **What would count as confirmation**, concretely (e.g. "≥1 CE/FDA-cleared product sold to clinics at < €X").
- **What would count as refutation.**
- What each outcome changes (copy it from the tracker's "What confirmation gives / What refutation gives" columns). If both outcomes lead to the same action, say so and recommend deleting the hypothesis instead of researching it.

### 2. Search for both sides

- Run several searches **in parallel**. Use `standard` mode first and `extended` only when results are thin, outdated or niche.
- Write at least one query that hunts for the **refutation** ("X failed", "X not accurate", "X discontinued", "no evidence X").
- For anything regulatory, go to the source: the FDA 510(k) database, EUDAMED / notified-body info, the EU MDR text. Don't rely on a press release.
- When a search result is a summary, fetch the actual page (web-fetch agent) for the claims that decide the verdict.
- Time-box it: about 1 hour of effort per hypothesis, matching the tracker's "Time" column. Stop when the verdict is clear, not when every link is read.

### 3. Grade every source

| Tier | Source type | How to use |
|---|---|---|
| A | Peer-reviewed papers, regulator databases, trial registries, official docs (e.g. hardware datasheets) | Can decide a verdict |
| B | Independent journalism, conference reviews, university press | Supports a verdict |
| C | Company press releases, vendor blogs, app-store listings | Shows what a company *claims*. Label it "vendor claim" |
| D | Market-research report summaries, SEO listicles | Context only. Never decides a verdict, and numbers often conflict |

Label every number `[DATA]` (tier A–B, with a link) or `[ESTIMATE]` (your reasoning, or tier C–D). When sources disagree, report both values and say which one you'd plan on (usually the conservative one).

### 4. Verdict

Use exactly one:

- **confirmed:** the pre-committed confirmation criterion is met by tier A–B evidence.
- **refuted:** the refutation criterion is met by tier A–B evidence.
- **partly:** mixed, or confirmed only for a subset (say which).
- **inconclusive:** not enough tier A–B evidence. Name the cheapest next step that would decide it: a hands-on test, an email to a vendor, an interview question.

Then write **what it changes**: the concrete effect on the beachhead, offer, competition map or gate, in 1–3 sentences. A verdict with no consequence means the hypothesis shouldn't have been in the tracker.

## Writing results back

Match the tracker's existing language, heading style, emoji numbering and footer (see startup-builder's file conventions). Concretely:

1. **Evidence note:** create `research/<ID> — <short title>.md` inside the discovery folder, using `templates/evidence-note.md` from this skill. One note per hypothesis.
2. **Tracker:**
   - S# rows: replace the "How to check" cell with a one-line verdict + key number + link to the evidence note, and set Time to `done`.
   - H# rows: leave Status as `to verify` and add the proxy finding in "Justification", marked "proxy (desk)".
   - Add a **Change log** row: date, what changed, why.
3. **Downstream artifacts:** if a verdict changes another file, update it (competitors → `07`, segment scores → `04`, evidence for value → `06`, gate leaning → `09`) and note it in the change log. Don't rewrite conclusions that depend on interviews.
4. **Sources:** every evidence note ends with a `## Sources` list of markdown links. In chat, end the answer with the sources too.

Don't commit unless the user asks.

## End of every run

Report in chat, briefly:

- A table: ID · verdict · key evidence (one line) · what it changes.
- **The gate implication:** does the desk evidence lean green, yellow or red, and why. Desk evidence alone can never make it green, because green needs conversations.
- **The next highest-leverage move:** usually the cheapest test of the most decision-relevant open question. Also name what you deliberately didn't research.

## Traps to avoid

- **Confirmation hunting:** only querying for the answer you hope for. Always run the refutation query.
- **Vendor claims as facts:** "validated in 49 trials" is a tier C claim until a tier A source backs it.
- **Averaging conflicting market sizes:** report the range, pick conservative, and explain.
- **Scope creep:** finding something interesting next to the hypothesis and researching that instead. Note it as a *new* hypothesis in the tracker's log, don't chase it.
- **Researching an H# into a verdict:** see above.
