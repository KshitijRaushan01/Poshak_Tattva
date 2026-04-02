import Head from "next/head";
import PageProgress from "components/PageProgress";

export default function YogaNidraPage() {
  return (
    <>
      <PageProgress />
      <Head>
        <title>Yoga Nidra - Poshak Tattva</title>
        <meta name="description" content="Experience the healing power of Yoga Nidra, the yoga of conscious sleep." />
      </Head>

      <main className="content-wrapper">
        {/* Header */}
        <section className="wrapper py-16" style={{ backgroundColor: "#fff5eb" }}>
          <div className="container">
            <div className="text-center">
              <h1 className="display-4 fw-bold mb-4">Yoga Nidra</h1>
              <p className="lead text-muted">The Yoga of Conscious Sleep - Healing Relaxation</p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="wrapper py-16">
          <div className="container">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <h2 className="h3 fw-bold mb-4">Deep Relaxation & Healing</h2>
                <p className="text-muted mb-3">
                  Yoga Nidra is a powerful relaxation technique that guides you into a state of conscious sleep. In this deeply restorative practice, your body sleeps while your mind remains aware, allowing profound healing to occur at all levels.
                </p>
                <p className="text-muted mb-4">
                  Just 30 minutes of Yoga Nidra equals 4 hours of normal sleep in terms of mental rejuvenation. Perfect for stress relief, emotional healing, and spiritual growth.
                </p>
                <a href="/contact-appointment" className="btn btn-primary">
                  Book Yoga Nidra Session
                </a>
              </div>
              <div className="col-lg-6">
                <div className="card shadow-lg p-6 bg-light">
                  <h4 className="fw-bold mb-4">Incredible Benefits</h4>
                  <ul className="list-unstyled">
                    {[
                      "Deep relaxation and stress relief",
                      "Resolve unconscious patterns",
                      "Improve sleep quality",
                      "Emotional healing",
                      "Pain management",
                      "Spiritual awakening",
                    ].map((item, idx) => (
                      <li key={idx} className="mb-3 d-flex align-items-start">
                        <i className="uil uil-check-circle text-success me-3 mt-1" style={{ fontSize: "1.2rem" }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* How It Works */}
            <div className="row mt-12 g-4">
              <div className="col-lg-8 mx-auto">
                <h3 className="h4 fw-bold mb-6 text-center">How Yoga Nidra Works</h3>
                <div className="card border-0 shadow-sm p-6">
                  <ol className="list-styled">
                    {[
                      { step: "Settling", desc: "Lie down comfortably in shavasana (corpse pose)" },
                      { step: "Body Awareness", desc: "Become aware of your physical body as a whole" },
                      { step: "Sankalpa", desc: "Plant a positive intention or resolution in your subconscious" },
                      { step: "Body Rotation", desc: "Systematically move awareness through your body" },
                      { step: "Breath Awareness", desc: "Observe your natural breathing pattern" },
                      { step: "Visualization", desc: "Guide your mind through peaceful imagery" },
                      { step: "Sankalpa Return", desc: "Reaffirm your positive intention" },
                      { step: "Awakening", desc: "Gently return to full consciousness" },
                    ].map((item, idx) => (
                      <li key={idx} className="mb-4">
                        <strong>{item.step}:</strong> {item.desc}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="wrapper py-16" style={{ background: "linear-gradient(135deg, #1F3D2B 0%, #3D5C4A 100%)" }}>
          <div className="container text-center">
            <h2 className="h3 fw-bold mb-4 text-white">Experience Deep Healing & Relaxation</h2>
            <a href="/contact-appointment" className="btn btn-lg fw-bold" style={{ background: "white", color: "#1F3D2B", border: "none" }}>
              Join Yoga Nidra Class
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
