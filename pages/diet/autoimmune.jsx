import Head from "next/head";
import PageProgress from "components/PageProgress";

export default function AutoimmuneDisordersPage() {
  return (
    <>
      <PageProgress />
      <Head>
        <title>Autoimmune Disorders Diet - Poshak Tattva</title>
        <meta name="description" content="Nutrition support for autoimmune conditions through sattvic food principles." />
      </Head>

      <main className="content-wrapper">
        {/* Header */}
        <section className="wrapper bg-light py-16">
          <div className="container">
            <div className="text-center">
              <h1 className="display-4 fw-bold mb-4">Autoimmune Disorders</h1>
              <p className="lead text-muted">Nutrition Support for Immune System Balance</p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="wrapper py-16">
          <div className="container">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <h2 className="h3 fw-bold mb-4">Support Your Immune System</h2>
                <p className="text-muted mb-3">
                  Autoimmune disorders occur when the immune system attacks its own tissues. While managing these conditions requires medical support, nutrition plays a crucial role in reducing inflammation and promoting healing.
                </p>
                <p className="text-muted mb-4">
                  Our anti-inflammatory sattvic diet approach helps calm an overactive immune system, reduces symptoms, and supports your body's natural healing processes.
                </p>
                <a href="/contact-appointment" className="btn btn-primary">
                  Get Dietary Support
                </a>
              </div>
              <div className="col-lg-6">
                <div className="card shadow-lg p-6 bg-light">
                  <h4 className="fw-bold mb-4">Conditions We Support</h4>
                  <ul className="list-unstyled">
                    {[
                      "Rheumatoid Arthritis",
                      "Lupus (SLE)",
                      "Hashimoto's Thyroiditis",
                      "Celiac Disease",
                      "Crohn's Disease",
                      "Psoriasis & Eczema",
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

            {/* Strategy */}
            <div className="row mt-12 g-4">
              {[
                { title: "Eliminate Triggers", desc: "Identify and remove inflammatory foods" },
                { title: "Anti-Inflammatory Foods", desc: "Focus on healing, whole plant foods" },
                { title: "Gut Healing", desc: "Repair intestinal barrier and microbiome" },
                { title: "Nutritional Support", desc: "Targeted nutrients for immune balance" },
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
            <h2 className="h3 fw-bold mb-4">Reduce Symptoms & Support Healing</h2>
            <a href="/contact-appointment" className="btn btn-lg fw-bold" style={{ background: "white", color: "#667eea", border: "none" }}>
              Book Consultation
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
