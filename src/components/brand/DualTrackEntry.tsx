import Link from 'next/link';

interface DualTrackEntryProps {
  studentHref?: string;
  parentHref?: string;
  className?: string;
}

/**
 * 雙軌動線入口 Dual-Track Entry
 *
 * v2.0 品牌核心元件：在首頁透過極簡且溫暖的視覺引導語，將使用者明確分流為
 * 「學生」與「家長」兩大需求迥異的群體，各自進入專屬資訊架構。
 *
 * 使用場景：網站首頁 Hero 下方、LINE 加入好友後初始問卷介面、登入頁。
 */
export default function DualTrackEntry({
  studentHref = '/methodology',
  parentHref = '/diagnosis',
  className = '',
}: DualTrackEntryProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${className}`}>
      {/* 學生端：探索 / 陪伴 / 解惑 */}
      <Link
        href={studentHref}
        className="dual-track-card dual-track-card--student group block"
        aria-label="學生入口 - 探索文學與生命的連結"
      >
        <span className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-white/60 backdrop-blur-sm text-xs font-semibold text-[var(--bridge-teal)] tracking-wider">
          <span className="w-2 h-2 rounded-full bg-[var(--bridge-teal)]" aria-hidden="true" />
          學生入口
        </span>

        <h3 className="text-2xl font-bold text-[var(--navy)] mb-3">
          探索 · 陪伴 · 解惑
        </h3>
        <p className="text-[var(--navy-light)] leading-[1.75] mb-6">
          分數只是檢驗知識的過程，<br />
          你擁有什麼樣的人生才是最終的目的。
        </p>

        <ul className="space-y-2 text-sm text-[var(--navy)]">
          <li className="flex items-center gap-2">
            <span className="text-[var(--bridge-teal)]">→</span>
            文學故事的現代改寫
          </li>
          <li className="flex items-center gap-2">
            <span className="text-[var(--bridge-teal)]">→</span>
            學長姐升學壓力真實心聲
          </li>
          <li className="flex items-center gap-2">
            <span className="text-[var(--bridge-teal)]">→</span>
            高度隱私的匿名心事信箱
          </li>
        </ul>

        <span className="inline-block mt-6 text-sm font-semibold text-[var(--bridge-teal)] group-hover:translate-x-1 transition-transform">
          進入學生專區 ›
        </span>
      </Link>

      {/* 家長端：理解 / 支持 / 教養 */}
      <Link
        href={parentHref}
        className="dual-track-card dual-track-card--parent group block"
        aria-label="家長入口 - 理解青春期與青少年發展"
      >
        <span className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-white/70 backdrop-blur-sm text-xs font-semibold text-[var(--mentor-terracotta)] tracking-wider">
          <span className="w-2 h-2 rounded-full bg-[var(--mentor-terracotta)]" aria-hidden="true" />
          家長入口
        </span>

        <h3 className="text-2xl font-bold text-[var(--navy)] mb-3">
          理解 · 支持 · 教養
        </h3>
        <p className="text-[var(--navy-light)] leading-[1.75] mb-6">
          那些不知如何開口的關心，<br />
          讓文學的溫柔替您說。
        </p>

        <ul className="space-y-2 text-sm text-[var(--navy)]">
          <li className="flex items-center gap-2">
            <span className="text-[var(--mentor-terracotta)]">→</span>
            青春期發展心理學文章
          </li>
          <li className="flex items-center gap-2">
            <span className="text-[var(--mentor-terracotta)]">→</span>
            非暴力溝通技巧解析
          </li>
          <li className="flex items-center gap-2">
            <span className="text-[var(--mentor-terracotta)]">→</span>
            課堂觀察與情緒反饋
          </li>
        </ul>

        <span className="inline-block mt-6 text-sm font-semibold text-[var(--mentor-terracotta)] group-hover:translate-x-1 transition-transform">
          進入家長專區 ›
        </span>
      </Link>
    </div>
  );
}
