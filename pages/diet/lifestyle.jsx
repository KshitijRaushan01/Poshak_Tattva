import Head from "next/head";
import { Fragment, useEffect } from "react";
import PageProgress from "components/PageProgress";

export const metadata = {
  title: "Lifestyle Management Nutrition | Poshak Tattva",
  description: "Holistic nutrition coaching for sustainable lifestyle changes. Build healthy habits, optimize metabolism, and maintain long-term wellness through personalized dietary guidance."
}

export default function LifestyleDisordersPage() {
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
 { title: "Deep Health Assessment", desc: "Complete evaluation of metabolic markers, sleep, stress, and eating habits before recommending any dietary change." },
 { title: "Metabolic Reset Nutrition", desc: "Retrain your metabolism using nutrient-dense, anti-inflammatory meals, balanced blood sugar, and strategic fasting windows." },
 { title: "Cardiovascular Protection", desc: "Reduce inflammatory markers and improve lipid ratios naturally through omega-3s, soluble fibre, and plant sterols." },
 { title: "Sustainable Habit Architecture", desc: "Build lasting change through one small habit per week, smart environment design, and biweekly accountability check-ins." },
 ];

 return (
 <>
 <PageProgress />
 <Head>
 <title>Lifestyle Disorders Diet — Diabetes, BP & Cholesterol Reversal | Poshak Tattva</title>
 <meta name="description" content="Reverse Type 2 Diabetes, hypertension, high cholesterol & metabolic syndrome through sustainable nutrition. Reduce HbA1c by 1–2 points in 8–12 weeks. Doctor-supervised protocols. Book now." />
 <meta property="og:title" content="Lifestyle Disorders Diet — Poshak Tattva" />
 <meta property="og:description" content="Diabetes, BP & cholesterol aren't inevitable. Reverse them through sustainable dietary protocols." />
 <meta property="og:type" content="website" />
 <meta property="og:url" content="https://poshaktattva.com/diet/lifestyle" />
 <meta property="og:image" content="/img/services/diet/diet-3.jpg" />
 <meta name="twitter:card" content="summary_large_image" />
 <link rel="canonical" href="https://poshaktattva.com/diet/lifestyle" />
 </Head>

 <main className="content-wrapper">
 <section className="wrapper py-10 hero-header" style={{ background: "linear-gradient(135deg, #3B2A1A 0%, #7A4A1E 60%, #C97B3A 100%)" }}>
 <div className="container text-center">
 <span className="d-block text-uppercase fw-semibold mb-3" style={{ fontSize: 12, letterSpacing: "0.12em", color: "#C2A46F" }}>METABOLIC HEALTH</span>
 <h1 className="display-4 fw-bold mb-4" style={{ color: "#fff" }}>Lifestyle Disorders</h1>
 <p className="lead mx-auto" style={{ maxWidth: 640, color: "rgba(255,255,255,0.85)" }}>
 Diabetes, hypertension, high cholesterol, and obesity aren't inevitable consequences of aging — they're the result of compounding dietary and lifestyle patterns that can be systematically reversed.
 </p>
 </div>
 </section>

 <section className="wrapper py-10">
 <div className="container">
 <div className="card shadow-lg border-0 overflow-hidden" style={{ borderRadius: 24 }}>
 <div className="row g-0 align-items-stretch">
 <div className="col-lg-7 p-6 p-md-8 d-flex flex-column justify-content-center">
 <h2 className="h3 fw-bold mb-4">These Conditions Are Reversible — Not Just Manageable</h2>
 <p className=" mb-3">
 Type 2 Diabetes, hypertension, high cholesterol, and metabolic syndrome share a common thread: they develop gradually through years of dietary patterns that push the body's regulatory systems past their limits. The conventional approach is lifelong medication management. Our approach is different.
 </p>
 <p className=" mb-3">
 We work alongside your existing medical care to introduce structured nutritional changes that target the <strong>metabolic root causes</strong> — insulin resistance, chronic low-grade inflammation, and visceral fat accumulation. The goal isn't to "eat healthier" in a vague sense. It's to measurably improve your blood markers within 8–12 weeks.
 </p>
 <p className=" mb-4">
 We've seen clients reduce HbA1c by 1–2 points, lower blood pressure enough to taper medication (under doctor supervision), and lose 5–10 kg of visceral fat — all through food changes alone, without deprivation or extreme restriction.
 </p>
 <div><a href="/contact-appointment" className="btn btn-primary mt-2">Start Your Recovery</a></div>
 </div>
 <div className="col-lg-5">
 <div style={{ position: "relative", width: "100%", height: "100%", minHeight: 320 }}>
 <img src="/img/services/diet/diet-3.jpg" alt="Healthy lifestyle food preparation" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }} />
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
 <h2 className="display-6 fw-bold">Four Steps to Metabolic Recovery</h2>
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
 <h2 className="h3 fw-bold mb-4 text-white">Reclaim Your Health — Permanently</h2>
 <a href="/contact-appointment" className="btn btn-lg fw-bold" style={{ background: "white", color: "#1F3D2B", border: "none" }}>Book Consultation</a>
 </div>
 </section>
 </main>
 </>
 );
}
