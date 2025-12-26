import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const { name, email, phone, date, time, service } = req.body || {};

  if (!name || !email || !phone || !date || !time || !service) {
    res.status(400).json({ error: "Missing required fields" });
    return;
  }

  try {

    const serviceNames = {
      yoga: "Yoga Session",
      diet: "Diet Consultation",
      sound: "Sound Healing",
      consultation: "General Consultation"
    };

    await resend.emails.send({
      from: "Poshak Tattva <onboarding@resend.dev>",
      to: "sakettjayashwal4871@gmail.com",
      subject: `New Appointment Request from ${name}`,
      html: `
        <h2>New Appointment Booking</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${serviceNames[service] || service}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <hr>
        <p>Please confirm this appointment with the client as soon as possible.</p>
      `,
    });

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Error sending appointment email:", err);
    res.status(500).json({ error: "Error booking appointment" });
  }
}
