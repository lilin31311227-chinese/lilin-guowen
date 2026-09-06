import { ReactNode } from 'react';

interface MentorVoiceProps {
  children: ReactNode;
  label?: string;
  classicReference?: string;
  className?: string;
}

/**
 * 導師旁白塊 Mentor Voice
 *
 * v2.0 品牌核心元件：在傳統課文解析旁，由「人生導師」拋出與學生當下生命經驗
 * 連結的反思問題，將枯燥文本轉化為當代自我認同的哲學教材。
 *
 * 使用場景：講義側邊欄、心靈專欄、文章內嵌引導反思、社群圖卡。
 */
export default function MentorVoice({
  children,
  label = '導師的旁白',
  classicReference,
  className = '',
}: MentorVoiceProps) {
  return (
    <aside
      className={`mentor-voice ${className}`}
      role="complementary"
      aria-label={label}
    >
      <div className="text-[0.75rem] tracking-[0.15em] font-semibold text-[var(--mentor-terracotta)] mb-2">
        {label}
      </div>

      <div className="text-[var(--navy)] leading-[1.75]">
        {children}
      </div>

      {classicReference && (
        <div className="mt-3 pt-3 border-t border-[var(--mentor-terracotta)]/20 text-sm text-[var(--navy-light)]">
          —— 出自 {classicReference}
        </div>
      )}
    </aside>
  );
}
