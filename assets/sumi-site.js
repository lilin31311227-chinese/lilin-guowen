/* ============================================================
   立霖國文 · 候選官網「墨流文心」共用腳本
   - 注入統一頂部導覽與頁尾（依 body[data-page] 高亮當前頁）
   - 共用行為：行動選單、捲動淡入、手風琴、情緒色標、likert
   各頁只需：<body data-page="...">、<div id="site-header"></div>、
   <div id="site-footer"></div>，並於底部引用本檔。
   ============================================================ */
(function () {
  'use strict';

  /* ══════════════════════════════════════════════════════════════
     ★ 上線設定：只需填這幾個常數，全站自動接通
       LINE_URL      — LINE 官方帳號加好友連結（申請後填，如 https://lin.ee/xxxx）
       FORM_ENDPOINT — 表單後端 GAS Web App /exec 網址（部署 Code.gs 後填）
       NEWSLETTER_URL — 電子報訂閱連結（如 Google 表單／電子報平台訂閱頁，開通後填）
       STORE_URL      — 教材完整版購買連結（開通後填）
       SAMPLE_FORM_URL — 樣章名單機：MailerLite 表單頁網址（開通後填）。
                         留空＝樣章維持直連 PDF；填入＝materials.html 改顯示留 email 表單入口，隱藏直連按鈕
     留空＝安全降級：LINE 按鈕捲到頁面聯絡區；表單顯示成功並暫存 localStorage 佇列；
     訂閱區塊／購買按鈕整段隱藏，不對外露出還沒接通的功能。
     ══════════════════════════════════════════════════════════════ */
  var LINE_URL        = '';
  var FORM_ENDPOINT   = '';
  var CONTACT_EMAIL   = 'hello@lilinguowen.com';
  var NEWSLETTER_URL  = '';
  var STORE_URL       = '';
  var SAMPLE_FORM_URL = '';

  function lineHref() { return LINE_URL || 'courses.html#line'; }

  /* —— 表單後端（Google Apps Script + 試算表；移植自 tea.js）——
     text/plain + no-cors 送出（GAS 簡單請求免 CORS 預檢）。永不 reject：
     best-effort，避免擋住畫面；失敗或未設端點則暫存 localStorage 佇列，改回報
     status:'queued'，由呼叫端（各頁 done 回呼）自行決定要顯示「已送出」還是
     「整備中，請改用其他管道」，不得把佇列狀態偽裝成送達成功。 */
  var QUEUE_KEY = 'lilin_form_queue';
  function queueLocally(payload) {
    try {
      var q = JSON.parse(localStorage.getItem(QUEUE_KEY) || '[]');
      q.push(payload); localStorage.setItem(QUEUE_KEY, JSON.stringify(q));
    } catch (e) {}
  }
  function postPayload(payload) {
    return fetch(FORM_ENDPOINT, {
      method: 'POST', mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: payload
    });
  }
  function submitForm(formType, data) {
    var payload = JSON.stringify({
      form: formType, data: data,
      ts: new Date().toISOString(), page: location.pathname
    });
    if (!FORM_ENDPOINT) { queueLocally(payload); return Promise.resolve({ ok: false, status: 'queued', skipped: true }); }
    return postPayload(payload)
      .then(function () { return { ok: true, status: 'sent' }; })
      .catch(function (err) {
        try { console.warn('[sumi-form] 送出失敗，已暫存本機佇列：', err); } catch (e) {}
        queueLocally(payload); return { ok: false, status: 'queued' };
      });
  }
  /* 補送佇列：FORM_ENDPOINT 一旦填入正式網址，init() 會呼叫本函式，
     把先前（端點未設或送出失敗時）暫存於 localStorage 的表單逐筆補送後清空。 */
  function flushQueuedForms() {
    if (!FORM_ENDPOINT) { return; }
    var queued;
    try { queued = JSON.parse(localStorage.getItem(QUEUE_KEY) || '[]'); } catch (e) { queued = []; }
    if (!queued.length) { return; }
    try { localStorage.removeItem(QUEUE_KEY); } catch (e) {}
    queued.forEach(function (payload) {
      postPayload(payload).catch(function () {
        try { console.warn('[sumi-form] 佇列補送失敗，資料已遺失：', payload); } catch (e) {}
      });
    });
  }
  window.SumiForms = { submit: submitForm, endpoint: function () { return FORM_ENDPOINT; } };

  /* 把全站 LINE 按鈕（.btn--line、[data-line]、header/footer CTA）接到 LINE_URL；
     未設時退回 #line 頁內聯絡區，避免死連結。 */
  function applyContactLinks() {
    var href = lineHref();
    document.querySelectorAll('.btn--line, [data-line]').forEach(function (a) {
      if (a.tagName === 'A') { a.setAttribute('href', href); }
    });
  }

  /* —— 電子報訂閱區塊（footer／mentor-column.html）——
     標記 [data-newsletter] 的容器：NEWSLETTER_URL 留空時整段隱藏（未接通的功能不上線露出）；
     設定後把容器內 [data-newsletter-link] 的連結接到 NEWSLETTER_URL，並顯示容器。 */
  function applyNewsletterBlocks() {
    document.querySelectorAll('[data-newsletter]').forEach(function (el) {
      if (!NEWSLETTER_URL) { el.style.display = 'none'; return; }
      el.style.display = '';
      el.querySelectorAll('[data-newsletter-link]').forEach(function (a) {
        a.setAttribute('href', NEWSLETTER_URL);
      });
    });
  }

  /* —— 教材商店按鈕（materials.html）——
     標記 [data-store] 的容器：STORE_URL 留空時整段隱藏，只留「完整版購買連結整備中」文字（[data-store-pending]）；
     設定後把容器內 [data-store-link] 的連結接到 STORE_URL 並顯示容器，同時隱藏 [data-store-pending] 文字，
     避免「整備中」與正式購買按鈕同時出現。 */
  function applyStoreBlocks() {
    document.querySelectorAll('[data-store]').forEach(function (el) {
      if (!STORE_URL) { el.style.display = 'none'; return; }
      el.style.display = '';
      el.querySelectorAll('[data-store-link]').forEach(function (a) {
        a.setAttribute('href', STORE_URL);
      });
    });
    document.querySelectorAll('[data-store-pending]').forEach(function (el) {
      el.style.display = STORE_URL ? 'none' : '';
    });
  }

  /* —— 樣章名單機（materials.html）——
     SAMPLE_FORM_URL 留空：[data-sample-direct]（直連 PDF）照常顯示，[data-sample-form] 隱藏，行為與改版前相同。
     設定後：隱藏直連按鈕、顯示 [data-sample-form]，並把其中 [data-sample-form-link] 接到 SAMPLE_FORM_URL。 */
  function applySampleForm() {
    document.querySelectorAll('[data-sample-direct]').forEach(function (el) {
      el.style.display = SAMPLE_FORM_URL ? 'none' : '';
    });
    document.querySelectorAll('[data-sample-form]').forEach(function (el) {
      if (!SAMPLE_FORM_URL) { el.style.display = 'none'; return; }
      el.style.display = '';
      el.querySelectorAll('[data-sample-form-link]').forEach(function (a) {
        a.setAttribute('href', SAMPLE_FORM_URL);
      });
    });
  }

  /* —— 導覽結構（單一來源，改這裡即全站同步） —— */
  var NAV = [
    { key: 'home',     label: '首頁',   href: 'index.html' },
    { key: 'students', label: '學生入口', href: 'students.html' },
    { key: 'parents',  label: '家長入口', href: 'parents.html' },
    { key: 'courses',  label: '課程介紹', href: 'courses.html' },
    { key: 'materials', label: '教材與品管', href: 'materials.html' },
    { label: '課程方法', children: [
      { key: 'methodology',   label: '閱破劍法',     href: 'methodology.html' },
      { key: 'exam-strategy', label: '會考與學測策略', href: 'exam-strategy.html' }
    ]},
    { label: '心靈專欄', children: [
      { key: 'mentor-column', label: '導師心靈專欄',   href: 'mentor-column.html' },
      { key: 'testimonials',  label: '家長與學生見證', href: 'testimonials.html' },
      { key: 'article',       label: '專欄文章',       href: 'articles/index.html' }
    ]},
    { label: '體驗活動', href: 'activities.html', children: [
      { key: 'activities',     label: '體驗活動總覽', href: 'activities.html' },
      { key: 'event-nature',   label: '自然輕觸之旅', href: 'event-nature.html' },
      { key: 'event-workshop', label: '親子工作坊',   href: 'event-workshop.html' }
    ]},
    { label: '陪伴工具', children: [
      { key: 'diagnosis',     label: '自我診斷',   href: 'diagnosis.html' },
      { key: 'parent-report', label: '家長月報',   href: 'parent-report.html' },
      { key: 'anonymous-box', label: '匿名信箱',   href: 'anonymous-box.html' }
    ]}
  ];

  var FOOTER_COLS = [
    { h: '課程方法', links: [
      { label: '課程介紹', href: 'courses.html' },
      { label: '教材與品管', href: 'materials.html' },
      { label: '閱破劍法', href: 'methodology.html' },
      { label: '會考與學測策略', href: 'exam-strategy.html' },
      { label: '自我診斷', href: 'diagnosis.html' }
    ]},
    { h: '陪伴家庭', links: [
      { label: '導師心靈專欄', href: 'mentor-column.html' },
      { label: '家長與學生見證', href: 'testimonials.html' },
      { label: '家長月報', href: 'parent-report.html' },
      { label: '匿名信箱', href: 'anonymous-box.html' }
    ]},
    { h: '體驗活動', links: [
      { label: '體驗活動總覽', href: 'activities.html' },
      { label: '自然輕觸之旅', href: 'event-nature.html' },
      { label: '親子工作坊', href: 'event-workshop.html' }
    ]}
  ];

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

  /* —— 配色主題切換（候選預覽工具；正式採用後可整段移除） —— */
  var THEMES = [
    { key: '',       label: '現行' },
    { key: 'tea',    label: '暖茶宣紙' },
    { key: 'indigo', label: '藏青' }
  ];
  var THEME_KEY = 'sumi-theme';
  function getSavedTheme() {
    try { return localStorage.getItem(THEME_KEY) || ''; } catch (e) { return ''; }
  }
  function applyTheme(key) {
    if (key) { document.documentElement.setAttribute('data-theme', key); }
    else { document.documentElement.removeAttribute('data-theme'); }
    try { localStorage.setItem(THEME_KEY, key); } catch (e) {}
  }
  function buildThemeSwitcher() {
    var active = getSavedTheme();
    var btns = THEMES.map(function (t) {
      var cls = 'theme-switch__btn' + (t.key === active ? ' is-active' : '');
      return '<button type="button" class="' + cls + '" data-theme-key="' + t.key + '">' + esc(t.label) + '</button>';
    }).join('');
    var box = document.createElement('div');
    box.className = 'theme-switch';
    box.setAttribute('role', 'group');
    box.setAttribute('aria-label', '配色預覽切換');
    box.innerHTML = '<span class="theme-switch__label">配色</span>' + btns;
    box.addEventListener('click', function (e) {
      var b = e.target.closest('.theme-switch__btn');
      if (!b) { return; }
      applyTheme(b.getAttribute('data-theme-key'));
      box.querySelectorAll('.theme-switch__btn').forEach(function (x) {
        x.classList.toggle('is-active', x === b);
      });
    });
    document.body.appendChild(box);
  }

  var current = document.body.getAttribute('data-page') || '';

  /* —— 頂部導覽 —— */
  function buildHeader() {
    var mount = document.getElementById('site-header');
    if (!mount) { return; }

    var items = NAV.map(function (item) {
      if (item.children) {
        var childCurrent = item.children.some(function (c) { return c.key === current; });
        var subs = item.children.map(function (c) {
          var cls = 'site-nav__sublink' + (c.key === current ? ' site-nav__sublink--current' : '');
          return '<a class="' + cls + '" href="' + c.href + '">' + esc(c.label) + '</a>';
        }).join('');
        return '<div class="site-nav__item' + (childCurrent ? ' is-current' : '') + '">' +
          '<a class="site-nav__link" href="' + (item.href || item.children[0].href) + '">' + esc(item.label) +
          '<span class="site-nav__caret">▾</span></a>' +
          '<div class="site-nav__sub">' + subs + '</div></div>';
      }
      var isCur = item.key === current;
      return '<div class="site-nav__item' + (isCur ? ' is-current' : '') + '">' +
        '<a class="site-nav__link" href="' + item.href + '">' + esc(item.label) + '</a></div>';
    }).join('');

    mount.className = 'site-header';
    mount.innerHTML =
      '<div class="site-header__inner">' +
        '<a class="site-brand" href="index.html">' +
          '<span class="site-brand__seal">立霖</span>' +
          '<span class="site-brand__name">立霖國文</span>' +
        '</a>' +
        '<nav class="site-nav" id="siteNav">' + items +
          '<button class="site-nav__toggle" id="navToggle" aria-label="選單" aria-expanded="false"><span></span></button>' +
        '</nav>' +
        '<a class="site-header__cta" href="' + lineHref() + '">加 LINE 聊聊</a>' +
      '</div>';

    var nav = document.getElementById('siteNav');
    var toggle = document.getElementById('navToggle');
    if (toggle) {
      toggle.addEventListener('click', function () {
        var open = nav.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    }
  }

  /* —— 頁尾 —— */
  function buildFooter() {
    var mount = document.getElementById('site-footer');
    if (!mount) { return; }

    var cols = FOOTER_COLS.map(function (col) {
      var links = col.links.map(function (l) {
        return '<a href="' + l.href + '">' + esc(l.label) + '</a>';
      }).join('');
      return '<div class="site-footer__col"><h4>' + esc(col.h) + '</h4>' + links + '</div>';
    }).join('');

    mount.className = 'site-footer';
    mount.innerHTML =
      '<div class="site-footer__inner">' +
        '<div class="site-footer__top">' +
          '<div class="site-footer__brand">立霖國文' +
            '<small>素養教學領航者 · 引導 · 信任 · 不浮誇</small></div>' +
          '<div class="site-footer__cols">' + cols +
            '<div class="site-footer__col"><h4>聯絡我們</h4>' +
              '<a class="btn-line-plain" data-line href="' + lineHref() + '">LINE</a>' +
              '<a href="mailto:' + CONTACT_EMAIL + '">' + CONTACT_EMAIL + '</a>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<div class="site-footer__newsletter" data-newsletter>' +
          '<p class="site-footer__newsletter-text">親情橋樑月報——每月一封，給家長的陪伴筆記與教材更新，不轉售名單、隨時可退訂。</p>' +
          '<a class="btn btn--ghost" data-newsletter-link href="#" target="_blank" rel="noopener">訂閱親情橋樑月報</a>' +
        '</div>' +
        '<div class="site-footer__bottom">' +
          '<span>© 立霖國文 Lilin Guowen</span>' +
          '<span><a href="privacy.html">隱私權政策</a></span>' +
          '<span>引導 · 信任 · 不浮誇</span>' +
        '</div>' +
      '</div>';
  }

  /* —— 共用互動 —— */
  function bindReveal() {
    var els = [].slice.call(document.querySelectorAll('.reveal'));
    if (!els.length) { return; }
    if (!('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('is-in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    els.forEach(function (el) { io.observe(el); });
  }

  function bindAccordion() {
    document.querySelectorAll('.accordion__q').forEach(function (q) {
      q.addEventListener('click', function () {
        var item = q.closest('.accordion__item');
        if (item) { item.classList.toggle('is-open'); }
      });
    });
  }

  /* 單選群組（情緒色標 / likert）：同一容器內互斥 */
  function bindSingleSelect(groupSel, btnSel) {
    document.querySelectorAll(groupSel).forEach(function (group) {
      group.addEventListener('click', function (e) {
        var btn = e.target.closest(btnSel);
        if (!btn || !group.contains(btn)) { return; }
        group.querySelectorAll(btnSel).forEach(function (b) { b.classList.toggle('is-active', b === btn); });
        /* bubbles:true 讓 document 層監聽（如診斷頁）收得到；container 供取 data-* */
        group.dispatchEvent(new CustomEvent('sumi:select', {
          bubbles: true,
          detail: {
            value: btn.getAttribute('data-emo') || btn.getAttribute('data-value') || btn.textContent.trim(),
            button: btn,
            container: group
          }
        }));
      });
    });
  }

  function init() {
    buildHeader();
    buildFooter();
    /* buildThemeSwitcher();  — 候選預覽工具，正式上線移除（避免招生站出現配色切換 UI） */
    applyContactLinks();
    applyNewsletterBlocks();
    applyStoreBlocks();
    applySampleForm();
    flushQueuedForms();
    bindReveal();
    bindAccordion();
    bindSingleSelect('.emo-group', '.emo-chip');
    bindSingleSelect('.likert', 'button');
  }

  /* 盡早套用已存主題，降低換色閃爍 */
  applyTheme(getSavedTheme());

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
