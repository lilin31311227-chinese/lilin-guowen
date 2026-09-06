# Google Sheets 整合設定教學

本文件說明如何將診斷表單與 Google Sheets 整合，讓表單資料自動儲存到試算表中。

---

## 總覽

```
┌─────────────┐     POST      ┌──────────────────┐     寫入     ┌──────────────┐
│   網站表單   │ ──────────▶ │ Google Apps Script │ ──────────▶ │ Google Sheets │
└─────────────┘              └──────────────────┘              └──────────────┘
```

---

## 步驟 1：建立 Google 試算表

1. 前往 [Google Sheets](https://sheets.google.com)
2. 點擊 **+ 空白** 建立新試算表
3. 命名為「**立霖國文-診斷表單**」
4. 在第一列（A1:I1）設定欄位標題：

| 欄位 | 標題 |
|------|------|
| A1 | 提交時間 |
| B1 | 姓名 |
| C1 | 電話 |
| D1 | Email |
| E1 | 年級 |
| F1 | 答對題數 |
| G1 | 預估等級 |
| H1 | 學習症狀 |
| I1 | 目標 |

5. **記下試算表的 ID**（網址中 `/d/` 和 `/edit` 之間的部分）

---

## 步驟 2：建立 Google Apps Script

1. 在試算表中，點擊 **擴充功能 > Apps Script**
2. 將自動開啟 Apps Script 編輯器
3. 刪除預設的 `function myFunction() {}`
4. 複製 `docs/google-apps-script.js` 的內容並貼上
5. 點擊 **儲存** (Ctrl+S)
6. 將專案命名為「立霖國文表單 API」

---

## 步驟 3：部署 Web App

1. 在 Apps Script 編輯器中，點擊 **部署 > 新增部署**
2. 點擊齒輪圖示，選擇 **網頁應用程式**
3. 設定以下選項：

| 設定項目 | 選擇 |
|---------|------|
| 說明 | 診斷表單 API v1 |
| 執行身分 | **我** |
| 誰可以存取 | **所有人** |

4. 點擊 **部署**
5. 首次部署會要求授權，點擊 **授權存取**
6. 選擇您的 Google 帳戶
7. 若出現「Google 尚未驗證這個應用程式」，點擊 **進階 > 前往 XXX（不安全）**
8. 點擊 **允許**
9. **複製部署的網址**（格式如下）：

```
https://script.google.com/macros/s/AKfycby.../exec
```

---

## 步驟 4：設定環境變數

### 本地開發

1. 在專案根目錄建立 `.env.local` 檔案：

```bash
cp .env.example .env.local
```

2. 編輯 `.env.local`，填入您的 Web App URL：

```env
NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/AKfycby.../exec
```

### GitHub Pages 部署

由於是靜態網站，環境變數需要在 build 時注入：

1. 前往 GitHub 倉庫 **Settings > Secrets and variables > Actions**
2. 點擊 **New repository secret**
3. 新增：
   - Name: `NEXT_PUBLIC_GOOGLE_SCRIPT_URL`
   - Value: 您的 Web App URL

4. 修改 `.github/workflows/deploy.yml`，在 build 步驟加入環境變數：

```yaml
- name: Build
  run: pnpm build
  env:
    NEXT_PUBLIC_GOOGLE_SCRIPT_URL: ${{ secrets.NEXT_PUBLIC_GOOGLE_SCRIPT_URL }}
```

---

## 步驟 5：測試

### 測試 Apps Script

1. 在 Apps Script 編輯器中，選擇函數 `testDoPost`
2. 點擊 **執行**
3. 檢查試算表是否新增了一筆測試資料

### 測試網站表單

1. 啟動開發伺服器：`pnpm dev`
2. 前往 http://localhost:3000/diagnosis
3. 填寫表單並送出
4. 檢查 Google Sheets 是否收到資料

---

## 疑難排解

### 問題：表單送出後沒有資料

1. **檢查環境變數**：確認 `NEXT_PUBLIC_GOOGLE_SCRIPT_URL` 已正確設定
2. **檢查 Console**：開啟瀏覽器開發者工具，查看是否有錯誤訊息
3. **測試 Web App**：直接在瀏覽器訪問您的 Web App URL，應該顯示「立霖國文診斷表單 API 運作中」

### 問題：CORS 錯誤

這是正常的！因為我們使用 `mode: 'no-cors'`，所以：
- 不會收到 response body
- 但資料仍會成功送出
- 檢查 Google Sheets 確認資料是否寫入

### 問題：需要重新授權

若修改了 Apps Script 程式碼：
1. 點擊 **部署 > 管理部署**
2. 點擊編輯（鉛筆圖示）
3. 版本選擇 **新版本**
4. 點擊 **部署**

---

## 進階功能

### 啟用 Email 通知

在 `google-apps-script.js` 中：

1. 找到 `sendNotificationEmail` 函數
2. 將 `recipient` 改成您的 Email
3. 取消 `doPost` 函數中的註解：

```javascript
// 發送通知 Email（可選）
sendNotificationEmail(data);  // 取消這行的註解
```

### 自動標記等級

資料已包含自動計算的 `estimatedLevel` 欄位，可在 Google Sheets 中使用條件格式化來標記不同等級的顏色。

---

## 安全性注意事項

1. **不要公開 Web App URL**：雖然任何人都可以存取，但公開 URL 可能導致垃圾資料
2. **定期檢查資料**：確保沒有惡意或測試資料
3. **備份試算表**：定期備份重要資料

---

## 相關檔案

- `docs/google-apps-script.js` - Google Apps Script 程式碼
- `.env.example` - 環境變數範例
- `src/lib/googleSheets.ts` - 前端 API 整合程式碼
- `src/app/diagnosis/page.tsx` - 診斷表單頁面
