import { ReactNode } from 'react';

interface FamilyBridgeCardProps {
  teacherName: string;
  observationDate: string;
  studentContext: string;
  parentSuggestion: string;
  classicConnection?: string;
  className?: string;
}

/**
 * 親情橋樑互動卡 Family Bridge Card
 *
 * v2.0 品牌核心元件：教師在會員後台發送的「課堂觀察反饋」，將課堂上引發的
 * 文學反思與情感共鳴，轉化為家庭餐桌上的對話契機。
 *
 * 使用場景：家長端互動門戶、Email 月報、LINE 推播家長端。
 */
export default function FamilyBridgeCard({
  teacherName,
  observationDate,
  studentContext,
  parentSuggestion,
  classicConnection,
  className = '',
}: FamilyBridgeCardProps) {
  return (
    <article
      className={`bridge-card ${className}`}
      aria-label="課堂觀察反饋"
    >
      <header className="flex items-center justify-between mb-4 mt-1">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-[var(--bridge-teal)]" aria-hidden="true" />
          <span className="text-xs tracking-wider font-semibold text-[var(--bridge-teal)]">
            親情橋樑 · 課堂觀察
          </span>
        </div>
        <time className="text-xs text-[var(--navy-light)]">{observationDate}</time>
      </header>

      <div className="space-y-3">
        <p className="text-sm leading-[1.75] text-[var(--navy)]">
          <span className="font-semibold text-[var(--bridge-teal)]">今日課堂：</span>
          {studentContext}
        </p>

        {classicConnection && (
          <p className="text-sm leading-[1.75] text-[var(--navy-light)] italic border-l-2 border-[var(--bridge-sage)] pl-3">
            連結文本：{classicConnection}
          </p>
        )}

        <p className="text-sm leading-[1.75] text-[var(--navy)]">
          <span className="font-semibold text-[var(--mentor-terracotta)]">給家長的建議：</span>
          {parentSuggestion}
        </p>
      </div>

      <footer className="mt-5 pt-4 border-t border-[var(--bridge-teal)]/15 flex justify-between items-center text-xs">
        <span className="text-[var(--navy-light)]">{teacherName} 老師</span>
        <span className="text-[var(--bridge-teal)] font-medium">立霖國文 · 橋樑互動</span>
      </footer>
    </article>
  );
}
