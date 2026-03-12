import Head from "next/head";
import PageProgress from "components/PageProgress";

export default function WeightLossPage() {
  return (
    <>
      <PageProgress />
      <Head>
        <title>Weight Loss Diet Consultation - Poshak Tattva</title>
        <meta
          name="description"
          content="Natural weight loss through sattvic nutrition without deprivation."
        />
      </Head>

      <main className="content-wrapper">
        {/* Header */}
        <section className="wrapper bg-light py-16">
          <div className="container">
            <div className="text-center">
              <h1 className="display-4 fw-bold mb-4">Weight Loss</h1>
              <p className="lead text-muted">
                Sustainable Weight Loss Through Natural Nutrition
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="wrapper py-16">
          <div className="container">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <h2 className="h3 fw-bold mb-4">
                  Lose Weight Without Starving
                </h2>
                <p className="text-muted mb-3">
                  Tired of restrictive diets that leave you hungry and
                  miserable? We believe in sustainable weight loss through
                  nourishing, whole foods that your body actually needs.
                </p>
                <p className="text-muted mb-4">
                  Our sattvic nutrition approach addresses the real causes of
                  weight gain—poor digestion, hormonal imbalance, and food
                  addictions—helping you lose weight naturally while feeling
                  energized and satisfied.
                </p>
                <a href="/contact-appointment" className="btn btn-primary">
                  Start Weight Loss Journey
                </a>
              </div>
              <div className="col-lg-6">
                <div className="card shadow-lg p-6 bg-light">
                  <h4 className="fw-bold mb-4">Why Our Approach Works</h4>
                  <ul className="list-unstyled">
                    {[
                      "No calorie counting or deprivation",
                      "Addresses root causes of weight gain",
                      "Improves metabolism naturally",
                      "Increases energy levels",
                      "Promotes long-term success",
                      "Supports overall wellness",
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

            {/* Results */}
            <div className="row mt-12 g-4">
              {[
                { metric: "Average", result: "5-8 kg in 3 months" },
                { metric: "Metabolism", result: "20-30% increase" },
                { metric: "Energy", result: "Significant improvement" },
                { metric: "Success Rate", result: "95% maintain weight loss" },
              ].map((item, idx) => (
                <div key={idx} className="col-md-6 col-lg-3">
                  <div className="card p-4 border-0 shadow-sm text-center">
                    <p className="text-muted small mb-2">{item.metric}</p>
                    <h5 className="fw-bold text-primary">{item.result}</h5>
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
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          }}
        >
          <div className="container text-center text-white">
            <h2 className="h3 fw-bold mb-4">Your Transformation Starts Here</h2>
            <a
              href="/contact-appointment"
              className="btn btn-lg fw-bold"
              style={{ background: "white", color: "#667eea", border: "none" }}
            >
              Begin Today
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
