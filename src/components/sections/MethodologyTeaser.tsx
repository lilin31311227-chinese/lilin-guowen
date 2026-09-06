'use client';

import Section, { SectionHeader } from '@/components/ui/Section';
import Card, { CardTitle, CardDescription } from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const engines = [
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: '閱讀策略',
    description: '獨家「閱破劍法」，以邏輯解構文本，快速掌握文章核心',
    color: 'var(--navy)',
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
    title: '寫作輸出',
    description: '理科腦也能寫好文，將邏輯架構轉化為感性表達',
    color: 'var(--gold)',
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    title: '文化基底',
    description: '古文今用，將經典智慧轉化為現代生活的指引',
    color: 'var(--navy-light)',
  },
];

const tripleSlash = [
  { step: '01', name: '刪除', desc: '剔除干擾資訊' },
  { step: '02', name: '歸納', desc: '整合核心概念' },
  { step: '03', name: '關鍵句', desc: '定位答案所在' },
];

export default function MethodologyTeaser() {
  return (
    <Section background="cream" id="methodology-teaser">
      <SectionHeader
        title="三大引擎 × 閱破系統"
        subtitle="科學化的國文學習方法論"
      />

      {/* Three Engines */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16" role="list" aria-label="三大學習引擎">
        {engines.map((engine, index) => (
          <Card key={index} className="text-center" role="listitem">
            <div
              className="w-20 h-20 mx-auto mb-4 rounded-2xl flex items-center justify-center"
              style={{ backgroundColor: `${engine.color}15` }}
              aria-hidden="true"
            >
              <div style={{ color: engine.color }}>
                {engine.icon}
              </div>
            </div>
            <CardTitle className="text-center">{engine.title}</CardTitle>
            <CardDescription className="text-center">{engine.description}</CardDescription>
          </Card>
        ))}
      </div>

      {/* Triple Slash Feature */}
      <div className="bg-[var(--navy)] rounded-2xl p-8 md:p-12">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1 bg-[var(--gold)] text-[var(--navy)] text-sm font-bold rounded-full mb-4">
            獨家方法
          </span>
          <h3 className="text-3xl font-bold text-[var(--cream)] mb-2">基本三連斬</h3>
          <p className="text-[var(--cream)]/70">邏輯演算法，破解所有閱讀題型</p>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-3 gap-6" aria-label="基本三連斬步驟">
          {tripleSlash.map((item, index) => (
            <li key={index} className="relative">
              <div className="bg-[var(--navy-light)] rounded-xl p-6 text-center">
                <div className="text-[var(--gold)] text-4xl font-bold mb-2" aria-hidden="true">{item.step}</div>
                <div className="text-2xl font-bold text-[var(--cream)] mb-2">{item.name}</div>
                <div className="text-[var(--cream)]/70">{item.desc}</div>
              </div>
              {index < 2 && (
                <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-[var(--gold)] text-2xl" aria-hidden="true">
                  →
                </div>
              )}
            </li>
          ))}
        </ol>

        <div className="text-center mt-10">
          <p className="text-[var(--cream)]/80 mb-6">
            「把大段變小段，長句變短句」— 降維打擊策略
          </p>
          <Button href="/methodology" variant="primary">
            深入了解閱破劍法
          </Button>
        </div>
      </div>
    </Section>
  );
}
