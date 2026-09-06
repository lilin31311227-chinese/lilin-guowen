---
created: 2026-05-07
updated: 2026-05-13
status: completed
completed_at: 2026-05-07
tags:
  - optimization
  - seo
  - performance
---

# 立霖國文網站全面優化計畫 v1.0

> 對 https://lilin31311227-chinese.github.io/lilin-guowen/ 進行的全面優化。
> 暫時擱置：FAQ 區塊、Google 地圖嵌入。
> 補充資訊：價格區間 1000+。
>
> **狀態**：✅ 已完成（2026-05-07）。Stage 1–6 全部交付項目可於 `CHANGELOG.md` 2026-05-07 條目查證。

## Stage 1：圖片資源優化

- [x] 刪除未使用大圖：`形象照.png` (5.7MB)、`形象照 白背景.png` (5.3MB)
- [x] 形象照轉 WebP 並改檔名為 `teacher-portrait.webp`
- [x] 書法字標 改檔名為 `lilin-logo.png`
- [x] 刪除 Next.js 預設 SVG：`file.svg`、`globe.svg`、`next.svg`、`vercel.svg`、`window.svg`
- [x] 刪除重複檔 `logo (2).png`
- [x] 更新所有引用路徑

預期效果：部署大小 12MB → 約 500KB

## Stage 2：SEO 基礎建設

- [x] 創建 `src/app/sitemap.ts`
- [x] 創建 `src/app/robots.ts`
- [x] 製作 OG 圖（1200×630）
- [x] 加 JSON-LD 結構化資料（EducationalOrganization / LocalBusiness）
- [x] 強化 layout.tsx 的 metadata（metadataBase、完整 OpenGraph、Twitter Card）

## Stage 3：首頁漏斗重排與轉換元件

- [x] 重排順序：Hero → Problem/Solution → Methodology → DataWar → Testimonials → AboutTeacher → Pricing → CTA
- [x] 啟用 DataWarSection（已寫好但未使用）
- [x] 新增 PricingSection（1000 元起，標示「依年級／時數／實體或線上」差異）
- [x] 新增 LINE 諮詢按鈕（浮動）
- [x] 新增 mobile sticky CTA（底部固定列）

## Stage 4：表單可靠性與分析追蹤

- [x] 修正 `submitToGoogleSheets` 的 success 判斷（不能永遠回 true）
- [x] 加入手機號碼格式驗證（台灣手機 09xx-xxxxxx）
- [x] 加入 GA4 追蹤代碼結構（環境變數控制）
- [x] 加入表單提交事件追蹤

## Stage 5：文案可信度與 a11y

- [x] Hero 數據區改為「累積指導 X 屆考生」可驗證敘述
- [x] 移除 "5+" 誤導性圖標
- [x] 加 `@media (prefers-reduced-motion: reduce)` 全域動畫關閉
- [x] Footer 虛擬 email 改為實際聯絡管道
- [x] 學員見證調整脈絡（保留化名但加入學校／改變描述）

## Stage 6：建置、審查、提交

- [x] `pnpm build` 確認 build 成功
- [x] 啟動 dev server 測試所有頁面
- [x] 執行 codereview skill
- [x] 更新 CHANGELOG.md / ISSUES_LOG.md / DEPLOYMENT.md
- [x] git commit 並推送

## 暫時擱置（依使用者指示）

- ❌ FAQ 區塊
- ❌ Google 地圖嵌入
