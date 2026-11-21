# Discovery playbook — phases 1–5

How to actually run the customer-and-offer half of the arc. This is where most products
live or die. The user's vault already contains theory notes (Mom Test cheat sheet,
market-research theory, market-sizing methodology) and worked examples — read them; this
file is the operating guide that ties them together.

## The governing rule: talk to people, and believe what they *do*

Everything in phases 1–5 rests on real conversations, not desk reasoning. And the
conversations only count if you extract behavior, not opinion. That is the Mom Test.

### Mom Test essentials

The Mom Test is a set of rules for talking to customers so that even your mother couldn't
lie to you. The core moves:

- **Ask about their life, not your idea.** "Walk me through the last time X happened" —
  never "would you use a tool that does X?"
- **Ask about specific past events, not generic futures or opinions.** "What did you do
  last month" is data; "what do you usually do" and "would you" are not.
- **Talk less, listen more.** The interviewee should speak ~90% of the time. If you're
  pitching, the interview is dead.
- **Dig for the cost and the workaround.** The two most valuable questions:
  *"What did it cost you?"* and *"What did you do to stop it happening again?"* If the
  answer to the second is "nothing", the problem isn't worth money — people pay to solve
  problems they've already tried to solve themselves.
- **Never take a feature request at face value.** When someone says "it should do Y",
  bounce back: "when did the lack of Y last bite you, and what did you do?" The signal is
  in that second answer.
- **Close for a commitment, not a compliment.** "Who else should I talk to?" always.
  And if the pain looked real: an invitation to pilot *with a date*. "Sounds great" with
  no date is politeness, not evidence.

## Phase 1 — Who is the customer

### Segmentation & beachhead

Segment along the axes that actually change the buying behavior — commonly: size,
industry, business model, ownership structure. A beachhead is a *combination* of axis
values, not a single value ("IT firms, 20–50 people, T&M billing" — not just "IT").

Choose the beachhead on **depth and concentration of pain**, using the pain columns from
the insights grid — not on "where are the most companies." Aulet's selection criteria
(score each candidate 1–5, weight them):

- Do they have money (budget for this)?
- Are they reachable by your sales?
- Do they have a compelling reason to buy *now* (pain ≥ 2)? — **the critical one**
- Can you deliver the whole solution with today's team?
- Is there a reference/word-of-mouth network?
- Fit with team's values and skills?
- Right size — not too big to enter, not too small to matter?

