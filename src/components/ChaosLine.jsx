import { useEffect, useRef } from 'react';

// The messy scribble that resolves into a clean rising line.
// Without JavaScript (or with reduced motion) it simply shows fully drawn.
// With JavaScript, it hides itself and draws once it scrolls into view.
export default function ChaosLine({ startLabel, endLabel }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) return;

    el.classList.add('will-draw');
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          el.classList.add('is-drawn');
          io.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className="chaos-line" ref={ref}>
      <p className="chaos-end">{endLabel}</p>
      <svg viewBox="0 0 1440 260" fill="none" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
        <path
          className="chaos-scribble"
          d="M96,190 C130,130 180,240 150,210 C115,175 210,120 230,185 C250,250 150,230 195,165 C235,110 320,230 290,215 C250,195 350,130 370,180 C390,230 300,240 350,175 C395,120 450,210 430,205 C400,195 470,145 520,170 C545,182 560,176 580,170"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          className="chaos-clean"
          d="M580,170 C700,140 760,155 860,130 C980,100 1060,108 1180,72 C1260,48 1300,42 1344,38"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle className="chaos-dot" cx="1344" cy="38" r="7" />
      </svg>
      <p className="chaos-start">{startLabel}</p>
    </div>
  );
}
