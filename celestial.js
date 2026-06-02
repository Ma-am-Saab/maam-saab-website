/* celestial.js — a slow drift through deep space for the gift-card strip.
   Parallax star travel + drifting spiral galaxies + a rare UFO easter egg.
   Respects prefers-reduced-motion. */
(function () {
  const c = document.getElementById('celestialCanvas');
  if (!c) return;
  const ctx = c.getContext('2d');
  const reduce = matchMedia('(prefers-reduced-motion:reduce)').matches;
  let W = 0, H = 0, dpr = 1, cx = 0, cy = 0;
  let stars = [], galaxies = [], ufo = null, ufoTimer = 0, t = 0, raf = 0;

  const STAR_COLORS = ['255,250,240', '244,181,58', '236,229,212', '150,200,255'];
  const GAL_COLORS = [
    ['31,163,108', '12,61,43'],   // emerald
    ['255,120,170', '90,30,70'],  // pink
    ['120,180,255', '20,40,90'],  // blue
    ['244,181,58', '120,70,20'],  // gold
  ];

  function rnd(a, b) { return a + Math.random() * (b - a); }

  function spawnStar(atFar) {
    return {
      x: rnd(-W / 2, W / 2),
      y: rnd(-H / 2, H / 2),
      z: atFar ? rnd(W * 0.6, W) : rnd(1, W),
      col: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
      tw: Math.random() * 7
    };
  }

  function spawnGalaxy() {
    const pair = GAL_COLORS[Math.floor(Math.random() * GAL_COLORS.length)];
    return {
      x: rnd(0, W), y: rnd(0, H),
      r: rnd(H * 0.35, H * 0.7),
      rot: Math.random() * Math.PI, spin: rnd(-0.04, 0.04),
      vx: rnd(-0.05, 0.05), vy: rnd(-0.015, 0.015),
      tilt: rnd(0.3, 0.6), arms: Math.random() < 0.5 ? 2 : 3,
      bright: pair[0], dark: pair[1], a: rnd(0.10, 0.20)
    };
  }

  function init() {
    cx = W / 2; cy = H / 2;
    stars = []; const n = Math.max(70, Math.round(W * H / 2400));
    for (let i = 0; i < n; i++) stars.push(spawnStar(false));
    galaxies = []; const g = Math.max(2, Math.round(W / 600));
    for (let i = 0; i < g; i++) galaxies.push(spawnGalaxy());
    ufoTimer = rnd(600, 1400); // frames until first UFO
  }

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    const r = c.getBoundingClientRect();
    W = r.width; H = r.height;
    c.width = Math.max(1, W * dpr); c.height = Math.max(1, H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    init();
  }

  function drawGalaxy(g) {
    ctx.save();
    ctx.translate(g.x, g.y); ctx.rotate(g.rot); ctx.scale(1, g.tilt);
    // soft halo
    const halo = ctx.createRadialGradient(0, 0, 0, 0, 0, g.r);
    halo.addColorStop(0, 'rgba(' + g.bright + ',' + (g.a * 0.9) + ')');
    halo.addColorStop(0.35, 'rgba(' + g.dark + ',' + (g.a * 0.6) + ')');
    halo.addColorStop(1, 'rgba(' + g.dark + ',0)');
    ctx.fillStyle = halo; ctx.beginPath(); ctx.arc(0, 0, g.r, 0, 7); ctx.fill();
    // spiral arms as dotted star streams
    const arms = g.arms;
    for (let a = 0; a < arms; a++) {
      const off = (a / arms) * Math.PI * 2;
      for (let i = 0; i < 90; i++) {
        const f = i / 90;
        const ang = off + f * Math.PI * 3.2;
        const rad = f * g.r * 0.92;
        const px = Math.cos(ang) * rad, py = Math.sin(ang) * rad;
        const al = (1 - f) * g.a * 1.6;
        ctx.fillStyle = 'rgba(' + (f < 0.5 ? '255,250,240' : g.bright) + ',' + al + ')';
        ctx.beginPath(); ctx.arc(px, py, (1 - f) * 1.6 + 0.3, 0, 7); ctx.fill();
      }
    }
    // bright core
    const core = ctx.createRadialGradient(0, 0, 0, 0, 0, g.r * 0.18);
    core.addColorStop(0, 'rgba(255,250,240,' + (g.a * 2.2) + ')');
    core.addColorStop(1, 'rgba(' + g.bright + ',0)');
    ctx.fillStyle = core; ctx.beginPath(); ctx.arc(0, 0, g.r * 0.18, 0, 7); ctx.fill();
    ctx.restore();
  }

  function drawUFO(u) {
    ctx.save();
    ctx.translate(u.x, u.y);
    const bob = Math.sin(t * 2 + u.ph) * 3;
    ctx.translate(0, bob);
    const s = u.s;
    // underglow beam
    const beam = ctx.createLinearGradient(0, 0, 0, s * 3.4);
    beam.addColorStop(0, 'rgba(31,227,208,0.30)');
    beam.addColorStop(1, 'rgba(31,227,208,0)');
    ctx.fillStyle = beam;
    ctx.beginPath(); ctx.moveTo(-s * 0.5, s * 0.3); ctx.lineTo(s * 0.5, s * 0.3);
    ctx.lineTo(s * 1.1, s * 3.2); ctx.lineTo(-s * 1.1, s * 3.2); ctx.closePath(); ctx.fill();
    // dome
    ctx.fillStyle = 'rgba(180,230,255,0.85)';
    ctx.beginPath(); ctx.ellipse(0, -s * 0.28, s * 0.5, s * 0.42, 0, Math.PI, 0); ctx.fill();
    // body
    const body = ctx.createLinearGradient(0, -s * 0.1, 0, s * 0.3);
    body.addColorStop(0, '#cfd6dd'); body.addColorStop(1, '#5a6570');
    ctx.fillStyle = body;
    ctx.beginPath(); ctx.ellipse(0, 0, s * 1.25, s * 0.42, 0, 0, 7); ctx.fill();
    // rim lights
    for (let i = -3; i <= 3; i++) {
      const on = (Math.floor(t * 6) + i + 9) % 3 === 0;
      ctx.fillStyle = on ? '#F4B53A' : 'rgba(244,181,58,0.35)';
      ctx.beginPath(); ctx.arc(i * s * 0.34, s * 0.16, s * 0.09, 0, 7); ctx.fill();
    }
    ctx.restore();
  }

  function frame() {
    t += 0.016;
    // deep space wash
    const bg = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(W, H));
    bg.addColorStop(0, '#0c1512'); bg.addColorStop(0.6, '#0a1010'); bg.addColorStop(1, '#070b0d');
    ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);

    // galaxies drift slowly behind
    for (const g of galaxies) {
      g.x += g.vx; g.y += g.vy; g.rot += g.spin * 0.02;
      if (g.x < -g.r) g.x = W + g.r; if (g.x > W + g.r) g.x = -g.r;
      if (g.y < -g.r) g.y = H + g.r; if (g.y > H + g.r) g.y = -g.r;
      drawGalaxy(g);
    }

    // slow travel through stars (parallax from centre)
    const speed = 0.45;
    for (const s of stars) {
      s.z -= speed;
      if (s.z < 1) { Object.assign(s, spawnStar(true)); continue; }
      const k = 140 / s.z;
      const px = cx + s.x * k, py = cy + s.y * k;
      if (px < -20 || px > W + 20 || py < -20 || py > H + 20) { Object.assign(s, spawnStar(true)); continue; }
      const size = (1 - s.z / W) * 1.8 + 0.2;
      const tw = 0.55 + Math.sin(t * 2 + s.tw) * 0.25;
      ctx.fillStyle = 'rgba(' + s.col + ',' + Math.min(1, (1 - s.z / W) + 0.15) * tw + ')';
      ctx.beginPath(); ctx.arc(px, py, size, 0, 7); ctx.fill();
    }

    // rare UFO easter egg
    ufoTimer--;
    if (!ufo && ufoTimer <= 0) {
      const dir = Math.random() < 0.5 ? 1 : -1;
      const yy = rnd(H * 0.2, H * 0.6);
      ufo = { x: dir > 0 ? -60 : W + 60, y: yy, s: rnd(9, 13), vx: dir * rnd(0.7, 1.2), ph: Math.random() * 7 };
    }
    if (ufo) {
      ufo.x += ufo.vx; ufo.y += Math.sin(t * 0.8) * 0.3;
      drawUFO(ufo);
      if (ufo.x < -80 || ufo.x > W + 80) { ufo = null; ufoTimer = rnd(900, 2000); }
    }

    raf = requestAnimationFrame(frame);
  }

  window.addEventListener('resize', resize);
  resize();
  if (reduce) {
    // static frame: stars + galaxies, no motion
    for (const g of galaxies) drawGalaxy(g);
    for (const s of stars) {
      const k = 140 / s.z, px = cx + s.x * k, py = cy + s.y * k;
      ctx.fillStyle = 'rgba(' + s.col + ',0.7)';
      ctx.beginPath(); ctx.arc(px, py, 1, 0, 7); ctx.fill();
    }
  } else {
    frame();
  }
})();
