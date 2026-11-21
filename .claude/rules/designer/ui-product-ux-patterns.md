---
description: Designing or reviewing how a screen saves, deletes, archives, filters, lists or syncs data, and whether similar screens look and behave the same
paths:
  - "docs/ui-design/**/sketch/**"
  - "docs/ui-design/**/flows/**"
---

# UI product UX patterns

Product UX rules for daily-use tools. Each row says what the design must show. Cite an item as `UX-<n>`, per [ui-rule-ids.md](ui-rule-ids.md).

## Saving and writing

| ID | The design shows | Why | Value |
|---|---|---|---|
| UX-1 | Autosave. Typing is never blocked by a save | Work is never lost, and the user never waits on a save | A "Saved" or "Saving…" status near the title. No Save button on a form that autosaves |
| UX-1 | A guard against losing unsaved changes | Closing a tab must not throw work away | A leave-page prompt state for every editor with unsaved changes |
| UX-3 | Optimistic success where the action allows it | The screen answers at once instead of showing a spinner | The success state at once, plus a rollback state: the old value back and an error message |
| UX-3 | A loading state for every action that must not be optimistic | Some actions must be confirmed by the server before the screen says they worked | See the table below |
| UX-2 | Presence of other editors, only when real-time editing is in scope | Concurrent editing is costly. Show it only when it is a requirement | Avatars of current editors. Otherwise leave it out |

An action is optimistic only when all of these hold:

- It is reversible, such as a rename, a toggle or a reorder.
- The previous value is known, so the rollback is clear.
- Two writes to the same record cannot conflict, or the design shows how a conflict resolves.

Never optimistic, always a loading state: payments, deletes that cascade, role or permission changes, anything sent to another system.

## Deleting and archiving

| ID | The design shows | Why | Value |
|---|---|---|---|
| UX-4 | Undo instead of a confirm dialog | A confirm dialog interrupts every time. Undo costs nothing when the user was right | The item leaves the list at once. A Toast with an Undo action stays about 5 seconds. The real delete runs after it closes |
| UX-4 | A confirm dialog only for an action that cannot be delayed or undone | Irreversible actions must be prevented or confirmed | Alert Dialog. The title names the consequence. The confirm button says the action, such as "Delete project" |
| UX-5 | Archive and unarchive next to, or instead of, delete | Users should not have to choose between keeping a record forever and destroying it | An Archive action, a filter that shows archived records, and an Unarchive action on them |

## Lists and views

| ID | The design shows | Why | Value |
|---|---|---|---|
| UX-6 | Filters, sort, search and the active tab as part of the shareable view | A teammate who opens a shared link sees exactly the same view | Every active filter is visible on screen. See the URL table below |
| UX-7 | Feeds and long lists that load as the user scrolls | In a daily-use tool, a "Next page" button is friction | No "Load more" button. A loading row at the bottom while fetching. A clear end-of-list marker |
| UX-7 | Page numbers on data tables | Tables are scanned by position, and users return to a page | Pagination below the table. The current page is part of the shareable view |

Mark each list in `screens.md` as `feed` or `table`.

What a shared link restores:

| State | In the link |
|---|---|
| The selected record | Yes |
| Filters, sort, search, page, page size, the active tab | Yes |
| A dialog that shows one record | Yes |
| Unsaved form input, hover, an open dropdown | No |
| Passwords, tokens, personal data | Never |

- A date in a link is a UTC instant, so every viewer in every time zone sees the same data.
- A filter set that can grow very large, such as hundreds of selected ids, is saved as a named filter. The link carries only the filter's id.

## Consistency

| ID | The design shows | Why | Value |
|---|---|---|---|
| UX-8 | Screens that share a concept look and behave the same | Users learn one screen and can use them all | Every list-with-create-edit-delete screen uses the same layout, toolbar, row actions, empty state and detail pattern |
| UX-9 | A reference screen for each repeated screen type | "What good looks like" is defined once and copied | `screens.md` names the reference screen. Other screens of that type copy its structure |

## Not design checks

| ID | Why it is not checked here |
|---|---|
| UX-10 | It is about packaging design preferences as agent skills. This rule set is that packaging |
| UX-11 | End-to-end verification of the running app happens after implementation. The design-side equivalent is the usability scorecard in the flows stage |

## Check

- No editor has a Save button and also autosaves.
- No delete opens a confirm dialog unless the action cannot be undone or delayed.
- Every list says whether it is a feed or a table, and has its end or empty state drawn.
- Every non-optimistic action from the list above has a loading state.
