import Head from "next/head";
import PageProgress from "components/PageProgress";

export default function GroupSessionsPage() {
  return (
    <>
      <PageProgress />
      <Head>
        <title>Group Yoga Sessions - Poshak Tattva</title>
        <meta
          name="description"
          content="Join our group yoga sessions for strength, flexibility, and inner peace."
        />
      </Head>

      <main className="content-wrapper">
        {/* Header */}
        <section className="wrapper py-16" style={{ backgroundColor: "#fff5eb" }}>
          <div className="container">
            <div className="text-center">
              <h1 className="display-4 fw-bold mb-4">Group Yoga Sessions</h1>
              <p className="lead text-muted">
                Build strength, flexibility, and community in our group classes
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="wrapper py-16">
          <div className="container">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <h2 className="h3 fw-bold mb-4">Transform Together</h2>
                <p className="text-muted mb-3">
                  Our group yoga sessions create a supportive community where
                  you can grow and transform alongside like-minded individuals.
                  Whether you're a beginner or experienced yogi, our skilled
                  instructors will guide you through poses, breathing
                  techniques, and meditation.
                </p>
                <p className="text-muted mb-4">
                  Experience the power of collective energy as you strengthen
                  your body, calm your mind, and elevate your spirit.
                </p>
                <a href="/contact-appointment" className="btn btn-primary">
                  Join a Group Session
                </a>
              </div>
              <div className="col-lg-6">
                <div className="card shadow-lg p-6 bg-light">
                  <h4 className="fw-bold mb-4">What to Expect</h4>
                  <ul className="list-unstyled">
                    {[
                      "Warm-up and breathing exercises",
                      "Physical yoga postures (asanas)",
                      "Balance and flexibility work",
                      "Relaxation and meditation",
                      "Q&A with instructor",
                    ].map((item, idx) => (
                      <li key={idx} className="mb-3 d-flex align-items-start">
                        <i
                          className="uil uil-check-circle text-success me-3 mt-1"
                          style={{ fontSize: "1.2rem" }}
                        />
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
                {
                  icon: "💪",
                  title: "Build Strength",
                  desc: "Develop lean muscle and improve posture",
                },
                {
                  icon: "🧘",
                  title: "Increase Flexibility",
                  desc: "Enhance range of motion and mobility",
                },
                {
                  icon: "🧠",
                  title: "Mental Clarity",
                  desc: "Reduce stress and improve focus",
                },
                {
                  icon: "❤️",
                  title: "Community",
                  desc: "Connect with like-minded wellness seekers",
                },
              ].map((benefit, idx) => (
                <div key={idx} className="col-md-6 col-lg-3">
                  <div className="text-center">
                    <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>
                      {benefit.icon}
                    </div>
                    <h5 className="fw-bold">{benefit.title}</h5>
                    <p className="text-muted small">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          className="wrapper py-16"
          style={{
            background: "linear-gradient(135deg, #1F3D2B 0%, #3D5C4A 100%)",
          }}
        >
          <div className="container text-center">
            <h2 className="h3 fw-bold mb-4 text-white">
              Ready to Begin Your Yoga Journey?
            </h2>
            <a href="/contact-appointment" className="btn btn-lg fw-bold" style={{ background: "white", color: "#1F3D2B", border: "none" }}>
              View Schedule & Book
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
