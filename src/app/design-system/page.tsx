import type { Metadata } from 'next';
import Link from 'next/link';
import Section, { SectionHeader } from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import Card, { CardTitle, CardDescription } from '@/components/ui/Card';
import MentorVoice from '@/components/brand/MentorVoice';
import FamilyBridgeCard from '@/components/brand/FamilyBridgeCard';
import DialoguePrompt from '@/components/brand/DialoguePrompt';
import EmotionChip, { ALL_EMOTIONS } from '@/components/brand/EmotionChip';
import DualTrackEntry from '@/components/brand/DualTrackEntry';
import ExperienceCard from '@/components/brand/ExperienceCard';
import VoiceToneMatrix from '@/components/brand/VoiceToneMatrix';

export const metadata: Metadata = {
  title: '品牌設計系統 v2.0',
  description: '立霖國文品牌設計系統 — 人生導師 × 親情橋樑雙引擎。色彩、字型、元件、語氣，一頁掌握。',
};

const PRIMARY_COLORS = [
  { name: '深海軍藍 Navy', hex: '#1a365d', cssVar: '--navy', usage: '標題、主文字' },
  { name: '晨曦金 Gold', hex: '#d69e2e', cssVar: '--gold', usage: 'CTA、強調' },
  { name: '紙莎草白 Cream', hex: '#faf5ef', cssVar: '--cream', usage: '背景、留白' },
  { name: '子夜藍 Hero', hex: '#0A1A35', cssVar: '--navy-hero', usage: 'Hero 深底' },
];

const MENTOR_COLORS = [
  { name: '赤茶 Terracotta', hex: '#b86a4a', cssVar: '--mentor-terracotta' },
  { name: '琥珀 Amber', hex: '#c98a3d', cssVar: '--mentor-amber' },
  { name: '陶土 Clay', hex: '#e8d5c4', cssVar: '--mentor-clay' },
  { name: '朝陽米 Sunrise', hex: '#f4e4d4', cssVar: '--mentor-sunrise' },
];

const BRIDGE_COLORS = [
  { name: '湖青 Teal', hex: '#4a7c7e', cssVar: '--bridge-teal' },
  { name: '苔綠 Sage', hex: '#9cae8e', cssVar: '--bridge-sage' },
  { name: '霧白 Mist', hex: '#e8eeec', cssVar: '--bridge-mist' },
];

const SENSE_COLORS = [
  { name: '視 山嵐', hex: '#7e8c5c' },
  { name: '聽 流水', hex: '#6e7d99' },
  { name: '嗅 木質', hex: '#c4a574' },
  { name: '味 焙茶', hex: '#b86a4a' },
  { name: '觸 樹皮', hex: '#9c8579' },
];

const TYPOGRAPHY_SCALE = [
  { level: 'H1', size: '3.5rem (56px)', weight: 700, sample: '人生沒有 Google' },
  { level: 'H2', size: '2.5rem (40px)', weight: 700, sample: '雙引擎品牌哲學' },
  { level: 'H3', size: '1.5rem (24px)', weight: 700, sample: '導師的旁白' },
  { level: 'Body', size: '1rem (16px)', weight: 400, sample: '帶你讀懂文章邏輯，寫出生命厚度。' },
  { level: 'Caption', size: '0.875rem (14px)', weight: 500, sample: '出自《論語》子曰' },
];

function ColorSwatch({ name, hex, cssVar, usage }: { name: string; hex: string; cssVar?: string; usage?: string }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden card-shadow-sm">
      <div className="token-swatch" style={{ background: hex }} />
      <div className="px-3 py-3">
        <div className="text-sm font-bold text-[var(--navy)]">{name}</div>
        <div className="text-xs text-[var(--navy-light)] font-mono mt-0.5">{hex}</div>
        {cssVar && <div className="text-xs text-[var(--gold-dark)] font-mono">{cssVar}</div>}
        {usage && <div className="text-xs text-[var(--navy-light)] mt-1">{usage}</div>}
      </div>
    </div>
  );
}

