# AGENTS.md — OpenClaw development team

This repository is a **new standalone project workspace** for building an AI Telegram Bot + Telegram Mini App from a proven production core.

Do **not** bind this project to any old repository, old domain, old brand, old bot token, old payment key, or old AI provider key.

The old project can be used only as a technical reference for architecture and UX patterns. This repository must become its own product.

---

## 1. Project goal

Build a production-ready AI Telegram Bot + Telegram Mini App with:

- aiogram 3 Telegram bot.
- Webhook-first production runtime.
- Telegram Mini App.
- Image generation flow.
- Video generation flow.
- Reference image/video upload flow.
- Payment and credit balance system.
- Admin panel.
- Prompt by photo/video flow.
- Feed, prompt library, repeat, remix.
- Provider routing.
- AI provider webhooks.
- Payment provider webhooks.
- SQLite-first DB with optional Postgres path.
- Tests, deployment scripts, `.env.example`, and rollback notes.

---

## 2. Non-negotiable rules

1. Do not hardcode old repo, old domain, old brand, old secrets, old payment credentials, or old provider keys.
2. Preserve the production architecture: config → states → keyboards → handlers → services → database → webhooks → result delivery.
3. Every user-facing feature must be reachable through Telegram UI or Mini App UI.
4. All temporary user choices must live in `FSMContext`, not in global variables.
5. Prices, model list, provider flags, brand texts, domains, and payment settings must be config-driven.
6. Never expose secrets in code, logs, examples, screenshots, tests, or docs.
7. Webhooks must verify signatures where supported.
8. Payment webhooks must be idempotent.
9. Provider payload changes must be checked against current docs or known working samples.
10. Every meaningful change needs tests or a written reason why tests could not be run.
11. Common handlers must not intercept specialized FSM handlers.
12. Wrong provider routing must fail loudly, not silently fallback.

---

## 3. Target repository structure

```text
.
├── AGENTS.md
├── openclaw-dev-agents.js
├── .env.example
├── requirements.txt
├── start.sh
├── stop.sh
├── bot/
│   ├── __init__.py
│   ├── main.py
│   ├── config.py
│   ├── env.py
│   ├── states.py
│   ├── keyboards.py
│   ├── database.py
│   ├── db.py
│   ├── postgres_aiosqlite.py
│   ├── miniapp.py
│   ├── handlers/
│   │   ├── common.py
│   │   ├── generation.py
│   │   ├── payments.py
│   │   ├── admin.py
│   │   ├── image_analyzer.py
│   │   └── batch_generation.py
│   ├── services/
│   │   ├── preset_manager.py
│   │   ├── reference_storage_service.py
│   │   ├── subscription_service.py
│   │   ├── cryptobot_service.py
│   │   ├── lava_service.py
│   │   ├── yookassa_service.py
│   │   ├── kling_service.py
│   │   ├── kie_market_service.py
│   │   ├── nano_banana_2_service.py
│   │   ├── nano_banana_pro_service.py
│   │   ├── gpt_image_service.py
│   │   ├── seedream_service.py
│   │   ├── grok_service.py
│   │   ├── veo_service.py
│   │   └── gemini_service.py
│   └── utils/
├── data/
│   ├── price.json
│   └── presets.json
├── static/
│   └── uploads/
├── tests/
└── scripts/
```

---

## 4. Required OpenClaw agent roles

The JS registry `openclaw-dev-agents.js` defines the role prompts and task router.

Use these agents:

1. `supervisor` — breaks down tasks, assigns agents, checks readiness.
2. `architect` — owns project skeleton, module boundaries, config surface.
3. `fsm_ux_engineer` — owns Telegram screens, callbacks, keyboards, FSM transitions.
4. `generation_engineer` — owns image/video task lifecycle.
5. `provider_integrator` — owns external AI provider services, payloads, webhooks.
6. `payments_engineer` — owns credits, packages, transactions, promo codes, idempotency.
7. `miniapp_engineer` — owns Telegram Mini App frontend/backend API.
8. `db_migration_engineer` — owns schema, migrations, SQLite/Postgres path.
9. `qa_tester` — owns tests, regression paths, manual QA.
10. `security_reviewer` — owns secrets, auth, uploads, webhook verification.
11. `devops_release` — owns deployment, systemd, logs, backup, rollback.
12. `code_reviewer` — reviews changes before merge.

Example usage:

```js
import { buildRoutedPrompt } from "./openclaw-dev-agents.js";

console.log(buildRoutedPrompt("Сделай FSM flow для создания фото с выбором модели и референсами"));
console.log(buildRoutedPrompt("Проверь webhook оплаты и idempotency начисления баланса"));
```

---

## 5. Required FSM groups

Create `bot/states.py` with at least these groups:

