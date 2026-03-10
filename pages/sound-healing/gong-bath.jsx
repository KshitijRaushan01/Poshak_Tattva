import Head from "next/head";
import PageProgress from "components/PageProgress";

export default function GongBathPage() {
  return (
    <>
      <PageProgress />
      <Head>
        <title>Gong Bath - Sound Meditation - Poshak Tattva</title>
        <meta name="description" content="Experience the transformative power of gong bath meditation." />
      </Head>

      <main className="content-wrapper">
        {/* Header */}
        <section className="wrapper bg-light py-16">
          <div className="container">
            <div className="text-center">
              <h1 className="display-4 fw-bold mb-4">Gong Bath</h1>
              <p className="lead text-muted">Immerse Yourself in Healing Sound Vibrations</p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="wrapper py-16">
          <div className="container">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <h2 className="h3 fw-bold mb-4">Transform with Gong</h2>
                <p className="text-muted mb-3">
                  A Gong Bath is an immersive sound healing experience where you lie down and are "bathed" in the powerful, transformative vibrations of the gong. This ancient instrument creates frequencies that penetrate every cell of your body.
                </p>
                <p className="text-muted mb-4">
                  The gong's complex harmonics work on physical, emotional, mental, and spiritual levels, facilitating deep relaxation, healing, and transformation that many describe as life-changing.
                </p>
                <a href="/contact-appointment" className="btn btn-primary">
                  Experience Gong Bath
                </a>
              </div>
              <div className="col-lg-6">
                <div className="card shadow-lg p-6 bg-light">
                  <h4 className="fw-bold mb-4">Profound Effects</h4>
                  <ul className="list-unstyled">
                    {[
                      "Cellular regeneration and healing",
                      "Release of deep trauma",
                      "Spiritual awakening experiences",
                      "Complete mind-body reset",
                      "Enhanced intuition",
                      "Lasting sense of peace",
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

            {/* Science */}
            <div className="row mt-12 g-4">
              <div className="col-lg-8 mx-auto">
                <div className="card border-0 shadow-sm p-6 bg-light">
                  <h4 className="fw-bold mb-4">The Science Behind Gong Healing</h4>
                  <p className="text-muted mb-3">
                    The gong produces complex frequencies that range from very low to very high. These vibrations:
                  </p>
                  <ul className="list-unstyled">
                    {[
                      "Entrain brainwaves to theta state (deep meditation)",
                      "Balance chakras and meridians",
                      "Stimulate parasympathetic nervous system",
                      "Clear energetic blockages",
                      "Promote cellular healing",
                    ].map((item, idx) => (
                      <li key={idx} className="mb-2">
                        <i className="uil uil-arrow-right text-primary me-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="wrapper py-16" style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}>
          <div className="container text-center text-white">
            <h2 className="h3 fw-bold mb-4">Let the Gong Transform You</h2>
            <a href="/contact-appointment" className="btn btn-lg fw-bold" style={{ background: "white", color: "#667eea", border: "none" }}>
              Schedule Gong Bath
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
