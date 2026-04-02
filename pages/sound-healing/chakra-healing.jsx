import Head from "next/head";
import PageProgress from "components/PageProgress";

export default function ChakraHealingPage() {
  return (
    <>
      <PageProgress />
      <Head>
        <title>Chakra Healing - Sound Therapy - Poshak Tattva</title>
        <meta name="description" content="Balance your chakras through sound healing and vibrational therapy." />
      </Head>

      <main className="content-wrapper">
        {/* Header */}
        <section className="wrapper py-16" style={{ backgroundColor: "#f4effa" }}>
          <div className="container">
            <div className="text-center">
              <h1 className="display-4 fw-bold mb-4">Chakra Healing</h1>
              <p className="lead text-muted">Balance Your Energy Centers Through Sound</p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="wrapper py-16">
          <div className="container">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <h2 className="h3 fw-bold mb-4">Align Your Energy Centers</h2>
                <p className="text-muted mb-3">
                  Your body has seven primary energy centers called chakras. When they're blocked or imbalanced, it manifests as physical illness, emotional distress, or spiritual disconnection. Our Chakra Healing sessions use specific sound frequencies and vibrations to clear blockages and restore balance.
                </p>
                <p className="text-muted mb-4">
                  Each chakra has its own frequency, color, and purpose. We work systematically through all seven to restore your natural vitality and well-being.
                </p>
                <a href="/contact-appointment" className="btn btn-primary">
                  Balance Your Chakras
                </a>
              </div>
              <div className="col-lg-6">
                <div className="card shadow-lg p-6 bg-light">
                  <h4 className="fw-bold mb-4">The 7 Chakras</h4>
                  <ul className="list-unstyled">
                    {[
                      "🔴 Root - Stability and grounding",
                      "🟠 Sacral - Creativity and pleasure",
                      "🟡 Solar Plexus - Power and confidence",
                      "💚 Heart - Love and compassion",
                      "🔵 Throat - Expression and truth",
                      "💜 Third Eye - Intuition and insight",
                      "⚪ Crown - Spiritual connection",
                    ].map((item, idx) => (
                      <li key={idx} className="mb-3">
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Chakra Details */}
            <div className="row mt-12 g-4">
              {[
                { name: "Root Chakra", issues: "Fear, insecurity, physical instability", healing: "Grounding, stability" },
                { name: "Sacral Chakra", issues: "Low creativity, emotional blocks", healing: "Creativity, vitality" },
                { name: "Heart Chakra", issues: "Loneliness, resentment, grief", healing: "Love, compassion" },
                { name: "Throat Chakra", issues: "Communication issues, timidity", healing: "Expression, authenticity" },
              ].map((chakra, idx) => (
                <div key={idx} className="col-md-6 col-lg-3">
                  <div className="card p-4 border-0 shadow-sm">
                    <h5 className="fw-bold mb-2">{chakra.name}</h5>
                    <p className="text-muted small mb-2">
                      <strong>Issues:</strong> {chakra.issues}
                    </p>
                    <p className="text-muted small">
                      <strong>Healing:</strong> {chakra.healing}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="wrapper py-16" style={{ background: "linear-gradient(135deg, #1F3D2B 0%, #3D5C4A 100%)" }}>
          <div className="container text-center text-white">
            <h2 className="h3 fw-bold mb-4 text-white">Restore Balance to Your Energy System</h2>
            <a href="/contact-appointment" className="btn btn-lg fw-bold" style={{ background: "white", color: "#1F3D2B", border: "none" }}>
              Book Chakra Healing
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
