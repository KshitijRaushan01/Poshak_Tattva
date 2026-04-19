import Head from "next/head";
import { Fragment, useEffect } from "react";
import PageProgress from "components/PageProgress";

export const metadata = {
  title: "Pranayama Breathing Techniques | Poshak Tattva",
  description: "Master ancient breathing techniques to regulate your nervous system, reduce stress, and enhance mental clarity. Pranayama practices for modern wellness."
}

export default function PrivateSessionsPage() {
 const idealFor = [
 { title: "First-Time Practitioners", desc: "Never done yoga? Perfect. Private sessions let you learn proper alignment, breathing, and posture from scratch — without the pressure of keeping up with a group." },
 { title: "Injury Recovery & Rehab", desc: "Recovering from a back injury, knee surgery, or shoulder issue? We design therapeutic sequences that rebuild strength and mobility safely — working with your physiotherapist's guidance, not against it." },
 { title: "Advanced Deepening", desc: "Already consistent in your practice? Go further. We'll work on advanced inversions, arm balances, and pranayama techniques that require hands-on guidance to master safely." },
 { title: "Busy Professionals", desc: "Your schedule is unpredictable. Private sessions flex around your calendar — early mornings, lunch breaks, late evenings. We come to you, online or in-person, at the time that works." },
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
 <title>Private 1:1 Yoga Sessions — Personalised Coaching | Poshak Tattva</title>
 <meta name="description" content="Personalised one-on-one yoga coaching designed for your body, goals & schedule. Injury recovery, advanced inversions, or complete beginner — sessions available online & in-person Delhi. Book a free consultation." />
 <meta property="og:title" content="Private 1:1 Yoga Sessions — Poshak Tattva" />
 <meta property="og:description" content="100% personalised yoga coaching. Your body, your goals, your pace. Book a free consultation." />
 <meta property="og:type" content="website" />
 <meta property="og:url" content="https://poshaktattva.com/yoga/pranayama" />
 <meta property="og:image" content="/img/services/yoga/private-yoga.jpg" />
 <meta name="twitter:card" content="summary_large_image" />
 <link rel="canonical" href="https://poshaktattva.com/yoga/pranayama" />
 </Head>

 <main className="content-wrapper">
 {/* Hero */}
 <section className="wrapper py-10" style={{ background: "linear-gradient(135deg, #f0f7f2 0%, #eaf2ed 100%)" }}>
 <div className="container text-center">
 <span className="d-block text-uppercase fw-semibold mb-3" style={{ fontSize: 12, letterSpacing: "0.12em", color: "#C2A46F" }}>PERSONALISED COACHING</span>
 <h1 className="display-4 fw-bold mb-4">Private 1:1 Yoga Sessions</h1>
 <p className="lead mx-auto" style={{ maxWidth: 640 }}>
 Your body. Your goals. Your pace. A practice built entirely around you.
 </p>
 </div>
 </section>

 {/* Content */}
 <section className="wrapper py-10">
 <div className="container">
 <div className="row g-5 align-items-center">
 <div className="col-lg-6">
 <h2 className="h3 fw-bold mb-4">Why One-on-One Changes Everything</h2>
 <p className=" mb-3">
 In a group class, the teacher designs for the average. In a private session, <strong>the entire practice is designed for you</strong> — your body proportions, your range of motion, your stress patterns, and your specific health goals. That's the difference between "doing yoga" and having yoga work for you.
 </p>
 <p className=" mb-3">
 Every session begins with a brief check-in: how did you sleep, where's your energy, what's tight, what's sore. From there, your practitioner selects the exact asanas, pranayama, and meditation techniques your body needs <em>that day</em> — not yesterday's plan, not a generic flow.
 </p>
 <p className=" mb-4">
 This is how yoga was traditionally taught — one teacher, one student. It's how the fastest, safest, and most sustainable progress happens. Sessions run 60–90 minutes, available online (Zoom) or in-person (Delhi NCR).
 </p>
 <a href="/contact-appointment" className="btn btn-primary">Schedule Your Private Session</a>
 </div>
 <div className="col-lg-6">
 <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.12)" }}>
 <img
 src="/img/services/yoga/pranayam.jpg"
 alt="Private yoga session with instructor"
 style={{ width: "100%", height: 320, objectFit: "cover", display: "block" }}
 />
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Ideal For Cards */}
 <section className="wrapper py-10 bg-light">
 <div className="container">
 <div className="text-center mb-10">
 <span className="d-block text-uppercase fw-semibold mb-2" style={{ fontSize: 12, letterSpacing: "0.12em", color: "#C2A46F" }}>IDEAL FOR</span>
 <h2 className="display-6 fw-bold">Who Benefits Most from Private Sessions</h2>
 </div>
 <div className="rmap-stack">
 {idealFor.map((item, i) => (
 <Fragment key={i}>
 <div className="rmap-pin" style={{ zIndex: i + 1 }}>
 <div className="rmap-scale">
 <div className="container">
 <div className="rmap-card text-center text-lg-start">
 <div className="rmap-text p-6 p-md-8">
 <span className="rmap-badge">Type {i + 1}</span>
 <div className="rmap-num">{i + 1}</div>
 <h3 className="rmap-title">{item.title}</h3>
 <hr className="rmap-hr mx-auto mx-lg-0" />
 <p className="rmap-desc">{item.desc}</p>
 </div>
 </div>
 </div>
 </div>
 </div>
 {i < idealFor.length - 1 && <div className="rmap-spacer" aria-hidden="true" />}
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
 <h2 className="h3 fw-bold mb-4 text-white">Your Practice, Your Way</h2>
 <p className="text-white mb-6 opacity-75">Book a free consultation to discuss your goals — we'll design your first session around them.</p>
 <a href="/contact-appointment" className="btn btn-lg fw-bold" style={{ background: "white", color: "#1F3D2B", border: "none" }}>
 Book Free Consultation
 </a>
 </div>
 </section>
 </main>
 </>
 );
}
