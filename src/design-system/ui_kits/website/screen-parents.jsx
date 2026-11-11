/* eslint-disable */
// For-parents screen — mentor-terracotta accent

const ForParents = ({ setRoute }) => (
  <>
    <Section bg="soft" style={{ paddingTop: 80, paddingBottom: 48 }}>
      <div style={{ maxWidth: 720, marginBottom: 48 }}>
        <Eyebrow color="#b86a4a">家長入口 · PARENT TRACK</Eyebrow>
        <h1 style={{ fontSize: 48, fontWeight: 700, color: 'var(--navy)', lineHeight: 1.15, letterSpacing: '-0.02em', margin: '14px 0 18px' }}>
          把焦慮放下，<br/><span style={{ color: '#b86a4a' }}>把對話請回家。</span>
        </h1>
        <p style={{ fontSize: 19, color: 'var(--navy-light)', lineHeight: 1.7 }}>
          那些不知如何開口的關心，讓文學的溫柔替您說。<br/>
          我們是您和孩子之間，那道剛剛好的橋。
        </p>
      </div>

      <SectionHeader title="一份真實的課堂觀察月報" subtitle="教師後台 → 家長端的「微型 CRM」觸點" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: 24 }}>
        <FamilyBridgeCard
          teacherName="立霖"
          observationDate="2026-05-12"
          studentContext="今日討論《紅樓夢》中角色面對家族衰敗的態度，孩子的見解非常深刻，展現了極高的同理心與抗壓潛力。"
          classicConnection="《紅樓夢》第七十四回"
          parentSuggestion="今晚可與孩子聊聊她對未來挑戰的看法，並給予肯定。不需要解答，只需要傾聽。"
        />
        <FamilyBridgeCard
          teacherName="立霖"
          observationDate="2026-05-10"
          studentContext="作文題目「我最想說但沒說出口的一句話」，孩子寫了 600 字給父親，文字真摯。"
          parentSuggestion="不需要追問內容（這是他的領地）。週末可一起做一件不講話的事，例如散步。"
        />
      </div>
    </Section>

    <Section bg="cream">
      <SectionHeader title="本週親子討論題" subtitle="把課堂的反思，帶回飯桌的對話" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 24 }}>
        <DialoguePrompt
          weekTopic="朱自清《背影》—— 看見父母不曾被看見的付出"
          prompt="請在接下來的三天內，觀察並寫下一個父母為你付出、但你過去未曾留意的微小細節。家長也請在此欄回饋當時做這件事的想法。"
          observationGuideline="不評論、不糾正，只交換各自的版本。"
        />
        <DialoguePrompt
          weekTopic="《論語》—— 子曰：「君子和而不同」"
          prompt="這週與家人試著討論一件你們意見不同的小事。不要說服對方，只練習說：『我懂你的版本，我的版本是這樣。』"
        />
      </div>
    </Section>

    <Section bg="white">
      <SectionHeader title="對家長：我們怎麼說話" subtitle="理解與卸責的支持者，不是焦慮販售者" />
      <VoiceToneMatrix
        audience="parent"
        items={[
          { scene: '招生 CTA',   good: '預約一份免費的課堂觀察月報',             bad: '今天報名打 8 折！' },
          { scene: '溝通價值',   good: '那些不知如何開口的關心，讓文學替您說',     bad: '保證 3 個月孩子變得跟您講話' },
          { scene: '價格訴求',   good: '高單價，是因為改變的不只是分數',         bad: '一堂只要 $X，超划算！' },
        ]}
      />
    </Section>

    <Section bg="navy">
      <div style={{ maxWidth: 620, margin: '0 auto', textAlign: 'center' }}>
        <Eyebrow color="#fbbf24">給願意陪孩子重新讀世界的家長</Eyebrow>
        <h2 style={{ fontSize: 36, fontWeight: 700, color: 'var(--cream)', lineHeight: 1.25, margin: '14px 0 18px' }}>
          先收到<span className="gold-gradient-text">第一份月報</span>，再決定要不要報名。
        </h2>
        <p style={{ fontSize: 16, color: 'rgba(250,245,239,.8)', lineHeight: 1.7, marginBottom: 28 }}>
          不討論分數，只討論：今天，他在《紅樓夢》面前皺了眉、又笑了。
        </p>
        <Button variant="primary" onClick={() => alert('預約免費家長諮詢')}>預約免費家長諮詢 →</Button>
      </div>
    </Section>
  </>
);

Object.assign(window, { ForParents });
