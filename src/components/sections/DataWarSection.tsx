'use client';

import Section, { SectionHeader } from '@/components/ui/Section';
import Card, { CardTitle, CardDescription } from '@/components/ui/Card';

const stats = [
  {
    number: '5-6',
    unit: '題',
    title: '精熟 A 等級',
    description: '錯題數需控制在 5-6 題內才能達到精熟等級',
    highlight: true,
  },
  {
    number: '25-27',
    unit: '%',
    title: '精熟人數比例',
    description: '每年僅約四分之一的考生能達到精熟等級',
    highlight: false,
  },
  {
    number: '#1',
    unit: '',
    title: '必爭之地',
    description: '國文科是高分群競爭最激烈的科目',
    highlight: false,
  },
];

const trends = [
  { year: '112', rate: '26.5%' },
  { year: '113', rate: '25.8%' },
  { year: '114', rate: '26.2%' },
  { year: '115', rate: '預估 25-27%' },
];

export default function DataWarSection() {
  return (
    <Section background="white" id="data-war">
      <SectionHeader
        title="115 年會考數據戰情"
        subtitle="掌握趨勢，精準備戰"
      />

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16" role="list" aria-label="會考關鍵數據">
        {stats.map((stat, index) => (
          <Card key={index} className={stat.highlight ? 'border-2 border-[var(--gold)]' : ''} role="listitem">
            <div className="text-center">
              <div className="flex items-baseline justify-center gap-1 mb-2" aria-label={`${stat.number}${stat.unit}`}>
                <span className="text-5xl font-bold text-[var(--navy)]">{stat.number}</span>
                <span className="text-2xl text-[var(--gold)]" aria-hidden="true">{stat.unit}</span>
              </div>
              <CardTitle className="text-center">{stat.title}</CardTitle>
              <CardDescription className="text-center">{stat.description}</CardDescription>
            </div>
          </Card>
        ))}
      </div>

      {/* Trend Chart */}
      <div className="bg-[var(--navy)] rounded-2xl p-8 text-[var(--cream)]" role="figure" aria-labelledby="trend-chart-title">
        <h3 id="trend-chart-title" className="text-2xl font-bold mb-8 text-center">歷年國文精熟比例趨勢</h3>

        <div className="flex justify-around items-end h-48 mb-4" role="img" aria-label="歷年精熟比例長條圖：112年26.5%、113年25.8%、114年26.2%、115年預估25-27%">
          {trends.map((trend, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className="w-16 md:w-24 bg-gradient-to-t from-[var(--gold)] to-[var(--gold-light)] rounded-t-lg transition-all duration-500 hover:opacity-80"
                style={{
                  height: `${parseInt(trend.rate) * 6 || 160}px`,
                }}
                aria-hidden="true"
              />
              <div className="mt-2 text-center">
                <div className="text-[var(--gold)] font-bold">{trend.rate}</div>
                <div className="text-sm opacity-70">{trend.year} 年</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 text-[var(--cream)]/80">
          <p className="text-lg">
            <span className="text-[var(--gold)] font-semibold">關鍵洞察：</span>
            國文精熟比例維持穩定，但競爭壓力持續上升
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <p className="text-lg text-[var(--navy-light)] mb-4">
          在激烈的競爭中，你需要更精準的策略
        </p>
        <a
          href="/diagnosis"
          className="inline-flex items-center gap-2 text-[var(--gold)] font-semibold hover:underline"
          aria-label="立即進行學習診斷，前往診斷頁面"
        >
          立即進行學習診斷
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </Section>
  );
}
