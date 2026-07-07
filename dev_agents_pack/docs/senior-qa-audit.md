# Senior QA Audit Checklist

Полный чеклист для глубокого аудита проекта: ботов, Mini App, API, платежей, БД, webhook, безопасности.

## 0. Контекст проекта
Определи фактический стек:
- backend: Python / aiogram / aiohttp / FastAPI
- bot: Telegram Bot, webhook или polling
- frontend: Mini App (JS/TS)
- внешние API: генерация изображений/видео, платежи
- БД: SQLite / PostgreSQL
- deploy: systemd, nginx, Docker

## 1. Карта связей
Для каждого элемента проверь:
```
Источник → Действие → Параметры → Куда передаются → Где валидируются → Где сохраняются → Где используются → Риск
```

Покрой:
- Telegram commands, callback_data, inline buttons, reply keyboards
- Deep links, Mini App links
- Frontend routes, backend endpoints, webhook endpoints
- Payment callbacks, external API calls
- File upload/download, admin actions, background jobs

## 2. Аудит ссылок, кнопок и параметров
Для каждой ссылки/кнопки:
1. Где создаётся?
2. Какой текст видит пользователь?
3. Какой action/callback/url вызывается?
4. Какие параметры должны передаваться?
5. Какие параметры реально передаются?
6. Кто принимает эти параметры?
7. Совпадают ли имена и типы?
8. Что будет, если параметра нет / пустой / чужой?
9. Есть ли тест на этот сценарий?
10. Есть ли логирование ошибки?

## 3. Аудит внешних API и payload
Для каждого API:
```
Provider → Method → Endpoint → Required fields → Current payload → Missing/Wrong → Обработка ответа → Ошибки
```

## 4. Бизнес-логика
Entity lifecycle для каждой сущности:
- User, Balance, Transaction, Plan/Tariff, GenerationTask
- Payment, Referral, AdminAction, File/Asset
- ProviderRequest, ProviderResult

## 5. Smoke-проверки
- [ ] Установка зависимостей
- [ ] Импорт всех модулей
- [ ] Запуск приложения
- [ ] Чтение .env
- [ ] Подключение к БД
- [ ] Применение миграций
- [ ] Старт Telegram bot/webhook
- [ ] Healthcheck
- [ ] Открытие Mini App
- [ ] /start → главное меню

## 6. Regression-матрица
Обязательные flows:
1. Новый пользователь → /start → регистрация → главное меню
2. Пополнение баланса → баланс обновился → транзакция записана
3. Создание генерации → баланс списан → задача создана → payload ушёл в API
4. API success → результат сохранён → пользователь получил файл
5. API error → задача failed → деньги возвращены или статус обработан
6. Повторное нажатие кнопки → нет двойного списания
7. Webhook дважды → нет двойного начисления
8. История → только свои задачи
9. Админ → корректные агрегаты
10. Обычный пользователь → admin callback = отказ

## 7. Unit-тесты (должны быть)
- Расчёт цены, списание/начисление баланса
- Проверка прав, генерация/парсинг callback_data
- Сборка payload, валидация prompt
- Валидация файлов (размер, mime-type)
- Парсинг ответа API, обработка статусов
- Форматирование сообщений, расчёт реферального бонуса
- Idempotency ключи, переходы статусов

## 8. Security
- [ ] Секреты в репозитории
- [ ] .env в git
- [ ] Токены в логах
- [ ] SQL injection
- [ ] Command injection
- [ ] Path traversal
- [ ] SSRF через URL картинки/файла
- [ ] IDOR — доступ к чужим id
- [ ] CSRF для web endpoints
- [ ] Проверка подписи webhook
- [ ] Проверка Telegram initData для Mini App
- [ ] Admin bypass
- [ ] Rate limiting
- [ ] Idempotency

## 9. БД и миграции
- [ ] Модели соответствуют миграциям
- [ ] Индексы на частых запросах
- [ ] Unique constraints (payment_id, task_id)
- [ ] Foreign keys
- [ ] Транзакции для атомарных операций
- [ ] Гонки при обновлении баланса
- [ ] Двойное списание

## Severity
- **P0** — деньги, безопасность, полная неработоспособность, потеря данных
- **P1** — ключевой пользовательский flow сломан
- **P2** — частичная поломка, edge case, плохая обработка ошибок
- **P3** — улучшение, refactor, UX, техдолг

## Формат финального вывода
```
Готово к production: да/нет
Главная причина: ...
Топ-5 исправлений перед релизом:
  1. ...
Минимальный test suite перед merge:
  - ...
Что проверить вручную:
  - ...
Что автоматизировать в CI:
  - ...
```
