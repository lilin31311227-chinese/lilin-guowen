'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const navLinks = [
  { href: '/for-students', label: '學生入口' },
  { href: '/for-parents', label: '家長入口' },
  { href: '/mentor-column', label: '心靈專欄' },
  { href: '/activities', label: '體驗活動' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-[var(--cream)]/95 backdrop-blur-sm border-b border-[var(--navy)]/10"
      role="navigation"
      aria-label="主要導航"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center py-2" aria-label="立霖國文 - 回到首頁">
            <Image
              src="/lilin-guowen/images/lilin-logo.png"
              alt="立霖國文"
              width={160}
              height={44}
              className="h-10 sm:h-11 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8" role="menubar">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[var(--navy)] hover:text-[var(--gold)] transition-colors font-medium"
                role="menuitem"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/diagnosis"
              className="btn-primary"
              role="menuitem"
            >
              免費診斷
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-[var(--navy)]"
            aria-label={isMenuOpen ? "關閉選單" : "開啟選單"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-menu"
          className={`md:hidden py-4 border-t border-[var(--navy)]/10 ${isMenuOpen ? 'block' : 'hidden'}`}
          role="menu"
          aria-hidden={!isMenuOpen}
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[var(--navy)] hover:text-[var(--gold)] transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
                role="menuitem"
                tabIndex={isMenuOpen ? 0 : -1}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/diagnosis"
              className="btn-primary text-center"
              onClick={() => setIsMenuOpen(false)}
              role="menuitem"
              tabIndex={isMenuOpen ? 0 : -1}
            >
              免費診斷
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
