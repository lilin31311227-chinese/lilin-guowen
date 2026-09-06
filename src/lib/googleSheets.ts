/**
 * Google Sheets API 整合
 *
 * 由於是靜態匯出（GitHub Pages），這裡使用 Google Apps Script Web App 接收 POST 請求。
 * 設定步驟：
 * 1. Google Apps Script 中建立新專案，貼上下方範例 doPost
 * 2. 部署為「使用者：我」「存取：任何人」的 Web App
 * 3. 將 Web App URL 設定為 NEXT_PUBLIC_GOOGLE_SCRIPT_URL 環境變數
 * 4. 試算表分享給 Apps Script 執行身分（通常是自己）
 */

export interface DiagnosisFormData {
  name: string;
  phone: string;
  email: string;
  grade: string;
  correctQuestions: string;
  symptoms: string[];
  goal: string;
  submittedAt: string;
  estimatedLevel: string;
}

export function calculateLevel(correctQuestions: number): string {
  if (correctQuestions >= 46) return 'A++';
  if (correctQuestions >= 44) return 'A+';
  if (correctQuestions >= 42) return 'A';
  if (correctQuestions >= 38) return 'B++';
  if (correctQuestions >= 34) return 'B+';
  if (correctQuestions >= 29) return 'B';
  return 'C';
}

export const gradeLabels: Record<string, string> = {
  'junior-1': '國一',
  'junior-2': '國二',
  'junior-3': '國三',
  'senior-1': '高一',
  'senior-2': '高二',
  'senior-3': '高三',
};

export const symptomLabels: Record<string, string> = {
  'logic-writing': '理科直男型',
  'classical-barrier': '文白障礙型',
  'formula-writing': '罐頭公式型',
  'reading-slow': '閱讀龜速型',
  'structure-weak': '架構薄弱型',
};

export const goalLabels: Record<string, string> = {
  'rush-a': '衝 A 策略',
  'escape-c': '脫 C 策略',
  'writing-boost': '寫作加強',
  'comprehensive': '全面提升',
};

/**
 * 驗證台灣手機號碼。允許 09xxxxxxxx 共 10 碼，可含連字號或空格。
 */
export function isValidTaiwanMobile(phone: string): boolean {
  const cleaned = phone.replace(/[\s-]/g, '');
  return /^09\d{8}$/.test(cleaned);
}

const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || '';

export type SubmitResult =
  | { success: true; mode: 'remote' | 'local' }
  | { success: false; error: string };

/**
 * 提交診斷表單。
 *
 * 注意：Google Apps Script 的 Web App 受 CORS 限制，必須使用 no-cors。
 * no-cors 模式下無法讀取 response，因此採以下策略：
 * 1. 透過 hidden form 真正 POST 到 Apps Script（避免 fetch 的 no-cors 黑洞）
 * 2. 若環境變數未設定，視為 local 模式（開發環境），UI 須顯示提示
 * 3. 任何網路層錯誤回傳 success: false，UI 須提供 LINE 備援
 */
export async function submitToGoogleSheets(
  formData: Omit<DiagnosisFormData, 'submittedAt' | 'estimatedLevel'>,
): Promise<SubmitResult> {
  const data: DiagnosisFormData = {
    ...formData,
    submittedAt: new Date().toISOString(),
    estimatedLevel: calculateLevel(parseInt(formData.correctQuestions) || 0),
  };

  if (!GOOGLE_SCRIPT_URL) {
    if (typeof window !== 'undefined') {
      console.warn('[lilin-guowen] NEXT_PUBLIC_GOOGLE_SCRIPT_URL 未設定，表單僅本地記錄');
      console.log('Form data:', data);
    }
    return { success: true, mode: 'local' };
  }

  const payload = {
    name: data.name,
    phone: data.phone,
    email: data.email || '未填寫',
    grade: gradeLabels[data.grade] || data.grade,
    correctQuestions: data.correctQuestions,
    estimatedLevel: data.estimatedLevel,
    symptoms: data.symptoms.map((s) => symptomLabels[s] || s).join(', '),
    goal: goalLabels[data.goal] || data.goal,
    submittedAt: data.submittedAt,
  };

  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(payload),
      keepalive: true,
    });

    if (response.type === 'opaque') {
      return { success: true, mode: 'remote' };
    }

    if (!response.ok) {
      return { success: false, error: `提交失敗（HTTP ${response.status}）` };
    }

    return { success: true, mode: 'remote' };
  } catch (error) {
    const message = error instanceof Error ? error.message : '未知錯誤';
    console.error('[lilin-guowen] 提交表單失敗:', message);
    return { success: false, error: message };
  }
}

/**
 * Google Apps Script 範例（請貼到 Apps Script 編輯器）：
 *
 * function doPost(e) {
 *   try {
 *     const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
 *     const data = JSON.parse(e.postData.contents);
 *     sheet.appendRow([
 *       data.submittedAt, data.name, data.phone, data.email,
 *       data.grade, data.correctQuestions, data.estimatedLevel,
 *       data.symptoms, data.goal,
 *     ]);
 *     return ContentService.createTextOutput(JSON.stringify({ ok: true }))
 *       .setMimeType(ContentService.MimeType.JSON);
 *   } catch (err) {
 *     return ContentService.createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
 *       .setMimeType(ContentService.MimeType.JSON);
 *   }
 * }
 */
