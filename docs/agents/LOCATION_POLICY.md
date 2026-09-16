# Agent Instruction and Skill Location Policy

This document defines where agent instructions and skills must live and how their exact locations must be recorded.

## Goal

Avoid scattered agent rules across chat history, random README sections, temporary prompts, and hidden files.

The repository must have one clear source of truth for:

- active agent instructions;
- exact instruction file locations;
- active skills;
- exact skill file locations;
- update history;
- required checks.

## Canonical files

Instruction registry:

- `docs/agents/AGENT_INSTRUCTIONS_INDEX.md`

Skills registry:

- `docs/agents/SKILLS_REGISTRY.md`

Active rules:

- `docs/agents/ACTIVE_AGENT_RULES.md`

Change history:

- `docs/agents/AGENT_CHANGELOG.md`

Root entrypoints:

- `AGENTS.override.md`
- `AGENTS.md`

## Exact path requirement

Every instruction and skill reference must be written as an exact repository path in Markdown.

Correct:

```md
- `docs/agents/ACTIVE_AGENT_RULES.md`
- `.agents/skills/kie-seedance/SKILL.md`
```

Incorrect:

```md
- check the agent docs
- somewhere in skills
- the KIE instructions
```

## Where instructions may live

Allowed instruction file locations:

```text
AGENTS.override.md
AGENTS.md
docs/agents/*.md
backend/AGENTS.md
frontend/AGENTS.md
bot/AGENTS.md
*/AGENTS.md
*/AGENTS.override.md
```

Any new instruction file must be registered in:

- `docs/agents/AGENT_INSTRUCTIONS_INDEX.md`

## Where skills may live

Allowed skill file locations:

```text
.agents/skills/<skill-name>/SKILL.md
```

Any new skill file must be registered in:

- `docs/agents/SKILLS_REGISTRY.md`

## Required update rule

When adding, moving, renaming, or deleting an instruction file:

1. Update `docs/agents/AGENT_INSTRUCTIONS_INDEX.md`.
2. Update `docs/agents/AGENT_CHANGELOG.md`.
3. Mention the exact path change in the final report.

When adding, moving, renaming, or deleting a skill file:

1. Update `docs/agents/SKILLS_REGISTRY.md`.
2. Update `docs/agents/AGENT_CHANGELOG.md`.
3. Mention the exact path change in the final report.

## No hidden rules

Agents must not create important rules only in:

- chat messages;
- issue comments;
- PR comments;
- temporary notes;
- unregistered markdown files;
- local-only files;
- code comments that should be docs.

If a rule affects repeated agent behavior, it belongs in the registries and active rules docs.

## Final report requirement

Every task must report:

```md
Instruction files checked:
- exact paths

Skill files checked:
- exact paths or `none`

Registry updates:
- exact paths updated or `none`
```
