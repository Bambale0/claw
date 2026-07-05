---
name: kie-seedance
description: Use this skill for KIE Seedance generation work, createTask calls, taskId storage, callback handling, polling fallback, result storage, and generation status updates. Do not use it for unrelated UI-only changes.
---

# KIE Seedance Skill

## Purpose

Use this skill to implement or review KIE Seedance generation lifecycle work.

## Required pre-flight

1. Read `AGENTS.override.md`.
2. Read `AGENTS.md`.
3. Read `docs/agents/AGENT_INSTRUCTIONS_INDEX.md`.
4. Read `docs/agents/SKILLS_REGISTRY.md`.
5. Read `docs/agents/LOCATION_POLICY.md`.
6. Read `docs/agents/ACTIVE_AGENT_RULES.md`.
7. Confirm this skill is registered in `docs/agents/SKILLS_REGISTRY.md`.

## Workflow

1. Inspect existing generation services before editing.
2. Keep generation vendor calls on backend only.
3. Create a local generation record before starting remote work.
4. Store local task ID and remote task ID.
5. Treat remote task creation as asynchronous.
6. Handle completion through callback first and polling fallback second.
7. Make completion processing idempotent.
8. Save result media in project storage.
9. Update generation status consistently: queued, processing, completed, failed, cancelled.
10. Add tests with remote responses mocked.

## Done criteria

The task is done only when:

- task creation stores remote task ID;
- callback or polling updates generation state;
- result is saved to project storage;
- duplicate completion events do not duplicate final records;
- final report lists exact instruction and skill paths checked.
