import { useState } from "react";
import Head from "next/head";
import PageProgress from "components/PageProgress";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", date: "", time: "", service: "" });
  const [status, setStatus] = useState({ loading: false, ok: null, error: null });

  function update(field) {
    return (e) => setForm((s) => ({ ...s, [field]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ loading: true, ok: null, error: null });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({ loading: false, ok: "Appointment booked successfully! We'll confirm via email or phone.", error: null });
        setForm({ name: "", email: "", phone: "", date: "", time: "", service: "" });
      } else {
        setStatus({ loading: false, ok: null, error: data.error || "Failed to book appointment." });
      }
    } catch (err) {
      setStatus({ loading: false, ok: null, error: err.message || "Failed to book appointment." });
    }
  }

  return (
    <>
      <PageProgress />
      <Head>
        <title>Contact Us - Poshak Tattva</title>
        <meta
          name="description"
          content="Contact Poshak Tattva for wellness programs, queries and support."
        />
      </Head>

      <main className="content-wrapper">
        <section className="wrapper bg-light py-12">
          <div className="container">
            <div className="row">
              {/* Contact Info */}
              <div className="col-lg-4 mb-8 mb-lg-0">
                <h1 className="display-5 mb-8">Contact Us</h1>
                <div className="card p-6 shadow-lg rounded-lg">
                  <h5 className="mb-4">Get In Touch</h5>
                  
                  <div className="mb-6">
                    <h6 className="mb-2">Email</h6>
                    <a href="mailto:poshaktattva@gmail.com" className="text-decoration-none">
                      poshaktattva@gmail.com
                    </a>
                  </div>

                  <div className="mb-6">
                    <h6 className="mb-2">Phone</h6>
                    <a href="tel:+919351500400" className="text-decoration-none">
                      +91 9351500400
                    </a>
                  </div>

                  <div>
                    <h6 className="mb-1">Address</h6>
                    <p className="small" style={{fontSize: "15px"}}>
                      177, Vinoba Puri, Lajpat Nagar 2, New Delhi, Delhi 110024
                    </p>
                  </div>
                </div>
              </div>

              {/* Book Appointment Form */}
              <div className="col-lg-8">
                <div className="card p-6 shadow-lg rounded-lg">
                  <h3 className="h4 mb-2">Book an Appointment</h3>
                  <p className="text-muted mb-6">Schedule your wellness session with us. We'll confirm your booking via email or phone.</p>

                  <form onSubmit={handleSubmit}>
                    <div className="grid mb-4" style={{ gap: "1rem", gridTemplateColumns: "1fr 1fr" }}>
                      <div>
                        <label className="form-label">Full Name</label>
                        <input
                          type="text"
                          value={form.name}
                          onChange={update("name")}
                          required
                          className="form-control"
                          placeholder="Your name"
                        />
                      </div>

                      <div>
                        <label className="form-label">Email</label>
                        <input
                          type="email"
                          value={form.email}
                          onChange={update("email")}
                          required
                          className="form-control"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid mb-4" style={{ gap: "1rem", gridTemplateColumns: "1fr 1fr" }}>
                      <div>
                        <label className="form-label">Phone</label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={update("phone")}
                          required
                          className="form-control"
                          placeholder="+91 9XXX XXX XXX"
                        />
                      </div>

                      <div>
                        <label className="form-label">Service</label>
                        <select
                          value={form.service}
                          onChange={update("service")}
                          required
                          className="form-control"
                        >
                          <option value="">Select a service</option>
                          <option value="yoga">Yoga Session</option>
                          <option value="diet">Diet Consultation</option>
                          <option value="sound">Sound Healing</option>
                          <option value="consultation">General Consultation</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid mb-4" style={{ gap: "1rem", gridTemplateColumns: "1fr 1fr" }}>
                      <div>
                        <label className="form-label">Preferred Date</label>
                        <input
                          type="date"
                          value={form.date}
                          onChange={update("date")}
                          required
                          className="form-control"
                        />
                      </div>

                      <div>
                        <label className="form-label">Preferred Time</label>
                        <input
                          type="time"
                          value={form.time}
                          onChange={update("time")}
                          required
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="d-flex align-items-center" style={{ gap: "0.75rem" }}>
                      <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={status.loading}
                        style={{ minWidth: 160 }}
                      >
                        {status.loading ? "Booking..." : "Book Appointment"}
                      </button>

                      {status.ok && <div className="text-success small">{status.ok}</div>}
                      {status.error && <div className="text-danger small">{status.error}</div>}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
