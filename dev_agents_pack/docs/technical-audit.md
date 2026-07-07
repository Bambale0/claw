# Технический аудит проекта

Проведи глубокий технический аудит проекта как Senior QA Architect + Backend/API Auditor + Security Reviewer.

## Обязательные проверки

1. Все entrypoints: commands, handlers, routes, callbacks, buttons, links, deep links, webhooks, background jobs.
2. Все параметры: где создаются, куда передаются, где валидируются, где сохраняются, где используются.
3. Все callback_data и URL: нет ли потери id, task_id, user_id, payment_id, model, provider, status.
4. Все внешние API: endpoint, method, headers, auth, content-type, required fields, optional fields, типы, enum, callback_url, webhook_url, timeout, retry, error handling, response parsing.
5. Все платежи: idempotency, повторный webhook, неверная сумма, валюта, двойное начисление, двойное списание, refund, transaction integrity.
6. Все AI generation flows: prompt, files, image_url/audio_url, model, aspect_ratio, duration, provider_task_id, polling, webhook, result, failed, stuck processing.
7. Все бизнес-инварианты: баланс не уходит в минус, пользователь не видит чужие данные, админка закрыта, задача не списывает деньги дважды, webhook не применяется дважды.
8. Smoke: проект стартует, импорты работают, БД подключается, /start работает, главное меню работает, основные сценарии проходят.
9. Regression: старые сценарии не сломаны после новых изменений.
10. Unit/integration/E2E gaps: какие тесты есть, каких не хватает, какие надо добавить.
11. Security: secrets, IDOR, webhook signature, Telegram initData, SQLi, SSRF, file upload, CORS, admin bypass, rate limit, unsafe logs.

## Формат результата

1. Executive summary
2. Карта проекта
3. Реестр дефектов P0/P1/P2/P3
4. Links/callbacks/routes matrix
5. External API payload matrix
6. Business logic invariants
7. Smoke checklist
8. Regression matrix
9. Unit test gaps
10. Integration/E2E test gaps
11. Security findings
12. План исправлений
13. Готовые тест-кейсы
14. Команды для запуска проверок
15. Вердикт: готово к production или нет

Для каждой серьезной находки дай:
- файл/строку;
- причину;
- сценарий воспроизведения;
- ожидаемое поведение;
- фактическое поведение;
- риск;
- fix;
- тест, который должен ловить проблему.
