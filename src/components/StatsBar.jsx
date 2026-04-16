import { useEffect, useRef, useState } from "react";

/* ── Stat data (matches Testimonials section context) ─────── */
const STATS = [
  {icon: <img src="https://img.icons8.com/glyph-neue/64/guru.png" alt="guru" style={{ filter: "brightness(0) invert(1)", width: 40, height: 40, marginBottom: 12, opacity: 0.9 }}/>, id: "students",  raw: 15000,   suffix: "+",  label: "Students Trained"  },
  {icon: <img src="https://img.icons8.com/emoji/96/star-emoji.png" alt="star-emoji" style={{ width: 40, height: 40, marginBottom: 12, opacity: 0.9 }}/>, id: "rating",    raw: null, suffix: "",     label: "Average Rating",  fixed: "4.9/5" },
  {icon: <img src="https://img.icons8.com/external-justicon-flat-justicon/64/external-trophy-reward-and-badges-justicon-flat-justicon-1.png" alt="external-trophy-reward-and-badges-justicon-flat-justicon-1" style={{ width: 40, height: 40, marginBottom: 12, opacity: 0.9 }}/>, id: "years",     raw: 5,    suffix: "+",    label: "Years Experience" },
  {icon: <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-wellness-lifestyles-flaticons-lineal-color-flat-icons-4.png" alt="external-wellness-lifestyles-flaticons-lineal-color-flat-icons-4" style={{ width: 40, height: 40, marginBottom: 12, opacity: 0.9 }}/>, id: "programs",  raw: 50,   suffix: "+",    label: "Wellness Programs" },
];

/* ── Count-up hook ────────────────────────────────────────── */
function useCountUp(target, duration = 1800, started) {
  const [count, setCount] = useState(0);
  const raf = useRef(null);

  useEffect(() => {
    if (!started || target === null) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) raf.current = requestAnimationFrame(step);
    };
    raf.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf.current);
  }, [target, duration, started]);

  return count;
}

/* ── Single stat item ─────────────────────────────────────── */
function StatItem({ stat, active, index, isLast }) {
  const count = useCountUp(stat.raw, 1800, active);
  const display = stat.fixed ?? `${count}${stat.suffix}`;

  return (
    <div
      className={`sb-item${active ? " sb-item--in" : ""}`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {stat.icon && <div>{stat.icon}</div>}
      <div className="sb-number">{display}</div>
      <div className="sb-label">{stat.label}</div>
      {!isLast && <div className="sb-divider" aria-hidden="true" />}
    </div>
  );
}

/* ── Main component ───────────────────────────────────────── */
export default function StatsBar() {
  const ref = useRef(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTriggered(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="sb-section" ref={ref} aria-label="Key statistics">
      <div className="container">
        <div className="sb-row">
          {STATS.map((stat, i) => (
            <StatItem
              key={stat.id}
              stat={stat}
              active={triggered}
              index={i}
              isLast={i === STATS.length - 1}
            />
          ))}
        </div>
      </div>

      <style>{`
       .sb-section {
       background: linear-gradient(135deg, rgba(17, 107, 53, 0.85) 0%, rgba(61, 92, 74, 0.85) 100%);
        padding: 20px 0;
        }

        .sb-row {
          display: flex;
          align-items: center;
          justify-content: space-around;
          flex-wrap: nowrap;
          position: relative;
        }

        .sb-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 12px 24px;
          flex: 1;
          position: relative;
          opacity: 0;
          transform: translateY(12px);
        }

        .sb-item--in {
          animation: sbIn 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        @keyframes sbIn {
          to { opacity: 1; transform: translateY(0); }
        }

        .sb-number {
          font-size: clamp(1.7rem, 3.5vw, 2.6rem);
          font-weight: 800;
          color: #fff;
          line-height: 1;
          letter-spacing: -0.03em;
          font-variant-numeric: tabular-nums;
        }

        .sb-label {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.7);
          font-weight: 500;
          letter-spacing: 0.02em;
          margin-top: 5px;
          white-space: nowrap;
        }

        /* Vertical divider between items */
        .sb-divider {
          position: absolute;
          right: 0;
          top: 20%;
          height: 60%;
          width: 1px;
          background: rgba(255,255,255,0.18);
        }

        /* Mobile: stack 2×2 then single column */
        @media (max-width: 600px) {
          .sb-row {
            flex-wrap: wrap;
          }
          .sb-item {
            flex: 0 0 50%;
            padding: 14px 8px;
          }
          .sb-divider { display: none; }
          .sb-label { white-space: normal; }
        }
      `}</style>
    </section>
  );
}
