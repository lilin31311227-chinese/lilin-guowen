/* eslint-disable */
// Activities screen — sensory experience cards

const Activities = ({ setRoute }) => (
  <>
    <Section bg="white" style={{ paddingTop: 80, paddingBottom: 48 }}>
      <div style={{ maxWidth: 720, marginBottom: 56 }}>
        <Eyebrow>體驗活動 · LIVE EXPERIENCE</Eyebrow>
        <h1 style={{ fontSize: 46, fontWeight: 700, color: 'var(--navy)', lineHeight: 1.15, letterSpacing: '-0.02em', margin: '14px 0 18px' }}>
          不練習回答，<br/>練習<span className="gold-gradient-text">傾聽</span>。
        </h1>
        <p style={{ fontSize: 18, color: 'var(--navy-light)', lineHeight: 1.7 }}>
          永遠在「語言之外」設計溝通機制——肢體、五感、共創。
          每一場活動，都有一個文學錨點。
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: 28 }}>
        <ExperienceCard
          title="自然 · 輕觸之旅"
          subtitle="親子五感體驗日"
          duration="4 小時"
          capacity="≤20 人"
          price="$150 / 位"
          senses={['sight', 'sound', 'touch']}
          description="靜觀漫步、自然書寫、藝術共創、共食共備。讓親子在不必說話的時段裡，重新感覺到彼此。"
          classicQuote={{ text: '采菊東籬下，悠然見南山。', source: '陶淵明' }}
        />
        <ExperienceCard
          title="動身體 · 樂溝通"
          subtitle="親子戲劇情境工作坊"
          duration="60 分鐘"
          capacity="≤20 人"
          price="$1000 / 組"
          senses={['sound', 'touch']}
          description="律動暖身、文學戲劇情境扮演、反思圈。在角色框架下安全地展現脆弱與同理。"
          classicQuote={{ text: '吾日三省吾身。', source: '《論語》曾子' }}
        />
        <ExperienceCard
          title="文人飯桌 · 共讀晚餐"
          subtitle="家長共學讀書會"
          duration="2.5 小時"
          capacity="≤12 組"
          price="$280 / 組"
          senses={['smell', 'taste', 'sound']}
          description="每月一文。我們選一篇可吃可讀的散文（如張曉風談粥），由立霖老師導讀，家長共食共讀。"
          classicQuote={{ text: '飯後一笑，書中見君。', source: '立霖' }}
        />
      </div>
    </Section>

    <Section bg="cream">
      <SectionHeader title="活動設計三原則" subtitle="為什麼我們敢說『不只是補習班』" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
        <Card>
          <Eyebrow>原則一</Eyebrow>
          <h3 style={{ fontSize: 22, fontWeight: 700, color: 'var(--navy)', margin: '8px 0 10px' }}>語言之外的溝通機制</h3>
          <p style={{ fontSize: 15, color: 'var(--navy-light)', lineHeight: 1.7 }}>
            肢體、五感、共創——不再讓「我們聊聊吧」變成又一次衝突的開場。
          </p>
        </Card>
        <Card>
          <Eyebrow>原則二</Eyebrow>
          <h3 style={{ fontSize: 22, fontWeight: 700, color: 'var(--navy)', margin: '8px 0 10px' }}>永遠有一個文學錨點</h3>
          <p style={{ fontSize: 15, color: 'var(--navy-light)', lineHeight: 1.7 }}>
            一句詩、一篇文、一個典故——讓今天的活動有機會在未來被想起。
          </p>
        </Card>
        <Card>
          <Eyebrow>原則三</Eyebrow>
          <h3 style={{ fontSize: 22, fontWeight: 700, color: 'var(--navy)', margin: '8px 0 10px' }}>以「無批判分享」收尾</h3>
          <p style={{ fontSize: 15, color: 'var(--navy-light)', lineHeight: 1.7 }}>
            禁止指導與糾正。每個人只負責說出自己看見的，不負責修正別人看見的。
          </p>
        </Card>
      </div>
    </Section>
  </>
);

Object.assign(window, { Activities });
