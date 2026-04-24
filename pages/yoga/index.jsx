import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import PageProgress from "components/PageProgress";

export const metadata = {
  title: "Functional Yoga Therapy Programs | Poshak Tattva",
  description: "Explore our complete range of clinical yoga programs at Poshak Tattva — Group Sessions, Private 1:1, Meditation, Yoga Nidra, and Pranayama. Yoga prescribed as medicine for chronic disorder recovery."
}

const yogaServices = [
  {
    id: 1,
    title: "Group Yoga Sessions",
    url: "/yoga/group-sessions",
    img: "/img/services/yoga/Group-Yoga.jpg",
    badge: "Most Popular",
    description:
      "Train alongside a community of like-minded practitioners. Our group sessions are therapeutically structured — each class follows a clinical sequence targeting specific physiological systems: lymphatic drainage, spinal decompression, and autonomic regulation.",
    benefits: [
      "Warm-up & nervous system priming",
      "Therapeutic asana sequences",
      "Breathwork & pranayama integration",
      "Group energy amplification",
      "Post-session relaxation & Q&A",
    ],
    bestFor: "Beginners to Intermediate | Stress & Lifestyle Disorders",
    accent: "#3D7A4A",
    bg: "#f0f7f2",
  },
  {
    id: 2,
    title: "Private 1:1 Yoga Sessions",
    url: "/yoga/private-sessions",
    img: "/img/services/yoga/private-yoga.jpg",
    badge: "Clinically Personalised",
    description:
      "One-on-one sessions where your yoga protocol is designed around your specific diagnosis, metabolic markers, and recovery goals. This is functional yoga as precision medicine — every posture and breath pattern prescribed for your root cause.",
    benefits: [
      "Full clinical intake before first session",
      "Custom asana protocol per condition",
      "Vagus nerve & endocrine stimulation",
      "Progression tracking & adjustments",
      "Flexible scheduling & remote options",
    ],
    bestFor: "Chronic Conditions | Hormonal, Autoimmune, Gut Disorders",
    accent: "#1F3D2B",
    bg: "#eaf2ed",
  },
  {
    id: 3,
    title: "Meditation Classes",
    url: "/yoga/meditation",
    img: "/img/services/yoga/Meditation.jpg",
    badge: "Neuro-Regulatory",
    description:
      "Clinical meditation protocols engineered to reduce cortisol, lower neuroinflammation, and rebuild cognitive resilience. These are not relaxation sessions — they are structured neuro-regulatory interventions with measurable outcomes on stress hormones and mental clarity.",
    benefits: [
      "Cortisol regulation techniques",
      "Guided body-scan & breathwork",
      "Neuroplasticity training",
      "Cognitive resilience building",
      "Measurable progress markers",
    ],
    bestFor: "Anxiety, Burnout, Cognitive Fatigue, Sleep Disorders",
    accent: "#4A6FA5",
    bg: "#eef2fa",
  },
  {
    id: 4,
    title: "Yoga Nidra",
    url: "/yoga/nidra",
    img: "/img/services/yoga/yognidra.jpg",
    badge: "Deep Healing Sleep",
    description:
      "Yoga Nidra induces a scientifically verified hypnagogic state — between wakefulness and sleep — where the body heals at an accelerated rate. A 45-minute session is clinically equivalent to 3–4 hours of restorative sleep, triggering the parasympathetic nervous system's deepest repair cycle.",
    benefits: [
      "Delta brainwave state induction",
      "Autonomic nervous system reset",
      "Trauma & emotional release",
      "Hormonal restoration (cortisol, melatonin)",
      "Deep cellular repair activation",
    ],
    bestFor: "Insomnia, Adrenal Fatigue, PTSD, Chronic Stress",
    accent: "#5C3D8F",
    bg: "#f3f0fa",
  },
  {
    id: 5,
    title: "Pranayama Classes",
    url: "/yoga/pranayams",
    img: "/img/Gallery/DSC06332.jpg",
    badge: "Breathwork Therapy",
    description:
      "Pranayama is the direct lever for autonomic nervous system control. Our structured breathwork classes use specific techniques — Nadi Shodhana, Kapalabhati, Bhramari, Kumbhaka — to shift the body from sympathetic dominance (fight-or-flight) into deep parasympathetic heal-and-repair mode.",
    benefits: [
      "CO₂ tolerance & oxygen efficiency",
      "HRV (heart rate variability) improvement",
      "Sympathetic tone reduction",
      "Lung capacity & diaphragm training",
      "Inflammation regulation via breath",
    ],
    bestFor: "Respiratory Disorders, Anxiety, Hypertension, Metabolic Syndrome",
    accent: "#2E7D6E",
    bg: "#eaf7f5",
  },
  {
    id: 6,
    title: "Mudras",
    url: "/yoga/mudras",
    img: "/img/services/mudras/Mudra-Main.jpg",
    badge: "Neural Yoga",
    description:
      "Hand gestures that act as sacred circuits, reprogramming your neurology and restoring cellular balance. Mudras stimulate specific brain regions via cortical representation, regulating the autonomic nervous system and enhancing cognitive focus.",
    benefits: [
      "Vagus nerve stimulation",
      "Cortical brain mapping engagement",
      "Autonomic nervous system regulation",
      "Hormonal & endocrine balancing",
      "Concentration & memory enhancement",
    ],
    bestFor: "Neurological Health | Stress | Focus | Chronic Disorders",
    accent: "#C2A46F",
    bg: "#faf7f2",
  },
];

