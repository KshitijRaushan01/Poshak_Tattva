import Head from "next/head";
import PageProgress from "components/PageProgress";

export default function PrivateSessionsPage() {
  return (
    <>
      <PageProgress />
      <Head>
        <title>Private Yoga Sessions - Poshak Tattva</title>
        <meta name="description" content="Get personalized one-on-one yoga coaching tailored to your needs." />
      </Head>

      <main className="content-wrapper">
        {/* Header */}
        <section className="wrapper bg-light py-16">
          <div className="container">
            <div className="text-center">
              <h1 className="display-4 fw-bold mb-4">Private 1:1 Yoga Sessions</h1>
              <p className="lead text-muted">Personalized yoga coaching designed just for you</p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="wrapper py-16">
          <div className="container">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <h2 className="h3 fw-bold mb-4">Your Personal Yoga Guide</h2>
                <p className="text-muted mb-3">
                  Experience yoga the way it was meant to be—completely personalized to your body, goals, and lifestyle. Our certified instructors will work one-on-one with you to create a customized practice that addresses your specific needs.
                </p>
                <p className="text-muted mb-4">
                  Whether you're recovering from an injury, looking to deepen your practice, or just starting out, private sessions ensure you get the attention and guidance you deserve.
                </p>
                <a href="/contact-appointment" className="btn btn-primary">
                  Schedule Private Session
                </a>
              </div>
              <div className="col-lg-6">
                <div className="card shadow-lg p-6 bg-light">
                  <h4 className="fw-bold mb-4">Why Choose Private?</h4>
                  <ul className="list-unstyled">
                    {[
                      "100% personalized to your goals",
                      "Work at your own pace and level",
                      "Expert guidance and corrections",
                      "Flexible scheduling",
                      "Address injuries or limitations",
                      "Achieve faster results",
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

            {/* Ideal For */}
            <div className="row mt-12 g-4">
              {[
                { title: "Beginners", desc: "Start your yoga journey with expert guidance" },
                { title: "Advanced Practitioners", desc: "Deepen your practice and unlock new levels" },
                { title: "Injury Recovery", desc: "Safely rebuild strength after injuries" },
                { title: "Busy Professionals", desc: "Flexible scheduling that fits your life" },
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
            <h2 className="h3 fw-bold mb-4">Get Your Personalized Yoga Practice</h2>
            <a href="/contact-appointment" className="btn btn-lg fw-bold" style={{ background: "white", color: "#667eea", border: "none" }}>
              Book Private Session
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
