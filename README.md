# 立霖國文 品牌官網

素養教學領航者 | 家長與學生之間的溝通橋樑

> 人生沒有 Google，但有經典可循。帶你讀懂文章邏輯，寫出生命厚度。

## 技術棧

- **框架**: Next.js 14 (App Router)
- **樣式**: Tailwind CSS
- **部署**: GitHub Pages (靜態導出)
- **表單整合**: Google Sheets API

## 快速開始

### 安裝依賴

```bash
pnpm install
```

### 開發模式

```bash
pnpm dev
```

開啟 [http://localhost:3000](http://localhost:3000) 查看網站。

### 建置專案

```bash
pnpm build
```

靜態檔案將輸出至 `out/` 目錄。

## 網站結構

```
/                    # 首頁 - Hero、數據戰情、招式預覽
/methodology         # 閱破實驗室 - 方法論視覺化
/exam-strategy       # 考試策略中心 - 會考/學測策略
/testimonials        # 學員見證 - 成功案例展示
/diagnosis           # 診斷系統 - 學習診斷表單
```

## 設計規範

### 配色

- **深海軍藍** (Deep Navy Blue): `#1a365d`
- **晨曦金** (Dawn Gold): `#d69e2e`
- **紙莎草白** (Papyrus White): `#faf5ef`

### 風格

現代極簡 (Modern Minimalist)、專業俐落

## Google Sheets API 整合

### 設定步驟

1. 建立 Google Cloud 專案
2. 啟用 Google Sheets API
3. 建立 Google Apps Script Web App
4. 設定環境變數 `NEXT_PUBLIC_GOOGLE_SCRIPT_URL`

### Google Apps Script 範例

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    data.submittedAt,
    data.name,
    data.phone,
    data.email,
    data.grade,
    data.correctQuestions,
    data.estimatedLevel,
    data.symptoms,
    data.goal
  ]);

  return ContentService.createTextOutput(JSON.stringify({ success: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

## 部署到 GitHub Pages

1. 將專案推送到 GitHub
2. 啟用 GitHub Pages (Settings > Pages)
3. 選擇 GitHub Actions 作為來源
4. 推送到 main 分支將自動觸發部署

部署完成後，網站將可在以下網址訪問：
`https://{username}.github.io/lilin-guowen`

## 檔案結構

```
lilin-guowen/
├── src/
│   ├── app/                    # 頁面路由
│   │   ├── layout.tsx          # 全域佈局
│   │   ├── page.tsx            # 首頁
│   │   ├── methodology/        # 閱破實驗室
│   │   ├── exam-strategy/      # 策略中心
│   │   ├── testimonials/       # 見證故事
│   │   └── diagnosis/          # 診斷頁面
│   ├── components/
│   │   ├── layout/             # 佈局元件 (Navbar, Footer)
│   │   ├── ui/                 # UI 元件 (Button, Card, Section)
│   │   └── sections/           # 區塊元件
│   └── lib/
│       └── googleSheets.ts     # Google Sheets API
├── public/images/              # 圖片資源
├── .github/workflows/          # GitHub Actions
└── next.config.ts              # Next.js 配置
```

## License

All rights reserved.
