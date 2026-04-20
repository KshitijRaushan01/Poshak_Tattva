import Head from "next/head";
import { Fragment, useEffect } from "react";
import PageProgress from "components/PageProgress";

export const metadata = {
  title: "Group Yoga Sessions | Poshak Tattva",
  description: "Join our therapeutic group yoga sessions at Poshak Tattva. Clinical sequences targeting lymphatic drainage, spinal decompression, and autonomic regulation for holistic wellness."
}

export default function GroupSessionsPage() {
 const pillars = [
 { title: "Warm-Up & Breath Work", desc: "Every session begins with joint mobilization and conscious breathing to prepare your body and settle your mind. This is where the transition from your workday to your practice happens." },
 { title: "Asana Flow", desc: "A structured sequence of standing, seated, and floor postures that builds functional strength, improves spinal mobility, and opens tight hips and shoulders — the areas most affected by desk work." },
 { title: "Partner & Community Poses", desc: "Select sessions include partner-assisted stretches and group formations that build trust, deepen stretches safely, and create a shared sense of accomplishment you can't get practicing alone." },
 { title: "Guided Cool-Down & Meditation", desc: "Each class closes with a 10-minute guided relaxation in Savasana, allowing your nervous system to absorb the benefits while the instructor leads a body scan or breath meditation." },
 { title: "Q&A with Your Instructor", desc: "Stay after class for a quick Q&A. Get personalised modifications for any pose, discuss your progress, or ask about deepening your home practice between sessions." },
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
 <title>Group Yoga Classes Online & In-Person | Poshak Tattva</title>
 <meta name="description" content="Join group yoga sessions capped at 12 students for personalised attention. Build strength, flexibility & community with expert instructors. Online & Delhi in-person. Book your first free class." />
 <meta property="og:title" content="Group Yoga Classes — Poshak Tattva" />
 <meta property="og:description" content="Build strength, flexibility, and genuine connection in small-group yoga classes. First class free." />
 <meta property="og:type" content="website" />
 <meta property="og:url" content="https://poshaktattva.com/yoga/group-sessions" />
 <meta property="og:image" content="/img/services/yoga/Group-Yoga.jpg" />
 <meta name="twitter:card" content="summary_large_image" />
 <link rel="canonical" href="https://poshaktattva.com/yoga/group-sessions" />
 </Head>

 <main className="content-wrapper">
 {/* Hero */}
 <section className="wrapper py-10 hero-header" style={{ background: "linear-gradient(135deg, #1F3D2B 0%, #3D5C4A 60%, #2E7D6E 100%)" }}>
 <div className="container text-center">
 <span className="d-block text-uppercase fw-semibold mb-3" style={{ fontSize: 12, letterSpacing: "0.12em", color: "#C2A46F" }}>COMMUNITY PRACTICE</span>
 <h1 className="display-4 fw-bold mb-4" style={{ color: "#fff" }}>Group Yoga Sessions</h1>
 <p className="lead mx-auto" style={{ maxWidth: 640, color: "rgba(255,255,255,0.85)" }}>
 Build strength, flexibility, and genuine connection in a supportive group environment guided by experienced practitioners.
 </p>
 </div>
 </section>

 {/* Content */}
 <section className="wrapper py-10">
 <div className="container">
 <div className="row g-5 align-items-center">
 <div className="col-lg-6">
 <h2 className="h3 fw-bold mb-4">Why Practice in a Group?</h2>
 <p className=" mb-3">
 There's a reason yoga has been practiced in sanghas (communities) for thousands of years. When you move and breathe alongside others, something shifts — your commitment deepens, your form improves through shared energy, and you find an accountability that solo practice rarely provides.
 </p>
 <p className=" mb-3">
 Our group classes are capped at <strong>12 participants</strong> to ensure every student receives individual attention. Whether you're touching your toes for the first time or working toward advanced inversions, our instructors offer real-time modifications so every body in the room is challenged at the right level.
 </p>
 <p className=" mb-4">
 Sessions run 60–75 minutes and include warm-up, a dynamic asana flow, cool-down, and guided meditation. Mats and props are provided for in-person classes. Online participants need only a mat and an open floor space.
 </p>
 <a href="/contact-appointment" className="btn btn-primary">Join a Group Session</a>
 </div>
 <div className="col-lg-6">
 <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.12)" }}>
 <img
 src="/img/services/yoga/Group-Yoga.jpg"
 alt="Group yoga class in session"
 style={{ width: "100%", height: 320, objectFit: "cover", display: "block" }}
 />
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Pillar Cards */}
 <section className="wrapper py-10 bg-light">
 <div className="container">
 <div className="text-center mb-10">
 <span className="d-block text-uppercase fw-semibold mb-2" style={{ fontSize: 12, letterSpacing: "0.12em", color: "#C2A46F" }}>SESSION STRUCTURE</span>
 <h2 className="display-6 fw-bold">What Happens in Every Class</h2>
 </div>
 <div className="rmap-stack">
 {pillars.map((p, i) => (
 <Fragment key={i}>
 <div className="rmap-pin" style={{ zIndex: i + 1 }}>
 <div className="rmap-scale">
 <div className="container">
 <div className="rmap-card text-center text-lg-start">
 <div className="rmap-text p-6 p-md-8">
 <span className="rmap-badge">Step {i + 1}</span>
 <div className="rmap-num">{i + 1}</div>
 <h3 className="rmap-title">{p.title}</h3>
 <hr className="rmap-hr mx-auto mx-lg-0" />
 <p className="rmap-desc">{p.desc}</p>
 </div>
 </div>
 </div>
 </div>
 </div>
 {i < pillars.length - 1 && <div className="rmap-spacer" aria-hidden="true" />}
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
 <h2 className="h3 fw-bold mb-4 text-white">Ready to Move, Breathe, and Grow Together?</h2>
 <p className="text-white mb-6 opacity-75">First class is complimentary. No experience needed — just an open mind.</p>
 <a href="/contact-appointment" className="btn btn-lg fw-bold" style={{ background: "white", color: "#1F3D2B", border: "none" }}>
 View Schedule &amp; Book
 </a>
 </div>
 </section>
 </main>
 </>
 );
}
