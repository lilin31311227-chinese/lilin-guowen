/* eslint-disable */
// v2.0 brand components — MentorVoice, FamilyBridgeCard, DialoguePrompt,
// EmotionChip, DualTrackEntry, ExperienceCard, VoiceToneMatrix

const EMOTION_META = {
  joy:        { label: '喜', classic: '欣然', color: '#e6b85c' },
  calm:       { label: '安', classic: '從容', color: '#8aa9b5' },
  melancholy: { label: '鬱', classic: '惆悵', color: '#6b7a99' },
  anger:      { label: '慍', classic: '不平', color: '#a8624a' },
  anxiety:    { label: '焦', classic: '懸宕', color: '#b89968' },
  grief:      { label: '哀', classic: '黯然', color: '#5d6878' },
  hope:       { label: '望', classic: '懷想', color: '#9ab87c' },
};
const ALL_EMOTIONS = Object.keys(EMOTION_META);

const EmotionChip = ({ type, showClassic = true }) => {
  const m = EMOTION_META[type];
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
      padding: '0.4rem 0.9rem', borderRadius: 9999,
      background: 'var(--cream-soft)',
      border: `1px solid ${m.color}50`,
      color: m.color,
      fontSize: 14, fontWeight: 500,
    }}>
      <span style={{ width: '.5rem', height: '.5rem', borderRadius: 9999, background: 'currentColor' }} />
      <span style={{ fontWeight: 700 }}>{m.label}</span>
      {showClassic && <span style={{ fontSize: 12, opacity: 0.8 }}>· {m.classic}</span>}
    </span>
  );
};

const MentorVoice = ({ children, label = '導師的旁白', classicReference }) => (
  <aside style={{
    position: 'relative',
    background: 'linear-gradient(180deg, var(--mentor-sunrise) 0%, var(--mentor-clay) 100%)',
    borderLeft: '3px solid var(--mentor-terracotta)',
    borderRadius: '0 12px 12px 0',
    padding: '1.5rem 1.75rem',
    color: 'var(--navy)',
  }}>
    <div style={{ fontSize: 12, letterSpacing: '0.15em', fontWeight: 600, color: 'var(--mentor-terracotta)', marginBottom: 8 }}>
      {label}
    </div>
    <div style={{ lineHeight: 1.75 }}>{children}</div>
    {classicReference && (
      <div style={{
        marginTop: 14, paddingTop: 12,
        borderTop: '1px solid rgba(184,106,74,.2)',
        fontSize: 13, color: 'var(--navy-light)',
      }}>—— 出自 {classicReference}</div>
    )}
  </aside>
);

const FamilyBridgeCard = ({ teacherName, observationDate, studentContext, classicConnection, parentSuggestion }) => (
  <article style={{
    position: 'relative', overflow: 'hidden',
    background: 'var(--bridge-mist)',
    border: '1px solid rgba(74,124,126,.25)',
    borderRadius: 16, padding: 20,
  }}>
    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, var(--bridge-teal), var(--bridge-sage))' }} />
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14, marginTop: 4 }}>
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 12, fontWeight: 600, letterSpacing: '.05em', color: 'var(--bridge-teal)' }}>
        <span style={{ width: '.5rem', height: '.5rem', background: 'var(--bridge-teal)', borderRadius: 9999 }} />
        親情橋樑 · 課堂觀察
      </span>
      <time style={{ fontSize: 12, color: 'var(--navy-light)', opacity: 0.75 }}>{observationDate}</time>
    </header>
    <p style={{ fontSize: 14, lineHeight: 1.75, marginBottom: 10 }}>
      <b style={{ color: 'var(--bridge-teal)' }}>今日課堂：</b>{studentContext}
    </p>
    {classicConnection && (
      <p style={{ fontSize: 13, lineHeight: 1.7, color: 'var(--navy-light)', fontStyle: 'italic', borderLeft: '2px solid var(--bridge-sage)', paddingLeft: 12, marginBottom: 10 }}>
        連結文本：{classicConnection}
      </p>
    )}
    <p style={{ fontSize: 14, lineHeight: 1.75 }}>
      <b style={{ color: 'var(--mentor-terracotta)' }}>給家長的建議：</b>{parentSuggestion}
    </p>
    <footer style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(74,124,126,.15)', display: 'flex', justifyContent: 'space-between', fontSize: 12 }}>
      <span style={{ color: 'var(--navy-light)' }}>{teacherName} 老師</span>
      <span style={{ color: 'var(--bridge-teal)', fontWeight: 500 }}>立霖國文 · 橋樑互動</span>
    </footer>
  </article>
);

const DialoguePrompt = ({ weekTopic, prompt, observationGuideline }) => (
  <div style={{
    position: 'relative',
    background: 'var(--cream-soft)',
    border: '1px dashed var(--mentor-terracotta)',
    borderRadius: 12,
    padding: '1.25rem 1.5rem',
    color: 'var(--navy)',
  }}>
    <span style={{ position: 'absolute', top: '-.5rem', left: '.75rem', fontSize: '2.5rem', color: 'var(--mentor-terracotta)', fontFamily: 'serif', lineHeight: 1 }}>「</span>
    <div style={{ fontSize: 12, letterSpacing: '0.15em', fontWeight: 600, color: 'var(--mentor-terracotta)', marginTop: 4 }}>本週親子討論題</div>
    <h4 style={{ fontSize: 16, fontWeight: 700, margin: '4px 0 12px' }}>{weekTopic}</h4>
    <p style={{ fontSize: 14, lineHeight: 1.75 }}>{prompt}</p>
    {observationGuideline && (
      <div style={{ marginTop: 14, fontSize: 13, background: 'rgba(244,228,212,.6)', borderRadius: 8, padding: '8px 12px', color: 'var(--navy-light)' }}>
        <b style={{ color: 'var(--mentor-terracotta)' }}>引導提示：</b>{observationGuideline}
      </div>
    )}
  </div>
);

Object.assign(window, { EmotionChip, EMOTION_META, ALL_EMOTIONS, MentorVoice, FamilyBridgeCard, DialoguePrompt });
