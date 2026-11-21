---
description: Citing a UI, UX or psychology rule ID in a design artifact or finding
paths:
  - "docs/ui-design/**"
---

# UI rule IDs

The `ui-*.md` topic rules in this folder hold the UI, UX and psychology rules the designer agents apply. Each topic rule lists its own IDs. These files are complete on their own: no other source is needed to apply or cite a rule.

## ID formats

| Cite as | Meaning |
|---|---|
| `Rule 30` | One of the 101 Dos & Don'ts |
| `P05` | One of the 48 design principles |
| `BTN-01` | A component guideline. Prefixes: `ICN` icons, `GRD` grids, `TYP` typography, `BTN` buttons, `OBJ` objects and shapes, `TBL` tables, `FRM` forms, `NAV` navigation, `ANI` animation, `ILL` illustrations, `CRD` cards, `SCR` screens, `GRA` gradients, `SHD` shadows |
| `PSY-24` | One of the 36 cognitive rules |
| `UX-4` | One of the 11 product UX rules |

- Never create a new ID. Cite the ID as the topic rule writes it.
- Each ID is defined in exactly one topic rule. Another topic rule that applies it uses a named row, such as "Bottom navigation", and names the ID and its file in the row.
- Component guideline IDs always have two digits: `SHD-03`, `FRM-09`.
- Write `UI-Pedia SHD-03` and `UI-Pedia FRM-09` in full. Other rule sets in this repo use `SHD-` and `FRM-` for different rules.
- P25 (the golden ratio) and Rule 101 are not design checks.

## Citing a finding

- Lead with the ID: `Rule 30: two filled buttons on the toolbar.`
- Name the topic rule file that holds the ID. Find it by searching `rules/designer/ui-*.md` for the ID.
- [figma-fsd-structure.md](figma-fsd-structure.md), [figma-fsd-reuse-and-promotion.md](figma-fsd-reuse-and-promotion.md) and [figma-component-conventions.md](figma-component-conventions.md) hold no IDs. Cite a finding against them by file and section name.
