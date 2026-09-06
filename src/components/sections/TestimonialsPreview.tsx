'use client';

import Section, { SectionHeader } from '@/components/ui/Section';
import Button from '@/components/ui/Button';

const testimonials = [
  {
    category: '逆轉勝',
    categoryColor: 'emerald',
    title: '從及格邊緣到 A++',
    name: '小明同學',
    grade: '國三',
    before: '段考及格邊緣',
    after: '會考 A++',
    story: '國二時段考總是在及格邊緣徘徊，對國文完全沒有信心。經過立霖老師一年半的引導，不只學會了閱讀理解的方法，更找回了對學習的熱情。',
    highlight: '「原來國文不是死背，而是有邏輯可循的。」',
  },
  {
    category: '天賦開發',
    categoryColor: 'violet',
    title: '從無從下筆到文學獎',
    name: '小芸同學',
    grade: '高二',
    before: '寫作篇幅短少',
    after: '高中文學獎',
    story: '原本看到作文題目就發愁，寫不到一面就詞窮。老師引導她將生活觀察轉化為文字，逐步建立自己的寫作風格，最終在校內文學獎獲得肯定。',
    highlight: '「老師讓我發現，原來我的生活就是最好的素材。」',
  },
  {
    category: '心態重建',
    categoryColor: 'blue',
    title: '拒學少年的重生之路',
    name: '小宇同學',
    grade: '國三',
    before: '模擬考 C / 拒學',
    after: '會考 B++',
    story: '曾經因為持續的挫敗感而拒絕上學，模擬考只拿到 C。老師沒有急著補進度，而是先花時間理解他、陪伴他，重建他對學習的信心。',
    highlight: '「老師是第一個不只看成績，而是真正理解我的大人。」',
  },
  {
    category: '理科腦救星',
    categoryColor: 'orange',
    title: '邏輯男孩的感性突破',
    name: '阿傑同學',
    grade: '高三',
    before: '排斥寫作',
    after: '國寫感性題 20 分',
    story: '身為理組學生，數理難不倒他，但一碰到作文就束手無策。老師教他用「邏輯架構」組織感性內容，將推理思維轉化為寫作優勢。學測國寫感性題拿下 20 分（滿分 25）。',
    highlight: '「原來感性寫作也可以很科學，不只是靠感覺。」',
  },
];

const categoryColors: Record<string, string> = {
  emerald: 'bg-emerald-500',
  violet: 'bg-violet-500',
  blue: 'bg-blue-500',
  orange: 'bg-orange-500',
};

const categoryBgColors: Record<string, string> = {
  emerald: 'bg-emerald-50',
  violet: 'bg-violet-50',
  blue: 'bg-blue-50',
  orange: 'bg-orange-50',
};

export default function TestimonialsPreview() {
  return (
    <Section background="cream" id="testimonials-preview">
      <SectionHeader
        title="真實故事，真實改變"
        subtitle="每一個成功，都從被理解開始"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12" role="list" aria-label="學員見證故事">
        {testimonials.map((item, index) => (
          <article
            key={index}
            role="listitem"
            className={`${categoryBgColors[item.categoryColor]} rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300`}
            aria-labelledby={`testimonial-title-${index}`}
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className={`inline-block px-3 py-1 ${categoryColors[item.categoryColor]} text-white text-xs font-bold rounded-full mb-2`}>
                  {item.category}
                </span>
                <h3 id={`testimonial-title-${index}`} className="text-xl font-bold text-[var(--navy)]">{item.title}</h3>
              </div>
              <div className="text-right">
                <p className="font-semibold text-[var(--navy)]">{item.name}</p>
                <p className="text-sm text-[var(--navy-light)]">{item.grade}</p>
              </div>
            </div>

            {/* Progress */}
            <div className="flex items-center gap-3 mb-4 p-3 bg-white/60 rounded-lg" role="presentation" aria-label={`進步歷程：從 ${item.before} 進步到 ${item.after}`}>
              <div className="flex-1 text-center">
                <p className="text-xs text-[var(--navy-light)]">Before</p>
                <p className="font-bold text-red-500">{item.before}</p>
              </div>
              <div className="text-[var(--gold)] text-xl font-bold" aria-hidden="true">→</div>
              <div className="flex-1 text-center">
                <p className="text-xs text-[var(--navy-light)]">After</p>
                <p className="font-bold text-emerald-500">{item.after}</p>
              </div>
            </div>

            {/* Story */}
            <p className="text-[var(--navy)]/80 text-sm leading-relaxed mb-4">
              {item.story}
            </p>

            {/* Quote */}
            <blockquote className="border-l-3 border-[var(--gold)] pl-3 text-sm italic text-[var(--navy-light)]">
              {item.highlight}
            </blockquote>
          </article>
        ))}
      </div>

      <div className="text-center">
        <Button href="/testimonials" variant="secondary">
          看更多學員故事
        </Button>
      </div>
    </Section>
  );
}
