import Head from "next/head";
import { Fragment, useEffect } from "react";
import PageProgress from "components/PageProgress";

export default function GongBathPage() {
 const cards = [
 { title: "Brainwave Entrainment", desc: "The gong's complex overtone series produces frequencies that guide your brainwaves from beta (14-30 Hz, awake/anxious) through alpha (8-14 Hz, relaxed) into theta (4-8 Hz, deep meditation) — the same state achieved by experienced monks after years of practice." },
 { title: "Cellular Vibration", desc: "Sound travels 4x faster through water than air. Your body is 60% water. When the gong plays, every cell receives the vibration directly — releasing stored muscular tension, improving circulation, and stimulating the body's natural repair mechanisms." },
 { title: "Emotional Release", desc: "Many participants experience spontaneous emotional release during a gong bath — tears, laughter, vivid memories. This happens because theta-state brainwaves unlock the subconscious, allowing buried emotions to surface and resolve safely." },
 { title: "Nervous System Reset", desc: "The gong's unpredictable overtones prevent the analytical mind from 'latching on' to any pattern. This forces the thinking brain to surrender, flooding the nervous system with parasympathetic (rest-and-repair) signals that persist for hours after the session." },
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
 <title>Gong Bath Meditation — Immersive Sound Healing | Poshak Tattva</title>
 <meta name="description" content="Experience transformative gong bath meditation — brainwave entrainment, cellular vibration, emotional release & nervous system reset. Lie down, close your eyes, let sound heal. Book now." />
 <meta property="og:title" content="Gong Bath Meditation — Poshak Tattva" />
 <meta property="og:description" content="The most powerful acoustic instrument on earth. Lie down and let the gong transform every cell of your body." />
 <meta property="og:type" content="website" />
 <meta property="og:url" content="https://poshaktattva.com/sound-healing/gong-bath" />
 <meta property="og:image" content="/img/home/methodology-sound.png" />
 <meta name="twitter:card" content="summary_large_image" />
 <link rel="canonical" href="https://poshaktattva.com/sound-healing/gong-bath" />
 </Head>

 <main className="content-wrapper">
 <section className="wrapper py-10" style={{ background: "linear-gradient(135deg, #f4effa 0%, #f9f5ff 100%)" }}>
 <div className="container text-center">
 <span className="d-block text-uppercase fw-semibold mb-3" style={{ fontSize: 12, letterSpacing: "0.12em", color: "#C2A46F" }}>SONIC IMMERSION</span>
 <h1 className="display-4 fw-bold mb-4">Gong Bath</h1>
 <p className="lead mx-auto" style={{ maxWidth: 640 }}>
 Lie down. Close your eyes. And let the most powerful acoustic instrument on earth wash through every cell of your body.
 </p>
 </div>
 </section>

 <section className="wrapper py-10">
 <div className="container">
 <div className="row g-5 align-items-center">
 <div className="col-lg-6">
 <h2 className="h3 fw-bold mb-4">What Happens During a Gong Bath</h2>
 <p className=" mb-3">
 A gong bath isn't a bath — it's an immersive sound meditation where you lie fully clothed on a mat while a trained practitioner plays a large gong (or multiple gongs) around and above you. The term "bath" refers to being <em>bathed in sound</em> — the vibrations are so rich and layered that they envelop you completely.
 </p>
 <p className=" mb-3">
 Unlike singing bowls (which produce clean, sustained tones), the gong generates an <strong>unpredictable, ever-shifting soundscape</strong> of simultaneous frequencies. This is what makes it uniquely therapeutic — your analytical mind cannot follow the sound, so it gives up trying. And when the thinking mind stops, healing begins.
 </p>
 <p className=" mb-4">
 Most people describe the experience as "time disappearing." A 60-minute session can feel like 15 minutes or 3 hours. Afterwards, participants consistently report feeling as though they've had the deepest sleep of their lives — even though they were awake the entire time.
 </p>
 <a href="/contact-appointment" className="btn btn-primary">Experience a Gong Bath</a>
 </div>
 <div className="col-lg-6">
 <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.12)" }}>
 <img src="/img/home/methodology-sound.png" alt="Gong bath meditation session" style={{ width: "100%", height: 320, objectFit: "cover", display: "block" }} />
 </div>
 </div>
 </div>
 </div>
 </section>

 <section className="wrapper py-10 bg-light">
 <div className="container">
 <div className="text-center mb-10">
 <span className="d-block text-uppercase fw-semibold mb-2" style={{ fontSize: 12, letterSpacing: "0.12em", color: "#C2A46F" }}>HOW IT WORKS</span>
 <h2 className="display-6 fw-bold">The Science of Gong Healing</h2>
 </div>
 <div className="rmap-stack">
 {cards.map((c, i) => (
 <Fragment key={i}>
 <div className="rmap-pin" style={{ zIndex: i + 1 }}>
 <div className="rmap-scale">
 <div className="container">
 <div className="rmap-card text-center text-lg-start">
 <div className="rmap-text p-6 p-md-8">
 <span className="rmap-badge">Effect {i + 1}</span>
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
 <h2 className="h3 fw-bold mb-4 text-white">Let the Gong Transform You</h2>
 <p className="text-white mb-6 opacity-75">No experience needed. Just show up, lie down, and receive.</p>
 <a href="/contact-appointment" className="btn btn-lg fw-bold" style={{ background: "white", color: "#1F3D2B", border: "none" }}>Schedule Gong Bath</a>
 </div>
 </section>
 </main>
 </>
 );
}
