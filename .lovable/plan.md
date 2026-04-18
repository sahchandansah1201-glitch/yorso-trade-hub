

# YORSO.com Homepage — Final Locked Plan v3

Финальные уточнения интегрированы. Access model не менялась. Этот план — locked and ready for Build.

---

## 1. Стратегическое обещание

**Покупателю:** доступ к проверенному пулу производителей морепродуктов с прозрачной верификацией, индикативной рыночной видимостью и предсказуемым путём к реальной цене, approved-коммуникации и документам — по решению поставщика. Имя компании остаётся скрытым на всех этапах.

**Поставщику:** контроль над тем, кто видит реальную цену и получает коммерческий канал. Меньше шума, выше качество входящих. Идентичность защищена платформой.

**Отличие от открытого каталога:** имена не публикуются, точные цены/MOQ не выставлены, доступ — по решению поставщика.
**Отличие от брокерского маркетплейса:** YORSO не сидит между сторонами и не берёт скрытую комиссию за контакт.

---

## 2. Non-negotiable правила

- Имя компании поставщика **никогда** не раскрывается (public / registered / supplier-approved).
- Точный MOQ и точная цена не показываются публично.
- Запрещено: `unlock supplier identity`, `direct contacts`, `direct phone number`, `see real prices instantly`, `marketplace` (самоназвание), `unlock offers`, `transparent pricing` (как публичная точная цена).
- «Audited» не использовать → «Verified».
- Нереализованное помечается `[future]` / `[future workflow]`.
- Тон: премиальный, операционный, торговый. Без neon, gradient art, B2C-клише.

---

## 3. Архитектура секций

```text
[01] Top utility bar         — язык, валюта, Sign in, Register
[02] Sticky nav              — Categories · Offers · Verification · How access works · For suppliers · Register
[03] HERO                    — позиционирование + 4 KPI + поиск + 2 CTA
[04] Trust strip             — сертификации и инспекционные органы
[05] Live offers (anon)      — анонимные карточки с диапазоном цен
[06] How access works        — 4 шага, шаг 4 помечен [future workflow]
[07] Categories grid         — 8 текущих категорий со счётчиками
[08] Verification method     — 4 шага, язык «Verified»
[09] Suppliers by origin     — curated subset: 11 стран (см. §9)
[10] What registration gives — live / requires approval / [future]
[11] Why controlled access   — ценность модели для покупателя
[12] Compliance & documents  — типы документов, доступных по одобрению
[13] Buyer outcomes          — hidden за флагом до появления согласованного контента
[14] FAQ                     — включая «Почему имя поставщика остаётся скрытым»
[15] For suppliers           — компактная вторичная полоса
[16] Final CTA               — регистрация (trade desk скрыт, см. §16)
[17] Footer
```

---

## 4. Таблица решений

| # | Секция | Назначение | Вопрос покупателя | Primary CTA | Secondary CTA | KPI |
|---|---|---|---|---|---|---|
| 03 | Hero | Позиционирование + поиск | «Это серьёзно и про меня?» | Create buyer account | Browse live offers | Регистрация |
| 04 | Trust strip | Институц. сигналы | «Кто стоит за платформой?» | — | — | Trust |
| 05 | Live offers | Доказательство торговли | «Здесь реально торгуют?» | Request price access | Open offer | Глубина + регистрация |
| 06 | How access works | Объяснить модель | «Как добраться до реальной цены?» | Create buyer account | See verification | Регистрация |
| 07 | Categories | Маршрутизация | «Есть мой продукт?» | Open category | — | Глубина |
| 08 | Verification | Снять страх фрода | «Откуда я знаю, что они реальные?» | See methodology | Create account | Trust |
| 09 | Origin (curated 11) | География покрытия | «Покрываете мою страну?» | Browse country | — | Глубина |
| 10 | What registration gives | Pre-sell retention | «Зачем регистрироваться?» | Create buyer account | — | Регистрация + retention |
| 11 | Why controlled access | Объяснить анонимность | «Почему имена скрыты?» | Create account | FAQ | Trust |
| 12 | Compliance | Compliance-уверенность | «Получу ли документы?» | See document types | Create account | Trust |
| 13 | Outcomes (hidden) | Соц. доказательство | «Я не выгляжу глупо?» | Create account | — | Регистрация |
| 14 | FAQ | Закрыть возражения | «А что если…?» | — | Create account | Trust |
| 15 | For suppliers | Не теряем поставщиков | (не для покупателя) | Apply as supplier | — | Supplier pipeline |
| 16 | Final CTA | Финальная конверсия | — | Create buyer account | (скрыт) | Регистрация |

