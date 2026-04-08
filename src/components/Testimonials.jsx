import TestimonialCard from "components/ui/testimonial";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Yoga Sessions",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=200&h=200&auto=format&fit=crop",
    quote:
      "Poshak Tattva transformed my life. After 3 months of consistent practice, I feel more energised, flexible, and mentally calm. The instructors are incredibly knowledgeable!",
    rating: 5,
  },
  {
    name: "Rajesh Kumar",
    role: "Diet Consultation",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&h=200&auto=format&fit=crop",
    quote:
      "The personalised diet plan helped me lose 12 kg naturally without ever feeling deprived. My sleep improved and digestion issues I'd had for years finally resolved.",
    rating: 5,
  },
  {
    name: "Anjali Patel",
    role: "Sound Healing",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
    quote:
      "I was sceptical at first, but Sound Healing sessions reduced my anxiety dramatically. I feel more grounded and peaceful after every session — truly life-changing.",
    rating: 5,
  },
];

const stats = [
  { icon: "🧘‍♀️", number: "5000+", label: "Students Trained" },
  { icon: "⭐", number: "4.9/5", label: "Average Rating" },
  { icon: "🏆", number: "15+", label: "Years Experience" },
  { icon: "🌿", number: "50+", label: "Wellness Programs" },
];

export default function Testimonials() {
  return (
    <>
      {/* ── Testimonials ──────────────────────────────────────────────── */}
      <section className="wrapper py-16">
        <div className="container">
          {/* Heading */}
          <div className="text-center mb-12">
            <p className="fs-80 fw-bolder sub-h2 position-relative">Success Stories</p>
            <h2 className="display-5 fw-bold mb-4">What Our Students Say</h2>
            <p className="lead text-muted">Real transformations from real students across India</p>
          </div>

          {/* Cards row — extra top-padding so the floating avatar has room */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "1.5rem",
              paddingTop: "3.5rem",
            }}
          >
            {testimonials.map((t, idx) => (
              <TestimonialCard
                key={idx}
                name={t.name}
                role={t.role}
                image={t.image}
                quote={t.quote}
                rating={t.rating}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────────────────────────── */}
      <section
        className="wrapper py-16"
        style={{ background: "linear-gradient(135deg, #1F3D2B 0%, #3D5C4A 100%)" }}
      >
        <div className="container">
          <div className="row g-4 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="col-md-6 col-lg-3">
                <div className="text-white">
                  <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>{stat.icon}</div>
                  <h3 className="h2 fw-bold mb-2 text-white">{stat.number}</h3>
                  <p className="mb-0 text-white text-opacity-75">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
