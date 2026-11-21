---
description: Rating or reviewing a user flow or screen for memory load, attention, effort, feedback, errors, consistency and perception, or citing a cognitive or perception principle
paths:
  - "docs/ui-design/**/flows/**"
---

# UI cognition

How people perceive, remember, decide and recover. These rules explain why the visual rules work, and they are the main yardstick for flows and personas. ID formats are in [ui-rule-ids.md](ui-rule-ids.md).

## Numbers worth memorising

| Value | What it means for a design |
|---|---|
| 3 to 4 items | Working memory holds this many. The old "7 ± 2" is outdated |
| 5 to 30 seconds | How long those items last without being refreshed |
| about 100,000 vs 2,000 to 3,000 words | Words people recognise vs words they can produce. Recognition beats recall by far |
| 5° circle | Only this much is sharp. At a normal viewing distance it is about 42 mm: roughly 88 characters over 7 rows, 15 on the widest line |
| up to 46% | Reported error rate for commands and transactions. Error paths are not edge cases |

## Two resolved tensions

| Tension | Resolution |
|---|---|
| PSY-05 permits trial and error. PSY-36 asks for prevention | Prevent the irreversible. Permit everything else. Make what is permitted undoable |
| PSY-33 says follow the familiar model. PSY-23 says never bend the design to fit a wrong one | A coherent new model is learnable. A compromise between two models is not |

## The action cycle

| ID | Do | Why | Value |
|---|---|---|---|
| PSY-01 | Let the user perceive what happened, interpret it and compare it with the goal, after every action | Three of the seven steps of an action are evaluation. Silent success fails more than half the cycle | Every action in a flow has a visible result state |
| PSY-02 | Add a feature only on evidence of need | Every capability raises the learning cost of all the others. Features get added because the need is unclear | Each option on a screen maps to a stated job |
| PSY-03 | Use the words users already have | System vocabulary is a private language users must learn first | No internal codes, table names or jargon in labels |
| PSY-04 | Tie every result to the action that caused it | Delayed, hidden or unattributed effects break the user's model of the system | The result appears where the action was taken, at once |
| PSY-05 | Assume users act before they are sure. Make paths reversible | People learn by trying and rarely read instructions first | Every step has Back or Undo, except the irreversible ones |
| PSY-06 | Give one action one name and one outcome | Two names for one action, or one name for two, turn learning into rote memory | Same verb for the same action on every screen |
| PSY-07 | Spend design effort on recovery, not only on the happy path | One failure outweighs many successes in the user's memory | Every flow has its error and recovery paths drawn |
| PSY-08 | Test with users instead of trusting your own intuition | Expertise makes the designer a poor proxy for the user | 3 to 5 people per test round |

Signals of trouble: confusion (detail drowns structure), annoyance (inconsistency, slowness, hard-to-reach data), frustration (an action that cannot be reversed, or no way to tell what happened), panic (long waits under pressure) and boredom (oversimplified, slow tasks, which also raise errors).

## Perception and attention

| ID | Do | Why | Value |
|---|---|---|---|
| PSY-09 | Let importance shift as the task moves on | What is signal at one step is noise at the next. Noise similar to the signal hides it | The current step's control stands out. Finished steps recede |
| PSY-10 | Give every element a job. Cut constant stimulation | Attention habituates. Permanent badges and pulsing dots train users to ignore everything | No permanent animation. Badges only for new, actionable items |
| PSY-11 | Put what must be read together inside one glance | Only a small circle around the fixation point is sharp | Label, value and its error within about 15 characters by 7 rows |
| PSY-12 | Do not fill areas with fine lines or dot patterns | Close patterns shimmer and tire the eye | No hatching, dense stripes or dot grids as fills |
| PSY-13 | Keep motion away from a task that needs focus | Movement in the periphery competes with the work in front of the user | No autoplay, carousels or animation beside forms and editors |
| PSY-14 | Light from above: shadows below, highlights on top | Any other direction reads as unnatural or inverted | Effect styles cast downward only |
| PSY-15 | Have fresh eyes check the screen | Authors see what they expect, not what is there | A review by someone who did not design it |

## Memory and mental models

| ID | Do | Why | Value |
|---|---|---|---|
| PSY-16 | Never make users carry information between screens | Working memory holds 3 to 4 items for 5 to 30 seconds | Anything needed on step N is shown on step N |
| PSY-17 | Show the options instead of asking users to recall them | Recognition uses the large vocabulary. Recall uses the small one | A known answer set is a select, list or chips, never free text |
| PSY-18 | Put things to be compared side by side | Comparing across a scroll or a screen change is a memory task | Comparison views fit in one viewport |
| PSY-19 | Do not ask users to hold something while reading something important | Reading uses the same limited capacity | No "remember this code" while a long text is shown |
| PSY-20 | Make what must be remembered distinctive | Distinctiveness is a memory aid | One highlight per screen for the key value |
| PSY-21 | Give each screen type a distinct shape | Experienced users recognise a screen by its shape, without reading | Different screen types have different layouts. Same types share one |
| PSY-22 | Make colour, icon, wording and position agree | Conflicting codes cause slow, error-prone reading (the Stroop effect) | A red element never says "Success". A destructive action never sits where the primary usually is |
| PSY-23 | Follow the user's model. When it does not fit, teach one clear new model | Half-fitting an old model satisfies neither | State the new model in one sentence on first use |

