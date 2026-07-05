# Active Agent Rules

These are the current operational rules for agents working in this repository.

## Mandatory pre-flight

Before any task, read:

1. `AGENTS.override.md`
2. `AGENTS.md`
3. `docs/agents/AGENT_INSTRUCTIONS_INDEX.md`
4. `docs/agents/SKILLS_REGISTRY.md`
5. `docs/agents/LOCATION_POLICY.md`
6. `docs/agents/ACTIVE_AGENT_RULES.md`
7. `docs/agents/AGENT_CHANGELOG.md`
8. Any nested `AGENTS.md` or `AGENTS.override.md` relevant to the target files.
9. Any matching skill file under `.agents/skills/`.

## Product rules

This repository is a standalone OpenClaw workspace for an AI Telegram Bot + Telegram Mini App.

Agents must preserve the existing rules in `AGENTS.md`, especially:

- keep the project independent from old products and old infrastructure;
- preserve webhook-first production runtime;
- keep prices, providers, domains, brand texts, and payment settings config-driven;
- keep sensitive values out of code, logs, docs, screenshots, tests, and examples;
- payment callbacks must be idempotent;
- provider routing must fail loudly when wrong;
- common handlers must not intercept specialized FSM handlers;
- every meaningful change needs tests or a written reason why tests could not be run.

## Backend rules

- Backend is the source of truth.
- Frontend must not call AI providers directly.
- Use database transactions for balance, payments, bonuses, referrals, purchases, and generation billing.
- Payment and provider callbacks must be idempotent.
- Balance changes must be recorded in transaction history.
- Wrong provider payloads must fail loudly.

## Telegram Mini App rules

- Mini App is a client, not a source of truth.
- Validate Telegram WebApp `initData` on backend.
- Do not trust `initDataUnsafe` for authorization.
- Every user-facing Mini App section must have working routing.
- Every API screen must have loading, error, and empty states.
- Mobile layout must be checked at 320px, 375px, 390px, 430px, and Telegram WebView sizes when applicable.

## Bot rules

- Bot and Mini App must use the same backend state and business logic.
- `/start` must handle registration/update safely.
- Referral parameters must be validated and idempotent.
- Buttons must open real sections or real bot flows.
- FSM state must live in `FSMContext`, not global variables.

## Provider rules

- External AI providers must be called only from backend services.
- Store local task ID and provider task ID.
- Handle provider callback or polling completion.
- Store request and result metadata safely.
- Do not silently fallback to another provider without an explicit policy.

## Testing rules

For every meaningful change, run relevant tests or explain why tests were not run.

Minimum report fields:

```text
Summary:
Changed files:
Instruction files checked:
Skill files checked:
Commands run:
Tests run:
Risks:
Next recommended step:
```

## Registry rules

- New instruction files must be registered in `docs/agents/AGENT_INSTRUCTIONS_INDEX.md`.
- New skills must be registered in `docs/agents/SKILLS_REGISTRY.md`.
- Exact paths are mandatory.
- Do not hide operational rules in chat history.
