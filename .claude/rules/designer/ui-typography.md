---
description: Choosing, applying or reviewing text styles, font sizes, weights, alignment, line length or capitals in a Figma design or an inventory
paths:
  - "docs/ui-design/**/inventory.md"
  - "docs/ui-design/**/figma.md"
  - "docs/ui-design/**/audit/**"
---

# UI typography

Type is most of an interface. Almost every typographic mistake is the same one: offering many decisions where a system should have made them once. ID formats are in [ui-rule-ids.md](ui-rule-ids.md). Write typography IDs in full, for example `UI-Pedia TYP-04`.

## Kit text styles

Every text node uses one of the kit text styles in [designer-ui-kit.md](designer-ui-kit.md). Never set a font, size, weight or line height on a node directly.

| Kit style | Use for |
|---|---|
| `heading 1` to `heading 4` | Page title, section title, card title, group title. One `heading 1` per screen |
| `paragraph large` | Lead text under a page title |
| `paragraph`, `paragraph small` | Body text and UI text: labels, button labels, table cells |
| `paragraph mini`, `caption` | Captions, hints, metadata. Never for prose |
| monospace styles | Code, IDs, keys and numbers that must align |
| weight suffix `normal`, `medium`, `bold` | Emphasis inside one size. Vary weight before adding a size |

- A body style whose font size is under 14 is never used for prose (Rule 86). The style's size is read from the kit when foundations are built.
- A needed size or weight with no kit style is a token gap. Report it. Never set the value by hand.
- A style that cannot be imported into the product file stops the build. Report the missing style. Never fall back to another style.

## Scale and family

| ID | Do | Why | Value |
|---|---|---|---|
| Rule 13 | Use few sizes. Vary weight, not size, within a section | Each new size is another level of hierarchy to place | A scale of 4 to 5 sizes. Two weights within a section |
| Rule 31 | Use one typeface per product | Two families rarely share proportions, so the product loses one voice | The kit's `font-family`. A second family only for a deliberate display role, never body |
| UI-Pedia TYP-05 | Do not use too many typefaces | Many fonts emphasise too many things | Same as Rule 31 |
| UI-Pedia TYP-04 | Keep the weight list short | Every weight is a file to load | Raise the size before adding a weight. 2 to 3 weights in the product |
| P22 | Derive the heading size from the body size | Sizes picked by eye drift | Heading about 1.618 × body: 16 → 26. Then pick the nearest kit heading style |
| P22a | Let line length override the ratio | Long lines need more line height so the eye finds the next line | Longer measure, taller line height |
| UI-Pedia TYP-06 | Cover the whole scale, not only headings | Helper text and labels get forgotten | Every text role on the screen maps to a kit style |
| UI-Pedia TYP-07 | Express the scale as tokens | Hard-coded sizes cannot be managed | The kit text styles are the tokens |
| UI-Pedia TYP-08 | Define the scale once and share it for every platform | Each platform drifting its own scale breaks consistency | Mobile and desktop use the same kit styles |
| UI-Pedia TYP-03 | Keep a distinctive brand face for display sizes only | Display faces are hard to read small | |
| UI-Pedia TYP-02 | Avoid novelty and cultural faces | They cannot be bolded or italicised, and they carry a fixed connotation | |

## Size and readability

| ID | Do | Why | Value |
|---|---|---|---|
| Rule 86 | Never set body text below 14 | Below 14, reading turns into decoding on low-density screens | Body at least 14, 16 preferred. Captions at least 12. Mobile inputs at least 16, or iOS zooms on focus |
| UI-Pedia TYP-01 | Judge line height against x-height, not point size | A small x-height leaves more space between lines | Body line height about 1.5 × size |
| UI-Pedia TYP-09 | Tighten letter spacing as type grows. Loosen it as type shrinks | Large type looks loose, small type looks cramped | Headings slightly negative. Captions slightly positive. Use the kit style's value |
| UI-Pedia TYP-10 | Balance white space around text both ways | Too little is cramped, too much looks empty | Spacing per the layout rule's scale |

## Alignment, measure and case

| ID | Do | Why | Value |
|---|---|---|---|
| Rule 17 | Left-align body text. Never centre a multi-line paragraph | Centred lines move the start of every line, so the eye hunts for it | Body left. Headings may centre at 2 lines or fewer. Never justify |
| Rule 35 | Cap the line length by characters, not by container width | Past about 75 characters the eye loses the line | Text box max width about 65 characters of the style |
| Rule 94 | Aim for 55 to 65 characters per line | Long lines get re-read. Very short lines break rhythm | 45 to 75 acceptable. Check the narrowest breakpoint too |
| Rule 87 | Use capitals only on short labels | All caps flatten word shapes and slow reading | At most 3 words in capitals: eyebrows, tags. Add slight letter spacing |

## Hierarchy and copy

| ID | Do | Why | Value |
|---|---|---|---|
| UI-Pedia TYP-11 | Keep text short, but not so short that it confuses | Over-trimmed text forces a guess | Short, concise, informative |
| UI-Pedia TYP-12 | Be visually consistent | Varying colour, size and style for the same role distracts | One kit style per text role across the product |
| Label and value | Make a label and its value differ in at least two of: size, weight, colour, position | A label in the value's style reads as part of the value. A field named "Description" beside description text is lost | Default for field name and value rows: the name in a label column on the left, `paragraph small medium` in `muted foreground`. The value on the right in `paragraph normal` and `foreground` |
| UI-Pedia TYP-13 | Test the scale on real devices | A scale can look right in the tool and fail on a phone | Screenshot every screen at mobile width |

Hierarchy comes from three tools: heading styles, size and shape, and colour (`foreground` for primary text, `muted foreground` for secondary). Contrast comes from colour, case, and weight or italics.

## Check

- Every text node uses a kit text style. No node has a local font, size or weight.
- No prose is under 14, and no screen uses more than 5 text sizes.
- No multi-line paragraph is centred or justified, and no text box runs past about 75 characters per line.
- No text longer than 3 words is in capitals.
- Every label differs from its value in at least two of size, weight, colour and position. No requested style was replaced by another.
