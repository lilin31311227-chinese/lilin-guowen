'use client';

import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import Image from 'next/image';

const highlights = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: '戰績證明',
    description: '多位學生從及格邊緣躍升 A++，拒學生重拾信心，理科生突破寫作瓶頸',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: '親子橋樑',
    description: '不只是老師，更是家長與孩子之間的溝通橋樑，理解雙方的需求與難處',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: '素養教育',
    description: '將古典智慧融入現代生活，讓國文不只是考試科目，更是人生的指引',
  },
];

export default function AboutTeacher() {
  return (
    <Section background="white" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image Side */}
        <div className="relative">
          <div className="relative aspect-[4/5] max-w-md mx-auto">
            {/* Decorative frame */}
            <div className="absolute inset-0 border-2 border-[var(--gold)]/30 rounded-2xl transform rotate-3" aria-hidden="true" />
            <div className="absolute inset-0 border-2 border-[var(--navy)]/20 rounded-2xl transform -rotate-2" aria-hidden="true" />

            {/* Image container */}
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[var(--cream)] to-[var(--gold)]/10 h-full">
              <Image
                src="/lilin-guowen/images/teacher-portrait.webp"
                alt="立霖老師形象照 - 專業國文家教老師"
                fill
                className="object-contain object-bottom"
                style={{
                  filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.15))',
                }}
                sizes="(max-width: 768px) 100vw, 420px"
              />
            </div>

            {/* Quote badge */}
            <figure className="absolute -bottom-4 -right-4 bg-[var(--navy)] text-[var(--cream)] px-6 py-4 rounded-xl shadow-lg max-w-[280px]">
              <blockquote className="text-sm italic leading-relaxed">
                「教育不是注滿一桶水，而是點燃一把火。」
              </blockquote>
              <figcaption className="text-xs text-[var(--gold)] mt-2 text-right">— 葉慈</figcaption>
            </figure>
          </div>
        </div>

        {/* Content Side */}
        <div>
          <span className="inline-block px-4 py-1 bg-[var(--gold)]/10 text-[var(--gold)] text-sm font-bold rounded-full mb-4">
            關於立霖老師
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy)] mb-6 leading-tight">
            高單價，是因為<br />
            <span className="text-[var(--gold)]">改變的不只是國文成績</span>
          </h2>

          <p className="text-lg text-[var(--navy-light)] mb-8 leading-relaxed">
            在這個講求效率的時代，我選擇花更多時間理解每一個學生。因為我相信，
            每個孩子都有自己的學習節奏，每個家庭都有自己的期待與難處。
          </p>

          <p className="text-[var(--navy)] mb-8 leading-relaxed">
            這不是一堂普通的國文課。這是一份對孩子未來的投資——不只投資在分數上，
            更投資在他們面對人生的能力上。古文中的智慧，能成為他們在迷惘時的指引；
            閱讀理解的能力，能讓他們在資訊爆炸的時代保持清醒的判斷力。
          </p>

          {/* Highlights */}
          <ul className="space-y-4 mb-8" role="list" aria-label="教學特色">
            {highlights.map((item, index) => (
              <li key={index} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[var(--gold)]/10 rounded-xl flex items-center justify-center text-[var(--gold)] flex-shrink-0" aria-hidden="true">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-[var(--navy)] mb-1">{item.title}</h4>
                  <p className="text-sm text-[var(--navy-light)]">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>

          {/* Service info */}
          <div className="bg-[var(--cream)] rounded-xl p-6 mb-6" role="region" aria-label="授課方式資訊">
            <h4 className="font-bold text-[var(--navy)] mb-3">授課方式</h4>
            <ul className="flex flex-wrap gap-4" role="list">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[var(--gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-[var(--navy)]">新竹（實體授課）</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[var(--gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span className="text-[var(--navy)]">全台（Google Meet 線上）</span>
              </li>
            </ul>
          </div>

          <Button href="/diagnosis" variant="primary">
            預約免費診斷諮詢
          </Button>
        </div>
      </div>
    </Section>
  );
}
