/**
 * 立霖國文 - 診斷表單 Google Apps Script
 *
 * 使用方式：
 * 1. 在 Google Sheets 中開啟「擴充功能 > Apps Script」
 * 2. 貼上此程式碼
 * 3. 點擊「部署 > 新增部署」
 * 4. 選擇「網頁應用程式」
 * 5. 設定：
 *    - 執行身分：我
 *    - 誰可以存取：所有人
 * 6. 複製部署的 URL
 */

// 處理 POST 請求 - 接收表單資料
function doPost(e) {
  try {
    // 取得試算表
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // 解析 JSON 資料
    const data = JSON.parse(e.postData.contents);

    // 寫入資料到試算表
    sheet.appendRow([
      data.submittedAt || new Date().toISOString(),  // 提交時間
      data.name || '',                                // 姓名
      data.phone || '',                               // 電話
      data.email || '未填寫',                         // Email
      data.grade || '',                               // 年級
      data.correctQuestions || '',                    // 答對題數
      data.estimatedLevel || '',                      // 預估等級
      data.symptoms || '',                            // 學習症狀
      data.goal || ''                                 // 目標
    ]);

    // 發送通知 Email（可選）
    // sendNotificationEmail(data);

    // 回傳成功訊息
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: '資料已成功儲存'
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // 回傳錯誤訊息
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// 處理 GET 請求 - 測試用
function doGet() {
  return ContentService
    .createTextOutput('立霖國文診斷表單 API 運作中')
    .setMimeType(ContentService.MimeType.TEXT);
}

// 發送通知 Email（可選功能）
function sendNotificationEmail(data) {
  const recipient = 'your-email@example.com'; // 改成您的 Email
  const subject = `【新診斷表單】${data.name} - ${data.grade}`;

  const body = `
收到新的診斷表單！

=== 基本資料 ===
姓名：${data.name}
電話：${data.phone}
Email：${data.email || '未填寫'}
年級：${data.grade}

=== 學習現況 ===
答對題數：${data.correctQuestions} / 48
預估等級：${data.estimatedLevel}

=== 症狀分析 ===
${data.symptoms}

=== 學習目標 ===
${data.goal}

提交時間：${data.submittedAt}
  `;

  MailApp.sendEmail(recipient, subject, body);
}

// 測試函數 - 可在 Apps Script 中直接執行測試
function testDoPost() {
  const testData = {
    postData: {
      contents: JSON.stringify({
        name: '測試學生',
        phone: '0912345678',
        email: 'test@example.com',
        grade: '國三',
        correctQuestions: '35',
        estimatedLevel: 'B+',
        symptoms: '理科直男型, 文白障礙型',
        goal: '衝 A 策略',
        submittedAt: new Date().toISOString()
      })
    }
  };

  const result = doPost(testData);
  Logger.log(result.getContent());
}
