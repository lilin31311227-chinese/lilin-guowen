import type { Metadata } from 'next';
import Section, { SectionHeader } from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import FamilyBridgeCard from '@/components/brand/FamilyBridgeCard';
import DialoguePrompt from '@/components/brand/DialoguePrompt';

export const metadata: Metadata = {
  title: '家長入口 · 把焦慮放下，把對話請回家',
  description: '理解 / 支持 / 教養。立霖國文不只是補習，我們是您和孩子之間，那道剛剛好的橋。',
};

export default function ForParentsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--mentor-sunrise)] via-[var(--cream)] to-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 backdrop-blur-sm border border-[var(--mentor-terracotta)]/30 text-xs font-semibold text-[var(--mentor-terracotta)] tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--mentor-terracotta)]" aria-hidden="true" />
            家長專區
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mt-4 text-[var(--navy)] leading-[1.15]">
            把焦慮放下 <br />
            <span className="text-[var(--mentor-terracotta)]">把對話請回家</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[var(--navy-light)] max-w-2xl mx-auto leading-relaxed">
            立霖國文，不只是補習。<br />
            我們是您和孩子之間，那道剛剛好的橋。
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Button href="/diagnosis">預約免費家長諮詢</Button>
            <Button href="/testimonials" variant="secondary">看一份真實的課堂觀察月報</Button>
          </div>
        </div>
      </section>

      {/* 卸責段 */}
      <Section background="cream">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy)] mb-6 leading-tight">
            那些不知如何開口的關心，<br />
            讓文學的溫柔替您說。
          </h2>
          <p className="text-lg text-[var(--navy-light)] leading-[1.8]">
            他現在的沉默不是叛逆，<br />
            他只是在龐大的世界中尋找自己的座標。<br />
            <br />
            請給我們一個機會，陪他讀懂世界，<br />
            也讓您重新讀懂他。
          </p>
        </div>
      </Section>

      {/* 課堂觀察月報示範 */}
      <Section background="white">
        <SectionHeader
          title="您每個月會收到這樣一份信"
          subtitle="不是分數報告，是孩子的側錄"
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <FamilyBridgeCard
            teacherName="立霖"
            observationDate="2026-05-12"
            studentContext="今日討論《紅樓夢》中角色面對家族衰敗的態度，孩子的見解非常深刻，展現了極高的同理心與抗壓潛力。"
            classicConnection="《紅樓夢》第七十四回"
            parentSuggestion="今晚可與孩子聊聊她對未來挑戰的看法，並給予肯定。不需要解答，只需要傾聽。"
          />
          <FamilyBridgeCard
            teacherName="立霖"
            observationDate="2026-05-10"
            studentContext="作文題目「我最想說但沒說出口的一句話」，孩子寫了 600 字給父親，文字真摯。"
            parentSuggestion="不需要追問內容（這是他的領地）。週末可一起做一件不講話的事，例如散步。"
          />
        </div>
      </Section>

      {/* 親子討論題範本 */}
      <Section background="cream">
        <SectionHeader
          title="您也會收到本週親子破冰題"
          subtitle="每週五下午，一個輕鬆又深刻的問題"
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <DialoguePrompt
            weekTopic="朱自清《背影》—— 看見父母不曾被看見的付出"
            prompt="請孩子在三天內觀察並寫下一個您為他付出、但他未曾留意的微小細節；同時請您回饋當時做這件事的想法。"
            observationGuideline="不評論、不糾正，只交換各自的版本。"
          />
          <DialoguePrompt
            weekTopic="《論語》—— 君子和而不同"
            prompt="這週與孩子試著討論一件你們意見不同的小事。不要說服對方，只練習說：『我懂你的版本，我的版本是這樣。』"
          />
        </div>
      </Section>

      {/* 三大支持 */}
      <Section background="white">
        <SectionHeader title="您會從我們這裡得到的支持" centered />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { tag: '01', title: '月度課堂觀察', body: '不是分數，是側錄 — 孩子在課堂上的成長瞬間。' },
            { tag: '02', title: '週末破冰話題', body: '每週一個結合古典與現代生活的親子討論題。' },
            { tag: '03', title: '家長私密社團', body: '與其他家長同行，每月一場線上講座。' },
          ].map((it, i) => (
            <div key={i} className="bg-[var(--mentor-sunrise)] rounded-2xl p-8">
              <div className="text-[var(--mentor-terracotta)] text-xs tracking-wider font-bold mb-3">{it.tag}</div>
              <h3 className="text-xl font-bold text-[var(--navy)] mb-3">{it.title}</h3>
              <p className="text-[var(--navy-light)] leading-relaxed">{it.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="navy">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            高單價，是因為改變的不只是分數
          </h2>
          <p className="text-lg text-[var(--cream)]/80 mb-8 leading-relaxed">
            把這堂課給我們一次，<br />
            我們陪三年。
          </p>
          <Button href="/diagnosis">預約 30 分鐘對談</Button>
        </div>
      </Section>
    </>
  );
}
