# Planning & decision gates — phases 6 & 8

How to turn validated direction into an executable plan, and how to build the gate that
decides continue / pivot / stop. The user already runs a monthly → weekly → gate rhythm;
mirror it. Read any `Strategia tworzenia planów` and existing `Plan/` notes before
writing new ones.

## The rhythm

```
Decision criteria (the gate, defined first)
  └─ Monthly goal (measurable, one priority)
       └─ Weekly plans (fuel, main/medium/small goals, summary, replanning)
            └─ ... roll up to a review → the gate
```

Define the **gate first**, then the monthly goal that aims at it, then the weeks. Work
without a named endpoint drifts.

## Monthly goal

A monthly goal note states:

- **The one priority.** Everything serves it until it's done; secondary tracks move only
  if time is left over after the priority's weekly target. Name the priority explicitly
  and name what's deferred.
- **A measurable end state** for the last day of the month (e.g. "≥ N interviews logged",
  "beachhead chosen and justified from conversations", "persona v1 not v0").
- **A pointer to the decision gate** it feeds.
- **A buffer week**, ideally — the last week absorbs slippage rather than taking new work.
- **A month-end review** slot: what got done, what didn't, why, what rolls over.

Guard against the classic trap: don't let a mid-month change of priority quietly reset
the count. If the priority changes, say so in the plan and re-baseline the target — don't
pretend the old target still holds.

## Weekly plan

Each week note carries:

- **Fuel** — realistic hours available that week (account for holidays, other duties).
  Planning against fantasy capacity is how weeks silently fail.
- **Main goal** — the single most important outcome, usually a number that rolls up to
  the monthly goal.
- **Medium goals** — 1–2 supporting deliverables.
- **Small goals** — nice-to-haves, cut first when time runs short.
- **Summary** — filled at week's end: what happened.
- **Replanning** — what changes next week based on what actually happened.

Order goals by importance and state explicitly what gets cut first if time runs out. A
week where everything is equally important is a week with no plan.

## Build sequencing (phase 7, planned here)

When the plan reaches the build, sequence by **leverage and by the loop**:

- Slice the backlog by the **one offer loop**, not by module. Ship the thinnest slice
  that closes the loop for one customer.
- Keep an explicit **"what we're NOT building yet"** list next to the backlog — the same
  discipline that keeps the offer coherent keeps the backlog honest.
- Separate **unblock-the-team work** (needed regardless of market outcome — i18n, audit
  log, tests, releases) from **bet work** (justified only if discovery confirms it). The
  first can start immediately and keep the team fed; the second waits for the gate.
- Before a large rebuild, require a written analysis: what it costs, what it buys, how
  you'll measure it. "It'll be faster" without a number is not a plan.

## Decision gate (phase 8)

The gate is the whole point of the discipline: a pre-committed set of criteria and
outcomes, decided by a date, that says whether to continue, pivot, or stop. Structure it
as three outcomes:

- **Green — needs met, market confirmed.** You know the customer, the offer, and your
  position vs competition. Decision: build on and prepare for sale. Spell out the concrete
  next action and its deadline.
- **Yellow — needs met, market did not confirm the direction.** Two sub-cases land here
  the same way: (a) conversations revealed a *different* problem/segment (a real pivot),
  or (b) conversations revealed nothing anyone will pay for. Decision, made jointly by a
  date: extend one more cycle with a new, written threshold and budget, or close
  commercialization. The delivery work is done either way.
- **Red — the minimum wasn't delivered and the research didn't happen.** Nothing to
  evaluate. Close and return to the prior question.

Write the separation deliberately: **green and yellow are about the market; red is about
execution.** Recording them distinctly keeps "the market said no" from being mistaken for
"we failed to do the work" at review time.

### Setting good criteria

- Make each criterion **measurable and pre-committed** — decided before you see the
  results, so you can't move the goalposts.
- Tie the numeric thresholds to what the discovery phase can actually produce (interview
  counts, aggregates from the insights grid), not to aspiration.
- Re-baseline honestly if scope changed mid-cycle — a threshold set for one plan doesn't
  automatically carry to a changed one. If the plan changed for good reasons (e.g. a
  priority was reassigned from above), reflect that in the threshold rather than marking
  yourself failed against a target that no longer applies.
