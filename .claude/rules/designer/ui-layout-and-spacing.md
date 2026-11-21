---
description: Laying out a screen, grid, group or card in a sketch or in Figma, or reviewing spacing, alignment, balance and whitespace in a design
paths:
  - "docs/ui-design/**/sketch/**"
  - "docs/ui-design/**/audit/**"
---

# UI layout and spacing

Space is the hierarchy. It says what is grouped, what is separate and what matters. ID formats are in [ui-rule-ids.md](ui-rule-ids.md).

Values are in px. In Figma, bind each one to the nearest `spacing` variable from [designer-ui-kit.md](designer-ui-kit.md). A value with no matching variable is a token gap to report. Never type a raw value instead.

## Spacing scale and grouping

| ID | Do | Why | Value |
|---|---|---|---|
| Rule 41 | Keep content off the screen edge. Space blocks on one scale | Text at the edge looks unfinished and gets clipped on rounded screens. Uneven gaps make unrelated things look related | Gutter 16 to 24. Scale 4, 8, 12, 16, 24, 32, 48 |
| Rule 20 | Separate groups with space, not divider lines | The gap already shows the split. A line adds an element without adding meaning | Within a group 8. Between groups 24. A 3× ratio reads as a break |
| Rule 93 | Put a label closer to its own input than to the field above | With equal gaps, a label floats between two inputs and the user must guess | Label to input 8. Group to group 16 or more. Ratio at least 2× |
| Rule 22 | Pad cards generously | Without padding, every element competes at the same distance from the edge | 24 on mobile, 32 on desktop. Never under 16 on a touch surface |
| Rule 6 | Split feature copy into headed chunks, each with an icon | Users scan for the one item they care about. A wall of text hides it | Heading plus 1 to 2 lines. Title to body 16. Item to item 24 |
| P26 | Tune macro space (between blocks) and micro space (inside blocks) separately | They do different jobs. One value for both flattens the hierarchy | Macro example: 48 between blocks |
| P27 | Set the macro to micro ratio from content, design, user and brand | Taste alone gives inconsistent ratios | Dense data screens: less macro. Marketing pages: more |
| P28 | Use passive space for readability and active space to direct attention | Both are tools. Using them without intent wastes the effect | |
| P29 | Isolate the key element with surrounding space | Space around an element is emphasis, not just breathing room | The primary action has the most space around it |
| P30 | Use gap size alone to show what belongs together | Proximity is the strongest grouping cue | No border or box needed for grouping |
| P31 | Break a long form into labelled groups | The perceived effort drops even though the field count does not | About 4 fields per group. Groups are meaningful, such as shipping vs billing |
| P32 | Never place a control in a cluster it does not belong to | Users read one item of a group and assume the rest. A misfiled control is never read | |
| P33 | Keep every element a task needs inside one focal area | Distant elements are overlooked entirely | |
| P34 | Re-check groupings at every breakpoint | Reflow changes what looks grouped | 375, 768, 1280 |

## Grid and alignment

| ID | Do | Why | Value |
|---|---|---|---|
| GRD-06 | Decide columns, gutters and margins before drawing | A grid answers placement questions once, for every screen | Default: 12 columns |
| GRD-07 | Agree the grid early and use it on every screen | A shared grid keeps designs consistent and tells developers what to build | |
| GRD-01 | Make gutters a multiple of the base unit | Eyeballed gutters drift | Base unit 4 or 8 |
| GRD-02 | Make every line height a multiple of the base unit | Text then sits on the baseline grid | 16/24, 20/32, 12/16 |
| GRD-03 | Place elements inside a column field, never in a gutter | Elements in gutters break alignment | |
| GRD-04 | Break out of the grid only on purpose, to emphasise one thing | A deliberate break draws the eye. An accidental one looks broken | One break per screen at most |
| GRD-05 | Size columns in proportions, not fixed pixels | Fixed widths fail on other screen sizes | Figma: stretch layout grid and auto layout fill |
| GRD-08 | Treat the grid's limits as a design tool | Constraints speed up decisions | |
| GRD-09 | Test and adjust the grid like any other design artifact | | |
| Rule 4 | Align fields to a shared grid so both edges line up | Ragged edges force the eye to re-find each row's start | Fields span whole columns. No half offsets |
| Rule 67 | Use one gap value per grid | Uneven gutters make a grid look broken even when every card is identical | Row gap equals column gap |
| P16 | Give every element a shared left edge, right edge or centre line | | |
| P17 | Top-align items of very different heights. Centre items of similar height | | Content and sidebar: top. Header nav items: centre |
| P18 | Define one content max-width. Everything aligns to it | | |
| Wide screens | State what each region holds at 1440 and wider. Extra width is margin or a purposeful column | Unexplained blank space on the right reads as a missing panel | Per region: fixed or fluid width, max width, what fills the rest. Never unexplained blank |
| P19 | Left-align body text. Centre only headings and short slogans | Centred body text has no fixed start to return to | Never justify body text |
| P20 | In a media object, centre the icons and left-align all the text | Icons vary in width. A centred icon column keeps the text edge straight | |
| P21 | Right-align numbers so the decimals line up | Units, tens and decimals must align to scan a column | |
| P24 | Split main content and sidebar on the golden ratio when a sidebar exists | | 61.8 / 38.2 |
| P24a | Hold the ratio only where it fits. Drop it on small screens | | Single column under 600 |

