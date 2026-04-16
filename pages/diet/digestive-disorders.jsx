import Head from "next/head";
import { Fragment, useEffect } from "react";
import PageProgress from "components/PageProgress";

export default function DigestiveDisordersPage() {
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
 { title: "Comprehensive Assessment", desc: "Map your symptoms, food history, stress patterns, and bowl habits to formulate a tailored and unique solution." },
 { title: "Elimination & Reintroduction", desc: "Navigate a structured 3-phase protocol to identify food sensitivities by removing and reintroducing suspected irritants." },
 { title: "Gut-Healing Nutrition", desc: "Restore the mucosal lining using satisfying, culturally familiar foods like aloe vera, bone broth alternatives, and soluble fibre." },
 { title: "Microbiome Restoration", desc: "Increase beneficial bacteria diversity safely through prebiotic-rich foods, traditional ferments, and optimal meal timing." },
 { title: "Long-Term Maintenance", desc: "Solidify your progress with a sustainable, lifelong eating framework and regular check-ins to ensure permanent symptomatic relief." },
 ];

 return (
 <>
 <PageProgress />
 <Head>
 <title>Digestive Disorders Diet — IBS, Bloating & Gut Health | Poshak Tattva</title>
 <meta name="description" content="Heal IBS, acid reflux, bloating, constipation & leaky gut through personalised nutrition. Structured elimination protocols & gut repair. See improvement in 2–3 weeks. Book consultation." />
 <meta property="og:title" content="Digestive Disorders Diet — Poshak Tattva" />
 <meta property="og:description" content="Your gut is where health begins. Heal IBS, bloating & reflux through targeted nutrition protocols." />
 <meta property="og:type" content="website" />
 <meta property="og:url" content="https://poshaktattva.com/diet/digestive-disorders" />
 <meta property="og:image" content="/img/services/diet/diet-1.jpg" />
 <meta name="twitter:card" content="summary_large_image" />
 <link rel="canonical" href="https://poshaktattva.com/diet/digestive-disorders" />
 </Head>

 <main className="content-wrapper">
 <section className="wrapper py-10" style={{ background: "linear-gradient(135deg, #f2f8ea 0%, #f9fbf2 100%)" }}>
 <div className="container text-center">
 <span className="d-block text-uppercase fw-semibold mb-3" style={{ fontSize: 12, letterSpacing: "0.12em", color: "#C2A46F" }}>GUT HEALTH</span>
 <h1 className="display-4 fw-bold mb-4">Digestive Disorders</h1>
 <p className="lead mx-auto" style={{ maxWidth: 640 }}>
 Your gut isn't just where food goes — it's where health begins. When digestion breaks down, everything downstream follows: energy, immunity, mood, and sleep.
 </p>
 </div>
 </section>

 <section className="wrapper py-10">
 <div className="container">
 <div className="card shadow-lg border-0 overflow-hidden" style={{ borderRadius: 24 }}>
 <div className="row g-0 align-items-stretch">
 <div className="col-lg-7 p-6 p-md-8 d-flex flex-column justify-content-center">
 <h2 className="h3 fw-bold mb-4">Most Digestive Issues Have a Dietary Root</h2>
 <p className=" mb-3">
 IBS, chronic bloating, GERD, constipation, diarrhea, and leaky gut — these aren't random malfunctions. In the vast majority of cases, they're the body's response to <strong>the wrong foods, eaten in the wrong way, at the wrong times</strong>. The good news? That means they're fixable.
 </p>
 <p className=" mb-3">
 We don't prescribe a one-size-fits-all "clean eating" plan. Every digestive system has its own triggers, tolerances, and rhythms. Our approach starts with understanding yours — through detailed food journaling, symptom mapping, and a structured elimination protocol — then builds a personalised nutrition framework that lets your gut heal itself.
 </p>
 <p className=" mb-4">
 Expect to see meaningful improvement in bloating and discomfort within 2–3 weeks. Full protocol resolution typically takes 8–12 weeks depending on severity.
 </p>
 <div><a href="/contact-appointment" className="btn btn-primary mt-2">Get Digestive Support</a></div>
 </div>
 <div className="col-lg-5">
 <div style={{ position: "relative", width: "100%", height: "100%", minHeight: 320 }}>
 <img src="/img/services/diet/diet-1.jpg" alt="Healthy digestive foods" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }} />
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
 <h2 className="display-6 fw-bold">Five Steps to Digestive Recovery</h2>
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
 <h2 className="h3 fw-bold mb-4 text-white">Restore Your Digestive Health — Permanently</h2>
 <a href="/contact-appointment" className="btn btn-lg fw-bold" style={{ background: "white", color: "#1F3D2B", border: "none" }}>Book Consultation Now</a>
 </div>
 </section>
 </main>
 </>
 );
}