---

## 5. Hero

**English:**
- Eyebrow: `B2B SEAFOOD TRADE OPERATING SYSTEM`
- H1: `Source verified seafood producers. On terms suppliers actually accept.`
- Sub: `A supplier-controlled access platform for serious buyers. Browse indicative market offers from verified producers, then request price access — the supplier decides when to share commercial terms. Supplier company names stay protected.`
- Trust microcopy: `Identity protected at all stages · No hidden broker commission · Supplier-approved commercial access`
- Primary CTA: `Create buyer account`
- Secondary CTA: `Browse live offers`
- KPI block (verified):
  - `380` Verified producers
  - `48` Countries
  - `1,247` Live offers
  - `2,100` Active buyers

**Русский:**
- Eyebrow: `B2B-ОПЕРАЦИОННАЯ СИСТЕМА ТОРГОВЛИ МОРЕПРОДУКТАМИ`
- H1: `Закупайте у проверенных производителей морепродуктов. На условиях, которые поставщики действительно принимают.`
- Sub: `Платформа с контролируемым доступом для серьёзных закупщиков. Смотрите индикативные рыночные офферы от верифицированных производителей и запрашивайте доступ к цене — поставщик сам решает, когда поделиться коммерческими условиями. Названия компаний-поставщиков остаются защищёнными.`
- Trust microcopy: `Идентичность защищена на всех этапах · Без скрытой брокерской комиссии · Коммерческий доступ — по одобрению поставщика`
- Primary CTA: `Создать аккаунт покупателя`
- Secondary CTA: `Смотреть активные офферы`
- KPI: `380` верифицированных производителей · `48` стран · `1 247` активных офферов · `2 100` действующих закупщиков

---

## 6. Анонимная карточка оффера

```text
┌────────────────────────────────────────────────────┐
│ 🇻🇳  Verified Vietnamese pangasius producer         │
│ Identity protected · Verified Mar 2025             │
│ ──────────────────────────────────────────────────│
│ HACCP · BRC AA · ASC · IFS                         │
│ Export markets: EU · US · JP · KR                  │
│ On YORSO since 2022                                │
│ ──────────────────────────────────────────────────│
│ Pangasius fillets · IQF · 120–220 g · CFR          │
│ Indicative price range: $2.10 – $2.40 / kg         │
│ Volume: container-scale · industrial volumes       │
│ Updated 12 Apr 2025                                │
│ ──────────────────────────────────────────────────│
│ [ Request price access ]                           │
│ Currently routes to registration · Supplier-       │
│ approval workflow rolling out [future workflow]    │
│ Why supplier identity stays protected →            │
└────────────────────────────────────────────────────┘
```

**Публично:** анонимный лейбл, флаг + страна, сертификаты, рынки экспорта, возраст на платформе, дата верификации, продукт/спека, диапазон цены с инкотермом и валютой, нейтральный объём, дата обновления.
**Скрыто всегда:** имя компании, точный MOQ, точная цена, контакты, документы. **Имя компании скрыто и после одобрения поставщика.**

**CTA `Request price access`:** сейчас = только registration gate. Под кнопкой обязательная микрокопия: `Currently routes to registration · Supplier-approval workflow rolling out [future workflow]`. Внутреннее обозначение в коде: `[future workflow]`.

**Достоверность диапазона:** инкотерм, валюта, единица, спецификация, дата обновления.
**Достоверность нейтрального MOQ:** торговый язык — `container-scale`, `industrial volumes`, `LCL available on request`.

---

## 7. Логика регистрации и одобрения

**Public:** просмотр офферов, категорий, географии, методологии, FAQ. Видит индикативные диапазоны и нейтральные объёмы.
**Registered buyer:** save & compare, alerts, отправляет `Request price access` (полный supplier-approval loop = `[future workflow]`). Имя поставщика скрыто. Точной цены автоматически нет.
**Supplier-approved buyer:** реальная цена + approved-коммуникация + документы по этому офферу/продукту. **Имя компании по-прежнему скрыто. Никогда не открывается.**

Никогда не описывать как «identity unlock». Используем: `price access`, `commercial access`, `supplier-approved communication`, `document access`.

