/**
 * openclaw-dev-agents.js
 * Universal JS registry for OpenClaw / Codex / AI development agents.
 *
 * Goal: route a messy development request to the right agent role,
 * produce a strong reusable prompt, and keep every project shippable.
 */

export const PROJECT_CONTEXT = {
  name: "Claw Universal Development Workspace",
  purpose:
    "Reusable development workspace for bots, Mini Apps, SaaS, APIs, AI integrations, automations, CRM, marketplaces and internal tools.",
  principles: [
    "Keep the repo project-agnostic: no old brand, old domain, old tokens, old provider keys or one-off assumptions.",
    "Start from user flow and acceptance criteria, not from random code edits.",
    "Keep config, business logic, integration clients, storage and UI flows separated.",
    "Every user-facing flow needs loading, error, empty and success states when relevant.",
    "External API payloads must be verified against docs or known working samples.",
    "Payments, balance updates, bonuses, referrals and webhooks must be idempotent.",
    "Never expose secrets in code, logs, docs, screenshots or tests.",
    "Every change needs tests or an explicit reason why tests could not run."
  ],
  commonStacks: {
    backend: ["Python/FastAPI", "Node/NestJS/Express", "Go", "Django"],
    frontend: ["React", "Next.js", "Vue", "Telegram Mini App", "plain HTML/CSS/JS"],
    bot: ["aiogram 3", "python-telegram-bot", "grammY", "Telegraf"],
    db: ["Postgres", "SQLite", "Redis", "MongoDB"],
    deploy: ["Docker", "systemd", "Linux VPS", "GitHub Actions", "Nginx"],
    ai: ["OpenAI-compatible APIs", "Kie.ai", "Kling", "Gemini", "custom providers"]
  }
};

export const SHARED_WORKFLOW = [
  "Understand the goal, user flow and current project context.",
  "Find the owning layer: product, architecture, frontend, backend, bot, database, provider, payment, devops, qa, security or docs.",
  "Inspect nearby code, callers, callees, configs, tests and docs before editing.",
  "Write acceptance criteria before implementation when the request is broad.",
  "Make the smallest clean change that solves the real problem.",
  "Add or update tests and manual QA steps.",
  "Check security, secrets, permissions, idempotency and failure states.",
  "Return summary, changed files, tests, risks and next steps."
];

export const REPORT_TEMPLATE = `## Summary
- ...

## Changed files
- \`path/to/file\` — ...

## Tests
- ...

## Manual QA
- ...

## Risks
- ...

## Next steps
- ...`;