**Stop condition:** if after ~10 interviews no candidate's pain stands out by ≥1 point
from the rest, the pain is shallow everywhere. Don't force a beachhead — report that as a
finding (it's a "yellow" for the decision gate).

### Persona — split buyer from user

In B2B the person who feels the pain, the person who pays, and the person who uses the
tool are often different people. Model them separately from the start — this is the main
reason products get bought and not used, or used and not paid for.

For the **economic buyer**: role, what they're accountable for, how they measure their
own success, what they do today to get that, biggest frustration, what keeps them up at
night, who advises the purchase, where they learn about tools, and the purchase barrier.
The three that are usually missing and are critical: **who advises the buy, where they
learn about tools, what actually blocks the purchase** — without these you have a product
but no go-to-market.

For the **end user**: often several people, one per workflow. For each, note their
motivation to use the tool. Watch for the user with **no intrinsic motivation** (e.g. the
contractor asked to log hours) — that's usually the weakest link the whole product rests
on.

Mark a v0 persona built from one source (e.g. the founder) as a hypothesis to be
disproven, and require confirmation from several outside conversations before treating it
as real.

## Phase 2 — Discovery / validation (runs continuously)

### The hypotheses tracker

Maintain 3–5 active hypotheses per round of interviews. For each, write four things:
the hypothesis, **what confirmation gives you**, **what refutation gives you**, and the
verification source (self-research vs conversation). The discipline that makes this tool
work: *keep a hypothesis only if both outcomes change your decision.* If confirming and
refuting lead to the same action, delete it — it's eating an interview slot.

Split hypotheses into **conversation hypotheses** (test by talking) and **desk
hypotheses** (test by research / hands-on in a few hours — competitor features, pricing,
regulatory facts). Never spend an interview slot on something the interviewee can't
answer better than a web search can.

Update status only after a full round (~5–10 interviews), not mid-round — otherwise you
start hearing what you want to hear. Don't rewrite a hypothesis mid-round; add a new
version as a new row and log the change.

### The insights grid (interview tracker)

One row per interview, filled in immediately after. Score the pain 0–3 on each key
dimension (0 = n/a, 1 = mild, 2 = real problem costing time/money, 3 = acute, actively
seeking a fix and has a workaround). When the product could hit several distinct pains,
use **separate pain columns** (e.g. one per process loop) — a single blended score hides
where the pain actually concentrates, and that concentration is exactly what you need to
pick a beachhead.

Record what the person *said and did*, not your interpretation — interpretations go in a
separate "conclusions after round N" section. At the end, compute the aggregates that go
to the decision meeting: median of the key metric, % with a workaround, count of pilot
commitments *with dates*.

## Phase 3 — The offer

An offer is **one loop closed end to end**, not a feature list. Steps:

1. **Pick the loop** from the pain data — build first where pain is deepest, not where
   it's easiest to code.
2. **State the offer in one sentence** with no "platform / system / all-in-one" filler.
   Test: say it back to an interviewee and see if they repeat it correctly.
3. **Write what it explicitly does NOT do** — the missing "not this" section is the exact
   mechanism that bloats products into incoherent module-piles.
4. **Map the full use cycle** — discover → evaluate → decide → onboard/migrate → first
   value → routine use → pay/renew → refer. Fill the two riskiest stages first: usually
   **data migration** (nobody re-keys a year of history) and **routine use** (does the
   weakest-motivated user actually keep feeding it?).
5. **Quantify the value** from interview numbers only, each tagged with the interview it
   came from: before-state → after-state → PLN/year. Sanity check: value must be
   **5–10× the price**, not 2×.
6. **Name the core** — the one advantage that survives "what if the incumbent adds this
   next quarter?" "Better UX" and "AI" are features, not moats.

## Phase 4 — Competition & moat

Map competitors on the **two axes the customer actually cares about**, not the ones
flattering to you. Include the real status-quo competitor, which is very often **"a
spreadsheet plus habit"** — if you can't say why you beat the spreadsheet, the rest of
the map is moot. For each competitor: what works, what hurts, price, and whether your
target would switch and why. Do the hands-on testing yourself (a few hours); don't spend
interview slots on it.

Finish with the honest question: **where is the gap, and why has nobody taken it?** An
empty gap usually means no demand, not an overlooked opportunity — the same logic as a
hypothesis with no competitor.

## Phase 5 — Market sizing (TAM / SAM / SOM)

Compute **two independent ways and triangulate**:

- **Top-down:** macro count of firms/people in the class → narrow by explicit filters
  (industry, model, geography, buying barriers) → PLN, via a price assumption.
- **Bottom-up:** one reference customer's annual value (ACV) → × estimated number of such
  customers → PLN.

Discipline (from the vault's sizing note): label every number `[DANE]` (from a source)
or `[SZACUNEK]` (your estimate); justify every narrowing filter; keep a section for
assumptions that inflate and a section for assumptions that deflate; keep a section for
data gaps and how to close them. If the two methods diverge by >20–30%, explain which
filter causes it and pick the conservative value for planning — do not auto-average.

**Don't size before the beachhead is chosen** — a TAM for "everyone" is a number with no
decision value. And if a high-ACV / low-count segment (e.g. consolidators) wins the
beachhead, a small TAM may be the *truth*, not an error — shift the weight to
ACV × sales-cycle instead of stretching the segment definition to make the number look
big. Stretching it is exactly the reflex that leads to building a generic product for
"everyone."

## What each phase hands to the next

Discovery data (insights grid) → beachhead choice → persona → offer loop → competition
gap → sizing → into the plan. Keep the chain intact; a persona built from assumption
rather than the grid, or sizing done before the beachhead, breaks everything downstream.
