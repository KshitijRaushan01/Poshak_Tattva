import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

export default function AdminLogin() {
  const router = useRouter();
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      router.replace("/admin");
    } else {
      const data = await res.json();
      setError(data.error || "Invalid credentials");
      setLoading(false);
    }
  }

  return (
    <>
      <Head>
        <title>Admin Login – Poshak Tattva</title>
      </Head>
      <style>{`
        .admin-login-root {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #0f2018 0%, #1a3a28 50%, #0f2018 100%);
          font-family: 'Inter', sans-serif;
        }
        .login-card {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 16px;
          padding: 2.5rem;
          width: 100%;
          max-width: 420px;
          backdrop-filter: blur(12px);
          box-shadow: 0 25px 60px rgba(0,0,0,0.5);
        }
        .login-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 2rem;
          justify-content: center;
        }
        .login-logo-icon {
          width: 42px;
          height: 42px;
          background: linear-gradient(135deg, #4CAF50, #2e7d32);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
        }
        .login-logo-text {
          color: #fff;
          font-weight: 700;
          font-size: 1.1rem;
          line-height: 1.2;
        }
        .login-logo-sub {
          color: rgba(255,255,255,0.5);
          font-size: 0.75rem;
          font-weight: 400;
        }
        .login-label {
          color: rgba(255,255,255,0.7);
          font-size: 0.8rem;
          font-weight: 500;
          margin-bottom: 0.4rem;
          display: block;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }
        .login-input {
          width: 100%;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 8px;
          padding: 0.7rem 1rem;
          color: #fff;
          font-size: 0.95rem;
          margin-bottom: 1.2rem;
          transition: border-color 0.2s;
          outline: none;
        }
        .login-input:focus {
          border-color: #4CAF50;
        }
        .login-input::placeholder {
          color: rgba(255,255,255,0.3);
        }
        .login-btn {
          width: 100%;
          padding: 0.8rem;
          background: linear-gradient(135deg, #4CAF50, #2e7d32);
          border: none;
          border-radius: 8px;
          color: #fff;
          font-weight: 700;
          font-size: 1rem;
          cursor: pointer;
          transition: opacity 0.2s, transform 0.15s;
          letter-spacing: 0.03em;
        }
        .login-btn:hover { opacity: 0.9; transform: translateY(-1px); }
        .login-btn:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }
        .login-error {
          color: #ff6b6b;
          font-size: 0.85rem;
          margin-bottom: 1rem;
          text-align: center;
          background: rgba(255,107,107,0.1);
          border-radius: 8px;
          padding: 0.5rem 1rem;
        }
      `}</style>
      <div className="admin-login-root">
        <div className="login-card">
          <div className="login-logo">
            <div className="login-logo-icon">🌿</div>
            <div className="login-logo-text">
              Poshak Tattva
              <div className="login-logo-sub">Admin Panel</div>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <label className="login-label">Username</label>
            <input
              className="login-input"
              type="text"
              placeholder="Enter username"
              value={form.username}
              onChange={(e) => setForm((s) => ({ ...s, username: e.target.value }))}
              required
              autoComplete="username"
            />

            <label className="login-label">Password</label>
            <input
              className="login-input"
              type="password"
              placeholder="Enter password"
              value={form.password}
              onChange={(e) => setForm((s) => ({ ...s, password: e.target.value }))}
              required
              autoComplete="current-password"
            />

            {error && <div className="login-error">{error}</div>}

            <button className="login-btn" type="submit" disabled={loading}>
              {loading ? "Signing in…" : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
