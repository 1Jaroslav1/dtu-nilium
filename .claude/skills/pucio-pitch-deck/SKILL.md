---
name: pucio-pitch-deck
description: Build a startup pitch deck told as a Pucio-style picture-book story (the "Pucio / Pocko / Poco universe"). The Problem, Solution and Team slides become fairy-tale pages with a cast of just 3–5 characters (ideally 3). The number slides (market, traction, business model, competition, tools/tech, ask) leave the story behind and use a matching, very readable "Pucio's notebook" style. Use whenever the user asks for a pitch deck, investor or demo-day presentation, or startup story "in the Pucio / Pocko / Poco universe", "like a fairy tale / children's book", "as a story with Pucio", or shares a Pucio-style example PDF and wants their own. Also use to turn an existing deck into this format.
---

# Pucio pitch deck

A pitch deck where the **why** is told as a picture-book story and the **proof** is shown as clean numbers.

- **Story pages** (Pucio universe): Cover, Problem, Solution, Team, Closing.
- **Notebook pages** (no story, no characters): Why now, Market, Traction, Business model, Competition, Tools/Tech, Ask.

Picture-book pages make a stranger *feel* the problem in 10 seconds. Number pages must be *read* in 10 seconds. Never mix the two jobs on one slide.

**Language:** write the deck in the language the user uses (the reference example is Polish). Keep the picture-book rhythm in any language.

## The reference example (what "Pucio universe" means here)

"Pucio robi GTM" is a 10-page parody picture book. Each page teaches one go-to-market lesson through a tiny scene:

- **Artur** is the founder: over-eager, full of features, about to fire the confetti too early.
- **Kasia** is the customer: busy, polite, short on time.
- **Pucio** is a small child who sees the obvious truth and says it in one line, or points at it (the clock, the 40-page offer).
- There is one **running gag**: the confetti tube. Artur wants to celebrate, and Pucio hides or guards the confetti until the result is real.
- Each page has the same layout: a teal heading, 3 short serif lines of story, 1 **bold beat line** (the twist), a full-width crayon illustration, a thin divider, then a centred **moral** in plain sans that states the business lesson, and the page number.

The humour comes from the gap between what the founder believes and what Pucio sees. Every story page in this skill works the same way.

## First move: always

1. **Collect the raw material.** Ask once, and only for what is missing:
   - The product in one sentence.
   - Who suffers the problem (the user) and who pays, if that's a different person.
   - What it costs them today (time, money, risk) and how they cope now.
   - What changes after your product (the outcome, not the features).
   - The team: names, roles, and one "why us" fact each.
   - The numbers: market, traction, pricing, competitors, tools, the ask.
   - Audience and format: live pitch or emailed deck. Default is a **16:9 live pitch**.
2. **Get the content right before the story.** If the `pitch-deck-advisor` skill is available, use its rules for content quality: the 3-minute test, a headline that makes a claim, no vanity metrics, one ask number. This skill decides how the deck **looks and tells**; that skill decides what it **says**. Mark missing data as `[PLACEHOLDER: …]` and never invent numbers.
3. **Cast the story** (next section). Show the user the cast and the page plan **before** writing full pages, and wait for an OK or edits.

## Casting rule: 3 characters, 5 at most

**The story is told by the fairy-tale people from the example book.** Don't invent new characters: map your startup's real roles onto the storybook cast. Their looks, outfits, props and a ready-to-paste character sheet are in `references/cast.md`. Reference pictures are in `assets/reference/`.

| Role in your startup | Storybook character | Must have |
|---|---|---|
| The insight, the obvious truth (always) | **Pucio**: toddler, red sweater | Says or points at the one obvious thing. Never explains, never lectures. |
| Founder | **Artur**: round glasses, white T-shirt, confetti tube | One endearing flaw that drives the problem pages (too many features, ships too early, talks too much). |
| User with the pain | **Kasia**: curly hair, mustard shirt | One concrete, visible struggle (a clock, a pile of papers, a locked laptop). Only her situation changes to fit your market. |
| optional 4th: payer or decision-maker | **The Boss**: grey hair, navy blazer, wallet | Only if the person who pays is not the person who uses. |
| optional 5th: cameo | One of the Intern, Sceptic, No-budget man, Not-interested woman | Only if the story breaks without them. At most one. |

Rules:
- **Default to 3: Pucio, Artur, Kasia.** Every extra character has to earn their place. If you can't say in one line what they change in the story, cut them.
- Keep the example's **names, looks, outfits and props** on every page (Kasia stays Kasia, even in an English deck). The only change: the print on Artur's T-shirt becomes your product name.
- Team page: Artur stands in for the founding team. Co-founders can be drawn next to him in the same storybook style, and they count toward the limit of 5 (details in `references/cast.md`).
- Background people are allowed only as soft, faceless, out-of-focus extras (like the passers-by in the example). They never speak, never get a name, and are never the subject of a scene.
- Running gag: the **polka-dot confetti tube** by default (Artur wants to fire it, Pucio hides or guards it until the result is real). Swap it for a gag tied to your product only if that one is funnier.

