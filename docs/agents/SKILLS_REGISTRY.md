# Agent Skills Registry

This file is the canonical registry of all repository-scoped agent skills.

Every skill must live under:

- `.agents/skills/<skill-name>/SKILL.md`

Every skill must be registered here with its exact path.

## Skill rules

1. Every skill must have a `SKILL.md` file.
2. Every `SKILL.md` file must contain YAML frontmatter with `name` and `description`.
3. Skill descriptions must clearly say when the skill should and should not trigger.
4. Every skill must be listed in this registry.
5. Skill names must be unique.
6. If a skill is moved, this registry must be updated in the same PR.
7. If a skill is deleted, this registry must be updated in the same PR.
8. If a skill is created, this registry must be updated in the same PR.
9. Large repeatable workflows should become skills instead of living only in chat history.
10. Skills must not contain secrets, tokens, credentials, or private production values.

## Active skills

| Status | Skill name | Exact path | Trigger words | Purpose | Owner | Required checks |
|---|---|---|---|---|---|---|
| active | `backend-integration` | `.agents/skills/backend-integration/SKILL.md` | backend, API, DB, migration, service, balance, users | Backend feature integration and API contracts | backend owner | backend tests or written reason |
| active | `telegram-miniapp` | `.agents/skills/telegram-miniapp/SKILL.md` | Mini App, Telegram WebApp, initData, routing, responsive | Telegram Mini App integration and frontend API wiring | frontend owner | frontend build, auth smoke |
| active | `kie-seedance` | `.agents/skills/kie-seedance/SKILL.md` | KIE, Seedance, generation, callback, taskId, provider | KIE AI Seedance generation lifecycle | backend owner | provider mock tests |
| active | `frontend-qa` | `.agents/skills/frontend-qa/SKILL.md` | loading, error, empty, responsive, UI QA, buttons | Frontend QA, states, routing and responsive checks | frontend owner | frontend build, smoke checks |
| active | `release-hardening` | `.agents/skills/release-hardening/SKILL.md` | release, smoke, regression, deploy, production, scale | Final release hardening and scale readiness | release owner | full smoke/regression or written reason |

## Required skill check

Before implementation, the agent must check whether the task matches any registered skill.

If yes:

1. Read the exact `SKILL.md` file.
2. Follow the skill workflow.
3. Mention the skill in the final report.

If no:

1. Continue without a skill.
2. Mention that no matching skill was found.

## If an unregistered skill file is found

The agent must:

1. Mention the exact path in the final report.
2. Decide whether the skill is valid or obsolete.
3. If valid, add it to this registry in the same PR.
4. If obsolete, do not use it.

## Skill final report template

```md
## Skill check

Matching skill:
- name: `kie-seedance`
- path: `.agents/skills/kie-seedance/SKILL.md`

Skill used:
- yes / no

Reason:
- task required KIE callback and generation pipeline

Skill conflicts:
- none / describe
```