```python
from aiogram.fsm.state import State, StatesGroup


class GenerationStates(StatesGroup):
    waiting_for_input = State()
    waiting_for_repeat_prompt = State()

    waiting_for_image = State()
    waiting_for_video = State()
    waiting_for_video_prompt = State()

    uploading_reference_images = State()
    uploading_reference_videos = State()
    confirming_reference_images = State()

    waiting_for_reference_video = State()
    waiting_for_video_start_image = State()

    waiting_for_motion_character_image = State()
    waiting_for_motion_video = State()

    waiting_for_avatar_audio = State()

    selecting_duration = State()
    selecting_aspect_ratio = State()
    selecting_quality = State()

    waiting_for_kling_negative_prompt = State()
    waiting_for_kling_cfg_scale = State()

    waiting_for_veo_seed = State()
    waiting_for_veo_watermark = State()
    waiting_for_veo_extend_prompt = State()

    waiting_for_omni_seed = State()
    waiting_for_omni_audio_ids = State()
    waiting_for_omni_character_ids = State()
    waiting_for_omni_voice_base = State()
    waiting_for_omni_voice_name = State()
    waiting_for_omni_voice_description = State()
    waiting_for_omni_example_dialogue = State()
    waiting_for_omni_character_name = State()
    waiting_for_omni_character_audio_ids = State()


class PaymentStates(StatesGroup):
    selecting_package = State()
    waiting_promo_code = State()
    confirming_payment = State()
    waiting_payment = State()
    waiting_partner_withdraw_requisites = State()
    waiting_partner_withdraw_amount = State()
    waiting_partner_exchange_amount = State()


class AdminStates(StatesGroup):
    waiting_broadcast_text = State()
    confirming_broadcast = State()
    waiting_user_id = State()
    waiting_partner_user_id = State()
    waiting_credits_amount = State()
    waiting_price_value = State()
    waiting_prompt_id = State()
    waiting_prompt_reject_reason = State()
    waiting_promo_code_value = State()
    waiting_ai_request = State()
    confirming_ai_action = State()


class BatchGenerationStates(StatesGroup):
    selecting_mode = State()
    selecting_preset = State()
    entering_prompts = State()
    uploading_references = State()
    confirming_batch = State()
    selecting_batch_count = State()


class ImageAnalyzerStates(StatesGroup):
    waiting_for_photo = State()
    waiting_for_video_prompt = State()
    waiting_for_photo_vk = State()
```

---

## 6. Telegram UI contract

### Main menu buttons

```text
🚀 Open Mini App
🖼 Create image
🎬 Create video
🎯 Motion Control
📸 Prompt by photo
🎞 Prompt by video
🖼 Feed
📚 Prompt library
🤖 AI assistant
🍌 Balance
💬 Support
🤝 Partners
⋯ More
```

### Image flow

```text
Main menu
→ Create image
→ Select image model
→ Upload or skip reference images
→ Configure ratio / quality / count
→ User sends prompt
→ Validate
→ Check balance
→ Deduct credits
→ Create generation_task
→ Call provider service
→ Wait for webhook/polling
→ Deliver result
→ Show result actions
```

Required callback names:

```text
create_image_text_new
create_image_refs_new
image_change_model
model_banana_pro
model_banana_2
model_nano_banana_2_lite
model_seedream_edit
model_grok_i2i
model_flux_pro
model_wan_27
ref_skip_new
img_ref_continue_new
ref_saved_library
img_ratio_1_1
img_ratio_16_9
img_ratio_9_16
img_ratio_4_3
img_ratio_3_4
img_quality_2k
img_quality_4k
img_quality_basic
img_quality_high
img_count_1
img_count_2
img_count_4
img_count_6
```

### Video flow

```text
Main menu
→ Create video
→ Select video model
→ Select type/media
→ Upload required files if needed
→ Configure ratio / duration / quality / special options
→ User sends prompt
→ Validate
→ Check balance
→ Deduct credits
→ Create generation_task
→ Call provider service
→ Wait for webhook/polling
→ Deliver result
→ Show result actions
```

Video types:

```text
text      = Text → Video
imgtxt    = Image + Text → Video
video     = Video + Text → Video
avatar    = Avatar + Audio → Video
motion    = Motion Control
audio     = Gemini Omni Audio ID
character = Gemini Omni Character ID
```

Required callback names:

```text
create_video_new
video_change_model
video_change_media
video_media_continue
video_media_skip
v_model_v3_pro
v_model_v3_std
v_model_v26_pro
v_model_grok_imagine
v_model_grok_imagine_v15
v_model_seedance_2
v_model_gemini_omni
v_model_veo3
v_model_veo3_fast
v_model_veo3_lite
v_model_glow
v_type_text
v_type_imgtxt
v_type_video
v_type_avatar
v_type_motion
ratio_16_9
ratio_9_16
ratio_1_1
video_dur_4
video_dur_5
video_dur_6
video_dur_8
video_dur_10
video_dur_15
kling_negative_prompt_edit
kling_cfg_scale_edit
veo_translation_toggle
veo_resolution_720p
veo_resolution_1080p
veo_resolution_4k
veo_seed_edit
veo_watermark_edit
omni_mode_video
omni_mode_audio
omni_mode_character
omni_resolution_720p
omni_resolution_1080p
omni_resolution_4k
omni_seed_edit
omni_audio_ids_edit
omni_character_ids_edit
```

