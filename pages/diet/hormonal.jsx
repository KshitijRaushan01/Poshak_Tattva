import Head from "next/head";
import { Fragment, useEffect } from "react";
import PageProgress from "components/PageProgress";

export default function HormonalDisordersPage() {
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
 { title: "Endocrine-Supportive Foods", desc: "Prioritise nutrient-dense raw materials like zinc, selenium, and healthy fats your body needs to properly regulate hormones." },
 { title: "Blood Sugar Regulation", desc: "Maintain steady blood glucose through balanced macros, fibre-first eating, and strategic carbohydrate timing to stabilize insulin." },
 { title: "Liver & Detox Support", desc: "Support liver detoxification pathways through targeted nutrition to efficiently clear out excess estrogen, cortisol, and thyroid hormones." },
 { title: "Stress-Hormone Management", desc: "Address cortisol elevation with adaptogenic foods, circadian-aligned meal timing, and nervous system-calming nutrients like magnesium." },
 ];

 return (
 <>
 <PageProgress />
 <Head>
 <title>Hormonal Balance Diet — PCOS, Thyroid & Cortisol Support | Poshak Tattva</title>
 <meta name="description" content="Rebalance PCOS, thyroid, estrogen dominance & cortisol naturally through precision nutrition. See energy & mood changes in 2–3 weeks, lab improvements in 2–3 months. Book consultation." />
 <meta property="og:title" content="Hormonal Balance Diet — Poshak Tattva" />
 <meta property="og:description" content="Fatigue, mood swings & weight gain aren't 'normal'. Rebalance your hormones through targeted nutrition." />
 <meta property="og:type" content="website" />
 <meta property="og:url" content="https://poshaktattva.com/diet/hormonal" />
 <meta property="og:image" content="/img/services/diet/diet-2.jpg" />
 <meta name="twitter:card" content="summary_large_image" />
 <link rel="canonical" href="https://poshaktattva.com/diet/hormonal" />
 </Head>

 <main className="content-wrapper">
 <section className="wrapper py-10" style={{ background: "linear-gradient(135deg, #f2f8ea 0%, #f9fbf2 100%)" }}>
 <div className="container text-center">
 <span className="d-block text-uppercase fw-semibold mb-3" style={{ fontSize: 12, letterSpacing: "0.12em", color: "#C2A46F" }}>HORMONAL HEALTH</span>
 <h1 className="display-4 fw-bold mb-4">Hormonal Balance</h1>
 <p className="lead mx-auto" style={{ maxWidth: 640 }}>
 Fatigue, mood swings, weight gain, irregular cycles, brain fog — these aren't "just part of getting older." They're signals your hormones are out of balance. And nutrition is the most powerful lever to correct them.
 </p>
 </div>
 </section>

 <section className="wrapper py-10">
 <div className="container">
 <div className="card shadow-lg border-0 overflow-hidden" style={{ borderRadius: 24 }}>
 <div className="row g-0 align-items-stretch">
 <div className="col-lg-7 p-6 p-md-8 d-flex flex-column justify-content-center">
 <h2 className="h3 fw-bold mb-4">Your Hormones Are a System, Not Individual Parts</h2>
 <p className=" mb-3">
 PCOS, thyroid dysfunction, estrogen dominance, insulin resistance, and cortisol overload aren't separate problems — they're interconnected. When one hormone is disrupted, it creates a cascade that throws the entire endocrine system off balance.
 </p>
 <p className=" mb-3">
 That's why treating symptoms in isolation rarely works. Our approach addresses the <strong>hormonal ecosystem as a whole</strong> — stabilising blood sugar first (because insulin affects everything), supporting liver detoxification (so excess hormones are cleared), and providing the micronutrients your glands need to function optimally.
 </p>
 <p className=" mb-4">
 Most clients notice changes in energy and mood within 2–3 weeks. Cycle regulation and measurable lab improvements typically follow within 2–3 months of consistent protocol adherence.
 </p>
 <div><a href="/contact-appointment" className="btn btn-primary mt-2">Rebalance Your Hormones</a></div>
 </div>
 <div className="col-lg-5">
 <div style={{ position: "relative", width: "100%", height: "100%", minHeight: 320 }}>
 <img src="/img/services/diet/diet-2.jpg" alt="Hormone-supportive whole foods" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }} />
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>

 <section className="wrapper py-10 bg-light">
 <div className="container">
 <div className="text-center mb-10">
 <span className="d-block text-uppercase fw-semibold mb-2" style={{ fontSize: 12, letterSpacing: "0.12em", color: "#C2A46F" }}>OUR APPROACH</span>
 <h2 className="display-6 fw-bold">Four Pillars of Hormonal Recovery</h2>
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

 <section className="wrapper py-10" style={{ background: "linear-gradient(135deg, #1F3D2B 0%, #3D5C4A 100%)" }}>
 <div className="container text-center">
 <h2 className="h3 fw-bold mb-4 text-white">Take Control of Your Hormonal Health</h2>
 <a href="/contact-appointment" className="btn btn-lg fw-bold" style={{ background: "white", color: "#1F3D2B", border: "none" }}>Get Consultation</a>
 </div>
 </section>
 </main>
 </>
 );
}
