import Head from "next/head";
import { Fragment, useEffect } from "react";
import Image from "next/image";
import PageProgress from "components/PageProgress";

export const metadata = {
  title: "Private 1:1 Yoga Sessions | Poshak Tattva",
  description: "Experience clinically personalised 1:1 yoga sessions tailored to your specific health diagnosis. Functional yoga as precision medicine for chronic recovery."
}

export default function PrivateSessionsPage() {
  const pillars = [
    { 
      title: "Clinical Intake & Assessment", 
      desc: "Every journey begins with a comprehensive clinical intake. We analyze your medical history, current symptoms, and metabolic markers to understand the root cause of your health challenges before designing your practice." 
    },
    { 
      title: "Precision Protocol Design", 
      desc: "Your yoga sequence is not a generic flow. It is a clinical protocol — specific asanas and pranayama sequences engineered to stimulate the lymphatic system, activate the vagus nerve, and restore endocrine balance." 
    },
    { 
      title: "1:1 Therapeutic Guidance", 
      desc: "With undivided attention, we ensure every posture and breath pattern is executed with therapeutic precision. Real-time adjustments prevent injury and maximize the healing potential of every movement." 
    },
    { 
      title: "Bio-Feedback Monitoring", 
      desc: "We monitor your physiological responses during the session. By observing your breath rate and nervous system cues, we adjust the intensity to ensure you remain in the 'healing zone' — the parasympathetic state." 
    },
    { 
      title: "Progression & Data Tracking", 
      desc: "Recovery is measurable. We track your progress over time, adjusting your clinical protocol as your health markers improve and your body's resilience grows, ensuring continuous advancement toward your goals." 
    },
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
        <title>Private 1:1 Yoga Sessions | Clinical Yoga Therapy | Poshak Tattva</title>
        <meta name="description" content="One-on-one yoga sessions designed around your specific diagnosis. Precision medicine through functional yoga for chronic condition recovery." />
        <meta property="og:title" content="Private 1:1 Yoga Sessions — Poshak Tattva" />
        <meta property="og:description" content="Clinically personalised yoga protocols designed for your specific recovery goals. 1:1 attention from expert therapists." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://poshaktattva.com/yoga/private-sessions" />
        <meta property="og:image" content="/img/services/yoga/private-yoga.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://poshaktattva.com/yoga/private-sessions" />
      </Head>

      <main className="content-wrapper">
        {/* Hero */}
        <section className="wrapper py-10 hero-header" style={{ background: "linear-gradient(135deg, #1F3D2B 0%, #3D5C4A 60%, #2E7D6E 100%)" }}>
          <div className="container text-center">
            <span className="d-block text-uppercase fw-semibold mb-3" style={{ fontSize: 12, letterSpacing: "0.12em", color: "#C2A46F" }}>CLINICAL PRECISION</span>
            <h1 className="display-4 fw-bold mb-4" style={{ color: "#fff" }}>Private 1:1 Yoga Sessions</h1>
            <p className="lead mx-auto" style={{ maxWidth: 640, color: "rgba(255,255,255,0.85)" }}>
              Yoga as precision medicine — protocols designed around your specific diagnosis, metabolic markers, and recovery goals.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="wrapper py-10">
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6">
                <h2 className="h3 fw-bold mb-4">Why Choose Private Sessions?</h2>
                <p className=" mb-3">
                  While group classes offer community energy, <strong>Private 1:1 Sessions</strong> are where we address the specific biological nuances of your health condition. No two bodies are the same, and no two recovery paths should be identical.
                </p>
                <p className=" mb-3">
                  In a private setting, we can focus exclusively on your clinical goals — whether that's regulating autoimmune inflammation, balancing endocrine function, or rehabilitating chronic spinal issues. Every posture is modified to your current capability, and every breath pattern is timed to your specific nervous system needs.
                </p>
                <p className=" mb-4">
                  These sessions are ideal for those managing chronic conditions, recovering from injury, or anyone seeking to accelerate their progress through deep, focused practice guided by a clinical expert.
                </p>
                <a href="/contact-appointment" className="btn btn-primary px-6 py-3 rounded-pill fw-bold">Book Your Clinical Assessment</a>
              </div>
              <div className="col-lg-6">
                <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.12)", background: "#f8f9fa" }}>
                  <Image
                    src="/img/services/yoga/private-yoga.jpg"
                    alt="Private 1:1 Yoga Session"
                    width={600}
                    height={400}
                    style={{ width: "100%", height: "auto", objectFit: "cover", display: "block", padding: "20px" }}
                  />
                </div>
              </div>
            </div>

            {/* Benefits Strip */}
            <div className="row mt-12 g-3">
              {[
                { icon: "🎯", label: "Custom Protocol" },
                { icon: "📊", label: "Data-Driven" },
                { icon: "🛡️", label: "Injury Safe" },
                { icon: "🔄", label: "Nervous System Reset" },
                { icon: "📈", label: "Accelerated Healing" },
                { icon: "🕒", label: "Flexible Timing" },
              ].map((b, i) => (
                <div key={i} className="col-6 col-md-4 col-lg-2">
                  <div className="text-center p-3 rounded-3" style={{ backgroundColor: "#faf7f2", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <div style={{ fontSize: "1.8rem", marginBottom: "8px" }}>{b.icon}</div>
                    <small className="fw-semibold" style={{ color: "#1F3D2B", lineHeight: 1.2 }}>{b.label}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pillar Cards */}
        <section className="wrapper py-10 bg-light">
          <div className="container">
            <div className="text-center mb-10">
              <span className="d-block text-uppercase fw-semibold mb-2" style={{ fontSize: 12, letterSpacing: "0.12em", color: "#C2A46F" }}>OUR CLINICAL APPROACH</span>
              <h2 className="display-6 fw-bold">How We Engineer Your Recovery</h2>
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
        <section className="wrapper py-16" style={{ background: "linear-gradient(135deg, #1F3D2B 0%, #3D5C4A 100%)" }}>
          <div className="container text-center">
            <h2 className="display-5 fw-bold mb-4 text-white custom-white-heading">Ready for a Protocol Designed for You?</h2>
            <style jsx>{`
              .custom-white-heading {
                color: #ffffff !important;
                -webkit-text-fill-color: #ffffff !important;
              }
            `}</style>
            <p className="lead text-white mb-6 opacity-75" style={{ maxWidth: 600, margin: "0 auto 2rem" }}>
              Start with a clinical consultation where we map out your recovery journey. No generic classes, just precision therapy.
            </p>
            <a href="/contact-appointment" className="btn btn-lg fw-bold px-6 py-3 rounded-pill" style={{ background: "#A8D5B5", color: "#1F3D2B", border: "none" }}>
              Book Free Consultation →
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
