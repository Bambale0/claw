# Карта публичного набора Engineering Agents

Этот каталог содержит только **универсальные инженерные роли и инструкции**, которые можно переиспользовать между проектами. Персональные, клиентские и бизнес-специфичные агенты из публичной версии удалены.

## Структура

```text
dev_agents_pack/
├── README.md
├── AGENTS.md
├── map.md
├── openclaw-dev-agents.js
├── .gitignore
├── .github/
│   ├── copilot-instructions.md
│   ├── agents/
│   │   ├── 00-architect.md
│   │   ├── 01-backend-python.md
│   │   ├── 02-frontend-react.md
│   │   ├── 03-telegram-bot.md
│   │   ├── 04-api-integrator.md
│   │   ├── 05-database.md
│   │   ├── 06-test-qa.md
│   │   ├── 07-security-reviewer.md
│   │   ├── 08-devops.md
│   │   ├── 09-code-reviewer.md
│   │   ├── 10-docs.md
│   │   ├── 11-release-manager.md
│   │   ├── 12-debugger.md
│   │   └── 13-performance.md
│   └── instructions/
│       ├── python-backend.instructions.md
│       ├── frontend.instructions.md
│       └── tests.instructions.md
├── prompts/
│   ├── issue-template-agent-task.md
│   ├── pr-review-checklist.md
│   └── sprint-orchestrator-prompt.md
└── docs/
    ├── fsm-user-flows.md
    ├── openclaw-brief.md
    ├── qa-audit-checklist.md
    ├── senior-qa-audit.md
    └── technical-audit.md
```

## Инженерные роли

| # | Роль | Назначение |
|---|---|---|
| 00 | Architect | Архитектура, границы задачи, зависимости |
| 01 | Backend Python | Python/FastAPI/backend-разработка |
| 02 | Frontend React | React/TypeScript/frontend-разработка |
| 03 | Telegram Bot | Telegram-боты, aiogram, UX/FSM |
| 04 | API Integrator | Интеграция внешних API и provider contracts |
| 05 | Database | Схемы, миграции, целостность данных |
| 06 | Test & QA | Тесты, regression, acceptance |
| 07 | Security Reviewer | Secrets, auth, permissions, attack surface |
| 08 | DevOps | CI/CD, Docker, systemd, rollout/rollback |
| 09 | Code Reviewer | Проверка diff, рисков и архитектурной совместимости |
| 10 | Docs | Техническая и пользовательская документация |
| 11 | Release Manager | Релиз, миграции, changelog, rollout plan |
| 12 | Debugger | Воспроизведение и диагностика дефектов |
| 13 | Performance | Производительность и узкие места |

## Базовый workflow

```text
Issue / задача
      |
      v
00 Architect
      |
      v
Профильный инженерный агент
      |
      +--> 06 Test & QA
      +--> 07 Security Reviewer
      +--> 09 Code Reviewer
      |
      v
11 Release Manager
      |
      v
merge / rollout / verification
```

## Правила публичной версии

- Здесь не должно быть клиентских данных, персональных инструкций и production credentials.
- Бизнес-специфичные агенты должны храниться в соответствующем приватном проекте.
- Универсальные роли должны оставаться repository-agnostic и не зависеть от конкретного бренда или заказчика.
- Перед изменением проекта агент читает его архитектуру, доменную модель и локальный `AGENTS.md`.

## Быстрые ссылки

- [`README.md`](./README.md)
- [`AGENTS.md`](./AGENTS.md)
- [`openclaw-dev-agents.js`](./openclaw-dev-agents.js)
- [`prompts/issue-template-agent-task.md`](./prompts/issue-template-agent-task.md)
- [`prompts/pr-review-checklist.md`](./prompts/pr-review-checklist.md)
- [`prompts/sprint-orchestrator-prompt.md`](./prompts/sprint-orchestrator-prompt.md)
