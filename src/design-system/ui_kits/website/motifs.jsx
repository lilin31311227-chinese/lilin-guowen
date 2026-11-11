/* eslint-disable */
// Oriental decorative motifs — inline SVG, factored from HeroSection.tsx

const Xiangyun = ({ width = 120, height = 80, opacity = 0.2, className = '' }) => (
  <svg width={width} height={height} viewBox="0 0 120 80" fill="none" style={{ opacity, color: '#fbbf24' }} className={className}>
    <path d="M20 60C20 60 25 40 45 40C65 40 60 55 80 55C100 55 100 35 100 35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M10 70C10 70 20 50 40 55C60 60 70 45 90 50" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.6"/>
  </svg>
);

const AncientBook = ({ className = '' }) => (
  <svg width="60" height="50" viewBox="0 0 60 50" fill="none" style={{ color: '#fbbf24' }} className={className}>
    <path d="M5 10L30 5L55 10V45L30 40L5 45V10Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <path d="M30 5V40" stroke="currentColor" strokeWidth="1"/>
    <path d="M12 15H25M12 20H22M35 15H48M35 20H45" stroke="currentColor" strokeWidth="0.75" opacity="0.6"/>
  </svg>
);

const Scroll = ({ className = '', rotate = 0 }) => (
  <svg width="40" height="55" viewBox="0 0 40 55" fill="none" style={{ color: '#fcd34d', transform: `rotate(${rotate}deg)` }} className={className}>
    <path d="M5 5C5 5 8 3 20 3C32 3 35 5 35 5V50C35 50 32 52 20 52C8 52 5 50 5 50V5Z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M10 15H30M10 22H28M10 29H25M10 36H27" stroke="currentColor" strokeWidth="0.75" opacity="0.5"/>
  </svg>
);

// 渾天儀 Armillary Sphere – three rings + central glow + particles
const Armillary = () => (
  <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
    {/* outer dashed glow ring */}
    <div className="spin-vslow" style={{ position: 'absolute', inset: '-25%' }}>
      <svg viewBox="0 0 400 400" width="100%" height="100%">
        <defs>
          <linearGradient id="g0" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.4"/>
            <stop offset="50%" stopColor="#FBBF24" stopOpacity="0.8"/>
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.4"/>
          </linearGradient>
          <filter id="gsoft"><feGaussianBlur stdDeviation="2"/></filter>
          <filter id="gstrong"><feGaussianBlur stdDeviation="3"/></filter>
        </defs>
        <circle cx="200" cy="200" r="190" fill="none" stroke="url(#g0)" strokeWidth="1" opacity="0.5" strokeDasharray="20 10"/>
      </svg>
    </div>
    {/* main outer ring */}
    <div className="spin-vslow" style={{ position: 'absolute', inset: '-15%' }}>
      <svg viewBox="0 0 400 400" width="100%" height="100%">
        <defs>
          <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.9"/>
            <stop offset="50%" stopColor="#FBBF24" stopOpacity="1"/>
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.9"/>
          </linearGradient>
        </defs>
        <ellipse cx="200" cy="200" rx="175" ry="175" fill="none" stroke="url(#g1)" strokeWidth="2" opacity="0.7"/>
      </svg>
    </div>
    {/* middle tilted ring – reverse */}
    <div className="spin-srev" style={{ position: 'absolute', inset: '-5%' }}>
      <svg viewBox="0 0 400 400" width="100%" height="100%">
        <defs>
          <linearGradient id="g2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.7"/>
            <stop offset="50%" stopColor="#FCD34D" stopOpacity="1"/>
            <stop offset="100%" stopColor="#FBBF24" stopOpacity="0.7"/>
          </linearGradient>
        </defs>
        <ellipse cx="200" cy="200" rx="155" ry="70" fill="none" stroke="url(#g2)" strokeWidth="2.5" transform="rotate(-25 200 200)"/>
      </svg>
    </div>
    {/* inner tilted ring */}
    <div className="spin-medium" style={{ position: 'absolute', inset: '5%' }}>
      <svg viewBox="0 0 400 400" width="100%" height="100%">
        <defs>
          <linearGradient id="g3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.8"/>
            <stop offset="50%" stopColor="#FBBF24" stopOpacity="1"/>
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.8"/>
          </linearGradient>
        </defs>
        <ellipse cx="200" cy="200" rx="135" ry="55" fill="none" stroke="url(#g3)" strokeWidth="2.5" transform="rotate(40 200 200)"/>
      </svg>
    </div>
    {/* vertical ring */}
    <div className="spin-vslow" style={{ position: 'absolute', inset: '8%', animationDirection: 'reverse' }}>
      <svg viewBox="0 0 400 400" width="100%" height="100%">
        <ellipse cx="200" cy="200" rx="18" ry="160" fill="none" stroke="url(#g2)" strokeWidth="1.5" opacity="0.5"/>
      </svg>
    </div>
    {/* center core glow */}
    <div className="pulse-slow" style={{ position: 'absolute', inset: '25%', background: 'radial-gradient(circle, rgba(251,191,36,0.25) 0%, rgba(245,158,11,0.10) 50%, transparent 100%)', borderRadius: '9999px', filter: 'blur(40px)' }} />
    {/* particles */}
    <span className="pulse-slow" style={{ position: 'absolute', top: '12%', left: '18%', width: 10, height: 10, background: '#fbbf24', borderRadius: 9999, filter: 'blur(1px)', opacity: 0.7 }} />
    <span className="pulse-slow" style={{ position: 'absolute', top: '22%', right: '14%', width: 8, height: 8, background: '#fcd34d', borderRadius: 9999, filter: 'blur(1px)', opacity: 0.8, animationDelay: '0.4s' }} />
    <span className="pulse-slow" style={{ position: 'absolute', bottom: '28%', left: '14%', width: 6, height: 6, background: '#fbbf24', borderRadius: 9999, filter: 'blur(0.5px)', opacity: 0.6, animationDelay: '0.8s' }} />
    <span className="pulse-slow" style={{ position: 'absolute', bottom: '20%', right: '22%', width: 10, height: 10, background: '#fbbf24', borderRadius: 9999, filter: 'blur(1px)', opacity: 0.7, animationDelay: '1.2s' }} />
    <span className="pulse-slow" style={{ position: 'absolute', top: '40%', left: '6%', width: 5, height: 5, background: '#fcd34d', borderRadius: 9999, opacity: 0.55, animationDelay: '1.6s' }} />
    <span className="pulse-slow" style={{ position: 'absolute', bottom: '40%', right: '6%', width: 6, height: 6, background: '#fbbf24', borderRadius: 9999, opacity: 0.55, animationDelay: '2s' }} />
  </div>
);

// 金色細線分隔
const GoldHairline = () => (
  <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(214,158,46,0.6), transparent)', margin: '32px 0' }} />
);

// Hero 底部波浪
const HeroWave = () => (
  <div className="hero__wave">
    <svg viewBox="0 0 1440 120" fill="none">
      <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H0Z" fill="#0A1A35"/>
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
);

Object.assign(window, { Xiangyun, AncientBook, Scroll, Armillary, GoldHairline, HeroWave });
