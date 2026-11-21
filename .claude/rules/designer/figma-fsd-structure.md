---
description: Deciding which Figma file, page and Section a component or screen goes in, how a slice or page is named, which FSD layer a component belongs to, and what it may nest
paths:
  - "docs/ui-design/**/inventory.md"
  - "docs/ui-design/**/figma.md"
  - "docs/ui-design/**/placement-plan.md"
  - "docs/ui-design/**/audit/**"
---

# Figma FSD structure

Every Figma component sits where its code will sit. The frontend uses Feature-Sliced Design (FSD), so the Figma file, page and Section of a component name its future folder. A developer reads the location and never decides it again.

How one component is built is in [figma-component-conventions.md](figma-component-conventions.md). Kit names and variables are in [designer-ui-kit.md](designer-ui-kit.md). What to reuse before creating, how to count planned pages, and how a part moves or is promoted are in [figma-fsd-reuse-and-promotion.md](figma-fsd-reuse-and-promotion.md).

FSD layers, top to bottom: `pages`, `widgets`, `features`, `entities`, `shared/ui`. What each holds is in "Which layer" below, and what each may use is in "Nesting". `app/` holds tokens and global styles: in Figma that is the library's Foundations, never a page of its own.

## Two files

| File | Holds | Never holds |
|---|---|---|
| Library file, the project's duplicate of the kit | The kit pages, Foundations, kit extensions, the `patterns` page | Domain words, entities, features, screens |
| Product file, one per feature | `entities`, `features`, `widgets` and `pages/<slice>` pages | A new `shared/ui` component, a variable, a style |

A product file may also hold the legacy `Reusable Blocks` page. See "Legacy Reusable Blocks" in [figma-fsd-reuse-and-promotion.md](figma-fsd-reuse-and-promotion.md).

A product file holds no local variable collection and no local style. Every variable and style comes from the library. To clear local ones:

- Rebind each node that uses a local variable or style to the library variable or style of the same role.
- Delete a local variable or style only when it has 0 uses.
- Never touch a page of an old design, such as `OLD Admin Attributes`, the legacy `Reusable Blocks` page, or a page marked for deletion. Their local values stay until the owner deletes those pages.

### Library file pages

| Page | Content |
|---|---|
| The kit's own pages | One page per shadcn component, as the kit ships them. Never renamed |
| Foundations | Variables, text styles, effect styles. The added `dark` mode on `shadcn colors` |
| `<Component> (extension)` | One page per kit extension. One Section `shared/ui/<cli-name>` holding the set `<Component> - Nova` |
| `patterns` | One Section per catalog `pattern`, named `shared/ui/<cli-name>`: `shared/ui/data-table`, `shared/ui/date-picker` |

- `<cli-name>` is the shadcn install name in kebab-case: `alert-dialog`, `toggle-group`.
- Which components need an extension is the Figma column of [designer-component-catalog.md](designer-component-catalog.md).
- Publishing the library is a manual step in the Figma UI. Report it to the user after any library change.

### Product file pages

| Page | Present when | Sections |
|---|---|---|
| `entities` | The inventory has an entity | One per slice: `entities/timesheet` |
| `features` | The inventory has a feature | One per slice: `features/approve-timesheet` |
| `widgets` | The inventory has a widget | One per slice: `widgets/timesheet-table` |
| `pages/<slice>` or `pages/<group>/<slice>` | One per route | `ui parts` for this page's own components. The screen frames sit beside it |
| `Reusable Blocks` | Only when the user made it before this rule. Never create it | Legacy `shared/ui` blocks. Read-only |

- Create a page only when it gets its first component or screen.
- Never rename or delete a page the user made. Move old work to a page named `archive`.
- A screen frame is named `<Name>Page / <platform> / <mode>`, for example `TimesheetsPage / mobile / light`. A state other than the default adds ` / <state>`: `TimesheetsPage / mobile / dark / empty`.
- `<Name>` comes from the slice, never the group: page `pages/admin/attribute` holds `AttributePage / desktop / light`.

### Page status

The owner may start a page name with one status marker and a space, such as `🟢 pages/admin/attribute`.

| Marker | Means | Agents |
|---|---|---|
| 🟢 green circle | Ready for development | Same checks as an unmarked page |
| 🟡 yellow circle | In progress | Same checks as an unmarked page |
| ⚫ black circle | To be deleted | Skip the page in build, fix, audit and promote. List it as pending deletion |

- Every rule reads the page name after the marker. `🟢 pages/admin/attribute` is the page `pages/admin/attribute`.
- Only the owner adds, changes or removes a marker. An agent never does, and never renames the rest of the name.
- An agent never deletes a page, including a page marked for deletion.

## Slice names

