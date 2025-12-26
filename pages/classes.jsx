import { useState } from "react";
import Head from "next/head";
import PageProgress from "components/PageProgress";

export default function ClassesPage() {
  const [selectedCity, setSelectedCity] = useState("delhi");

  const classes = {
    delhi: [
      { time: "06:00 AM", service: "Yoga Session", instructor: "Dr. Rajeev Kumar", level: "Beginner", seats: 15 },
      { time: "07:30 AM", service: "Yoga Session", instructor: "Priya Sharma", level: "Intermediate", seats: 12 },
      { time: "09:00 AM", service: "Diet Consultation", instructor: "Dr. Anjali Patel", level: "All Levels", seats: 8 },
      { time: "06:00 PM", service: "Sound Healing", instructor: "Arjun Singh", level: "All Levels", seats: 20 },
      { time: "07:30 PM", service: "Yoga Session", instructor: "Rajeev Kumar", level: "Advanced", seats: 10 },
    ],
    mumbai: [
      { time: "06:30 AM", service: "Yoga Session", instructor: "Meera Kapoor", level: "Beginner", seats: 18 },
      { time: "08:00 AM", service: "Sound Healing", instructor: "Rohit Desai", level: "All Levels", seats: 25 },
      { time: "06:00 PM", service: "Diet Consultation", instructor: "Dr. Aisha Khan", level: "All Levels", seats: 6 },
      { time: "07:30 PM", service: "Yoga Session", instructor: "Meera Kapoor", level: "Intermediate", seats: 14 },
    ],
    bangalore: [
      { time: "06:00 AM", service: "Yoga Session", instructor: "Vikram Reddy", level: "All Levels", seats: 16 },
      { time: "09:00 AM", service: "Sound Healing", instructor: "Sneha Nayar", level: "All Levels", seats: 22 },
      { time: "05:30 PM", service: "Diet Consultation", instructor: "Dr. Rohan Iyer", level: "All Levels", seats: 10 },
      { time: "07:00 PM", service: "Yoga Session", instructor: "Vikram Reddy", level: "Advanced", seats: 12 },
    ],
    pune: [
      { time: "06:30 AM", service: "Yoga Session", instructor: "Isha Verma", level: "Beginner", seats: 14 },
      { time: "07:30 AM", service: "Sound Healing", instructor: "Arjun Deshmukh", level: "All Levels", seats: 20 },
      { time: "06:00 PM", service: "Yoga Session", instructor: "Isha Verma", level: "Intermediate", seats: 11 },
      { time: "07:30 PM", service: "Diet Consultation", instructor: "Dr. Priya Kulkarni", level: "All Levels", seats: 7 },
    ],
  };

  const cities = [
    { key: "delhi", name: "Delhi", emoji: "🏛️" },
    { key: "mumbai", name: "Mumbai", emoji: "🌊" },
    { key: "bangalore", name: "Bangalore", emoji: "🌳" },
    { key: "pune", name: "Pune", emoji: "🏞️" },
  ];

  const serviceColors = {
    "Yoga Session": "bg-info",
    "Diet Consultation": "bg-success",
    "Sound Healing": "bg-warning",
  };

  return (
    <>
      <PageProgress />
      <Head>
        <title>Online Classes - Poshak Tattva</title>
        <meta name="description" content="Join our online wellness classes for yoga, diet consultation, and sound healing." />
      </Head>

      <main className="content-wrapper">
        {/* Header */}
        <section className="wrapper bg-light py-16">
          <div className="container">
            <div className="text-center">
              <h1 className="display-4 fw-bold mb-4">Live Online Classes</h1>
              <p className="lead text-muted">Join sessions from your home, anytime, anywhere in India</p>
            </div>
          </div>
        </section>

        {/* City Selector */}
        <section className="wrapper py-12">
          <div className="container">
            <div className="text-center mb-8">
              <h2 className="h5 fw-bold text-muted mb-4">Select Your City</h2>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                {cities.map((city) => (
                  <button
                    key={city.key}
                    onClick={() => setSelectedCity(city.key)}
                    className={`btn ${
                      selectedCity === city.key ? "btn-primary" : "btn-outline-primary"
                    }`}
                  >
                    <span className="me-2">{city.emoji}</span>
                    {city.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Schedule */}
            <div className="row mt-8">
              <div className="col-lg-10 mx-auto">
                <div className="table-responsive">
                  <table className="table">
                    <thead className="table-light">
                      <tr>
                        <th className="fw-bold">Time</th>
                        <th className="fw-bold">Service</th>
                        <th className="fw-bold">Instructor</th>
                        <th className="fw-bold">Level</th>
                        <th className="fw-bold">Availability</th>
                        <th className="fw-bold">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {classes[selectedCity].map((cls, idx) => (
                        <tr key={idx} className="align-middle">
                          <td className="fw-semibold">{cls.time}</td>
                          <td>
                            <span className={`badge ${serviceColors[cls.service]} text-dark`}>
                              {cls.service}
                            </span>
                          </td>
                          <td>{cls.instructor}</td>
                          <td>
                            <small className="badge bg-light text-dark">{cls.level}</small>
                          </td>
                          <td>
                            <small className="text-muted">{cls.seats} seats</small>
                          </td>
                          <td>
                            <a href="/contact-appointment" className="btn btn-sm btn-primary">
                              Book
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="wrapper bg-light py-16">
          <div className="container">
            <h2 className="text-center h3 fw-bold mb-12">How It Works</h2>
            <div className="row g-4">
              {[
                { num: "1", title: "Book a Class", desc: "Select your preferred time and service from the schedule above" },
                { num: "2", title: "Get Zoom Link", desc: "We'll email you the meeting link 1 hour before the session" },
                { num: "3", title: "Join & Participate", desc: "Log in 5 minutes early and prepare your space" },
                { num: "4", title: "Enjoy & Grow", desc: "Participate fully and experience the transformation" },
              ].map((step, idx) => (
                <div key={idx} className="col-md-6 col-lg-3">
                  <div className="text-center">
                    <div
                      className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto mb-4"
                      style={{ width: "60px", height: "60px", fontSize: "1.5rem", fontWeight: "bold" }}
                    >
                      {step.num}
                    </div>
                    <h5 className="fw-bold">{step.title}</h5>
                    <p className="text-muted small">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="wrapper py-16">
          <div className="container">
            <div className="row g-4">
              <div className="col-lg-6">
                <h3 className="h5 fw-bold mb-4">What You Need</h3>
                <ul className="list-unstyled">
                  {[
                    "Laptop/Desktop or smartphone with camera & mic",
                    "Stable internet connection",
                    "Yoga mat (for yoga sessions)",
                    "Quiet, comfortable space",
                    "Water bottle nearby",
                  ].map((item, idx) => (
                    <li key={idx} className="mb-3 d-flex align-items-start">
                      <i className="uil uil-check text-success me-3 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-lg-6">
                <h3 className="h5 fw-bold mb-4">Benefits</h3>
                <ul className="list-unstyled">
                  {[
                    "Learn from expert instructors",
                    "Flexibility to join from anywhere",
                    "Personalized attention",
                    "Lifetime access to recordings",
                    "Community support & motivation",
                  ].map((item, idx) => (
                    <li key={idx} className="mb-3 d-flex align-items-start">
                      <i className="uil uil-star text-warning me-3 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="wrapper py-16" style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}>
          <div className="container text-center text-white">
            <h2 className="h3 fw-bold mb-4">Ready to Start Your Wellness Journey?</h2>
            <p className="lead mb-6">Join hundreds of students transforming their lives</p>
            <a href="/contact-appointment" className="btn btn-light btn-lg">
              Book Your First Class Now
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
