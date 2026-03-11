import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import PageProgress from "components/PageProgress";

export default function OrderConfirmationPage() {
  const router = useRouter();
  const { orderId, paymentId, name, email, amount } = router.query;

  // Add subtle confetti-like animation via injected style
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes floatUp {
        0% { transform: translateY(0) rotate(0deg); opacity: 1; }
        100% { transform: translateY(-200px) rotate(720deg); opacity: 0; }
      }
      .confetti-piece {
        position: fixed;
        width: 10px;
        height: 10px;
        border-radius: 2px;
        animation: floatUp 2.5s ease-in forwards;
      }
    `;
    document.head.appendChild(style);

    // Spawn confetti pieces
    const colors = ["#667eea", "#764ba2", "#FB991C", "#1C7690", "#4CAF50"];
    const container = document.body;
    const pieces = [];
    for (let i = 0; i < 40; i++) {
      const el = document.createElement("div");
      el.className = "confetti-piece";
      el.style.left = `${Math.random() * 100}vw`;
      el.style.bottom = "0";
      el.style.background = colors[Math.floor(Math.random() * colors.length)];
      el.style.animationDelay = `${Math.random() * 1.5}s`;
      el.style.animationDuration = `${1.5 + Math.random() * 2}s`;
      container.appendChild(el);
      pieces.push(el);
    }

    const cleanup = setTimeout(() => {
      pieces.forEach((el) => el.remove());
      style.remove();
    }, 4000);

    return () => {
      clearTimeout(cleanup);
      pieces.forEach((el) => el.remove());
      style.remove();
    };
  }, []);

  return (
    <>
      <PageProgress />
      <Head>
        <title>Order Confirmed – Poshak Tattva</title>
        <meta name="description" content="Your order has been placed successfully." />
      </Head>

      <main className="content-wrapper">
        <section
          className="wrapper"
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
            paddingTop: "80px",
            paddingBottom: "80px",
          }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-8">
                <div
                  className="card border-0 shadow-lg text-center p-5"
                  style={{ borderRadius: "24px" }}
                >
                  {/* Success icon */}
                  <div
                    style={{
                      width: "90px",
                      height: "90px",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #4CAF50, #66BB6A)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 24px",
                      boxShadow: "0 8px 24px rgba(76,175,80,0.35)",
                    }}
                  >
                    <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M20 6L9 17L4 12"
                        stroke="white"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <h1 className="fw-bold mb-2" style={{ fontSize: "28px" }}>
                    Order Confirmed! 🎉
                  </h1>
                  <p className="text-muted mb-4" style={{ fontSize: "15px" }}>
                    Thank you{name ? `, ${name}` : ""}! Your wellness products are on their way.
                  </p>

                  {/* Order details */}
                  <div
                    className="p-4 mb-4 text-start"
                    style={{
                      background: "#f8fafc",
                      borderRadius: "14px",
                      border: "1px solid #e9ecef",
                    }}
                  >
                    <div className="d-flex justify-content-between mb-2">
                      <span className="text-muted" style={{ fontSize: "13px" }}>Order ID</span>
                      <span className="fw-semibold" style={{ fontSize: "13px", fontFamily: "monospace" }}>
                        {orderId || "PT-DEMO-XXXX"}
                      </span>
                    </div>
                    {paymentId && (
                      <div className="d-flex justify-content-between mb-2">
                        <span className="text-muted" style={{ fontSize: "13px" }}>Payment ID</span>
                        <span className="fw-semibold" style={{ fontSize: "13px", fontFamily: "monospace" }}>
                          {paymentId}
                        </span>
                      </div>
                    )}
                    {email && (
                      <div className="d-flex justify-content-between mb-2">
                        <span className="text-muted" style={{ fontSize: "13px" }}>Confirmation sent to</span>
                        <span className="fw-semibold" style={{ fontSize: "13px" }}>{email}</span>
                      </div>
                    )}
                    {amount && (
                      <div className="d-flex justify-content-between">
                        <span className="text-muted" style={{ fontSize: "13px" }}>Amount Paid</span>
                        <span className="fw-bold" style={{ fontSize: "15px", color: "#FB991C" }}>
                          ₹{Number(amount).toLocaleString()}
                        </span>
                      </div>
                    )}
                  </div>

                  <p className="text-muted mb-5" style={{ fontSize: "13px" }}>
                    We&apos;ll send updates to your email. Expected delivery in 5–7 working days.
                  </p>

                  <div className="d-flex flex-column gap-3">
                    <Link href="/shop" className="btn btn-primary rounded-pill py-3 fw-semibold">
                      Continue Shopping
                    </Link>
                    <Link href="/" className="btn btn-outline-secondary rounded-pill py-2">
                      Back to Home
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
