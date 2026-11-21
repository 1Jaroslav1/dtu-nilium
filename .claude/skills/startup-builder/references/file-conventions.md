# Vault file conventions

Generated files must drop cleanly into the user's Obsidian vault. A file that ignores
these conventions creates friction instead of help. **Always inspect an existing file in
the target folder and mirror it** — these are the conventions observed in the Trion vault,
but a different project may differ, so the live vault wins over this note.

## File header (not YAML — bold markdown)

Every note opens with an H1 title, a metadata block in **bold-label** form, and a `---`
rule. Example:

```markdown
# Hipotezy — tracker (Firmy projektowe)

**Summary:** One-sentence description of what this note is and does.
**Tags:** #segment #topic #tracker
**Created:** 2026-08-21T22:00:00+02:00
**Last Updated:** 2026-08-21T22:00:00+02:00

---
```

- `Summary` is one dense sentence — what the note is, for what, and any key caveat.
- `Tags` are lowercase, `#`-prefixed, space-separated; reuse existing tags in the vault.
- Timestamps are ISO 8601 with the local offset (`+02:00`). Use real timestamps.
  **Note:** in this container `date` gives UTC — the user's timezone is Europe/Warsaw, so
  add the correct offset, or ask if unsure. Don't fabricate a false precision.

## Footer — "Przydatne linki i referencje"

Every note ends with a `---` rule and a references section linking related notes:

```markdown
---

## Przydatne linki i referencje
- [[03 📋 Rozmowy — tracker]] — what this link is for
- [[../JDG/01 🧪 Hipotezy — tracker|../JDG/01 🧪 Hipotezy — tracker]] — previous segment
```

Add a short "— why" after each link so the reader knows when to follow it.

## Wikilinks

- Obsidian wikilinks: `[[Note name]]` or `[[path/Note name|display text]]`.
- Use relative paths for cross-folder links (`../JDG/...`, `../../Plan/09/...`).
- When a display alias contains a `|` inside a table cell, escape the pipe as `\|`.
- Prefer aliasing long or path-y links so the rendered text stays readable, e.g.
  `[[00 🔥 Mapa bólu — Cloudfide (Przemek)|00 🔥 Mapa bólu — Cloudfide]]`.

## File & folder naming

- Segment artifact files are numbered with an emoji: `01 🧪 Hipotezy — tracker.md`,
  `02 🎤 Skrypt rozmowy — <segment>.md`, `03 📋 Rozmowy — tracker.md`,
  `04 🎯 Segmentacja i Beachhead Market — <segment>.md`, `05 👤 Persona — <segment>.md`,
  `06 📦 Oferta i cykl użycia — <segment>.md`, `07 ⚔️ Mapa konkurencji — <segment>.md`,
  `08 📊 Market Sizing — TAM SAM SOM (<segment>).md`. An optional
  `00 🔥 Mapa bólu — <source>.md` can hold source material for a segment.
- Keep the same numbering across segments so they're comparable, and add a
  `Struktura folderu ...` map note when creating a new top-level folder.
- Em dash `—` separates title parts. Match the existing casing and spacing exactly.

## Language

The Trion vault is in **Polish**. Default all generated content to Polish and match the
vault's existing headings and phrasing. For a different vault, detect and mirror its
language rather than defaulting to English. Skill instructions and reference files stay in
English (for Claude); the *output* follows the vault.

## Content conventions

- Mark unknowns as `*(do wypełnienia)*` rather than inventing content.
- In quantitative work, tag every number `[DANE]` (sourced) or `[SZACUNEK]` (estimate).
- Tables are the default for trackers and comparisons; keep column headers terse.
- Prefer prose that explains *why* a step matters over bare instructions — the vault's
  own notes do this, and it makes the documents teach their own use.

## Delivering files to the vault

This session reaches the vault through the desktop bridge. To write a generated note onto
the user's disk: create it locally, `SendUserFile` it, then `device_commit_files` with the
`file_uuid` to the target path under the connected vault folder. If the vault is locked
(encrypted / disconnected), deliver via `SendUserFile` only and tell the user the file
will land in the vault once they unlock it and you commit — don't assume the path exists.
