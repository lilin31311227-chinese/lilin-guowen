'use client';

import Button from '@/components/ui/Button';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0A1A35]"
      aria-label="首頁主視覺區"
    >
      {/* Deep blue gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A1A35] via-[#0d2341] to-[#071428]" aria-hidden="true" />

      {/* Magical ambient light effects */}
      <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-gradient-radial from-amber-500/10 via-amber-400/5 to-transparent rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-gradient-radial from-blue-500/10 via-blue-400/5 to-transparent rounded-full blur-3xl" aria-hidden="true" />

      {/* Decorative elements - hidden from screen readers */}
      <div aria-hidden="true">
        {/* Xiangyun (Auspicious Clouds) Pattern - Top */}
        <div className="absolute top-20 left-10 opacity-20">
          <svg width="120" height="80" viewBox="0 0 120 80" fill="none" className="text-amber-400">
            <path d="M20 60C20 60 25 40 45 40C65 40 60 55 80 55C100 55 100 35 100 35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M10 70C10 70 20 50 40 55C60 60 70 45 90 50" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.6"/>
          </svg>
        </div>

        {/* Xiangyun - Bottom Left */}
        <div className="absolute bottom-32 left-20 opacity-15">
          <svg width="150" height="100" viewBox="0 0 150 100" fill="none" className="text-amber-300">
            <path d="M10 70C10 70 30 30 60 50C90 70 100 40 130 50" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M20 85C20 85 50 60 80 70C110 80 120 55 140 60" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
          </svg>
        </div>

        {/* Floating Ancient Book - Top Right */}
        <div className="absolute top-32 right-[15%] opacity-25 animate-float-slow">
          <svg width="60" height="50" viewBox="0 0 60 50" fill="none" className="text-amber-400">
            <path d="M5 10L30 5L55 10V45L30 40L5 45V10Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            <path d="M30 5V40" stroke="currentColor" strokeWidth="1"/>
            <path d="M12 15H25" stroke="currentColor" strokeWidth="0.75" opacity="0.6"/>
            <path d="M12 20H22" stroke="currentColor" strokeWidth="0.75" opacity="0.6"/>
            <path d="M35 15H48" stroke="currentColor" strokeWidth="0.75" opacity="0.6"/>
            <path d="M35 20H45" stroke="currentColor" strokeWidth="0.75" opacity="0.6"/>
          </svg>
        </div>

        {/* Floating Parchment - Left */}
        <div className="absolute top-1/2 left-[8%] opacity-20 animate-float-medium">
          <svg width="40" height="55" viewBox="0 0 40 55" fill="none" className="text-amber-300 rotate-12">
            <path d="M5 5C5 5 8 3 20 3C32 3 35 5 35 5V50C35 50 32 52 20 52C8 52 5 50 5 50V5Z" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M10 15H30" stroke="currentColor" strokeWidth="0.75" opacity="0.5"/>
            <path d="M10 22H28" stroke="currentColor" strokeWidth="0.75" opacity="0.5"/>
            <path d="M10 29H25" stroke="currentColor" strokeWidth="0.75" opacity="0.5"/>
            <path d="M10 36H27" stroke="currentColor" strokeWidth="0.75" opacity="0.5"/>
          </svg>
        </div>

        {/* Floating Parchment - Right */}
        <div className="absolute bottom-1/3 right-[8%] opacity-15 animate-float-slow -rotate-6">
          <svg width="35" height="48" viewBox="0 0 35 48" fill="none" className="text-amber-400">
            <path d="M3 4C3 4 6 2 17.5 2C29 2 32 4 32 4V44C32 44 29 46 17.5 46C6 46 3 44 3 44V4Z" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M8 12H27" stroke="currentColor" strokeWidth="0.75" opacity="0.5"/>
            <path d="M8 18H24" stroke="currentColor" strokeWidth="0.75" opacity="0.5"/>
            <path d="M8 24H22" stroke="currentColor" strokeWidth="0.75" opacity="0.5"/>
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Content - Left Side */}
          <div className="relative z-10 text-center lg:text-left order-2 lg:order-1">

            {/* Trust Badge with gold accent */}
            <div className="inline-flex items-center gap-2.5 bg-amber-400/10 border border-amber-400/30 backdrop-blur-sm px-4 py-2 rounded-full mb-8" role="status">
              <div className="flex items-center justify-center w-5 h-5 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full" aria-hidden="true">
                <svg className="w-3 h-3 text-[#0A1A35]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-amber-200 text-sm font-medium">素養教學領航者 · 家長與孩子的溝通橋樑</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.15] mb-6 tracking-tight">
              不只提升分數
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-300">
                更引導人生方向
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              「人生沒有 Google，但有經典可循。」
              <br className="hidden sm:block" />
              結合考試技巧與素養教育，讓國文成為孩子一生受用的思考武器。
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10" role="group" aria-label="行動呼籲按鈕">
              <Button
                href="/diagnosis"
                variant="primary"
                className="text-center px-8 py-4 text-base font-semibold !bg-gradient-to-r !from-amber-400 !to-amber-500 !text-[#0A1A35] shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 hover:-translate-y-0.5 transition-all duration-200"
              >
                預約免費診斷諮詢
                <svg className="w-5 h-5 ml-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
              <Button
                href="/testimonials"
                variant="secondary"
                className="text-center px-8 py-4 text-base font-medium !border-amber-400/40 !text-amber-200 !bg-transparent hover:!bg-amber-400/10 hover:!border-amber-400/60 transition-all duration-200"
              >
                看看學員怎麼說
              </Button>
            </div>

            {/* Trust Metrics */}
            <div className="flex flex-wrap gap-x-8 gap-y-4 justify-center lg:justify-start" role="list" aria-label="教學特色">
              <div className="flex items-center gap-3 group cursor-default" role="listitem">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400/20 to-amber-500/20 border border-amber-400/30 flex items-center justify-center" aria-hidden="true">
                  <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <p className="text-base font-bold text-white">閱破劍法</p>
                  <p className="text-sm text-slate-400">獨家邏輯化閱讀理解</p>
                </div>
              </div>
              <div className="flex items-center gap-3 group cursor-default" role="listitem">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400/20 to-emerald-500/20 border border-emerald-400/30 flex items-center justify-center" aria-hidden="true">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-base font-bold text-white">一對一</p>
                  <p className="text-sm text-slate-400">個人化精準教學</p>
                </div>
              </div>
              <div className="flex items-center gap-3 group cursor-default" role="listitem">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400/20 to-blue-500/20 border border-blue-400/30 flex items-center justify-center" aria-hidden="true">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-base font-bold text-white">實體 ＋ 線上</p>
                  <p className="text-sm text-slate-400">新竹／全台 Google Meet</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Section - Right Side with Enhanced Golden Armillary Sphere */}
          <div className="relative flex justify-center items-center order-1 lg:order-2" aria-hidden="true">
            <div className="relative w-full max-w-md lg:max-w-lg">

              {/* ========== ENHANCED ARMILLARY SPHERE (渾天儀) ========== */}

              {/* Outer Glow Ring - Pulsing */}
              <div className="absolute inset-[-25%] animate-spin-very-slow">
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  <defs>
                    <linearGradient id="goldGradientOuter" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.4"/>
                      <stop offset="50%" stopColor="#FBBF24" stopOpacity="0.8"/>
                      <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.4"/>
                    </linearGradient>
                    <filter id="glowStrong">
                      <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                    <filter id="glowSoft">
                      <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  <circle cx="200" cy="200" r="190" fill="none" stroke="url(#goldGradientOuter)" strokeWidth="1" filter="url(#glowSoft)" opacity="0.5" strokeDasharray="20 10"/>
                </svg>
              </div>

              {/* Main Outer Ring */}
              <div className="absolute inset-[-18%] animate-spin-very-slow">
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  <defs>
                    <linearGradient id="goldGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.9"/>
                      <stop offset="50%" stopColor="#FBBF24" stopOpacity="1"/>
                      <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.9"/>
                    </linearGradient>
                  </defs>
                  <ellipse cx="200" cy="200" rx="175" ry="175" fill="none" stroke="url(#goldGradient1)" strokeWidth="2" filter="url(#glowStrong)" opacity="0.7"/>
                </svg>
              </div>

              {/* Middle Tilted Ring - Reverse Rotation */}
              <div className="absolute inset-[-8%] animate-spin-slow-reverse">
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  <defs>
                    <linearGradient id="goldGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.7"/>
                      <stop offset="50%" stopColor="#FCD34D" stopOpacity="1"/>
                      <stop offset="100%" stopColor="#FBBF24" stopOpacity="0.7"/>
                    </linearGradient>
                  </defs>
                  <ellipse cx="200" cy="200" rx="155" ry="70" fill="none" stroke="url(#goldGradient2)" strokeWidth="2.5" filter="url(#glowStrong)" transform="rotate(-25, 200, 200)"/>
                </svg>
              </div>

              {/* Inner Tilted Ring - Opposite Direction */}
              <div className="absolute inset-[2%] animate-spin-medium">
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  <defs>
                    <linearGradient id="goldGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.8"/>
                      <stop offset="50%" stopColor="#FBBF24" stopOpacity="1"/>
                      <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.8"/>
                    </linearGradient>
                  </defs>
                  <ellipse cx="200" cy="200" rx="135" ry="55" fill="none" stroke="url(#goldGradient3)" strokeWidth="2.5" filter="url(#glowStrong)" transform="rotate(40, 200, 200)"/>
                </svg>
              </div>

              {/* Vertical Ring */}
              <div className="absolute inset-[5%] animate-spin-very-slow" style={{ animationDirection: 'reverse' }}>
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  <ellipse cx="200" cy="200" rx="18" ry="160" fill="none" stroke="url(#goldGradient2)" strokeWidth="1.5" filter="url(#glowSoft)" opacity="0.6"/>
                </svg>
              </div>

              {/* Horizontal Accent Ring */}
              <div className="absolute inset-[8%]">
                <svg viewBox="0 0 400 400" className="w-full h-full animate-pulse-slow">
                  <ellipse cx="200" cy="200" rx="150" ry="15" fill="none" stroke="url(#goldGradient1)" strokeWidth="1" filter="url(#glowSoft)" opacity="0.4"/>
                </svg>
              </div>

              {/* Center Core Glow */}
              <div className="absolute inset-[25%] bg-gradient-radial from-amber-400/25 via-amber-500/10 to-transparent rounded-full blur-2xl animate-pulse-slow" />

              {/* Floating Golden Particles - Enhanced */}
              <div className="absolute top-[12%] left-[18%] w-2.5 h-2.5 bg-amber-400 rounded-full animate-pulse-slow opacity-70 blur-[1px]" />
              <div className="absolute top-[22%] right-[12%] w-2 h-2 bg-yellow-300 rounded-full animate-pulse-medium opacity-80 blur-[1px]" />
              <div className="absolute bottom-[28%] left-[12%] w-1.5 h-1.5 bg-amber-300 rounded-full animate-pulse-slow opacity-60 blur-[0.5px]" />
              <div className="absolute bottom-[18%] right-[22%] w-2.5 h-2.5 bg-amber-400 rounded-full animate-pulse-medium opacity-70 blur-[1px]" />
              <div className="absolute top-[40%] left-[8%] w-1 h-1 bg-yellow-400 rounded-full animate-pulse-medium opacity-50" />
              <div className="absolute bottom-[40%] right-[8%] w-1.5 h-1.5 bg-amber-300 rounded-full animate-pulse-slow opacity-55" />

              {/* ========== TEACHER IMAGE CONTAINER ========== */}
              <div className="relative flex justify-center items-end min-h-[380px] sm:min-h-[440px] lg:min-h-[520px]" aria-hidden="false">
                {/* Golden Halo Glow */}
                <div
                  className="absolute left-1/2 -translate-x-1/2 bottom-[5%] w-[75%] h-[85%] rounded-full blur-3xl z-[1]"
                  style={{
                    background: 'radial-gradient(circle, rgba(251,191,36,0.25) 0%, rgba(245,158,11,0.1) 50%, transparent 100%)',
                  }}
                  aria-hidden="true"
                />
                <picture>
                  <source
                    media="(max-width: 640px)"
                    srcSet="/lilin-guowen/images/teacher-portrait-mobile.webp"
                    type="image/webp"
                  />
                  <source srcSet="/lilin-guowen/images/teacher-portrait.webp" type="image/webp" />
                  <Image
                    src="/lilin-guowen/images/teacher-portrait-fallback.png"
                    alt="立霖老師形象照 - 專業國文家教老師，擅長素養教學與考試技巧"
                    width={420}
                    height={520}
                    className="object-contain object-bottom relative z-10 max-h-[360px] sm:max-h-[420px] lg:max-h-[500px]"
                    style={{
                      filter: 'drop-shadow(0 0 30px rgba(251,191,36,0.3)) drop-shadow(0 10px 40px rgba(0,0,0,0.4))',
                    }}
                    priority
                  />
                </picture>
              </div>

              {/* Name Plate with Oriental Design */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20">
                <div className="relative">
                  <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-6 h-[1px] bg-gradient-to-r from-transparent to-amber-400/60" />
                  <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-6 h-[1px] bg-gradient-to-l from-transparent to-amber-400/60" />
                  <div className="bg-[#0A1A35]/90 backdrop-blur-sm border border-amber-400/40 rounded-lg px-6 py-2.5 shadow-lg shadow-amber-500/10">
                    <p className="text-amber-300 font-bold tracking-wider">立霖老師</p>
                  </div>
                </div>
              </div>

              {/* ========== FLOATING SKILL CARDS - REDESIGNED WITH DISTINCT COLORS ========== */}

              {/* 閱讀理解 - Blue Theme (Logic & Analysis) */}
              <div className="absolute left-0 sm:-left-8 top-[25%] z-30 hidden sm:block">
                <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 backdrop-blur-sm border border-blue-400/40 rounded-xl p-2.5 sm:p-4 shadow-lg shadow-blue-500/20 cursor-pointer transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:border-blue-400/60 hover:shadow-blue-500/30">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center shadow-md shadow-blue-500/30">
                      <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-blue-200 font-bold text-xs sm:text-sm">閱讀理解</p>
                      <p className="text-blue-300/60 text-xs hidden sm:block">邏輯思考訓練</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 寫作表達 - Emerald Theme (Creativity & Growth) - 半透明風格 */}
              <div className="absolute right-0 sm:-right-6 top-[15%] z-30 hidden sm:block">
                <div className="bg-gradient-to-br from-emerald-500/20 to-teal-600/10 backdrop-blur-sm border border-emerald-400/40 rounded-xl p-2.5 sm:p-4 shadow-lg shadow-emerald-500/20 cursor-pointer transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:border-emerald-400/60 hover:shadow-emerald-500/30">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-md shadow-emerald-500/30">
                      <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-emerald-200 font-bold text-xs sm:text-sm">寫作表達</p>
                      <p className="text-emerald-300/60 text-xs hidden sm:block">創意思維培養</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 古文素養 - Purple/Violet Theme (Wisdom & Classics) */}
              <div className="absolute right-0 sm:-right-8 bottom-[32%] z-30 hidden sm:block">
                <div className="bg-gradient-to-br from-violet-500/20 to-purple-600/10 backdrop-blur-sm border border-violet-400/40 rounded-xl p-2.5 sm:p-4 shadow-lg shadow-violet-500/20 cursor-pointer transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:border-violet-400/60 hover:shadow-violet-500/30">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg bg-gradient-to-br from-violet-400 to-purple-500 flex items-center justify-center shadow-md shadow-violet-500/30">
                      <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-violet-200 font-bold text-xs sm:text-sm">古文素養</p>
                      <p className="text-violet-300/60 text-xs hidden sm:block">經典智慧傳承</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 考試策略 - Orange/Amber Theme (Strategy & Action) */}
              <div className="absolute left-0 sm:-left-6 bottom-[22%] z-30 hidden sm:block">
                <div className="bg-gradient-to-br from-orange-500/20 to-amber-600/10 backdrop-blur-sm border border-orange-400/40 rounded-xl p-2.5 sm:p-4 shadow-lg shadow-orange-500/20 cursor-pointer transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:border-orange-400/60 hover:shadow-orange-500/30">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center shadow-md shadow-orange-500/30">
                      <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-orange-200 font-bold text-xs sm:text-sm">考試策略</p>
                      <p className="text-orange-300/60 text-xs hidden sm:block">精準答題技巧</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative wave with gold accent */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#0A1A35"/>
          <path d="M0 120L60 112C120 104 240 88 360 80C480 72 600 72 720 76C840 80 960 88 1080 92C1200 96 1320 96 1380 96L1440 96" stroke="url(#waveGold)" strokeWidth="1" opacity="0.4"/>
          <defs>
            <linearGradient id="waveGold" x1="0" y1="0" x2="1440" y2="0">
              <stop offset="0%" stopColor="#F59E0B" stopOpacity="0"/>
              <stop offset="50%" stopColor="#FBBF24" stopOpacity="1"/>
              <stop offset="100%" stopColor="#F59E0B" stopOpacity="0"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20" aria-hidden="true">
        <div className="flex flex-col items-center gap-2 text-amber-400/60">
          <span className="text-xs font-medium tracking-wider uppercase">探索更多</span>
          <div className="w-6 h-10 rounded-full border-2 border-amber-400/30 flex items-start justify-center p-1.5">
            <div className="w-1.5 h-2.5 bg-amber-400/60 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
