import Link from 'next/link';
import Image from 'next/image';
import { LINE_URL } from '@/lib/contact';
import LineIcon from '@/components/ui/LineIcon';

export default function Footer() {
  return (
    <footer className="bg-[var(--navy)] text-[var(--cream)]" role="contentinfo" aria-label="網站頁尾">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Image
                src="/lilin-guowen/images/lilin-logo.png"
                alt="立霖國文"
                width={140}
                height={40}
                className="h-9 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-[var(--cream)]/80 mb-4 max-w-md">
              人生沒有 Google，但有經典可循。
              <br />
              帶你讀懂文章邏輯，寫出生命厚度。
            </p>
            <p className="text-[var(--cream)]/60 text-sm">
              素養教學領航者 | 家長與學生之間的溝通橋樑
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-label="快速連結">
            <h3 className="text-[var(--gold)] font-semibold mb-4">快速連結</h3>
            <ul className="space-y-2" role="list">
              <li>
                <Link href="/for-students" className="text-[var(--cream)]/80 hover:text-[var(--gold)] transition-colors">
                  學生入口
                </Link>
              </li>
              <li>
                <Link href="/for-parents" className="text-[var(--cream)]/80 hover:text-[var(--gold)] transition-colors">
                  家長入口
                </Link>
              </li>
              <li>
                <Link href="/mentor-column" className="text-[var(--cream)]/80 hover:text-[var(--gold)] transition-colors">
                  心靈專欄
                </Link>
              </li>
              <li>
                <Link href="/activities" className="text-[var(--cream)]/80 hover:text-[var(--gold)] transition-colors">
                  體驗活動
                </Link>
              </li>
              <li>
                <Link href="/methodology" className="text-[var(--cream)]/80 hover:text-[var(--gold)] transition-colors">
                  教學方法
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-[var(--cream)]/80 hover:text-[var(--gold)] transition-colors">
                  學員見證
                </Link>
              </li>
              <li>
                <Link href="/exam-strategy" className="text-[var(--cream)]/80 hover:text-[var(--gold)] transition-colors">
                  考試資訊
                </Link>
              </li>
              <li>
                <Link href="/diagnosis" className="text-[var(--cream)]/80 hover:text-[var(--gold)] transition-colors">
                  免費診斷諮詢
                </Link>
              </li>
              <li className="pt-2 mt-2 border-t border-[var(--cream)]/15">
                <Link href="/design-system" className="text-[var(--cream)]/50 text-xs hover:text-[var(--gold)] transition-colors">
                  品牌設計系統 ›
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-[var(--gold)] font-semibold mb-4">聯絡諮詢</h3>
            <ul className="space-y-3 text-[var(--cream)]/80" role="list" aria-label="聯絡方式">
              <li>
                <a
                  href={LINE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[var(--gold)] transition-colors"
                  aria-label="加 LINE 諮詢立霖國文"
                >
                  <LineIcon className="w-5 h-5" />
                  <span>LINE 諮詢</span>
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>新竹（實體）／全台（線上）</span>
              </li>
              <li>
                <Link
                  href="/diagnosis"
                  className="inline-flex items-center gap-2 hover:text-[var(--gold)] transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <span>免費診斷表單</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[var(--cream)]/20 mt-8 pt-8 text-center text-[var(--cream)]/60 text-sm">
          <p>&copy; {new Date().getFullYear()} 立霖國文. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
