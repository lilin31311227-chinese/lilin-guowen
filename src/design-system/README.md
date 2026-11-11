# 立霖國文 Design System

> **素養教學領航者 · 家長與孩子的溝通橋樑**
> 人生沒有 Google，但有經典可循。

> ⚠ **本目錄是設計 tokens 與範本的單一事實來源（SSOT）。**
> 頂層 `.design-bundle/`、`.design-source/` 是歷史歸檔快照（已移出版控），內含的 `tokens.css`/`handout.css`/`kit.css` 副本一律勿改；所有調整只在本目錄進行。

立霖國文是一家專注於認知升級與升學輔導的**小班制國文教學機構**，創辦人為立霖老師。品牌不只賣分數，更打破「補習班只追求分數」的框架，把文學作品視為**生命經驗的載體**，陪伴青春期學生度過成長焦慮，並把課堂上的反思轉化為家庭溝通的契機，修復親子關係。

主要服務：國中會考、高中學測國文素養家教，獨家「**閱破劍法**」邏輯化閱讀理解教學。新竹實體授課 + 全台 Google Meet 線上課程。

---

## 雙引擎品牌哲學（v2.0 護城河）

```
v1.0 「素養教學領航者」        ← 學科專業底氣
        ↓
v2.0 引擎 A「人生導師」         ← 對學生：陪伴、解惑、平起平坐
v2.0 引擎 B「親情橋樑」         ← 對家長：理解、卸責、給工具
        ↓
品牌護城河 = 三者交集（無人能同時做到）
```

| 軌道 | 學生軌（Student Track） | 家長軌（Parent Track） |
|---|---|---|
| 心理需求 | 被理解、被陪伴、找方向 | 被卸責、被支持、要工具 |
| 介面語氣 | 平起平坐的對話者 | 理解與卸責的支持者 |
| 主色調 | 湖青 `--bridge-teal` ／ 苔綠 `--bridge-sage` | 赤茶 `--mentor-terracotta` ／ 琥珀 `--mentor-amber` |
| 主要載體 | IG、匿名信箱、體驗活動 | FB 長文、LINE 推播、月報 |

---

## 來源 Sources

| 類型 | 路徑 / URL |
|---|---|
| GitHub 程式碼 | https://github.com/uplilt31311227/lilin-guowen `master` |
| 線上設計系統頁 | `/design-system` route within the live site |
| v2.0 品牌規範（上位） | `docs/BRAND_DESIGN_SYSTEM_v2.md` |
| v1.0 視覺骨架（下位） | `docs/BRAND_GUIDELINES.md` |
| 文案範本 | `docs/templates/COPYWRITING_KIT.md` |
| 啟動套件索引 | `docs/BUSINESS_LAUNCH_KIT.md` |
| 部署網址 | https://lilin31311227-chinese.github.io/lilin-guowen |

本 design system 鏡像並結構化上述來源；如需查閱原文，請保留以上連結（可能需要 GitHub App 安裝許可才能存取）。

---

## CONTENT FUNDAMENTALS

### 語氣（Tone）三關鍵詞
**引導 · 信任 · 不浮誇。** 像長輩，不像業務。誠品書店櫥窗測試：放在誠品櫥窗合理嗎？合理才對。

### 寫作公式
1. **同理 → 重新框架 → 邀請**（不是說服）。
2. **痛點共鳴 → 方法論 → 成果承諾**（學生軌變體）。
3. 一段文案只承擔一個情緒任務。
4. 引古要負責：給出處 + 給現代轉譯。

### 人稱與稱呼
- 用「你」、「孩子」、「我們」、「您」（家長軌）。
- ❌ 不用「同學們」、「各位家長朋友」這類群體稱呼。
- ❌ 不用「家長您好，懇請」這類過度敬語。

### Casing & punctuation
- 中文逗號、頓號、句號用**全形**：`，、。「」`
- 引號統一用「」，不用 ""。
- 破折號用全形 `——`。
- ❌ 連續標點 ≤ 2 個，**禁止「！！！」**。
- 數字用阿拉伯數字（`500+ 學員`、`95% 滿意度`）。
- 英文與數字不混排在全形空格內。

### Emoji & decoration
- 幾乎不使用 emoji。Email 簽名檔最多 1–2 個 Unicode 飾物（如 `🌐 ✉`）。
- ❌ `⚠️🔥💥` 這類「催促 / 焦慮」表情完全禁用。

