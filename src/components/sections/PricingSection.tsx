'use client';

import Section, { SectionHeader } from '@/components/ui/Section';
import Button from '@/components/ui/Button';

const tiers = [
  {
    badge: '線上方案',
    label: '全台 Google Meet',
    desc: '不受地域限制，課後錄影回放輔助複習',
    feature: ['一對一精準授課', '個人化教材講義', '錄影回放支援', '彈性排課'],
  },
  {
    badge: '實體方案',
    label: '新竹現場授課',
    desc: '面對面互動最完整，適合需要陪伴與監督的學生',
    feature: ['一對一精準授課', '紙本教材講義', '即時板書討論', '段考前加強班'],
    highlighted: true,
  },
];

const notes = [
  '依據年級（國中／高中）、課程時數與授課形式（實體／線上）有所差異。',
  '初次合作前提供免費 30 分鐘診斷諮詢，雙方確認方向後再決定是否開課。',
  '正式報名須簽訂家教契約，明列堂數、退費、請假規範。',
];

export default function PricingSection() {
  return (
    <Section background="white" id="pricing">
      <SectionHeader
        title="收費方式"
        subtitle="高單價，是因為改變的不只是國文成績"
      />

      <div className="max-w-4xl mx-auto">
        {/* Price hero card */}
        <div className="bg-gradient-to-br from-[var(--navy)] to-[var(--navy-dark)] rounded-3xl p-8 md:p-12 text-center text-[var(--cream)] mb-10 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-[var(--gold)]/10 rounded-full blur-3xl" aria-hidden="true" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" aria-hidden="true" />

          <div className="relative">
            <span className="inline-block px-4 py-1 bg-[var(--gold)]/20 text-[var(--gold)] text-sm font-bold rounded-full mb-6 border border-[var(--gold)]/30">
              一對一家教
            </span>

            <div className="flex items-baseline justify-center gap-2 mb-3">
              <span className="text-2xl text-[var(--cream)]/70">NT$</span>
              <span className="text-7xl md:text-8xl font-bold text-[var(--gold)]">1,000</span>
              <span className="text-2xl text-[var(--cream)]/70">起 / 堂</span>
            </div>

            <p className="text-[var(--cream)]/70 text-sm md:text-base">
              依年級、課程時數、實體／線上有所差異 · 每堂 60 分鐘起
            </p>
          </div>
        </div>

        {/* Two-tier cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {tiers.map((tier) => (
            <article
              key={tier.label}
              className={`rounded-2xl p-6 md:p-8 ${
                tier.highlighted
                  ? 'bg-gradient-to-br from-amber-50 to-amber-100/60 border-2 border-[var(--gold)]'
                  : 'bg-[var(--cream)] border border-[var(--navy)]/10'
              }`}
            >
              <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full mb-3 ${
                tier.highlighted ? 'bg-[var(--gold)] text-[var(--navy-dark)]' : 'bg-[var(--navy)]/10 text-[var(--navy)]'
              }`}>
                {tier.badge}
              </span>
              <h3 className="text-xl font-bold text-[var(--navy)] mb-2">{tier.label}</h3>
              <p className="text-sm text-[var(--navy-light)] mb-5 leading-relaxed">{tier.desc}</p>
              <ul className="space-y-2" role="list">
                {tier.feature.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-[var(--navy)]">
                    <svg className="w-4 h-4 text-[var(--gold)] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Notes */}
        <div className="bg-[var(--cream)] rounded-xl p-6 mb-8" role="region" aria-label="收費補充說明">
          <h4 className="font-bold text-[var(--navy)] mb-3 flex items-center gap-2">
            <svg className="w-5 h-5 text-[var(--gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            費用補充說明
          </h4>
          <ul className="space-y-2 text-sm text-[var(--navy-light)] leading-relaxed" role="list">
            {notes.map((n) => (
              <li key={n} className="flex gap-2">
                <span className="text-[var(--gold)] flex-shrink-0" aria-hidden="true">·</span>
                <span>{n}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center">
          <Button href="/diagnosis" variant="primary">
            預約免費診斷諮詢
          </Button>
          <p className="text-sm text-[var(--navy-light)] mt-3">
            或直接 LINE 詢問實際課程方案與費用
          </p>
        </div>
      </div>
    </Section>
  );
}
