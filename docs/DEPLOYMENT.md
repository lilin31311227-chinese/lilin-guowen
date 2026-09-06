---
created: 2026-04-10
updated: 2026-05-07
tags:
  - deployment
---

# 部署文件：立霖國文

## 部署環境總覽

| 環境 | 說明 | 狀態 |
|------|------|------|
| Development | localhost:3000 | 🟢 運行中 |
| Production | GitHub Pages（自動部署） | 🟢 運行中 |
| 正式網址 | https://lilin31311227-chinese.github.io/lilin-guowen/ | 🟢 |

## 環境需求

- **Node.js**: 18+（CI 使用 20）
- **套件管理**: pnpm

## 環境變數

下列環境變數可放在本地 `.env.local`，或 GitHub Repo Secrets（Pages workflow 會自動注入）：

| 變數 | 用途 | 必要 |
|------|------|------|
| `NEXT_PUBLIC_GOOGLE_SCRIPT_URL` | Google Apps Script Web App URL，接收診斷表單 POST | 強烈建議 |
| `NEXT_PUBLIC_LINE_URL` | LINE 加好友連結，預設 `https://line.me/R/ti/p/@lilin-guowen` | 否 |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 Measurement ID（如 `G-XXXXXXXXXX`） | 否 |

> 未設定時：表單僅 console.log（不漏失樣式），但**正式環境務必設定**，否則諮詢資料無法收集。

## 安裝與執行

```bash
# 安裝依賴
pnpm install

# 開發模式
pnpm dev

# 建構（產生 out/ 靜態檔）
pnpm build
```

## 部署流程

推送到 `master` branch → GitHub Actions 自動觸發：
1. 安裝依賴 (`pnpm install`)
2. 執行 `pnpm build`（Next.js static export）
3. 將 `out/` 上傳為 Pages artifact
4. Deploy to GitHub Pages

手動觸發：`gh workflow run "Deploy to GitHub Pages"`

## SEO / 索引

- **sitemap**: `https://lilin31311227-chinese.github.io/lilin-guowen/sitemap.xml`
- **robots**: `https://lilin31311227-chinese.github.io/lilin-guowen/robots.txt`
- **OG image**: `https://lilin31311227-chinese.github.io/lilin-guowen/images/og-image.png`
- **JSON-LD**: 內嵌於 `<head>`，型別為 `EducationalOrganization`

部署完成後建議到 [Google Search Console](https://search.google.com/search-console) 提交 sitemap。

## 圖片資產規範

- **形象照**：使用 WebP（`teacher-portrait.webp`，桌面 223 KB / mobile 29 KB）
- **Logo**：`lilin-logo.png` 用於品牌識別，深色底用 `brightness(0) invert` 反白
- **OG 圖**：1200×630 PNG，由 `scripts/generate_og_image.py` 用 Pillow 重新生成
  ```bash
  uv tool run --from pillow -- python scripts/generate_og_image.py
  ```

## 依賴套件

| 套件 | 用途 |
|------|------|
| next | React 框架 |
| react | UI 函式庫 |
| typescript | 型別系統 |
| tailwindcss | CSS 框架 |
| eslint | 程式碼品質 |

## 環境變數

請參考 `.env.example`（如有）。目前無需特殊環境變數。

## 部署歷史

| 日期 | 變更內容 |
|------|----------|
| 2026-04-10 | 整理專案結構與文件 |
