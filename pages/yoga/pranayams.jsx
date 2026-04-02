import Head from "next/head";
import PageProgress from "components/PageProgress";

export default function PranayamsPage() {
  return (
    <>
      <PageProgress />
      <Head>
        <title>Pranayama Classes - Poshak Tattva</title>
        <meta name="description" content="Master breathing techniques to enhance vitality, energy, and mental clarity." />
      </Head>

      <main className="content-wrapper">
        {/* Header */}
        <section className="wrapper py-16" style={{ backgroundColor: "#fff5eb" }}>
          <div className="container">
            <div className="text-center">
              <h1 className="display-4 fw-bold mb-4">Pranayama Classes</h1>
              <p className="lead text-muted">Master the Science of Breathing - Pranayama Techniques</p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="wrapper py-16">
          <div className="container">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <h2 className="h3 fw-bold mb-4">Control Your Life Force</h2>
                <p className="text-muted mb-3">
                  Pranayama is the practice of controlling prana (life force energy) through breathing techniques. By mastering your breath, you gain control over your mind, body, and emotions.
                </p>
                <p className="text-muted mb-4">
                  Our Pranayama classes teach you authentic techniques passed down through yogic traditions, scientifically proven to enhance oxygen absorption, boost immunity, and increase mental clarity.
                </p>
                <a href="/contact-appointment" className="btn btn-primary">
                  Enroll in Pranayama Class
                </a>
              </div>
              <div className="col-lg-6">
                <div className="card shadow-lg p-6 bg-light">
                  <h4 className="fw-bold mb-4">Why Practice Pranayama?</h4>
                  <ul className="list-unstyled">
                    {[
                      "Increase oxygen and energy levels",
                      "Calm nervous system",
                      "Improve lung capacity",
                      "Enhanced mental focus",
                      "Better emotional control",
                      "Detoxify your body",
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

            {/* Techniques */}
            <div className="row mt-12 g-4">
              {[
                { 
                  title: "Ujjayi", 
                  desc: "Ocean-like breathing to warm and energize the body",
                  benefits: "Calms mind, builds heat"
                },
                { 
                  title: "Nadi Shodhana", 
                  desc: "Alternate nostril breathing for balance",
                  benefits: "Balances energy, clears nadis"
                },
                { 
                  title: "Kapalabhati", 
                  desc: "Skull-shining breath for cleansing",
                  benefits: "Detoxifies, energizes"
                },
                { 
                  title: "Bhramari", 
                  desc: "Bee breath for nervous system calm",
                  benefits: "Reduces anxiety, improves sleep"
                },
              ].map((tech, idx) => (
                <div key={idx} className="col-md-6 col-lg-3">
                  <div className="card p-4 border-0 shadow-sm h-100">
                    <h5 className="fw-bold mb-2">{tech.title}</h5>
                    <p className="text-muted small mb-3">{tech.desc}</p>
                    <small className="badge bg-info">{tech.benefits}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="wrapper py-16" style={{ background: "linear-gradient(135deg, #1F3D2B 0%, #3D5C4A 100%)" }}>
          <div className="container text-center">
            <h2 className="h3 fw-bold mb-4 text-white">Master Your Breath, Master Your Life</h2>
            <a href="/contact-appointment" className="btn btn-lg fw-bold" style={{ background: "white", color: "#1F3D2B", border: "none" }}>
              Start Pranayama Practice
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
