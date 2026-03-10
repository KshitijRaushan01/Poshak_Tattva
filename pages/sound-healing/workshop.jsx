import Head from "next/head";
import PageProgress from "components/PageProgress";

export default function SoundHealingWorkshopPage() {
  return (
    <>
      <PageProgress />
      <Head>
        <title>Sound Healing Workshop - Poshak Tattva</title>
        <meta name="description" content="Group sound healing workshops for community healing and spiritual growth." />
      </Head>

      <main className="content-wrapper">
        {/* Header */}
        <section className="wrapper bg-light py-16">
          <div className="container">
            <div className="text-center">
              <h1 className="display-4 fw-bold mb-4">Sound Healing Workshop</h1>
              <p className="lead text-muted">Group Healing Through Sacred Sound</p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="wrapper py-16">
          <div className="container">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <h2 className="h3 fw-bold mb-4">Heal Together in Community</h2>
                <p className="text-muted mb-3">
                  Our Sound Healing Workshops bring together a group of individuals for collective healing. The power of shared intention combined with healing frequencies creates a profound experience that goes beyond what individual sessions can offer.
                </p>
                <p className="text-muted mb-4">
                  These workshops are perfect for teams, families, or anyone seeking deeper healing in a supportive, community environment.
                </p>
                <a href="/contact-appointment" className="btn btn-primary">
                  Register for Workshop
                </a>
              </div>
              <div className="col-lg-6">
                <div className="card shadow-lg p-6 bg-light">
                  <h4 className="fw-bold mb-4">What's Included</h4>
                  <ul className="list-unstyled">
                    {[
                      "Welcome and intention setting",
                      "Sound meditation with bowls and gong",
                      "Group energy alignment",
                      "Mantras and sacred chanting",
                      "Guided visualization",
                      "Closing circle and sharing",
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

            {/* Benefits */}
            <div className="row mt-12 g-4">
              {[
                { icon: "🤝", title: "Community Connection", desc: "Connect with like-minded seekers" },
                { icon: "⚡", title: "Amplified Healing", desc: "Collective energy magnifies effects" },
                { icon: "🕉️", title: "Spiritual Growth", desc: "Deepen your spiritual practice" },
                { icon: "💫", title: "Transformation", desc: "Experience profound shifts" },
              ].map((benefit, idx) => (
                <div key={idx} className="col-md-6 col-lg-3">
                  <div className="text-center">
                    <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{benefit.icon}</div>
                    <h5 className="fw-bold">{benefit.title}</h5>
                    <p className="text-muted small">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="wrapper py-16" style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}>
          <div className="container text-center text-white">
            <h2 className="h3 fw-bold mb-4">Join Our Next Workshop</h2>
            <a href="/contact-appointment" className="btn btn-lg fw-bold" style={{ background: "white", color: "#667eea", border: "none" }}>
              View Schedules
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
