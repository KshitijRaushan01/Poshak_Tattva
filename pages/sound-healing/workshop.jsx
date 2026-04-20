import Head from "next/head";
import { Fragment, useEffect } from "react";
import PageProgress from "components/PageProgress";

export const metadata = {
  title: "Sound Healing Workshops | Poshak Tattva",
  description: "Join our immersive sound healing workshops and retreats. Group sessions combining gong baths, chakra healing, and vibrational therapy for collective transformation."
}

export default function SoundHealingWorkshopPage() {
  const cards = [
    { title: "Welcome & Intention Circle", desc: "Every workshop begins with a seated circle. Participants introduce themselves and share their intention for the session — stress relief, emotional processing, spiritual connection, or simple curiosity. This shared vulnerability creates a container of trust that amplifies the healing ahead." },
    { title: "Sound Meditation Journey", desc: "The core of the workshop — 40–50 minutes of immersive sound. Participants lie down while the practitioner moves through singing bowls, crystal bowls, gongs, chimes, and vocal toning. The collective field of a group amplifies the experience well beyond what individual sessions can produce." },
    { title: "Guided Breath & Mantra", desc: "Between sound waves, the practitioner guides specific breathing patterns and group mantras. The combined vibration of multiple voices chanting in unison creates a harmonic field that participants describe as 'feeling held' — a rare and profound experience of collective resonance." },
    { title: "Integration & Sharing Circle", desc: "The workshop closes with a gentle return to awareness and an open sharing circle. Participants often report vivid imagery, emotional release, physical sensations, and moments of deep clarity. Sharing these experiences in community validates and deepens the healing." },
    { title: "Take-Home Practices", desc: "Every participant leaves with a simple 5-minute sound meditation technique they can practice at home using only their voice and breath. No instruments required — just the knowledge of how to use vibrational resonance for daily stress relief and mental clarity." },
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
        <title>Sound Healing Workshops — Group Sessions & Corporate Events | Poshak Tattva</title>
        <meta name="description" content="Group sound healing workshops with singing bowls, gongs & guided meditation. Ideal for corporate teams, retreats, and families. 90–120 min sessions for 5–30 participants. Book now." />
        <meta property="og:title" content="Sound Healing Workshops — Poshak Tattva" />
        <meta property="og:description" content="Collective sound healing for teams, families & retreats. 90–120 min immersive group sessions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://poshaktattva.com/sound-healing/workshop" />
        {/*<meta property="og:image" content="/img/services/sound/sound- healing workshop.jpg" />*/}
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://poshaktattva.com/sound-healing/workshop" />
      </Head>

      <main className="content-wrapper">
        <section className="wrapper py-10 hero-header" style={{ background: "linear-gradient(135deg, #1A1040 0%, #8f6d3dff 100%)" }}>
          <div className="container text-center">
            <span className="d-block text-uppercase fw-semibold mb-3" style={{ fontSize: 12, letterSpacing: "0.12em", color: "#C2A46F" }}>GROUP EXPERIENCE</span>
            <h1 className="display-4 fw-bold mb-4" style={{ color: "#fff" }}>Sound Healing Workshop</h1>
            <p className="lead mx-auto" style={{ maxWidth: 640, color: "rgba(255,255,255,0.85)" }}>
              Individual healing is powerful. Collective healing is transformative. Our workshops bring groups together for a shared sound journey that amplifies the experience beyond what solo practice can achieve.
            </p>
          </div>
        </section>

        <section className="wrapper py-10">
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6">
                <h2 className="h3 fw-bold mb-4">Why Group Sound Healing Hits Different</h2>
                <p className=" mb-3">
                  There's a phenomenon in acoustic physics called <strong>resonance coupling</strong> — when multiple vibrating bodies are placed near each other, they naturally synchronise. In a sound healing workshop, this happens with people. Your heart rates synchronise. Your brainwaves synchronise. Your breathing synchronises.
                </p>
                <p className=" mb-3">
                  This collective coherence creates a healing field that's measurably stronger than the sum of its parts. Participants consistently report that group sessions produce deeper states of relaxation, more vivid meditative experiences, and longer-lasting effects than private sessions.
                </p>
                <p className=" mb-4">
                  Our workshops are ideal for <strong>corporate teams</strong> seeking stress relief and team bonding, <strong>families</strong> wanting a shared wellness experience, <strong>wellness retreats</strong> looking for a signature offering, or <strong>anyone</strong> curious about sound healing in a low-pressure, supported environment. Workshops run 90–120 minutes for groups of 5–30 participants.
                </p>
                <a href="/contact-appointment" className="btn btn-primary">Register for Workshop</a>
              </div>
              <div className="col-lg-6">
                <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.12)" }}>
                  <img src="/img/services/sound/sound- healing workshop.jpg" alt="Group sound healing workshop" style={{ width: "100%", height: 320, objectFit: "cover", display: "block" }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="wrapper py-10 bg-light">
          <div className="container">
            <div className="text-center mb-10">
              <span className="d-block text-uppercase fw-semibold mb-2" style={{ fontSize: 12, letterSpacing: "0.12em", color: "#C2A46F" }}>WORKSHOP FORMAT</span>
              <h2 className="display-6 fw-bold">What Happens in Every Workshop</h2>
            </div>
            <div className="rmap-stack">
              {cards.map((c, i) => (
                <Fragment key={i}>
                  <div className="rmap-pin" style={{ zIndex: i + 1 }}>
                    <div className="rmap-scale">
                      <div className="container">
                        <div className="rmap-card text-center text-lg-start">
                          <div className="rmap-text p-6 p-md-8">
                            <span className="rmap-badge">Phase {i + 1}</span>
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
            <h2 className="h3 fw-bold mb-4 text-white">Bring Healing to Your Team or Community</h2>
            <p className="text-white mb-6 opacity-75">Custom workshops available for corporate teams, retreats, and private groups.</p>
            <a href="/contact-appointment" className="btn btn-lg fw-bold" style={{ background: "white", color: "#1F3D2B", border: "none" }}>View Schedules</a>
          </div>
        </section>
      </main>
    </>
  );
}
