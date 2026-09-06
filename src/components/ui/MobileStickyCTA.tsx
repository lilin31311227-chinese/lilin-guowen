'use client';

import Link from 'next/link';
import { LINE_URL } from '@/lib/contact';
import LineIcon from './LineIcon';

export default function MobileStickyCTA() {
  return (
    <div
      className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[var(--cream)]/95 backdrop-blur-md border-t border-[var(--navy)]/10 px-3 py-2.5"
      role="region"
      aria-label="行動裝置快速操作"
    >
      <div className="flex gap-2">
        <a
          href={LINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 bg-[var(--line-green)] text-white py-3 rounded-lg font-semibold text-sm shadow-md"
          aria-label="加 LINE 諮詢"
        >
          <LineIcon className="w-5 h-5" />
          LINE 諮詢
        </a>
        <Link
          href="/diagnosis"
          className="flex-1 flex items-center justify-center bg-[var(--gold)] text-[var(--navy-dark)] py-3 rounded-lg font-semibold text-sm shadow-md"
          aria-label="預約免費學習診斷"
        >
          免費診斷
        </Link>
      </div>
    </div>
  );
}