function SectionLabel({ label, accent }: { label: string; accent?: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span
        className="inline-block w-1 h-7 rounded-full"
        style={{ background: accent || 'var(--gold)' }}
        aria-hidden="true"
      />
      <h3 className="text-2xl font-bold text-[var(--navy)]">{label}</h3>
    </div>
  );
}

export default function DesignSystemPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0A1A35] via-[#0d2341] to-[#071428] text-[var(--cream)] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/30 text-xs font-semibold text-[var(--gold-light)] tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]" aria-hidden="true" />
            DESIGN SYSTEM · v2.0
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mt-4 leading-tight">
            人生導師 ×{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-300">
              親情橋樑
            </span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[var(--cream)]/80 max-w-2xl">
            立霖國文品牌設計系統 · 雙引擎模型。
            一頁掌握色彩、字型、元件、語氣，給設計師與工程師的單一事實來源。
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm text-[var(--cream)]/80">
            <a href="#colors" className="hover:text-[var(--gold-light)]">色彩</a>
            <span aria-hidden="true">·</span>
            <a href="#typography" className="hover:text-[var(--gold-light)]">字型</a>
            <span aria-hidden="true">·</span>
            <a href="#components" className="hover:text-[var(--gold-light)]">元件</a>
            <span aria-hidden="true">·</span>
            <a href="#voice" className="hover:text-[var(--gold-light)]">語氣</a>
            <span aria-hidden="true">·</span>
            <a href="#patterns" className="hover:text-[var(--gold-light)]">頁面組合</a>
          </div>
        </div>
      </section>

      {/* 色彩系統 */}
      <Section id="colors" background="cream">
        <SectionHeader
          title="色彩系統 Color Tokens"
          subtitle="v1.0 三色定調 × v2.0 雙軌擴充 × 述情詞彙 × 五感體驗"
          centered={false}
        />

        <SectionLabel label="主色 Primary" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {PRIMARY_COLORS.map((c) => <ColorSwatch key={c.hex} {...c} />)}
        </div>

        <SectionLabel label="人生導師暖色 Mentor Warmth" accent="var(--mentor-terracotta)" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {MENTOR_COLORS.map((c) => <ColorSwatch key={c.hex} {...c} />)}
        </div>

        <SectionLabel label="親情橋樑連結色 Bridge Tone" accent="var(--bridge-teal)" />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {BRIDGE_COLORS.map((c) => <ColorSwatch key={c.hex} {...c} />)}
        </div>

        <SectionLabel label="述情詞彙 Emotion Lexicon" />
        <div className="flex flex-wrap gap-2 mb-12 p-6 bg-white rounded-xl card-shadow-sm">
          {ALL_EMOTIONS.map((e) => <EmotionChip key={e} type={e} />)}
        </div>

        <SectionLabel label="五感體驗 Sensory Experience" />
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {SENSE_COLORS.map((c) => <ColorSwatch key={c.hex} {...c} />)}
        </div>
      </Section>

      {/* 字型系統 */}
      <Section id="typography" background="white">
        <SectionHeader
          title="字型系統 Typography"
          subtitle="Noto Sans TC · 七階字級"
          centered={false}
        />
        <div className="space-y-6">
          {TYPOGRAPHY_SCALE.map((t) => (
            <div key={t.level} className="grid grid-cols-12 gap-4 items-baseline pb-6 border-b border-[var(--navy)]/8">
              <div className="col-span-2 text-sm text-[var(--gold-dark)] font-mono">{t.level}</div>
              <div className="col-span-3 text-xs text-[var(--navy-light)] font-mono">
                {t.size} / {t.weight}
              </div>
              <div
                className="col-span-7 text-[var(--navy)]"
                style={{ fontSize: t.size.split(' ')[0], fontWeight: t.weight, lineHeight: 1.25 }}
              >
                {t.sample}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 元件展示 */}
      <Section id="components" background="cream">
        <SectionHeader
          title="核心元件 Brand Components"
          subtitle="v2.0 新增 7 大品牌專屬元件"
          centered={false}
        />

        {/* Buttons */}
        <SectionLabel label="按鈕 Buttons" />
        <div className="flex flex-wrap gap-4 mb-12">
          <Button variant="primary">預約一場對話</Button>
          <Button variant="secondary">先看看再說</Button>
        </div>

        {/* Card */}
        <SectionLabel label="基本卡片 Card" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardTitle>閱破劍法</CardTitle>
            <CardDescription>邏輯化閱讀理解系統，把文章拆給你看。</CardDescription>
          </Card>
          <Card>
            <CardTitle>情緒詞彙</CardTitle>
            <CardDescription>把「煩」翻譯成「惆悵」、「懸宕」、「不平」。</CardDescription>
          </Card>
          <Card>
            <CardTitle>親子橋樑</CardTitle>
            <CardDescription>把課堂的反思，帶回飯桌上的對話。</CardDescription>
          </Card>
        </div>

        {/* MentorVoice */}
        <SectionLabel label="導師旁白 MentorVoice" accent="var(--mentor-terracotta)" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <MentorVoice classicReference="蘇軾《定風波》">
            在現代社會中，我們經常面臨各種期待。你認為我們應該對誰展現最大的忠誠？
            如果是對自己忠誠，那意味著你必須承擔什麼樣的責任？
          </MentorVoice>
          <MentorVoice label="心靈專欄" classicReference="陶淵明《歸去來辭》">
            「歸去來兮，田園將蕪胡不歸？」
            陶淵明說的不是辭職，是回到自己。你今天最想回去的，是哪個自己？
          </MentorVoice>
        </div>

        {/* FamilyBridgeCard */}
        <SectionLabel label="親情橋樑卡 FamilyBridgeCard" accent="var(--bridge-teal)" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
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

        {/* DialoguePrompt */}
        <SectionLabel label="親子討論題 DialoguePrompt" accent="var(--mentor-terracotta)" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <DialoguePrompt
            weekTopic="朱自清《背影》—— 看見父母不曾被看見的付出"
            prompt="請在接下來的三天內，觀察並寫下一個父母為你付出、但你過去未曾留意的微小細節。同時請父母在此欄回饋他們當時為你做這件事的想法。"
            observationGuideline="不評論、不糾正，只交換各自的版本。"
          />
          <DialoguePrompt
            weekTopic="《論語》—— 子曰：「君子和而不同」"
            prompt="這週與家人試著討論一件你們意見不同的小事（例如：晚餐吃什麼、週末計畫）。不要說服對方，只練習說：『我懂你的版本，我的版本是這樣。』"
          />
        </div>

        {/* DualTrackEntry */}
        <SectionLabel label="雙軌動線入口 DualTrackEntry" />
        <DualTrackEntry />

        {/* ExperienceCard */}
        <SectionLabel label="體驗活動卡 ExperienceCard" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 mt-6">
          <ExperienceCard
            title="自然 · 輕觸之旅"
            subtitle="親子五感體驗日"
            duration="4 小時"
            capacity="≤20 人"
            price="$150/位"
            senses={['sight', 'sound', 'touch']}
            description="靜觀漫步、自然書寫、藝術共創、共食共備。讓親子在不必說話的時段裡，重新感覺到彼此。"
            classicQuote={{ text: '采菊東籬下，悠然見南山。', source: '陶淵明' }}
          />
          <ExperienceCard
            title="動身體 · 樂溝通"
            subtitle="親子戲劇情境工作坊"
            duration="60 分鐘"
            capacity="≤20 人"
            price="$1000/組"
            senses={['sound', 'touch']}
            description="律動暖身、文學戲劇情境扮演、反思圈。在角色框架下安全地展現脆弱與同理。"
            classicQuote={{ text: '吾日三省吾身。', source: '《論語》曾子' }}
          />
        </div>
      </Section>

      {/* 語氣對照 */}
      <Section id="voice" background="white">
        <SectionHeader
          title="語氣對照 Voice & Tone"
          subtitle="分眾撰寫，從販賣焦慮到提供解方的典範轉移"
          centered={false}
        />

        <div className="space-y-10">
          <VoiceToneMatrix
            audience="student"
            items={[
              { scene: '招生 CTA', good: '預約一場對話，看看自己長什麼樣子', bad: '立刻搶名額！手刀報名！' },
              { scene: '考前打氣', good: '分數會結束，你不會', bad: '只剩 87 天，再不衝就來不及' },
              { scene: '情緒回應', good: '「煩」可能是好幾種感覺，我們慢慢拆', bad: '別想那麼多，認真讀就對了' },
            ]}
          />
          <VoiceToneMatrix
            audience="parent"
            items={[
              { scene: '招生 CTA', good: '預約一份免費的課堂觀察月報', bad: '今天報名打 8 折！' },
              { scene: '溝通價值', good: '那些不知如何開口的關心，讓文學替您說', bad: '保證 3 個月孩子變得跟您講話' },
              { scene: '價格訴求', good: '高單價，是因為改變的不只是分數', bad: '一堂只要 $X，超划算！' },
            ]}
          />
        </div>
      </Section>

      {/* 頁面組合範例 */}
      <Section id="patterns" background="cream">
        <SectionHeader
          title="頁面組合範例 Page Patterns"
          subtitle="這些元件如何組裝成完整的頁面"
          centered={false}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href="/for-students"
            className="block p-6 bg-white rounded-2xl card-shadow-md hover:card-shadow-lg transition-shadow"
          >
            <div className="text-xs tracking-wider font-bold text-[var(--bridge-teal)] mb-2">範例頁 · 學生軌</div>
            <h4 className="text-xl font-bold text-[var(--navy)]">/for-students</h4>
            <p className="text-sm text-[var(--navy-light)] mt-2">
              使用 DualTrackEntry + MentorVoice + EmotionChip 組合的學生入口頁
            </p>
          </Link>
          <Link
            href="/for-parents"
            className="block p-6 bg-white rounded-2xl card-shadow-md hover:card-shadow-lg transition-shadow"
          >
            <div className="text-xs tracking-wider font-bold text-[var(--mentor-terracotta)] mb-2">範例頁 · 家長軌</div>
            <h4 className="text-xl font-bold text-[var(--navy)]">/for-parents</h4>
            <p className="text-sm text-[var(--navy-light)] mt-2">
              使用 FamilyBridgeCard + DialoguePrompt 組合的家長入口頁
            </p>
          </Link>
          <Link
            href="/mentor-column"
            className="block p-6 bg-white rounded-2xl card-shadow-md hover:card-shadow-lg transition-shadow"
          >
            <div className="text-xs tracking-wider font-bold text-[var(--mentor-terracotta)] mb-2">範例頁 · 心靈專欄</div>
            <h4 className="text-xl font-bold text-[var(--navy)]">/mentor-column</h4>
            <p className="text-sm text-[var(--navy-light)] mt-2">人生導師專欄長文示範頁</p>
          </Link>
          <Link
            href="/activities"
            className="block p-6 bg-white rounded-2xl card-shadow-md hover:card-shadow-lg transition-shadow"
          >
            <div className="text-xs tracking-wider font-bold text-[var(--bridge-sage)] mb-2">範例頁 · 體驗活動</div>
            <h4 className="text-xl font-bold text-[var(--navy)]">/activities</h4>
            <p className="text-sm text-[var(--navy-light)] mt-2">五感體驗 + 親子律動報名頁</p>
          </Link>
        </div>

        <div className="mt-12 p-6 bg-[var(--navy)] text-[var(--cream)] rounded-2xl">
          <div className="text-xs tracking-wider font-bold text-[var(--gold-light)] mb-3">
            完整品牌文件
          </div>
          <h3 className="text-2xl font-bold mb-2">
            這只是冰山一角
          </h3>
          <p className="text-[var(--cream)]/80 mb-4">
            完整的品牌規範、文宣模板、社群劇本、印刷規格、活動劇本、師訓守則 ——
            都在 <code className="text-[var(--gold-light)]">docs/BUSINESS_LAUNCH_KIT.md</code>
          </p>
        </div>
      </Section>
    </>
  );
}