### Payment flow

```text
Main menu
→ Balance
→ Top up
→ Select package
→ Optional promo code
→ Select payment provider
→ Create pending transaction
→ Show payment link
→ Provider webhook
→ Verify signature
→ Idempotent crediting
→ Notify user
```

Required callback names:

```text
menu_balance
menu_topup
choose_pay_{package_id}
topup_enter_promo
topup_remove_promo
buy_stars_{package_id}
buy_crypto_{package_id}
buy_yookassa_{package_id}
buy_lava_{package_id}
check_payment_{transaction_id}
```

### Admin flow

Required sections:

```text
📊 Stats
👥 Users
🤝 Partners
📒 Finance/referrals
💸 Prices
🎟 Promo codes
📚 Prompts
🤖 AI admin
⚙️ Broadcast
🔐 Required channel subscription
🏠 Main menu
```

Required callback names:

```text
admin_stats
admin_users
admin_partners
admin_finance
admin_prices
admin_promocodes
admin_prompts
admin_ai
admin_broadcast
admin_required_subscription_toggle
admin_back
```

---

## 7. Screen implementation pattern

Every important screen must have:

```text
1. render function
2. keyboard builder
3. callback handlers
4. FSM transition
```

Example:

```python
async def show_some_screen(callback, state):
    data = await state.get_data()
    text = build_some_screen_text(data)
    keyboard = get_some_screen_keyboard(data)

    await callback.message.edit_text(
        text,
        reply_markup=keyboard,
        parse_mode="HTML",
    )

    await state.set_state(SomeStates.some_state)


def get_some_screen_keyboard(data):
    builder = InlineKeyboardBuilder()
    builder.button(text="✅ Continue", callback_data="some_continue")
    builder.button(text="🔙 Back", callback_data="some_back")
    builder.adjust(1)
    return builder.as_markup()


@router.callback_query(F.data == "some_continue")
async def some_continue(callback, state):
    await state.update_data(some_step_completed=True)
    await show_next_screen(callback, state)
    await callback.answer()
```

---

## 8. Router order

Specialized routers first, common router last:

```python
def setup_dispatcher(storage):
    dp = Dispatcher(storage=storage)

    dp.include_router(generation_router)
    dp.include_router(image_analyzer_router)
    dp.include_router(admin_router)
    dp.include_router(payments_router)
    dp.include_router(batch_generation_router)
    dp.include_router(common_router)

    return dp
```

---

## 9. Generation task lifecycle

Every generation task must store:

```text
user_id
telegram_id
local_task_id
provider_task_id
type
selected_model
provider_model
prompt
effective_prompt
cost
aspect_ratio
duration
status
result_url
result_urls
request_data
source_feed_gen_id
parent_generation_id
action_type
```

Pipeline:

```text
User chooses model/settings/references
→ user sends prompt
→ validate inputs
→ check balance
→ deduct credits according to policy
→ create local generation_task
→ call provider
→ store provider task id
→ complete via webhook or polling
→ deliver result
→ show result actions
```

---

## 10. Required tests

Minimum checklist:

```text
1. FSM states import correctly.
2. Main menu keyboard builds.
3. Image flow starts from create_image_text_new.
4. Video flow starts from create_video_new.
5. Model selection updates FSM data.
6. Reference upload stores URL in FSM data.
7. Prompt creates generation_task.
8. Insufficient balance blocks generation.
9. Provider queued response updates task_id.
10. AI webhook completes task.
11. Payment webhook credits transaction exactly once.
12. Admin router rejects non-admin.
13. Mini App validates Telegram initData.
14. .env.example contains no real secrets.
15. start.sh does not kill unrelated processes.
```

---

## 11. Done criteria

A task is not done unless the agent returns:

```text
Summary:
Changed files:
How to test:
Tests run:
Risks:
Next recommended step:
```

A milestone is not done unless these paths work without manual DB edits:

```text
/start → Create image → result
/start → Create video → result
/start → Balance → payment → credits
/start → Feed → repeat/remix
/admin → stats/prices/promo/broadcast
Mini App → create image/video → task status/result
```

---

## 12. First implementation order

```text
1. Bootstrap project skeleton.
2. Add config/env loader and .env.example.
3. Add states.py.
4. Add main menu and keyboards.
5. Add DB schema and init.
6. Add image FSM flow with mock provider.
7. Add video FSM flow with mock provider.
8. Add generation_tasks lifecycle.
9. Add real providers one by one.
10. Add payments and idempotent webhook.
11. Add Mini App.
12. Add admin panel.
13. Add tests.
14. Add deployment scripts.
15. Run security review.
```

Do not start by wiring every AI model at once. First make the UX/task/payment skeleton stable, then attach providers.
