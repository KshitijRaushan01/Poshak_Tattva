import Head from "next/head";
import { Fragment, useEffect } from "react";
import Image from "next/image";
import PageProgress from "components/PageProgress";

export const metadata = {
  title: "Meditation Classes | Poshak Tattva",
  description: "Clinical meditation protocols to reduce cortisol, lower neuroinflammation, and rebuild cognitive resilience. Structured neuro-regulatory interventions with measurable outcomes."
}

export default function MeditationPage() {
 const techniques = [
 { title: "Guided Visualization", desc: "Follow a practitioner's voice through calming mental imagery — forests, oceans, sacred spaces — to quiet mental chatter and access deeper states of awareness." },
 { title: "Breath-Anchored Mindfulness", desc: "Use the natural rhythm of your breath as an anchor to stay present. This practice trains your mind to return to the 'now' instead of looping through past or future worries." },
 { title: "Body Scan Meditation", desc: "A systematic journey through every region of your body, noticing tension, warmth, and sensation. Releases stored physical stress you didn't know you were carrying." },
 { title: "Mantra & Sound Meditation", desc: "Repetition of sacred syllables like 'Om' or 'So Hum' creates a vibrational resonance that slows brainwave activity and induces calm without effort." },
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
 <title>Online Meditation & Mindfulness Classes | Poshak Tattva</title>
 <meta name="description" content="Learn meditation techniques that actually work — guided visualization, breath-anchored mindfulness, body scan & mantra meditation. For busy professionals. Online & Delhi in-person. Book free session." />
 <meta property="og:title" content="Meditation & Mindfulness Classes — Poshak Tattva" />
 <meta property="og:description" content="Train your mind the same way you train your body. Practical meditation for real people with real schedules." />
 <meta property="og:type" content="website" />
 <meta property="og:url" content="https://poshaktattva.com/yoga/meditation" />
 <meta property="og:image" content="/img/services/yoga/Meditation.jpg" />
 <meta name="twitter:card" content="summary_large_image" />
 <link rel="canonical" href="https://poshaktattva.com/yoga/meditation" />
 </Head>

 <main className="content-wrapper">
 {/* Hero */}
 <section className="wrapper py-10 hero-header" style={{ background: "linear-gradient(135deg, #1F3D2B 0%, #3D5C4A 60%, #2E7D6E 100%)" }}>
 <div className="container text-center">
 <span className="d-block text-uppercase fw-semibold mb-3" style={{ fontSize: 12, letterSpacing: "0.12em", color: "#C2A46F" }}>MINDFULNESS PRACTICE</span>
 <h1 className="display-4 fw-bold mb-4" style={{ color: "#fff" }}>Meditation &amp; Mindfulness</h1>
 <p className="lead mx-auto" style={{ maxWidth: 640, color: "rgba(255,255,255,0.85)" }}>
 Train your mind the same way you train your body — with patience, consistency, and the right guidance. Our meditation programs are designed for real people with real schedules.
 </p>
 </div>
 </section>

 {/* Main Content */}
 <section className="wrapper py-10">
 <div className="container">
 <div className="row g-5 align-items-center">
 <div className="col-lg-6">
 <h2 className="h3 fw-bold mb-4">Why Meditation Isn't Just "Sitting Still"</h2>
 <p className=" mb-3">
 Most people think meditation means emptying the mind. It doesn't. Meditation is the practice of <strong>observing</strong> your thoughts without reacting to them — and that single skill changes everything: how you handle stress, how you sleep, how you relate to others, and how clearly you think.
 </p>
 <p className=" mb-3">
 Regular meditation practice has been shown to reduce cortisol levels, lower blood pressure, improve attention span, and even change the physical structure of the brain — thickening areas responsible for self-awareness and compassion while shrinking the amygdala (your brain's fear center).
 </p>
 <p className=" mb-4">
 Our sessions are structured for urban professionals who need results, not rituals. Whether you have 10 minutes or an hour, we'll build a practice that fits your day — and actually sticks.
 </p>
 <a href="/contact-appointment" className="btn btn-primary">Start Meditating Today</a>
 </div>
 <div className="col-lg-6">
 <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.12)" }}>
 <img
 src="/img/services/yoga/Meditation.jpg"
 alt="Person meditating in serene setting"
 style={{ width: "100%", height: 320, objectFit: "cover", display: "block" }}
 />
 </div>
 </div>
 </div>

 {/* Benefits Strip */}
 <div className="row mt-12 g-3">
 {[
 { icon: "🧠", label: "Sharper Focus" },
 { icon: "😴", label: "Better Sleep" },
 { icon: "💆", label: "Lower Stress" },
 { icon: "❤️", label: "Emotional Balance" },
 { icon: "⚡", label: "More Energy" },
 { icon: "🎯", label: "Clarity of Purpose" },
 ].map((b, i) => (
 <div key={i} className="col-6 col-md-4 col-lg-2">
 <div className="text-center p-3 rounded-3" style={{ backgroundColor: "#faf7f2" }}>
 <div style={{ fontSize: "1.8rem" }}>{b.icon}</div>
 <small className="fw-semibold" style={{ color: "#1F3D2B" }}>{b.label}</small>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Techniques — Stacking Cards */}
 <section className="wrapper py-10 bg-light">
 <div className="container">
 <div className="text-center mb-10">
 <span className="d-block text-uppercase fw-semibold mb-2" style={{ fontSize: 12, letterSpacing: "0.12em", color: "#C2A46F" }}>TECHNIQUES WE TEACH</span>
 <h2 className="display-6 fw-bold">Four Pathways to Inner Stillness</h2>
 </div>
 <div className="rmap-stack">
 {techniques.map((t, i) => (
 <Fragment key={i}>
 <div className="rmap-pin" style={{ zIndex: i + 1 }}>
 <div className="rmap-scale">
 <div className="container">
 <div className="rmap-card text-center text-lg-start">
 <div className="rmap-text p-6 p-md-8">
 <span className="rmap-badge">Step {i + 1}</span>
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
 <h2 className="h3 fw-bold mb-4 text-white">Your Mind Deserves the Same Care as Your Body</h2>
 <p className="text-white mb-6 opacity-75">Book a free introductory session and discover which meditation style fits your life.</p>
 <a href="/contact-appointment" className="btn btn-lg fw-bold" style={{ background: "white", color: "#1F3D2B", border: "none" }}>
 Book Free Session
 </a>
 </div>
 </section>
 </main>
 </>
 );
}