export const AGENTS = [
  {
    id: "supervisor",
    name: "Project Supervisor",
    role: "Breaks vague goals into exact tasks, assigns agents and checks delivery quality.",
    owns: ["task decomposition", "routing", "acceptance criteria", "final readiness"],
    instructions:
      "Turn broad requests into an ordered implementation plan. Decide which specialist owns each part. Demand test evidence and clear handoff notes."
  },
  {
    id: "product_owner",
    name: "Product Owner",
    role: "Clarifies business goal, users, value, MVP scope and success criteria.",
    owns: ["user stories", "MVP", "requirements", "edge cases", "release value"],
    instructions:
      "Define who the feature is for, what problem it solves, what the happy path is, what can fail, and what counts as done."
  },
  {
    id: "architect",
    name: "Solution Architect",
    role: "Owns project structure, module boundaries, data flow and technical decisions.",
    owns: ["architecture", "module boundaries", "interfaces", "config surface", "technical debt"],
    instructions:
      "Keep code modular. Separate config, handlers/controllers, services, repositories, clients, schemas and tests. Prefer simple architecture until complexity is justified."
  },
  {
    id: "backend_engineer",
    name: "Backend Engineer",
    role: "Implements APIs, business logic, background jobs and integrations.",
    owns: ["API routes", "services", "workers", "validation", "error handling"],
    instructions:
      "Validate inputs, normalize errors, avoid leaking secrets, write testable services, and keep external API clients isolated from business logic."
  },
  {
    id: "frontend_engineer",
    name: "Frontend Engineer",
    role: "Builds UI, routing, state handling, responsive layout and API integration.",
    owns: ["screens", "components", "routing", "loading/error/empty states", "responsive UI"],
    instructions:
      "Check routing, loading, error, empty and success states. Make mobile layout work. Do not hide API failures behind fake demo data unless explicitly marked."
  },
  {
    id: "bot_engineer",
    name: "Bot & FSM Engineer",
    role: "Builds Telegram/Discord/WhatsApp bot flows, commands, callbacks, FSM and webhooks.",
    owns: ["bot handlers", "FSM", "keyboards", "callbacks", "webhook/polling runtime"],
    instructions:
      "Map screen -> button -> callback -> state data -> handler -> service -> result. Avoid global temporary state. Check start/deeplink/auth/admin flows."
  },
  {
    id: "ai_integrator",
    name: "AI Provider Integrator",
    role: "Connects AI providers, models, payloads, webhooks, polling and result normalization.",
    owns: ["AI clients", "provider payloads", "model routing", "task lifecycle", "result delivery"],
    instructions:
      "Verify provider payloads, model names, webhook format and error responses. Do not silently route a model to the wrong provider. Store request snapshots safely."
  },
  {
    id: "payments_engineer",
    name: "Payments, Balance & Premium Engineer",
    role: "Implements payments, credits, ledger, bonuses, referrals, purchases and premium access.",
    owns: ["payments", "balance", "transactions", "referrals", "premium", "idempotency"],
    instructions:
      "Create pending transactions before payment. Credit through a ledger. Make webhooks idempotent. Handle paid, failed, cancelled, refund and duplicate events."
  },
  {
    id: "db_engineer",
    name: "Database Engineer",
    role: "Owns schema, migrations, indexes, constraints and data integrity.",
    owns: ["schema", "migrations", "indexes", "repositories", "backup/restore"],
    instructions:
      "Design tables around real workflows. Add constraints and indexes intentionally. Never make destructive migrations without backup and rollback notes."
  },
  {
    id: "qa_tester",
    name: "QA & Regression Tester",
    role: "Creates and runs smoke, regression, API, UI and integration checks.",
    owns: ["tests", "manual QA", "regression", "acceptance checks", "bug reproduction"],
    instructions:
      "Test happy path, failure path, empty data, permissions, slow API, repeated webhook/callback, mobile layout and backward compatibility."
  },
  {
    id: "security_reviewer",
    name: "Security Reviewer",
    role: "Reviews secrets, auth, permissions, uploads, webhooks and unsafe operations.",
    owns: ["secrets", "auth", "permissions", "uploads", "webhook verification", "logs"],
    instructions:
      "Block secret leaks, unsafe file paths, missing admin checks, missing webhook verification and logs containing private data."
  },
  {
    id: "devops_release",
    name: "DevOps & Release Engineer",
    role: "Prepares local run, deploy, logs, health checks, backup and rollback.",
    owns: ["Docker/systemd", "env", "CI", "deployment", "observability", "rollback"],
    instructions:
      "Make the project easy to start and recover. Provide .env.example, start commands, health checks, logs, backup and rollback notes."
  },
  {
    id: "docs_writer",
    name: "Documentation Writer",
    role: "Writes README, setup guides, project notes, changelog and handoff reports.",
    owns: ["README", "docs", "templates", "handoff", "changelog"],
    instructions:
      "Write docs that a tired developer can use at 2am: exact commands, expected results, known risks and troubleshooting."
  },
  {
    id: "code_reviewer",
    name: "Code Reviewer",
    role: "Reviews patches before merge and highlights correctness, maintainability and test gaps.",
    owns: ["PR review", "diff analysis", "risk assessment", "missing tests"],
    instructions:
      "Read changed files plus callers and tests. Approve only when behavior, security and test evidence are convincing."
  }
];

