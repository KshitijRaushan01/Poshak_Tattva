import Head from "next/head";
import { Fragment, useEffect } from "react";
import PageProgress from "components/PageProgress";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Cancer Care Nutrition | Poshak Tattva",
  description: "Precision oncology nutrition protocols to support clinical treatment, reduce systemic inflammation, and accelerate post-treatment recovery through metabolic repair."
}

export default function CancerCarePage() {
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

  const dietProtocols = [
    {
      title: "Low-Glycaemic Metabolic Diet",
      desc: "Stabilizes blood sugar and insulin levels to minimize metabolic growth signals and support mitochondrial health during intensive clinical treatments.",
      img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Anti-Inflammatory Phyto-Rich Diet",
      desc: "Focuses on high-potency antioxidants and anti-inflammatory compounds to reduce systemic stress and protect healthy cells from oxidative damage.",
      img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Restorative Microbiome Protocol",
      desc: "Rebuilds gut integrity and immune strength through targeted prebiotic and probiotic-rich whole foods, essential for recovery after aggressive therapies.",
      img: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Alkaline-Buffering Nutrition",
      desc: "Supports the body's natural pH balance and electrolyte levels to optimize enzymatic functions and reduce treatment-induced fatigue and brain fog.",
      img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Precision Micronutrient Support",
      desc: "Customized delivery of essential vitamins and minerals designed to address specific deficiencies and support the liver's detoxification pathways.",
      img: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80"
    },
  ];

  return (
    <>
      <PageProgress />
      <Head>
        <title>Cancer Care Nutrition — Precision Support for Recovery | Poshak Tattva</title>
        <meta name="description" content="Integrative oncology nutrition designed to rebuild cellular resilience, reduce inflammation & support clinical recovery. Science-backed dietary protocols. Book a consultation." />
      </Head>

      <main className="content-wrapper">
        {/* Hero Section */}
        <section className="wrapper py-16 hero-header" style={{ background: "linear-gradient(135deg, #3B2A1A 0%, #7A4A1E 60%, #C97B3A 100%)" }}>
          <div className="container text-center py-10">
            <span className="d-block text-uppercase fw-semibold mb-3" style={{ fontSize: 12, letterSpacing: "0.12em", color: "#F5C88A" }}>RECOVERY & RESILIENCE</span>
            <h1 className="display-4 fw-bold mb-4 text-white">Cancer Care Nutrition</h1>
            <p className="lead mx-auto text-white opacity-75" style={{ maxWidth: 720 }}>
              Precision metabolic support engineered to enhance clinical treatment outcomes, reduce systemic inflammation, and accelerate cellular recovery.
            </p>
          </div>
        </section>

        {/* Science Section */}
        <section className="wrapper py-16 bg-white">
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-7">
                <h2 className="h3 fw-bold mb-4">The Science of Oncology Nutrition</h2>
                <p className="mb-4">
                  Clinical nutrition in cancer care is about more than just maintaining weight; it is about creating a physiological environment that supports the body's natural defenses while making clinical treatments more effective. Our protocols focus on <strong>Metabolic Flexibility</strong>—stabilizing blood sugar to minimize growth signals and optimizing nutrient density to protect healthy tissue.
                </p>
                <div className="row g-4 mb-6">
                  <div className="col-sm-6">
                    <div className="p-4 rounded-4" style={{ background: "#fdf6ec", borderLeft: "4px solid #C97B3A" }}>
                      <h5 className="fw-bold mb-2" style={{ color: "#7A4A1E" }}>Reduce Inflammation</h5>
                      <p className="small mb-0">Targeted phytochemicals to lower systemic inflammatory markers and support cellular repair.</p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="p-4 rounded-4" style={{ background: "#fdf6ec", borderLeft: "4px solid #C97B3A" }}>
                      <h5 className="fw-bold mb-2" style={{ color: "#7A4A1E" }}>Immune Resilience</h5>
                      <p className="small mb-0">Micronutrient-dense protocols designed to rebuild the immune system and gut barrier.</p>
                    </div>
                  </div>
                </div>
                <p className="mb-4">
                  By addressing mitochondrial health and reducing oxidative stress, we help patients navigate the intensive recovery process with better energy levels and fewer treatment-related complications.
                </p>
                <Link href="/contact-appointment" className="btn btn-primary px-6 py-3 rounded-pill fw-bold">
                  Book Clinical Consultation
                </Link>
              </div>
              <div className="col-lg-5">
                <div style={{ position: "relative", borderRadius: 24, overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.12)" }}>
                  <Image
                    src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=80"
                    alt="Nutritious oncology support foods"
                    width={600}
                    height={800}
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Protocols - Stacking Cards */}
        <section className="wrapper py-16 bg-light">
          <div className="container">
            <div className="text-center mb-12">
              <span className="d-block text-uppercase fw-semibold mb-2" style={{ fontSize: 12, letterSpacing: "0.12em", color: "#7A4A1E" }}>OUR PROTOCOLS</span>
              <h2 className="display-6 fw-bold">Specialised Dietary Interventions</h2>
            </div>

            <div className="rmap-stack">
              {dietProtocols.map((item, idx) => (
                <Fragment key={idx}>
                  <div className="rmap-pin" style={{ zIndex: idx + 1 }}>
                    <div className="rmap-scale">
                      <div className="container">
                        <div className="rmap-card shadow-lg">
                          <div className="row g-0 align-items-stretch">
                            <div className="col-lg-5 d-none d-lg-block position-relative">
                              <Image
                                src={item.img}
                                alt={item.title}
                                fill
                                style={{ objectFit: "cover" }}
                              />
                            </div>
                            <div className="col-lg-7 p-6 p-md-10 d-flex flex-column justify-content-center bg-white">
                              <span className="rmap-badge mb-3">Protocol {idx + 1}</span>
                              <div className="rmap-num d-none d-md-block">{idx + 1}</div>
                              <h3 className="rmap-title">{item.title}</h3>
                              <hr className="rmap-hr" />
                              <p className="rmap-desc">{item.desc}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {idx < dietProtocols.length - 1 && <div className="rmap-spacer" aria-hidden="true" />}
                </Fragment>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="wrapper py-20" style={{ background: "linear-gradient(135deg, #3B2A1A 0%, #7A4A1E 100%)" }}>
          <div className="container text-center">
            <h2 className="display-5 fw-bold mb-4 text-white">Your Path to Recovery Begins with the Right Fuel</h2>
            <p className="lead text-white mb-8 opacity-75 mx-auto" style={{ maxWidth: 640 }}>
              Start with a free root-cause consultation to map your specific nutritional needs and support your clinical journey.
            </p>
            <Link
              href="/contact-appointment"
              className="btn btn-lg fw-bold px-8 py-4 rounded-pill"
              style={{ background: "#F5C88A", color: "#3B2A1A", border: "none" }}
            >
              Book Free Consultation
            </Link>
          </div>
        </section>

        <style>{`
          .rmap-stack { padding-bottom: 6vh; }
          .rmap-pin { position: sticky; top: 100px; }
          .rmap-scale { transform-origin: top center; transition: transform 0.18s ease, filter 0.18s ease; }
          .rmap-card { background: #ffffff; border-radius: 30px; overflow: hidden; min-height: 380px; }
          .rmap-badge { display: inline-block; background: rgba(122,74,30,0.1); color: #7A4A1E; font-size: 0.75rem; font-weight: 700; letter-spacing: 0.13em; text-transform: uppercase; padding: 6px 16px; border-radius: 50px; }
          .rmap-num { font-size: 5rem; font-weight: 900; color: rgba(122,74,30,0.05); line-height: 1; position: absolute; right: 40px; top: 40px; z-index: 0; }
          .rmap-title { font-size: 2rem; font-weight: 800; color: #1a1a1a; margin-bottom: 10px; position: relative; z-index: 1; }
          .rmap-hr { border: none; border-top: 2px solid #C97B3A; margin: 20px 0; width: 80px; }
          .rmap-desc { color: #555; font-size: 1.1rem; line-height: 1.8; margin: 0; position: relative; z-index: 1; }
          .rmap-spacer { height: 45vh; }
          @media (max-width: 991px) {
            .rmap-pin { top: 80px; }
            .rmap-title { font-size: 1.6rem; }
            .rmap-spacer { height: 25vh; }
            .rmap-card { min-height: auto; }
            .rmap-num { display: none; }
          }
        `}</style>
      </main>
    </>
  );
}