export default function YogaMainPage() {
  return (
    <>
      <PageProgress />
      <Head>
        <title>Functional Yoga Therapy Programs - Poshak Tattva</title>
        <meta
          name="description"
          content="Explore our complete range of clinical yoga programs at Poshak Tattva — Group Sessions, Private 1:1, Meditation, Yoga Nidra, and Pranayama. Yoga prescribed as medicine for chronic disorder recovery."
        />
      </Head>

      <main className="content-wrapper">
        {/* Hero Header */}
        <section
          className="wrapper py-0 hero-header"
          style={{
            background: "linear-gradient(135deg, #1F3D2B 0%, #3D5C4A 60%, #2E7D6E 100%)",
            minHeight: "420px",
            display: "flex",
            alignItems: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.05) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.04) 0%, transparent 50%)",
            }}
          />
          <div className="container py-16" style={{ position: "relative", zIndex: 1 }}>
            <div className="row align-items-center g-5">
              <div className="col-lg-7">
                <span
                  className="badge mb-4 px-3 py-2"
                  style={{ background: "rgba(255,255,255,0.15)", color: "white", fontSize: "0.8rem", letterSpacing: "0.1em" }}
                >
                  CLINICAL RECOVERY PROGRAM
                </span>
                <h1 className="display-3 fw-bold text-white mb-4" style={{ lineHeight: 1.15 }}>
                  Functional<br />
                  <span style={{ color: "white !important" }}>Yoga Therapy</span>
                </h1>
                <p className="lead mb-6" style={{ color: "#ffffff", maxWidth: "560px" }}>
                  Yoga prescribed as clinical medicine — specific asana and pranayama sequences that stimulate the lymphatic system, activate the vagus nerve, and restore endocrine regulation for measurable recovery outcomes.
                </p>
                <div className="d-flex flex-wrap gap-3">
                  <Link
                    href="/contact-appointment"
                    className="btn btn-lg fw-semibold px-5"
                    style={{ background: "#A8D5B5", color: "#1F3D2B", border: "none", borderRadius: "50px" }}
                  >
                    Book Free Consultation →
                  </Link>
                  <Link
                    href="#programs"
                    className="btn btn-lg fw-semibold px-5"
                    style={{ background: "rgba(255,255,255,0.12)", color: "white", border: "1px solid rgba(255,255,255,0.3)", borderRadius: "50px" }}
                  >
                    Explore Programs
                  </Link>
                </div>
              </div>
              <div className="col-lg-5 d-none d-lg-block">
                <div style={{ borderRadius: "20px", overflow: "hidden", boxShadow: "0 30px 60px rgba(0,0,0,0.3)" }}>
                  <Image
                    src="/img/Yoga.jpg"
                    alt="Functional Yoga Therapy at Poshak Tattva"
                    width={500}
                    height={340}
                    style={{ objectFit: "cover", width: "100%", height: "340px", display: "block" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Strip */}
        <section style={{ background: "#f8f9fa", borderBottom: "1px solid #e9ecef" }}>
          <div className="container">
            <div className="row text-center py-5 g-4">
              {[
                { num: "5+", label: "Yoga Programs" },
                { num: "15k+", label: "Students" },
                { num: "5+", label: "Years of Experience" },
                { num: "98%", label: "Recovery Rate" },
              ].map((s, i) => (
                <div key={i} className="col-6 col-md-3">
                  <div className="fw-bold mb-1" style={{ fontSize: "2rem", color: "#1F3D2B" }}>{s.num}</div>
                  <div className=" small">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section id="programs" className="wrapper py-16 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="display-5 fw-bold mb-3">Our Yoga Programs</h2>
              <p className="lead " style={{ maxWidth: "600px", margin: "0 auto" }}>
                Each program targets a distinct physiological pathway — choose the intervention aligned with your root cause and recovery goal.
              </p>
            </div>

            <div className="d-flex flex-column gap-5">
              {yogaServices.map((service, idx) => (
                <div
                  key={service.id}
                  className="card border-0 shadow-sm overflow-hidden"
                  style={{ borderRadius: "16px" }}
                >
                  <div className={`row g-0 ${idx % 2 === 1 ? "flex-row-reverse" : ""}`}>
                    {/* Image Panel */}
                    <div className="col-md-5 position-relative" style={{ minHeight: "350px", background: "#f8f9fa" }}>
                      <Image src={service.img} alt={service.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 450px" style={{ objectFit: 'contain', padding: '24px' }} />
                    </div>

                    {/* Content */}
                    <div className="col-md-7 p-6 p-md-8">
                      <div className="d-flex align-items-center mb-3 flex-wrap gap-2">
                        <h3 className="fw-bold mb-0" style={{ color: "#1a1a1a" }}>{service.title}</h3>
                        <span
                          className="badge px-3 py-2 ms-xl-2 ms-0"
                          style={{ background: service.accent, color: "white", fontSize: "0.7rem", letterSpacing: "0.05em" }}
                        >
                          {service.badge}
                        </span>
                      </div>
                      <p className=" fw-semibold mb-4" style={{ fontSize: "0.9rem" }}>
                        Best For: <span style={{ color: service.accent }}>{service.bestFor}</span>
                      </p>

                      <p className=" mb-5" style={{ lineHeight: "1.75" }}>{service.description}</p>

                      <h6 className="fw-bold mb-3 text-uppercase" style={{ fontSize: "0.95rem", letterSpacing: "0.05em", color: service.accent }}>
                        What's Included
                      </h6>
                      <div className="row g-2 mb-5">
                        {service.benefits.map((b, i) => (
                          <div key={i} className="col-sm-6">
                            <div className="d-flex align-items-start gap-2">
                              <span style={{ color: service.accent, fontWeight: "bold", marginTop: "2px" }}>✓</span>
                              <span className="" style={{ fontSize: "0.9rem" }}>{b}</span>
                            </div>
                          </div>
                        ))}
                      </div>

                      <Link
                        href={service.url}
                        className="btn fw-semibold px-5"
                        style={{ background: service.accent, color: "white", border: "none", borderRadius: "50px" }}
                      >
                        Learn More →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          className="wrapper py-16"
          style={{ background: "linear-gradient(135deg, #1F3D2B 0%, #3D5C4A 100%)" }}
        >
          <div className="container text-center">
            <h2 className="display-5 fw-bold mb-4 custom-white-heading">
              Ready to Begin Your Clinical Yoga Journey?
            </h2>
            <style jsx>{`
     .custom-white-heading {
         color: #ffffff !important;
         -webkit-text-fill-color: #ffffff !important;
     }
 `}</style>
            <p className="lead text-white mb-6" style={{ maxWidth: "560px", margin: "0 auto 2rem" }}>
              Start with a free root-cause consultation — we design your yoga protocol around your specific condition, not a generic class schedule.
            </p>
            <Link
              href="/contact-appointment"
              className="btn btn-lg fw-semibold px-6"
              style={{ background: "#A8D5B5", color: "#1F3D2B", border: "none", borderRadius: "50px" }}
            >
              Book Free Consultation →
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
