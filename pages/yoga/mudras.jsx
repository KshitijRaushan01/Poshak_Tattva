import Head from "next/head";
import { Fragment, useEffect } from "react";
import Image from "next/image";
import PageProgress from "components/PageProgress";
import Link from "next/link";

export const metadata = {
  title: "Mudras: The Science of Hand Gestures | Poshak Tattva",
  description: "Explore the neural science behind Mudras. Learn how these sacred hand circuits are resurfacing in modern health to regulate the nervous system and enhance cognitive focus."
}

export default function MudrasPage() {
  const mudras = [
    {
      title: "Gyan Mudra",
      subtitle: "Mudra of Knowledge",
      desc: "By touching the tip of the thumb to the index finger, you stimulate the pituitary and endocrine glands. This gesture enhances concentration, sharpens memory, and fosters a sense of mental clarity.",
      img: "/img/services/mudras/Gyan-Mudra.jpg"
    },
    {
      title: "Prithvi Mudra",
      subtitle: "Mudra of Earth",
      desc: "Connecting the thumb to the ring finger increases vitality and physical strength. It is a powerful grounding technique that helps stabilize the body and mind during times of emotional turbulence.",
      img: "/img/services/mudras/Prithvi-Mudra.jpg"
    },
    {
      title: "Apana Mudra",
      subtitle: "Mudra of Digestion",
      desc: "Touching the thumb to the middle and ring fingers assists in deep detoxification. It balances the eliminatory system and supports efficient digestion, helping the body clear toxins naturally.",
      img: "/img/services/mudras/Apana-Mudra.jpg"
    },
    {
      title: "Varuna Mudra",
      subtitle: "Mudra of Water",
      desc: "Joining the thumb and the little finger helps balance fluid levels and hydrates the body from within. It is excellent for skin health, joint lubrication, and maintaining mental flexibility.",
      img: "/img/services/mudras/Varuna-Mudra.jpg"
    },
    {
      title: "Shuni Mudra",
      subtitle: "Mudra of Patience",
      desc: "The connection between the thumb and the middle finger promotes discipline and emotional resilience. It cultivates a sense of calm endurance and helps in focusing on long-term goals.",
      img: "/img/services/mudras/Shuni-Mudra.jpg"
    }
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
        <title>Mudras: The Science of Sacred Circuits | Poshak Tattva</title>
        <meta name="description" content="Discover how Mudras act as neural circuits to regulate your health. Learn the benefits of Gyan, Prithvi, Apana, and Varuna mudras. Clinical yoga therapy at Poshak Tattva." />
      </Head>

      <main className="content-wrapper">
        {/* Hero Section */}
        <section
          className="wrapper py-16 hero-header"
          style={{ background: "linear-gradient(135deg, #1F3D2B 0%, #3D5C4A 60%, #2E7D6E 100%)", position: "relative", overflow: "hidden" }}
        >
          <div className="container text-center py-10" style={{ position: "relative", zIndex: 1 }}>
            <span className="d-block text-uppercase fw-semibold mb-3 text-white-50" style={{ fontSize: 12, letterSpacing: "0.2em" }}>NEURAL YOGA THERAPY</span>
            <h1 className="display-3 fw-bold mb-4 text-white">The Science of Sacred Circuits: Mudras</h1>
            <p className="lead mx-auto text-white opacity-75" style={{ maxWidth: 720 }}>
              Discover how ancient hand gestures are resurfacing in modern neuroscience as precision tools for autonomic regulation and cognitive enhancement.
            </p>
          </div>
        </section>

        {/* Science Section */}
        <section className="wrapper py-16 bg-white">
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6">
                <h6 className="text-uppercase fw-bold mb-3" style={{ color: "#C2A46F", letterSpacing: "0.1em" }}>THE NEURAL CONNECTION</h6>
                <h2 className="display-5 fw-bold mb-4">Why Hand Positions Matter to Your Brain</h2>
                <p className="mb-4 lead" style={{ lineHeight: "1.8" }}>
                  Mudras are more than just symbolic gestures; they are subtle energy circuits. In physiological terms, our hands have a disproportionately large representation in the brain's motor and sensory cortex—a concept known as the Homunculus.
                </p>
                <p className="mb-4">
                  By positioning the fingers in specific ways, we create electrical circuits that stimulate specific brain regions. After being relegated to tradition for centuries, Mudras are resurfacing as <strong>"Neural Yoga."</strong> Modern biofeedback studies show that these gestures can directly influence the vagus nerve, improve cardiac coherence, and regulate the autonomic nervous system.
                </p>
                <p className="mb-6">
                  Clinical settings are now integrating Mudras as complementary tools for anxiety management, recovery from burnout, and enhancing deep focus for high-performance professionals.
                </p>
                <Link href="/contact-appointment" className="btn btn-primary rounded-pill px-6 py-3 fw-bold">
                  Schedule a Clinical Consultation
                </Link>
              </div>
              <div className="col-lg-6">
                <div style={{ position: "relative", borderRadius: 30, overflow: "hidden", boxShadow: "0 30px 60px rgba(31,61,43,0.15)" }}>
                  <Image
                    src="/img/services/mudras/Mudra-Main.jpg"
                    alt="The science of mudras"
                    width={600}
                    height={700}
                    style={{ objectFit: "cover", width: "100%", height: "auto" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mudras Stacking Guide */}
        <section className="wrapper py-16 bg-light">
          <div className="container">
            <div className="text-center mb-12">
              <span className="d-block text-uppercase fw-semibold mb-2" style={{ fontSize: 12, letterSpacing: "0.12em", color: "#C2A46F" }}>PRACTICAL GUIDE</span>
              <h2 className="display-6 fw-bold">Five Essential Mudras for Daily Health</h2>
            </div>

            <div className="rmap-stack">
              {mudras.map((m, i) => (
                <Fragment key={i}>
                  <div className="rmap-pin" style={{ zIndex: i + 1 }}>
                    <div className="rmap-scale">
                      <div className="container">
                        <div className="rmap-card shadow-lg">
                          <div className="row g-0">
                            <div className="col-lg-5">
                              <div style={{ position: "relative", height: "100%", minHeight: "300px" }}>
                                <Image
                                  src={m.img}
                                  alt={m.title}
                                  fill
                                  sizes="(max-width: 991px) 100vw, 450px"
                                  style={{ objectFit: "cover" }}
                                />
                              </div>
                            </div>
                            <div className="col-lg-7 d-flex align-items-center">
                              <div className="p-8 p-md-10">
                                <span className="rmap-badge">Mudra {i + 1}</span>
                                <h3 className="rmap-title mt-3 mb-1">{m.title}</h3>
                                <p className="text-uppercase fw-bold mb-4" style={{ fontSize: 12, color: "#C2A46F", letterSpacing: "0.05em" }}>{m.subtitle}</p>
                                <hr className="rmap-hr" />
                                <p className="rmap-desc">{m.desc}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {i < mudras.length - 1 && <div className="rmap-spacer" aria-hidden="true" />}
                </Fragment>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          className="wrapper py-20"
          style={{ background: "linear-gradient(135deg, #1F3D2B 0%, #3D5C4A 100%)" }}
        >
          <div className="container text-center">
            <h2 className="display-4 fw-bold mb-4 text-white">Experience the Power of Sacred Circuits</h2>
            <p className="lead text-white mb-8 opacity-75 mx-auto" style={{ maxWidth: 640 }}>
              Learn how to integrate specific Mudras into your clinical recovery protocol. Book a free root-cause consultation today.
            </p>
            <Link
              href="/contact-appointment"
              className="btn btn-lg fw-bold px-8 py-4 rounded-pill"
              style={{ background: "#ffffff", color: "#1F3D2B", border: "none" }}
            >
              Book Free Session
            </Link>
          </div>
        </section>

        <style>{`
          .rmap-stack { padding-bottom: 6vh; }
          .rmap-pin { position: sticky; top: 100px; }
          .rmap-scale { transform-origin: top center; transition: transform 0.18s ease, filter 0.18s ease; }
          .rmap-card { background: #ffffff; border-radius: 30px; overflow: hidden; min-height: 400px; }
          .rmap-badge { display: inline-block; background: rgba(31,61,43,0.08); color: #1F3D2B; font-size: 0.75rem; font-weight: 700; letter-spacing: 0.13em; text-transform: uppercase; padding: 6px 16px; border-radius: 50px; }
          .rmap-title { font-size: 2.2rem; font-weight: 800; color: #1a1a1a; line-height: 1.2; }
          .rmap-hr { border: none; border-top: 2px solid #C2A46F; margin: 20px 0; width: 60px; }
          .rmap-desc { color: #555; font-size: 1.1rem; line-height: 1.8; margin: 0; }
          .rmap-spacer { height: 40vh; }
          @media (max-width: 991px) {
            .rmap-pin { top: 80px; }
            .rmap-title { font-size: 1.8rem; }
            .rmap-spacer { height: 25vh; }
            .rmap-card { min-height: auto; }
          }
        `}</style>
      </main>
    </>
  );
}
