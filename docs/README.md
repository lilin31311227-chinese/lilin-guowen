---
created: 2026-04-10
updated: 2026-04-10
status: active
tags:
  - project
  - nextjs
  - typescript
  - education
---

# 立霖國文

> Next.js/TypeScript 立霖國文品牌官網 -- 國文教學品牌形象網站

## 專案資訊

| 項目 | 內容 |
|------|------|
| 狀態 | 🟢 進行中 |
| 技術棧 | Next.js, TypeScript, Tailwind CSS, React |
| 部署位置 | 靜態匯出 (out/) |
| Git Repo | https://github.com/lilin31311227-chinese/lilin-guowen |
| 建立日期 | 2026 |

## 快速開始

### 環境需求

- Node.js 18+
- pnpm

### 安裝

```bash
# 克隆專案
git clone https://github.com/lilin31311227-chinese/lilin-guowen.git
cd lilin-guowen

# 安裝依賴
pnpm install
```

### 啟動

```bash
# 開發模式
pnpm dev

# 建構生產版本
pnpm build

# 靜態匯出
pnpm export
```

## 功能說明

### 核心頁面

1. **首頁 (Hero)**：品牌形象展示、教學理念
2. **關於老師 (AboutTeacher)**：教師介紹
3. **教學方法 (MethodologyTeaser)**：教學法說明
4. **診斷頁面 (Diagnosis)**：學生程度診斷
5. **學生評價 (TestimonialsPreview)**：學員回饋
6. **問題解決 (ProblemSolutionSection)**：常見問題

### 技術棧

| 技術 | 用途 |
|------|------|
| Next.js | React 框架（SSG） |
| TypeScript | 型別安全 |
| Tailwind CSS | 樣式系統 |
| ESLint | 程式碼品質 |

## 架構說明

```
src/
├── app/                    ← Next.js App Router
│   ├── layout.tsx          ← 全站佈局
│   ├── page.tsx            ← 首頁
│   └── diagnosis/          ← 診斷頁面
├── components/
│   ├── layout/             ← Navbar, Footer
│   ├── sections/           ← 頁面區塊元件
│   └── ui/                 ← Button, Card 等通用元件
└── public/
    └── images/             ← 圖片資源
```

## 相關連結

- [[DEPLOYMENT|部署文件]]
- [[CHANGELOG|變更記錄]]
- [[ISSUES_LOG|問題追蹤]]
- [[GOOGLE_SHEETS_SETUP|Google Sheets 設定]]

## 上次工作進度

### 最後更新：2026-04-10

**完成項目**：
- 整理專案結構與文件
- 更新多個元件樣式

**進行中**：
-

**下次待處理**：
-
