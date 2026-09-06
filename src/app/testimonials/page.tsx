import Section, { SectionHeader } from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export const metadata = {
  title: '學員見證 | 立霖國文',
  description: '真實學員的成功故事。從及格邊緣到 A++，從排斥寫作到學測高分，每一個改變都從被理解開始。',
};

const featuredTestimonials = [
  {
    category: '逆轉勝',
    categoryColor: 'bg-emerald-500',
    bgColor: 'bg-emerald-50',
    name: '小明同學',
    grade: '國三',
    avatar: '明',
    before: '國二段考及格邊緣',
    after: '國三會考 A++',
    story: '小明國二時，國文段考總是在及格邊緣徘徊。對閱讀測驗毫無頭緒，看到長文就想放棄。家長曾嘗試過多家補習班，但成效有限，孩子對國文的抗拒感越來越強。',
    journey: '來到立霖老師這裡後，老師沒有急著灌輸技巧，而是先花時間了解小明的閱讀習慣和思考方式。透過獨家的「閱破劍法」，將複雜的文章拆解成可理解的邏輯單元，小明才發現：原來閱讀理解不是靠感覺，而是有方法可循的。',
    result: '經過一年半的學習，小明在國三會考拿下 A++。更重要的是，他現在會主動拿起課外書，因為他知道自己「看得懂」了。',
    quote: '「以前看到長文就頭痛，現在反而期待解題的過程。原來國文也可以像解數學一樣有邏輯！」',
  },
  {
    category: '天賦開發',
    categoryColor: 'bg-violet-500',
    bgColor: 'bg-violet-50',
    name: '小芸同學',
    grade: '高二',
    avatar: '芸',
    before: '寫作無從下筆、篇幅短少',
    after: '高中文學獎得主',
    story: '小芸是個安靜內向的女孩，肚子裡有很多想法，但一拿起筆就不知道如何表達。每次作文寫不到一面就詞窮，段考作文分數總是拉低總成績。',
    journey: '老師發現小芸其實很有觀察力，只是不知道如何將觀察轉化為文字。透過引導式的寫作練習，從生活中的小事開始，讓她學會「看見」自己的故事。老師也花很多時間和她討論人生、討論她在乎的事，讓她的文字有了溫度和深度。',
    result: '一年後，小芸不只在段考作文拿到高分，更在校內文學獎中獲得肯定，從一個不敢寫作的女孩，變成了能用文字說故事的人。',
    quote: '「老師讓我發現，原來我的生活就是最好的素材。寫作不是掰出來的，是把真實的感受說出來。」',
  },
  {
    category: '心態重建',
    categoryColor: 'bg-blue-500',
    bgColor: 'bg-blue-50',
    name: '小宇同學',
    grade: '國三',
    avatar: '宇',
    before: '拒學、模擬考僅 C',
    after: '會考 B++、重拾信心',
    story: '小宇曾經是個活潑的孩子，但國中後因為持續的課業挫敗，漸漸變得封閉，最後甚至拒絕上學。模擬考只拿到 C，家長心急如焚，卻不知道該如何幫助他。',
    journey: '老師接手後，沒有急著補進度，而是先花時間理解小宇。每週固定的一對一時間，除了上課，也聊生活、聊困擾、聊他在意的事。老師成為了他和父母之間的溝通橋樑，幫助雙方理解彼此的立場。當小宇感受到被理解、被接納，他才慢慢願意再次面對課本。',
    result: '會考最終拿到 B++，雖然不是頂尖成績，但對小宇來說意義重大——他證明了自己「可以」。現在的他已經重回校園，對未來有了新的期待。',
    quote: '「老師是第一個不只看成績，而是真正想理解我的大人。謝謝老師沒有放棄我。」',
  },
  {
    category: '理科腦救星',
    categoryColor: 'bg-orange-500',
    bgColor: 'bg-orange-50',
    name: '阿傑同學',
    grade: '高三',
    avatar: '傑',
    before: '排斥寫作的理科生',
    after: '學測國寫感性題 20 分（滿分 25）',
    story: '阿傑是典型的理組學生，數學物理都難不倒他，但一碰到國文作文就完全束手無策。特別是感性題，他總覺得自己「沒有感覺」，不知道要寫什麼。',
    journey: '老師發現阿傑不是沒有感受，而是不知道如何用文字表達。於是採用「邏輯架構法」，教他用理科思維來組織感性內容：先確定「我要表達什麼」，再設計「如何鋪陳情境」，最後「怎麼收尾才有力」。用他熟悉的推理方式，解構感性寫作的密碼。',
    result: '學測國寫感性題拿下 20 分（滿分 25），是他自己都沒想過的成績。他終於明白，感性寫作不是靠天賦，而是可以透過方法學會的。',
    quote: '「原來感性寫作也可以很科學，不只是靠感覺。老師讓我用自己擅長的方式找到突破口。」',
  },
];

