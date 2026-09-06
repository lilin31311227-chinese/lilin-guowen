import type { Metadata } from 'next';
import Section, { SectionHeader } from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import MentorVoice from '@/components/brand/MentorVoice';
import EmotionChip, { ALL_EMOTIONS } from '@/components/brand/EmotionChip';

export const metadata: Metadata = {
  title: '學生入口 · 在分數之上找你自己',
  description: '探索 / 陪伴 / 解惑。給每一位在分數之上、宇宙之內尋找自己的學生。',
};

export default function ForStudentsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--bridge-mist)] via-[var(--cream)] to-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 backdrop-blur-sm border border-[var(--bridge-teal)]/30 text-xs font-semibold text-[var(--bridge-teal)] tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--bridge-teal)]" aria-hidden="true" />
            學生專區
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mt-4 text-[var(--navy)] leading-[1.15]">
            分數會結束 <br />
            <span className="text-[var(--bridge-teal)]">你不會</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[var(--navy-light)] max-w-2xl mx-auto leading-relaxed">
            每週 1 小時，我們陪你讀懂文章，<br />
            也讀懂自己。
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Button href="/diagnosis">領取一份免費的閱讀邏輯地圖</Button>
            <Button href="/testimonials" variant="secondary">偷偷看其他學長姐怎麼說</Button>
          </div>
        </div>
      </section>

      {/* 同理段 */}
      <Section background="cream">
        <SectionHeader
          title="如果你常常覺得..."
          subtitle="這些都不是你的錯"
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { title: '搖搖欲墜', body: '別人都在進步，只有我還卡著。' },
            { title: '說不清楚', body: '「煩」這個字，已經是我能說出最精確的了。' },
            { title: '不被聽見', body: '說了也沒人懂，乾脆不說。' },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 card-shadow-sm">
              <div className="text-xs tracking-wider font-bold text-[var(--bridge-teal)] mb-2">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="text-xl font-bold text-[var(--navy)] mb-2">{item.title}</h3>
              <p className="text-[var(--navy-light)] leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-12">
          <MentorVoice label="導師想對你說" classicReference="蘇軾《定風波》">
            「莫聽穿林打葉聲，何妨吟嘯且徐行。」
            蘇軾被貶謫的那一年，他兒子也國中。他寫信給兒子只說一句：
            「人生如逆旅，我亦是行人。」—— 不是「加油」，是「我也在路上，我們同行」。
            你現在覺得無人能懂的感覺，幾千年前就有人懂了，他甚至為你寫好了字。
          </MentorVoice>
        </div>
      </Section>

      {/* 情緒詞彙練習 */}
      <Section background="white">
        <SectionHeader
          title="把「煩」翻譯成更精確的詞"
          subtitle="當你有了精確的詞，你就有了被理解的可能"
          centered
        />
        <div className="max-w-3xl mx-auto bg-[var(--cream-soft)] rounded-2xl p-8">
          <p className="text-[var(--navy-light)] mb-6 text-center">
            這些是我們最常從學生身上聽見的情緒。<br />
            點開每一個，都是一個古人留下來的語言：
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {ALL_EMOTIONS.map((e) => (
              <EmotionChip key={e} type={e} />
            ))}
          </div>
          <p className="text-sm text-[var(--navy-light)] mt-8 text-center italic">
            當你下次想說「我很煩」時，<br />
            試著問自己：是「鬱」、「焦」、還是「不平」？
          </p>
        </div>
      </Section>

      {/* 我們做什麼 */}
      <Section background="cream">
        <SectionHeader title="我們會陪你做的事" centered />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              tag: '01',
              title: '把文章拆給你看',
              body: '閱破劍法 — 邏輯化的閱讀理解系統，讓你看清作者每一個轉折。',
            },
            {
              tag: '02',
              title: '把你的話翻譯出來',
              body: '情緒詞彙擴充教材 — 賦予你描述自己最精準的字詞工具。',
            },
            {
              tag: '03',
              title: '把你聽見',
              body: '匿名心事信箱、靜觀練習、自然體驗 — 安全空間，不評論不糾正。',
            },
          ].map((it, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 card-shadow-sm">
              <div className="text-[var(--bridge-teal)] text-xs tracking-wider font-bold mb-3">{it.tag}</div>
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
            我不催促你
          </h2>
          <p className="text-lg text-[var(--cream)]/80 mb-8 leading-relaxed">
            你想看看再說也可以。<br />
            想跟誰先聊一聊再決定也可以。
          </p>
          <Button href="/diagnosis">我想試一次</Button>
        </div>
      </Section>
    </>
  );
}
