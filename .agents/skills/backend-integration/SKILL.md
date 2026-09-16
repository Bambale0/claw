---
name: backend-integration
description: Use this skill for backend, API, database, migrations, users, balance, referrals, generations, gallery, shop, Premium, notifications, rating, or action-history work. Do not use it for frontend-only styling or copywriting tasks.
---

# Backend Integration Skill

## Purpose

Use this skill to make backend changes safely and consistently.

## Required pre-flight

1. Read `AGENTS.override.md`.
2. Read `AGENTS.md`.
3. Read `docs/agents/AGENT_INSTRUCTIONS_INDEX.md`.
4. Read `docs/agents/SKILLS_REGISTRY.md`.
5. Read `docs/agents/LOCATION_POLICY.md`.
6. Read `docs/agents/ACTIVE_AGENT_RULES.md`.
7. Confirm this skill is registered in `docs/agents/SKILLS_REGISTRY.md`.

## Workflow

1. Inspect existing backend structure before editing.
2. Identify framework, database layer, service layer, and existing tests.
3. Prefer small changes that preserve current architecture.
4. Update models, migrations, schemas, services, and routes together.
5. Keep business logic in services, not route handlers.
6. Use idempotency for external callbacks and repeated user actions.
7. Record balance changes in history.
8. Update API docs when changing public payloads.
9. Add or update tests.
10. Run relevant backend checks or explain why they could not run.

## Done criteria

The task is done only when:

- backend behavior is implemented;
- migrations are included when schema changes;
- tests are added or updated where possible;
- changed API contracts are documented;
- final report lists exact instruction and skill paths checked.
