# Claw — Universal Development Workspace

Универсальный репозиторий Игоря для разработки проектов с AI-агентами.

Подходит для:

- Telegram-ботов и Telegram Mini App;
- backend/API сервисов;
- SaaS и CRM;
- AI-интеграций;
- платежей, баланса, premium, рефералок;
- frontend-приложений;
- marketplace/tools automation;
- аудита чужого проекта перед доработкой;
- подготовки задач для OpenClaw / Codex / AI-агентов.

Главная задача репозитория — сделать разработку управляемой: **цель → роли агентов → задачи → реализация → тесты → аудит → релиз**.

---

## Что внутри

```text
AGENTS.md                  Главные правила для AI-агентов
openclaw-dev-agents.js     JS-реестр ролей и маршрутизатор задач
docs/WORKFLOW.md           Рабочий процесс разработки
templates/PROJECT_BRIEF.md Шаблон описания нового проекта
templates/FEATURE_TASK.md  Шаблон задачи на разработку
templates/AUDIT_CHECKLIST.md Чеклист аудита проекта
templates/HANDOFF_REPORT.md Отчёт после работы агента
```

---

## Быстрый старт

Склонировать:

```bash
git clone https://github.com/Bambale0/claw.git
cd claw
```

Проверить JS-реестр:

```bash
node --check openclaw-dev-agents.js
```

Сгенерировать prompt для задачи:

```bash
node -e "import('./openclaw-dev-agents.js').then(m => console.log(m.buildRoutedPrompt('Проверь frontend routing, loading/error/empty и Telegram WebApp auth')))"
```

Скопировать базу в новый проект:

```bash
cp AGENTS.md /path/to/project/AGENTS.md
cp -r docs /path/to/project/docs
cp -r templates /path/to/project/templates
cp openclaw-dev-agents.js /path/to/project/openclaw-dev-agents.js
```

---

## Как использовать в новом проекте

1. Заполни `templates/PROJECT_BRIEF.md`.
2. Опиши первую фичу через `templates/FEATURE_TASK.md`.
3. Сгенерируй prompt через `openclaw-dev-agents.js`.
4. Отдай задачу нужному агенту.
5. После работы требуй отчёт по `templates/HANDOFF_REPORT.md`.
6. Перед релизом прогони `templates/AUDIT_CHECKLIST.md`.

---

## Примеры задач

### Аудит frontend

```bash
node -e "import('./openclaw-dev-agents.js').then(m => console.log(m.buildRoutedPrompt('Проверить роутинг, loading/error/empty, адаптивность и Telegram WebApp авторизацию')))"
```

### Backend-интеграция

```bash
node -e "import('./openclaw-dev-agents.js').then(m => console.log(m.buildRoutedPrompt('Реализовать пользователей, баланс, бонусы, рефералы, генерации, магазин, покупки, premium и уведомления')))"
```

### Платежи

```bash
node -e "import('./openclaw-dev-agents.js').then(m => console.log(m.buildRoutedPrompt('Проверить webhook оплаты, idempotency начисления баланса и статусы failed/cancelled/refund')))"
```

### AI provider

```bash
node -e "import('./openclaw-dev-agents.js').then(m => console.log(m.buildRoutedPrompt('Интегрировать Kie AI Seedance 2.0 Mini: payload, task create, polling/webhook, результат и ошибки')))"
```

---

## Роли агентов

Основные роли описаны в `AGENTS.md` и `openclaw-dev-agents.js`:

- `supervisor`
- `product_owner`
- `architect`
- `backend_engineer`
- `frontend_engineer`
- `bot_engineer`
- `ai_integrator`
- `payments_engineer`
- `db_engineer`
- `qa_tester`
- `security_reviewer`
- `devops_release`
- `docs_writer`
- `code_reviewer`

---

## Правило качества

Не считается готовым, пока не понятно:

- что изменено;
- как запустить;
- как проверить;
- какие тесты прошли;
- какие риски остались;
- что делать дальше.

---

## Для чего этот репозиторий особенно полезен

Когда задача выглядит так:

> “Доработай чтобы корректно работала и была готова к продакшену”

`claw` помогает разложить это на нормальные инженерные блоки:

- frontend routing/state/adaptive/auth;
- backend users/balance/referrals/payments/premium/history;
- AI provider payload/webhook/polling/result delivery;
- DB schema/migrations/indexes;
- smoke/regression/API/mobile tests;
- deploy/logs/backup/rollback;
- security/secrets/permissions.

---

## Минимальный стандарт ответа агента

```md
## Summary
- ...

## Changed files
- `path/to/file` — ...

## Tests
- ...

## Manual QA
- ...

## Risks
- ...

## Next steps
- ...
```
