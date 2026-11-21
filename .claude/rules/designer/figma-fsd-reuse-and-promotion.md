---
description: Searching for an existing Figma part before creating one, counting the pages that will use a part, or moving, promoting or migrating a component, including a legacy Reusable Blocks part
paths:
  - "docs/ui-design/**/inventory.md"
  - "docs/ui-design/**/placement-plan.md"
---

# Figma FSD reuse and promotion

A part is created once, in its FSD home, and moved only on purpose. This rule says what to reuse before creating, how to count a part's pages, and how a part moves or is promoted.

Where a part goes is in [figma-fsd-structure.md](figma-fsd-structure.md): the files and pages in "Two files", the layer in "Which layer a component belongs to", and the allowed instances in "Nesting follows the import direction".

## Reuse before create

Before you plan or build any part, search for an existing part with the same purpose. Search in this order:

1. The library: the kit pages, the `<Component> (extension)` pages and `patterns`.
2. The product file's `Reusable Blocks` page, when it exists.
3. The product file's `entities`, `features` and `widgets` pages, and every `ui parts` Section.

Match by purpose, not by name. Language chips and a locale tab are one part. Card headings and a section heading are one part.

| Found | Do |
|---|---|
| A part with the same purpose and anatomy | Use an instance of it |
| A part with the same purpose that lacks a variant, property or slot | Extend that part. Never copy it |
| A legacy `Reusable Blocks` part with the same purpose | Use an instance. Mark it `reuse (legacy)` and add a promotion row to the placement plan |
| Nothing with the same purpose | Create it in its FSD home, per "Which layer a component belongs to" in [figma-fsd-structure.md](figma-fsd-structure.md) |

- Never create a second component with the same purpose as an existing one, or as a catalog component.
- A library part is extended only in the library, in a kit extension.

## Planned uses

- Count the pages that will use a part, not only the pages already built.
- Take planned pages from this feature's page map in `flows/` and from the Screens table of its `inventory.md`. Nothing else counts.
- Count page slices, not frames. Subpages and states of one route are one page. A tool screen opened as its own route is its own page.
- A part another feature will use is not a planned use. It is a library promotion, proposed in the placement plan.
- Record the planned pages in the inventory's `Planned on` column.

## Move and promote

- A part starts in its final layer when its planned uses say so. A part with one planned page starts in its page's `ui parts` Section.
- Move it when a second page is planned or built: to `entities/` when it only shows data, to `features/` when it changes data.
- Never create an entity for a concept one planned page uses. Never create a feature for UI that only shows data.
- An existing part moves only through an owner-approved row of `placement-plan.md`.
- To move: move the main component to the new Section, re-point every instance to it, then delete the old main component once 0 instances remain.
- Never duplicate a component to move it. Two main components with the same purpose are an audit finding.
- A promotion to `shared/ui` moves the component to the library as a kit extension. Ask the user first: it is a new catalog row.
- Skip a page marked for deletion, per "Page status" in [figma-fsd-structure.md](figma-fsd-structure.md).

## Legacy Reusable Blocks

The `Reusable Blocks` page is legacy `shared/ui` work in a product file, made before the FSD structure rules. Its parts are reused where they fit and migrated to the library over time.

- Read it with `get_metadata` on the page. Each Section name is a block's purpose, such as `locale-tab`, `stepper-item`, `section-heading`. The main components inside it are the blocks.
- Never add, change or rename anything on it. Never delete it.
- An instance of a legacy block counts as `shared/ui` for nesting.
- Promote a legacy block in this order: the placement plan proposes it, the user approves it, it is built in the library as a kit extension, the library is published, every instance is swapped to the library set, then the legacy main component is deleted once 0 instances remain.
- A legacy block with no catalog row needs the owner to approve a catalog row before its promotion.

## Check

- No two main components share a purpose, a name or an FSD path, and none repeats a kit, catalog, library or legacy component.
- Every reused legacy part is marked `reuse (legacy)` and has a promotion row in the placement plan.
- No component with fewer than 2 planned pages is in `entities/`, `features/` or `widgets/`.
- Every planned-page count comes from `flows/` or the inventory's Screens table, and is recorded in `Planned on`.
- No existing part moved without an owner-approved placement plan row.
- No moved component left a duplicate main component behind, and no old main component was deleted while it still had instances.
- Nothing on the legacy `Reusable Blocks` page was added, changed, renamed or deleted.