---

## 8. Что даёт регистрация (секция 10)

**Live сразу после регистрации:**
1. Save & compare offers.
2. Alerts по новым офферам и обновлению диапазонов.
3. Submit `Request price access` (полный supplier-approval loop = `[future workflow]`).
4. Extended verification details поставщика (без имени).

**Требует одобрения поставщика:**
5. Real price for the specific offer.
6. Supplier-approved communication channel.
7. Document access — HACCP, BRC, health cert, CoO, спецификации.

**`[future]`:**
- RFQ to verified pool `[future]`.
- Sample / inspection coordination `[future]`.
- Weekly market digest `[future]`.

**Recurring reasons to return:** алерты по офферам и движению диапазонов; статус ваших `price access requests`; новые верифицированные производители в ваших категориях.

Микрокопия: `Free to register · No hidden broker commission · Supplier decides commercial access`.

---

## 9. Suppliers by origin — curated subset

Ровно 11 стран на главной (locked):

`Norway · Ecuador · Iceland · Philippines · Russia · Argentina · Peru · Vietnam · Turkey · Morocco · Bangladesh`

Каждая карточка страны: флаг + название + число верифицированных производителей + 1–2 ключевых вида. Ссылка `View all 48 countries [future]` — необязательная, показывается только если страница-листинг существует, иначе скрыта.

---

## 10. Полоса для поставщиков (секция 15)

3 тезиса + CTA `Apply as supplier`:
1. **Fewer low-intent inquiries** — покупатели проходят регистрацию.
2. **You control commercial access** — реальная цена, документы, канал — только одобренным вами. Имя компании защищено платформой.
3. **No hidden broker cut** — YORSO не берёт комиссию за контакт.

Подзаголовок: `Better-qualified buyers. Cleaner pipeline. Your identity protected.`

---

## 11. Compliance и верификация

**Секция 08 — методология (4 шага):** Legal entity check · Certification check (HACCP, BRC, ASC, MSC, IFS, BAP) · Product & export check · Ongoing review (≥ 12 мес. или при изменении сертификатов). Используем **«Verified»**, не «Audited». Ссылка `Read full verification methodology →` ведёт на якорь в FAQ; отдельная страница — `[future]`.

**Секция 12 — типы документов, доступных после одобрения:** HACCP plan, BRC certificate, health certificate, certificate of origin, product specification sheet, lab analysis. Реальные документы на главной не публикуются.

---

## 12. Аналитика

```text
home_view
hero_search_submit               { species, origin, cert }
hero_cta_register_click
hero_cta_browse_click
trust_strip_view
live_offer_card_view             { offer_id, category, country }
live_offer_card_click            { offer_id }
live_offer_request_price_click   { offer_id }    # registration gate
how_access_step_view             { step, future:boolean }
category_card_click              { category }
verification_step_view           { step }
verification_methodology_click
origin_country_click             { country }
unlock_section_view
unlock_card_click                { feature, gated:boolean, future:boolean }
controlled_access_section_view
compliance_doctype_view          { doc_type }
faq_open                         { question_id }
supplier_strip_view
supplier_apply_click
final_cta_register_click
scroll_depth                     { 25, 50, 75, 100 }
section_dwell                    { section, ms }
mobile_sticky_cta_view
mobile_sticky_cta_click
register_modal_open              { source_section }
register_submit                  { source_section }
```

---

## 13. Mobile

- Sticky nav: логотип + бургер + постоянная `Register`.
- Hero: H1 → 4 KPI 2×2 → поиск → 2 CTA вертикально → trust microcopy.
- Live offers: snap-carousel, 1.1 карточки видно. Бейджи ≥ 11px, AA-контраст. Микрокопия под CTA полностью читаема.
- Categories: 2 колонки.
- Verification / How access: вертикальные степперы.
- Origin: 11 стран в 2 колонках, без карты.
- Unlock: 1 колонка, бейджи `Requires supplier approval` / `[future]`.
- Sticky bottom CTA после 60% прокрутки: `[ Create buyer account ]`.
- Тач-цели ≥ 44px. Никаких hover-only trust-сигналов.

---

## 14. Языковая система

**Использовать:** Verified producers · Identity protected (at all stages) · Supplier-controlled access · Supplier-approved commercial access · Supplier-approved communication · Request price access · Indicative price range · Container-scale / industrial volumes · No hidden broker commission · Verified Mar 2025 · Export markets · Response window · Reply rate · Controlled access protects deal quality.

