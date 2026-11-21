---
description: Writing, reading or resolving audit marks in a Figma file, the annotations and note frames that carry audit findings from the reviewer to the fixer, or keeping any annotation when an instance is recreated, swapped or detached
paths:
  - "docs/ui-design/**/audit/**"
---

# Figma audit annotations

An audit leaves its findings in the Figma file as marks, so the agent that fixes the design finds each one on its node. The audit `.json` stays the source of truth. A mark is its copy in Figma.

## Channels

| Channel | Use | Limit |
|---|---|---|
| Native annotation on the node | Primary. One per node and round | Sections and Pages take none. Use a note frame |
| Note frame on the page | Fallback for a Section, a Page, or a node with no annotatable ancestor | Lives outside the component tree, never inside a Section |
| Figma comment thread | Only when a comment tool is in the agent's `tools` list | No Figma MCP tool known today reads or writes comments, and the Plugin API behind `use_figma` has no comment API. Without such a tool, never claim a comment was read or written |

## Category

- One annotation category per audit round, named `Audit r<N>`, where `<N>` is the round of the audit report.
- Colour: red.
- Create the category when it does not exist. Reuse it when it does.
- Never rename, recolour or delete a category, including earlier rounds' categories.

## Annotation

- One annotation of the round's category per node. All of the node's findings in that round are merged into it.
- One line per finding: `<code> <severity>: <problem>`. Examples: `AUD-32 major: Raw fill colour`, `Rule 30 major: Two filled buttons in the toolbar`.
- `<code>`, `<severity>` and `<problem>` come from the audit `.json` unchanged. Never reword them.
- A finding on a layer that takes no annotation, such as a layer inside an instance, goes on the nearest ancestor that does. Its line ends with `(on <node id> <node name>)`.
- Append only. Keep every other annotation on the node, whatever its category or author. Add a line only when the same line is not already there.
- Write the text as plain `label`, never `labelMarkdown`.

## Note frame

| Field | Value |
|---|---|
| Name | `AUDIT <codes>`, codes in line order, for example `AUDIT AUD-01 AUD-09` |
| Parent | The page, never a Section or a component |
| Place, for a Section | Right of the Section, 80 px gap, top edges aligned |
| Place, for a Page | Right of all page content, 80 px gap, top edge at the topmost content |
| Look | White fill, 2 px red stroke, 16 px padding, 360 px wide, height hugs |
| Text | First line `Audit r<N> \| target <node id> <node name>`. Then one finding line each, in the annotation line format |

- One note frame per target and round. A second run of the same round appends lines to it.
- An earlier round's frame for the same target stays. The new one goes below it.
- The audit script skips every page-level frame whose name starts with `AUDIT `. Never give a design frame that name.

## Resolving a line

The fixer edits the line in place. It never deletes a line, an annotation or a note frame.

| Fix outcome | Line becomes |
|---|---|
| `fixed` | `FIXED r<N> \| <line>` |
| `token` | `OPEN token \| <line>` |
| `decision` | `OPEN decision \| <line>` |
| `not fixed` | `OPEN not fixed \| <line>` |

- `<N>` is the round of the audit report the fix ran on.
- A line that already starts with `FIXED r` is never fixed again.
- A line with no `<code> <severity>:` start was written by a person. The fixer treats it as a `decision`, and prefixes `OPEN decision | `.

## Cleanup

- The mark run of round `<N>` removes an earlier round's annotation or note frame only when every line in it starts with `FIXED r`.
- Annotations and note frames with any `OPEN` line or any unprefixed line stay.
- A persisting finding gets a line in the new round's annotation as well. The old line stays as history.

## Annotations inside an instance

An annotation on a node inside an instance belongs to that instance. Recreating, swapping or detaching the instance deletes it.

- Before a build or fix recreates, swaps or detaches an instance, read the annotations of the instance and of every node inside it.
- Copy each one to the same node in the new instance. When that node does not exist, copy it to the main component or to the screen frame, with `(was on <node id> <node name>)` at the end.
- Report every annotation that could not be kept, with its text and old node id.
- Ask owners to annotate a main component or a screen frame, never a node inside an instance.

## What a mark run may change

| May | Never |
|---|---|
| Create the `Audit r<N>` category | Change a fill, stroke, effect, layout, size, position, name, variant, property or component of a design node |
| Set `annotations` on a node | Move, delete, detach or reorder a design node |
| Create, edit and remove `AUDIT ` note frames on a page | Edit a variable, a style or a library component |

## Limits

- Only the findings in the audit `.json` can be marked. A code listed in `truncated` has findings with no row. They are marked when a later round lists them.
- `get_screenshot` does not render native annotations. Verify a mark by reading `node.annotations` back, never from a screenshot.
- `use_figma` returns at most 48,000 bytes. The marks for one call stay at or under 200 nodes.

## Check

- Every node row of the `.json` has a line in the round's annotation, or in a note frame.
- No annotation of another category lost or changed a line.
- No design node changed anything but its `annotations`.
- Every line the fixer touched starts with `FIXED r<N> | ` or `OPEN <outcome> | `.
- No annotation was lost when an instance was recreated, swapped or detached, or it is reported.
