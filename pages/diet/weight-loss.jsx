import Head from "next/head";
import { Fragment, useEffect } from "react";
import Image from "next/image";
import PageProgress from "components/PageProgress";

export const metadata = {
  title: "Weight Loss Nutrition Programs | Poshak Tattva",
  description: "Sustainable weight loss through clinical nutrition. Address metabolic imbalances, hormonal factors, and lifestyle patterns for lasting results, not quick fixes."
}

export default function WeightLossPage() {
  useEffect(() => {
    const scales = Array.from(document.querySelectorAll('.rmap-scale'));
    if (!scales.length) return;
    const pins = Array.from(document.querySelectorAll('.rmap-pin'));

    function onScroll() {
      pins.forEach((pin, idx) => {
        let covered = 0;
        for (let j = idx + 1; j < pins.length; j++) {
          if (pins[j].getBoundingClientRect().top <= 84) covered++;
        }
        const s = Math.max(0.90, 1 - covered * 0.032);
        const b = Math.max(0.75, 1 - covered * 0.08);
        if (scales[idx]) {
          scales[idx].style.transform = `scale(${s})`;
          scales[idx].style.filter = `brightness(${b})`;
        }
      });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const cards = [
    { title: "Metabolic Assessment", desc: "Evaluate your full metabolic state, including sleep, stress, and hormones, to understand how your body stores or burns fat." },
    { title: "Blood Sugar Stabilisation", desc: "Structure every meal to stabilize insulin and block fat storage by pairing fibres with proteins and timing carbohydrates." },
    { title: "Satiety-First Meal Design", desc: "Focus on high-volume, nutrient-dense foods that physically fill and emotionally satisfy you to prevent diet failure." },
    { title: "Habit Systems Over Willpower", desc: "Develop compounding weekly micro-goals, meal prep routines, and an environment redesign for lasting habit changes." },
    { title: "Progress Tracking & Adaptation", desc: "Track weekly trends and adapt calorie and macro targets based on real data to ensure you never hit a plateau." },
  ];

  return (
    <>
      <PageProgress />
      <Head>
        <title>Sustainable Weight Loss Diet — No Calorie Counting | Poshak Tattva</title>
        <meta name="description" content="Lose 5–8 kg in 3 months without starving. Metabolic-first weight loss through whole-food nutrition, blood sugar stabilisation & habit systems. No crash diets. Book your consultation." />
        <meta property="og:title" content="Weight Loss Diet — Poshak Tattva" />
        <meta property="og:description" content="Restrictive diets work for 2 weeks and fail for 50. Our metabolic approach fixes the real reasons your body holds weight." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://poshaktattva.com/diet/weight-loss" />
        <meta property="og:image" content="/img/services/diet/Weightloss.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://poshaktattva.com/diet/weight-loss" />
      </Head>

      <main className="content-wrapper">
        <section className="wrapper py-10 hero-header" style={{ background: "linear-gradient(135deg, #3B2A1A 0%, #7A4A1E 60%, #C97B3A 100%)" }}>
          <div className="container text-center">
            <span className="d-block text-uppercase fw-semibold mb-3" style={{ fontSize: 12, letterSpacing: "0.12em", color: "#C2A46F" }}>SUSTAINABLE RESULTS</span>
            <h1 className="display-4 fw-bold mb-4" style={{ color: "#fff" }}>Weight Loss</h1>
            <p className="lead mx-auto" style={{ maxWidth: 640, color: "rgba(255,255,255,0.85)" }}>
              Restrictive diets work for 2 weeks and fail for 50. Our approach addresses the real reasons your body holds onto weight — and fixes them permanently.
            </p>
          </div>
        </section>

        <section className="wrapper py-10">
          <div className="container">
            <div className="card shadow-lg border-0 overflow-hidden" style={{ borderRadius: 24 }}>
              <div className="row g-0 align-items-stretch">
                <div className="col-lg-7 p-6 p-md-8 d-flex flex-column justify-content-center">
                  <h2 className="h3 fw-bold mb-4">Why You Can't Starve Your Way to Lasting Weight Loss</h2>
                  <p className=" mb-3">
                    Calorie restriction works in the short term and backfires in the long term. When you eat too little, your body downregulates its metabolic rate, increases hunger hormones (ghrelin), and reduces satiety hormones (leptin). You lose weight — mostly water and muscle — then regain more fat than you started with.
                  </p>
                  <p className=" mb-3">
                    Sustainable weight loss requires a fundamentally different approach: <strong>fix the metabolic dysfunction first</strong>. Stabilise insulin, repair gut health, support thyroid function, manage cortisol — and your body will release excess fat naturally, without the hunger and misery of traditional dieting.
                  </p>
                  <p className=" mb-4">
                    Our clients typically lose <strong>5–8 kg in the first 3 months</strong> while eating more food than they were before — because we focus on food quality, meal timing, and metabolic repair rather than just reducing portions.
                  </p>
                  <div><a href="/contact-appointment" className="btn btn-primary mt-2">Start Your Transformation</a></div>
                </div>
                <div className="col-lg-5">
                  <div style={{ position: "relative", width: "100%", height: "100%", minHeight: 450, background: "#f8f9fa" }}>
                    <Image
                      src="/img/services/diet/Weightloss.jpg"
                      alt="Clinical nutrition for weight management"
                      fill
                      sizes="(max-width: 991px) 100vw, 500px"
                      style={{ objectFit: "contain", padding: "20px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="wrapper py-10 bg-light">
          <div className="container">
            <div className="text-center mb-10">
              <span className="d-block text-uppercase fw-semibold mb-2" style={{ fontSize: 12, letterSpacing: "0.12em", color: "#C2A46F" }}>OUR PROCESS</span>
              <h2 className="display-6 fw-bold">Five Steps to Permanent Weight Loss</h2>
            </div>
            <div className="rmap-stack">
              {cards.map((item, idx) => (
                <Fragment key={idx}>
                  <div className="rmap-pin" style={{ zIndex: idx + 1 }}>
                    <div className="rmap-scale">
                      <div className="container">
                        <div className="rmap-card text-center text-lg-start">
                          <div className="rmap-text p-6 p-md-8">
                            <span className="rmap-badge">Step {idx + 1}</span>
                            <div className="rmap-num">{idx + 1}</div>
                            <h3 className="rmap-title">{item.title}</h3>
                            <hr className="rmap-hr mx-auto mx-lg-0" />
                            <p className="rmap-desc">{item.desc}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {idx < cards.length - 1 && <div className="rmap-spacer" aria-hidden="true" />}
                </Fragment>
              ))}
            </div>

            <style>{`
 .rmap-stack { padding-bottom: 6vh; }
 .rmap-pin { position: sticky; top: 80px; }
 .rmap-scale {
 transform-origin: top center;
 transition: transform 0.18s ease, filter 0.18s ease;
 }
 .rmap-card {
 background: linear-gradient(140deg, #e9dfd6 0%, #d9ccc0 100%);
 border-radius: 24px;
 overflow: hidden;
 box-shadow: 0 2px 0 rgba(255,255,255,0.6) inset, 0 10px 48px rgba(31,61,43,0.16);
 min-height: 280px;
 }
 .rmap-text {
 display: flex;
 flex-direction: column;
 justify-content: center;
 }
 .rmap-badge {
 display: inline-block;
 background: rgba(31,61,43,0.12);
 color: #1F3D2B;
 font-size: 0.68rem;
 font-weight: 700;
 letter-spacing: 0.13em;
 text-transform: uppercase;
 padding: 4px 14px;
 border-radius: 50px;
 margin-bottom: 16px;
 width: fit-content;
 }
 .rmap-num {
 font-size: 4.5rem;
 font-weight: 900;
 color: rgba(31,61,43,0.10);
 line-height: 1;
 margin-bottom: 4px;
 letter-spacing: -0.02em;
 }
 .rmap-title {
 font-size: 1.6rem;
 font-weight: 700;
 color: #1a1a1a;
 margin-bottom: 10px;
 line-height: 1.3;
 }
 .rmap-hr {
 border: none;
 border-top: 1.5px solid rgba(31,61,43,0.16);
 margin: 14px 0 16px;
 width: 100px;
 }
 .rmap-desc {
 color: #4a4a4a;
 font-size: 0.97rem;
 line-height: 1.78;
 margin: 0;
 }
 .rmap-spacer { height: 40vh; }
 @media (max-width: 768px) {
 .rmap-pin { top: 60px; }
 .rmap-badge { align-self: center; }
 .rmap-hr { margin-left: auto; margin-right: auto; }
 .rmap-spacer { height: 24vh; }
 }
 `}</style>
          </div>
        </section>

        <section className="wrapper py-10 hero" style={{ background: "linear-gradient(135deg, #1F3D2B 0%, #3D5C4A 100%)" }}>
          <div className="container text-center">
            <h2 className="h3 fw-bold mb-4 text-white">Your Transformation Starts Here</h2>
            <p className="text-white mb-6 opacity-75">No crash diets. No deprivation. Just science-backed nutrition that works.</p>
            <a href="/contact-appointment" className="btn btn-lg fw-bold" style={{ background: "white", color: "#1F3D2B", border: "none" }}>Begin Today</a>
          </div>
        </section>
      </main>
    </>
  );
}
