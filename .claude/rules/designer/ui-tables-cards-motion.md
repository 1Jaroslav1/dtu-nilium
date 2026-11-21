---
description: Designing or reviewing a data table, a card, an animation or a microinteraction in a sketch or a Figma design
paths:
  - "docs/ui-design/**/sketch/**"
  - "docs/ui-design/**/inventory.md"
  - "docs/ui-design/**/audit/**"
---

# UI tables, cards and motion

The component guidelines for tables, cards and animation. ID formats are in [ui-rule-ids.md](ui-rule-ids.md). Write each ID in full, for example `UI-Pedia TBL-04`.

States per component type, lists and the general card rules (Rule 44, 53, 85) are in [ui-components-and-states.md](ui-components-and-states.md). The catalog's Data Table is a `pattern`: Table plus sort, filter and Pagination, per [designer-component-catalog.md](designer-component-catalog.md).

## Tables

Answer four questions before designing a table:

1. Is the data short values (dates, sums) or complex (paragraphs, links, files)?
2. Will users read and compare, or edit?
3. Desktop or mobile?
4. How much help do users need to find things: search, filter, sort, density?

| Data type | Alignment |
|---|---|
| Text: strings, links, paragraphs | Left |
| Numbers that measure size: counts, percent, currency | Right, tabular figures |
| Numbers that are labels: dates, postcodes, phone numbers | Left |
| Column header | The same as its column's data |

| ID | Do | Why | Value |
|---|---|---|---|
| UI-Pedia TBL-01 | Never centre table content | The eye jumps about, which slows scanning and hides outliers | Left or right per the table above |
| UI-Pedia TBL-02 | Use tabular figures for numbers | Proportional digits make $1,111.11 look smaller than $999.99 | Tabular numerals on every numeric column |
| UI-Pedia TBL-03 | Never repeat the header word in every cell | The header already says it | Header "Lead", cells "Qualified", "Nurturing" |
| UI-Pedia TBL-04 | Leave out vertical dividers | Each column is about one item, so a line adds nothing | Horizontal dividers only. If a vertical one is needed: `border`, 1 px at most |
| UI-Pedia TBL-05 | Top-align multi-line cells | Bottom-aligned cells clip and scroll in jumps | Centre rows up to 3 lines. Top-align past 3 to 4 lines |
| UI-Pedia TBL-06 | Let users switch row density | Readers and comparers want different densities | Condensed 40, regular 48, relaxed 56. A switcher outside the table |
| UI-Pedia TBL-07 | Keep the header sticky and freeze the first column | Users lose the column and row meaning when scrolling | A control row above the table stays in the sticky area |
| UI-Pedia TBL-08 | Make both axes scroll smoothly | Tall rows tied to scroll feel jerky | |
| UI-Pedia TBL-09 | Sort by a sensible default | The rows that need attention belong at the top | Newest first, or most urgent first. The sort icon never shifts the header text |
| UI-Pedia TBL-10 | Show the total count, and show all rows by default | Users nearly always switch to "see all" | "128 rows" next to the table |
| UI-Pedia TBL-11 | Let users choose the visible columns | Irrelevant columns add mental strain | A "Columns" menu plus a visible horizontal scrollbar |
| UI-Pedia TBL-12 | Reveal row actions on hover | Showing every action on every row crowds the table | Actions on Hover. On touch, keep them reachable through a row menu |
| UI-Pedia TBL-13 | Show bulk actions only after a row is selected | An always-visible action bar is clutter | Checkbox per row. The action bar appears at 1 or more selected |
| UI-Pedia TBL-14 | Edit inline for low-stakes data. Use a secondary view for high-stakes data | Inline keeps context. A secondary view adds friction on purpose | Expandable row, Dialog or Sheet for high-stakes edits |
| UI-Pedia TBL-15 | Confirm every edit explicitly | A silent commit leaves users unsure the change was saved | Enter, a check button, or Save. Then a Toast |

| Row style | Use when |
|---|---|
| Horizontal dividers only | The default for any size of data set |
| Zebra | Large data sets, when the stripes cannot be read as selection |
| Free, no dividers | Small data sets |
| Full grid | Very dense data only. It adds visual noise |

| Row detail pattern | Trade-off |
|---|---|
| Expandable row | Keeps context. The costliest to build |
| Dialog | Simple, but takes the user out of the table |
| Sheet, a side panel | Scales best when the detail needs room or tabs |

## Comparisons