- A slice name is kebab-case: lowercase words joined by `-`.
- A feature slice starts with a verb: `approve-timesheet`, `add-comment`.
- An entity slice is a singular business noun: `timesheet`, `workflow`.
- A page slice names the screen: `timesheets`, `workflow-editor`.
- Never name a slice `common`, `core`, `misc`, `components`, `helpers` or `shared`.
- A Section name is the full slice path: `features/approve-timesheet`, never `approve-timesheet`.

### Page slice groups

- A page may sit in one slice group: `pages/<group>/<slice>`, such as `pages/admin/attribute`.
- The group name is kebab-case and names a business area: `admin`, `payroll`. Never a banned slice name.
- One group level only. Never `pages/<group>/<group>/<slice>`.
- The Figma page name is the full path, `pages/admin/attribute`. Its parts Section stays `ui parts`.
- A component description's `FSD:` path carries the group: `pages/admin/attribute/ui/AttributeHeader.tsx`.
- Everywhere this rule writes `pages/<slice>`, the group form is valid too. Subpages of one grouped route are still one page.
- Entities, features and widgets never use a group unless the owner asks for it.

## Which layer a component belongs to

Take the first row that matches. "Planned on" counts pages per "Planned uses" in [figma-fsd-reuse-and-promotion.md](figma-fsd-reuse-and-promotion.md).

| The component | FSD home | Figma location | Name |
|---|---|---|---|
| A shadcn catalog component, or UI with no domain words and no business data, at any number of uses | `shared/ui/<cli-name>` | Library: the kit page, or its extension page | The kit set name, `<Component> - Nova` |
| Shows one business concept, planned on 2 or more pages, with no action that changes data | `entities/<noun>` | Product file, page `entities`, Section `entities/<noun>` | PascalCase, after the concept: `TimesheetRow`, `RoleBadge` |
| Performs one user action, planned on 2 or more pages | `features/<verb-noun>` | Page `features`, Section `features/<verb-noun>` | PascalCase, after the action: `ApproveButton`, `AddCommentForm` |
| Planned on one page only, at any size | `pages/<slice>` | That page's `ui parts` Section | PascalCase part name: `WeekSummary` |
| A large block composing features and entities, planned on 2 or more pages | `widgets/<block>` | Page `widgets`, Section `widgets/<block>` | PascalCase: `TimesheetTable`. Only when no other row fits |

- A domain-free part is `shared/ui` even when one page uses it today: a section navigation, language tabs, an expression editor, a tree select.
- A part about a business concept is never `shared/ui`: an attribute chooser, a chooser row. It is an entity once 2 or more pages plan it, else a page part.
- A `shared/ui` component name never contains a domain word.
- An entity or feature wraps kit instances. It never redraws a button, input or badge.
- A domain-free part with no catalog row is proposed as a catalog row first. It is never built before the owner approves the row.

## Nesting follows the import direction

A component contains instances only from layers below its own, never from a sibling slice.

| A component in | May contain instances from | Never contains |
|---|---|---|
| `shared/ui` | `shared/ui` only | Anything from the product file, except a legacy block |
| `entities/<x>` | `shared/ui` | A feature, another entity |
| `features/<x>` | `entities`, `shared/ui` | Another feature, a widget |
| `widgets/<x>` | `features`, `entities`, `shared/ui` | Another widget, a page part |
| `pages/<x>` | `widgets`, `features`, `entities`, `shared/ui`, its own `ui parts` | Another page's parts |

An instance of a legacy `Reusable Blocks` block counts as `shared/ui` for nesting.

### The `actions` slot

An entity that needs a button which changes data gets an instance-swap slot named `Actions`. The entity never holds the feature.

- The entity's default `Actions` value is an empty placeholder frame.
- The page fills `Actions` with the feature instance, for example `ApproveButton` in `TimesheetRow`.
- The entity description lists the slot: `slots: Actions`.

## Check

- Every component sits in a Section whose name is a valid slice path, per "Slice names". The legacy page is exempt.
- Every product page is `entities`, `features`, `widgets`, `archive`, `Reusable Blocks`, `pages/<slice>` or `pages/<group>/<slice>`, after an optional status marker. Every screen frame is named per "Product file pages".
- No agent added, changed or removed a status marker. No page marked for deletion was built, fixed, audited, promoted or deleted.
- No product node uses a local variable or style.
- No group name is banned, deeper than one level, or used on an entity, feature or widget without the owner's request.
- No entity changes data. No entity holds a button outside its `Actions` slot.
- Every component's description `FSD:` path starts with its Section's slice path.
- No new `shared/ui` component lives in a product file, and no domain component lives in the library.
- No component nests an instance from its own layer or a layer above it.
- No domain-free part is a page part, and no business-concept part is in `shared/ui`.
- Duplicate, planned-use and move checks are in "Check" of [figma-fsd-reuse-and-promotion.md](figma-fsd-reuse-and-promotion.md).
