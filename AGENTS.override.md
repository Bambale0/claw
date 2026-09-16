# AGENTS.override.md — mandatory registry pre-flight

This file adds a mandatory registry pre-flight for all AI agents.

It does **not** replace the existing project rules in `AGENTS.md`. Every agent must still read `AGENTS.md` manually before changing code.

## Required pre-flight before any task

Before coding, editing docs, changing workflows, creating prompts, or adding skills, the agent must read these files in this order:

1. `AGENTS.override.md`
2. `AGENTS.md`
3. `docs/agents/AGENT_INSTRUCTIONS_INDEX.md`
4. `docs/agents/SKILLS_REGISTRY.md`
5. `docs/agents/LOCATION_POLICY.md`
6. `docs/agents/ACTIVE_AGENT_RULES.md`
7. `docs/agents/AGENT_CHANGELOG.md`
8. Any nested `AGENTS.md` or `AGENTS.override.md` that applies to the target files.
9. Any matching `.agents/skills/<skill-name>/SKILL.md` file.

## Single source of truth

All instruction files must be registered in:

- `docs/agents/AGENT_INSTRUCTIONS_INDEX.md`

All skill files must be registered in:

- `docs/agents/SKILLS_REGISTRY.md`

No new instruction file or skill file may be added, moved, renamed, or deleted without updating the relevant registry in the same PR.

## Exact-location rule

Every registry entry must include the exact repository path in Markdown.

Do not rely on memory, chat history, implicit knowledge, or unregistered files.

## Conflict rule

If instructions conflict:

1. Stop implementation.
2. Report the conflict.
3. List the exact file paths involved.
4. Follow the stricter production-safety rule.
5. Ask for human decision if the conflict affects security, auth, payments, balance, provider webhooks, user data, or release readiness.

## Required final report

Every agent response after a code/doc task must include:

- Instruction files checked
- Skill files checked
- Files changed
- Commands run
- Tests passed
- Tests failed or not run
- Registry updates
- Instruction conflicts found
- Remaining risks
