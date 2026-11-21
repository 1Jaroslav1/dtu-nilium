---
description: Writing, reading or resuming from a design artifact (sketch, user flows, inventory, Figma keys, placement plan, audit report or fix log) for a feature, or running a designer stage without the earlier stages
paths:
  - "docs/ui-design/**"
---

# Design artifacts

Every designer stage reads and writes its hand-off files in one folder per feature. The stage table below is the one place the stages, their inputs and their fallbacks are defined.

## Folder

```
docs/ui-design/<id>-<feature>/
  sketch/index.html                       low-fidelity screens, greyscale
  sketch/screens.md                       one brief per screen: job, primary action, states
  references.md                           Mobbin references: common pattern per screen type and per goal
  flows/user-flows.md                     user flows with Mermaid, plus the usability scorecard
  inventory.md                            element → shadcn base → FSD home table
  figma.md                                library and product file keys, page and Section node ids
  placement-plan.md                       per component: current location, target FSD home, action, status
  audit/<datetime>_audit_round_<n>.md     audit findings, human-readable
  audit/<datetime>_audit_round_<n>.json   the same findings, machine-readable
  <findings file name>_fix.md             fix log, next to the findings file it fixed
```

- `<datetime>` is `YYYYMMDD-HHmm` in UTC, for example `20261101-1430`. Never use local time, so every reader sorts reports the same way.
- Every date or time written inside an artifact is ISO 8601 UTC with `Z`: `2026-11-01T14:30:00Z`.
- Files without `<datetime>` are living documents. A later run updates them in place.
- Files with `<datetime>` are reports. A later run writes a new file and never edits an old one.
- The latest report of a kind is the one with the highest `<datetime>`.
- Write design artifacts only under `docs/ui-design/`.

## Feature slug

- The slug is the folder name `<id>-<feature>`, for example `docs/ui-design/1234-timesheet-validation`.
- `<id>` is the issue number or the user story number. It is digits only: `[0-9]+`.
- `#123` becomes `123`. For any other form, such as letters before the number, return one question asking for the number, and stop.
- Take `<id>` from the prompt, or from a path in the prompt that already holds it.
- When the prompt gives `<id>` but no `<feature>`, Glob `docs/ui-design/<id>-*/`. One match gives `<feature>`. Otherwise ask.
- If `<id>` is absent, return one question asking for it, and stop. Every stage does this, including a library audit.
- `<feature>` is a short description of the feature in lowercase kebab-case.
- Take `<feature>` from the user's prompt, or from the Figma file name when only a Figma URL is given.
- Convert it to kebab-case: lowercase, words joined by `-`, no other characters. "Time Sheets v2" becomes `time-sheets-v2`.
- State the slug, and where `<feature>` came from, in the output header below.

## Stages

| Stage | Agent | Produces | Requires | When a required input is absent |
|---|---|---|---|---|
| sketch | designer-sketch-agent | `sketch/index.html`, `sketch/screens.md`, the `Screens` section of `references.md` | A description or a requirement file path | Ask for a description. A sketch cannot be derived from nothing. Mobbin unavailable: sketch without references |
| flows | designer-flow-agent | `flows/user-flows.md`, with scorecards, the `Flows` section of `references.md` | `sketch/screens.md`, a description, a Figma URL, or a flow file to rate | Derive the screens from the description or from Figma screenshots. A flow file not in the template is normalised into `flows/user-flows.md` first. Mobbin unavailable: map without references |
| build | designer-figma-agent | `inventory.md`, `figma.md`, the Figma pages | `sketch/`, a description, an `inventory.md`, or a Figma URL. A Figma URL plus a change request modifies an existing design. `flows/` and `references.md` are optional. The library file key, from the prompt or `figma.md` | No inventory: derive it. No product file key: ask whether to create the file. No library key: ask the user and stop |
| fix | designer-figma-fix-agent | Updated Figma nodes, audit marks resolved as `FIXED r<n>` or `OPEN <outcome>`, an updated `figma.md`, a fix log `<findings file name>_fix.md` | One findings file, or a Figma URL whose latest audit report is in `audit/`. The product file key | No findings path: take the highest audit round. None: ask for it. Take the key from `figma.md`, else ask for it |
| replan | designer-placement-agent | `placement-plan.md`, with every row `proposed`. Figma is never changed | The product file key. The library key. `inventory.md` and `flows/` are optional | Take the keys from `figma.md`, else ask. No inventory or page map: count built pages only and say so under `derived` |
| promote | designer-placement-agent | Moved or swapped components, rows set to `done` or `blocked`, an updated `figma.md` and `inventory.md` | `placement-plan.md` with at least one `approved` row. The file keys | No plan or no approved row: ask for the owner's approval of the plan, and stop |
| audit | designer-audit-agent | `audit/<datetime>_audit_round_<n>.md` and `.json`, and `Audit r<n>` annotations and `AUDIT` note frames in the audited product file | The product or library file key, from `figma.md` or a URL. The role: `product` or `library`. The `<id>` | Ask for the Figma URL or the `<id>`. The library is marked only when the prompt asks |
- Every artifact is optional for an agent run standalone. An agent never fails only because an earlier stage did not run.
- An agent uses an absent input's fallback from the table and names it under `derived`.
- An agent that finds its own living document already present updates it when the prompt asks for a change. Otherwise it asks before replacing it.
- `n` in an audit file is 1 for the first audit of a Figma file, and one higher for each re-audit.
- The audit's marks in Figma follow [figma-audit-annotations.md](figma-audit-annotations.md). They copy the report's findings. The `.json` stays the source of truth.

### Audit result

Every audit report, and the audit stage's reply, carries one result. This is the only place the result is defined. Take the first row that matches.

| Result | When |
|---|---|
| `not run` | The audit walked 0 nodes in every audited file. It says nothing about the design |
| `pass` | 0 blocker and 0 major findings |
| `fail` | 1 or more blocker or major findings |

- Minor findings never fail an audit.
- A `not run` audit marks nothing in Figma.
- A `pass` or `not run` result never starts another fix round.

## Output header

Every artifact, and every agent's reply, starts with these two lines:

```
Feature: <slug> (from: prompt | Figma file name | requirement path)
Inputs: used <paths or URLs> · derived <what, and from what> · absent <what>
```

Write `none` for an empty group.

## `figma.md`

| Field | Value |
|---|---|
| Library file | file key, from the prompt |
| Product file | file key and URL |
| Pages | one row per Figma page: page name as it reads in Figma, status marker included, node id, FSD slice path without the marker |
| Frames | one row per screen frame: frame name, node id, page |
| Updated | `<datetime>` and the agent that wrote it |

The first agent that learns a Figma file key writes `figma.md`. Later agents add to it and never remove a row.

The library file key is an input:

- Take it from the prompt, else from the `Library file` row of `figma.md`.
- If both lack it, ask for it and stop.
- Never store a project library key in a rule, a skill or an agent.
