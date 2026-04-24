import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import PageProgress from "components/PageProgress";

export const metadata = {
  title: "Clinical Nutrition Programs | Poshak Tattva",
  description: "Discover our clinical nutrition programs designed to reverse digestive disorders, hormonal imbalances, autoimmune conditions, and metabolic issues through targeted dietary interventions."
}

const dietServices = [
  {
    id: 1,
    title: "Digestive Disorder Protocols",
    url: "/diet/digestive-disorders",
    img: "/img/services/diet/Digestive-Disorder.png",
    badge: "Gut Microbiome Reset",
    description:
      "Digestive disorders — IBS, GERD, leaky gut, chronic bloating — are almost always rooted in gut dysbiosis and systemic inflammation, not just food sensitivity. Our therapeutic-grade nutrition protocols correct the gut microbiome at the cellular level, eliminating triggers rather than suppressing symptoms.",
    conditions: [
      "IBS & Irritable Bowel Syndrome",
      "GERD & Chronic Acid Reflux",
      "Leaky Gut & Intestinal Permeability",
      "Bloating, Gas & Indigestion",
      "Crohn's Disease & Colitis",
      "Constipation & Motility Issues",
    ],
    approach: [
      "Gut microbiome mapping & assessment",
      "Anti-inflammatory elimination protocol",
      "Therapeutic food reintroduction plan",
      "Probiotic & prebiotic optimisation",
      "Long-term digestive resilience plan",
    ],
    accent: "#4A8C3F",
    bg: "#f0f7ee",
  },
  {
    id: 2,
    title: "Hormonal Balance Nutrition",
    url: "/diet/hormonal",
    img: "/img/services/diet/Hormonal-Disorder.jpg",
    badge: "Endocrine Regulation",
    description:
      "Hormonal imbalances — PCOS, thyroid dysfunction, adrenal fatigue, perimenopause — respond directly to nutritional intervention. Our clinical nutrition protocols are designed to regulate the HPA axis, optimise insulin sensitivity, and restore oestrogen-progesterone balance through precise dietary engineering.",
    conditions: [
      "PCOS & Polycystic Ovarian Syndrome",
      "Hypothyroidism & Hashimoto's",
      "Adrenal Fatigue & Cortisol Imbalance",
      "Perimenopause & Menopause",
      "Insulin Resistance",
      "Low Testosterone & Libido Issues",
    ],
    approach: [
      "HPA axis & hormone panel review",
      "Blood sugar regulation protocol",
      "Phytoestrogen & adaptogen nutrition",
      "Liver detox support diet",
      "Cycle-syncing nutrition for women",
    ],
    accent: "#8B5E3C",
    bg: "#fdf3ec",
  },
  {
    id: 3,
    title: "Lifestyle Disorder Reversal",
    url: "/diet/lifestyle",
    img: "/img/services/diet/Lifestyle-Disorder.jpg",
    badge: "Metabolic Correction",
    description:
      "Type 2 diabetes, hypertension, non-alcoholic fatty liver disease (NAFLD), and metabolic syndrome are not inevitable — they are reversible through targeted dietary intervention. Our protocols are calibrated to repair mitochondrial function, reduce oxidative stress, and restore metabolic flexibility.",
    conditions: [
      "Type 2 Diabetes & Pre-Diabetes",
      "Hypertension & Cardiovascular Risk",
      "Non-Alcoholic Fatty Liver (NAFLD)",
      "Metabolic Syndrome",
      "Chronic Fatigue & Low Energy",
      "Sleep Disruption from Lifestyle",
    ],
    approach: [
      "Metabolic marker baseline assessment",
      "Glycaemic load & insulin-control diet",
      "Anti-oxidant & mitochondrial support",
      "Circadian rhythm nutrition alignment",
      "Progressive lifestyle integration plan",
    ],
    accent: "#2E6DA4",
    bg: "#eef4fb",
  },
  {
    id: 4,
    title: "Clinical Weight Management",
    url: "/diet/weight-loss",
    img: "/img/services/diet/Weightloss.jpg",
    badge: "Root-Cause Fat Loss",
    description:
      "Sustainable weight management is not calorie counting — it is metabolic recalibration. We identify the underlying metabolic dysfunctions (insulin resistance, leptin resistance, thyroid suppression, cortisol elevation) that cause weight gain and design a nutritional protocol that corrects the physiology, not just the behaviour.",
    conditions: [
      "Stubborn fat despite calorie restriction",
      "Insulin & leptin resistance",
      "Post-pregnancy weight gain",
      "Stress-induced weight gain (cortisol belly)",
      "Thyroid-related weight issues",
      "Yo-yo dieting & metabolic damage",
    ],
    approach: [
      "Insulin sensitivity & leptin panel",
      "Metabolic rate & body composition analysis",
      "Anti-inflammatory, hormone-supportive nutrition",
      "Fasting & timed feeding protocols",
      "Sustainable habit & mindset integration",
    ],
    accent: "#C97B3A",
    bg: "#fdf6ec",
  },
  {
    id: 5,
    title: "Autoimmune Nutrition Therapy",
    url: "/diet/autoimmune",
    img: "/img/home/roadmap-assessment.png",
    badge: "Immune System Regulation",
    description:
      "Autoimmune conditions — rheumatoid arthritis, lupus, Hashimoto's, multiple sclerosis — are fundamentally disorders of immune dysregulation, most commonly triggered by gut permeability and systemic inflammation. Our AIP-based nutrition protocol removes immune triggers and rebuilds mucosal barrier integrity.",
    conditions: [
      "Rheumatoid Arthritis",
      "Lupus & Systemic Inflammation",
      "Hashimoto's Thyroiditis",
      "Psoriasis & Skin Autoimmunity",
      "Inflammatory Bowel Disease",
      "Multiple Sclerosis (dietary support)",
    ],
    approach: [
      "Inflammatory marker & gut permeability test",
      "AIP (Autoimmune Protocol) nutrition",
      "Immune trigger elimination & tracking",
      "Mucosal barrier repair nutrition",
      "Gradual reintroduction & tolerance building",
    ],
    accent: "#7B3F8C",
    bg: "#f5f0fa",
  },
  {
    id: 6,
    title: "Cancer Care Nutrition",
    url: "/diet/cancer-care",
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    badge: "Metabolic Support",
    description:
      "Precision oncology nutrition designed to create a physiological environment that supports clinical treatment while building cellular resilience. We focus on metabolic flexibility, systemic inflammation reduction, and microbiome repair to enhance recovery outcomes.",
    conditions: [
      "Post-Chemotherapy Recovery",
      "Radiation Side-Effect Management",
      "Metabolic Growth Signal Regulation",
      "Immune System Rebuilding",
      "Treatment-Induced Fatigue",
      "Mitochondrial Support",
    ],
    approach: [
      "Metabolic marker & inflammatory review",
      "Anti-inflammatory, phyto-rich nutrition",
      "Blood sugar & insulin regulation",
      "Gut-immune axis restoration",
      "Nutrient density & bio-availability focus",
    ],
    accent: "#7A4A1E",
    bg: "#fdf3ec",
  },
];

