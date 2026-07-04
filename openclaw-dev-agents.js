/**
 * openclaw-dev-agents.js
 * Compact JS registry for OpenClaw development agents.
 * The project is repository-agnostic and must be configured for a new product.
 */

export const PROJECT_CONTEXT = {
  productType: "AI Telegram Bot + Telegram Mini App",
  stack: {
    bot: "Python, aiogram 3, aiohttp webhook server",
    db: "SQLite first, optional Postgres",
    miniApp: "Telegram Mini App with JS/TS frontend",
    deploy: "Linux VPS, systemd, webhook mode",
  },
  rules: [
    "Create a new standalone product, not a copy tied to an old repo or brand.",
    "Keep the architecture: config, FSM, keyboards, handlers, services, database, webhooks, tests.",
    "Keep prices, model lists, domains, and provider settings configurable.",
    "Every user-facing feature must be reachable through Telegram UI or Mini App UI.",
    "All temporary user choices must be stored in FSMContext.",
    "Use tests or provide a clear reason when tests cannot run.",
  ],
};

export const SHARED_WORKFLOW = [
  "Understand the requested change.",
  "Find the owning layer.",
  "Inspect nearby code and related flows.",
  "Map screen -> callback -> FSM data -> handler -> service -> DB task -> result.",
  "Make a small clean change.",
  "Add or update tests.",
  "Return summary, changed files, tests, risks, next step.",
];

export const AGENTS = [
  {
    id: "supervisor",
    name: "Project Supervisor",
    role: "Splits tasks, assigns agents, checks readiness.",
    owns: ["roadmap", "task routing", "acceptance criteria"],
    instructions: "Turn broad goals into exact implementation tasks. Assign the right agent. Keep the new project independent from old repo, old brand, and old domain.",
  },
  {
    id: "architect",
    name: "Core Architect",
    role: "Keeps module boundaries and project structure clean.",
    owns: ["architecture", "config", "module boundaries", "provider routing"],
    instructions: "Preserve the core structure: bot/main.py, config.py, env.py, states.py, keyboards.py, database.py, db.py, handlers, services, miniapp.py, data, tests.",
  },
  {
    id: "fsm_ux_engineer",
    name: "FSM & Telegram UX Engineer",
    role: "Builds Telegram screens, keyboards, callbacks, and FSM transitions.",
    owns: ["bot/states.py", "bot/keyboards.py", "Telegram flows", "callback contracts"],
    instructions: "Implement screen -> keyboard -> callback -> state.update_data -> state.set_state -> next screen. Do not store user choices in globals.",
  },
  {
    id: "generation_engineer",
    name: "Generation Pipeline Engineer",
    role: "Implements image/video generation lifecycle.",
    owns: ["generation handlers", "generation_tasks", "task lifecycle", "result delivery"],
    instructions: "Validate inputs, check balance, create generation_task, call correct provider service, store request snapshot, complete via webhook or polling, deliver result.",
  },
  {
    id: "provider_integrator",
    name: "AI Provider Integrator",
    role: "Connects external AI provider services.",
    owns: ["bot/services/*", "provider request/response normalization", "provider callbacks"],
    instructions: "Each provider gets its own service file. Normalize responses into status, task_id, result_urls, error, raw. Do not silently route a model to the wrong provider.",
  },
  {
    id: "payments_engineer",
    name: "Payments & Credits Engineer",
    role: "Implements packages, transactions, balance, promo logic, and credit ledger.",
    owns: ["payments.py", "transactions", "credits", "packages"],
    instructions: "Payment flow: balance -> top up -> package -> provider -> pending transaction -> callback -> crediting. Transaction crediting must be idempotent.",
  },
  {
    id: "miniapp_engineer",
    name: "Mini App Frontend Engineer",
    role: "Builds Telegram Mini App screens and backend API integration.",
    owns: ["bot/miniapp.py", "static frontend", "JS/TS UI", "Mini App API"],
    instructions: "Build Home, Create Image, Create Video, Balance, History, Feed, Prompt Library, Partner, Settings. Read pricing/model data from backend.",
  },
  {
    id: "db_migration_engineer",
    name: "Database & Migration Engineer",
    role: "Owns schema, migrations, indexes, and data integrity.",
    owns: ["database.py", "db.py", "migrations", "SQLite/Postgres path"],
    instructions: "Core tables: users, transactions, generation_tasks, generation_history, user_settings, referrals, saved_references, user_prompts, batch_jobs, bot_settings.",
  },
  {
    id: "qa_tester",
    name: "QA & Test Engineer",
    role: "Creates regression tests and manual QA paths.",
    owns: ["tests", "manual QA", "acceptance checklist"],
    instructions: "Test imports, config loading, keyboards, FSM transitions, image flow, video flow, reference upload, balance checks, generation task creation, callbacks, admin access.",
  },
  {
    id: "security_reviewer",
    name: "Security Reviewer",
    role: "Reviews permissions, uploads, webhook checks, and public routes.",
    owns: ["review", "uploads", "webhook checks", "admin-only flows"],
    instructions: "Review public routes, uploaded files, admin actions, webhook checks, and logs. Block risky changes until a safer fix is provided.",
  },
  {
    id: "devops_release",
    name: "DevOps & Release Engineer",
    role: "Prepares deployment, runtime, health checks, logs, backup, and rollback.",
    owns: ["install scripts", "systemd", ".env.example", "logs", "backup"],
    instructions: "Prepare .env.example, setup/start/stop scripts, systemd service, health endpoint, logging, backup, deploy notes, rollback notes.",
  },
  {
    id: "code_reviewer",
    name: "Code Reviewer",
    role: "Reviews patches before merge.",
    owns: ["review", "risk assessment", "missing tests"],
    instructions: "Read changed code, callers, callees, sibling flows, tests, and docs. Return approve/request changes/needs more evidence.",
  },
];

