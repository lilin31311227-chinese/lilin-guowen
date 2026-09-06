'use client';

import { LINE_URL } from '@/lib/contact';
import LineIcon from './LineIcon';

export default function LineFloatingButton() {
  return (
    <a
      href={LINE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="加 LINE 諮詢立霖國文"
      className="hidden sm:flex fixed right-6 bottom-6 z-40 items-center gap-2 bg-[var(--line-green)] hover:bg-[var(--line-green-dark)] text-white pl-4 pr-5 py-3 rounded-full shadow-xl shadow-emerald-900/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-2xl"
    >
      <LineIcon />
      <span className="font-semibold text-sm">LINE 諮詢</span>
    </a>
  );
}
