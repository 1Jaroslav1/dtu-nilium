---
description: Choosing, building or reviewing a component's states, selection, loading, empty state, borders, radius, onboarding or visual weight in a sketch or a Figma design
paths:
  - "docs/ui-design/**/sketch/**"
  - "docs/ui-design/**/inventory.md"
  - "docs/ui-design/**/audit/**"
---

# UI components and states

Components carry state, and the state has to be visible. Most rules here make the interface answer "what did I just do?" and "what happens if I do this?" without being asked. ID formats are in [ui-rule-ids.md](ui-rule-ids.md).

Tables, cards and motion are in [ui-tables-cards-motion.md](ui-tables-cards-motion.md). How a state is modelled in Figma is in [figma-component-conventions.md](figma-component-conventions.md). Kit variables are in [designer-ui-kit.md](designer-ui-kit.md).

## Required states per component type

Build every state in the row. The kit's `State` values are `Default`, `Hover & Active`, `Focus` and `Disabled`. A state the kit set lacks is built as a composition on the instance, or reported as a kit gap.

| Component type | Kit or catalog base | Required states | Notes |
|---|---|---|---|
| Button | Button - Nova, Icon Button - Nova | Default, Hover & Active, Focus, Disabled, Loading | Loading is a `Spinner` in the leading icon slot |
| Input or field | Input - Nova inside Vertical Field - Nova | Default empty, Default filled, Focus, Invalid, Disabled. Valid only where confirming helps | Invalid keeps the typed value. Field details are in [ui-forms-and-inputs.md](ui-forms-and-inputs.md) |
| Checkbox, radio, switch | Checkbox - Nova, Radio - Nova, Switch - Nova | Off and on, each in Default, Hover & Active, Focus, Disabled. Checkbox adds Indeterminate | A required checkbox adds Invalid |
| Select or combobox | Select & Combobox - Nova | Default, Hover & Active, Focus, Open, Disabled, Invalid. Each option: Default, Highlighted, Selected, Disabled | Open shows the list as its own layer |
| Card | Card - Nova | Default. A clickable card adds Hover and Focus. A selectable card adds Selected | Loading is a Skeleton of the card's own shape |
| List item | Item (extension) | Default, Hover, Focus, Selected, Disabled | The list adds a Skeleton and an Empty state |
| Table row | Basic Table Cell - Nova | Default, Hover, Focus, Selected. Header cell: Default, Sorted ascending, Sorted descending | Row actions show on Hover and stay reachable on touch |
| Tab | Tab (segmented) - Nova | Default, Hover, Focus, Selected, Disabled | Selected changes fill and weight |
| Toast | Toast (extension) | Default, Success, Error. Each with and without an action button | The action is `Undo` or `Retry`. Error uses `destructive` |
| Any part that shows user-entered or data values: table, row, comparison, chip, field value, description | per type above | Adds Long content | One variant or frame with the longest likely value of every text, per "Long content" below |
| Any part that can grow past its space: dialog, sheet, list, table, code or expression area, card with a growing list | per type above | Adds Overflow | One variant or frame with enough content to scroll, per "Scroll region" in [ui-layout-and-spacing.md](ui-layout-and-spacing.md) |

- A screen frame for these states adds the state ` / long-content` or ` / overflow` to its name. A component variant uses `Content=Long content` or `Content=Overflow`. `State` holds interaction states only, per "Property names" in [figma-component-conventions.md](figma-component-conventions.md).
- The inventory's `Content size` column names the parts that need each state.

## Long and large content

| Name | Do | Why | Value |
|---|---|---|---|
| Long content | Draw every text that holds a label, a description, a value, an expression or a list item at its longest likely length. Decide wrap or truncate per text, and state it | A short sample hides the wrap, the overlap and the clipped word that real data shows first | Long labels, descriptions, values, expressions. Many rows, many roles, many options |
| Wrap by default | Wrap a value the user must read in full: a name, a description, an expression, a before or after value, an error | A truncated value the admin must act on is a value the admin cannot check | Text box set to auto height. The row or container grows with it |
| Truncate with a reveal | Truncate only text the user can open in full: a Tooltip, an expand action, a "See more" link or a detail view | Text cut off with no way to read it is lost information (Rule 76) | End ellipsis on 1 to 3 lines. The reveal is drawn in the long-content frame |
| Width limits | Give every text container a min width and a max width | A text box with no limit squeezes a neighbour to nothing, or runs past the line length a reader can follow | Min width keeps 1 or 2 words. Max width about 65 characters, per Rule 35 |
| No clipping | Never let text clip, overlap another node or pass its container edge | A clipped or overlapping word reads as a bug, and the developer copies the fixed size | Containers hug their content. Fixed heights only on a scroll region |

- Button labels never wrap. They follow Rule 82 in [ui-buttons-and-ctas.md](ui-buttons-and-ctas.md).
- A card never scrolls. It clamps its text and links out, per Rule 44.
- A list or table that can hold many items draws its many-items case as the Overflow state.

## Selection and consistency