### 嚴禁字詞清單
`保證`、`絕對`、`100%`、`滿級分`、`限時優惠`、`超划算`、`手刀報名`、`搶名額`、`不補習就會輸 / 落後 / 被淘汰`、`雙11 / 黑五`。

### 具體範例

✅ **學生軌示範**
> 「分數會結束，你不會。」
> 「你拿來焦慮的時間，剛好夠讀完一篇蘇軾。」
> 「在還沒抵達分數之前，先抵達自己。」

✅ **家長軌示範**
> 「那些不知如何開口的關心，讓文學的溫柔替您說。」
> 「他需要的不是補習，是一個能說真話的大人。」
> 「我們不討論分數，但我想告訴您一件事。」

✅ **CTA 對照**
| 場景 | ✅ 採用 | ❌ 禁止 |
|---|---|---|
| 報名 | 預約一場對話 | 立刻搶名額 |
| 諮詢 | 我有些話想聊 | 點我聯絡業務 |
| 下載 | 領取閱讀地圖 | 免費下載限時！ |
| LINE | 加入 LINE 接收陪伴訊息 | 加 LINE 送贈品 |

### 文案審稿三問（每則發出前必答）
1. 這則文案被孩子讀到，他會覺得**被尊重**，還是被擺布？
2. 這則文案被家長讀到，他會感到**鬆一口氣**，還是被催促？
3. 把所有「！」和「保證」拿掉，這則文案還站得住嗎？

---

## VISUAL FOUNDATIONS

### 色彩（70/20/10 法則）
- **70%** — 紙莎草白 `#faf5ef` ／ 深海軍藍 `#1a365d`（背景與大面積結構）
- **20%** — 晨曦金 `#d69e2e`（強調、CTA、分隔）
- **10%** — 雙軌色（家長赤茶 / 學生湖青）或四領域語意輔色（藍/綠/紫/橘）

主色三定調永遠不變：`#1a365d` Navy、`#d69e2e` Gold、`#faf5ef` Cream。**禁止紅色（補習班廉價感）、螢光色、純黑**（用 `#0A1A35` 取代）。完整 token 清單見 `colors_and_type.css`。

### 字型 Typography
- **中文主字**：Noto Sans TC（400/500/600/700）
- **書法視覺**：使用圖片資產 `assets/lilin-logo.png`（書法字「立霖國文」），不另尋字型替代。
- **層級對比 ≥ 1.5×**（主標 / 副標 / 內文 / 旁白）。一個畫面最多 3 種字重、4 種色彩。
- **中文行高放寬**：標題 1.15–1.25；內文 1.6–1.75；長文 1.85。

### 視覺語彙（三選一必備）
1. **書法字 / 古典筆觸**（傳達典雅、內涵）
2. **金色細線 / 漸層光點**（傳達珍貴、靈光）
3. **深藍夜空 / 紙莎草米色**（傳達沉穩、底蘊）

可重複使用的 SVG 語彙（Hero 內建）：
- **祥雲紋（Xiangyun）**：流暢曲線、`stroke-width 1–1.5`、`opacity 0.15–0.25`，置於四角。
- **古籍 / 卷軸 / 竹簡**：線稿、金色描邊、低不透明度浮動。
- **渾天儀（Armillary Sphere）**：金色漸層橢圓環疊加，象徵「典籍智慧 × 宇宙觀」，置於主視覺中心。
- **金色粒子**：直徑 4–10px、模糊 0.5–1px、不透明度 0.5–0.8，散落畫面。

### 背景 Backgrounds
- 全站**底色為紙莎草米白** `#faf5ef`，不是純白。
- Hero / 封面用**深藍漸層** `from-#0A1A35 via-#0d2341 to-#071428`（左上→右下），疊加暖光徑向漸層 `radial-gradient(amber-500/10)`。
- **不使用**：藍紫漸層、霓虹漸層、純白卡片堆。
- **半透明卡片**：深底時用 `bg-{色}-500/20` + `backdrop-blur-sm` + `border-{色}-400/40`。

### 圖像氣質（Imagery vibe）
- 老師人像：去背 + 金色光暈 `drop-shadow(0 0 30px rgba(251,191,36,0.3))`。
- **暖色為主**：偏日出、燭光、黃昏；少冷藍、少純白。
- 古典素材：`mix-blend-mode: overlay` 與深藍底融合。
- ❌ 不用：補習班式紅黃 banner、誇張 emoji 表情、低解析度截圖、卡通插畫風。

