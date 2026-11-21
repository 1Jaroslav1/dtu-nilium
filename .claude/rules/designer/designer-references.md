---
description: Searching Mobbin for real-app screens or flows, or writing, reading or citing references.md for a feature
paths:
  - "docs/ui-design/**"
---

# Design references

Mobbin is a library of screens and user flows from shipped apps. The designer agents search it to find the familiar pattern before they invent one. That is PSY-33, "Prefer the familiar pattern", and P35, "Adopt the familiar pattern before inventing one", both in [ui-cognition.md](ui-cognition.md). A reference shows what users already know. It never decides the design.

## What a reference may decide

| Take from a reference | Never take from a reference |
|---|---|
| Block order and priority on a screen | Branding, logos, colours, fonts or illustrations |
| Which states a screen shows: empty, loading, failure, success | Copy, labels or microcopy, word for word |
| The steps of a flow, its error paths and its recovery | Components outside [designer-component-catalog.md](designer-component-catalog.md) |
| Where common controls sit: navigation, search, filters, the primary action | Spacing, radius or sizes. Those come from the kit variables in [designer-ui-kit.md](designer-ui-kit.md) |

- A UI rule beats a reference. When the common pattern breaks a rule, follow the rule and write the rule ID under `Leave`.
- The common pattern is what most results share, not what one app does. One app is an example, not a pattern.
- A screen that follows no reference says so in `references.md`, with the reason.

## Searching

| Setting | Value |
|---|---|
| Server | `mobbin`, from the project `.mcp.json`. Each person signs in once with their own paid Mobbin account |
| Platform | `ios` for a mobile-first design. `web` for tablet or desktop. Mobbin has no Android library |
| Screen searches | One per screen type, not per screen. Screens that share a concept share a type, per "screens that share a concept look and behave the same" (UX-8 in [ui-product-ux-patterns.md](ui-product-ux-patterns.md)). At most 8 per run |
| Flow searches | One per user goal. At most 6 per run |
| Results per search | `limit` 8 for screens and sections. `limit` 4 for flows. Every result returns images, which fill the context |
| Website sections | `search_sections` only for a public marketing page, such as pricing or a landing page. Never for an app screen |
| `output_destination` | `design_tool` on every call |
| `output_tool` | `Figma` on every call |

A query describes one screen type or one journey, plus the kind of app: "time tracking app weekly timesheet", "B2B app invite team member flow".

- Never put a customer name, a person's name, an internal code name, an issue number or requirement text in a query or a `task_intent`.
- `task_intent` is one generic English sentence, the same on every call of a run: "Design the screens of a time tracking feature".
- Never call `save_content`, `create_collection` or `add_comment` unless the prompt asks to save to Mobbin.

## Citing

- Cite every reference as a markdown link to its `mobbin_url`.
- Never write an `image_url` into any artifact. Image links expire after 30 days, and the images stay under Mobbin's licence.
- Never download a Mobbin image into the repository or into Figma.
- When a result carries an `ai_usage_notice`, copy its `text` word for word into the `Mobbin notice` section of `references.md`.

## When Mobbin is unavailable

When the `mobbin` tools are missing, fail, or ask for sign-in, the stage continues without references.

- Write `Mobbin: not signed in` or `Mobbin: unavailable` under `absent` in the output header.
- Never stop a stage only because references are missing.
- Never ask the user for a token or a sign-in code. Signing in is done through `/mcp` by the user.

## `references.md`

`docs/ui-design/<id>-<feature>/references.md` is a living document. A later run updates its own section in place and keeps the other section.

| Section | Written by | Read by |
|---|---|---|
| `## Screens` | The sketch stage | The sketch, the build and modify modes of the Figma stage |
| `## Flows` | The flows stage | The flow mapping |
| `## Mobbin notice` | Either stage | The user |

Every entry holds: the query, the common pattern in one sentence, `Take`, `Leave` with rule IDs, and 2 to 4 example links.
