import Head from "next/head";
import PageProgress from "components/PageProgress";

export default function SoundHealingSessionPage() {
  return (
    <>
      <PageProgress />
      <Head>
        <title>1:1 Sound Healing Session - Poshak Tattva</title>
        <meta name="description" content="Personal sound healing sessions for energy alignment and emotional release." />
      </Head>

      <main className="content-wrapper">
        {/* Header */}
        <section className="wrapper py-16" style={{ backgroundColor: "#f4effa" }}>
          <div className="container">
            <div className="text-center">
              <h1 className="display-4 fw-bold mb-4">1:1 Sound Healing Session</h1>
              <p className="lead text-muted">Personalized Vibrational Healing</p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="wrapper py-16">
          <div className="container">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <h2 className="h3 fw-bold mb-4">Heal with Sound Vibrations</h2>
                <p className="text-muted mb-3">
                  Sound is one of the most powerful healing modalities. In a personalized 1:1 session, we work with specific frequencies and instruments to balance your energy centers, release emotional blockages, and restore harmony to your entire being.
                </p>
                <p className="text-muted mb-4">
                  Each session is customized to your unique energy needs, combining singing bowls, tuning forks, mantras, and guided visualization for deep healing.
                </p>
                <a href="/contact-appointment" className="btn btn-primary">
                  Book Your Session
                </a>
              </div>
              <div className="col-lg-6">
                <div className="card shadow-lg p-6 bg-light">
                  <h4 className="fw-bold mb-4">Benefits You'll Experience</h4>
                  <ul className="list-unstyled">
                    {[
                      "Deep relaxation and stress relief",
                      "Emotional release and healing",
                      "Energy realignment",
                      "Chakra balancing",
                      "Improved sleep quality",
                      "Enhanced spiritual awareness",
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

            {/* Instruments */}
            <div className="row mt-12 g-4">
              {[
                { title: "Singing Bowls", desc: "Ancient metal bowls that create healing frequencies" },
                { title: "Tuning Forks", desc: "Specific frequencies for chakra alignment" },
                { title: "Gong", desc: "Deep, transformative vibrations for cellular healing" },
                { title: "Mantras", desc: "Sacred sounds for spiritual connection and healing" },
              ].map((item, idx) => (
                <div key={idx} className="col-md-6 col-lg-3">
                  <div className="card p-4 border-0 shadow-sm">
                    <h5 className="fw-bold mb-2">{item.title}</h5>
                    <p className="text-muted small">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="wrapper py-16" style={{ background: "linear-gradient(135deg, #1F3D2B 0%, #3D5C4A 100%)" }}>
          <div className="container text-center">
            <h2 className="h3 fw-bold mb-4 text-white">Experience Vibrational Healing</h2>
            <a href="/contact-appointment" className="btn btn-lg fw-bold" style={{ background: "white", color: "#1F3D2B", border: "none" }}>
              Schedule Session
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
