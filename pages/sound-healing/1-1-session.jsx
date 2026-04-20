import Head from "next/head";
import { Fragment, useEffect } from "react";
import PageProgress from "components/PageProgress";

export const metadata = {
  title: "1:1 Sound Healing Session | Poshak Tattva",
  description: "Personalized sound healing therapy using singing bowls, tuning forks, and gongs. Experience vibrational medicine designed for your specific energetic and neurological needs."
}

export default function SoundHealingSessionPage() {
 const cards = [
 { title: "Singing Bowls", desc: "Hand-hammered Tibetan and crystal singing bowls tuned to specific frequencies. Each bowl resonates with a particular energy centre, creating sustained tones that slow brainwave activity from beta (alert) to theta (deep rest) within minutes." },
 { title: "Tuning Forks", desc: "Precision-calibrated forks deliver exact frequencies to specific points on the body — joints, meridians, and areas of tension. The vibration travels through bone and tissue, releasing physical tightness and restoring energetic flow." },
 { title: "Gong Therapy", desc: "The gong produces an extraordinarily rich spectrum of overtones — frequencies that span the entire audible range simultaneously. This 'wall of sound' overwhelms the thinking mind, allowing the body to drop into its deepest repair mode." },
 { title: "Voice & Mantra", desc: "Sacred syllables like 'Om', 'So Hum', and specific bija mantras are chanted or whispered in synchronisation with your breathing. The vocal vibration massages the vagus nerve, activating your rest-and-repair response." },
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
 <title>1:1 Sound Healing Session — Personalised Vibrational Therapy | Poshak Tattva</title>
 <meta name="description" content="Private sound healing with singing bowls, tuning forks, gongs & mantras — customised to your energy, emotions & body. 60–75 min sessions in Delhi & online. Book your session." />
 <meta property="og:title" content="1:1 Sound Healing Session — Poshak Tattva" />
 <meta property="og:description" content="Every instrument, frequency & technique selected for what YOUR body needs. Book a private session." />
 <meta property="og:type" content="website" />
 <meta property="og:url" content="https://poshaktattva.com/sound-healing/1-1-session" />
 <meta property="og:image" content="/img/Gallery/5.jpg" />
 <meta name="twitter:card" content="summary_large_image" />
 <link rel="canonical" href="https://poshaktattva.com/sound-healing/1-1-session" />
 </Head>

 <main className="content-wrapper">
 <section className="wrapper py-10 hero-header" style={{ background: "linear-gradient(135deg, #1A1040 0%, #8f6d3dff 100%)" }}>
 <div className="container text-center">
 <span className="d-block text-uppercase fw-semibold mb-3" style={{ fontSize: 12, letterSpacing: "0.12em", color: "#C2A46F" }}>PERSONALISED HEALING</span>
 <h1 className="display-4 fw-bold mb-4" style={{ color: "#fff" }}>1:1 Sound Healing Session</h1>
 <p className="lead mx-auto" style={{ maxWidth: 640, color: "rgba(255,255,255,0.85)" }}>
 A private, one-on-one session where every instrument, frequency, and technique is selected based on what <em>your</em> body and mind need — not a generic group format.
 </p>
 </div>
 </section>

 <section className="wrapper py-10">
 <div className="container">
 <div className="row g-5 align-items-center">
 <div className="col-lg-6">
 <h2 className="h3 fw-bold mb-4">How a Private Session Differs from a Group</h2>
 <p className="text mb-3">
 In a group sound bath, the practitioner plays instruments for the collective. In a 1:1 session, <strong>every element is customised for you</strong>. Before the bowls ever touch the floor, we have a conversation — about your current emotional state, physical tension points, sleep quality, and what you're seeking from the session.
 </p>
 <p className="text mb-3">
 Then the session is designed in real-time: specific bowls for specific chakras, tuning fork placements on areas of physical tension, gong frequencies for emotional release, and mantras for spiritual grounding. You lie still; the sound does the work.
 </p>
 <p className="text mb-4">
 Clients regularly report experiences ranging from deep physical relaxation and spontaneous emotional release to vivid imagery and a profound sense of peace that lasts days. Sessions run 60–75 minutes, available in-person (Delhi) or online.
 </p>
 <a href="/contact-appointment" className="btn btn-primary">Book Your Private Session</a>
 </div>
 <div className="col-lg-6">
 <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.12)" }}>
 <img src="/img/Gallery/5.jpg" alt="Sound healing with singing bowls" style={{ width: "100%", height: 800, objectFit: "cover", display: "block" , objectPosition:"top"}} />
 </div>
 </div>
 </div>
 </div>
 </section>

 <section className="wrapper py-10 bg-light">
 <div className="container">
 <div className="text-center mb-10">
 <span className="d-block text-uppercase fw-semibold mb-2" style={{ fontSize: 12, letterSpacing: "0.12em", color: "#C2A46F" }}>INSTRUMENTS USED</span>
 <h2 className="display-6 fw-bold">Your Healing Toolkit</h2>
 </div>
 <div className="rmap-stack">
 {cards.map((c, i) => (
 <Fragment key={i}>
 <div className="rmap-pin" style={{ zIndex: i + 1 }}>
 <div className="rmap-scale">
 <div className="container">
 <div className="rmap-card text-center text-lg-start">
 <div className="rmap-text p-6 p-md-8">
 <span className="rmap-badge">Instrument {i + 1}</span>
 <div className="rmap-num">{i + 1}</div>
 <h3 className="rmap-title">{c.title}</h3>
 <hr className="rmap-hr mx-auto mx-lg-0" />
 <p className="rmap-desc">{c.desc}</p>
 </div>
 </div>
 </div>
 </div>
 </div>
 {i < cards.length - 1 && <div className="rmap-spacer" aria-hidden="true" />}
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

 <section className="wrapper py-10" style={{ background: "linear-gradient(135deg, #1F3D2B 0%, #3D5C4A 100%)" }}>
 <div className="container text-center">
 <h2 className="h3 fw-bold mb-4 text-white">Experience Vibrational Healing Designed for You</h2>
 <a href="/contact-appointment" className="btn btn-lg fw-bold" style={{ background: "white", color: "#1F3D2B", border: "none" }}>Schedule Session</a>
 </div>
 </section>
 </main>
 </>
 );
}
