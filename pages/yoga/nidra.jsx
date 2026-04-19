import Head from "next/head";
import { Fragment, useEffect } from "react";
import PageProgress from "components/PageProgress";

export const metadata = {
  title: "Yoga Nidra | Poshak Tattva",
  description: "Experience deep restorative sleep through guided Yoga Nidra sessions. This ancient practice induces complete physical, mental, and emotional relaxation for profound healing."
}

export default function YogaNidraPage() {
 const stages = [
 { title: "Settling into Savasana", desc: "You lie down comfortably in corpse pose while the practitioner creates a safe container — adjusting lighting, temperature, and ambiance. External distractions fade as your body begins surrendering to gravity." },
 { title: "Sankalpa (Intention Setting)", desc: "You plant a positive resolve — a short, heartfelt statement about who you are becoming. Spoken during the hypnagogic state between waking and sleep, it bypasses the rational mind and seeds directly into your subconscious." },
 { title: "Systematic Body Rotation", desc: "Awareness is guided methodically through 61 points of the body — from thumb to forehead, left to right. This activates the sensory-motor cortex, inducing a state of profound physical relaxation without losing consciousness." },
 { title: "Visualization & Awakening", desc: "The practitioner guides you through symbolic imagery — a still lake, a golden light, an ancient temple. These images work on the emotional layer, releasing stored impressions. Then, gently, you return to waking awareness — rested, clear, and renewed." },
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
 <title>Yoga Nidra — Guided Deep Relaxation & Conscious Sleep | Poshak Tattva</title>
 <meta name="description" content="Experience Yoga Nidra — 30 minutes equals 4 hours of sleep. Guided conscious sleep for insomnia, anxiety, chronic pain & emotional healing. Online & Delhi sessions. Book now." />
 <meta property="og:title" content="Yoga Nidra — Deep Relaxation — Poshak Tattva" />
 <meta property="og:description" content="The yoga of conscious sleep. 30 minutes of Nidra = 4 hours of regular sleep. Book your session." />
 <meta property="og:type" content="website" />
 <meta property="og:url" content="https://poshaktattva.com/yoga/nidra" />
 <meta property="og:image" content="/img/services/yoga/yognidra.jpg" />
 <meta name="twitter:card" content="summary_large_image" />
 <link rel="canonical" href="https://poshaktattva.com/yoga/nidra" />
 </Head>

 <main className="content-wrapper">
 {/* Hero */}
 <section className="wrapper py-10" style={{ background: "linear-gradient(135deg, #f0f7f2 0%, #eaf2ed 100%)" }}>
 <div className="container text-center">
 <span className="d-block text-uppercase fw-semibold mb-3" style={{ fontSize: 12, letterSpacing: "0.12em", color: "#C2A46F" }}>DEEP REST PROTOCOL</span>
 <h1 className="display-4 fw-bold mb-4">Yoga Nidra</h1>
 <p className="lead mx-auto" style={{ maxWidth: 640 }}>
 The yoga of conscious sleep — a guided practice where your body sleeps, your mind stays aware, and healing happens at every level.
 </p>
 </div>
 </section>

 {/* Content */}
 <section className="wrapper py-10">
 <div className="container">
 <div className="row g-5 align-items-center">
 <div className="col-lg-6">
 <h2 className="h3 fw-bold mb-4">Why 30 Minutes of Nidra Equals 4 Hours of Sleep</h2>
 <p className=" mb-3">
 During ordinary sleep, your consciousness shuts down. Your body repairs itself, but the mind remains on autopilot — recycling the same stress patterns, replaying the same worries. You wake up "rested" but not <em>restored</em>.
 </p>
 <p className=" mb-3">
 Yoga Nidra is different. It guides you into the <strong>hypnagogic state</strong> — the threshold between waking and sleeping — and keeps you there. In this state, brainwave activity shifts from beta (active thinking) to alpha and theta (deep relaxation and dreaming), while you remain fully aware. Your body enters its deepest repair mode while your subconscious becomes accessible.
 </p>
 <p className=" mb-4">
 This is why practitioners report relief from insomnia, anxiety, chronic pain, and even PTSD after consistent Nidra practice. It's not relaxation — it's <strong>systematic nervous system rewiring</strong>.
 </p>
 <a href="/contact-appointment" className="btn btn-primary">Book Yoga Nidra Session</a>
 </div>
 <div className="col-lg-6">
 <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.12)" }}>
 <img
 src="/img/services/yoga/yognidra.jpg"
 alt="Person lying in savasana during yoga nidra"
 style={{ width: "100%", height: 320, objectFit: "cover", display: "block" }}
 />
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Stage Cards */}
 <section className="wrapper py-10 bg-light">
 <div className="container">
 <div className="text-center mb-10">
 <span className="d-block text-uppercase fw-semibold mb-2" style={{ fontSize: 12, letterSpacing: "0.12em", color: "#C2A46F" }}>THE JOURNEY</span>
 <h2 className="display-6 fw-bold">Four Stages of Conscious Sleep</h2>
 </div>
 <div className="rmap-stack">
 {stages.map((s, i) => (
 <Fragment key={i}>
 <div className="rmap-pin" style={{ zIndex: i + 1 }}>
 <div className="rmap-scale">
 <div className="container">
 <div className="rmap-card text-center text-lg-start">
 <div className="rmap-text p-6 p-md-8">
 <span className="rmap-badge">Stage {i + 1}</span>
 <div className="rmap-num">{i + 1}</div>
 <h3 className="rmap-title">{s.title}</h3>
 <hr className="rmap-hr mx-auto mx-lg-0" />
 <p className="rmap-desc">{s.desc}</p>
 </div>
 </div>
 </div>
 </div>
 </div>
 {i < stages.length - 1 && <div className="rmap-spacer" aria-hidden="true" />}
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
 <h2 className="h3 fw-bold mb-4 text-white">Sleep Deeper. Heal Faster. Wake Up Different.</h2>
 <p className="text-white mb-6 opacity-75">No prior experience needed. Just lie down. We'll guide the rest.</p>
 <a href="/contact-appointment" className="btn btn-lg fw-bold" style={{ background: "white", color: "#1F3D2B", border: "none" }}>
 Join Yoga Nidra Class
 </a>
 </div>
 </section>
 </main>
 </>
 );
}
