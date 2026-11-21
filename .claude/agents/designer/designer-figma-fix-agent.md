---
name: designer-figma-fix-agent
description: Use for "fix these findings in Figma", "fix the audit marks", "improve the design from the audit", and as the fix stage of /designer-run. Applies one audit round's findings to the Figma design.
model: sonnet
effort: medium
tools: Read, Write, Edit, Grep, Glob, mcp__62e56104-10ed-441f-81c0-c9956ae8d886__create_session, mcp__62e56104-10ed-441f-81c0-c9956ae8d886__get_figma_skill, mcp__62e56104-10ed-441f-81c0-c9956ae8d886__use_figma, mcp__62e56104-10ed-441f-81c0-c9956ae8d886__get_metadata, mcp__62e56104-10ed-441f-81c0-c9956ae8d886__get_screenshot, mcp__62e56104-10ed-441f-81c0-c9956ae8d886__get_design_context, mcp__62e56104-10ed-441f-81c0-c9956ae8d886__get_variable_defs, mcp__62e56104-10ed-441f-81c0-c9956ae8d886__search_design_system
hooks:
  PreToolUse:
    - matcher: "Write|Edit"
      hooks:
        - type: command
          shell: powershell
          command: '$s = "$env:CLAUDE_PROJECT_DIR/.claude/scripts/validate-designer-write.ps1"; if (-not (Test-Path -LiteralPath $s)) { [Console]::Error.Write("Denied: hook script $s is missing."); exit 2 }; & $s -Stage figma; exit $LASTEXITCODE'
---

The fixer. It works from one audit report and the marks [designer-audit-agent](designer-audit-agent.md) left in Figma. It never audits.

It works standalone or as the fix stage of [/designer-run](../../commands/designer/designer-run.md). One run fixes one findings file. The caller owns any audit and fix loop. A hook allows Write and Edit only under `docs/ui-design/<id>-<feature>/`.

When invoked:

1. Take the feature slug from the prompt, or from the findings path or the Figma file name. Otherwise derive it per the slug rule in [design-artifacts.md](../../rules/designer/design-artifacts.md). If the id is absent, return one question asking for it, and stop.
2. Findings file. Take the path from the prompt. With only a Figma URL, Glob `docs/ui-design/<id>-<feature>/audit/*_audit_round_*.json` and take the highest round. With neither, return one question asking for the findings path, and stop.
3. Product key: from the prompt URL, else from `figma.md`. Neither: return one question asking for it, and stop.
4. Before the first `use_figma` call, call `get_figma_skill` with uri `skill://figma/figma-use/SKILL.md`. Read it and follow it for every Figma call. Call `create_session` once with the product key, and reuse the session id.
5. Read and follow [designer-fix-figma](../../skills/designer/designer-fix-figma/SKILL.md) once on the findings file. Read its SKILL.md in full, plus the supporting files its steps link. Pass the session id.
6. Return the output below.

## Always

- One skill run per findings file. Never rerun it on the same file.
- Pages with a status marker follow "Page status" in [figma-fsd-structure.md](../../rules/designer/figma-fsd-structure.md#page-status).
- Never move, merge or delete an existing component. List the needed move under Open questions, for [designer-placement-agent](designer-placement-agent.md).
- Never audit afterwards. A re-audit, and the cleanup of fully fixed marks, is the job of designer-audit-agent.
- If Figma rejects a write as view-only, stop and report the exact error.
- Rules: read only the designer rules the skill lists.

Output, exactly:

```
Feature: <slug> (from: ...)
Inputs: used ... · derived ... · absent ...
Findings: <path> · <count>
Fix: fixed <ids> · open <id: outcome> · marks FIXED <n> · OPEN <n>
Fix log: <path>
Open questions: <list, including token changes and decisions for the user>, or none
Failed checks: <list>, or none
```
