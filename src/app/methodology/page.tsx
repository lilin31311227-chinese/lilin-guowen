import Section, { SectionHeader } from '@/components/ui/Section';
import Card, { CardTitle, CardDescription } from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export const metadata = {
  title: '課程介紹 | 立霖國文',
  description: '國中素養班與高中戰略班，針對不同階段設計的精準教學。國中打地基，高中重戰略。',
};

const juniorHighFeatures = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: '閱讀理解策略',
    subtitle: '從「看不懂」到「抓重點」',
    description: '獨家「閱破劍法」，將抽象的閱讀理解轉化為可操作的邏輯步驟。讓孩子不再靠感覺答題，而是有方法可循。',
    points: ['長文拆解技巧', '題幹關鍵字辨識', '選項排除法', '答案定位策略'],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    title: '國學常識培養',
    subtitle: '古文不是死背，是智慧',
    description: '用現代語言解讀古人的智慧，讓孩子理解「為什麼要學這些」。當古文變得有意義，記憶自然深刻。',
    points: ['經典篇章導讀', '古今用語對照', '文學史脈絡建立', '考點整合記憶'],
  },
];

const seniorHighFeatures = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: '核心古文深化',
    subtitle: '30 篇核心，篇篇精通',
    description: '聚焦學測必考的核心古文，不只背誦，更要理解。透過深度剖析，讓每一篇都成為得分利器。',
    points: ['篇章結構分析', '作者思路還原', '考題變化預測', '跨篇章主題統整'],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
    title: '國寫雙軌突破',
    subtitle: '知性感性，雙軌並進',
    description: '針對學測國寫的兩大題型，設計專屬的攻略方法。特別為「理科腦」學生打造感性題的邏輯解法。',
    points: ['知性題論述架構', '感性題情境營造', '素材庫建立方法', '時間分配策略'],
  },
];

const tripleSlash = [
  { step: '01', name: '刪除', fullName: '刪除干擾', desc: '快速辨識並剔除無關資訊，讓思考聚焦真正重要的內容' },
  { step: '02', name: '歸納', fullName: '歸納整合', desc: '將散落的資訊點連結成線，形成完整的理解框架' },
  { step: '03', name: '關鍵句', fullName: '定位關鍵', desc: '精準找出文章的核心句子，這往往就是答案所在' },
];

