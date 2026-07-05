# Universal Project Audit Checklist

Используй перед доработкой чужого проекта, перед релизом или после большого refactor.

---

## 1. Repository health

- [ ] Есть README
- [ ] Есть `.env.example`
- [ ] Есть `.gitignore`
- [ ] Нет секретов в репозитории
- [ ] Понятно, как запустить локально
- [ ] Понятно, как запустить тесты
- [ ] Есть структура `docs/`, `tests/`, `scripts/` или понятные аналоги

---

## 2. Config / env

- [ ] Все токены в env/secrets
- [ ] Есть проверка обязательных env переменных
- [ ] Ошибка config понятна человеку
- [ ] Нет fallback на production secrets
- [ ] Тарифы/модели/провайдеры не захардкожены без причины

---

## 3. Frontend / Mini App

- [ ] Routing работает
- [ ] Loading state есть
- [ ] Error state есть
- [ ] Empty state есть
- [ ] Success state есть
- [ ] Mobile layout работает
- [ ] Desktop layout не разваливается
- [ ] API ошибки не прячутся
- [ ] Auth/no-auth обработаны
- [ ] Telegram WebApp initData/start_param обработаны, если актуально

---

## 4. Backend / API

- [ ] Приложение стартует
- [ ] Health endpoint работает
- [ ] Основные routes доступны
- [ ] Входные payload валидируются
- [ ] Ошибки имеют понятный формат
- [ ] Логи не содержат секретов
- [ ] Внешние API имеют timeout
- [ ] Повторные запросы не ломают состояние
- [ ] Graceful shutdown есть или не требуется

---

## 5. Database

- [ ] Схема соответствует сценариям
- [ ] Есть миграции или понятная init-схема
- [ ] Есть индексы для частых запросов
- [ ] Есть constraints для критичных данных
- [ ] Нет прямого хаотичного изменения баланса/статусов
- [ ] Backup/restore описан, если данные важны

---

## 6. Payments / balance / referrals / premium

- [ ] Pending transaction создаётся до оплаты
- [ ] Provider payment id сохраняется
- [ ] Webhook идемпотентен
- [ ] Повтор webhook не даёт двойное начисление
- [ ] Failed/cancelled/refund статусы обработаны
- [ ] Баланс меняется через ledger/transactions
- [ ] Бонусы и рефералы защищены от дублей
- [ ] Premium имеет сроки и проверку доступа
- [ ] Admin начисления логируются

---

## 7. AI/API provider integrations

- [ ] Payload проверен по документации или рабочему примеру
- [ ] Provider/model routing явный
- [ ] Ошибка провайдера нормализуется
- [ ] Timeout/retry продуманы
- [ ] Webhook/polling работает
- [ ] Результат сохраняется
- [ ] Пользователь получает результат или понятную ошибку
- [ ] Raw response безопасен для логов

---

## 8. Telegram bot / WebApp

- [ ] `/start` работает
- [ ] Deep links работают
- [ ] Callback buttons работают
- [ ] FSM не конфликтует с common handlers
- [ ] Сценарий можно отменить/перезапустить
- [ ] Admin права проверяются
- [ ] Webhook/polling настроен однозначно
- [ ] Неизвестные сообщения обработаны

---

## 9. Security

- [ ] Нет secrets в git history/new files
- [ ] Auth проверяется на приватных routes
- [ ] Admin-only действия защищены
- [ ] Upload paths безопасны
- [ ] File type/size limits есть
- [ ] Webhook signatures проверяются, где возможно
- [ ] CORS/CSRF/XSS учтены для web
- [ ] Ошибки не раскрывают внутренности системы

---

## 10. Tests

- [ ] Smoke tests
- [ ] Regression tests
- [ ] API tests
- [ ] Unit tests для бизнес-логики
- [ ] Payment webhook duplicate test
- [ ] Provider error test
- [ ] Frontend state tests/manual QA
- [ ] Mobile adaptive check

---

## 11. Deployment

- [ ] Есть deploy инструкция
- [ ] Есть start/stop/restart
- [ ] Есть logs инструкция
- [ ] Есть backup инструкция
- [ ] Есть rollback plan
- [ ] Есть health check
- [ ] Есть monitoring или хотя бы понятные логи

---

## 12. Final verdict

Статус:

- [ ] Ready
- [ ] Ready with risks
- [ ] Not ready

Главные блокеры:

1. `...`
2. `...`
3. `...`

Следующие шаги:

1. `...`
2. `...`
3. `...`
