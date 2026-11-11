---
name: lilin-guowen-design
description: Use this skill to generate well-branded interfaces and assets for 立霖國文 (Lilin Guowen) — a Chinese-language tutoring brand for middle/high schoolers in Taiwan whose differentiator is the "Life Mentor × Family Bridge" dual-engine philosophy. Use for production code, marketing pages, social posts, slide decks, throwaway prototypes, or any visual artifact in the brand's voice.
user-invocable: true
---

# 立霖國文 Design System Skill

Read the `README.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## What's here

| File / folder | Purpose |
|---|---|
| `README.md` | Brand context, content fundamentals, visual foundations, iconography |
| `colors_and_type.css` | All CSS variables + base typography. Import once and use the tokens. |
| `assets/` | Logo, icon, favicon, OG image, teacher portrait |
| `preview/` | Per-card design-system HTML previews (palettes, type specimens, components) |
| `ui_kits/website/` | Working JSX recreations of the live Next.js website + a clickthrough index.html |

## The non-negotiables (cheat sheet)

1. **70/20/10 color rule** — 70% cream/navy, 20% gold, 10% mentor/bridge accent.
2. **Dual-track audience** — every artifact targets either students (湖青 teal) or parents (赤茶 terracotta). Pick one, write tone accordingly.
3. **Tone is "引導 · 信任 · 不浮誇"** — guide, don't sell. No `！！！`, no `保證`, no `搶名額`.
4. **Cheng-pin bookstore test** — would this fit a 誠品 window display? If not, redo it.
5. **3 visual signatures** — every artifact has at least one of: calligraphy/oriental brush, gold hairline/particle, deep navy or cream background.
6. **Shadows are navy-tinted**, never pure black. Use `rgba(26, 54, 93, 0.08–0.15)`.
7. **No emoji**, no red/neon, no purple-blue gradients, no rounded-corner-with-left-border-accent cards.
8. **Chinese typography**: line-height 1.6–1.85, full-width punctuation 「」，。、——.

When in doubt, open `colors_and_type.css` for tokens and `ui_kits/website/` for canonical component recipes.