| ID | Do | Why | Value |
|---|---|---|---|
| Rule 19 | Keep a screen to a neutral base plus one colour, and reserve that colour for selection | If four items are four colours, none of them means "chosen" | Neutral greys plus `primary`. Selection is fill plus weight, not a border alone |
| Rule 52 | Make the selected item obvious from across the room | A 1 px border change is missed on a phone in daylight. Users tap twice and undo their own choice | Change at least 2 properties: `primary` fill and `primary foreground` text, or weight. Add a check icon. Never colour alone |
| Rule 23 | Use the same control for the same kind of choice everywhere | Three controls for one kind of decision make the user re-learn it three times | One pattern per interaction type. Deviate only when the data type differs |
| Rule 40 | Replace typing with a control when the value is bounded | A text field invites invalid input and needs a keyboard on mobile | Slider for a continuous range. Stepper for small integers. Always show the current value as text |

## Lists, loading and emptiness

| ID | Do | Why | Value |
|---|---|---|---|
| Rule 53 | Put homogeneous items in a list. Use cards only for items that differ | Cards frame each item as its own thing, which slows scanning of identical records | List when items share one schema and have no image. Item rows, not Card |
| Rule 62 | Show a skeleton of the incoming layout, not a spinner | A spinner says only "wait". A skeleton previews the structure and the layout does not jump | Skeleton matches the real block's size. Spinner only for an action under about 1 s with no known shape |
| Rule 76 | Keep the details users need to act | Minimalism that removes information is missing information | Every row answers what, which and how long. Strip decoration, never information |
| Rule 45 | On mobile lists, put frequent row actions behind a swipe | A menu button costs two taps for a one-tap intent | At most 2 swipe actions per side. Destructive on the far end. Always a non-gesture way too |
| Rule 95 | Right-align numeric columns and use tabular figures | Decimals line up, so size reads as a shape | Right-aligned. Headers align with their data |

## Borders, radius and separation

| ID | Do | Why | Value |
|---|---|---|---|
| Rule 56 | Do not box everything. Replace most borders with space or a background | Every border competes with the content. Boxes in boxes look cramped | Borders for inputs and true dividers only. Elsewhere surface plus shadow, or space |
| Rule 89 | Separate list rows with tone and space, not lines | Bordered rows read as dated. Tone plus a gap separates with fewer elements and works in dark mode | Row on `muted` or `accent`, gap 8. A 1 px `border` hairline only in dense data tables |
| Rule 43 | Give nested corners a smaller radius than their container | Concentric corners only look right when inner equals outer minus padding | Inner radius = outer radius minus padding, rounded to the nearest `border radii` variable. Never larger than the outer |
| UI-Pedia OBJ-04 | Round corners slightly | Even 2 to 6 of rounding reads as friendlier than a sharp corner | The kit's radius variables. Never `radius-none` on an interactive part |
| UI-Pedia OBJ-05 | Derive the radius from the grid base unit, and keep it consistent | Consistency matters more than the exact value | One radius family from `border radii` |

## Cards and actions

| ID | Do | Why | Value |
|---|---|---|---|
| Rule 85 | Give a card one primary action. No inline links in card copy | Inline links break reading and compete with the card's action | At most 1 primary and 1 secondary action per card |
| Rule 44 | Never scroll inside a card. Truncate and link out | A nested scroll area steals the page scroll and hides its own overflow | Clamp to 2 to 3 lines, with a visible action such as "See more" |

## Onboarding, plans and brand

| ID | Do | Why | Value |
|---|---|---|---|
| Rule 27 | Show how many onboarding steps there are before the first one | Open-ended effort is what people decline | Dots or "1 of N" on every step. N at most 4 for first run |
| Rule 32 | Always offer Skip, within thumb reach | Trapping a returning user in a tutorial drives them away | Skip in the bottom third, near the primary, on every step |
| Rule 34 | Mark the recommended plan. Never present tiers as equals | Faced with equal cards, users pick the cheapest or leave | Exactly one highlighted plan: `primary` border plus a Badge |
| Rule 42 | Show the logo once. Use the headline to say what you do | Repeating the name spends the best space saying nothing new | Logo once in the header. The headline states the value |

## Visual weight and shape

| ID | Do | Why | Value |
|---|---|---|---|
| UI-Pedia OBJ-01 | Test visual weight by squinting, then recalling what stood out | What you recall is what carries weight | The primary action should be recalled first |
| UI-Pedia OBJ-02 | Type rotation angles. Never rotate by hand | Hand-rotated objects drift out of consistency | |
| UI-Pedia OBJ-03 | Remember a point is not a pixel | On dense screens one pt can be 4 px or more | Size touch targets in pt |
| UI-Pedia OBJ-06 | Treat shape as a deliberate choice | Shape has no standard system, so it is a design decision | Circles for isolated buttons and avatars. Rectangles for containers |

What adds weight: regular shapes, diagonal orientation, saturated or isolated colour, contrast, texture, foreground depth, faces and movement.

## Check

- Every component has every state in its row of the table above, including Long content and Overflow where they apply.
- Every text in a long-content frame wraps, or truncates with a drawn way to read it in full. No text clips or overlaps.
- No selection is signalled by colour alone or by a border alone.
- No homogeneous list uses cards, and no list lacks a Skeleton and an Empty state.
- No nested radius equals its container's radius.
