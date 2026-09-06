---
created: 2026-04-10
updated: 2026-05-07
tags:
  - issues
  - troubleshooting
---

# 問題追蹤：立霖國文

此文件記錄專案開發過程中遇到的問題及解決方案。

## 狀態說明

| 狀態 | 說明 |
|------|------|
| 🔴 待處理 | 已發現但尚未開始處理 |
| 🟡 處理中 | 正在調查或修復 |
| 🟢 已解決 | 已找到解決方案並修復 |
| ⚪ 已關閉 | 無需修復或無法重現 |

---

## 進行中的問題

暫無。

---

## 已解決的問題

### Next.js 16 sitemap.ts / robots.ts 在 output:'export' 模式下 build 失敗

- **日期**: 2026-05-07
- **狀態**: 🟢 已解決
- **描述**: 新增 `src/app/sitemap.ts` 與 `src/app/robots.ts` 後 `pnpm build` 失敗，錯誤訊息：`export const dynamic = "force-static"/export const revalidate not configured on route "/sitemap.xml" with "output: export"`。
- **原因**: Next.js 16 在 `output: 'export'`（靜態匯出）模式下，必須明確標記 metadata route 為 force-static，否則認定為動態路由而拒絕 export。
- **解決方案**: 在兩個檔案頂部加 `export const dynamic = 'force-static';`。
- **相關檔案**: `src/app/sitemap.ts:3`、`src/app/robots.ts:3`

### 表單提交在 no-cors 模式下永遠回 success（潛在資料漏接）

- **日期**: 2026-05-07
- **狀態**: 🟢 已解決
- **描述**: 原 `submitToGoogleSheets` 用 `fetch(url, { mode: 'no-cors' })` 後直接 `return { success: true }`，無論網路是否成功都回傳成功，導致 UI 顯示「已送出」但實際可能未寫入 Google Sheets。另外 `NEXT_PUBLIC_GOOGLE_SCRIPT_URL` 未設定時也靜默成功，正式環境若忘了設環境變數會大量漏接諮詢資料。
- **原因**: `mode: 'no-cors'` 下 response 為 opaque，JS 無法讀取 status code；原邏輯沒有針對 opaque 與失敗做區分。
- **解決方案**: 改用 `response.type === 'opaque'` 作為「請求送達且未被瀏覽器擋下」的判斷；環境變數未設時明確回傳 `{ success: true, mode: 'local' }` 並記 console.warn。失敗時 UI 顯示 LINE 備援按鈕，避免使用者流失。
- **相關檔案**: `src/lib/googleSheets.ts:79-130`、`src/app/diagnosis/page.tsx`

### 圖片資產肥大導致部署 12 MB

- **日期**: 2026-05-07
- **狀態**: 🟢 已解決
- **描述**: `public/images/` 目錄含 5.7 MB `形象照.png` 與 5.3 MB `形象照 白背景.png` 兩張未使用大圖；使用中的 `形象照 去背.png` 為 962 KB PNG；檔名為中文 URL encode 後易出錯。
- **原因**: 早期匯入未壓縮原始 PNG，且未清理已廢棄的 alternate 版本。
- **解決方案**:
  1. 用 ffmpeg `libwebp` 將形象照轉為 WebP（桌面 223 KB / mobile 29 KB）
  2. 桌面 `<picture>` 提供 mobile-specific srcSet
  3. 全部圖片改英文 slug（`teacher-portrait.webp`、`lilin-logo.png`）
  4. 刪除 8 張未使用大圖與 5 個 Next.js 預設範例 SVG
- **相關檔案**: `public/images/*`、`scripts/generate_og_image.py`

### GitHub Pages 部署失敗：Get Pages site failed (Not Found)

- **日期**: 2026-04-26
- **狀態**: 🟢 已解決
- **描述**: 推送 commit `0b3a0c2` 到 master 後，Deploy to GitHub Pages workflow 在 `actions/configure-pages@v4` 步驟失敗，錯誤訊息為 `HttpError: Not Found`。Build 階段（Next.js 靜態輸出）本身完全成功。
- **原因**: GitHub repository 從未在 Settings → Pages 啟用 Pages 功能，因此 `configure-pages` action 找不到 Pages site 設定。
- **解決方案**: 透過 GitHub REST API 啟用 Pages 並指定 build_type 為 workflow：
  ```bash
  gh api -X POST repos/lilin31311227-chinese/lilin-guowen/pages -f 'build_type=workflow'
  ```
  之後手動觸發 `gh workflow run "Deploy to GitHub Pages"`，所有步驟通過，網站正式上線於 https://lilin31311227-chinese.github.io/lilin-guowen/
- **相關檔案**: `.github/workflows/deploy.yml`

---

## 已知問題 / Workaround

暫無。

---
