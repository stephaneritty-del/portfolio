import { useEffect, useRef, useState } from 'react';

// The headline's final dot starts a messy line. As the visitor scrolls, the
// line scribbles down the right margin of the hero, then straightens out and
// lands on "Shipped." at the top of the work list.
//
// Desktop only (the phone layout has no margin to draw in). Without
// JavaScript nothing is drawn and "Shipped." simply shows as a label.

const DESKTOP = '(min-width: 861px)';

// Keep the whole hero (headline, text, numbers, buttons) inside one screen on
// desktop, whatever the headline length: shrink type and spacing step by step
// until it fits.
function fitHero() {
  const hero = document.querySelector('.home-hero');
  if (!hero) return;
  hero.style.setProperty('--hero-scale', '1');
  if (!window.matchMedia(DESKTOP).matches) return;
  const limit = window.innerHeight + 1;
  let scale = 1;
  while (hero.offsetHeight > limit && scale > 0.5) {
    scale -= 0.04;
    hero.style.setProperty('--hero-scale', scale.toFixed(2));
  }
}

function buildPaths() {
  const anchor = document.querySelector('.dot-anchor');
  const dot = document.querySelector('.title-dot');
  const hero = document.querySelector('.home-hero');
  const content = document.querySelector('.home-hero-content');
  const mark = document.getElementById('shipped-mark');
  if (!anchor || !dot || !hero || !content || !mark) return null;

  const sx0 = window.scrollX;
  const sy0 = window.scrollY;
  const W = document.documentElement.clientWidth;
  const a = anchor.getBoundingClientRect();
  const d = dot.getBoundingClientRect();
  const h = hero.getBoundingClientRect();
  const c = content.getBoundingClientRect();
  const m = mark.getBoundingClientRect();
  const fontSize = parseFloat(getComputedStyle(dot).fontSize) || 80;

  // Start: centre of the headline's full stop (just above the baseline).
  const S = { x: d.left + d.width / 2 + sx0, y: a.top - fontSize * 0.1 + sy0 };
  const heroBottom = h.bottom + sy0;
  const padRight = parseFloat(getComputedStyle(content).paddingRight) || 80;

  // The scribble lives in the strip right of the text column.
  const zx0 = Math.max(S.x + 14, c.right - padRight + 14);
  const zx1 = W - 16;
  const zw = Math.max(24, zx1 - zx0);
  const zm = zx0 + zw / 2;

  let p = `M ${S.x} ${S.y} C ${S.x + 20} ${S.y - 24}, ${zx0 + zw * 0.6} ${S.y - 30}, ${zm} ${S.y + 10}`;
  const top = S.y + 10;
  const bottom = heroBottom - 40;
  const n = Math.max(3, Math.round((bottom - top) / 85));
  const step = (bottom - top) / n;
  let cy = top;
  for (let i = 0; i < n; i++) {
    const j = Math.sin(i * 2.3) * zw * 0.18;
    const r = zw * (0.42 + 0.12 * Math.cos(i * 1.7));
    // Three curves per step, the middle one doubling back to make a real loop.
    p += ` C ${zm + r} ${cy - step * 0.3}, ${zm + r + j} ${cy + step * 0.8}, ${zm} ${cy + step * 0.6}`;
    p += ` C ${zm - r} ${cy + step * 0.4}, ${zm - r * 0.75} ${cy + step * 0.02}, ${zm + r * 0.2} ${cy + step * 0.22}`;
    p += ` C ${zm + r * 0.95} ${cy + step * 0.45}, ${zm + r * 0.3 + j} ${cy + step * 1.02}, ${zm + j * 0.4} ${cy + step}`;
    cy += step;
  }
  const P = { x: zm, y: cy };

  // Clean sweep to "Shipped."
  const E = { x: m.right + 14 + sx0, y: m.top + m.height * 0.58 + sy0 };
  const clean = `M ${P.x} ${P.y} C ${P.x} ${P.y + (E.y - P.y) * 0.75}, ${E.x + (P.x - E.x) * 0.45} ${E.y}, ${E.x} ${E.y}`;

  return { scribble: p, clean, height: E.y + 40, endY: E.y };
}

export default function ScrollLine() {
  const [geo, setGeo] = useState(null);
  const scribbleRef = useRef(null);
  const cleanRef = useRef(null);

  // Build (and rebuild) the geometry after fonts load and on resize.
  useEffect(() => {
    const mq = window.matchMedia(DESKTOP);
    let raf = 0;
    const rebuild = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        fitHero();
        setGeo(mq.matches ? buildPaths() : null);
      });
    };
    rebuild();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(rebuild);
    window.addEventListener('resize', rebuild);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', rebuild);
    };
  }, []);

  // Draw in step with scrolling.
  useEffect(() => {
    const mark = document.getElementById('shipped-mark');
    if (!geo) {
      mark && mark.classList.remove('is-waiting', 'is-shipped');
      return;
    }
    const s = scribbleRef.current;
    const c = cleanRef.current;
    if (!s || !c) return;
    const ls = s.getTotalLength();
    const lc = c.getTotalLength();
    s.style.strokeDasharray = `${ls} ${ls}`;
    c.style.strokeDasharray = `${lc} ${lc}`;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let raf = 0;
    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      const end = Math.max(120, geo.endY - vh * 0.62);
      const t = reduce ? 1 : Math.min(1, Math.max(0, window.scrollY / end));
      const ts = Math.min(1, t / 0.7);
      const tc = Math.min(1, Math.max(0, (t - 0.7) / 0.3));
      s.style.strokeDashoffset = `${ls * (1 - ts)}`;
      c.style.strokeDashoffset = `${lc * (1 - tc)}`;
      if (mark) {
        mark.classList.add('is-waiting');
        mark.classList.toggle('is-shipped', t >= 0.98);
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
    };
  }, [geo]);

  if (!geo) return null;
  return (
    <div className="scroll-line" style={{ height: geo.height }} aria-hidden="true">
      <svg width="100%" height={geo.height}>
        <path ref={scribbleRef} className="scroll-line-scribble" d={geo.scribble} />
        <path ref={cleanRef} className="scroll-line-clean" d={geo.clean} />
      </svg>
    </div>
  );
}
