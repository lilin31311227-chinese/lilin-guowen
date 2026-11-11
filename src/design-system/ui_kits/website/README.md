# 立霖國文 — Website UI Kit

A hi-fidelity HTML + React (Babel) recreation of the live Next.js website at
`https://lilin31311227-chinese.github.io/lilin-guowen`. Mirrors the brand's
"Life Mentor × Family Bridge" dual-engine system.

## What's here

| File | Purpose |
|---|---|
| `index.html` | Click-thru prototype. 4 routes: 首頁 / 學生入口 / 家長入口 / 體驗活動 |
| `tokens.css` | Mirror of `/colors_and_type.css` — all CSS variables + base typography |
| `kit.css` | Page-level styles that build on the tokens (nav, hero gradients, animations) |
| `motifs.jsx` | Inline SVG decorative elements: 祥雲 / 古籍 / 渾天儀 / 金色粒子 |
| `components.jsx` | Primitives: `Button` `Card` `Badge` `Eyebrow` `GoldHairline` `Navbar` `Footer` |
| `brand.jsx` | v2.0 brand components: `MentorVoice` `FamilyBridgeCard` `DialoguePrompt` `EmotionChip` `DualTrackEntry` `ExperienceCard` `VoiceToneMatrix` |
| `screens.jsx` | Composed screens: `Home` `ForStudents` `ForParents` `Activities` — used by index.html |
| `LineIcon.jsx` | LINE brand SVG (inline). Loaded by components.jsx. |

## How it maps to the codebase

| This kit | Source repo path |
|---|---|
| `Navbar` | `src/components/layout/Navbar.tsx` |
| `Footer` | `src/components/layout/Footer.tsx` |
| `Button` `Card` `Section` | `src/components/ui/*.tsx` |
| `HeroSection` | `src/components/sections/HeroSection.tsx` |
| `MethodologyTeaser` | `src/components/sections/MethodologyTeaser.tsx` |
| `MentorVoice` / `FamilyBridgeCard` / `DialoguePrompt` / `EmotionChip` / `DualTrackEntry` / `ExperienceCard` / `VoiceToneMatrix` | `src/components/brand/*.tsx` |
| Oriental motifs (祥雲 / 古籍 / 渾天儀 / 粒子) | inline SVG within `HeroSection.tsx` → factored into `motifs.jsx` |

## What's recreated, what's not

✅ **Visual fidelity** — colors, typography, spacing, shadows, armillary sphere rotation,
gold gradient highlights, hover lifts, dual-track gradient cards.

✅ **Click-thru navigation** — top nav switches between four canonical screens.

❌ **Real form submission** — `/diagnosis` is shown as a static screenshot mock,
not wired to Google Sheets like the real site.

❌ **All 8 pages** — only the 4 most representative screens are built
(首頁 / 學生入口 / 家長入口 / 體驗活動). The codebase also has
`/methodology`, `/exam-strategy`, `/testimonials`, `/mentor-column`,
`/diagnosis`, `/design-system` — these reuse the same components.