## Effort and skill

| ID | Do | Why | Value |
|---|---|---|---|
| PSY-24 | Pin frequent controls to screen edges and corners | An edge stops the pointer, so the target is infinitely deep. A corner stops it on two axes | Large targets for critical functions. No dead margin between control and edge on desktop |
| PSY-25 | Cut mental work per task | Recognition over recall, order over noise and automation over memory are the biggest wins | Defaults, autofill and remembered choices where safe |
| PSY-26 | Cut physical work per task | Fewer steps, movements and repetitions mean fewer errors and less fatigue | Count clicks and screens per flow. Remove every step that collects nothing |
| PSY-27 | Never use "they can learn it" to excuse complexity | People avoid unproductive learning. The prospect of learning alone deters some | A first-time user completes the main task without help |
| PSY-28 | Keep frequent controls in stable positions | Experienced users aim before they look. A moved control costs a wrong action first | Same position for the same control on every screen and in every release |
| PSY-29 | Support the novice path and the expert path together | Skill grows. One path for both fails one of them | Visible controls for novices. Shortcuts, bulk actions and keyboard paths for experts |
| PSY-30 | Make the first 30 seconds look easy | Users judge the whole product's effort before trying it | First screen of a flow: one clear primary action, little text |

## Human factors

| ID | Do | Why | Value |
|---|---|---|---|
| PSY-31 | Size controls for the body. Confirm sizes by observed mis-taps | Target size is an ergonomic requirement, not a style choice | At least 44 × 44 pt on touch. Mis-tap rate checked in tests |
| PSY-32 | Be consistent inside the product and with the platform | Consistency lets skills transfer between parts of the product | Same pattern for the same job everywhere. Platform conventions kept |
| PSY-33 | Prefer the familiar pattern | Novelty in structure is a cost the user pays (Jakob's law) | Conventional placement of nav, search, account and settings |
| PSY-34 | Keep the user in charge: feedback, control of operations, personalisation | The user drives the system, not the reverse | Every long operation shows progress and has Cancel. Content reflects what is known about the user |
| PSY-35 | Spend attention on the task, not on the interface | Six moves: break jobs into steps, cut time, protect focus, assist up front, group related data, offer shortcuts | Each flow is checked against all six |
| PSY-36 | Handle errors in this order: prevent, protect from the fatal, undo, explain, never blame | Each layer beats the next. A good message is the last line of defence | Messages say what happened and how to fix it. Never "you entered an invalid…" |

## Patterns

| ID | Do | Why | Value |
|---|---|---|---|
| P35 | Adopt the familiar pattern before inventing one | Users already know how it works | Name the pattern a screen follows in its brief |
| P36 | Adapt a pattern to the problem. Never paste it unchanged | A pattern is a framework, not a finished component | |
| P36a | Invent a pattern only when none fits, then test it | An untested new pattern hides its pain points until release | A new pattern is flagged for a test round |
| P37 | Never use design to get a choice the user would not knowingly make | Dark patterns trick users against their own interest | No pre-ticked consent, hidden costs, confirmshaming or disguised ads |
| P38 | Keep the team's pattern library usable: study others, rank patterns, write plainly | A library nobody can read is not used | |

## Perception principles

| ID | Do | Why | Value |
|---|---|---|---|
| P39 | Validate the design with the target users | Your reading of a design is not anyone else's | |
| P40 | Make foreground and background obvious at once (figure-ground) | Unclear depth makes users hunt for the active layer | Overlays dim what is behind them |
| P41 | Style by function: things that look alike must act alike (similarity) | Users assume same look means same behaviour | One style per interactive role |
| P42 | Group by position first (proximity). Distance beats colour and shape | Position overrides every other grouping cue | Grouping by gap, per [ui-layout-and-spacing.md](ui-layout-and-spacing.md) |
| P43 | Use a shared enclosure when spacing cannot group (common region) | A box groups items even when they are far apart | Cards or panels only where gap alone fails |
| P44 | Put items of one set on a shared line or curve (continuity) | The eye follows lines and reads them as one set | Steps of a stepper on one axis |
| P45 | Leave gaps on purpose where the mind will close them (closure) | Incomplete shapes are completed automatically | A cut-off next card signals more content |
| P46 | Let one element break the pattern (focal point) | Attention lands first on what differs | One focal point per screen: the primary action or key value |
| P47 | Rank elements on purpose with contrast, flow and grouping | Hierarchy tells users what to look at and in what order | Each screen has a first, second and third level |
| P48 | Never let colour carry meaning alone | Colour perception differs between people | Every colour state also has an icon, text or shape |

## Check

- No flow asks the user to carry more than 3 items between screens.
- Every action in a flow has a visible result, and every error path ends in a recovery.
- Only irreversible actions are blocked or confirmed. Everything else can be undone.
