import Head from "next/head";
import PageProgress from "components/PageProgress";

export default function HormonalDisordersPage() {
  return (
    <>
      <PageProgress />
      <Head>
        <title>Hormonal Balance Diet - Poshak Tattva</title>
        <meta name="description" content="Nutrition solutions for hormonal imbalance and endocrine health." />
      </Head>

      <main className="content-wrapper">
        {/* Header */}
        <section className="wrapper py-16" style={{ backgroundColor: "#f2f8ea" }}>
          <div className="container">
            <div className="text-center">
              <h1 className="display-4 fw-bold mb-4">Hormonal Balance</h1>
              <p className="lead text-muted">Nutrition for Hormonal Health and Balance</p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="wrapper py-16">
          <div className="container">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <h2 className="h3 fw-bold mb-4">Balance Your Hormones Naturally</h2>
                <p className="text-muted mb-3">
                  Hormonal imbalances affect energy, mood, weight, and overall health. Many symptoms attributed to age or stress are actually nutritional deficiencies or dietary imbalances.
                </p>
                <p className="text-muted mb-4">
                  Our holistic approach uses sattvic foods and Ayurvedic principles to restore hormonal equilibrium and support your endocrine system naturally.
                </p>
                <a href="/contact-appointment" className="btn btn-primary">
                  Balance Your Hormones
                </a>
              </div>
              <div className="col-lg-6">
                <div className="card shadow-lg p-6 bg-light">
                  <h4 className="fw-bold mb-4">Common Issues We Address</h4>
                  <ul className="list-unstyled">
                    {[
                      "PCOS and menstrual irregularities",
                      "Thyroid imbalance",
                      "Cortisol and stress hormones",
                      "Estrogen dominance",
                      "Insulin resistance",
                      "Menopausal symptoms",
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
                { icon: "⚡", title: "Energy & Vitality", desc: "Stabilized energy throughout the day" },
                { icon: "😊", title: "Mood Balance", desc: "Emotional stability and well-being" },
                { icon: "⚖️", title: "Healthy Weight", desc: "Natural weight management" },
                { icon: "😴", title: "Better Sleep", desc: "Improved sleep quality and duration" },
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
        <section className="wrapper py-16" style={{ background: "linear-gradient(135deg, #1F3D2B 0%, #3D5C4A 100%)" }}>
          <div className="container text-center">
            <h2 className="h3 fw-bold mb-4 text-white">Take Control of Your Hormonal Health</h2>
            <a href="/contact-appointment" className="btn btn-lg fw-bold" style={{ background: "white", color: "#1F3D2B", border: "none" }}>
              Get Consultation
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
