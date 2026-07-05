# Agent Instruction Changelog

This file tracks changes to agent instructions, registries, and skills.

## 2026-07-05 — Add canonical registries and repo skills

### Added

- `AGENTS.override.md`
- `docs/agents/AGENT_INSTRUCTIONS_INDEX.md`
- `docs/agents/SKILLS_REGISTRY.md`
- `docs/agents/LOCATION_POLICY.md`
- `docs/agents/ACTIVE_AGENT_RULES.md`
- `docs/agents/AGENT_CHANGELOG.md`
- `.agents/skills/backend-integration/SKILL.md`
- `.agents/skills/telegram-miniapp/SKILL.md`
- `.agents/skills/kie-seedance/SKILL.md`
- `.agents/skills/frontend-qa/SKILL.md`
- `.agents/skills/release-hardening/SKILL.md`

### Reason

The repository needs one clear place for agent instructions and a separate registry for reusable agent skills.

### Required behavior after this change

Before any implementation task, agents must:

1. Read `AGENTS.override.md`.
2. Read `AGENTS.md`.
3. Read `docs/agents/AGENT_INSTRUCTIONS_INDEX.md`.
4. Read `docs/agents/SKILLS_REGISTRY.md`.
5. Read `docs/agents/LOCATION_POLICY.md`.
6. Read `docs/agents/ACTIVE_AGENT_RULES.md`.
7. Read matching skill files under `.agents/skills/`.
8. Report exact checked paths in the final response.

### Notes

The existing root `AGENTS.md` was preserved. The new `AGENTS.override.md` adds registry pre-flight rules and explicitly requires agents to manually read the existing `AGENTS.md` as part of every task.
