# Agent Instructions Index

This file is the canonical registry of all agent instruction files in this repository.

Every agent must read this file before making changes.

## Registry rules

1. Every instruction file must be listed here.
2. Every entry must include the exact repository path.
3. Every entry must define status, scope, priority, and purpose.
4. If an instruction file is moved, this registry must be updated in the same PR.
5. If an instruction file is deleted, this registry must be updated in the same PR.
6. If a new instruction file is created, this registry must be updated in the same PR.
7. Unregistered instruction files are not allowed.
8. If an unregistered instruction file is found, report it and update this registry before relying on it.

## Priority model

Instruction priority:

1. Production safety, security, auth, payment and user-data rules
2. `AGENTS.override.md`
3. Root `AGENTS.md`
4. Nested `AGENTS.override.md`
5. Nested `AGENTS.md`
6. Files listed in `docs/agents/`
7. README and local documentation
8. Chat prompt

If there is a conflict, stop and report it before implementing.

## Active instruction files

| Status | Priority | Scope | Exact path | Purpose | Owner | Last checked |
|---|---:|---|---|---|---|---|
| active | 1 | whole repo | `AGENTS.override.md` | Mandatory registry pre-flight and final report rules | project owner | 2026-07-05 |
| active | 2 | whole repo | `AGENTS.md` | Existing OpenClaw project rules, product architecture, bot/Mini App flows, required tests | project owner | 2026-07-05 |
| active | 3 | whole repo | `docs/agents/AGENT_INSTRUCTIONS_INDEX.md` | Canonical registry of instruction files | project owner | 2026-07-05 |
| active | 4 | whole repo | `docs/agents/SKILLS_REGISTRY.md` | Canonical registry of agent skills | project owner | 2026-07-05 |
| active | 5 | whole repo | `docs/agents/LOCATION_POLICY.md` | Rules for storing instructions and writing exact file locations | project owner | 2026-07-05 |
| active | 6 | whole repo | `docs/agents/ACTIVE_AGENT_RULES.md` | Current operational rules for agents | project owner | 2026-07-05 |
| active | 7 | whole repo | `docs/agents/AGENT_CHANGELOG.md` | History of agent instruction changes | project owner | 2026-07-05 |
| planned | 20 | backend | `backend/AGENTS.md` | Backend-specific rules | backend owner | when created |
| planned | 21 | frontend | `frontend/AGENTS.md` | Frontend and Mini App-specific rules | frontend owner | when created |
| planned | 22 | bot | `bot/AGENTS.md` | Telegram bot-specific rules | bot owner | when created |
| planned | 23 | payments | `bot/services/payments/AGENTS.override.md` | Payment safety and idempotency rules | backend owner | when created |
| planned | 24 | providers | `bot/services/providers/AGENTS.override.md` | External AI provider rules | backend owner | when created |

## Required check command

Before work, the agent must check instruction and skill files with a command like:

```bash
find . \
  -name "AGENTS.md" \
  -o -name "AGENTS.override.md" \
  -o -path "./docs/agents/*.md" \
  -o -path "./.agents/skills/*/SKILL.md"
```

Then compare found files with this registry and `docs/agents/SKILLS_REGISTRY.md`.

## If an unregistered instruction file is found

The agent must:

1. Mention the file path in the final report.
2. Decide whether it is valid or obsolete.
3. If valid, add it to this registry in the same PR.
4. If obsolete, do not rely on it.
5. If cleanup is in scope, delete or move it and document the reason.

## Final report template

```md
## Agent instruction check

Instruction files checked:
- `AGENTS.override.md`
- `AGENTS.md`
- `docs/agents/AGENT_INSTRUCTIONS_INDEX.md`
- `docs/agents/SKILLS_REGISTRY.md`
- `docs/agents/LOCATION_POLICY.md`
- `docs/agents/ACTIVE_AGENT_RULES.md`
- `docs/agents/AGENT_CHANGELOG.md`

Skill files checked:
- none / list exact paths

Unregistered instruction files found:
- none / list exact paths

Unregistered skill files found:
- none / list exact paths

Instruction conflicts:
- none / describe

Registry updates:
- none / describe
```
