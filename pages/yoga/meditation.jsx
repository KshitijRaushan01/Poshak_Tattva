import Head from "next/head";
import PageProgress from "components/PageProgress";

export default function MeditationPage() {
  return (
    <>
      <PageProgress />
      <Head>
        <title>Meditation Classes - Poshak Tattva</title>
        <meta name="description" content="Learn mindfulness and meditation to calm your mind and find inner peace." />
      </Head>

      <main className="content-wrapper">
        {/* Header */}
        <section className="wrapper py-16" style={{ backgroundColor: "#fff5eb" }}>
          <div className="container">
            <div className="text-center">
              <h1 className="display-4 fw-bold mb-4">Meditation & Mindfulness</h1>
              <p className="lead text-muted">Find inner peace and mental clarity through guided meditation</p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="wrapper py-16">
          <div className="container">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <h2 className="h3 fw-bold mb-4">Calm Your Mind, Elevate Your Spirit</h2>
                <p className="text-muted mb-3">
                  In today's fast-paced world, our minds are constantly bombarded with stress and distractions. Meditation offers a sanctuary—a space where you can reconnect with yourself and find lasting peace.
                </p>
                <p className="text-muted mb-4">
                  Our guided meditation sessions combine ancient practices with modern understanding, helping you develop mindfulness, reduce anxiety, and improve overall well-being.
                </p>
                <a href="/contact-appointment" className="btn btn-primary">
                  Start Meditating Today
                </a>
              </div>
              <div className="col-lg-6">
                <div className="card shadow-lg p-6 bg-light">
                  <h4 className="fw-bold mb-4">Proven Benefits</h4>
                  <ul className="list-unstyled">
                    {[
                      "Reduce stress and anxiety",
                      "Improve focus and concentration",
                      "Better sleep quality",
                      "Emotional balance",
                      "Lower blood pressure",
                      "Enhanced self-awareness",
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

            {/* Meditation Types */}
            <div className="row mt-12 g-4">
              {[
                { title: "Guided Meditation", desc: "Step-by-step instruction with soothing voice guidance" },
                { title: "Mindfulness Practice", desc: "Present moment awareness for daily life" },
                { title: "Breathing Meditation", desc: "Control breath to calm the nervous system" },
                { title: "Body Scan", desc: "Release tension and promote relaxation" },
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
            <h2 className="h3 fw-bold mb-4 text-white">Find Your Peace Today</h2>
            <a href="/contact-appointment" className="btn btn-lg fw-bold" style={{ background: "white", color: "#1F3D2B", border: "none" }}>
              Join Meditation Class
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
