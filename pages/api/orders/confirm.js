import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "re_dummy_key");
const ADMIN_EMAIL = "poshaktattva@gmail.com";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { orderId, paymentId, customerInfo, amount, items } = req.body;

  if (!orderId || !customerInfo || !amount || !items) {
    return res.status(400).json({ error: "Missing required order details" });
  }

  // 1. Save to Supabase
  try {
    const { supabase } = await import("../../../src/lib/supabaseClient.js");
    const { error: dbError } = await supabase.from("orders").insert({
      order_id: orderId,
      payment_id: paymentId || null,
      customer_name: customerInfo.fullName,
      customer_email: customerInfo.email,
      customer_phone: customerInfo.phone,
      address: customerInfo.address,
      city: customerInfo.city,
      state: customerInfo.state,
      pincode: customerInfo.pincode,
      amount: amount,
      items: items,
      status: "paid",
    });

    if (dbError) {
      console.error("Supabase Order Insert Error:", dbError.message);
      // We continue anyway to try and send the email
    }
  } catch (err) {
    console.error("Database unavailable:", err.message);
  }

  // 2. Send Confirmation Email to Customer
  try {
    await resend.emails.send({
      from: "Poshak Tattva <onboarding@resend.dev>",
      to: customerInfo.email,
      subject: `Order Confirmed: ${orderId} - Poshak Tattva`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <h2 style="color: #1F3D2B;">Thank you for your order, ${customerInfo.fullName}!</h2>
          <p>We've received your order and are getting it ready for shipment.</p>
          <div style="background: #f8fafc; padding: 20px; border-radius: 10px; margin: 20px 0;">
            <p><strong>Order ID:</strong> ${orderId}</p>
            <p><strong>Total Amount:</strong> ₹${amount.toLocaleString()}</p>
          </div>
          <h3>Order Summary:</h3>
          <ul style="list-style: none; padding: 0;">
            ${items.map(item => `
              <li style="border-bottom: 1px solid #eee; padding: 10px 0; display: flex; justify-content: space-between;">
                <span>${item.title} (x${item.quantity})</span>
                <span style="font-weight: bold;">₹${(item.price * item.quantity).toLocaleString()}</span>
              </li>
            `).join('')}
          </ul>
          <p style="margin-top: 30px;"><strong>Shipping Address:</strong><br>
          ${customerInfo.address}, ${customerInfo.city}, ${customerInfo.state} - ${customerInfo.pincode}</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 30px 0;">
          <p style="font-size: 14px; color: #666;">If you have any questions, please contact us at poshaktattva@gmail.com</p>
        </div>
      `,
    });
  } catch (err) {
    console.error("Error sending customer email:", err.message);
  }

  // 3. Send Notification Email to Admin
  try {
    await resend.emails.send({
      from: "Poshak Tattva <onboarding@resend.dev>",
      to: ADMIN_EMAIL,
      subject: `New Order Received: ${orderId}`,
      html: `
        <h2>New Order from ${customerInfo.fullName}</h2>
        <p><strong>Order ID:</strong> ${orderId}</p>
        <p><strong>Customer:</strong> ${customerInfo.email} | ${customerInfo.phone}</p>
        <p><strong>Amount:</strong> ₹${amount.toLocaleString()}</p>
        <hr>
        <p>Check the admin dashboard for full details.</p>
      `,
    });
  } catch (err) {
    console.error("Error sending admin email:", err.message);
  }

  return res.status(200).json({ success: true });
}