export default function DietMainPage() {
  return (
    <>
      <PageProgress />
      <Head>
        <title>Clinical Nutrition Programs - Poshak Tattva</title>
        <meta
          name="description"
          content="Explore Poshak Tattva's therapeutic-grade diet programs for digestive disorders, hormonal imbalance, lifestyle diseases, weight management, and autoimmune recovery. Clinical nutrition as root-cause medicine."
        />
      </Head>

      <main className="content-wrapper">
        {/* Hero Header */}
        <section
          className="wrapper py-0 hero-header"
          style={{
            background: "linear-gradient(135deg, #3B2A1A 0%, #7A4A1E 60%, #C97B3A 100%)",
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
                  CLINICAL NUTRITION PROGRAMS
                </span>
                <h1 className="display-3 fw-bold text-white mb-4" style={{ lineHeight: 1.15 }}>
                  Clinical<br />
                  <span style={{ color: "white !important" }}>Nutrition</span>
                </h1>
                <p className="lead mb-6" style={{ color: "#ffffff", maxWidth: "560px" }}>
                  Therapeutic-grade diet protocols engineered to correct metabolic dysfunction, reduce systemic inflammation, and rebalance the gut microbiome at the cellular level — food as precision medicine.
                </p>
                <div className="d-flex flex-wrap gap-3">
                  <Link
                    href="/contact-appointment"
                    className="btn btn-lg fw-semibold px-5"
                    style={{ background: "#F5C88A", color: "#3B2A1A", border: "none", borderRadius: "50px" }}
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
                    src="/img/Diet.jpg"
                    alt="Clinical Nutrition at Poshak Tattva"
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
                { num: "5+", label: "Diet Programs" },
                { num: "15k+", label: "Students" },
                { num: "5+", label: "Years of Experience" },
                { num: "100%", label: "Root-Cause Approach" },
              ].map((s, i) => (
                <div key={i} className="col-6 col-md-3">
                  <div className="fw-bold mb-1" style={{ fontSize: "2rem", color: "#7A4A1E" }}>{s.num}</div>
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
              <h2 className="display-5 fw-bold mb-3">Clinical Diet Programs</h2>
              <p className="lead " style={{ maxWidth: "600px", margin: "0 auto" }}>
                Each program addresses a specific metabolic pathway — select the intervention designed for your root-cause condition.
              </p>
            </div>

            <div className="d-flex flex-column gap-5">
              {dietServices.map((service, idx) => (
                <div
                  key={service.id}
                  className="card border-0 shadow-sm overflow-hidden"
                  style={{ borderRadius: "16px" }}
                >
                  <div className={`row g-0 ${idx % 2 === 1 ? "flex-row-reverse" : ""}`}>
                    {/* Image Panel */}
                    <div className="col-md-5 position-relative" style={{ minHeight: "350px", background: "#f8f9fa" }}>
                      <Image src={service.img} alt={service.title} fill style={{ objectFit: 'contain', padding: '20px' }} />
                    </div>

                    {/* Content */}
                    <div className="col-md-7 p-6 p-md-8">
                      <div className="d-flex align-items-center justify-content-between mb-4 flex-wrap gap-2">
                        <h3 className="fw-bold mb-0" style={{ color: "#1a1a1a" }}>{service.title}</h3>
                        <span
                          className="badge px-3 py-2 ms-xl-2 ms-0"
                          style={{ background: service.accent, color: "white", fontSize: "0.7rem", letterSpacing: "0.05em" }}
                        >
                          {service.badge}
                        </span>
                      </div>

                      <p className=" mb-6" style={{ lineHeight: "1.75" }}>{service.description}</p>


                      <div className="row">
                        <div className="col-sm-6 mb-4 mb-sm-0">
                          <h6 className="fw-bold mb-3 text-uppercase" style={{ fontSize: "0.85rem", letterSpacing: "0.05em", color: service.accent }}>
                            Conditions Treated
                          </h6>
                          <ul className="list-unstyled m-0" style={{ fontSize: "0.95rem" }}>
                            {service.conditions.slice(0, 4).map((c, i) => (
                              <li key={i} className="mb-2 d-flex align-items-start gap-2">
                                <span style={{ color: service.accent, opacity: 0.6 }}>•</span>
                                <span>{c}</span>
                              </li>
                            ))}
                            {service.conditions.length > 4 && (
                              <li className="" style={{ fontSize: "0.9rem", fontStyle: "italic" }}>
                                +{service.conditions.length - 4} more conditions...
                              </li>
                            )}
                          </ul>
                        </div>
                        <div className="col-sm-6">
                          <h6 className="fw-bold mb-3 text-uppercase" style={{ fontSize: "0.85rem", letterSpacing: "0.05em", color: service.accent }}>
                            Our Clinical Approach
                          </h6>
                          <ul className="list-unstyled m-0">
                            {service.approach.map((b, i) => (
                              <li key={i} className="mb-2 d-flex align-items-start gap-2">
                                <span style={{ color: service.accent, fontWeight: "bold" }}>✓</span>
                                <span className="" style={{ fontSize: "0.95rem" }}>{b}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="mt-6 pt-5" style={{ borderTop: "1px solid #f1f1f1" }}>

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
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          className="wrapper py-16"
          style={{ background: "linear-gradient(135deg, #3B2A1A 0%, #7A4A1E 100%)" }}
        >
          <div className="container text-center">
            <h2 className="display-5 fw-bold mb-4 custom-white-heading">
              Start Your Clinical Nutrition Recovery
            </h2>
            <style jsx>{`
     .custom-white-heading {
         color: #ffffff !important;
         -webkit-text-fill-color: #ffffff !important;
     }
 `}</style>
            <p className="lead text-white mb-6" style={{ maxWidth: "560px", margin: "0 auto 2rem" }}>
              Book a free root-cause consultation — we map your metabolic markers and design a precision nutrition protocol for your specific condition.
            </p>
            <Link
              href="/contact-appointment"
              className="btn btn-lg fw-semibold px-6"
              style={{ background: "#F5C88A", color: "#3B2A1A", border: "none", borderRadius: "50px" }}
            >
              Book Free Consultation →
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
