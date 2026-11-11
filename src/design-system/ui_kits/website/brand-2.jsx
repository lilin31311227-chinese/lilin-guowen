/* eslint-disable */
// v2.0 brand components — DualTrackEntry, ExperienceCard, VoiceToneMatrix

const SENSE_META = {
  sight: { label: '視', emoji: '◐', color: '#7e8c5c' },
  sound: { label: '聽', emoji: '◑', color: '#6e7d99' },
  smell: { label: '嗅', emoji: '◒', color: '#c4a574' },
  taste: { label: '味', emoji: '◓', color: '#b86a4a' },
  touch: { label: '觸', emoji: '○', color: '#9c8579' },
};

const DualTrackEntry = ({ onSelectStudent, onSelectParent }) => {
  const cardBase = {
    position: 'relative', borderRadius: 20, padding: 32, overflow: 'hidden',
    transition: 'transform 300ms ease, box-shadow 300ms ease',
    cursor: 'pointer',
  };
  const studentBg = 'linear-gradient(135deg, var(--bridge-mist) 0%, color-mix(in srgb, var(--bridge-teal) 12%, var(--cream)) 100%)';
  const parentBg = 'linear-gradient(135deg, var(--mentor-sunrise) 0%, var(--mentor-clay) 100%)';

  const hover = (e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(26,54,93,.12)'; };
  const unhover = (e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
      <div
        onClick={onSelectStudent}
        onMouseEnter={hover} onMouseLeave={unhover}
        style={{ ...cardBase, background: studentBg, border: '1px solid rgba(74,124,126,.3)' }}
      >
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '.3rem .75rem', borderRadius: 9999, background: 'rgba(255,255,255,.65)', backdropFilter: 'blur(4px)', fontSize: 12, fontWeight: 600, letterSpacing: '.05em', color: 'var(--bridge-teal)', marginBottom: 16 }}>
          <span style={{ width: 8, height: 8, borderRadius: 9999, background: 'var(--bridge-teal)' }} /> 學生入口
        </span>
        <h3 style={{ fontSize: 26, fontWeight: 700, color: 'var(--navy)', margin: '0 0 12px' }}>探索 · 陪伴 · 解惑</h3>
        <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--navy-light)', marginBottom: 20 }}>
          分數只是檢驗知識的過程，<br />你擁有什麼樣的人生才是最終的目的。
        </p>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 8, fontSize: 14 }}>
          <li><span style={{ color: 'var(--bridge-teal)', marginRight: 6 }}>→</span>文學故事的現代改寫</li>
          <li><span style={{ color: 'var(--bridge-teal)', marginRight: 6 }}>→</span>學長姐升學壓力真實心聲</li>
          <li><span style={{ color: 'var(--bridge-teal)', marginRight: 6 }}>→</span>高度隱私的匿名心事信箱</li>
        </ul>
        <div style={{ marginTop: 22, fontSize: 14, fontWeight: 600, color: 'var(--bridge-teal)' }}>進入學生專區 ›</div>
      </div>

      <div
        onClick={onSelectParent}
        onMouseEnter={hover} onMouseLeave={unhover}
        style={{ ...cardBase, background: parentBg, border: '1px solid rgba(184,106,74,.25)' }}
      >
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '.3rem .75rem', borderRadius: 9999, background: 'rgba(255,255,255,.7)', backdropFilter: 'blur(4px)', fontSize: 12, fontWeight: 600, letterSpacing: '.05em', color: 'var(--mentor-terracotta)', marginBottom: 16 }}>
          <span style={{ width: 8, height: 8, borderRadius: 9999, background: 'var(--mentor-terracotta)' }} /> 家長入口
        </span>
        <h3 style={{ fontSize: 26, fontWeight: 700, color: 'var(--navy)', margin: '0 0 12px' }}>理解 · 支持 · 教養</h3>
        <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--navy-light)', marginBottom: 20 }}>
          那些不知如何開口的關心，<br />讓文學的溫柔替您說。
        </p>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 8, fontSize: 14 }}>
          <li><span style={{ color: 'var(--mentor-terracotta)', marginRight: 6 }}>→</span>青春期發展心理學文章</li>
          <li><span style={{ color: 'var(--mentor-terracotta)', marginRight: 6 }}>→</span>非暴力溝通技巧解析</li>
          <li><span style={{ color: 'var(--mentor-terracotta)', marginRight: 6 }}>→</span>課堂觀察與情緒反饋</li>
        </ul>
        <div style={{ marginTop: 22, fontSize: 14, fontWeight: 600, color: 'var(--mentor-terracotta)' }}>進入家長專區 ›</div>
      </div>
    </div>
  );
};

