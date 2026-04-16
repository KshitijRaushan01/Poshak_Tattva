import { useState } from "react";

export default function ContactForm() {
 const [form, setForm] = useState({
 name: "",
 email: "",
 subject: "",
 message: "",
 company: "",
 });
 const [status, setStatus] = useState({
 loading: false,
 ok: null,
 error: null,
 });

 function update(field) {
 return (e) => setForm((s) => ({ ...s, [field]: e.target.value }));
 }

 async function handleSubmit(e) {
 e.preventDefault();
 // Honeypot check
 if (form.company) {
 // silently ignore bot submissions
 return;
 }

 setStatus({ loading: true, ok: null, error: null });

 try {
 const res = await fetch("/api/contact", {
 method: "POST",
 headers: { "Content-Type": "application/json" },
 body: JSON.stringify({
 name: form.name,
 email: form.email,
 subject: form.subject,
 message: form.message,
 }),
 });

 const data = await res.json();

 if (res.ok) {
 setStatus({
 loading: false,
 ok: "Message sent — we'll reply soon!",
 error: null,
 });
 setForm({ name: "", email: "", subject: "", message: "", company: "" });
 } else {
 setStatus({
 loading: false,
 ok: null,
 error: data.error || "Failed to send message.",
 });
 }
 } catch (err) {
 setStatus({
 loading: false,
 ok: null,
 error: err.message || "Failed to send message.",
 });
 }
 }

 return (
 <div className="bg-white shadow-lg rounded-lg p-8">
 <h3 className="h4 mb-3">Send us a message</h3>
 <p className=" mb-6">
 We usually reply within 24–48 hours. Please provide as much detail as
 you can.
 </p>

 <form onSubmit={handleSubmit} className="space-y-4">
 {/* Honeypot field - keep hidden from users */}
 <div style={{ display: "none" }} aria-hidden>
 <label>Company</label>
 <input value={form.company} onChange={update("company")} />
 </div>

 <div className="row g-3">
 <div className="col-md-6">
 <label className="form-label">Name</label>
 <input
 type="text"
 value={form.name}
 onChange={update("name")}
 required
 className="form-control"
 placeholder="Your full name"
 />
 </div>

 <div className="col-md-6">
 <label className="form-label">Email</label>
 <input
 type="email"
 value={form.email}
 onChange={update("email")}
 required
 className="form-control"
 placeholder="you@domain.com"
 />
 </div>
 </div>

 <div>
 <label className="form-label">Subject</label>
 <input
 type="text"
 value={form.subject}
 onChange={update("subject")}
 className="form-control"
 placeholder="Reason for contact (optional)"
 />
 </div>

 <div>
 <label className="form-label">Message</label>
 <textarea
 value={form.message}
 onChange={update("message")}
 required
 rows={6}
 className="form-control"
 placeholder="Write your message..."
 />
 </div>

 <div className="d-flex align-items-center" style={{ gap: "0.75rem" }}>
 <button
 type="submit"
 className="btn btn-primary"
 disabled={status.loading}
 style={{ minWidth: 140 }}
 >
 {status.loading ? "Sending..." : "Send Message"}
 </button>

 {status.ok && <div className="text-success">{status.ok}</div>}
 {status.error && <div className="text-danger">{status.error}</div>}
 </div>
 </form>
 </div>
 );
}