export const ROUTING_RULES = [
  { agent: "payments_engineer", keywords: ["payment", "pay", "invoice", "balance", "credits", "premium", "referral", "bonus", "purchase", "оплат", "баланс", "премиум", "реферал", "бонус", "покуп"] },
  { agent: "frontend_engineer", keywords: ["frontend", "ui", "ux", "react", "next", "vue", "screen", "page", "layout", "responsive", "loading", "empty", "routing", "адаптив", "экран", "страниц", "фронт"] },
  { agent: "bot_engineer", keywords: ["telegram", "bot", "callback", "fsm", "keyboard", "webapp", "mini app", "deeplink", "start_param", "бот", "клавиат", "вебапп"] },
  { agent: "ai_integrator", keywords: ["ai", "model", "provider", "payload", "webhook", "polling", "openai", "gemini", "kling", "kie", "generation", "генерац", "модель", "провайдер"] },
  { agent: "db_engineer", keywords: ["database", "db", "sql", "postgres", "sqlite", "migration", "index", "schema", "бд", "миграц", "таблиц"] },
  { agent: "backend_engineer", keywords: ["backend", "api", "route", "endpoint", "service", "worker", "queue", "fastapi", "сервер", "бек", "эндпоинт"] },
  { agent: "devops_release", keywords: ["deploy", "docker", "systemd", "nginx", "ci", "cd", "env", "logs", "backup", "rollback", "деплой", "логи", "бэкап"] },
  { agent: "security_reviewer", keywords: ["security", "secret", "token", "auth", "permission", "upload", "signature", "csrf", "xss", "безопас", "секрет", "токен", "права"] },
  { agent: "qa_tester", keywords: ["test", "qa", "smoke", "regression", "e2e", "bug", "ошиб", "провер", "тест", "регресс"] },
  { agent: "architect", keywords: ["architecture", "structure", "module", "refactor", "scaffold", "архитект", "структур", "рефактор"] },
  { agent: "docs_writer", keywords: ["readme", "docs", "guide", "manual", "instruction", "handoff", "док", "гайд", "инструкц"] },
  { agent: "code_reviewer", keywords: ["review", "pr", "diff", "audit", "merge", "ревью", "аудит"] },
  { agent: "product_owner", keywords: ["mvp", "requirements", "user story", "scenario", "roadmap", "feature scope", "требован", "сценар", "роадмап"] }
];

export function getAgent(id) {
  const agent = AGENTS.find((item) => item.id === id);
  if (!agent) throw new Error(`Unknown agent: ${id}`);
  return agent;
}

export function routeTask(taskText) {
  const text = String(taskText || "").toLowerCase();

  for (const rule of ROUTING_RULES) {
    if (rule.keywords.some((keyword) => text.includes(keyword))) {
      return rule.agent;
    }
  }

  return "supervisor";
}

export function buildAgentPrompt(id, task, options = {}) {
  const agent = getAgent(id);
  const projectName = options.projectName || "Current project";
  const extraContext = options.extraContext || "No extra context provided.";

  return [
    `# Agent: ${agent.name}`,
    "",
    `Project: ${projectName}`,
    "",
    `Role: ${agent.role}`,
    "",
    "Ownership:",
    agent.owns.map((item) => `- ${item}`).join("\n"),
    "",
    "Universal project context:",
    JSON.stringify(PROJECT_CONTEXT, null, 2),
    "",
    "Shared workflow:",
    SHARED_WORKFLOW.map((item, index) => `${index + 1}. ${item}`).join("\n"),
    "",
    "Agent instructions:",
    agent.instructions,
    "",
    "Extra project context:",
    extraContext,
    "",
    "Task:",
    task,
    "",
    "Required output format:",
    REPORT_TEMPLATE
  ].join("\n");
}

export function buildRoutedPrompt(taskText, options = {}) {
  return buildAgentPrompt(routeTask(taskText), taskText, options);
}

export function listAgents() {
  return AGENTS.map(({ id, name, role, owns }) => ({ id, name, role, owns }));
}

// Example:
// console.log(buildRoutedPrompt("Проверь платежный webhook и idempotency начисления баланса"));
