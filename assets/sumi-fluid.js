/* ============================================================
   立霖國文 · 墨流し GPU 流體 Hero（Three.js r128, ping-pong FBO）
   velocity advection → curl/vorticity → divergence →
   pressure jacobi → gradient subtract → dye advection →
   absorption display（paper * exp(-absorption)）
   僅首頁 index.html 引用；需先載入 three.js r128。
   ============================================================ */
(function () {
  'use strict';

  var canvas = document.getElementById('sumi-canvas');
  var hero = document.getElementById('hero');
  if (!canvas || !hero || typeof THREE === 'undefined') {
    if (hero) { hero.classList.add('no-sim'); }   /* 無 canvas／CDN 被擋：靜態紙紋 */
    return;
  }

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var isMobile = Math.min(window.innerWidth, window.innerHeight) < 640;

  var config = {
    SIM_RES: 256,
    DYE_RES: isMobile ? 720 : 1280,
    PRESSURE_ITER: 28,
    VEL_DISSIPATION: 0.16,
    DYE_DISSIPATION: 0.07,
    CURL: 14,
    SPLAT_RADIUS: 0.0026,
    SPLAT_FORCE: 5200,
    PAPER: [0.980, 0.961, 0.937]      /* #faf5ef */
  };

  /* —— 品牌墨色（無朱紅） —— */
  var INKS = {
    sumi: '#1f2433',
    navy: '#1a365d',
    tea:  '#b86a4a',
    teal: '#4a7c7e'
  };
  var CYCLE_ORDER = ['sumi', 'navy', 'tea', 'teal'];

  function hexToRgb(hex) {
    var n = parseInt(hex.slice(1), 16);
    return [(n >> 16 & 255) / 255, (n >> 8 & 255) / 255, (n & 255) / 255];
  }
  /* 墨色 → absorption 向量：paper * exp(-a) == ink */
  function absorptionOf(hex) {
    var c = hexToRgb(hex);
    return c.map(function (v, i) {
      return Math.min(6, Math.max(0, Math.log(config.PAPER[i] / Math.max(v, 0.012))));
    });
  }
  var ABSORPTION = {};
  Object.keys(INKS).forEach(function (k) { ABSORPTION[k] = absorptionOf(INKS[k]); });

  /* 備援：隱藏畫布與控制列，露出 CSS 靜態紙紋 */
  function fallbackToStatic() {
    hero.classList.add('no-sim');
  }

  var renderer;
  try {
    renderer = new THREE.WebGLRenderer({
      canvas: canvas, antialias: false, alpha: false,
      depth: false, stencil: false, preserveDrawingBuffer: false,
      powerPreference: 'high-performance'
    });
  } catch (e) {
    fallbackToStatic();
    return;
  }
  renderer.autoClear = false;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

  var gl = renderer.getContext();
  var isWebGL2 = renderer.capabilities.isWebGL2;
  if (isWebGL2) {
    gl.getExtension('EXT_color_buffer_float');
    gl.getExtension('OES_texture_float_linear');
  } else {
    gl.getExtension('OES_texture_half_float');
    gl.getExtension('OES_texture_half_float_linear');
    gl.getExtension('EXT_color_buffer_half_float');
  }

  var camera = new THREE.Camera();
  var scene = new THREE.Scene();
  var quad = new THREE.Mesh(new THREE.PlaneBufferGeometry(2, 2), null);
  quad.frustumCulled = false;
  scene.add(quad);

  /* —— Shaders —— */
  var baseVS = [
    'precision highp float;',
    'attribute vec3 position;',
    'attribute vec2 uv;',
    'uniform vec2 texelSize;',
    'varying vec2 vUv; varying vec2 vL; varying vec2 vR; varying vec2 vT; varying vec2 vB;',
    'void main () {',
    '  vUv = uv;',
    '  vL = uv - vec2(texelSize.x, 0.0);',
    '  vR = uv + vec2(texelSize.x, 0.0);',
    '  vT = uv + vec2(0.0, texelSize.y);',
    '  vB = uv - vec2(0.0, texelSize.y);',
    '  gl_Position = vec4(position, 1.0);',
    '}'
  ].join('\n');

  var advectionFS = [
    'precision highp float; precision highp sampler2D;',
    'varying vec2 vUv;',
    'uniform sampler2D uVelocity; uniform sampler2D uSource;',
    'uniform vec2 velTexelSize; uniform float dt; uniform float dissipation;',
    'void main () {',
    '  vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * velTexelSize;',
    '  vec4 result = texture2D(uSource, coord);',
    '  gl_FragColor = result / (1.0 + dissipation * dt);',
    '}'
  ].join('\n');

  var splatFS = [
    'precision highp float; precision highp sampler2D;',
    'varying vec2 vUv;',
    'uniform sampler2D uTarget; uniform float aspectRatio;',
    'uniform vec3 color; uniform vec2 point; uniform float radius;',
    'uniform float clampMax;',
    'void main () {',
    '  vec2 p = vUv - point;',
    '  p.x *= aspectRatio;',
    '  vec3 splat = exp(-dot(p, p) / radius) * color;',
    '  vec3 base = texture2D(uTarget, vUv).xyz;',
    '  gl_FragColor = vec4(min(base + splat, vec3(clampMax)), 1.0);',
    '}'
  ].join('\n');

  var curlFS = [
    'precision mediump float; precision mediump sampler2D;',
    'varying vec2 vUv; varying vec2 vL; varying vec2 vR; varying vec2 vT; varying vec2 vB;',
    'uniform sampler2D uVelocity;',
    'void main () {',
    '  float L = texture2D(uVelocity, vL).y;',
    '  float R = texture2D(uVelocity, vR).y;',
    '  float T = texture2D(uVelocity, vT).x;',
    '  float B = texture2D(uVelocity, vB).x;',
    '  float vorticity = R - L - T + B;',
    '  gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);',
    '}'
  ].join('\n');

  var vorticityFS = [
    'precision highp float; precision highp sampler2D;',
    'varying vec2 vUv; varying vec2 vL; varying vec2 vR; varying vec2 vT; varying vec2 vB;',
    'uniform sampler2D uVelocity; uniform sampler2D uCurl;',
    'uniform float curl; uniform float dt;',
    'void main () {',
    '  float L = texture2D(uCurl, vL).x;',
    '  float R = texture2D(uCurl, vR).x;',
    '  float T = texture2D(uCurl, vT).x;',
    '  float B = texture2D(uCurl, vB).x;',
    '  float C = texture2D(uCurl, vUv).x;',
    '  vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));',
    '  force /= length(force) + 0.0001;',
    '  force *= curl * C;',
    '  force.y *= -1.0;',
    '  vec2 velocity = texture2D(uVelocity, vUv).xy;',
    '  velocity += force * dt;',
    '  velocity = clamp(velocity, vec2(-1000.0), vec2(1000.0));',
    '  gl_FragColor = vec4(velocity, 0.0, 1.0);',
    '}'
  ].join('\n');

  var divergenceFS = [
    'precision mediump float; precision mediump sampler2D;',
    'varying vec2 vUv; varying vec2 vL; varying vec2 vR; varying vec2 vT; varying vec2 vB;',
    'uniform sampler2D uVelocity;',
    'void main () {',
    '  float L = texture2D(uVelocity, vL).x;',
    '  float R = texture2D(uVelocity, vR).x;',
    '  float T = texture2D(uVelocity, vT).y;',
    '  float B = texture2D(uVelocity, vB).y;',
    '  vec2 C = texture2D(uVelocity, vUv).xy;',
    '  if (vL.x < 0.0) { L = -C.x; }',
    '  if (vR.x > 1.0) { R = -C.x; }',
    '  if (vT.y > 1.0) { T = -C.y; }',
    '  if (vB.y < 0.0) { B = -C.y; }',
    '  float div = 0.5 * (R - L + T - B);',
    '  gl_FragColor = vec4(div, 0.0, 0.0, 1.0);',
    '}'
  ].join('\n');

  var clearFS = [
    'precision mediump float; precision mediump sampler2D;',
    'varying vec2 vUv;',
    'uniform sampler2D uTexture; uniform float value;',
    'void main () {',
    '  gl_FragColor = value * texture2D(uTexture, vUv);',
    '}'
  ].join('\n');

  var pressureFS = [
    'precision mediump float; precision mediump sampler2D;',
    'varying vec2 vUv; varying vec2 vL; varying vec2 vR; varying vec2 vT; varying vec2 vB;',
    'uniform sampler2D uPressure; uniform sampler2D uDivergence;',
    'void main () {',
    '  float L = texture2D(uPressure, vL).x;',
    '  float R = texture2D(uPressure, vR).x;',
    '  float T = texture2D(uPressure, vT).x;',
    '  float B = texture2D(uPressure, vB).x;',
    '  float divergence = texture2D(uDivergence, vUv).x;',
    '  float pressure = (L + R + B + T - divergence) * 0.25;',
    '  gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);',
    '}'
  ].join('\n');

  var gradientSubtractFS = [
    'precision mediump float; precision mediump sampler2D;',
    'varying vec2 vUv; varying vec2 vL; varying vec2 vR; varying vec2 vT; varying vec2 vB;',
    'uniform sampler2D uPressure; uniform sampler2D uVelocity;',
    'void main () {',
    '  float L = texture2D(uPressure, vL).x;',
    '  float R = texture2D(uPressure, vR).x;',
    '  float T = texture2D(uPressure, vT).x;',
    '  float B = texture2D(uPressure, vB).x;',
    '  vec2 velocity = texture2D(uVelocity, vUv).xy;',
    '  velocity.xy -= vec2(R - L, T - B);',
    '  gl_FragColor = vec4(velocity, 0.0, 1.0);',
    '}'
  ].join('\n');

  /* 顯示：和紙纖維 noise（高/中/低頻）+ 減法混色 + vignette */
  var displayFS = [
    'precision highp float; precision highp sampler2D;',
    'varying vec2 vUv;',
    'uniform sampler2D uDye;',
    'uniform vec3 paperColor;',
    'uniform vec2 resolution;',
    'float hash (vec2 p) {',
    '  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);',
    '}',
    'float noise (vec2 p) {',
    '  vec2 i = floor(p); vec2 f = fract(p);',
    '  vec2 u = f * f * (3.0 - 2.0 * f);',
    '  return mix(mix(hash(i),               hash(i + vec2(1.0, 0.0)), u.x),',
    '             mix(hash(i + vec2(0.0,1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);',
    '}',
    'void main () {',
    '  vec3 absorption = texture2D(uDye, vUv).rgb;',
    '  vec2 px = vUv * resolution;',
    '  float fiberHi  = noise(px * 0.85);',
    '  float fiberMid = noise(px * 0.16 + 31.7);',
    '  float fiberLo  = noise(px * 0.028 + 77.3);',
    '  float grain = (fiberHi * 0.5 + fiberMid * 0.3 + fiberLo * 0.2) - 0.5;',
    '  vec3 paper = paperColor * (1.0 + grain * 0.05);',
    '  absorption *= 0.94 + 0.12 * noise(px * 0.45 + 11.1);',
    '  vec3 color = paper * exp(-absorption);',
    '  vec2 d = vUv - 0.5;',
    '  color *= 1.0 - dot(d, d) * 0.30;',
    '  gl_FragColor = vec4(color, 1.0);',
    '}'
  ].join('\n');

  function makeMaterial(fs, uniforms) {
    uniforms.texelSize = { value: new THREE.Vector2(1, 1) };
    return new THREE.RawShaderMaterial({
      vertexShader: baseVS, fragmentShader: fs, uniforms: uniforms,
      depthTest: false, depthWrite: false, blending: THREE.NoBlending
    });
  }

  var advectionMat = makeMaterial(advectionFS, {
    uVelocity: { value: null }, uSource: { value: null },
    velTexelSize: { value: new THREE.Vector2() },
    dt: { value: 0 }, dissipation: { value: 0 }
  });
  var splatMat = makeMaterial(splatFS, {
    uTarget: { value: null }, aspectRatio: { value: 1 },
    color: { value: new THREE.Vector3() },
    point: { value: new THREE.Vector2() }, radius: { value: 1 },
    clampMax: { value: 24.0 }
  });
  var curlMat = makeMaterial(curlFS, { uVelocity: { value: null } });
  var vorticityMat = makeMaterial(vorticityFS, {
    uVelocity: { value: null }, uCurl: { value: null },
    curl: { value: config.CURL }, dt: { value: 0 }
  });
  var divergenceMat = makeMaterial(divergenceFS, { uVelocity: { value: null } });
  var clearMat = makeMaterial(clearFS, { uTexture: { value: null }, value: { value: 0.8 } });
  var pressureMat = makeMaterial(pressureFS, {
    uPressure: { value: null }, uDivergence: { value: null }
  });
  var gradientMat = makeMaterial(gradientSubtractFS, {
    uPressure: { value: null }, uVelocity: { value: null }
  });
  var displayMat = makeMaterial(displayFS, {
    uDye: { value: null },
    paperColor: { value: new THREE.Vector3(config.PAPER[0], config.PAPER[1], config.PAPER[2]) },
    resolution: { value: new THREE.Vector2() }
  });

  /* —— FBO ——
     模擬需要帶號半浮點 render target；不支援時直接走靜態備援，
     不退化成 UnsignedByte（無法存負速度／高吸收值，畫面會壞掉）。 */
  var halfFloatOk = isWebGL2
    ? !!gl.getExtension('EXT_color_buffer_float')
    : !!(renderer.extensions.get('OES_texture_half_float') &&
         renderer.extensions.get('OES_texture_half_float_linear') &&
         gl.getExtension('EXT_color_buffer_half_float'));
  if (!halfFloatOk) {
    fallbackToStatic();
    return;
  }
  var rtType = THREE.HalfFloatType;

  function createRT(w, h) {
    return new THREE.WebGLRenderTarget(w, h, {
      wrapS: THREE.ClampToEdgeWrapping, wrapT: THREE.ClampToEdgeWrapping,
      minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter,
      format: THREE.RGBAFormat, type: rtType,
      depthBuffer: false, stencilBuffer: false
    });
  }
  function createDoubleRT(w, h) {
    return {
      read: createRT(w, h), write: createRT(w, h),
      texelSize: new THREE.Vector2(1 / w, 1 / h),
      swap: function () { var t = this.read; this.read = this.write; this.write = t; }
    };
  }
  function getResolution(base) {
    var aspect = canvas.clientWidth / Math.max(canvas.clientHeight, 1);
    if (aspect < 1) { return { w: base, h: Math.round(base / aspect) }; }
    return { w: Math.round(base * aspect), h: base };
  }

  var velocity, dye, pressure, divergence, curl;
  function initFBOs() {
    var sim = getResolution(config.SIM_RES);
    var dy = getResolution(config.DYE_RES);
    [velocity, dye, pressure].forEach(function (f) {
      if (f) { f.read.dispose(); f.write.dispose(); }
    });
    if (divergence) { divergence.dispose(); }
    if (curl) { curl.dispose(); }
    velocity = createDoubleRT(sim.w, sim.h);
    dye = createDoubleRT(dy.w, dy.h);
    pressure = createDoubleRT(sim.w, sim.h);
    divergence = createRT(sim.w, sim.h);
    curl = createRT(sim.w, sim.h);
  }

  function blit(material, target, texelSize) {
    material.uniforms.texelSize.value.copy(texelSize);
    quad.material = material;
    renderer.setRenderTarget(target);
    renderer.render(scene, camera);
  }

  /* —— Splat —— */
  function aspect() { return canvas.clientWidth / Math.max(canvas.clientHeight, 1); }

  var lastSplatAt = performance.now();
  function splatVelocity(x, y, dx, dy_, radiusScale) {
    lastSplatAt = performance.now();
    splatMat.uniforms.uTarget.value = velocity.read.texture;
    splatMat.uniforms.aspectRatio.value = aspect();
    splatMat.uniforms.point.value.set(x, y);
    splatMat.uniforms.color.value.set(dx, dy_, 0);
    splatMat.uniforms.radius.value = config.SPLAT_RADIUS * (radiusScale || 1);
    splatMat.uniforms.clampMax.value = 1e5;     /* 速度為帶號值，不截斷 */
    blit(splatMat, velocity.write, velocity.texelSize);
    velocity.swap();
  }
  function splatDye(x, y, abs, strength, radiusScale) {
    lastSplatAt = performance.now();
    splatMat.uniforms.uTarget.value = dye.read.texture;
    splatMat.uniforms.aspectRatio.value = aspect();
    splatMat.uniforms.point.value.set(x, y);
    splatMat.uniforms.color.value.set(abs[0] * strength, abs[1] * strength, abs[2] * strength);
    splatMat.uniforms.radius.value = config.SPLAT_RADIUS * (radiusScale || 1);
    splatMat.uniforms.clampMax.value = 24.0;    /* 染料上限，防累積爆量 */
    blit(splatMat, dye.write, dye.texelSize);
    dye.swap();
  }
  /* 滴一滴墨：墨點 + 周圍錯位的外推水流（同點疊加等同單次，需錯位才有亂流） */
  function drop(x, y, inkKey, big) {
    var abs = ABSORPTION[inkKey] || ABSORPTION.sumi;
    splatDye(x, y, abs, big ? 0.95 : 0.7, big ? 4.2 : 2.6);
    var n = 3;
    for (var i = 0; i < n; i++) {
      var a = Math.random() * Math.PI * 2;
      var f = (big ? 320 : 220) * (0.5 + Math.random());
      var ox = x + (Math.random() - 0.5) * 0.012;
      var oy = y + (Math.random() - 0.5) * 0.012;
      splatVelocity(ox, oy, Math.cos(a) * f, Math.sin(a) * f, 3.0);
    }
  }

  /* —— 模擬步進 —— */
  var washUntil = 0;
  function step(dt) {
    curlMat.uniforms.uVelocity.value = velocity.read.texture;
    blit(curlMat, curl, velocity.texelSize);

    vorticityMat.uniforms.uVelocity.value = velocity.read.texture;
    vorticityMat.uniforms.uCurl.value = curl.texture;
    vorticityMat.uniforms.dt.value = dt;
    blit(vorticityMat, velocity.write, velocity.texelSize);
    velocity.swap();

    divergenceMat.uniforms.uVelocity.value = velocity.read.texture;
    blit(divergenceMat, divergence, velocity.texelSize);

    clearMat.uniforms.uTexture.value = pressure.read.texture;
    blit(clearMat, pressure.write, velocity.texelSize);
    pressure.swap();
    for (var i = 0; i < config.PRESSURE_ITER; i++) {
      pressureMat.uniforms.uPressure.value = pressure.read.texture;
      pressureMat.uniforms.uDivergence.value = divergence.texture;
      blit(pressureMat, pressure.write, velocity.texelSize);
      pressure.swap();
    }

    gradientMat.uniforms.uPressure.value = pressure.read.texture;
    gradientMat.uniforms.uVelocity.value = velocity.read.texture;
    blit(gradientMat, velocity.write, velocity.texelSize);
    velocity.swap();

    advectionMat.uniforms.uVelocity.value = velocity.read.texture;
    advectionMat.uniforms.uSource.value = velocity.read.texture;
    advectionMat.uniforms.velTexelSize.value.copy(velocity.texelSize);
    advectionMat.uniforms.dt.value = dt;
    advectionMat.uniforms.dissipation.value = config.VEL_DISSIPATION;
    blit(advectionMat, velocity.write, velocity.texelSize);
    velocity.swap();

    var washing = performance.now() < washUntil;
    advectionMat.uniforms.uVelocity.value = velocity.read.texture;
    advectionMat.uniforms.uSource.value = dye.read.texture;
    advectionMat.uniforms.dissipation.value = washing ? 3.2 : config.DYE_DISSIPATION;
    blit(advectionMat, dye.write, dye.texelSize);
    dye.swap();
  }

  function render() {
    displayMat.uniforms.uDye.value = dye.read.texture;
    displayMat.uniforms.resolution.value.set(canvas.clientWidth, canvas.clientHeight);
    quad.material = displayMat;
    renderer.setRenderTarget(null);
    renderer.render(scene, camera);
  }

  /* ============================================================
     互動
     ============================================================ */
  var currentInk = 'cycle';
  var cycleIdx = 0;
  var pointerDown = false;
  var gestureInk = 'sumi';
  var lastX = 0.5, lastY = 0.5;
  var hasLast = false;
  var lastInteract = performance.now();
  var autoOn = true;
  var hintEl = document.getElementById('hint');
  var hintGone = false;

  function pickInk() {
    if (currentInk !== 'cycle') { return currentInk; }
    return CYCLE_ORDER[cycleIdx % CYCLE_ORDER.length];
  }
  function advanceCycle() {
    if (currentInk === 'cycle') { cycleIdx++; }
  }
  function hideHint() {
    if (!hintGone && hintEl) { hintGone = true; hintEl.classList.add('is-hidden'); }
  }
  setTimeout(hideHint, 9000);

  function toUV(e) {
    var r = canvas.getBoundingClientRect();
    return {
      x: (e.clientX - r.left) / r.width,
      y: 1 - (e.clientY - r.top) / r.height
    };
  }

  canvas.addEventListener('pointerdown', function (e) {
    if (!e.isPrimary) { return; }
    try { canvas.setPointerCapture(e.pointerId); } catch (err) {}
    pointerDown = true;
    var p = toUV(e);
    lastX = p.x; lastY = p.y; hasLast = true;
    gestureInk = pickInk();
    drop(p.x, p.y, gestureInk, false);
    advanceCycle();
    lastInteract = performance.now();
    hideHint();
  });

  canvas.addEventListener('pointermove', function (e) {
    if (!e.isPrimary) { return; }
    var p = toUV(e);
    if (!hasLast) {
      lastX = p.x; lastY = p.y; hasLast = true;
      return;
    }
    var rdx = p.x - lastX;
    var rdy = p.y - lastY;
    if (Math.abs(rdx) < 0.0005 && Math.abs(rdy) < 0.0005) { return; }
    var dx = rdx * config.SPLAT_FORCE;
    var dy_ = rdy * config.SPLAT_FORCE;
    if (pointerDown) {
      splatVelocity(p.x, p.y, dx, dy_, 1);
      splatDye(p.x, p.y, ABSORPTION[gestureInk] || ABSORPTION.sumi, 0.22, 1);
    } else {
      splatVelocity(p.x, p.y, dx * 0.55, dy_ * 0.55, 1.6);
    }
    lastX = p.x; lastY = p.y;
    lastInteract = performance.now();
    hideHint();
  });

  canvas.addEventListener('pointerleave', function () { hasLast = false; });
  window.addEventListener('pointerup', function () { pointerDown = false; });
  window.addEventListener('pointercancel', function () { pointerDown = false; hasLast = false; });

  /* —— 鍵盤 ——
     Space 只在 hero 占多數視口時接手，避免擋掉內容區的捲動；
     焦點在按鈕／連結／表單上時不攔截，保留鍵盤無障礙操作。 */
  var heroVisible = true;
  var heroMostlyVisible = true;
  window.addEventListener('keydown', function (e) {
    if (!heroMostlyVisible || e.repeat) { return; }
    var el = document.activeElement;
    if (el && el !== document.body && el.tagName !== 'CANVAS') { return; }
    if (e.code === 'Space') {
      e.preventDefault();
      drop(0.15 + Math.random() * 0.7, 0.2 + Math.random() * 0.6, pickInk(), true);
      advanceCycle();
      lastInteract = performance.now();
      hideHint();
    } else if (e.code === 'KeyX') {
      wash();
    }
  });

  /* —— 滌淨 —— */
  function wash() {
    washUntil = performance.now() + 1600;
    lastInteract = performance.now();
  }
  var washBtn = document.getElementById('washBtn');
  if (washBtn) { washBtn.addEventListener('click', wash); }

  /* —— 墨色按鈕 —— */
  var inkBtns = Array.prototype.slice.call(document.querySelectorAll('.ink'));
  inkBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      currentInk = btn.getAttribute('data-ink');
      inkBtns.forEach(function (b) { b.classList.toggle('is-active', b === btn); });
    });
  });

  /* —— 自動行墨 —— */
  var autoBtn = document.getElementById('autoBtn');
  if (autoBtn) {
    autoBtn.addEventListener('click', function () {
      autoOn = !autoOn;
      autoBtn.classList.toggle('is-on', autoOn);
    });
  }

  var autoDropEvery = reducedMotion ? 9000 : 3000;
  var lastAutoDrop = 0;
  var flowPhase = Math.random() * 100;
  function autoPerform(now, dt) {
    if (!autoOn) { return; }
    var idle = now - lastInteract;
    if (idle > autoDropEvery && now - lastAutoDrop > autoDropEvery) {
      lastAutoDrop = now;
      var x = 0.18 + Math.random() * 0.64;
      var y = 0.22 + Math.random() * 0.56;
      var key = CYCLE_ORDER[Math.floor(Math.random() * CYCLE_ORDER.length)];
      drop(x, y, key, false);
      if (Math.random() < 0.4) {
        var others = CYCLE_ORDER.filter(function (k) { return k !== key; });
        var key2 = others[Math.floor(Math.random() * others.length)];
        setTimeout(function () {
          if (!autoOn || !heroVisible || performance.now() < washUntil) { return; }
          drop(
            Math.min(0.92, Math.max(0.08, x + (Math.random() - 0.5) * 0.16)),
            Math.min(0.92, Math.max(0.08, y + (Math.random() - 0.5) * 0.16)),
            key2, false
          );
        }, 380 + Math.random() * 400);
      }
    }
    flowPhase += dt * 0.35;
    var fx = 0.5 + 0.34 * Math.sin(flowPhase * 0.9 + 1.3);
    var fy = 0.5 + 0.3 * Math.cos(flowPhase * 0.7);
    var strength = reducedMotion ? 5 : 16;
    splatVelocity(fx, fy,
      Math.cos(flowPhase * 1.7) * strength,
      Math.sin(flowPhase * 1.3) * strength, 5.0);
  }

  /* ============================================================
     啟動
     ============================================================ */
  function resize() {
    var w = canvas.clientWidth, h = canvas.clientHeight;
    if (canvas.width !== Math.floor(w * renderer.getPixelRatio()) ||
        canvas.height !== Math.floor(h * renderer.getPixelRatio())) {
      renderer.setSize(w, h, false);
      initFBOs();
    }
  }
  renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
  initFBOs();
  window.addEventListener('resize', function () { resize(); });

  /* GPU context 遺失（行動裝置背景回收等）：停止迴圈、退回靜態紙紋 */
  var contextLost = false;
  canvas.addEventListener('webglcontextlost', function (e) {
    e.preventDefault();
    contextLost = true;
    fallbackToStatic();
  });

  /* 首屏節目：三滴墨 */
  setTimeout(function () { drop(0.38, 0.58, 'sumi', true); }, 120);
  setTimeout(function () { drop(0.62, 0.42, 'navy', true); }, 570);
  setTimeout(function () { drop(0.50, 0.62, 'tea', true); }, 1070);

  /* hero 離開視口時暫停渲染；取最後一筆紀錄避免批次送達時誤判 */
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      var last = entries[entries.length - 1];
      heroVisible = last.isIntersecting;
      heroMostlyVisible = last.isIntersecting && last.intersectionRatio >= 0.5;
    }, { threshold: [0, 0.02, 0.5, 0.55] }).observe(hero);
  }

  var lastTime = performance.now();
  function loop() {
    if (contextLost) { return; }
    requestAnimationFrame(loop);
    var now = performance.now();
    var dt = Math.min((now - lastTime) / 1000, 1 / 30);
    lastTime = now;
    if (!heroVisible || document.hidden || dt <= 0) { return; }
    autoPerform(now, dt);
    var settled = !autoOn && (now - lastSplatAt > 20000);
    if (!settled) { step(dt); }
    render();
  }
  loop();
})();