const ExperienceCard = ({ title, subtitle, duration, capacity, price, senses, description, classicQuote }) => (
  <article style={{ background: '#fff', borderRadius: 16, overflow: 'hidden', boxShadow: '0 4px 16px rgba(26,54,93,.08)', transition: 'transform 200ms ease, box-shadow 200ms ease' }}>
    <div style={{ background: 'linear-gradient(135deg, var(--mentor-sunrise) 0%, var(--mentor-clay) 50%, var(--bridge-mist) 100%)', padding: '24px 24px 18px' }}>
      <div style={{ display: 'flex', gap: 6, marginBottom: 12 }}>
        {senses.map(s => {
          const m = SENSE_META[s];
          return (
            <span key={s} style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 12, fontWeight: 700, padding: '.2rem .55rem', borderRadius: 9999, background: 'rgba(255,255,255,.7)', backdropFilter: 'blur(4px)', color: m.color }}>
              {m.emoji} {m.label}
            </span>
          );
        })}
      </div>
      <h3 style={{ fontSize: 24, fontWeight: 700, color: 'var(--navy)', lineHeight: 1.2, margin: 0 }}>{title}</h3>
      <p style={{ fontSize: 14, color: 'var(--navy-light)', marginTop: 4 }}>{subtitle}</p>
    </div>
    <div style={{ padding: '20px 24px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, marginBottom: 16 }}>
        {[['時長', duration], ['名額', capacity], ['費用', price]].map(([l, v]) => (
          <div key={l} style={{ background: 'var(--cream-soft)', borderRadius: 10, padding: '8px', textAlign: 'center' }}>
            <div style={{ fontSize: 11, color: 'var(--navy-light)', letterSpacing: '.05em' }}>{l}</div>
            <div style={{ fontSize: 14, fontWeight: 700, marginTop: 2 }}>{v}</div>
          </div>
        ))}
      </div>
      <p style={{ fontSize: 14, lineHeight: 1.75 }}>{description}</p>
      {classicQuote && (
        <blockquote style={{ marginTop: 16, paddingTop: 16, borderTop: '1px solid rgba(214,158,46,.3)', fontSize: 13, color: 'var(--navy-light)', fontStyle: 'italic' }}>
          「{classicQuote.text}」
          <cite style={{ display: 'block', fontSize: 12, color: 'var(--mentor-terracotta)', marginTop: 4, fontStyle: 'normal' }}>—— {classicQuote.source}</cite>
        </blockquote>
      )}
    </div>
  </article>
);

const VoiceToneMatrix = ({ audience, items }) => {
  const isStudent = audience === 'student';
  const accent = isStudent ? 'var(--bridge-teal)' : 'var(--mentor-terracotta)';
  const bg = isStudent ? 'var(--bridge-mist)' : 'var(--mentor-sunrise)';
  return (
    <div>
      <header style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
        <span style={{ width: 4, height: 24, borderRadius: 9999, background: accent }} />
        <h3 style={{ fontSize: 22, fontWeight: 700, color: 'var(--navy)', margin: 0 }}>
          {isStudent ? '對學生：平起平坐的對話者' : '對家長：理解與卸責的支持者'}
        </h3>
      </header>
      <div style={{ overflow: 'hidden', borderRadius: 14, border: '1px solid rgba(26,54,93,.1)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
          <thead style={{ background: bg }}>
            <tr>
              <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 600, width: '22%' }}>場景</th>
              <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 600, color: accent }}>✅ 這樣寫</th>
              <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 600, color: 'var(--navy-light)' }}>❌ 避免</th>
            </tr>
          </thead>
          <tbody style={{ background: '#fff' }}>
            {items.map((it, i) => (
              <tr key={i} style={{ borderTop: '1px solid rgba(26,54,93,.08)' }}>
                <td style={{ padding: '12px 16px', fontWeight: 600, verticalAlign: 'top' }}>{it.scene}</td>
                <td style={{ padding: '12px 16px', verticalAlign: 'top', lineHeight: 1.65 }}>{it.good}</td>
                <td style={{ padding: '12px 16px', verticalAlign: 'top', lineHeight: 1.65, color: 'var(--navy-light)', textDecoration: 'line-through', opacity: 0.6 }}>{it.bad}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

Object.assign(window, { SENSE_META, DualTrackEntry, ExperienceCard, VoiceToneMatrix });