## Screens, breakpoints and reach

| ID | Do | Why | Value |
|---|---|---|---|
| SCR-02 | Design the smallest target first, then scale up | A design that fits a small screen grows. One that fits a large screen breaks | |
| Rule 58 | Build on a fluid grid. Check every breakpoint | A fixed width causes horizontal scroll on phones | Min column 240. Gap 16 to 24. Check 375, 768, 1280 |
| SCR-03 | Use the tool's device frame presets | | Mobile 375 × 812. Tablet 768 × 1024. Desktop 1440 × 1024 |
| SCR-01 | Size touch targets in pt or dp, not px | A pt is a different number of pixels on each screen density | 1 pt = 1 px at 163 ppi |
| SCR-04 | Put primary actions in the thumb zone on phones | One hand holds the phone, and its thumb does most of the work | Bottom third. Prefer bottom-anchored menus |
| SCR-05 | Treat tablet reach separately | Tablets are mostly held in two hands. Reach covers both side edges | Primary actions near the left and right edges |

| Breakpoint | Frame | Grid |
|---|---|---|
| Mobile | 375 × 812 | 4 columns, 16 margin, 16 gutter |
| Tablet | 768 × 1024 | 8 columns, 24 margin, 24 gutter |
| Desktop | 1440 × 1024 | 12 columns, 80 margin, 24 gutter |

## Scroll regions

Content that can grow past its space scrolls in one place. Where it applies is the `Content size` column of the inventory. The Overflow state that shows it is in [ui-components-and-states.md](ui-components-and-states.md).

| Name | Do | Why | Value |
|---|---|---|---|
| Scroll region | Name the one region that scrolls in each screen region: the page body, a dialog body, a sheet body, a list, a table body, a code or expression area | Two scrollbars in one region make the user guess which one moves the content | One scrollbar per screen region |
| No nested scroll | Never put a scroll area inside a card, a section or another scroll region | A nested scroll steals the outer scroll and hides its own overflow | A card clamps and links out. A section grows and the page scrolls |
| Fixed header and footer | In a dialog or sheet, keep the header and the footer fixed. Only the body scrolls | The title and the actions must stay in view while the content moves | Header and footer hug. The body fills the rest |
| Height cap | Give every scroll region a stated max height | A region with no cap grows forever and never scrolls | A dialog body caps at the viewport height minus header, footer and 48 margin. A list or table states its cap in rows or px |
| Scrollbar drawn | Draw the scrollbar in the Overflow frame, with the content cut at the cap | A scroll that is never drawn is never built or checked | The kit `Scrollbar` instance on the scroll region's edge |
| Scroll frame | Build the capped region as a real scroll frame, so the audit can see it | A clip frame that only looks like it scrolls is read as clipped content | A fixed height or a max height, clip content on, the drawn scrollbar, and `overflowDirection` `VERTICAL` (prototype "Vertical scrolling") |

## Composition and balance

| ID | Do | Why | Value |
|---|---|---|---|
| Rule 49 | Lay a landing or marketing block along the Z path. End it with the CTA | The eye enters top-left and leaves bottom-right. A CTA mid-left is skipped | Logo top-left, nav top-right, CTA bottom-right of the block |
| Rule 73 | Vary tile sizes in an image or card gallery | A uniform grid gives the eye no reason to stop | One 2 × 2 hero tile per about 6 tiles. Same gap throughout |
| P11 | Balance by perceived weight: size, colour, contrast, density | Attention, not area, decides what feels heavy | |
| P12 | Use imbalance only on purpose, for emphasis | Unintended imbalance reads as broken | |
| P13 | Pick one balance type on purpose: symmetrical, asymmetrical, radial or mosaic | Each type has a cost. Symmetry is calm but static | |
| P14 | Judge balance at the screen level, not per element | Every element can be right while the page still leans | Check a zoomed-out screenshot |
| P15 | Combine balance types where it helps | A single rigid scheme looks lifeless | |

## Check

- Every gap and padding is a `spacing` variable. No raw px and no `out-of-scale/*` variable.
- Every grouping is shown by a gap ratio of at least 2×, not by a divider.
- Every screen frame is a project frame size and was checked at 375, 768 and 1280.
- Every desktop screen states what each region holds at 1440 and wider, with no unexplained blank area.
- Every part that can grow has one capped scroll region, drawn with its scrollbar in an Overflow frame, and set to vertical scrolling. No scroll sits inside a card, a section or another scroll region. Dialog headers and footers stay fixed.
