import { ReactNode } from 'react';

interface DialoguePromptProps {
  weekTopic: string;
  prompt: ReactNode;
  observationGuideline?: string;
  className?: string;
}

/**
 * 親子討論題卡 Dialogue Prompt
 *
 * v2.0 品牌核心元件：將「家庭聯絡簿」改造為「互動式親子交流日誌」。
 * 每週結合課文進度與生活經驗，設計開放式討論題，強迫且溫和地促使家庭成員
 * 正視彼此的付出與情感。
 *
 * 使用場景：講義最後一頁、聯絡簿、家長 LINE 週末破冰話題。
 */
export default function DialoguePrompt({
  weekTopic,
  prompt,
  observationGuideline,
  className = '',
}: DialoguePromptProps) {
  return (
    <div className={`dialogue-prompt ${className}`} role="region" aria-label="親子討論題">
      <div className="mb-2 pt-1">
        <span className="text-[0.7rem] tracking-[0.15em] font-semibold text-[var(--mentor-terracotta)]">
          本週親子討論題
        </span>
        <h4 className="text-base font-bold text-[var(--navy)] mt-1">{weekTopic}</h4>
      </div>

      <div className="text-[var(--navy)] leading-[1.75] mt-3">
        {prompt}
      </div>

      {observationGuideline && (
        <div className="mt-4 text-sm text-[var(--navy-light)] bg-[var(--mentor-sunrise)]/60 rounded-lg px-3 py-2">
          <span className="font-semibold text-[var(--mentor-terracotta)]">引導提示：</span>
          {observationGuideline}
        </div>
      )}
    </div>
  );
}
