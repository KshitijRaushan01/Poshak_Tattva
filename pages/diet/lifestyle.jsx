import Head from "next/head";
import PageProgress from "components/PageProgress";

export default function LifestyleDisordersPage() {
  return (
    <>
      <PageProgress />
      <Head>
        <title>Lifestyle Disorders Diet - Poshak Tattva</title>
        <meta name="description" content="Nutrition solutions for diabetes, hypertension, obesity and other lifestyle diseases." />
      </Head>

      <main className="content-wrapper">
        {/* Header */}
        <section className="wrapper bg-light py-16">
          <div className="container">
            <div className="text-center">
              <h1 className="display-4 fw-bold mb-4">Lifestyle Disorders</h1>
              <p className="lead text-muted">Nutrition Solutions for Modern Health Challenges</p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="wrapper py-16">
          <div className="container">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <h2 className="h3 fw-bold mb-4">Reverse Lifestyle Diseases</h2>
                <p className="text-muted mb-3">
                  Lifestyle disorders like diabetes, hypertension, and obesity are preventable and often reversible with the right nutrition and habits. Our evidence-based sattvic approach addresses the root causes.
                </p>
                <p className="text-muted mb-4">
                  We work with you to create sustainable dietary changes that not only manage symptoms but actually reverse disease progression and restore vibrant health.
                </p>
                <a href="/contact-appointment" className="btn btn-primary">
                  Start Your Recovery
                </a>
              </div>
              <div className="col-lg-6">
                <div className="card shadow-lg p-6 bg-light">
                  <h4 className="fw-bold mb-4">Conditions We Support</h4>
                  <ul className="list-unstyled">
                    {[
                      "Type 2 Diabetes",
                      "Hypertension (High BP)",
                      "Obesity and Weight Issues",
                      "High Cholesterol",
                      "Heart Disease Prevention",
                      "Metabolic Syndrome",
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

            {/* Approach */}
            <div className="row mt-12 g-4">
              {[
                { title: "Assessment", desc: "Understand your health status and goals" },
                { title: "Education", desc: "Learn why lifestyle changes matter" },
                { title: "Nutrition Plan", desc: "Customized sattvic meal planning" },
                { title: "Support", desc: "Ongoing guidance and accountability" },
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
        <section className="wrapper py-16" style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}>
          <div className="container text-center text-white">
            <h2 className="h3 fw-bold mb-4">Reclaim Your Health Today</h2>
            <a href="/contact-appointment" className="btn btn-lg fw-bold" style={{ background: "white", color: "#667eea", border: "none" }}>
              Book Consultation
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
