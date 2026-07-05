# Universal Development Workflow

Этот workflow нужен, чтобы AI-агент не “ковырял код наугад”, а двигался как нормальный разработчик.

---

## 1. Intake

Перед работой зафиксировать:

- цель задачи;
- что сейчас не работает;
- где пользователь видит проблему;
- какие файлы/модули могут быть связаны;
- какой результат считается готовым.

Если информации мало, агент делает разумное предположение и пишет его в отчёте.

---

## 2. Discovery

Агент должен проверить:

- README и инструкции запуска;
- `.env.example`;
- структуру проекта;
- entrypoint приложения;
- основные handlers/routes/screens;
- services/clients для внешних API;
- database/repositories/migrations;
- tests;
- deploy/scripts.

---

## 3. Planning

Для сложной задачи составить короткий план:

```text
1. Проверить текущий flow.
2. Найти источник ошибки.
3. Исправить минимально.
4. Добавить тест или чеклист.
5. Обновить документацию, если изменился запуск/поведение.
```

---

## 4. Implementation

Правила реализации:

- не ломать публичный интерфейс без причины;
- не дублировать бизнес-логику;
- не хардкодить секреты и тарифы;
- не смешивать UI, API-клиент и бизнес-логику в одном месте;
- не скрывать ошибки внешнего API;
- не добавлять “demo fallback”, если задача про реальный production-flow;
- писать код так, чтобы следующий агент понял его без раскопок.

---

## 5. Testing

Минимум:

- import/syntax check;
- unit tests для изменённой логики;
- smoke test главного сценария;
- ручной QA чеклист, если автоматические тесты невозможны.

Для UI:

- loading;
- error;
- empty;
- success;
- mobile;
- desktop;
- auth/no-auth.

Для API:

- valid payload;
- invalid payload;
- missing auth;
- upstream error;
- timeout;
- repeated webhook/callback.

---

## 6. Review

Перед merge проверить:

- changed files;
- callers/callees;
- tests;
- migration safety;
- security;
- backward compatibility;
- logs;
- docs.

---

## 7. Handoff

Финальный отчёт должен быть конкретным:

```md
## Summary
- Что сделано.

## Changed files
- `file` — зачем.

## Tests
- Команда и результат.

## Manual QA
- Что проверить руками.

## Risks
- Что может сломаться.

## Next steps
- Следующий разумный шаг.
```

---

## 8. Production readiness checklist

Проект ближе к production, если есть:

- `.env.example`;
- понятный запуск;
- health check;
- логирование;
- обработка ошибок;
- миграции;
- backup/restore;
- smoke tests;
- regression checklist;
- rollback plan;
- admin/security boundaries;
- отсутствие секретов в репозитории.
