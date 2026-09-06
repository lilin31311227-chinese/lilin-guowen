import { ReactNode } from 'react';

type SenseType = 'sight' | 'sound' | 'smell' | 'taste' | 'touch';

const SENSE_META: Record<SenseType, { label: string; emoji: string; cssVar: string }> = {
  sight: { label: '視', emoji: '◐', cssVar: 'var(--sense-sight)' },
  sound: { label: '聽', emoji: '◑', cssVar: 'var(--sense-sound)' },
  smell: { label: '嗅', emoji: '◒', cssVar: 'var(--sense-smell)' },
  taste: { label: '味', emoji: '◓', cssVar: 'var(--sense-taste)' },
  touch: { label: '觸', emoji: '○', cssVar: 'var(--sense-touch)' },
};

interface ExperienceCardProps {
  title: string;
  subtitle: string;
  duration: string;
  capacity: string;
  price: string;
  senses: SenseType[];
  description: ReactNode;
  classicQuote?: { text: string; source: string };
  className?: string;
}

/**
 * 體驗活動卡 Sensory Experience Card
 *
 * v2.0 品牌核心元件：呈現「自然 · 輕觸之旅」、「動身體 樂溝通」等線下深度
 * 體驗活動。以五感（視 / 聽 / 嗅 / 味 / 觸）標示活動感官焦點，將靜態的文學
 * 哲理實體轉化為動態的自我覺察與家庭關係修復行動。
 *
 * 使用場景：活動報名頁、社群推廣圖卡、家長端電子報。
 */
export default function ExperienceCard({
  title,
  subtitle,
  duration,
  capacity,
  price,
  senses,
  description,
  classicQuote,
  className = '',
}: ExperienceCardProps) {
  return (
    <article className={`experience-card ${className}`}>
      <div className="bg-gradient-to-br from-[var(--mentor-sunrise)] via-[var(--mentor-clay)] to-[var(--bridge-mist)] px-6 pt-6 pb-5">
        <div className="flex items-center gap-1.5 mb-3" aria-label="五感標籤">
          {senses.map((s) => {
            const meta = SENSE_META[s];
            return (
              <span
                key={s}
                className="inline-flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-full bg-white/70 backdrop-blur-sm"
                style={{ color: meta.cssVar }}
                aria-label={`感官焦點：${meta.label}`}
                title={meta.label}
              >
                <span aria-hidden="true">{meta.emoji}</span>
                {meta.label}
              </span>
            );
          })}
        </div>

        <h3 className="text-2xl font-bold text-[var(--navy)] leading-tight">{title}</h3>
        <p className="text-sm text-[var(--navy-light)] mt-1">{subtitle}</p>
      </div>

      <div className="px-6 py-5">
        <div className="grid grid-cols-3 gap-2 mb-4 text-center">
          <div className="bg-[var(--cream-soft)] rounded-lg py-2">
            <div className="text-[0.65rem] text-[var(--navy-light)] tracking-wider">時長</div>
            <div className="text-sm font-bold text-[var(--navy)] mt-0.5">{duration}</div>
          </div>
          <div className="bg-[var(--cream-soft)] rounded-lg py-2">
            <div className="text-[0.65rem] text-[var(--navy-light)] tracking-wider">名額</div>
            <div className="text-sm font-bold text-[var(--navy)] mt-0.5">{capacity}</div>
          </div>
          <div className="bg-[var(--cream-soft)] rounded-lg py-2">
            <div className="text-[0.65rem] text-[var(--navy-light)] tracking-wider">費用</div>
            <div className="text-sm font-bold text-[var(--navy)] mt-0.5">{price}</div>
          </div>
        </div>

        <div className="text-sm leading-[1.75] text-[var(--navy)]">
          {description}
        </div>

        {classicQuote && (
          <blockquote className="mt-4 pt-4 border-t border-[var(--gold)]/30 text-sm italic text-[var(--navy-light)]">
            「{classicQuote.text}」
            <cite className="block text-xs text-[var(--mentor-terracotta)] mt-1 not-italic">
              —— {classicQuote.source}
            </cite>
          </blockquote>
        )}
      </div>
    </article>
  );
}

export type { SenseType };
