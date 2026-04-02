import Head from "next/head";
import PageProgress from "components/PageProgress";

export default function DigestiveDisordersPage() {
  return (
    <>
      <PageProgress />
      <Head>
        <title>Digestive Disorders Diet Consultation - Poshak Tattva</title>
        <meta name="description" content="Natural diet solutions for digestive disorders using sattvic nutrition." />
      </Head>

      <main className="content-wrapper">
        {/* Header */}
        <section className="wrapper py-16" style={{ backgroundColor: "#f2f8ea" }}>
          <div className="container">
            <div className="text-center">
              <h1 className="display-4 fw-bold mb-4">Digestive Disorders</h1>
              <p className="lead text-muted">Natural Diet Solutions for a Healthy Digestive System</p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="wrapper py-16">
          <div className="container">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <h2 className="h3 fw-bold mb-4">Heal Your Digestion Naturally</h2>
                <p className="text-muted mb-3">
                  Digestive disorders affect millions but are often rooted in improper eating habits and food choices. Our sattvic diet approach addresses the root cause rather than just symptoms.
                </p>
                <p className="text-muted mb-4">
                  We create personalized meal plans that soothe your digestive system, promote healing, and restore natural balance through pure, plant-based nutrition.
                </p>
                <a href="/contact-appointment" className="btn btn-primary">
                  Get Dietary Consultation
                </a>
              </div>
              <div className="col-lg-6">
                <div className="card shadow-lg p-6 bg-light">
                  <h4 className="fw-bold mb-4">Conditions We Address</h4>
                  <ul className="list-unstyled">
                    {[
                      "IBS and Irritable Bowel",
                      "GERD and Acid Reflux",
                      "Bloating and Gas",
                      "Constipation and Diarrhea",
                      "Chronic Inflammation",
                      "Leaky Gut Syndrome",
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
                { title: "Assessment", desc: "Understanding your digestive issues and lifestyle" },
                { title: "Personalization", desc: "Customized meal plans for your unique condition" },
                { title: "Healing Foods", desc: "Anti-inflammatory, digestive-friendly nutrition" },
                { title: "Long-term Health", desc: "Sustainable habits for lasting wellness" },
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
            <h2 className="h3 fw-bold mb-4 text-white">Restore Your Digestive Health</h2>
            <a href="/contact-appointment" className="btn btn-lg fw-bold" style={{ background: "white", color: "#1F3D2B", border: "none" }}>
              Book Consultation Now
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
