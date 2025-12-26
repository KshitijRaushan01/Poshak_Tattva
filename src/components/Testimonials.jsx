export default function Testimonials() {
  const testimonials = [
    {
      name: "Priya Sharma",
      city: "Mumbai",
      service: "Yoga Sessions",
      image: "👩‍🦰",
      text: "Poshak Tattva transformed my life. After 3 months of consistent practice, I feel more energized, flexible, and mentally calm. The instructors are incredibly knowledgeable!",
      rating: 5,
    },
    {
      name: "Rajesh Kumar",
      city: "Bangalore",
      service: "Diet Consultation",
      image: "👨‍💼",
      text: "The personalized diet plan helped me lose 12kg naturally without feeling deprived. I'm sleeping better, have more energy, and my digestion improved significantly.",
      rating: 5,
    },
    {
      name: "Anjali Patel",
      city: "Delhi",
      service: "Sound Healing",
      image: "👩‍🦱",
      text: "I was skeptical at first, but Sound Healing sessions have reduced my anxiety dramatically. I feel more grounded and peaceful after each session.",
      rating: 5,
    },
    {
      name: "Arjun Singh",
      city: "Pune",
      service: "Complete Program",
      image: "👨‍🏫",
      text: "Combining yoga, diet, and sound healing gave me a complete wellness transformation. It's not just physical—it's mental and spiritual growth.",
      rating: 5,
    },
  ];

  return (
    <section className="wrapper py-16">
      <div className="container">
        <div className="text-center mb-12">
          <p className="fs-80 fw-bolder sub-h2 position-relative">
            Success Stories
          </p>
          <h2 className="display-5 fw-bold mb-4">What Our Students Say</h2>
          <p className="lead text-muted">Real transformations from real students across India</p>
        </div>

        <div className="row g-4">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="col-lg-6">
              <div className="card h-100 shadow-sm border-0 p-6 transition" style={{ cursor: "pointer" }}>
                <div className="d-flex align-items-start mb-4">
                  <div
                    className="rounded-circle bg-light me-3 d-flex align-items-center justify-content-center"
                    style={{ width: "60px", height: "60px", fontSize: "2rem" }}
                  >
                    {testimonial.image}
                  </div>
                  <div>
                    <h5 className="mb-1 fw-bold">{testimonial.name}</h5>
                    <p className="text-muted small mb-0">{testimonial.city}</p>
                    <p className="text-primary small">{testimonial.service}</p>
                  </div>
                </div>

                <div className="mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="uil uil-star-filled text-warning" />
                  ))}
                </div>

                <p className="text-muted">{testimonial.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="row text-center mt-12 pt-8 border-top">
          <div className="col-md-4 mb-4 mb-md-0">
            <div className="h2 fw-bold text-primary">500+</div>
            <p className="text-muted">Happy Students</p>
          </div>
          <div className="col-md-4 mb-4 mb-md-0">
            <div className="h2 fw-bold text-primary">50+</div>
            <p className="text-muted">Cities Across India</p>
          </div>
          <div className="col-md-4">
            <div className="h2 fw-bold text-primary">98%</div>
            <p className="text-muted">Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
}
