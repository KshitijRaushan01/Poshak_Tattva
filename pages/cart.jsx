import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import PageProgress from "components/PageProgress";
import { useCart } from "context/CartContext";
import Image from "next/image";

export const metadata = {
  title: "Cart - Poshak Tattva",
  description: "Review your cart and proceed to checkout for our premium wellness products including singing bowls, crystal bowls, and sound healing instruments."
}

export default function CartPage() {
 const { cartItems, removeFromCart, updateQuantity, cartTotal, cartCount } = useCart();
 const router = useRouter();

 if (cartItems.length === 0) {
 return (
 <>
 <PageProgress />
 <Head>
 <title>Cart – Poshak Tattva</title>
 </Head>
 <main className="content-wrapper">
 <section className="wrapper py-20 bg-light">
 <div className="container text-center">
 <div style={{ fontSize: "64px", marginBottom: "16px" }}>🛒</div>
 <h2 className="fw-bold mb-3">Your cart is empty</h2>
 <p className=" mb-6">
 Explore our wellness products and add them to your cart.
 </p>
 <Link href="/shop" className="btn btn-primary btn-lg rounded-pill px-5">
 Browse Shop
 </Link>
 </div>
 </section>
 </main>
 </>
 );
 }

 return (
 <>
 <PageProgress />
 <Head>
 <title>Cart ({cartCount}) – Poshak Tattva</title>
 <meta name="description" content="Review your selected wellness products before checkout." />
 </Head>

 <main className="content-wrapper">
 <section
 className="wrapper py-10"
 style={{ background: "linear-gradient(135deg, #1F3D2B 0%, #3D5C4A 100%)" }}
 >
 <div className="container text-center">
 <h1 className="display-5 fw-bold mb-2 text-white">Your Cart</h1>
 <p className="lead opacity-75 mb-0 text-white">{cartCount} item{cartCount !== 1 ? "s" : ""} in your bag</p>
 </div>
 </section>

 <section className="wrapper py-14 bg-light">
 <div className="container">
 <div className="row g-5">
 {/* Items list */}
 <div className="col-lg-8">
 <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
 <div className="card-body p-0">
 {cartItems.map((item, idx) => (
 <div
 key={item.id}
 className="d-flex align-items-center gap-3 p-4"
 style={{
 borderBottom: idx < cartItems.length - 1 ? "1px solid #f0f0f0" : "none",
 }}
 >
 <div style={{ position: "relative", width: "80px", height: "80px", flexShrink: 0 }}>
 <Image
 src={item.image}
 alt={item.title}
 fill
 style={{
 objectFit: "cover",
 borderRadius: "12px",
 background: "#F6DAB0",
 }}
 sizes="80px"
 />
 </div>
 <div className="flex-grow-1">
 <h5 className="fw-semibold mb-1" style={{ fontSize: "15px" }}>
 {item.title}
 </h5>
 <p className="mb-0 small">Unit price: ₹{item.price.toLocaleString()}</p>
 </div>

 {/* Quantity controls */}
 <div className="d-flex align-items-center" style={{ gap: "8px" }}>
 <button
 className="btn btn-sm"
 style={{
 width: "32px",
 height: "32px",
 borderRadius: "8px",
 border: "1px solid #dee2e6",
 background: "#f8f9fa",
 fontWeight: "bold",
 padding: 0,
 }}
 onClick={() => updateQuantity(item.id, item.quantity - 1)}
 >−</button>
 <span className="fw-semibold" style={{ minWidth: "24px", textAlign: "center" }}>
 {item.quantity}
 </span>
 <button
 className="btn btn-sm"
 style={{
 width: "32px",
 height: "32px",
 borderRadius: "8px",
 border: "1px solid #dee2e6",
 background: "#f8f9fa",
 fontWeight: "bold",
 padding: 0,
 }}
 onClick={() => updateQuantity(item.id, item.quantity + 1)}
 >+</button>
 </div>

 <div style={{ minWidth: "90px", textAlign: "right" }}>
 <p className="fw-bold mb-1" style={{ color: "#FB991C", fontSize: "16px" }}>
 ₹{(item.price * item.quantity).toLocaleString()}
 </p>
 <button
 className="btn btn-sm text-danger p-0"
 style={{ fontSize: "12px", textDecoration: "underline" }}
 onClick={() => removeFromCart(item.id)}
 >
 Remove
 </button>
 </div>
 </div>
 ))}
 </div>
 </div>

 <Link href="/shop" className="text-primary mt-3 d-inline-block" style={{ fontSize: "14px" }}>
 ← Continue Shopping
 </Link>
 </div>

 {/* Order Summary */}
 <div className="col-lg-4">
 <div className="card border-0 shadow-sm rounded-4 p-4">
 <h4 className="fw-bold mb-4">Order Summary</h4>

 <div className="d-flex justify-content-between mb-3">
 <span className="">Subtotal ({cartCount} items)</span>
 <span className="fw-semibold">₹{cartTotal.toLocaleString()}</span>
 </div>
 <div className="d-flex justify-content-between mb-3">
 <span className="">Shipping</span>
 <span className="text-success fw-semibold">FREE</span>
 </div>
 <hr />
 <div className="d-flex justify-content-between mb-4">
 <span className="fw-bold">Total</span>
 <span className="fw-bold" style={{ color: "#FB991C" }}>
 ₹{cartTotal.toLocaleString()}
 </span>
 </div>

 <button
 className="btn btn-primary w-100 rounded-pill py-3 fw-semibold"
 onClick={() => router.push("/checkout")}
 style={{ fontSize: "15px" }}
 >
 Proceed to Checkout →
 </button>
 </div>
 </div>
 </div>
 </div>
 </section>
 </main>
 </>
 );
}
