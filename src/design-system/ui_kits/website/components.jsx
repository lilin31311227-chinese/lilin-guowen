/* eslint-disable */
// UI primitives — Button, Card, Badge, Eyebrow, Navbar, Footer, LineIcon

const LineIcon = ({ size = 18, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
    <path d="M24 10.3c0-5.4-5.4-9.7-12-9.7S0 5 0 10.3c0 4.8 4.3 8.8 10 9.6.4.1.9.3 1.1.6.1.3.1.8.1 1.1l-.2 1c0 .3-.2 1.2 1 .6 1.3-.5 7-4.1 9.4-7C23.2 14.4 24 12.5 24 10.3z"/>
  </svg>
);

// Buttons
const buttonStyles = {
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    padding: '0.875rem 1.5rem',
    borderRadius: '0.5rem',
    fontWeight: 600,
    fontSize: '15px',
    cursor: 'pointer',
    border: 'none',
    fontFamily: 'inherit',
    transition: 'transform 200ms ease, box-shadow 200ms ease, background 200ms ease',
    textDecoration: 'none',
  },
};

const Button = ({ children, variant = 'primary', onClick, icon, style = {} }) => {
  const variants = {
    primary: {
      background: 'linear-gradient(90deg, #fbbf24, #f59e0b)',
      color: '#0A1A35',
      boxShadow: '0 8px 24px rgba(214,158,46,.3)',
    },
    secondary: {
      background: 'transparent',
      color: 'var(--navy)',
      border: '2px solid var(--navy)',
      padding: '0.75rem 1.4rem',
    },
    secondaryGold: {
      background: 'transparent',
      color: '#fde68a',
      border: '2px solid rgba(251,191,36,.4)',
      padding: '0.75rem 1.4rem',
    },
    line: {
      background: '#06c755',
      color: '#fff',
      boxShadow: '0 6px 16px rgba(6,199,85,.3)',
    },
  };
  return (
    <button
      className="btn-hover"
      onClick={onClick}
      style={{ ...buttonStyles.base, ...variants[variant], ...style }}
    >
      {children}
      {icon}
    </button>
  );
};

// Card
const Card = ({ children, style = {}, hover = true, onClick }) => (
  <div
    onClick={onClick}
    style={{
      background: '#fff',
      borderRadius: 16,
      padding: 32,
      boxShadow: '0 4px 16px rgba(26,54,93,.10)',
      transition: 'transform 300ms ease, box-shadow 300ms ease',
      cursor: onClick ? 'pointer' : 'default',
      ...style,
    }}
    onMouseEnter={hover ? (e) => {
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.boxShadow = '0 12px 32px rgba(26,54,93,.15)';
    } : undefined}
    onMouseLeave={hover ? (e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 4px 16px rgba(26,54,93,.10)';
    } : undefined}
  >
    {children}
  </div>
);

// Eyebrow text
const Eyebrow = ({ children, color = '#b7791f' }) => (
  <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color }}>
    {children}
  </div>
);

// Trust pill (on light/dark variants)
const TrustBadge = ({ children, dark = false }) => {
  if (dark) {
    return (
      <span style={{
        display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
        background: 'rgba(251,191,36,.10)', border: '1px solid rgba(251,191,36,.30)',
        backdropFilter: 'blur(4px)', padding: '0.5rem 1rem', borderRadius: 9999,
        fontSize: 14, fontWeight: 500, color: '#fde68a',
      }}>
        <span style={{
          width: '1.25rem', height: '1.25rem', borderRadius: 9999,
          background: 'linear-gradient(135deg,#fbbf24,#f59e0b)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width={12} height={12} viewBox="0 0 20 20" fill="#0A1A35"><path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 011.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z" clipRule="evenodd"/></svg>
        </span>
        {children}
      </span>
    );
  }
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
      background: 'rgba(214,158,46,.1)', border: '1px solid rgba(214,158,46,.3)',
      padding: '0.4rem 0.9rem', borderRadius: 9999,
      fontSize: 13.5, fontWeight: 500, color: '#b7791f',
    }}>
      <span style={{ width: '.5rem', height: '.5rem', background: '#d69e2e', borderRadius: 9999 }} />
      {children}
    </span>
  );
};

// Navbar
const NAV_LINKS = [
  { key: 'home', label: '首頁' },
  { key: 'students', label: '學生入口' },
  { key: 'parents', label: '家長入口' },
  { key: 'activities', label: '體驗活動' },
];

const Navbar = ({ route, setRoute }) => (
  <nav className="nav">
    <div className="container nav__inner">
      <button className="nav__link nav__logo" onClick={() => setRoute('home')} style={{ display: 'flex', alignItems: 'center' }}>
        <img src="../../assets/lilin-logo.png" alt="立霖國文" />
      </button>
      <div className="nav__links">
        {NAV_LINKS.map(l => (
          <button
            key={l.key}
            className="nav__link"
            aria-current={route === l.key ? 'page' : undefined}
            onClick={() => setRoute(l.key)}
          >
            {l.label}
          </button>
        ))}
        <Button variant="primary" onClick={() => alert('免費診斷諮詢 — 表單將連結至 Google Sheets')} style={{ padding: '.625rem 1.25rem', fontSize: 14 }}>
          免費診斷
        </Button>
      </div>
    </div>
  </nav>
);

// Footer
const Footer = () => (
  <footer className="footer">
    <div className="container footer__grid">
      <div className="footer__brand">
        <img className="logo" src="../../assets/lilin-logo.png" alt="立霖國文" />
        <p className="tag">人生沒有 Google，但有經典可循。<br />帶你讀懂文章邏輯，寫出生命厚度。</p>
        <p className="small">素養教學領航者 | 家長與學生之間的溝通橋樑</p>
      </div>
      <div>
        <h4>快速連結</h4>
        <ul>
          <li><a href="#">學生入口</a></li>
          <li><a href="#">家長入口</a></li>
          <li><a href="#">心靈專欄</a></li>
          <li><a href="#">體驗活動</a></li>
          <li><a href="#">教學方法</a></li>
          <li><a href="#">學員見證</a></li>
          <li><a href="#">免費診斷諮詢</a></li>
        </ul>
      </div>
      <div>
        <h4>聯絡諮詢</h4>
        <ul>
          <li><a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}><LineIcon /> LINE 諮詢</a></li>
          <li>新竹（實體）／全台（線上）</li>
          <li><a href="#">免費診斷表單</a></li>
        </ul>
      </div>
    </div>
    <div className="container">
      <div className="footer__bottom">© 2026 立霖國文. All rights reserved.</div>
    </div>
  </footer>
);

// Section wrapper
const Section = ({ id, bg = 'cream', children, style = {} }) => (
  <section id={id} className={`section section--${bg}`} style={style}>
    <div className="container">{children}</div>
  </section>
);

const SectionHeader = ({ title, subtitle, light = false }) => (
  <div className="section__head">
    <h2 className="section__title" style={light ? { color: 'var(--cream)' } : undefined}>{title}</h2>
    {subtitle && <p className="section__sub" style={light ? { color: 'rgba(250,245,239,.8)' } : undefined}>{subtitle}</p>}
  </div>
);

Object.assign(window, { Button, Card, Eyebrow, TrustBadge, LineIcon, Navbar, Footer, Section, SectionHeader });
