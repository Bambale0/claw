# Карта репозитория dev-agents-pack
https://github.com/Bambale0/dev-agents-pack/blob/master/map.md
## 📁 Структура

```
dev-agents-pack/
│
├── 📄 README.md              # Главный файл — описание, workflow, правила
├── 📄 AGENTS.md              # Глобальные инструкции для всех агентов
├── 📄 map.md                 # Эта карта — оглавление репозитория
├── 📄 openclaw-dev-agents.js # JS-регистр агентов для OpenClaw
├── 📄 .gitignore             # Исключения для Git
│
├── 📁 .github/
│   ├── 📄 copilot-instructions.md     # Инструкции для GitHub Copilot
│   │
│   ├── 📁 agents/                     # 👤 Профили агентов
│   │   ├── 📄 00-architect.md                # Архитектор
│   │   ├── 📄 01-backend-python.md           # Python-бэкенд
│   │   ├── 📄 02-frontend-react.md           # React-фронтенд
│   │   ├── 📄 03-telegram-bot.md             # Telegram Bot
│   │   ├── 📄 04-api-integrator.md           # API-интегратор
│   │   ├── 📄 05-database.md                 # Инженер БД
│   │   ├── 📄 06-test-qa.md                  # Тестирование и QA
│   │   ├── 📄 07-security-reviewer.md        # Безопасность
│   │   ├── 📄 08-devops.md                   # DevOps
│   │   ├── 📄 09-code-reviewer.md            # Code Review
│   │   ├── 📄 10-docs.md                     # Документация
│   │   ├── 📄 11-release-manager.md          # Релиз-менеджер
│   │   ├── 📄 12-debugger.md                 # Дебаггер
│   │   ├── 📄 13-performance.md              # Производительность
│   │   ├── 📄 14-katya-supervisor.md         # 🏢 Katya Supervisor
│   │   ├── 📄 15-katya-operator.md           # 🏢 Katya Operator
│   │   ├── 📄 16-katya-content.md            # 🏢 Katya Content
│   │   ├── 📄 17-katya-crm.md                # 🏢 Katya CRM
│   │   ├── 📄 18-katya-finance-crm.md        # 🏢 Katya Finance CRM
│   │   ├── 📄 19-katya-creative-marketing.md # 🏢 Katya Creative Marketing
│   │   └── 📄 20-accountant-crm-assistant.md # 🏢 Бухгалтер-CRM ассистент
│   │
│   └── 📁 instructions/                 # 📋 Общие инструкции
│       ├── 📄 python-backend.instructions.md
│       ├── 📄 frontend.instructions.md
│       └── 📄 tests.instructions.md
│
├── 📁 prompts/                      # 📝 Шаблоны промптов
│   ├── 📄 issue-template-agent-task.md   # Шаблон задачи для агента
│   ├── 📄 pr-review-checklist.md         # Чеклист ревью PR
│   └── 📄 sprint-orchestrator-prompt.md  # Промпт спринт-оркестратора
│
└── 📁 docs/                         # 📚 Документация
    ├── 📄 fsm-user-flows.md              # FSM, экраны, callback-контракты
    ├── 📄 openclaw-brief.md              # Роли и режимы OpenClaw
    ├── 📄 qa-audit-checklist.md          # Чеклист QA-аудита
    ├── 📄 senior-qa-audit.md             # Полный Senior QA Audit
    └── 📄 technical-audit.md             # Технический аудит проекта
```

---

## 🧭 Назначение папок

| Папка | Назначение |
|-------|-----------|
| `.github/agents/` | Профили агентов — по одному .md на каждого агента |
| `.github/instructions/` | Общие инструкции для групп задач (Python, фронтенд, тесты) |
| `prompts/` | Шаблоны промптов для повторяющихся процессов |
| `docs/` | Документация проекта — FSM, аудиты, архитектура |

---

## 👤 Агенты: технические (00–13)

| # | Агент | Назначение |
|---|-------|-----------|
| 00 | Architect | Планирование архитектуры, границы задачи |
| 01 | Backend Python | Python-бэкенд разработка |
| 02 | Frontend React | React-фронтенд разработка |
| 03 | Telegram Bot | Разработка Telegram-ботов |
| 04 | API Integrator | Интеграция внешних API |
| 05 | Database | Проектирование и работа с БД |
| 06 | Test & QA | Тестирование, написание тестов |
| 07 | Security Reviewer | Аудит безопасности |
| 08 | DevOps | CI/CD, инфраструктура, деплой |
| 09 | Code Reviewer | Ревью кода |
| 10 | Docs | Написание документации |
| 11 | Release Manager | Чейнджлоги, миграции, релизы |
| 12 | Debugger | Поиск и исправление багов |
| 13 | Performance | Оптимизация производительности |

## 🏢 Агенты: бизнес (14–20, Katya Agents)

| # | Агент | Назначение |
|---|-------|-----------|
| 14 | Katya Supervisor | Главный управляющий — приём и распределение задач |
| 15 | Katya Operator | Операционный ассистент — план дня, приоритеты |
| 16 | Katya Content | Контент-ассистент — посты, сторис, Reels |
| 17 | Katya CRM | CRM-ассистент — клиенты, заявки, статусы |
| 18 | Katya Finance CRM | Финансовый ассистент — оплаты, долги, отчёты |
| 19 | Katya Creative Marketing | Креативный маркетолог — офферы, акции, визуалы |
| 20 | Accountant CRM Assistant | Бухгалтер-CRM ассистент — деньги, сделки, документы |

---

## 🔄 Базовый workflow

```
1. Issue (prompts/issue-template-agent-task.md)
       │
       ▼
2. 00-architect → план и границы задачи
       │
       ▼
3. Профильный агент → изменения в ветке
       │
       ▼
4. 06-test-qa + 07-security-reviewer + 09-code-reviewer → проверка
       │
       ▼
5. 11-release-manager → changelog, миграции, выкат
```

---

## 📌 Быстрые ссылки

- [README.md](./README.md) — полное описание
- [AGENTS.md](./AGENTS.md) — глобальные инструкции
- [openclaw-dev-agents.js](./openclaw-dev-agents.js) — JS-регистр
- [Шаблон задачи](./prompts/issue-template-agent-task.md)
- [Чеклист PR](./prompts/pr-review-checklist.md)
- [Спринт-оркестратор](./prompts/sprint-orchestrator-prompt.md)