### 動效 Motion
- 主要動效：**慢、優雅、迴圈**。
- 渾天儀外環 `spin 60s linear infinite`、中環 `spin 45s reverse`、內環 `spin 30s`。
- 漂浮元素：`float 6–8s ease-in-out infinite`，幅度 10–15px。
- 金色粒子：`pulse 3–4s ease-in-out infinite`，scale 1→1.2。
- Hover lift：`-translate-y-0.5` 至 `-translate-y-2`、`200–300ms ease`。
- **節制**：一個畫面同時運行 ≤ 3 種動效。❌ 彈跳 / 抖動 / 霓虹閃爍 / 自動播放音樂。
- 尊重 `prefers-reduced-motion`：全部動畫降至 0.01ms。

### Hover / Press 狀態
- **連結文字**：`hover:text-[var(--gold)]`（從 navy 變金）+ 200ms transition。
- **按鈕 Primary**：hover 時 `translateY(-2px)` + 陰影加深（gold-tinted）。
- **卡片**：hover 時 `translateY(-2px ~ -4px)` + 陰影由 md → lg → xl。
- **次要按鈕**：hover 時填色翻轉（navy 邊框 → navy 底 + cream 字）。
- **press**：未刻意加 `scale-95` 等回饋；用色變與位移即可。

### Borders & Dividers
> 僅適用網站。講義的線與框另有規則（含「框線寬不得用小數」），見下方〈講義專屬視覺規範〉。

- 線寬：`1px` 為標準、`1.5px` 用於裝飾性 SVG。
- 分隔線 **不用實心線**，改用：
  - 金色漸層細線：`linear-gradient(90deg, transparent, gold/60, transparent)` 高度 1px
  - 點狀 `dash-array: 20 10`（裝飾用）
- 卡片邊框：深底用 `border-{色}-400/40`；淺底卡片可無邊框，僅靠陰影分層。

### Shadows（**永遠 navy 基底，禁止純黑**）
> 僅適用網站。**講義零陰影**，見下方〈講義專屬視覺規範〉。
```
sm   0 2px 8px  rgba(26,54,93,0.08)   輕微浮起
md   0 4px 16px rgba(26,54,93,0.10)   預設卡片
lg   0 8px 24px rgba(26,54,93,0.12)   hover
xl   0 12px 32px rgba(26,54,93,0.15)  大區塊 hover
gold 0 8px 24px rgba(214,158,46,0.30) Primary CTA
```

### Radii
> 僅適用網站。**講義零圓角**，見下方〈講義專屬視覺規範〉。

- `sm 0.5rem` 按鈕、徽章 icon
- `md 0.75rem` 旁白塊
- `lg 1rem` 卡片、輸入框（**最常用**）
- `xl 1.25rem` 雙軌動線卡
- `2xl 1.5rem` 大區塊、圖片框
- `full 9999px` 標籤、人像、徽章

### Spacing（8pt grid）
- 基本單位：`4 / 8 / 16 / 24 / 32 / 48 / 64 / 96 / 128`
- 區塊垂直 padding：桌面 `py-20 ~ py-28`；手機 `py-12`。
- 卡片內距：`p-6 ~ p-8`。
- 元件四周安全留白 ≥ 8%。

### 透明度 & 模糊
- 半透明卡片限「深底背景」場景，搭配 `backdrop-blur-sm` 才用。
- 大面積純色區（cream / navy）**不疊半透明**，避免顯髒。
- 模糊光暈：`blur-3xl` 用於 hero 周圍的暖光徑向漸層。

### 構圖（Composition）
- **對稱中軸**：人像、Logo、標題置於黃金分割點或中軸線。
- **留白勇敢**：頁面文字佔比 ≤ 60%。
- **縱向韻律**：多文字物件用金色細線分隔，不框線。
- **光源從上偏暖**：模擬日出、燭光。

### 護欄漸層 vs 膠囊
- 文字置於圖片上時，下緣加 `linear-gradient(transparent → navy-hero/90)` 護欄漸層，不用半透明膠囊（避免「補習班 banner」感）。
- 例外：trust badge 在 hero 上方用金色膠囊（`bg-amber-400/10 border-amber-400/30 rounded-full`）。

### 固定 / Layout 規則
- Navbar：`fixed top-0` + `bg-cream/95 backdrop-blur-sm` + `border-b border-navy/10`，高度 `h-16`。
- 主內容 `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`。
- Footer：`bg-navy text-cream`。
- 手機 sticky CTA：固定 `bottom-0`，金色按鈕。

