import Section, { SectionHeader } from '@/components/ui/Section';
import Card, { CardTitle, CardDescription } from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export const metadata = {
  title: '考試資訊 | 立霖國文',
  description: '會考、學測國文考試資訊與數據分析。了解考試趨勢，精準備戰。',
};

const examLevels = [
  { level: 'A++', questions: '0-2 題錯', color: '#22c55e', description: '頂尖精熟' },
  { level: 'A+', questions: '3-4 題錯', color: '#84cc16', description: '高度精熟' },
  { level: 'A', questions: '5-6 題錯', color: '#eab308', description: '精熟' },
  { level: 'B++', questions: '7-10 題錯', color: '#f97316', description: '基礎以上' },
  { level: 'B+', questions: '11-14 題錯', color: '#ef4444', description: '基礎' },
  { level: 'B', questions: '15-19 題錯', color: '#dc2626', description: '待加強' },
  { level: 'C', questions: '20+ 題錯', color: '#991b1b', description: '需加強' },
];

const juniorStrategies = [
  {
    title: '閱讀理解強化',
    description: '建立穩固的閱讀基礎，培養邏輯思考能力',
    points: ['長文拆解技巧', '題幹關鍵字辨識', '選項排除法'],
  },
  {
    title: '文言文入門',
    description: '古文不再是障礙，而是得分利器',
    points: ['常見字詞對照', '句型結構分析', '文意推敲練習'],
  },
  {
    title: '寫作基本功',
    description: '從架構開始，建立寫作的穩固地基',
    points: ['段落組織邏輯', '開頭結尾技巧', '素材累積方法'],
  },
];

const seniorStrategies = [
  {
    title: '理科腦寫作急救',
    description: '將邏輯思維轉化為感性表達的橋樑',
    points: ['論點架構設計', '例證選用策略', '情感表達技巧'],
  },
  {
    title: '國寫雙軌並進',
    description: '知性與感性題型的雙重突破',
    points: ['知性題邏輯論述', '感性題情境營造', '時間分配策略'],
  },
  {
    title: '選擇題高效解題',
    description: '精準定位，快速作答',
    points: ['題型分類應對', '時間壓力管理', '檢查回顧技巧'],
  },
];

export default function ExamStrategyPage() {
  return (
    <>
      {/* Hero */}
      <Section background="navy">
        <div className="text-center py-12">
          <span className="inline-block px-4 py-1 bg-[var(--gold)] text-[var(--navy)] text-sm font-bold rounded-full mb-6">
            考試資訊
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--cream)] mb-4">
            掌握考試趨勢，精準備戰
          </h1>
          <p className="text-xl text-[var(--cream)]/80 max-w-2xl mx-auto">
            數據分析 × 精準策略
            <br />
            了解國中會考與高中學測的最新趨勢
          </p>
        </div>
      </Section>

      {/* Grade Level Table */}
      <Section background="white">
        <SectionHeader
          title="會考等級對照表"
          subtitle="了解你的位置，設定精準目標"
        />

        <div className="overflow-x-auto mb-12 pb-2">
          <div className="flex gap-3 sm:gap-4 lg:gap-6 min-w-max justify-center px-4">
            {examLevels.map((item, index) => (
              <div
                key={index}
                className="w-28 sm:w-32 text-center p-3 sm:p-4 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div
                  className="text-2xl sm:text-3xl font-bold mb-2"
                  style={{ color: item.color }}
                >
                  {item.level}
                </div>
                <div className="text-xs sm:text-sm text-[var(--navy)] mb-1">{item.questions}</div>
                <div className="text-xs text-[var(--navy-light)]">{item.description}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[var(--cream)] rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-[var(--navy)]">48</div>
              <div className="text-[var(--navy-light)]">選擇題總題數</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[var(--gold)]">25-27%</div>
              <div className="text-[var(--navy-light)]">精熟等級比例</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[var(--navy)]">5-6</div>
              <div className="text-[var(--navy-light)]">A 等級最多錯題數</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Junior High Strategies */}
      <Section background="cream" id="junior">
        <SectionHeader
          title="國中素養戰略"
          subtitle="強化地基，穩紮穩打"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {juniorStrategies.map((strategy, index) => (
            <Card key={index}>
              <div className="w-12 h-12 bg-[var(--navy)] rounded-xl flex items-center justify-center text-[var(--gold)] font-bold text-xl mb-4">
                {index + 1}
              </div>
              <CardTitle>{strategy.title}</CardTitle>
              <CardDescription>{strategy.description}</CardDescription>
              <ul className="mt-4 space-y-2">
                {strategy.points.map((point, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-[var(--navy)]">
                    <span className="w-1.5 h-1.5 bg-[var(--gold)] rounded-full" />
                    {point}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      {/* Senior High Strategies */}
      <Section background="white" id="senior">
        <SectionHeader
          title="高中學測戰略"
          subtitle="理科腦寫作急救 × 國寫雙軌突破"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {seniorStrategies.map((strategy, index) => (
            <Card key={index} className="border-t-4 border-[var(--gold)]">
              <CardTitle>{strategy.title}</CardTitle>
              <CardDescription>{strategy.description}</CardDescription>
              <ul className="mt-4 space-y-2">
                {strategy.points.map((point, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-[var(--navy)]">
                    <span className="w-1.5 h-1.5 bg-[var(--gold)] rounded-full" />
                    {point}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="bg-[var(--navy)] rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-[var(--cream)] mb-4">
            理科生的寫作困境
          </h3>
          <p className="text-[var(--cream)]/80 max-w-2xl mx-auto mb-6">
            擅長邏輯推理，卻在感性表達上遭遇瓶頸？
            <br />
            我們的方法將邏輯字詞運用於感性寫作，讓你的理科思維成為優勢。
          </p>
          <div className="flex justify-center gap-4 text-[var(--gold)]">
            <span>邏輯架構 →</span>
            <span>論點展開 →</span>
            <span>情感轉化 →</span>
            <span>文字輸出</span>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="cream">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[var(--navy)] mb-4">
            找出你的學習缺口
          </h2>
          <p className="text-[var(--navy-light)] mb-8 max-w-xl mx-auto">
            透過 5 分鐘診斷，我們將分析你目前的程度，
            並提供客製化的學習建議。
          </p>
          <Button href="/diagnosis" variant="primary">
            開始免費診斷
          </Button>
        </div>
      </Section>
    </>
  );
}