export function getAgent(id) {
  const agent = AGENTS.find((item) => item.id === id);
  if (!agent) throw new Error(`Unknown agent: ${id}`);
  return agent;
}

export function routeTask(taskText) {
  const text = String(taskText || "").toLowerCase();

  if (text.includes("fsm") || text.includes("callback") || text.includes("keyboard") || text.includes("экран")) return "fsm_ux_engineer";
  if (text.includes("payment") || text.includes("оплат") || text.includes("баланс")) return "payments_engineer";
  if (text.includes("provider") || text.includes("payload") || text.includes("api") || text.includes("kie") || text.includes("kling")) return "provider_integrator";
  if (text.includes("mini app") || text.includes("frontend") || text.includes("webapp")) return "miniapp_engineer";
  if (text.includes("db") || text.includes("database") || text.includes("migration") || text.includes("sqlite") || text.includes("postgres")) return "db_migration_engineer";
  if (text.includes("test") || text.includes("qa") || text.includes("провер")) return "qa_tester";
  if (text.includes("security") || text.includes("review public") || text.includes("upload")) return "security_reviewer";
  if (text.includes("deploy") || text.includes("systemd") || text.includes("install") || text.includes("env")) return "devops_release";
  if (text.includes("review") || text.includes("pr") || text.includes("audit") || text.includes("аудит")) return "code_reviewer";
  if (text.includes("generation") || text.includes("генерац") || text.includes("image") || text.includes("video")) return "generation_engineer";

  return "supervisor";
}

export function buildAgentPrompt(id, task) {
  const agent = getAgent(id);
  return [
    `# Agent: ${agent.name}`,
    "",
    `Role: ${agent.role}`,
    "",
    "Ownership:",
    agent.owns.map((item) => `- ${item}`).join("\n"),
    "",
    "Project context:",
    JSON.stringify(PROJECT_CONTEXT, null, 2),
    "",
    "Shared workflow:",
    SHARED_WORKFLOW.map((item, index) => `${index + 1}. ${item}`).join("\n"),
    "",
    "Instructions:",
    agent.instructions,
    "",
    "Task:",
    task,
  ].join("\n");
}

export function buildRoutedPrompt(taskText) {
  return buildAgentPrompt(routeTask(taskText), taskText);
}

// Example:
// console.log(buildRoutedPrompt("Сделай FSM flow для создания фото с выбором модели и референсами"));
