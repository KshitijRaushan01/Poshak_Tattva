import Head from "next/head";
import { Fragment, useEffect } from "react";
import PageProgress from "components/PageProgress";

export const metadata = {
  title: "Pranayama Techniques | Poshak Tattva",
  description: "Learn specific pranayama breathing exercises for stress reduction, energy enhancement, and mental clarity. Traditional yogic breathing practices adapted for modern life."
}

export default function PranayamsPage() {
 const techniques = [
 { title: "Nadi Shodhana", subtitle: "Alternate Nostril Breathing", desc: "Balances the left and right hemispheres of the brain, calms the nervous system, and clears energy channels. The go-to technique for acute anxiety and scattered thinking." },
 { title: "Kapalabhati", subtitle: "Skull-Shining Breath", desc: "Short, powerful exhales followed by passive inhales. Fires up metabolism, clears sinus pathways, and oxygenates the blood. Best practiced on an empty stomach in the morning." },
 { title: "Ujjayi Pranayama", subtitle: "Ocean Breath", desc: "A slow, audible breath created by slightly constricting the back of the throat. Generates internal heat, anchors attention during asana practice, and regulates heart rate variability." },
 { title: "Bhramari", subtitle: "Humming Bee Breath", desc: "The vibration of humming activates the vagus nerve, lowers cortisol, and induces calm within minutes. Remarkably effective for insomnia, tinnitus, and pre-performance anxiety." },
 { title: "Bhastrika", subtitle: "Bellows Breath", desc: "Rapid, forceful inhales and exhales that supercharge your energy levels, increase lung capacity, and burn through lethargy. Used traditionally to prepare the body for deep meditation." },
 ];

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

 return (
 <>
 <PageProgress />
 <Head>
 <title>Pranayama Breathing Techniques — Online Classes | Poshak Tattva</title>
 <meta name="description" content="Master pranayama breathing — Nadi Shodhana, Kapalabhati, Ujjayi, Bhramari & Bhastrika. Control anxiety, boost energy & improve lung capacity. Online classes available. Enroll now." />
 <meta property="og:title" content="Pranayama Breathing Techniques — Poshak Tattva" />
 <meta property="og:description" content="Your breath is the most underrated healing tool. Master 5 core pranayama techniques." />
 <meta property="og:type" content="website" />
 <meta property="og:url" content="https://poshaktattva.com/yoga/pranayams" />
 <meta property="og:image" content="/img/services/yoga/pranayam.jpg" />
 <meta name="twitter:card" content="summary_large_image" />
 <link rel="canonical" href="https://poshaktattva.com/yoga/pranayams" />
 </Head>

 <main className="content-wrapper">
 {/* Hero */}
 <section className="wrapper py-10" style={{ background: "linear-gradient(135deg, #f0f7f2 0%, #eaf2ed 100%)" }}>
 <div className="container text-center">
 <span className="d-block text-uppercase fw-semibold mb-3" style={{ fontSize: 12, letterSpacing: "0.12em", color: "#C2A46F" }}>BREATHWORK</span>
 <h1 className="display-4 fw-bold mb-4">Pranayama Techniques</h1>
 <p className="lead mx-auto" style={{ maxWidth: 640 }}>
 Your breath is the only bodily function that is both automatic and voluntary — which means it's your direct gateway to controlling your nervous system.
 </p>
 </div>
 </section>

 {/* Content */}
 <section className="wrapper py-10">
 <div className="container">
 <div className="row g-5 align-items-center">
 <div className="col-lg-6">
 <h2 className="h3 fw-bold mb-4">Why Breath Is the Most Underrated Healing Tool</h2>
 <p className=" mb-3">
 You take approximately <strong>20,000 breaths per day</strong>. Most of them are shallow, chest-level, and unconscious — triggering a low-grade stress response that compounds over years into anxiety, poor digestion, brain fog, and chronic fatigue.
 </p>
 <p className=" mb-3">
 Pranayama reverses this. By deliberately changing the <em>depth, pace, rhythm, and ratio</em> of your inhales and exhales, you gain direct influence over your heart rate, blood pressure, hormonal balance, and emotional state. It's not positive thinking — it's physiology.
 </p>
 <p className=" mb-4">
 Our classes teach time-tested techniques from Hatha Yoga and Patanjali's system, adapted for modern practitioners. No mysticism, just results you can feel in your first session.
 </p>
 <a href="/contact-appointment" className="btn btn-primary">Start Pranayama Practice</a>
 </div>
 <div className="col-lg-6">
 <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.12)" }}>
 <img
 src="/img/services/yoga/pranayam.jpg"
 alt="Person practicing pranayama breathing"
 style={{ width: "100%", height: 320, objectFit: "cover", display: "block" }}
 />
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Technique Cards */}
 <section className="wrapper py-10 bg-light">
 <div className="container">
 <div className="text-center mb-10">
 <span className="d-block text-uppercase fw-semibold mb-2" style={{ fontSize: 12, letterSpacing: "0.12em", color: "#C2A46F" }}>TECHNIQUES WE TEACH</span>
 <h2 className="display-6 fw-bold">Five Core Breathing Practices</h2>
 </div>
 <div className="rmap-stack">
 {techniques.map((t, i) => (
 <Fragment key={i}>
 <div className="rmap-pin" style={{ zIndex: i + 1 }}>
 <div className="rmap-scale">
 <div className="container">
 <div className="rmap-card text-center text-lg-start">
 <div className="rmap-text p-6 p-md-8">
 <span className="rmap-badge">{t.subtitle}</span>
 <div className="rmap-num">{i + 1}</div>
 <h3 className="rmap-title">{t.title}</h3>
 <hr className="rmap-hr mx-auto mx-lg-0" />
 <p className="rmap-desc">{t.desc}</p>
 </div>
 </div>
 </div>
 </div>
 </div>
 {i < techniques.length - 1 && <div className="rmap-spacer" aria-hidden="true" />}
 </Fragment>
 ))}
 </div>
 <style>{`
 .rmap-stack { padding-bottom: 6vh; }
 .rmap-pin { position: sticky; top: 80px; }
 .rmap-scale { transform-origin: top center; transition: transform 0.18s ease, filter 0.18s ease; }
 .rmap-card { background: linear-gradient(140deg, #e9dfd6 0%, #d9ccc0 100%); border-radius: 24px; overflow: hidden; box-shadow: 0 2px 0 rgba(255,255,255,0.6) inset, 0 10px 48px rgba(31,61,43,0.16); min-height: 280px; }
 .rmap-text { display: flex; flex-direction: column; justify-content: center; }
 .rmap-badge { display: inline-block; background: rgba(31,61,43,0.12); color: #1F3D2B; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.13em; text-transform: uppercase; padding: 4px 14px; border-radius: 50px; margin-bottom: 16px; width: fit-content; }
 .rmap-num { font-size: 4.5rem; font-weight: 900; color: rgba(31,61,43,0.10); line-height: 1; margin-bottom: 4px; letter-spacing: -0.02em; }
 .rmap-title { font-size: 1.6rem; font-weight: 700; color: #1a1a1a; margin-bottom: 10px; line-height: 1.3; }
 .rmap-hr { border: none; border-top: 1.5px solid rgba(31,61,43,0.16); margin: 14px 0 16px; width: 100px; }
 .rmap-desc { color: #4a4a4a; font-size: 0.97rem; line-height: 1.78; margin: 0; }
 .rmap-spacer { height: 40vh; }
 @media (max-width: 768px) { .rmap-pin { top: 60px; } .rmap-badge { align-self: center; } .rmap-hr { margin-left: auto; margin-right: auto; } .rmap-spacer { height: 24vh; } }
 `}</style>
 </div>
 </section>

 {/* CTA */}
 <section className="wrapper py-10" style={{ background: "linear-gradient(135deg, #1F3D2B 0%, #3D5C4A 100%)" }}>
 <div className="container text-center">
 <h2 className="h3 fw-bold mb-4 text-white">Master Your Breath. Master Your Life.</h2>
 <p className="text-white mb-6 opacity-75">Join a pranayama class and feel the difference in your very first session.</p>
 <a href="/contact-appointment" className="btn btn-lg fw-bold" style={{ background: "white", color: "#1F3D2B", border: "none" }}>
 Enroll in Pranayama Class
 </a>
 </div>
 </section>
 </main>
 </>
 );
}