### 無障礙
- 文字對比 ≥ 4.5 : 1。
- 圖片必有 `alt`（人像用「立霖老師形象照」等具體描述）。
- 跳至主要內容連結（`Skip to main content`）必備。
- `aria-label` 標示功能性按鈕；`role="status"` 標示 trust badge。

---

## 講義專屬視覺規範（HANDOUT ONLY）

> **本章與上方 VISUAL FOUNDATIONS 分流。** 上方是**網站視角**——圓角、陰影、漸層、
> 膠囊標籤在螢幕上營造親和感，那在網站上是對的。**講義是紙本**：家長與學生拿到手上、
> 影印、貼在牆上。同一套裝飾語彙印出來會變成「AI 生成的補習班講義」，直接損傷信任感。
>
> 講義一律以本章為準；與上方衝突時，**本章優先**。
> 皮膚定案：**變體 B「墨韻簡雅」**（2026-07-29 定案、2026-08-02 全面落地）。
> 權威規格範本：`templates/handout/樣式稿-2026-07/變體B-墨韻簡雅-*.html`（彩色＋黑白共六份）。

### 六條硬規則

| # | 規則 | 取代方案 |
|---|---|---|
| 1 | **零圓角** | 直角。徽章、標籤、序號一律方框 |
| 2 | **零陰影** | 線。螢幕上的紙緣用 `1px solid rgba(0,0,0,.14)` |
| 3 | **零漸層** | 純色。**唯一例外**：書寫橫線簿的 `repeating-linear-gradient` |
| 4 | **零 emoji** | 文字標籤 |
| 5 | **零★星號** | 【基礎】【進階】【挑戰】文字標籤 |
| 6 | **零色底卡** | 透明底 ＋ 左細線／上下 hairline／四邊方框 |

層級改由**線 ＋ 字重 ＋ 字級 ＋ 五色票**承擔，不靠色塊。

### 色票（五色，不得增列）

```
--paper       #faf5ef   紙莎草白 · 紙面
--ink         #2d3436   墨色 · 正文（禁純黑）
--navy        #1a365d   深海軍藍 · 結構色
--gold        #d69e2e   晨曦金 · 點綴
--terracotta  #b86a4a   赤茶 · 家長軌
```

線框 token（色相不變、只降亮度，供方框與虛線用）：

```
--gold-line        #9c7318
--terracotta-line  #8f4e33
--line-dash        rgba(26,54,93,.60)
```

### 線與框

- 左細線：`2–3px solid`，用於單欄區塊（考點卡、練習題、人生導師語…）。
- 上下 hairline：`1px solid var(--navy-faint)`，用於原文帶注、重點條列。
- 多欄版式：**四邊 2px 等粗方框**。
  **框線寬不得用小數**——`1.5px` 會被 Chromium 向下取整、渲染同 `1px`（2026-08-01 實測）。
- 分隔虛線一律 `1px dashed var(--line-dash)`。

### 標籤純中文化

裝飾性英文標眉一律去除（`LIFE MENTOR`／`LILIN GUOWEN`／`NOTES`／`Key Points`／
`Past Exam`／`GLOSS`／麵包屑 `p.NN` 等）。**引文與專有名詞的英文保留**
（`Stay hungry, stay foolish.`、`Shylock`、`John Keats`）。

節標題眉標的對照表由 `tools/blocks/extract_blocks.py` 的 `KICKER_MAP` 統一持有，
`tools/restyle_variantb.py` 直接沿用同一份——**兩層必須用同一張表**，否則清理後的
講義檔會與組件 JSON 對不上，組件化的 round-trip 逐頁比對就會失敗。

### 浮水印

每頁置中的圓形「立」字商標，寬約頁寬 77%、`opacity:.10`、`z-index:-1`
（out-of-flow，不影響版面幾何與分頁）。三個版本：

```
assets/watermark-navy.png   彩色版
assets/watermark-bw.png     黑白版（灰階濾鏡在 10% 濃度下仍偏藍，故另存實體檔）
assets/watermark-tea.png    暖茶主題（赭墨）
```

### 黑白版機制（照做，勿改架構）

