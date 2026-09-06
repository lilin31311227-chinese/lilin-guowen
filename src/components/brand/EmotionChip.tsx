type EmotionType =
  | 'joy'         // 喜
  | 'calm'        // 安
  | 'melancholy'  // 鬱
  | 'anger'       // 慍
  | 'anxiety'     // 焦
  | 'grief'       // 哀
  | 'hope';       // 望

const EMOTION_META: Record<EmotionType, { label: string; classic: string; cssVar: string }> = {
  joy:        { label: '喜', classic: '欣然', cssVar: 'var(--emo-joy)' },
  calm:       { label: '安', classic: '從容', cssVar: 'var(--emo-calm)' },
  melancholy: { label: '鬱', classic: '惆悵', cssVar: 'var(--emo-melancholy)' },
  anger:      { label: '慍', classic: '不平', cssVar: 'var(--emo-anger)' },
  anxiety:    { label: '焦', classic: '懸宕', cssVar: 'var(--emo-anxiety)' },
  grief:      { label: '哀', classic: '黯然', cssVar: 'var(--emo-grief)' },
  hope:       { label: '望', classic: '懷想', cssVar: 'var(--emo-hope)' },
};

const ALL_EMOTIONS = Object.keys(EMOTION_META) as EmotionType[];

interface EmotionChipProps {
  type: EmotionType;
  showClassic?: boolean;
  className?: string;
}

/**
 * 述情詞彙標籤 Emotion Chip
 *
 * v2.0 品牌核心元件：解決青少年「述情障礙」，將「不爽 / 煩 / 鬱卒」等單一
 * 詞彙，擴充為文學中描寫細膩情感的字詞。賦予學生與家長進行深度溝通的語彙工具。
 *
 * 使用場景：情緒詞彙擴充教材、匿名信箱情緒選擇器、心情日誌。
 */
export default function EmotionChip({
  type,
  showClassic = true,
  className = '',
}: EmotionChipProps) {
  const meta = EMOTION_META[type];

  return (
    <span
      className={`emotion-chip ${className}`}
      style={{ color: meta.cssVar }}
      aria-label={showClassic ? `情緒：${meta.label}（${meta.classic}）` : `情緒：${meta.label}`}
    >
      <span className="font-semibold">{meta.label}</span>
      {showClassic && (
        <span className="text-xs opacity-80 ml-0.5">· {meta.classic}</span>
      )}
    </span>
  );
}

export type { EmotionType };
export { EMOTION_META, ALL_EMOTIONS };
