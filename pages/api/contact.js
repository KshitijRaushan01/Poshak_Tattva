import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "re_dummy_key");

const SERVICE_NAMES = {
  yoga: "Yoga Session",
  diet: "Diet Consultation",
  sound: "Sound Healing",
  consultation: "General Consultation",
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, phone, date, time, service } = req.body || {};

  if (!name || !email || !phone || !date || !time || !service) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  // ── 1. Save to Supabase (non-blocking — failure does NOT block email) ───────
  try {
    // Lazy-import so a bad key never crashes the module at load time
    const { supabase } = await import("../../src/lib/supabaseClient.js");
    const { error: dbError } = await supabase.from("appointments").insert({
      name,
      email,
      phone,
      service,
      preferred_date: date,
      preferred_time: time,
      status: "pending",
    });
    if (dbError) console.warn("Supabase insert warning:", dbError.message);
  } catch (dbErr) {
    // Log but do NOT fail the request — email still gets sent
    console.warn("Supabase unavailable, skipping DB insert:", dbErr.message);
  }

  // ── 2. Send confirmation email via Resend ──────────────────────────────────
  try {
    await resend.emails.send({
      from: "Poshak Tattva <onboarding@resend.dev>",
      to: "poshaktattva@gmail.com",
      subject: `New Appointment Request from ${name}`,
      html: `
        <h2>New Appointment Booking</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${SERVICE_NAMES[service] || service}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <hr>
        <p>Please confirm this appointment with the client as soon as possible.</p>
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (emailErr) {
    console.error("Error sending appointment email:", emailErr);
    return res.status(500).json({ error: "Failed to send confirmation email." });
  }
}