`:root` 保持彩色，灰階覆寫全部做在 `body.bw-print` 層，**且每個 token 都寫字面值**。
`--alias: var(--base)` 在 `:root` 宣告時就把彩色算死，於 body 層只改 base 帶不動 alias。
新增 token 到 `handout.css` 時，務必同步補進 `handout-print.css` 的 `body.bw-print` 區塊。

### 驗收方式（**不接受純文字掃描**）

顏色與裝飾類的驗收必須在**渲染層**取 `getComputedStyle`：

```
uv run --with playwright python tools/audit_variantb.py <html...> [--bw]
```

2026-07-31 的教訓：對 CSS 原始碼做了兩輪文字掃描全部通過，使用者一開檔仍看到彩色。
文字層看不見的兩種成因——`:root` 別名固化、頁內寫死色值不吃 CSS 變數——
都只有渲染層抓得到。稽核器同時檢隱形字（文字色 ≈ 底色）與黑白版飽和度。

### 三套樣式系統的分工

| 檔案 | 範圍 |
|---|---|
| `templates/handout/handout.css` | 講義共用層（1500+ 檔）。權威皮膚定義 |
| `templates/handout/handout-print.css` | 黑白版覆寫（`body.bw-print`） |
| `templates/handout/handout-tea.css` | 暖茶宣紙主題覆寫 |
| `handout/_blocks/blocks.css` | 組件庫獨有型別，**不重複** handout.css 已有的規則 |
| `handout/高中核心古文15篇/_module-page.css` 等 | 古文15 獨立系統，自行宣告同一組色票 |

---

## ICONOGRAPHY

立霖國文使用**自繪 SVG 線稿** + **navy/amber 漸層方塊填色 icon** 兩套並行的策略，**不依賴 icon font，亦不用 emoji**。

### 1. 裝飾性線稿 SVG（Decorative line-art）
東方古典語彙，置於 hero / 區塊背景，低不透明度浮動：
- **祥雲紋** — 流暢曲線、`stroke-width: 1–1.5`、`opacity 0.15–0.25`、`text-amber-400`，置於畫面四角。
- **古籍** — 對開書頁線稿、中間裝訂、左右各幾條橫線代表文字、`opacity 0.25`、`animate-float-slow`。
- **卷軸 / 竹簡** — 直立矩形帶圓角端、橫線代表文字、可旋轉 12°、`opacity 0.15–0.20`。
- **渾天儀環** — 三層橢圓環（外橫、中傾、內反向傾），金色漸層描邊、各自不同 `animate-spin` 速度。
- **金色粒子** — 圓點 `4–10px`、`bg-amber-400/300`、`blur-[0.5–1px]`、`animate-pulse-slow`。

來源：所有自繪 SVG 都 inline 在 `src/components/sections/HeroSection.tsx` 內，**不是檔案資產**。本 design system 把這些 SVG 變成可重用的 React 元件，請見 `ui_kits/website/OrientalMotifs.jsx`。

### 2. UI 功能性 icon（Heroicons-style outline + 漸層填色方塊）
24×24 viewBox、`stroke-width: 1.5`（outline 風格，沿襲 Heroicons），但「分類標籤」場景**外層套一個 `rounded-xl` 漸層底色方塊**（如 `bg-gradient-to-br from-blue-400 to-blue-500`）讓 icon 變白 fill icon。

範例（在 HeroSection 的四領域標籤卡）：
- 閱讀理解 → 書本 icon + `from-blue-400 to-blue-500` 底
- 寫作表達 → 鉛筆 icon + `from-emerald-400 to-teal-500` 底
- 古文素養 → 文件 icon + `from-violet-400 to-purple-500` 底
- 考試策略 → 列表 icon + `from-orange-400 to-amber-500` 底

