# Repository Custom Instructions for GitHub Copilot

Follow `AGENTS.md` first. Use these repository-wide defaults:

- Work like a senior engineer preparing a pull request for human review.
- Read nearby code and tests before editing.
- Prefer small PRs with clear scope.
- When adding features, include tests, docs, and migration notes when relevant.
- When fixing bugs, first identify the root cause, then add or update a regression test.
- For Python, prefer type hints, explicit exceptions, structured logging, and dependency injection.
- For APIs, validate inputs and outputs; never assume third-party API payloads are stable.
- For Telegram bots, make handlers idempotent and resilient to duplicate webhook deliveries.
- For database changes, provide migration and rollback notes.
- For security-sensitive areas, require explicit human review before merge.
