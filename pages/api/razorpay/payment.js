// ============================================================
// Razorpay Payment API Route
// ============================================================
// SETUP INSTRUCTIONS (activate when ready):
//
// 1. Create .env.local in project root:
//    RAZORPAY_KEY_ID=rzp_test_XXXXXXXXXX
//    RAZORPAY_KEY_SECRET=XXXXXXXXXXXXXXXXXX
//
// 2. Install Razorpay SDK (already done):
//    npm install razorpay
//
// 3. Remove the "MOCK_MODE" block below and uncomment the
//    real Razorpay initialization.
// ============================================================

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { amount, currency = "INR", customerInfo } = req.body;

  if (!amount || amount <= 0) {
    return res.status(400).json({ error: "Invalid amount" });
  }

  // ── MOCK MODE: returns a demo order until real keys are configured ──
  const keyId = process.env.RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;

  if (!keyId || !keySecret) {
    // Just return a mock order so the UI can demo the flow
    return res.status(200).json({
      key: "MOCK_KEY",
      order: {
        id: `order_DEMO_${Date.now()}`,
        amount: amount * 100,
        currency,
      },
      mock: true,
    });
  }

  // ── REAL Razorpay Integration (auto-activates when .env.local keys exist) ──
  try {
    const Razorpay = (await import("razorpay")).default;

    const razorpay = new Razorpay({
      key_id: keyId,
      key_secret: keySecret,
    });

    const order = await razorpay.orders.create({
      amount: Math.round(amount * 100), // paise
      currency,
      receipt: `receipt_${Date.now()}`,
      notes: {
        customerName: customerInfo?.fullName || "",
        customerEmail: customerInfo?.email || "",
      },
    });

    return res.status(200).json({ key: keyId, order });
  } catch (err) {
    console.error("Razorpay error:", err);
    return res.status(500).json({ error: "Failed to create order", details: err.message });
  }
}