**Избегать:** Open supplier directory · Marketplace (самоназвание) · Direct contacts · Direct phone number · Always-open direct contacts · See real prices instantly · Transparent pricing (как публичная точная цена) · Full supplier transparency · Unlock supplier identity / Identity unlock · Get supplier name on signup · Audited · Guaranteed lowest price · `MOQ: X tons` публично · `No broker in the middle` (как слоган) · Hot deals · Best sellers · Disrupting · Revolutionary · Любые формулировки, подразумевающие раскрытие имени компании на каком-либо этапе.

---

## 15. Legacy-сообщения для замены

| Старое | Новое |
|---|---|
| `direct contacts` / `direct phone number` | `Supplier-approved communication` |
| «they never hid the supplier's direct phone number» | удалить; заменить на `Supplier-controlled access` |
| `transparent pricing` (как публичная точная цена) | `Indicative price range, real price on supplier approval` |
| `marketplace` (самоназвание) | `B2B seafood trade operating system` / `supplier-controlled access platform` |
| `unlock offers` (CTA) | `Create buyer account` или `Request price access` |
| `see prices instantly` | `Request price access — supplier decides` |
| `full supplier transparency` | `Verified producers · identity protected` |
| `no broker in the middle` (как слоган) | `No hidden broker commission` |
| Любые формулировки про раскрытие имени поставщика | Удалить. `Identity protected at all stages` |
| Публичные точные MOQ | `Container-scale · industrial volumes` |
| Публичные имена компаний-поставщиков | Анонимный лейбл `Verified [country] [species] producer` |
| `Audited suppliers` | `Verified suppliers` |
| Абстрактный marketing art / неон-градиенты в hero | Структурная демо-карточка реального оффера |

Покрытие: `Index.tsx`, все home-компоненты, контент-слой, hero, FAQ, supplier-полосы, alt-тексты, SEO meta, OG-описания.

---

## 16. Build sequencing

1. **Audit & cleanup pass (ОБЯЗАТЕЛЬНЫЙ ПЕРВЫЙ ШАГ).** Полный grep по homepage-related слою на legacy из §15. Удалить/переписать ДО любой новой работы. Чеклист в комментарии к коммиту.
2. **Design tokens** — premium navy / ocean / sand-neutral / single accent.
3. **Content layer** `src/content/home.ts` (i18n-ready ключи), KPI = verified numbers, 11 origin countries, FAQ.
4. **Analytics shim** `src/lib/analytics.ts`.
5. **Layout shell** — `TopBar`, `StickyNav`, `Footer`, `MobileStickyCTA`.
6. **Hero** + `KPIBlock` + `HeroSearch`.
7. **TrustStrip**.
8. **OfferCard + LiveOffers** (snap-carousel mobile, grid desktop). Микрокопия `[future workflow]` под CTA — обязательна.
9. **HowAccessWorks** — шаг 4 с бейджем `[future workflow]`.
10. **Categories** — 8 текущих категорий со счётчиками.
11. **Verification** — 4 шага, «Verified».
12. **OriginGrid** — 11 curated стран. Ссылка на полный листинг скрыта (страница `[future]`).
13. **UnlockGrid** — секция 10 с бейджами `Requires supplier approval` / `[future]`. RFQ помечен `[future]`.
14. **WhyControlledAccess**.
15. **Compliance** — типы документов.
16. **Outcomes** — компонент создаётся, секция **скрыта флагом** до появления согласованного `role + region + measurable outcome` контента.
17. **FAQ** — «Почему имя поставщика остаётся скрытым на всех этапах», «Что открывается после одобрения», «Что такое Request price access сейчас и в будущем».
18. **SupplierStrip**.
19. **FinalCTA** — `Create buyer account`. Secondary `Talk to trade desk` **скрыт** (нет подтверждённого live-канала). Включается только при появлении канала.
20. **Analytics wiring** по событиям §12.
21. **Mobile QA pass**.
22. **Legacy sweep verification** — повторный grep, отсутствие запрещённых формулировок = условие приёмки.

---

## Status

План **locked and ready for Build**. Дальнейших уточняющих вопросов нет — все ранее открытые пункты (trade desk, RFQ, request-price поведение, outcomes, origin subset) зафиксированы выше.

