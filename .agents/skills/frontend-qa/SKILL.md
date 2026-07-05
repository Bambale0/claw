---
name: frontend-qa
description: Use this skill for frontend QA, broken routes, clickable buttons, loading/error/empty states, responsive layout, Telegram WebView checks, and smoke tests. Do not use it for backend provider integration.
---

# Frontend QA Skill

## Purpose

Use this skill to verify that the Mini App is usable, clickable, responsive, and connected to real data.

## Required pre-flight

1. Read `AGENTS.override.md`.
2. Read `AGENTS.md`.
3. Read `docs/agents/AGENT_INSTRUCTIONS_INDEX.md`.
4. Read `docs/agents/SKILLS_REGISTRY.md`.
5. Read `docs/agents/LOCATION_POLICY.md`.
6. Read `docs/agents/ACTIVE_AGENT_RULES.md`.
7. Confirm this skill is registered in `docs/agents/SKILLS_REGISTRY.md`.

## Workflow

1. List all frontend routes and menu buttons.
2. Check that every button routes to a real screen.
3. Check loading state for each API-backed screen.
4. Check error state for failed API calls.
5. Check empty state for no content.
6. Check disabled state while actions are in progress.
7. Check mobile widths: 320px, 375px, 390px, 430px.
8. Check that bottom navigation does not cover important actions.
9. Remove production fake data unless explicitly scoped to dev mode.
10. Run frontend build or explain why it could not run.

## Done criteria

The task is done only when:

- touched routes are clickable;
- loading, error, and empty states exist;
- responsive risks are reported;
- frontend checks were run or documented;
- final report lists exact instruction and skill paths checked.
