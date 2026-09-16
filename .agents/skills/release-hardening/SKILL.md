---
name: release-hardening
description: Use this skill for release readiness, smoke tests, regression tests, deployment checklist, rollback notes, scaling, workers, observability, and production verification. Do not use it for a small isolated copy edit.
---

# Release Hardening Skill

## Purpose

Use this skill before publishing an upgrade or merging a production-impacting change.

## Required pre-flight

1. Read `AGENTS.override.md`.
2. Read `AGENTS.md`.
3. Read `docs/agents/AGENT_INSTRUCTIONS_INDEX.md`.
4. Read `docs/agents/SKILLS_REGISTRY.md`.
5. Read `docs/agents/LOCATION_POLICY.md`.
6. Read `docs/agents/ACTIVE_AGENT_RULES.md`.
7. Confirm this skill is registered in `docs/agents/SKILLS_REGISTRY.md`.

## Workflow

1. Identify changed user flows.
2. Build a smoke-test checklist for those flows.
3. Build a regression checklist for nearby systems.
4. Check deployment notes and environment requirements.
5. Check worker/runtime separation when relevant.
6. Check logs and traceability for failed generation flows.
7. Check rollback notes.
8. Confirm no production demo mode remains.
9. Run available tests or document why they could not run.
10. Create or update release notes when in scope.

## Done criteria

The task is done only when:

- smoke coverage is documented;
- regression risks are documented;
- deployment and rollback notes are current when relevant;
- tests or checks are reported;
- final report lists exact instruction and skill paths checked.
