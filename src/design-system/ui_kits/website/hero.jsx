/* eslint-disable */
// HeroSection — main visual with armillary sphere + portrait + 4 skill cards

const HeroSection = ({ setRoute }) => {
  return (
    <section className="hero" aria-label="首頁主視覺區">
      <div className="hero__glow1" />
      <div className="hero__glow2" />

      {/* corner decorations */}
      <div style={{ position: 'absolute', top: 80, left: 40, pointerEvents: 'none' }}>
        <Xiangyun width={140} height={90} opacity={0.18} />
      </div>
      <div style={{ position: 'absolute', bottom: 140, left: 80, pointerEvents: 'none' }}>
        <Xiangyun width={170} height={110} opacity={0.13} />
      </div>
      <div style={{ position: 'absolute', top: 120, right: '15%', pointerEvents: 'none' }} className="float-slow">
        <AncientBook />
      </div>
      <div style={{ position: 'absolute', top: '45%', left: '6%', pointerEvents: 'none' }} className="float-medium">
        <Scroll rotate={12} />
      </div>
      <div style={{ position: 'absolute', bottom: '30%', right: '7%', pointerEvents: 'none' }} className="float-slow">
        <Scroll rotate={-6} />
      </div>

      <div className="container hero__inner">
        {/* Left content */}
        <div>
          <div style={{ marginBottom: 28 }}>
            <TrustBadge dark>素養教學領航者 · 家長與孩子的溝通橋樑</TrustBadge>
          </div>
          <h1>
            不只提升分數<br />
            <span className="gold-gradient-text">更引導人生方向</span>
          </h1>
          <p className="lead">
            「人生沒有 Google，但有經典可循。」<br />
            結合考試技巧與素養教育，讓國文成為孩子一生受用的思考武器。
          </p>
          <div className="cta-row">
            <Button variant="primary" onClick={() => alert('預約免費診斷諮詢')}
              icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>}>
              預約免費診斷諮詢
            </Button>
            <Button variant="secondaryGold" onClick={() => alert('學員見證頁')}>
              看看學員怎麼說
            </Button>
          </div>
          <div className="metrics">
            <div className="metric">
              <div className="metric__icn" style={{ background: 'linear-gradient(135deg, rgba(251,191,36,.2), rgba(245,158,11,.2))', border: '1px solid rgba(251,191,36,.3)', color: '#fbbf24' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.25v13M12 6.25C10.83 5.48 9.25 5 7.5 5S4.17 5.48 3 6.25v13C4.17 18.48 5.75 18 7.5 18s3.33.48 4.5 1.25m0-13C13.17 5.48 14.75 5 16.5 5c1.75 0 3.33.48 4.5 1.25v13C19.83 18.48 18.25 18 16.5 18c-1.75 0-3.33.48-4.5 1.25"/></svg>
              </div>
              <div>
                <p className="metric__title">閱破劍法</p>
                <p className="metric__desc">獨家邏輯化閱讀理解</p>
              </div>
            </div>
            <div className="metric">
              <div className="metric__icn" style={{ background: 'linear-gradient(135deg, rgba(52,211,153,.2), rgba(16,185,129,.2))', border: '1px solid rgba(52,211,153,.3)', color: '#34d399' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.36-1.86M17 20H7m10 0v-2c0-.66-.13-1.28-.36-1.86M7 20H2v-2a3 3 0 015.36-1.86M7 20v-2c0-.66.13-1.28.36-1.86m0 0a5 5 0 019.28 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              </div>
              <div>
                <p className="metric__title">一對一</p>
                <p className="metric__desc">個人化精準教學</p>
              </div>
            </div>
            <div className="metric">
              <div className="metric__icn" style={{ background: 'linear-gradient(135deg, rgba(96,165,250,.2), rgba(59,130,246,.2))', border: '1px solid rgba(96,165,250,.3)', color: '#60a5fa' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.55-2.28A1 1 0 0121 8.62v6.76a1 1 0 01-1.45.9L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
              </div>
              <div>
                <p className="metric__title">實體 ＋ 線上</p>
                <p className="metric__desc">新竹／全台 Google Meet</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right armillary stage */}
        <div className="armillary-stage">
          <div className="armillary-stage__inner">
            <Armillary />
            <div className="portrait-stage">
              <img src="../../assets/teacher-portrait-fallback.png" alt="立霖老師形象照" />
            </div>
            <div className="nameplate">立霖老師</div>

            <div className="skill-card skill-blue skill--tl">
              <div className="skill-card__icn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1z"/></svg></div>
              <div><p className="skill-card__ttl">閱讀理解</p><p className="skill-card__sub">邏輯思考訓練</p></div>
            </div>
            <div className="skill-card skill-em skill--tr">
              <div className="skill-card__icn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg></div>
              <div><p className="skill-card__ttl">寫作表達</p><p className="skill-card__sub">創意思維培養</p></div>
            </div>
            <div className="skill-card skill-or skill--bl">
              <div className="skill-card__icn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg></div>
              <div><p className="skill-card__ttl">考試策略</p><p className="skill-card__sub">精準答題技巧</p></div>
            </div>
            <div className="skill-card skill-vio skill--br">
              <div className="skill-card__icn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm-1 7V3.5L18.5 9H13z"/></svg></div>
              <div><p className="skill-card__ttl">古文素養</p><p className="skill-card__sub">經典智慧傳承</p></div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <span>探索更多</span>
        <div className="scroll-indicator__mouse"><div className="scroll-indicator__dot" /></div>
      </div>
      <HeroWave />
    </section>
  );
};

Object.assign(window, { HeroSection });