## Deck structure (default for 16:9 live pitch, 12–14 slides)

| # | Type | Slide | Job |
|---|---|---|---|
| 1 | Story | Cover: "Pucio [does X]" + subtitle "Pucio and Artur [mission]" (as in the example: "Pucio and Artur go to market") | Make them smile, and say what this is about |
| 2–3 | Story | Problem, 2 pages | Page A: the customer's pain as a scene. Page B: what it costs, or why today's fixes fail |
| 4 | Notebook | Why now *(optional)* | The trend or change that makes this possible now |
| 5–6 | Story | Solution, 2 pages | Page A: the founder learns (Pucio's truth) and the product appears. Page B: the customer's outcome, shown not told |
| 7 | Notebook | Product / tools / tech | How it works: 3 steps or a simple stack diagram |
| 8 | Notebook | Market | Bottom-up SAM, one big number |
| 9 | Notebook | Traction | One honest chart |
| 10 | Notebook | Business model | Price, who pays, unit economics |
| 11 | Notebook | Competition | A 2×2 map or a comparison table that includes "do nothing" |
| 12 | Story | Team | The real team drawn as characters, with one "why us" fact each in the moral |
| 13 | Notebook | The ask | One number, use of funds, the milestone it buys |
| 14 | Story | Closing | The running gag pays off, plus a call to action (like "Shall we keep going?" in the example) |

Lead with the strongest card: if traction is exceptional, move it straight after the Problem pages. For an emailed deck, give each notebook page one more sentence of context. Story pages stay the same.

## Writing a story page

Follow the page formula in `references/story-rules.md`. In short:

```
HEADING      2–4 words, a plain business term (e.g. "Value proposition", "Purchase process")
STORY        3 short sentences, present tense, one fact each, max ~10 words each
BEAT         1 bold line: Pucio's line or action, or the comic twist
ILLUSTRATION 1 scene, one moment, max 3 characters in focus
MORAL        1–2 plain lines: the business lesson or claim, readable on its own
```

The story lines are where the fun is. The moral is the claim an investor quotes. Someone who reads only the headings and morals must still get the whole argument.

## Writing a notebook page

Follow `references/visual-system.md` → "Notebook pages". In short: the same paper, palette and footer position as the story pages, so the deck feels like one book. But **no characters, no faces, no story**. Each page has one headline claim, one big number or one chart, and a moral line in the footer that says what the number means. At most one small hand-drawn prop (the running gag object) as a tiny corner mark.

## Building the deck

1. **Script first.** Write `deck-script.md`: for every slide give its type, all the text, the illustration brief (story) or chart spec (notebook), and a speaker note. Get the user's OK on it.
2. **Illustration prompts.** For each story page, write a complete image prompt from the template in `references/visual-system.md`: the style block + the character sheet from `references/cast.md` + the scene. If the image tool accepts reference images, attach `assets/reference/01-cover-cast.jpg` (Pucio, Artur, Kasia), plus `04-user-vs-payer.jpg` when the Boss appears, plus the reference page closest to the scene for style. Save them in `illustration-prompts.md`. If an image tool is available in the session, generate the images. If not, give the user the prompts and leave placeholders in the slides.
3. **Build the slides.** The default output is a self-contained HTML deck built from `templates/deck.html`. It renders both page types, has arrow-key navigation, and prints to PDF. If the user wants .pptx or a Slides artifact, take the same script and visual tokens to the `pptx` skill or the Slides artifact type.
4. **Self-review** against the checklist below, then tell the user which 5–7 ideas the deck carries.

Put the output in a project folder the user names. Otherwise create `pitch-deck/` in the working directory.

## Checklist before you hand it over

- [ ] The story uses only the example's storybook people (Pucio, Artur, Kasia, optionally the Boss or one cameo). At most 5, ideally 3. Pucio is on every story page. Nobody new appears after page 3 except co-founders on the Team page.
- [ ] Every story page: 3 lines of story + 1 bold beat + 1 moral, and the illustration shows one moment.
- [ ] Reading only the headings and morals tells the whole pitch (problem → solution → team → ask).
- [ ] No characters or story on notebook pages. Every number has a source or is marked as a placeholder.
- [ ] One running gag that pays off at the end.
- [ ] Each notebook page reads in under 10 seconds: one claim, one number or chart, large type, high contrast.
- [ ] Character names, outfits and props match across all illustration prompts.
- [ ] IP note: "Pucio" is a character from a published children's book series, and the example's art belongs to its authors. Use the reference images only as character and style guides for new illustrations; never paste them into the deck. For a public or commercial deck, suggest renaming the child character.

## Reference files

- `references/cast.md`: the storybook cast from the example (looks, props, roles), mapping to your startup, the ready-to-paste character sheet.
- `assets/reference/`: the 10 illustrations from the example, for character and style references.
- `references/story-rules.md`: voice, the page formula, problem/solution/team page patterns, beat-line types, worked mini-example.
- `references/visual-system.md`: palette and type tokens, story and notebook layouts, chart rules, character sheet and illustration prompt template.
- `templates/deck.html`: the HTML deck template with both page types.