**CDN 來源（替代品，需 flag 給 user）**：原始碼自繪 inline SVG。為了在本 design system 的 HTML 預覽中快速使用，我們從 [Heroicons CDN](https://heroicons.com/) 引用同款 outline icon。**老師若希望保留原始碼一字不差的 inline SVG，請告知，將替換為 inline 版本。**

### 3. 品牌專屬 icon（單行字符）
- LineIcon `src/components/ui/LineIcon.tsx` — LINE 官方 logo 路徑（自繪 SVG），用於 LINE 諮詢按鈕。已複製至 `ui_kits/website/LineIcon.jsx`。
- 情緒詞彙標籤的「圓點」前綴 — `0.5rem × 0.5rem` 圓形，色彩跟隨情緒（喜 / 安 / 鬱 / 慍 / 焦 / 哀 / 望）。
- 五感標籤的「相位符號」— `◐ ◑ ◒ ◓ ○` 五個 Unicode 字符對應五感（視 / 聽 / 嗅 / 味 / 觸）。**這是 ExperienceCard 唯一使用 Unicode 的地方**，刻意避開 emoji。

### 4. Logo / Brand image assets（已複製進 `assets/`）
| 檔案 | 用途 |
|---|---|
| `assets/lilin-logo.png` | 書法字標準字「立霖國文」，淺底直接用；深底套 `filter: brightness(0) invert(1)` 反白為純白。 |
| `assets/lilin-icon.png` | 方形圖標（社群頭像、favicon），深藍底 + 白色篆刻字「立」+ 祥雲圓環。 |
| `assets/icon.png` | 同上的高解析版本，瀏覽器 icon。 |
| `assets/favicon.ico` | favicon。 |
| `assets/og-image.png` | Open Graph 分享圖（1200×630）。 |
| `assets/teacher-portrait.webp` | 立霖老師形象照，去背、暗底用。 |
| `assets/teacher-portrait-fallback.png` | 同上 PNG fallback。 |

### 5. 嚴禁
- ❌ **emoji**（教育場域不需要）— 唯一例外是 Email 簽名檔最多 1–2 個。
- ❌ **撥放器卡通 icon**（誇張陰影、3D 效果）。
- ❌ **填滿色塊的補習班式 banner icon**。
- ❌ **AI 生成裝飾**（避免「AI slop」感）。

---

## 檔案索引 Index

```
立霖國文 Design System/
├── README.md                       ← 你在這裡。品牌、內容、視覺、Iconography
├── SKILL.md                        ← Agent skill 入口（Claude Code 相容）
├── colors_and_type.css             ← 所有 CSS 變數 + 基礎 typography
├── assets/                         ← 品牌資產：logo, icon, OG, 老師照
│   ├── lilin-logo.png              ← 書法字主 logo
│   ├── lilin-icon.png              ← 方形社群頭像
│   ├── icon.png / favicon.ico
│   ├── og-image.png
│   ├── teacher-portrait.webp
│   └── teacher-portrait-fallback.png
├── preview/                        ← 設計系統 tab 顯示的卡片（不要直接編輯）
│   ├── color-primary.html
│   ├── color-mentor.html
│   ├── ...（共 ~20 張）
├── ui_kits/
│   └── website/                    ← Next.js 官網 UI Kit
│       ├── README.md
│       ├── index.html              ← 完整 click-thru prototype
│       ├── Navbar.jsx
│       ├── HeroSection.jsx
│       ├── DualTrackEntry.jsx
│       ├── MentorVoice.jsx
│       ├── EmotionChip.jsx
│       ├── FamilyBridgeCard.jsx
│       ├── DialoguePrompt.jsx
│       ├── ExperienceCard.jsx
│       ├── Button.jsx / Card.jsx
│       ├── OrientalMotifs.jsx      ← Hero 用的祥雲、渾天儀、粒子 SVG
│       ├── Footer.jsx
│       └── LineIcon.jsx
└── (no slides/ — 本品牌無附 slide template)
```

唯一產品：**官網**（`lilin-guowen` Next.js 14 App Router），靜態導出，部署於 GitHub Pages。沒有獨立 App，沒有 docs site，沒有後台介面（後台尚未開發）。所以本 design system 只有一個 UI kit：`ui_kits/website/`。

---

## ⚠️ 已知缺口 / 替代

1. **Webfont** — Noto Sans TC 透過 Google Fonts 載入（與原始碼一致）。**沒有本地 `.ttf` 備份**；若部署環境離線，需另外提供 woff2 檔。
2. **書法字** — 沒有書法字字型檔。書法字一律以圖片資產 `assets/lilin-logo.png` 取代（與原始碼一致策略）。
3. **Icon font** — 原始碼無 icon font；所有 UI icon 為 inline SVG。本 design system 在預覽時可能引用 Heroicons CDN 作為加速替代，請以原始碼 inline SVG 為主。
4. **Slide template** — 原始碼無附簡報模板；本品牌的「印刷品 / 海報 / 名片」規格在 `docs/templates/PRINT_MATERIALS.md`（未複製進本專案）。

---

> 本文件是「指南」不是「枷鎖」。當有新場景超出規範時，先以「**雙引擎品牌哲學 + 誠品櫥窗測試**」作判斷，並將決策回寫本文件。
