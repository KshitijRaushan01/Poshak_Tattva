import Head from "next/head";
import PageProgress from "components/PageProgress";

export default function PricingPage() {
  const plans = [
    {
      name: "Single Session",
      price: "₹800",
      duration: "60 minutes",
      features: [
        "One-on-one or group session",
        "60-minute duration",
        "Personalized guidance",
        "Valid for 30 days",
      ],
      cta: "Book Now",
      popular: false,
    },
    {
      name: "5-Class Package",
      price: "₹3,500",
      duration: "5 x 60 minutes",
      features: [
        "Save ₹500 vs single sessions",
        "Flexible scheduling",
        "Progress tracking",
        "Valid for 90 days",
        "Priority booking",
      ],
      cta: "Get Package",
      popular: true,
    },
    {
      name: "Monthly Unlimited",
      price: "₹8,000",
      duration: "Unlimited classes",
      features: [
        "Unlimited classes",
        "All service types included",
        "Personalized meal plans",
        "Monthly progress reviews",
        "Community access",
        "Priority support",
      ],
      cta: "Subscribe Now",
      popular: false,
    },
  ];

  return (
    <>
      <PageProgress />
      <Head>
        <title>Pricing - Poshak Tattva</title>
        <meta name="description" content="Flexible pricing plans for yoga, diet consultation, and sound healing." />
      </Head>

      <main className="content-wrapper">
        {/* Header Section */}
        <section className="wrapper bg-light py-16">
          <div className="container">
            <div className="text-center">
              <h1 className="display-4 fw-bold mb-4">Simple, Transparent Pricing</h1>
              <p className="lead text-muted mb-2">Choose the plan that works best for your wellness journey</p>
              <p className="text-muted">All plans include personalized guidance and progress tracking</p>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="wrapper py-16">
          <div className="container">
            <div className="row g-4">
              {plans.map((plan, idx) => (
                <div key={idx} className="col-lg-4">
                  <div
                    className={`card h-100 shadow-sm transition ${
                      plan.popular ? "border-primary border-3 shadow-lg position-relative" : ""
                    }`}
                    style={{
                      transform: plan.popular ? "translateY(-10px)" : "none",
                      cursor: "pointer",
                    }}
                  >
                    {plan.popular && (
                      <div className="badge bg-primary position-absolute top-0 start-50 translate-middle">
                        Most Popular
                      </div>
                    )}

                    <div className="card-body d-flex flex-column">
                      <h3 className="card-title h5 fw-bold mb-2">{plan.name}</h3>
                      <p className="text-muted small mb-4">{plan.duration}</p>

                      <div className="mb-4">
                        <div className="h2 fw-bold text-primary mb-0">{plan.price}</div>
                        <small className="text-muted">/person</small>
                      </div>

                      <ul className="list-unstyled mb-4 flex-grow-1">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="mb-3 d-flex align-items-start">
                            <i className="uil uil-check text-success me-2 mt-1" style={{ fontSize: "1.2rem" }} />
                            <span className="small">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <a
                        href="/contact-appointment"
                        className={`btn w-100 ${
                          plan.popular ? "btn-primary" : "btn-outline-primary"
                        }`}
                      >
                        {plan.cta}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="wrapper bg-light py-16">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <h2 className="text-center h3 fw-bold mb-12">Frequently Asked Questions</h2>

                <div className="accordion" id="pricingFaq">
                  {[
                    {
                      q: "Can I switch between plans?",
                      a: "Yes! You can upgrade or downgrade anytime. If you upgrade, we'll credit your remaining balance.",
                    },
                    {
                      q: "Are classes refundable?",
                      a: "We offer a 7-day money-back guarantee. After that, unused sessions can be transferred.",
                    },
                    {
                      q: "Can I share my subscription with someone else?",
                      a: "Subscriptions are personal. However, we offer family plans—contact us for details.",
                    },
                    {
                      q: "Do I get a discount for annual subscriptions?",
                      a: "Yes! Pay for 11 months and get 1 month free on the yearly plan.",
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="accordion-item border-0 border-bottom mb-3">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed bg-light fw-semibold"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#faq${idx}`}
                        >
                          {item.q}
                        </button>
                      </h2>
                      <div id={`faq${idx}`} className="accordion-collapse collapse" data-bs-parent="#pricingFaq">
                        <div className="accordion-body text-muted">{item.a}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="wrapper py-16" style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}>
          <div className="container text-center text-white">
            <h2 className="h3 fw-bold mb-4">Ready to Transform Your Life?</h2>
            <p className="lead mb-6">Join hundreds of students from across India on their wellness journey</p>
            <a href="/contact-appointment" className="btn btn-light btn-lg">
              Book Your First Session
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
