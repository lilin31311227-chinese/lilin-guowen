'use client';

import Section, { SectionHeader } from '@/components/ui/Section';
import Card, { CardTitle, CardDescription } from '@/components/ui/Card';

const painPoints = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: '孩子不愛看書',
    description: '手機滑不停，課本卻連翻都不想翻。閱讀習慣難以養成，長文一看就想放棄。',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: '成績怎麼都上不去',
    description: '明明有在讀，分數卻起伏不定。不知道問題出在哪，補習班也沒有用。',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: '講什麼都聽不進去',
    description: '親子溝通變成爭吵，說多了嫌煩，不說又擔心。找不到適合的引導方式。',
  },
];

const solutions = [
  {
    number: '01',
    title: '考試技巧',
    subtitle: '精準得分',
    description: '獨家「閱破劍法」系統，將閱讀理解轉化為可複製的邏輯演算法。不靠運氣，靠方法。',
    color: 'gold',
  },
  {
    number: '02',
    title: '素養教育',
    subtitle: '生命厚度',
    description: '古文不是死背，是古人在相同困境中的選擇與智慧。讓經典成為孩子面對人生的指引。',
    color: 'navy',
  },
];

export default function ProblemSolutionSection() {
  return (
    <>
      {/* Pain Points Section */}
      <Section background="white" id="problem">
        <SectionHeader
          title="您是否也有這些擔憂？"
          subtitle="這些焦慮，我們都懂"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12" role="list" aria-label="常見家長擔憂">
          {painPoints.map((point, index) => (
            <Card key={index} className="border-l-4 border-red-400/60 hover:border-red-500 transition-colors" role="listitem">
              <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center text-red-500 mb-4" aria-hidden="true">
                {point.icon}
              </div>
              <CardTitle>{point.title}</CardTitle>
              <CardDescription>{point.description}</CardDescription>
            </Card>
          ))}
        </div>

        <div className="bg-[var(--cream)] rounded-2xl p-8 text-center">
          <p className="text-lg text-[var(--navy)] leading-relaxed">
            身為家長，您不是不關心，而是<span className="font-bold text-[var(--gold)]">找不到對的方法</span>。
            <br />
            國文學習需要的不只是「多讀多寫」，而是一套能讓孩子<span className="font-bold">願意學、學得會</span>的系統。
          </p>
        </div>
      </Section>

      {/* Solution Section */}
      <Section background="navy" id="solution">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-[var(--gold)] text-[var(--navy)] text-sm font-bold rounded-full mb-6">
            雙軌教學法
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--cream)] mb-4">
            追求分數的同時，不犧牲對語文的興趣
          </h2>
          <p className="text-lg text-[var(--cream)]/80 max-w-2xl mx-auto">
            我們的方法是：讓孩子先「看懂」，才會「想讀」；先「會寫」，才會「愛寫」。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" role="list" aria-label="教學解決方案">
          {solutions.map((solution, index) => (
            <article
              key={index}
              role="listitem"
              className={`rounded-2xl p-8 ${
                solution.color === 'gold'
                  ? 'bg-gradient-to-br from-amber-400 to-amber-500 text-[var(--navy)]'
                  : 'bg-[var(--navy-light)] border border-[var(--cream)]/20 text-[var(--cream)]'
              }`}
            >
              <div className="flex items-start gap-4 mb-4">
                <span className={`text-5xl font-bold ${solution.color === 'gold' ? 'text-[var(--navy)]/30' : 'text-[var(--gold)]/50'}`} aria-hidden="true">
                  {solution.number}
                </span>
                <div>
                  <h3 className="text-2xl font-bold mb-1">{solution.title}</h3>
                  <p className={`text-sm ${solution.color === 'gold' ? 'text-[var(--navy)]/70' : 'text-[var(--cream)]/60'}`}>
                    {solution.subtitle}
                  </p>
                </div>
              </div>
              <p className={solution.color === 'gold' ? 'text-[var(--navy)]/90' : 'text-[var(--cream)]/80'}>
                {solution.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-[var(--cream)]/70 mb-2">
            「人生沒有 Google，但有經典可循。」
          </p>
          <p className="text-[var(--cream)]/50 text-sm">
            — 立霖老師的教學理念
          </p>
        </div>
      </Section>
    </>
  );
}
