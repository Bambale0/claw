---
name: telegram-miniapp
description: Use this skill for Telegram Mini App routing, Telegram WebApp initData, frontend API client wiring, startapp parameters, loading/error/empty states, and mobile responsiveness. Do not use it for backend-only database work.
---

# Telegram Mini App Skill

## Purpose

Use this skill to connect the Telegram Mini App to the backend without demo-only flows.

## Required pre-flight

1. Read `AGENTS.override.md`.
2. Read `AGENTS.md`.
3. Read `docs/agents/AGENT_INSTRUCTIONS_INDEX.md`.
4. Read `docs/agents/SKILLS_REGISTRY.md`.
5. Read `docs/agents/LOCATION_POLICY.md`.
6. Read `docs/agents/ACTIVE_AGENT_RULES.md`.
7. Confirm this skill is registered in `docs/agents/SKILLS_REGISTRY.md`.

## Workflow

1. Inspect current frontend structure and routes.
2. Identify all buttons and sections that need backend data.
3. Initialize Telegram WebApp only in client code.
4. Send `window.Telegram.WebApp.initData` to backend on protected API requests.
5. Do not trust `initDataUnsafe` for authorization.
6. Connect pages to real API endpoints.
7. Add loading, error, and empty states for every API screen.
8. Check routes for feed, topics, gallery, quick create, HD, AI photoshoot, shop, Premium, balance, referrals, and profile.
9. Check mobile layout at 320px, 375px, 390px, and 430px when feasible.
10. Run frontend build or explain why it could not run.

## Done criteria

The task is done only when:

- all touched buttons route to working screens;
- production flow does not use fake data;
- auth data is sent to backend correctly;
- every API page has loading, error, and empty states;
- final report lists exact instruction and skill paths checked.
