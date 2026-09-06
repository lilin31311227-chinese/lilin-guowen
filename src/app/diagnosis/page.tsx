'use client';

import { useState } from 'react';
import Section, { SectionHeader } from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import {
  submitToGoogleSheets,
  isValidTaiwanMobile,
  calculateLevel,
} from '@/lib/googleSheets';
import { LINE_URL } from '@/lib/contact';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type FormData = {
  name: string;
  phone: string;
  email: string;
  grade: string;
  correctQuestions: string;
  symptoms: string[];
  goal: string;
};

const symptoms = [
  { id: 'logic-writing', label: '理科直男型', description: '寫作枯燥，缺乏感性表達' },
  { id: 'classical-barrier', label: '文白障礙型', description: '古文排斥，看到文言文就頭痛' },
  { id: 'formula-writing', label: '罐頭公式型', description: '寫作公式化，缺乏個人風格' },
  { id: 'reading-slow', label: '閱讀龜速型', description: '閱讀速度慢，時間不夠用' },
  { id: 'structure-weak', label: '架構薄弱型', description: '文章結構鬆散，邏輯不清' },
];

const goals = [
  { id: 'rush-a', label: '衝 A 策略', description: '目標精熟等級，追求卓越' },
  { id: 'escape-c', label: '脫 C 策略', description: '穩固基礎，確保通過' },
  { id: 'writing-boost', label: '寫作加強', description: '專攻作文，提升表達能力' },
  { id: 'comprehensive', label: '全面提升', description: '閱讀寫作同步加強' },
];