export default function MethodologyPage() {
  return (
    <>
      {/* Hero */}
      <Section background="navy">
        <div className="text-center py-12">
          <span className="inline-block px-4 py-1 bg-[var(--gold)] text-[var(--navy)] text-sm font-bold rounded-full mb-6">
            課程介紹
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--cream)] mb-4">
            國中打地基，高中重戰略
          </h1>
          <p className="text-xl text-[var(--cream)]/80 max-w-2xl mx-auto">
            針對不同階段的學習需求，設計最適合的教學方法
            <br />
            讓每一步都走得扎實有效
          </p>
        </div>
      </Section>

      {/* Junior High Section */}
      <Section background="white" id="junior">
        <div className="mb-8">
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 text-sm font-bold rounded-full mb-4">
            國中素養班
          </span>
          <h2 className="text-3xl font-bold text-[var(--navy)] mb-4">
            強化地基，穩紮穩打
          </h2>
          <p className="text-lg text-[var(--navy-light)] max-w-3xl">
            國中階段最重要的是建立閱讀理解的基本功。當孩子學會「怎麼讀」，才會「想要讀」。
            我們的目標不只是讓孩子會考拿高分，更要讓他們真正愛上閱讀。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {juniorHighFeatures.map((feature, index) => (
            <Card key={index} className="border-t-4 border-blue-500">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-500 mb-4">
                {feature.icon}
              </div>
              <CardTitle>{feature.title}</CardTitle>
              <p className="text-blue-600 text-sm font-medium mb-2">{feature.subtitle}</p>
              <CardDescription>{feature.description}</CardDescription>
              <ul className="mt-4 space-y-2">
                {feature.points.map((point, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-[var(--navy)]">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    {point}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="bg-blue-50 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-[var(--navy)] mb-2">適合對象</h3>
          <p className="text-[var(--navy-light)]">
            國一至國三學生，特別是閱讀理解有困難、看到長文就想放棄的孩子
          </p>
        </div>
      </Section>

      {/* Senior High Section */}
      <Section background="cream" id="senior">
        <div className="mb-8">
          <span className="inline-block px-4 py-1 bg-violet-100 text-violet-600 text-sm font-bold rounded-full mb-4">
            高中戰略班
          </span>
          <h2 className="text-3xl font-bold text-[var(--navy)] mb-4">
            精準備戰，高效突破
          </h2>
          <p className="text-lg text-[var(--navy-light)] max-w-3xl">
            高中階段需要更有策略的學習方式。古文深化與國寫雙軌並進，
            用最有效率的方法，在有限時間內創造最大成果。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {seniorHighFeatures.map((feature, index) => (
            <Card key={index} className="border-t-4 border-violet-500">
              <div className="w-14 h-14 bg-violet-50 rounded-xl flex items-center justify-center text-violet-500 mb-4">
                {feature.icon}
              </div>
              <CardTitle>{feature.title}</CardTitle>
              <p className="text-violet-600 text-sm font-medium mb-2">{feature.subtitle}</p>
              <CardDescription>{feature.description}</CardDescription>
              <ul className="mt-4 space-y-2">
                {feature.points.map((point, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-[var(--navy)]">
                    <span className="w-1.5 h-1.5 bg-violet-500 rounded-full" />
                    {point}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Special for Science Students */}
        <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center text-orange-500 flex-shrink-0">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[var(--navy)] mb-2">
                理科生專屬：感性寫作邏輯解法
              </h3>
              <p className="text-[var(--navy-light)] mb-4">
                數理強、文字弱？感性題不知道寫什麼？我們專為理科腦設計的「邏輯架構法」，
                讓你用熟悉的推理方式解構感性寫作，不再靠感覺硬擠。
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-orange-100 text-orange-600 text-sm rounded-full">邏輯架構 → 論點展開</span>
                <span className="px-3 py-1 bg-orange-100 text-orange-600 text-sm rounded-full">推理思維 → 情感轉化</span>
                <span className="px-3 py-1 bg-orange-100 text-orange-600 text-sm rounded-full">理性基底 → 感性輸出</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Core Methodology - Triple Slash */}
      <Section background="navy">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-[var(--gold)] text-[var(--navy)] text-sm font-bold rounded-full mb-6">
            獨家方法論
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--cream)] mb-4">
            基本三連斬
          </h2>
          <p className="text-lg text-[var(--cream)]/80 max-w-2xl mx-auto">
            邏輯演算法，破解所有閱讀題型
            <br />
            「把大段變小段，長句變短句」— 降維打擊策略
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {tripleSlash.map((item, index) => (
            <div key={index} className="relative">
              <div className="bg-[#1a365d]/80 border border-[var(--gold)]/30 rounded-xl p-8 text-center h-full">
                <div className="text-[var(--gold)] text-5xl font-bold mb-4">{item.step}</div>
                <div className="text-3xl font-bold text-[var(--cream)] mb-2">{item.name}</div>
                <div className="text-[var(--gold)] text-sm font-medium mb-4">{item.fullName}</div>
                <div className="text-[var(--cream)]/70 text-sm">{item.desc}</div>
              </div>
              {index < 2 && (
                <div className="hidden md:flex absolute top-1/2 -right-3 transform -translate-y-1/2 w-6 h-6 bg-[var(--gold)] rounded-full items-center justify-center text-[var(--navy)] text-sm font-bold z-10">
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-[var(--cream)]/60 text-sm">
            此為核心方法概述，完整「閱破劍法七式」詳見課程內容
          </p>
        </div>
      </Section>

      {/* CTA */}
      <Section background="cream">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[var(--navy)] mb-4">
            想知道哪種課程適合你的孩子？
          </h2>
          <p className="text-[var(--navy-light)] mb-8 max-w-xl mx-auto">
            每個孩子的情況都不同。透過免費診斷，
            我們將分析孩子目前的程度，並提供最適合的學習建議。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/diagnosis" variant="primary">
              預約免費診斷諮詢
            </Button>
            <Button href="/testimonials" variant="secondary">
              看看其他學員的故事
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
