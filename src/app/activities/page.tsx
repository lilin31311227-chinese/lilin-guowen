import type { Metadata } from 'next';
import Section, { SectionHeader } from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import ExperienceCard from '@/components/brand/ExperienceCard';

export const metadata: Metadata = {
  title: '體驗活動 · 自然輕觸 × 親子律動',
  description: '不練習回答，練習傾聽。把課堂的反思帶到山林裡、帶回飯桌上。',
};

export default function ActivitiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--bridge-mist)] via-[var(--mentor-sunrise)] to-[var(--cream)] py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 backdrop-blur-sm border border-[var(--bridge-sage)]/30 text-xs font-semibold text-[var(--bridge-sage)] tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--bridge-sage)]" aria-hidden="true" />
            體驗活動
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mt-4 text-[var(--navy)] leading-[1.15]">
            不練習回答 <br />
            <span className="text-[var(--bridge-teal)]">練習傾聽</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[var(--navy-light)] max-w-2xl mx-auto leading-relaxed">
            活動不是行銷工具，<br />
            是品牌的「家庭關係修復現場」。
          </p>
        </div>
      </section>

      {/* 旗艦活動 */}
      <Section background="cream">
        <SectionHeader
          title="本季旗艦活動"
          subtitle="兩大主題，每季交替舉辦"
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <ExperienceCard
            title="自然 · 輕觸之旅"
            subtitle="親子五感體驗日"
            duration="4 小時"
            capacity="≤20 人"
            price="$150/位"
            senses={['sight', 'sound', 'touch']}
            description="靜觀漫步 30 分鐘不交談、自然書寫五感觀察、親子合作藝術拼貼、共備共食茶點。讓親子在不必說話的時段裡，重新感覺到彼此。"
            classicQuote={{ text: '采菊東籬下，悠然見南山。', source: '陶淵明' }}
          />
          <ExperienceCard
            title="動身體 · 樂溝通"
            subtitle="親子戲劇情境工作坊"
            duration="60 分鐘"
            capacity="≤20 人"
            price="$1000/組"
            senses={['sound', 'touch']}
            description="背對背律動暖身、文學戲劇情境角色扮演（《背影》/《紅樓夢》）、反思圈背對背書寫。在角色框架下安全地展現脆弱與同理。"
            classicQuote={{ text: '吾日三省吾身。', source: '《論語》曾子' }}
          />
        </div>
      </Section>

      {/* 流程 */}
      <Section background="white">
        <SectionHeader
          title="一場《自然 · 輕觸之旅》的下午"
          subtitle="四階段 · 從不講話到一起做飯"
          centered={false}
        />
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            { time: '13:00', title: '靜觀漫步', body: '走 30 分鐘的步道。規則：「全程不講話，只看、只聽、只感受。」帶領者每 10 分鐘輕聲朗讀一句古典詩文。' },
            { time: '14:00', title: '自然書寫', body: '發放封蠟米色「五感觀察小卡」。寫下今日五個感官的觀察。不交談、不分享、不打分數。' },
            { time: '15:00', title: '藝術共創', body: '親子合作完成自然拼貼作品。素材：落葉、枯枝、果實、石頭。規則：「過程中可講話，但不准評論對方的選擇。」' },
            { time: '16:00', title: '共備共食', body: '親子分工準備茶點：切水果、泡茶、擺盤。自由流動，無分組。結束時自願分享「今天最想記得的一個畫面」。' },
          ].map((p, i) => (
            <div key={i} className="flex gap-6 p-6 bg-[var(--cream-soft)] rounded-2xl">
              <div className="text-2xl font-bold text-[var(--bridge-teal)] tracking-tight whitespace-nowrap">
                {p.time}
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--navy)] mb-2">{p.title}</h3>
                <p className="text-[var(--navy-light)] leading-relaxed">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 為什麼這樣設計 */}
      <Section background="cream">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            title="為什麼是「不講話」？"
            subtitle="當語言失效時，連結反而開始"
            centered
          />
          <div className="space-y-6 text-[var(--navy)] leading-[1.85]">
            <p>
              很多家長帶孩子來活動的第一個反應是：「不講話的活動？這怎麼算親子活動？」
            </p>
            <p>
              但結構化的遊戲與感官體驗，是打破長期僵化的語言防衛機制、促進親子關係最有效的處方。
              當你和孩子坐下來「好好聊」時，他通常已經把心關上了。
              當你和他並肩走 30 分鐘的步道、不講話、只聽風聲，他反而會在第 25 分鐘指著一片葉子說：
              「這個顏色很像我們家以前那本舊書的封面。」
            </p>
            <p className="italic text-[var(--mentor-terracotta)]">
              那一刻，是您半年都換不來的對話。
            </p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="navy">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            報名費只是入場費
          </h2>
          <p className="text-lg text-[var(--cream)]/80 mb-8 leading-relaxed">
            真實的支付，<br />
            是您願意把這個下午還給彼此。
          </p>
          <Button href="/diagnosis">我想參加下一場</Button>
        </div>
      </Section>
    </>
  );
}