export default function DiagnosisPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    grade: '',
    correctQuestions: '',
    symptoms: [],
    goal: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [phoneError, setPhoneError] = useState<string | null>(null);

  const handleSymptomToggle = (symptomId: string) => {
    setFormData(prev => ({
      ...prev,
      symptoms: prev.symptoms.includes(symptomId)
        ? prev.symptoms.filter(s => s !== symptomId)
        : [...prev.symptoms, symptomId],
    }));
  };

  const handleSubmit = async () => {
    if (!isValidTaiwanMobile(formData.phone)) {
      setPhoneError('請輸入正確的台灣手機號碼（09xx-xxxxxx）');
      setStep(1);
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const result = await submitToGoogleSheets(formData);

      if (result.success) {
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'diagnosis_submit', {
            event_category: 'lead',
            event_label: result.mode,
            grade: formData.grade,
            goal: formData.goal,
          });
        }
        setIsSubmitted(true);
      } else {
        setSubmitError(result.error);
      }
    } catch (error) {
      const msg = error instanceof Error ? error.message : '網路連線異常';
      setSubmitError(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return Boolean(formData.name && formData.phone && formData.grade);
      case 2:
        return formData.correctQuestions !== '';
      case 3:
        return formData.symptoms.length > 0;
      case 4:
        return formData.goal !== '';
      default:
        return false;
    }
  };

  if (isSubmitted) {
    return (
      <Section background="cream">
        <div className="max-w-2xl mx-auto text-center py-16" role="alert" aria-live="polite">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6" aria-hidden="true">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-[var(--navy)] mb-4">診斷表單已送出！</h1>
          <p className="text-[var(--navy-light)] mb-8">
            感謝您的填寫，我們將在 24 小時內與您聯繫，
            <br />
            提供專屬的學習診斷建議。
          </p>
          <Button href="/" variant="secondary">
            返回首頁
          </Button>
        </div>
      </Section>
    );
  }

  return (
    <>
      {/* Hero */}
      <Section background="navy">
        <div className="text-center py-8">
          <span className="inline-block px-4 py-1 bg-[var(--gold)] text-[var(--navy)] text-sm font-bold rounded-full mb-6">
            FREE DIAGNOSIS
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--cream)] mb-4">
            5 分鐘學習診斷
          </h1>
          <p className="text-xl text-[var(--cream)]/80 max-w-2xl mx-auto">
            了解你的學習現狀，找出最適合的突破策略
          </p>
        </div>
      </Section>

      {/* Progress Bar */}
      <div className="bg-white py-6 sticky top-16 z-40 border-b" role="region" aria-label="表單進度">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex justify-between mb-2" role="list" aria-label="步驟列表">
            {['基本資料', '學習現況', '症狀分析', '目標設定'].map((label, index) => (
              <div
                key={index}
                role="listitem"
                aria-current={step === index + 1 ? 'step' : undefined}
                className={`text-sm font-medium ${step > index + 1 ? 'text-[var(--gold)]' : step === index + 1 ? 'text-[var(--navy)]' : 'text-gray-400'}`}
              >
                <span className="sr-only">{step > index + 1 ? '已完成：' : step === index + 1 ? '目前步驟：' : '待完成：'}</span>
                {label}
              </div>
            ))}
          </div>
          <div
            className="h-2 bg-gray-200 rounded-full overflow-hidden"
            role="progressbar"
            aria-valuenow={step}
            aria-valuemin={1}
            aria-valuemax={4}
            aria-label={`表單進度：第 ${step} 步，共 4 步`}
          >
            <div
              className="h-full bg-[var(--gold)] transition-all duration-500"
              style={{ width: `${(step / 4) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Form Steps */}
      <Section background="cream">
        <div className="max-w-2xl mx-auto">
          {/* Step 1: Basic Info */}
          {step === 1 && (
            <Card>
              <h2 className="text-2xl font-bold text-[var(--navy)] mb-6" id="step1-heading">基本資料</h2>
              <form className="space-y-6" aria-labelledby="step1-heading" role="form">
                <div>
                  <label htmlFor="name" className="block text-[var(--navy)] font-medium mb-2">
                    學生姓名 <span className="text-red-500" aria-hidden="true">*</span>
                    <span className="sr-only">（必填）</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent"
                    placeholder="請輸入姓名"
                    required
                    aria-required="true"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-[var(--navy)] font-medium mb-2">
                    聯絡電話 <span className="text-red-500" aria-hidden="true">*</span>
                    <span className="sr-only">（必填）</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    inputMode="numeric"
                    autoComplete="tel"
                    pattern="09[0-9]{8}"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (phoneError) setPhoneError(null);
                    }}
                    onBlur={() => {
                      if (formData.phone && !isValidTaiwanMobile(formData.phone)) {
                        setPhoneError('請輸入正確的台灣手機號碼（09xx-xxxxxx）');
                      }
                    }}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent ${
                      phoneError
                        ? 'border-red-400 focus:ring-red-400'
                        : 'border-gray-300 focus:ring-[var(--gold)]'
                    }`}
                    placeholder="例：0912345678"
                    required
                    aria-required="true"
                    aria-invalid={Boolean(phoneError)}
                    aria-describedby={phoneError ? 'phone-error' : undefined}
                  />
                  {phoneError && (
                    <p id="phone-error" className="text-sm text-red-500 mt-1" role="alert">
                      {phoneError}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-[var(--navy)] font-medium mb-2">
                    Email <span className="text-gray-400 text-sm">（選填）</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent"
                    placeholder="請輸入 Email（選填）"
                    aria-required="false"
                  />
                </div>
                <div>
                  <label htmlFor="grade" className="block text-[var(--navy)] font-medium mb-2">
                    目前年級 <span className="text-red-500" aria-hidden="true">*</span>
                    <span className="sr-only">（必填）</span>
                  </label>
                  <select
                    id="grade"
                    value={formData.grade}
                    onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent"
                    required
                    aria-required="true"
                  >
                    <option value="">請選擇年級</option>
                    <option value="junior-1">國一</option>
                    <option value="junior-2">國二</option>
                    <option value="junior-3">國三</option>
                    <option value="senior-1">高一</option>
                    <option value="senior-2">高二</option>
                    <option value="senior-3">高三</option>
                  </select>
                </div>
              </form>
            </Card>
          )}

          {/* Step 2: Current Status */}
          {step === 2 && (
            <Card>
              <h2 className="text-2xl font-bold text-[var(--navy)] mb-6" id="step2-heading">學習現況</h2>
              <div className="space-y-6" role="form" aria-labelledby="step2-heading">
                <div>
                  <label htmlFor="correctQuestions" className="block text-[var(--navy)] font-medium mb-2">
                    最近一次模考答對題數（選擇題共 48 題）<span className="text-red-500" aria-hidden="true">*</span>
                    <span className="sr-only">（必填）</span>
                  </label>
                  <input
                    id="correctQuestions"
                    type="number"
                    min="0"
                    max="48"
                    value={formData.correctQuestions}
                    onChange={(e) => setFormData({ ...formData, correctQuestions: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent"
                    placeholder="請輸入答對題數（0-48）"
                    required
                    aria-required="true"
                    aria-describedby={formData.correctQuestions ? "level-result" : undefined}
                  />
                </div>
                {formData.correctQuestions && (
                  <div className="p-4 bg-[var(--cream)] rounded-lg" role="status" aria-live="polite" id="level-result">
                    <div className="text-sm text-[var(--navy-light)] mb-1">預估等級</div>
                    <div className="text-2xl font-bold text-[var(--navy)]">
                      {calculateLevel(parseInt(formData.correctQuestions) || 0)}
                    </div>
                  </div>
                )}
              </div>
            </Card>
          )}

          {/* Step 3: Symptoms */}
          {step === 3 && (
            <Card>
              <h2 className="text-2xl font-bold text-[var(--navy)] mb-2" id="step3-heading">症狀分析</h2>
              <p className="text-[var(--navy-light)] mb-6" id="step3-description">請選擇符合的學習困境（可複選）</p>
              <div className="space-y-4" role="group" aria-labelledby="step3-heading" aria-describedby="step3-description">
                {symptoms.map((symptom) => (
                  <div
                    key={symptom.id}
                    onClick={() => handleSymptomToggle(symptom.id)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleSymptomToggle(symptom.id);
                      }
                    }}
                    role="checkbox"
                    aria-checked={formData.symptoms.includes(symptom.id)}
                    tabIndex={0}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${formData.symptoms.includes(symptom.id)
                        ? 'border-[var(--gold)] bg-[var(--gold)]/10'
                        : 'border-gray-200 hover:border-[var(--navy-light)]'
                      }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${formData.symptoms.includes(symptom.id)
                          ? 'border-[var(--gold)] bg-[var(--gold)]'
                          : 'border-gray-300'
                        }`} aria-hidden="true">
                        {formData.symptoms.includes(symptom.id) && (
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      <div>
                        <div className="font-semibold text-[var(--navy)]">{symptom.label}</div>
                        <div className="text-sm text-[var(--navy-light)]">{symptom.description}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {/* Step 4: Goals */}
          {step === 4 && (
            <Card>
              <h2 className="text-2xl font-bold text-[var(--navy)] mb-2" id="step4-heading">目標設定</h2>
              <p className="text-[var(--navy-light)] mb-6" id="step4-description">請選擇你的學習目標</p>
              <div className="space-y-4" role="radiogroup" aria-labelledby="step4-heading" aria-describedby="step4-description">
                {goals.map((goal) => (
                  <div
                    key={goal.id}
                    onClick={() => setFormData({ ...formData, goal: goal.id })}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setFormData({ ...formData, goal: goal.id });
                      }
                    }}
                    role="radio"
                    aria-checked={formData.goal === goal.id}
                    tabIndex={0}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${formData.goal === goal.id
                        ? 'border-[var(--gold)] bg-[var(--gold)]/10'
                        : 'border-gray-200 hover:border-[var(--navy-light)]'
                      }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${formData.goal === goal.id
                          ? 'border-[var(--gold)] bg-[var(--gold)]'
                          : 'border-gray-300'
                        }`} aria-hidden="true">
                        {formData.goal === goal.id && (
                          <div className="w-2 h-2 bg-white rounded-full" />
                        )}
                      </div>
                      <div>
                        <div className="font-semibold text-[var(--navy)]">{goal.label}</div>
                        <div className="text-sm text-[var(--navy-light)]">{goal.description}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {/* Submit error with LINE fallback */}
          {submitError && (
            <div
              className="mt-6 bg-red-50 border border-red-200 rounded-xl p-5"
              role="alert"
            >
              <h3 className="font-bold text-red-700 mb-2 flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                提交失敗
              </h3>
              <p className="text-sm text-red-700/90 mb-3">
                {submitError}。請稍後再試，或直接透過 LINE 諮詢。
              </p>
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#06C755] text-white px-4 py-2 rounded-lg font-semibold text-sm"
              >
                直接 LINE 諮詢
              </a>
            </div>
          )}

          {/* Navigation Buttons */}
          <nav className="flex justify-between mt-8" aria-label="表單導航">
            {step > 1 ? (
              <Button variant="secondary" onClick={() => setStep(step - 1)} aria-label="返回上一步">
                上一步
              </Button>
            ) : (
              <div />
            )}
            {step < 4 ? (
              <Button
                variant="primary"
                onClick={() => setStep(step + 1)}
                disabled={!canProceed()}
                className={!canProceed() ? 'opacity-50 cursor-not-allowed' : ''}
                aria-label="前往下一步"
                aria-disabled={!canProceed()}
              >
                下一步
              </Button>
            ) : (
              <Button
                variant="primary"
                onClick={handleSubmit}
                disabled={!canProceed() || isSubmitting}
                aria-label={isSubmitting ? '正在送出表單' : '送出診斷表單'}
                aria-disabled={!canProceed() || isSubmitting}
              >
                {isSubmitting ? '送出中...' : '送出診斷'}
              </Button>
            )}
          </nav>
        </div>
      </Section>
    </>
  );
}
