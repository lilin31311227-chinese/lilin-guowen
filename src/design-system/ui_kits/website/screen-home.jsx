/* eslint-disable */
// Home screen — Hero + DualTrack + Methodology preview + Methodology engines

const MethodologyTeaser = ({ setRoute }) => {
  const engines = [
    {
      title: '閱讀策略',
      desc: '獨家「閱破劍法」，以邏輯解構文本，快速掌握文章核心',
      color: 'var(--navy)',
      bg: 'rgba(26,54,93,.08)',
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.25v13M12 6.25C10.83 5.48 9.25 5 7.5 5S4.17 5.48 3 6.25v13C4.17 18.48 5.75 18 7.5 18s3.33.48 4.5 1.25m0-13C13.17 5.48 14.75 5 16.5 5c1.75 0 3.33.48 4.5 1.25v13C19.83 18.48 18.25 18 16.5 18c-1.75 0-3.33.48-4.5 1.25" />,
    },
    {
      title: '寫作輸出',
      desc: '理科腦也能寫好文，將邏輯架構轉化為感性表達',
      color: 'var(--gold-dark)',
      bg: 'rgba(214,158,46,.15)',
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M15.23 5.23l3.54 3.54M16.73 3.73a2.5 2.5 0 113.54 3.54L6.5 21H3v-3.57L16.73 3.73z" />,
    },
    {
      title: '文化基底',
      desc: '古文今用，將經典智慧轉化為現代生活的指引',
      color: '#4a7c7e',
      bg: 'rgba(74,124,126,.12)',
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />,
    },
  ];
  const steps = [
    { num: '01', name: '刪除', desc: '剔除干擾資訊' },
    { num: '02', name: '歸納', desc: '整合核心概念' },
    { num: '03', name: '關鍵句', desc: '定位答案所在' },
  ];

  return (
    <Section bg="cream">
      <SectionHeader title="三大引擎 × 閱破系統" subtitle="科學化的國文學習方法論" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24, marginBottom: 64 }}>
        {engines.map((e, i) => (
          <Card key={i} style={{ textAlign: 'center', padding: 36 }}>
            <div style={{ width: 80, height: 80, margin: '0 auto 18px', borderRadius: 18, background: e.bg, color: e.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: 40, height: 40 }}>{e.icon}</svg>
            </div>
            <h3 style={{ fontSize: 22, fontWeight: 700, color: 'var(--navy)', marginBottom: 8 }}>{e.title}</h3>
            <p style={{ fontSize: 15, color: 'var(--navy-light)', lineHeight: 1.65 }}>{e.desc}</p>
          </Card>
        ))}
      </div>
      <div className="tripleslash">
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <span style={{ display: 'inline-block', padding: '4px 14px', background: 'var(--gold)', color: 'var(--navy)', fontSize: 13, fontWeight: 700, borderRadius: 9999, marginBottom: 14 }}>獨家方法</span>
          <h3 style={{ fontSize: 30, fontWeight: 700, color: 'var(--cream)', margin: '0 0 6px' }}>基本三連斬</h3>
          <p style={{ color: 'rgba(250,245,239,.7)', fontSize: 15 }}>邏輯演算法，破解所有閱讀題型</p>
        </div>
        <div className="tripleslash__steps">
          {steps.map((s, i) => (
            <div key={i} style={{ position: 'relative' }}>
              <div className="tripleslash__step">
                <div className="num">{s.num}</div>
                <div className="name">{s.name}</div>
                <div className="desc">{s.desc}</div>
              </div>
              {i < 2 && <div className="tripleslash__arrow" aria-hidden="true">→</div>}
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 36 }}>
          <p style={{ color: 'rgba(250,245,239,.8)', marginBottom: 22 }}>「把大段變小段，長句變短句」— 降維打擊策略</p>
          <Button variant="primary" onClick={() => alert('閱破劍法詳解')}>深入了解閱破劍法</Button>
        </div>
      </div>
    </Section>
  );
};

const Home = ({ setRoute }) => (
  <>
    <HeroSection setRoute={setRoute} />
    <Section bg="white">
      <SectionHeader title="你是誰？我們有兩條路" subtitle="學生與家長需求迥異，分軌進入專屬資訊架構" />
      <DualTrackEntry
        onSelectStudent={() => setRoute('students')}
        onSelectParent={() => setRoute('parents')}
      />
    </Section>
    <MethodologyTeaser setRoute={setRoute} />
  </>
);

Object.assign(window, { Home, MethodologyTeaser });
