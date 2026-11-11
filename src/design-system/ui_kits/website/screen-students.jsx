/* eslint-disable */
// For-students screen — bridge-teal accent

const ForStudents = ({ setRoute }) => (
  <>
    <Section bg="white" style={{ paddingTop: 80, paddingBottom: 48 }}>
      <div style={{ maxWidth: 720, marginBottom: 56 }}>
        <Eyebrow color="#4a7c7e">學生入口 · STUDENT TRACK</Eyebrow>
        <h1 style={{ fontSize: 48, fontWeight: 700, color: 'var(--navy)', lineHeight: 1.15, letterSpacing: '-0.02em', margin: '14px 0 18px' }}>
          分數會結束，<br/><span style={{ color: '#4a7c7e' }}>你不會。</span>
        </h1>
        <p style={{ fontSize: 19, color: 'var(--navy-light)', lineHeight: 1.7 }}>
          每週 1 小時，我們陪你讀懂文章，也讀懂自己。
          在標準答案到達之前，先給自己一個版本。
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24, marginBottom: 56 }}>
        <MentorVoice classicReference="蘇軾《定風波》">
          「莫聽穿林打葉聲，何妨吟嘯且徐行。」<br/>
          蘇軾被貶謫黃州那年，他選擇用「徐行」回應風雨。
          你今天的風雨，你想用什麼姿態走過？
        </MentorVoice>
        <MentorVoice label="心靈專欄" classicReference="陶淵明《歸去來辭》">
          「歸去來兮，田園將蕪胡不歸？」<br/>
          陶淵明說的不是辭職，是回到自己。
          你今天最想回去的，是哪個自己？
        </MentorVoice>
      </div>

      <div style={{ background: 'var(--cream-soft)', borderRadius: 24, padding: 40 }}>
        <Eyebrow>情緒詞彙</Eyebrow>
        <h3 style={{ fontSize: 28, fontWeight: 700, color: 'var(--navy)', margin: '12px 0 8px' }}>把「煩」翻譯成更精確的詞</h3>
        <p style={{ fontSize: 15, color: 'var(--navy-light)', marginBottom: 24, lineHeight: 1.65, maxWidth: 560 }}>
          青少年容易用「不爽、煩、不知道」概括一切。我們把這三個詞，擴充為文學中那些細膩精準的字眼——你會發現飯桌上的對話，慢慢變了。
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          {ALL_EMOTIONS.map(e => <EmotionChip key={e} type={e} />)}
        </div>
      </div>
    </Section>

    <Section bg="white" style={{ paddingTop: 24 }}>
      <SectionHeader title="對學生：我們怎麼說話" subtitle="平起平坐的對話者，不是站在你背後推著你的人" />
      <VoiceToneMatrix
        audience="student"
        items={[
          { scene: '招生 CTA',  good: '預約一場對話，看看自己長什麼樣子', bad: '立刻搶名額！手刀報名！' },
          { scene: '考前打氣', good: '分數會結束，你不會',                bad: '只剩 87 天，再不衝就來不及' },
          { scene: '情緒回應', good: '「煩」可能是好幾種感覺，我們慢慢拆',  bad: '別想那麼多，認真讀就對了' },
        ]}
      />
    </Section>

    <Section bg="navy">
      <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
        <Eyebrow color="#fbbf24">給每位在分數之上、宇宙之內的你</Eyebrow>
        <h2 style={{ fontSize: 38, fontWeight: 700, color: 'var(--cream)', lineHeight: 1.2, letterSpacing: '-0.015em', margin: '14px 0 18px' }}>
          要不要先<span className="gold-gradient-text">悄悄</span>看一下？
        </h2>
        <p style={{ fontSize: 16, color: 'rgba(250,245,239,.8)', lineHeight: 1.7, marginBottom: 28 }}>
          匿名信箱、學長姐心聲、文學現代改寫——
          完全不需要報名，先看就好。
        </p>
        <Button variant="primary" onClick={() => setRoute('activities')}>探索學生專區內容 →</Button>
      </div>
    </Section>
  </>
);

Object.assign(window, { ForStudents });