const stats = [
  { number: '500+', label: '成功案例', description: '持續累積中' },
  { number: '95%', label: '家長滿意度', description: '來自課後問卷' },
  { number: 'A++', label: '最高成就', description: '從及格邊緣起步' },
  { number: '3+', label: '平均進步等級', description: '持續追蹤數據' },
];

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero */}
      <Section background="navy">
        <div className="text-center py-12">
          <span className="inline-block px-4 py-1 bg-[var(--gold)] text-[var(--navy)] text-sm font-bold rounded-full mb-6">
            REAL STORIES
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--cream)] mb-4">
            學員見證
          </h1>
          <p className="text-xl text-[var(--cream)]/80 max-w-2xl mx-auto">
            每一個成功故事，都從「被理解」開始
            <br />
            這裡沒有奇蹟，只有用對方法的改變
          </p>
        </div>
      </Section>

      {/* Stats */}
      <Section background="white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[var(--navy)]">{stat.number}</div>
              <div className="text-[var(--gold)] font-semibold">{stat.label}</div>
              <div className="text-sm text-[var(--navy-light)]">{stat.description}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Featured Testimonials - Full Stories */}
      <Section background="cream">
        <SectionHeader
          title="四個不同的故事，相同的轉變"
          subtitle="無論起點在哪，都能找到屬於自己的成功"
        />

        <div className="space-y-12">
          {featuredTestimonials.map((item, index) => (
            <Card key={index} className={`${item.bgColor} border-none overflow-hidden`}>
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8">
                {/* Left Side - Profile */}
                <div className="text-center lg:text-left">
                  <span className={`inline-block px-4 py-1 ${item.categoryColor} text-white text-sm font-bold rounded-full mb-4`}>
                    {item.category}
                  </span>

                  <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
                    <div className="w-20 h-20 bg-[var(--navy)] rounded-full flex items-center justify-center text-[var(--gold)] text-3xl font-bold">
                      {item.avatar}
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-[var(--navy)] text-xl">{item.name}</div>
                      <div className="text-[var(--navy-light)]">{item.grade}</div>
                    </div>
                  </div>

                  {/* Progress Box */}
                  <div className="bg-white/80 rounded-xl p-4 mb-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs text-[var(--navy-light)] mb-1">Before</p>
                        <p className="font-bold text-red-500 text-sm">{item.before}</p>
                      </div>
                      <div>
                        <p className="text-xs text-[var(--navy-light)] mb-1">After</p>
                        <p className="font-bold text-emerald-500 text-sm">{item.after}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Story */}
                <div>
                  <h3 className="text-xl font-bold text-[var(--navy)] mb-4">故事背景</h3>
                  <p className="text-[var(--navy)]/80 mb-4 leading-relaxed">{item.story}</p>

                  <h3 className="text-xl font-bold text-[var(--navy)] mb-4">改變歷程</h3>
                  <p className="text-[var(--navy)]/80 mb-4 leading-relaxed">{item.journey}</p>

                  <h3 className="text-xl font-bold text-[var(--navy)] mb-4">最終成果</h3>
                  <p className="text-[var(--navy)]/80 mb-6 leading-relaxed">{item.result}</p>

                  <blockquote className="border-l-4 border-[var(--gold)] pl-4 py-2 bg-white/50 rounded-r-lg">
                    <p className="italic text-[var(--navy)]">{item.quote}</p>
                    <p className="text-sm text-[var(--navy-light)] mt-2">— {item.name}</p>
                  </blockquote>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Key Insight */}
      <Section background="white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--navy)] mb-6">
            為什麼這些改變能夠發生？
          </h2>
          <div className="space-y-4 text-left">
            <div className="flex items-start gap-4 p-4 bg-[var(--cream)] rounded-xl">
              <div className="w-8 h-8 bg-[var(--gold)] rounded-full flex items-center justify-center text-[var(--navy)] font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h4 className="font-bold text-[var(--navy)]">先理解，再教學</h4>
                <p className="text-[var(--navy-light)]">每個孩子都有自己的學習節奏。找出真正的問題所在，才能對症下藥。</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-[var(--cream)] rounded-xl">
              <div className="w-8 h-8 bg-[var(--gold)] rounded-full flex items-center justify-center text-[var(--navy)] font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h4 className="font-bold text-[var(--navy)]">方法可複製，不靠天賦</h4>
                <p className="text-[var(--navy-light)]">獨家「閱破劍法」將感性學習轉化為可操作的邏輯系統，人人都能學會。</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-[var(--cream)] rounded-xl">
              <div className="w-8 h-8 bg-[var(--gold)] rounded-full flex items-center justify-center text-[var(--navy)] font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h4 className="font-bold text-[var(--navy)]">不只教國文，更陪伴成長</h4>
                <p className="text-[var(--navy-light)]">成績只是結果，過程中建立的信心和方法，才是一輩子受用的資產。</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="navy">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[var(--cream)] mb-4">
            下一個成功故事，由你書寫
          </h2>
          <p className="text-[var(--cream)]/80 mb-8 max-w-xl mx-auto">
            無論你現在的程度如何，我們都能找到適合的方法。
            <br />
            第一步，讓我們先了解你。
          </p>
          <Button href="/diagnosis" variant="primary">
            預約免費診斷諮詢
          </Button>
        </div>
      </Section>
    </>
  );
}
