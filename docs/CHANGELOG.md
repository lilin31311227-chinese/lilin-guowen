---
created: 2026-04-10
updated: 2026-05-13
tags:
  - changelog
---

# 變更記錄：立霖國文

此文件記錄專案的所有重要變更。格式基於 [Keep a Changelog](https://keepachangelog.com/)。

---

## [2026-05-13] 品牌設計系統 v2.0 與事業啟動套件

### 戰略升級
- **品牌哲學雙引擎化**：v1.0「素養教學領航者」之上，疊加「人生導師（Life Mentor）」與「親情橋樑（Family Bridge）」兩大核心承諾
- **受眾雙軌化**：學生軌（湖青 / 苔綠）與家長軌（赤茶 / 琥珀）分眾分流
- **典範轉移**：從「販賣焦慮」到「提供解方」，全面停止倒數恐嚇、滿級分轟炸式溝通

### 新增 — 文件層
- `docs/BRAND_DESIGN_SYSTEM_v2.md` — v2.0 主品牌設計系統（雙引擎、雙軌、新色彩、新元件、新文宣策略）
- `docs/BUSINESS_LAUNCH_KIT.md` — 事業啟動套件主索引（30 天開門營業檢查表 + 全資產地圖）
- `docs/templates/COPYWRITING_KIT.md` — 文案範本（Hero / 廣告長文 / CTA / Email 主旨 / 故事化公式 / 嚴禁清單）
- `docs/templates/LINE_SOCIAL_PLAYBOOK.md` — LINE / IG / FB / Threads / Reels 全平台劇本與 KPI
- `docs/templates/EMAIL_AND_OPS.md` — Email 簽名、月報、活動邀請、危機應對、營運 SOP
- `docs/templates/PRINT_MATERIALS.md` — 紙張規格、名片、講義、海報、宣傳冊、信封、周邊
- `docs/templates/ACTIVITY_PLAYBOOK.md` — 自然輕觸之旅 + 動身體樂溝通 旗艦活動完整劇本
- `docs/templates/TEACHER_TRAINING.md` — 師資招募、80 小時培訓、五要五不、督導制度

### 新增 — 程式碼層
- `src/components/brand/MentorVoice.tsx` — 導師旁白塊
- `src/components/brand/FamilyBridgeCard.tsx` — 親情橋樑互動卡
- `src/components/brand/DialoguePrompt.tsx` — 親子討論題卡
- `src/components/brand/EmotionChip.tsx` — 述情詞彙標籤（7 種文人情緒色票）
- `src/components/brand/DualTrackEntry.tsx` — 雙軌動線入口
- `src/components/brand/ExperienceCard.tsx` — 體驗活動卡（含五感標籤）
- `src/components/brand/VoiceToneMatrix.tsx` — 學生 / 家長語氣對照表

### 新增 — 頁面層
- `/design-system` — 線上品牌設計系統可視化頁（色彩、字型、元件、語氣、頁面組合）
- `/for-students` — 學生入口示範頁（探索 · 陪伴 · 解惑）
- `/for-parents` — 家長入口示範頁（理解 · 支持 · 教養）
- `/mentor-column` — 人生導師專欄頁
- `/activities` — 體驗活動報名頁

### 變更 — CSS Tokens
- 擴充 `globals.css`：新增 4 大色票群組（mentor warmth / bridge tone / emotion lexicon / sensory experience）
- 新增 utility classes：`.mentor-voice` / `.bridge-card` / `.dialogue-prompt` / `.emotion-chip` / `.dual-track-card` / `.experience-card` / `.gold-hairline`
- 全面採用 `color-mix(in srgb, ...)` 取代硬編碼半透明值

### 變更 — 導航
- Navbar 全面改採 v2.0 雙軌結構：學生入口 / 家長入口 / 心靈專欄 / 體驗活動
- Footer Quick Links 擴充至 8 項，新增「品牌設計系統」內部入口
- sitemap.ts 加入 5 條新路由並設定 v2.0 頁面優先級 0.85–0.95

### 影響範圍
- 全站路由：10 → 15 條
- 品牌元件：0 → 7 個專屬元件
- 文件資產：3 → 10 份文件（戰略 + 6 大模板 + 啟動套件主索引）
- 建置驗證：✓ 16/16 頁面靜態化通過、TypeScript 無誤、Tailwind v4 token 全部解析

---

## [2026-05-07] 全面性能、SEO 與轉換率優化

### 新增

- **SEO 基礎建設**：`src/app/sitemap.ts`、`src/app/robots.ts`（Next.js 16 靜態匯出，加 `force-static`）
- **OG 圖**（1200×630）：`public/images/og-image.png`，配合 OpenGraph、Twitter Card 完整 metadata
- **JSON-LD 結構化資料**：`EducationalOrganization` schema，含 offers (NT$1,000 起)、areaServed、founder
- **GA4 整合結構**：`NEXT_PUBLIC_GA_ID` 環境變數控制
- **新元件**：
  - `LineFloatingButton` — 桌面版浮動 LINE 諮詢按鈕
  - `MobileStickyCTA` — 行動裝置底部固定 LINE / 診斷 CTA 列
  - `PricingSection` — 收費方式區塊（NT$1,000 起 / 堂、雙方案：實體新竹 / 線上 Google Meet）
  - `LineIcon` — 共用 LINE 品牌圖示元件
- **共用模組**：`src/lib/contact.ts` 集中管理 `LINE_URL`
- **品牌色彩**：`globals.css` 加 `--line-green` / `--line-green-dark` token
- **無障礙**：全域 `@media (prefers-reduced-motion: reduce)` 關閉所有動畫
- 啟用先前未使用的 `DataWarSection`（115 年會考數據戰情）

### 變更

- **首頁漏斗順序**：`Hero → Problem/Solution → Methodology → DataWar → Testimonials → AboutTeacher → Pricing`，符合「方法 → 證明 → 信任 → 價格」轉換邏輯
- **圖片資產**全面重構：
  - 形象照轉 WebP（962KB → 223KB，桌面）/ 29KB（mobile srcSet）
  - 檔名英文化：`teacher-portrait.webp`、`lilin-logo.png`、`lilin-icon.png`
  - 移除中文檔名（避免 URL encode 問題）
- **Hero 數據文案**：移除「500+ 學員」「95% 滿意度」等未經驗證的誇大宣稱，改為「閱破劍法／一對一／實體＋線上」可驗證敘述
- **Footer 聯絡資訊**：移除虛擬 `contact@lilin-guowen.tw`，改為 LINE / 實體地點 / 診斷表單三個實際管道
- **表單可靠性**：
  - `submitToGoogleSheets` 修正 `no-cors` 永遠回 `success` 的問題，改為基於 `response.type === 'opaque'` 判斷
  - 加入台灣手機格式驗證（09xx-xxxxxx）
  - 提交失敗顯示 LINE 備援按鈕
  - 提交成功觸發 `gtag('event', 'diagnosis_submit')`
- **layout metadata** 全面強化：`metadataBase`、完整 OpenGraph / Twitter Card / robots
- **Image 元件改進**：HeroSection 用 `<picture>` 提供 mobile-specific WebP；AboutTeacher 直接用單一 WebP

### 移除

- 8 張未使用大圖（合計 ~12 MB），含 `形象照.png`、`形象照 白背景.png` 等
- Next.js 預設範例 SVG（`file.svg`、`globe.svg`、`next.svg`、`vercel.svg`、`window.svg`）
- 重複檔名 `logo (2).png`
- GA4 `anonymize_ip: true`（GA4 預設即匿名，flag 為 UA 殘留）

### 修復

- `Footer` Logo 同時套用 className 與 inline style 重複 `brightness(0) invert`
- `diagnosis/page.tsx` 6 層巢狀 ternary 改用 `calculateLevel()` 函式
- JSON-LD 從 `<Script strategy="beforeInteractive">` 改為原生 `<script>` 標籤，避免阻塞 hydration

### 效能

| 指標 | Before | After | 改善 |
|---|---|---|---|
| `public/images/` 大小 | 11.8 MB | 596 KB | -95% |
| 部署 `out/` 總大小 | ~12 MB | 7.2 MB | -40% |
| 形象照（桌面） | 962 KB PNG | 223 KB WebP | -77% |
| 形象照（mobile） | 962 KB | 29 KB | -97% |

---

## [2026-05-06]

### 新增

- 建立 `docs/BRAND_GUIDELINES.md`：完整品牌設計原則文件（v1.0），涵蓋色彩、字型、Logo、視覺語彙、元件、動效、文案語氣、應用範例（社群/海報/簡報/名片/講義）與檢核清單，作為日後所有品牌物件產出的單一事實來源
- 建立 `docs/SOCIAL_LAUNCH_KIT.md`：社群貼文啟動組合 v1.0，包含 6 篇主題貼文（品牌宣言／痛點共鳴／方法論／學員見證／古文金句／招生 CTA）、AI 圖片提示詞（中英）、4 週排程、圖片產出工作流程與發文前檢核清單

---

## [2026-05-06]

### 新增

- 建立 `docs/BRAND_GUIDELINES.md`：完整品牌設計原則文件（v1.0），涵蓋色彩、字型、Logo、視覺語彙、元件、動效、文案語氣、應用範例（社群/海報/簡報/名片/講義）與檢核清單，作為日後所有品牌物件產出的單一事實來源
- 建立 `docs/SOCIAL_LAUNCH_KIT.md`：社群貼文啟動組合 v1.0，包含 6 篇主題貼文（品牌宣言／痛點共鳴／方法論／學員見證／古文金句／招生 CTA）、AI 圖片提示詞（中英）、4 週排程、圖片產出工作流程與發文前檢核清單

---

## [2026-04-26] - 上線 GitHub Pages

### 修復

- 啟用 repository 的 GitHub Pages 設定（build_type=workflow），解決 `Get Pages site failed: Not Found` 部署錯誤
- 重新觸發 Deploy workflow 並成功上線至 https://lilin31311227-chinese.github.io/lilin-guowen/

---

## [2026-04-10] - 專案整理

### 新增

- 建立標準文件結構（README, DEPLOYMENT, CHANGELOG, ISSUES_LOG）
- 整理專案結構

### 變更

- 更新多個頁面元件樣式（HeroSection, Footer, Navbar 等）
- 更新 layout.tsx
- 更新 UI 元件（Button, Card）

---
