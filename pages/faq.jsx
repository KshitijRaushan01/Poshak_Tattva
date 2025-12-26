import Head from "next/head";
import PageProgress from "components/PageProgress";

export default function FAQPage() {
  const faqCategories = [
    {
      category: "About Classes",
      items: [
        {
          q: "What should I do before my first session?",
          a: "Eat a light meal 1-2 hours before class. Wear comfortable clothing. Have a yoga mat ready. Most importantly, come with an open mind and willingness to learn.",
        },
        {
          q: "Do I need prior experience?",
          a: "No! Our classes cater to all levels—beginners to advanced. We'll provide modifications for each pose.",
        },
        {
          q: "What time zone are classes in?",
          a: "All classes are scheduled in Indian Standard Time (IST). You can attend from any city in India or abroad.",
        },
        {
          q: "Can I attend classes offline?",
          a: "Yes! We have offline sessions in Delhi. Contact us for details about other cities.",
        },
      ],
    },
    {
      category: "Booking & Scheduling",
      items: [
        {
          q: "How do I book a class?",
          a: "Go to our Contact/Appointment page, select your preferred service, date, and time. You'll receive a confirmation email with Zoom link.",
        },
        {
          q: "Can I reschedule my class?",
          a: "Yes, you can reschedule up to 24 hours before the class. Just email us with your new preferred time.",
        },
        {
          q: "What if I miss my class?",
          a: "One free reschedule per month. After that, the session will be considered used. Monthly subscriptions get unlimited rescheduling.",
        },
        {
          q: "Do you offer group discounts?",
          a: "Yes! Groups of 5+ people get 15% discount. Contact us at poshaktattva@gmail.com for bulk bookings.",
        },
      ],
    },
    {
      category: "Services",
      items: [
        {
          q: "What's the difference between Yoga, Diet, and Sound Healing?",
          a: "Yoga focuses on physical postures and breathing. Diet Consultation provides personalized sattvic meal plans. Sound Healing uses vibrational frequencies to balance energy.",
        },
        {
          q: "Can I combine multiple services?",
          a: "Absolutely! Most students benefit from combining all three. We can create a customized wellness plan for you.",
        },
        {
          q: "How often should I do Sound Healing?",
          a: "For best results, 1-2 sessions per week. Some benefits are felt immediately, while deeper transformation takes 4-6 weeks.",
        },
        {
          q: "Is the diet plan vegetarian?",
          a: "Our approach is sattvic, which is traditionally vegetarian. We can modify for individual needs, but we emphasize natural, pure foods.",
        },
      ],
    },
    {
      category: "Technical",
      items: [
        {
          q: "What platform do you use for online classes?",
          a: "We use Zoom. You'll receive the meeting link via email 1 hour before your session.",
        },
        {
          q: "What if I have internet issues?",
          a: "We'll reschedule the session at no extra cost. Contact us immediately if this happens.",
        },
        {
          q: "Can I record the session?",
          a: "Personal recording for your own practice is allowed. Sharing publicly is not permitted.",
        },
        {
          q: "Do you have a mobile app?",
          a: "Not yet, but our website is fully mobile-friendly. You can book from your phone easily.",
        },
      ],
    },
    {
      category: "Payments & Refunds",
      items: [
        {
          q: "What payment methods do you accept?",
          a: "We accept all major payment methods through our booking system. You'll see options at checkout.",
        },
        {
          q: "Is there a refund policy?",
          a: "We offer a 7-day money-back guarantee on all packages. After that, unused sessions can be transferred.",
        },
        {
          q: "Do you issue invoices?",
          a: "Yes! Invoices are sent automatically via email after payment.",
        },
        {
          q: "Can I get a receipt for my payments?",
          a: "Yes, both email receipts and printed invoices are available upon request.",
        },
      ],
    },
  ];

  return (
    <>
      <PageProgress />
      <Head>
        <title>FAQ - Poshak Tattva</title>
        <meta name="description" content="Frequently asked questions about Poshak Tattva wellness programs." />
      </Head>

      <main className="content-wrapper">
        {/* Header */}
        <section className="wrapper bg-light py-16">
          <div className="container">
            <div className="text-center">
              <h1 className="display-4 fw-bold mb-4">Frequently Asked Questions</h1>
              <p className="lead text-muted">Find answers to common questions about our programs</p>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="wrapper py-16">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                {faqCategories.map((category, catIdx) => (
                  <div key={catIdx} className="mb-12">
                    <h2 className="h4 fw-bold mb-6 pb-3 border-bottom">{category.category}</h2>

                    <div className="accordion" id={`faq${catIdx}`}>
                      {category.items.map((item, itemIdx) => (
                        <div key={itemIdx} className="accordion-item border-0 border-bottom mb-3">
                          <h2 className="accordion-header">
                            <button
                              className="accordion-button collapsed bg-transparent fw-semibold text-dark"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target={`#faq${catIdx}item${itemIdx}`}
                            >
                              {item.q}
                            </button>
                          </h2>
                          <div
                            id={`faq${catIdx}item${itemIdx}`}
                            className="accordion-collapse collapse"
                            data-bs-parent={`#faq${catIdx}`}
                          >
                            <div className="accordion-body text-muted pt-2">{item.a}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="wrapper bg-light py-16">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="h4 fw-bold mb-4">Didn't find your answer?</h2>
                <p className="text-muted mb-6">Our team is here to help. Reach out to us anytime.</p>
                <div className="d-flex gap-3 justify-content-center flex-wrap">
                  <a href="/contact-appointment" className="btn btn-primary">
                    Book a Consultation
                  </a>
                  <a href="mailto:poshaktattva@gmail.com" className="btn btn-outline-primary">
                    Email Us
                  </a>
                  <a href="tel:+919351500400" className="btn btn-outline-primary">
                    Call Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
