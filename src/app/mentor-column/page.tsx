import type { Metadata } from 'next';
import Section, { SectionHeader } from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import MentorVoice from '@/components/brand/MentorVoice';
import EmotionChip, { type EmotionType } from '@/components/brand/EmotionChip';

const EMOTION_REPLACEMENTS: Array<{ type: EmotionType; replaces: string }> = [
  { type: 'melancholy', replaces: '煩' },
  { type: 'anxiety', replaces: '不知道' },
  { type: 'anger', replaces: '不爽' },
];

export const metadata: Metadata = {
  title: '人生導師專欄 · 古典智慧 × 現代生活',
  description: '結合古典文學與當代生活議題的深度文章，給學生與家長的人生導師專欄。',
};

const ARTICLES = [
  {
    category: '家長 · 教養觀察',
    title: '他不是不講話，只是不知道從哪句開始',
    excerpt: '「煩」這個詞，是世界上最容易引爆衝突的三個字之一。當孩子用「煩」、「不知道」、「不爽」回應你，他不是叛逆，是字典裡找不到夠精確的詞...',
    classical: '蘇軾《定風波》',
    readTime: '8 分鐘',
    accent: 'var(--mentor-terracotta)',
  },
  {
    category: '學生 · 心理陪伴',
    title: '蘇軾被貶謫到黃州那年，他兒子也國中',
    excerpt: '1080 年，蘇軾被貶黃州，他兒子蘇邁 16 歲，跟著父親從繁華汴京搬到偏鄉。蘇邁那年沒考好，蘇軾寫信只說一句：「人生如逆旅，我亦是行人。」...',
    classical: '蘇軾家書',
    readTime: '6 分鐘',
    accent: 'var(--bridge-teal)',
  },
  {
    category: '雙軌 · 共讀',
    title: '林黛玉初進賈府那段「步步留心」，是青少年的內心獨白',
    excerpt: '當我們唸到「步步留心，時時在意，不肯多說一句話，不肯多行一步路」時，課堂上的孩子安靜下來。她說：「我也常常這樣，因為怕自己不被歡迎。」...',
    classical: '《紅樓夢》第三回',
    readTime: '7 分鐘',
    accent: 'var(--mentor-amber)',
  },
];

export default function MentorColumnPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0A1A35] via-[#0d2341] to-[#071428] text-[var(--cream)] py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/30 text-xs font-semibold text-[var(--gold-light)] tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]" aria-hidden="true" />
            人生導師專欄
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mt-4 leading-tight">
            古典智慧 ×{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-300">
              現代生活
            </span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[var(--cream)]/80 max-w-2xl">
            不講考試技巧、不講國學常識。<br />
            只講那些跨越千年仍能撫慰你的句子。
          </p>
        </div>
      </section>

      {/* 主文章 - 範例 */}
      <Section background="cream">
        <div className="max-w-3xl mx-auto">
          <div className="text-xs tracking-wider font-bold text-[var(--mentor-terracotta)] mb-3">
            最新一篇 · 家長 · 教養觀察
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy)] mb-6 leading-tight">
            他不是不講話，只是不知道從哪句開始
          </h2>

          <div className="text-sm text-[var(--navy-light)] mb-8 flex items-center gap-3">
            <span>立霖老師</span>
            <span aria-hidden="true">·</span>
            <span>2026-05-13</span>
            <span aria-hidden="true">·</span>
            <span>8 分鐘閱讀</span>
          </div>

          <div className="space-y-6 text-[var(--navy)] leading-[1.85] text-[1.0625rem]">
            <p>
              昨天有位媽媽傳訊息給我，她說：
              「老師，我們家孩子從升上國二之後，吃飯的時候只低頭滑手機，我問什麼都嗯嗯啊啊。」
            </p>
            <p>
              我問她：「您最後一次和他聊『不是課業』的事情，是什麼時候？」<br />
              她想了很久，沒回我。
            </p>

            <MentorVoice classicReference="蘇軾《定風波》">
              很多家長以為孩子的沉默是叛逆。
              但我陪伴超過 500 位青少年，發現大多數時候——
              不是他不想說，是他找不到夠精確的詞，去說那種搖搖欲墜的感覺。
            </MentorVoice>

            <p>
              於是他只能用「不爽」「煩」「不知道」帶過。<br />
              而這三個詞，剛好是世界上最容易引爆衝突的三個詞。
            </p>

            <p>
              我們教的不只是國文。<br />
              我們教孩子，怎麼用：
            </p>

            {EMOTION_REPLACEMENTS.map(({ type, replaces }) => (
              <div key={type} className="flex flex-wrap gap-2 my-4">
                <EmotionChip type={type} />
                <span className="text-[var(--navy-light)] self-center">代替「{replaces}」</span>
              </div>
            ))}

            <p>
              當他開始有了精確的詞，<br />
              您會發現——飯桌的氣氛，慢慢變了。
            </p>

            <hr className="gold-hairline" />

            <p className="italic text-[var(--navy-light)]">
              我們每個月會寄一份《課堂觀察月報》到您手中，
              不是看孩子考幾分，是告訴您：今天，他在《紅樓夢》面前皺了眉、又笑了。
            </p>
          </div>

          <div className="mt-12 p-6 bg-[var(--mentor-sunrise)] rounded-2xl text-center">
            <p className="text-[var(--navy)] mb-4">
              如果這篇文章對您有共鳴，
              邀請您留下 Email，每月初我們寄一篇新的給您。
            </p>
            <Button href="/diagnosis">訂閱每月專欄</Button>
          </div>
        </div>
      </Section>

      {/* 其他文章 */}
      <Section background="white">
        <SectionHeader
          title="其他專欄文章"
          subtitle="每週一篇 · 學生軌 × 家長軌 × 共讀軌 交替更新"
          centered={false}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ARTICLES.map((a) => (
            <article key={a.title} className="bg-white rounded-2xl overflow-hidden card-shadow-sm card-shadow-hover">
              <div className="h-2" style={{ background: a.accent }} />
              <div className="p-6">
                <div className="text-xs tracking-wider font-bold mb-3" style={{ color: a.accent }}>
                  {a.category}
                </div>
                <h3 className="text-xl font-bold text-[var(--navy)] leading-snug mb-3">
                  {a.title}
                </h3>
                <p className="text-sm text-[var(--navy-light)] leading-relaxed mb-4">
                  {a.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-[var(--navy-light)] pt-3 border-t border-[var(--navy)]/8">
                  <span>連結文本：{a.classical}</span>
                  <span>{a.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
