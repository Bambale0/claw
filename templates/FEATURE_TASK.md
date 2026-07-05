# Feature Task

Шаблон для постановки задачи AI-агенту или разработчику.

---

## 1. Название задачи

`...`

---

## 2. Контекст

Что сейчас есть:

`...`

Что не работает / чего не хватает:

`...`

---

## 3. Цель

После выполнения задачи должно быть:

`...`

---

## 4. Пользовательский сценарий

```text
1. Пользователь ...
2. Система ...
3. Пользователь ...
4. Система показывает результат ...
```

---

## 5. Scope

Нужно сделать:

- [ ] `...`
- [ ] `...`
- [ ] `...`

Не нужно делать:

- `...`

---

## 6. Технические требования

Frontend:

- [ ] routing
- [ ] loading state
- [ ] error state
- [ ] empty state
- [ ] success state
- [ ] mobile responsive

Backend:

- [ ] endpoint/service
- [ ] validation
- [ ] DB changes
- [ ] error handling
- [ ] logging without secrets

Bot/WebApp:

- [ ] command/callback
- [ ] FSM state
- [ ] keyboard/screen
- [ ] Telegram auth/start_param

Payments:

- [ ] pending transaction
- [ ] idempotent webhook
- [ ] ledger/balance update
- [ ] failed/cancelled/refund handling

AI/API provider:

- [ ] verified payload
- [ ] timeout/retry
- [ ] webhook/polling
- [ ] normalized result
- [ ] normalized error

---

## 7. Acceptance criteria

- [ ] Happy path works
- [ ] Error path works
- [ ] Empty state works, if relevant
- [ ] No secret leaks
- [ ] Tests or manual QA included
- [ ] Docs updated, if behavior changed

---

## 8. Tests to run

Commands:

```bash
# examples
pytest
npm test
node --check openclaw-dev-agents.js
```

Manual QA:

- [ ] `...`

---

## 9. Expected agent report

Agent must return:

- summary;
- changed files;
- tests run;
- manual QA;
- risks;
- next steps.
