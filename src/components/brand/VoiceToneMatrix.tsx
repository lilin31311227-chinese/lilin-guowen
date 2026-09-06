interface VoiceToneItem {
  scene: string;
  good: string;
  bad: string;
}

interface VoiceToneMatrixProps {
  audience: 'student' | 'parent';
  items: VoiceToneItem[];
  className?: string;
}

/**
 * 語氣對照表 Voice & Tone Matrix
 *
 * v2.0 品牌核心元件：實踐「從販賣焦慮到提供解方」的典範轉移，分眾呈現
 * 學生端「平起平坐的對話者」與家長端「理解與卸責」的語氣準則。
 *
 * 使用場景：品牌指南頁、新進師資培訓、社群文案審核 SOP。
 */
export default function VoiceToneMatrix({
  audience,
  items,
  className = '',
}: VoiceToneMatrixProps) {
  const isStudent = audience === 'student';
  const accentColor = isStudent
    ? 'var(--bridge-teal)'
    : 'var(--mentor-terracotta)';
  const accentBg = isStudent ? 'var(--bridge-mist)' : 'var(--mentor-sunrise)';

  return (
    <div className={`${className}`}>
      <header className="flex items-center gap-3 mb-5">
        <span
          className="inline-block w-1 h-6 rounded-full"
          style={{ background: accentColor }}
          aria-hidden="true"
        />
        <h3 className="text-xl font-bold text-[var(--navy)]">
          {isStudent ? '對學生：平起平坐的對話者' : '對家長：理解與卸責的支持者'}
        </h3>
      </header>

      <div className="overflow-hidden rounded-xl border border-[var(--navy)]/10">
        <table className="w-full text-sm">
          <thead style={{ background: accentBg }}>
            <tr>
              <th className="px-4 py-3 text-left font-semibold text-[var(--navy)] w-1/4">
                場景
              </th>
              <th className="px-4 py-3 text-left font-semibold" style={{ color: accentColor }}>
                <span aria-hidden="true">✅ </span>這樣寫
              </th>
              <th className="px-4 py-3 text-left font-semibold text-[var(--navy-light)]">
                <span aria-hidden="true">❌ </span>避免
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {items.map((item, idx) => (
              <tr
                key={idx}
                className="border-t border-[var(--navy)]/8 align-top"
              >
                <td className="px-4 py-3 font-medium text-[var(--navy)]">{item.scene}</td>
                <td className="px-4 py-3 text-[var(--navy)] leading-relaxed">{item.good}</td>
                <td className="px-4 py-3 text-[var(--navy-light)] leading-relaxed line-through opacity-70">
                  {item.bad}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export type { VoiceToneItem };