A comparison shows what changes: a list of changes before a save, a history entry, a review of edits.

| Name | Do | Why | Value |
|---|---|---|---|
| Comparison | Show one row per changed field. Never write a change as one text line "Field: old → new" | An arrow string hides which part is old and which is new, and breaks on long values | Default: a label column with the field name, the new value beside it, and the old value under the new one as a muted line that starts with "was". Mask values as the history does |
| Long values | Let both values wrap in the value column | A cut-off value cannot be checked before saving | Per "Long content" in [ui-components-and-states.md](ui-components-and-states.md) |
| Table form | Use a Field, Before, After table only when every value is short, such as a number or a status | Long values in a three-column table squeeze both value columns | At most about 20 characters per value |

## Cards

A card holds one idea: an image, a title, a description and an action, with optional icons. Use a list for ordered, searched or homogeneous content, and a table for large data sets.

| ID | Do | Why | Value |
|---|---|---|---|
| UI-Pedia CRD-01 | Make two actions on one card look different | Equal actions make the user compare before acting | Primary `Button`. Secondary `Variant=Link` or `Ghost` |
| UI-Pedia CRD-02 | Give the card content a visual hierarchy | Without it the user does not know where to start | Title, then supporting text, then action |
| UI-Pedia CRD-03 | Resist borders inside a card | Borders add clutter and take attention from the content | Group with space |
| UI-Pedia CRD-04 | Give a card a single link or a small set of actions | Inline links make the card ambiguous as a target | Same as Rule 85 |
| UI-Pedia CRD-05 | Keep card text under about 100 characters | The card holds just enough to decide whether to open it | At most two short sentences |
| UI-Pedia CRD-06 | Scroll the deck of cards, never inside one card | Text in a scrolling card is hard to read | Same as Rule 44 |
| UI-Pedia CRD-07 | Separate a card from its background with one of border, shadow or tone | One cue is enough. With good spacing, none may be needed | `Card - Nova` border, or an effect style, or `muted` tone |
| UI-Pedia CRD-08 | Choose vertical or horizontal orientation on purpose | Horizontal cards suit dense lists of items | |
| UI-Pedia CRD-09 | Make the whole card clickable, and keep a real button in it | The button names what happens next | Hover and Focus states on the card |
| UI-Pedia CRD-10 | Give hover-revealed card actions a touch fallback | Hover does not exist on touch screens | Actions visible on touch layouts |

- On mobile, prefer square cards and fewer columns. Rectangular cards suit wide screens.
- Show only the most important data. Expose the rest in a detail view.

## Motion and microinteractions

A microinteraction has four parts: a trigger (user or system), rules (what happens), feedback (what the user sees) and loops and modes (what changes when circumstances change). Its jobs: report status, give a sense of direct control, and show the outcome of an action.

| ID | Do | Why | Value |
|---|---|---|---|
| UI-Pedia ANI-01 | Ease any motion that represents a physical object | Nothing real starts at full speed. Linear motion looks mechanical | Ease in or ease out. Never linear |
| UI-Pedia ANI-02 | Animate the logo with restraint | It pulls attention from the page's purpose | |
| UI-Pedia ANI-03 | Always show progress for a wait | An unknown wait is the most stressful kind | Skeleton or `Progress`, per Rule 62 |
| UI-Pedia ANI-04 | Start from how users use the product | Motion that ignores the task gets in the way | |
| UI-Pedia ANI-05 | Animate to improve the experience, not only to please | Decorative motion with no job is noise | Each animation names its job |
| UI-Pedia ANI-06 | Do not overdo it, and never delay the user | Too many animations irritate. A delay causes confusion | |
| UI-Pedia ANI-07 | Pair motion with plain, human copy | Technical wording undoes a friendly moment | |
| UI-Pedia ANI-08 | Keep microinteractions subtle | Most users should barely notice them | |
| UI-Pedia ANI-09 | Honour reduced motion | Motion can trigger vestibular disorders | Every animation has a no-motion fallback |

- In Figma, show motion as a note beside the frame: trigger, duration, easing. Prototype transitions are optional.

## Check

- No table cell is centred, and every numeric column is right-aligned with tabular figures.
- Every table shows its row count, a sticky header and a default sort.
- No change is shown as an "old → new" text line. Every comparison has a field name column and a muted "was" line, unless all values are short.
- No card has two equal-weight actions or more than about 100 characters of text.
- Every animation has a job, a duration, an easing and a reduced-motion fallback.
