import Head from "next/head";
import { Fragment, useEffect } from "react";
import PageProgress from "components/PageProgress";

export default function AutoimmuneDisordersPage() {
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

 const pillars = [
 {
 title: "Identify & Eliminate Triggers",
 desc: "We use a structured elimination protocol to identify food triggers like gluten or dairy, then rebuild your diet safely.",
 },
 {
 title: "Repair the Gut Lining",
 desc: "Focus on gut-healing, collagen-supporting nutrients to fix intestinal permeability and stop undigested proteins from triggering immune responses.",
 },
 {
 title: "Reduce Systemic Inflammation",
 desc: "Follow an anti-inflammatory nutrition plan rich in omega-3s, turmeric, and antioxidants to actively lower inflammatory markers.",
 },
 {
 title: "Restore Microbiome Balance",
 desc: "Rebuild microbial diversity through prebiotic fibres, fermented foods, and strategic probiotic timing to improve immune response.",
 },
 ];

 return (
 <>
 <PageProgress />
 <Head>
 <title>Autoimmune Diet Support — Anti-Inflammatory Nutrition | Poshak Tattva</title>
 <meta name="description" content="Diet support for autoimmune conditions — RA, Hashimoto's, Lupus, Psoriasis, Crohn's. Reduce inflammation, repair gut lining & calm immune overactivity through targeted nutrition protocols. Book consultation." />
 <meta property="og:title" content="Autoimmune Diet Support — Poshak Tattva" />
 <meta property="og:description" content="When your immune system attacks your body, the right nutrition makes the difference. Book a consultation." />
 <meta property="og:type" content="website" />
 <meta property="og:url" content="https://poshaktattva.com/diet/autoimmune" />
 <meta property="og:image" content="/img/home/roadmap-assessment.png" />
 <meta name="twitter:card" content="summary_large_image" />
 <link rel="canonical" href="https://poshaktattva.com/diet/autoimmune" />
 </Head>

 <main className="content-wrapper">
 <section className="wrapper py-10" style={{ background: "linear-gradient(135deg, #f2f8ea 0%, #f9fbf2 100%)" }}>
 <div className="container text-center">
 <span className="d-block text-uppercase fw-semibold mb-3" style={{ fontSize: 12, letterSpacing: "0.12em", color: "#C2A46F" }}>IMMUNE SUPPORT</span>
 <h1 className="display-4 fw-bold mb-4">Autoimmune Disorders</h1>
 <p className="lead mx-auto" style={{ maxWidth: 640 }}>
 When your immune system attacks your own body, the right nutrition can be the difference between constant flares and sustained remission.
 </p>
 </div>
 </section>

 <section className="wrapper py-10">
 <div className="container">
 <div className="card shadow-lg border-0 overflow-hidden" style={{ borderRadius: 24 }}>
 <div className="row g-0 align-items-stretch">
 <div className="col-lg-7 p-6 p-md-8 d-flex flex-column justify-content-center">
 <h2 className="h3 fw-bold mb-4">Why Food Matters More Than Medication Alone</h2>
 <p className=" mb-3">
 Autoimmune conditions — Rheumatoid Arthritis, Hashimoto's, Lupus, Psoriasis, Celiac, Crohn's — all share a common pattern: the immune system loses the ability to distinguish between foreign invaders and your own tissue. Medication manages the symptoms, but it doesn't address the <em>why</em>.
 </p>
 <p className=" mb-3">
 Research increasingly points to three controllable factors: <strong>intestinal permeability</strong>, <strong>microbiome composition</strong>, and <strong>chronic inflammation</strong> — all of which are directly influenced by what you eat, when you eat, and how your body processes it.
 </p>
 <p className=" mb-4">
 Our protocols don't replace your doctor — they work alongside your treatment plan. We focus on removing dietary triggers that worsen flares, repairing the gut barrier, and flooding your body with anti-inflammatory whole foods that actively calm immune hyperactivity.
 </p>
 <div>
 <a href="/contact-appointment" className="btn btn-primary mt-2">Get Dietary Support</a>
 </div>
 </div>
 <div className="col-lg-5">
 <div style={{ position: "relative", width: "100%", height: "100%", minHeight: 320 }}>
 <img src="/img/home/roadmap-assessment.png" alt="Anti-inflammatory foods and ingredients" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }} />
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
 <h2 className="display-6 fw-bold">Four Pillars of Immune Recovery</h2>
 </div>
 <div className="rmap-stack">
 {pillars.map((item, idx) => (
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
 {idx < pillars.length - 1 && <div className="rmap-spacer" aria-hidden="true" />}
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
 <h2 className="h3 fw-bold mb-4 text-white">Move from Managing Symptoms to Sustained Remission</h2>
 <a href="/contact-appointment" className="btn btn-lg fw-bold" style={{ background: "white", color: "#1F3D2B", border: "none" }}>Book Consultation</a>
 </div>
 </section>
 </main>
 </>
 );
}
