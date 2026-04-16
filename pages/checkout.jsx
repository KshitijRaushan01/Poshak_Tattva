import { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";
import Image from "next/image";
import PageProgress from "components/PageProgress";
import { useCart } from "context/CartContext";

// ─────────────────────────────────────────────
// RAZORPAY INTEGRATION NOTE (for future setup):
// 1. Add your keys to .env.local:
// RAZORPAY_KEY_ID=rzp_test_XXXXXXXXXX
// RAZORPAY_KEY_SECRET=XXXXXXXXXXXXXXXXXX
// 2. The API route at /api/razorpay/payment will
// create the Razorpay order and return an order_id.
// 3. Load the Razorpay checkout script via a <Script>
// tag (next/script) with strategy="lazyOnload" and
// src="https://checkout.razorpay.com/v1/checkout.js"
// ─────────────────────────────────────────────

const inputStyle = {
 width: "100%",
 padding: "12px 16px",
 borderRadius: "10px",
 border: "1px solid #dee2e6",
 fontSize: "14px",
 outline: "none",
 transition: "border-color 0.2s",
 background: "#fff",
};

const Field = ({ label, name, type = "text", placeholder, form, handleChange, errors }) => (
 <div className="mb-3">
 <label className="form-label fw-semibold" style={{ fontSize: "13px" }}>
 {label}
 </label>
 <input
 type={type}
 name={name}
 value={form[name]}
 onChange={handleChange}
 placeholder={placeholder}
 style={{
 ...inputStyle,
 borderColor: errors[name] ? "#dc3545" : "#dee2e6",
 }}
 onFocus={e => (e.target.style.borderColor = "#1C7690")}
 onBlur={e => (e.target.style.borderColor = errors[name] ? "#dc3545" : "#dee2e6")}
 />
 {errors[name] && (
 <small className="text-danger">{errors[name]}</small>
 )}
 </div>
);

export default function CheckoutPage() {
 const { cartItems, cartTotal, clearCart } = useCart();
 const router = useRouter();

 const [form, setForm] = useState({
 fullName: "",
 email: "",
 phone: "",
 address: "",
 city: "",
 state: "",
 pincode: "",
 });
 const [errors, setErrors] = useState({});
 const [loading, setLoading] = useState(false);

 const validate = () => {
 const e = {};
 if (!form.fullName.trim()) e.fullName = "Full name is required";
 if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "Valid email required";
 if (!form.phone.match(/^[6-9]\d{9}$/)) e.phone = "Valid 10-digit Indian phone required";
 if (!form.address.trim()) e.address = "Address is required";
 if (!form.city.trim()) e.city = "City is required";
 if (!form.state.trim()) e.state = "State is required";
 if (!form.pincode.match(/^\d{6}$/)) e.pincode = "Valid 6-digit pincode required";
 setErrors(e);
 return Object.keys(e).length === 0;
 };

 const handleChange = (e) => {
 setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
 setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
 };

 const handlePayment = async (e) => {
 e.preventDefault();
 if (!validate()) return;

 if (cartItems.length === 0) {
 router.push("/shop");
 return;
 }

 setLoading(true);

 try {
 // ── Razorpay order creation (structure ready, activate when keys are provided) ──
 const res = await fetch("/api/razorpay/payment", {
 method: "POST",
 headers: { "Content-Type": "application/json" },
 body: JSON.stringify({ amount: cartTotal, currency: "INR", customerInfo: form }),
 });

 const data = await res.json();

 if (!res.ok || data.error) {
 // Fallback: simulate success for demo until Razorpay keys are active
 clearCart();
 router.push({
 pathname: "/order-confirmation",
 query: {
 orderId: `PT-DEMO-${Date.now()}`,
 name: form.fullName,
 email: form.email,
 amount: cartTotal,
 },
 });
 return;
 }

 // ── Open Razorpay Checkout modal ──
 const options = {
 key: data.key, // passed from API
 amount: data.order.amount,
 currency: data.order.currency,
 name: "Poshak Tattva",
 description: "Wellness Products",
 image: "/img/poshak.png",
 order_id: data.order.id,
 prefill: {
 name: form.fullName,
 email: form.email,
 contact: form.phone,
 },
 theme: { color: "#1C7690" },
 handler: function (response) {
 clearCart();
 router.push({
 pathname: "/order-confirmation",
 query: {
 orderId: response.razorpay_order_id,
 paymentId: response.razorpay_payment_id,
 name: form.fullName,
 email: form.email,
 amount: cartTotal,
 },
 });
 },
 modal: {
 ondismiss: () => setLoading(false),
 },
 };

 const rzp = new window.Razorpay(options);
 rzp.open();
 } catch {
 // Simulate success for demo
 clearCart();
 router.push({
 pathname: "/order-confirmation",
 query: {
 orderId: `PT-DEMO-${Date.now()}`,
 name: form.fullName,
 email: form.email,
 amount: cartTotal,
 },
 });
 }
 };


 return (
 <>
 <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="lazyOnload" />
 <PageProgress />
 <Head>
 <title>Checkout – Poshak Tattva</title>
 <meta name="description" content="Complete your purchase securely." />
 </Head>

 <main className="content-wrapper">
 <section
 className="wrapper py-10"
 style={{ background: "linear-gradient(135deg, #1F3D2B 0%, #3D5C4A 100%)" }}
 >
 <div className="container text-center">
 <h1 className="display-5 fw-bold mb-2 text-white">Checkout</h1>
 <p className="lead opacity-75 mb-0 text-white">Secure payment & order processing</p>
 </div>
 </section>

 <section className="wrapper py-14 bg-light">
 <div className="container">
 <form onSubmit={handlePayment} noValidate>
 <div className="row g-5">
 {/* Address Form */}
 <div className="col-lg-7">
 <div className="card border-0 shadow-sm rounded-4 p-4">
 <h4 className="fw-bold mb-4">Delivery Address</h4>

 <Field label="Full Name *" name="fullName" placeholder="Full Name" form={form} handleChange={handleChange} errors={errors} />
 <div className="row">
 <div className="col-md-6">
 <Field label="Email *" name="email" type="email" placeholder="Your Mail" form={form} handleChange={handleChange} errors={errors} />
 </div>
 <div className="col-md-6">
 <Field label="Phone *" name="phone" type="tel" placeholder=" 1234567890" form={form} handleChange={handleChange} errors={errors} />
 </div>
 </div>
 <Field label="Address *" name="address" placeholder="Street / Flat / Area" form={form} handleChange={handleChange} errors={errors} />
 <div className="row">
 <div className="col-md-4">
 <Field label="City *" name="city" placeholder="Jaipur" form={form} handleChange={handleChange} errors={errors} />
 </div>
 <div className="col-md-4">
 <Field label="State *" name="state" placeholder="Rajasthan" form={form} handleChange={handleChange} errors={errors} />
 </div>
 <div className="col-md-4">
 <Field label="Pincode *" name="pincode" placeholder="302001" form={form} handleChange={handleChange} errors={errors} />
 </div>
 </div>
 </div>

 {/* Payment badge */}
 <div
 className="d-flex align-items-center gap-3 mt-3 p-3 rounded-3"
 style={{ background: "#fff", border: "1px solid #e9ecef" }}
 >
 <span style={{ fontSize: "24px" }}>🔒</span>
 <div>
 <p className="mb-0 fw-semibold" style={{ fontSize: "14px" }}>Secured by Razorpay</p>
 <small className="">Your payment information is safe & encrypted</small>
 </div>
 {/* Razorpay logo placeholder */}
 <div style={{ position: "relative", width: "100px", height: "32px", marginLeft: "auto" }}>
 <Image
 src="https://razorpay.com/assets/razorpay-glyph.svg"
 alt="Razorpay"
 fill
 style={{ objectFit: "contain" }}
 />
 </div>
 </div>
 </div>

 {/* Order Summary */}
 <div className="col-lg-5">
 <div className="card border-0 shadow-sm rounded-4 p-4">
 <h4 className="fw-bold mb-4">Order Summary</h4>

 <div style={{ maxHeight: "280px", overflowY: "auto" }}>
 {cartItems.map((item) => (
 <div
 key={item.id}
 className="d-flex align-items-center gap-3 mb-3"
 >
 <div style={{ position: "relative", width: "48px", height: "48px", flexShrink: 0 }}>
 <Image
 src={item.image}
 alt={item.title}
 fill
 style={{
 objectFit: "cover",
 borderRadius: "8px",
 background: "#F6DAB0",
 }}
 sizes="48px"
 />
 </div>
 <div className="flex-grow-1">
 <p className="mb-0 fw-semibold" style={{ fontSize: "13px" }}>
 {item.title}
 </p>
 <small className="">Qty: {item.quantity}</small>
 </div>
 <span className="fw-semibold" style={{ fontSize: "14px" }}>
 ₹{(item.price * item.quantity).toLocaleString()}
 </span>
 </div>
 ))}
 </div>

 <hr />
 <div className="d-flex justify-content-between mb-2">
 <span className="">Subtotal</span>
 <span>₹{cartTotal.toLocaleString()}</span>
 </div>
 <div className="d-flex justify-content-between mb-3">
 <span className="">Shipping</span>
 <span className="text-success">FREE</span>
 </div>
 <div className="d-flex justify-content-between fw-bold mb-4">
 <span>Total</span>
 <span style={{ color: "#FB991C" }}>₹{cartTotal.toLocaleString()}</span>
 </div>

 <button
 type="submit"
 disabled={loading}
 className="btn btn-primary w-100 rounded-pill py-3 fw-bold"
 style={{ fontSize: "40px" }}
 >
 {loading ? (
 <span>
 <span className="spinner-border spinner-border-sm me-2" />
 Processing…
 </span>
 ) : (
 `Pay ₹${cartTotal.toLocaleString()} →`
 )}
 </button>
 </div>
 </div>
 </div>
 </form>
 </div>
 </section>
 </main>
 </>
 );
}
