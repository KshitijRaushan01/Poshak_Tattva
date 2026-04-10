import Link from "next/link";
import { useRouter } from "next/router";

const navItems = [
  { href: "/admin",               label: "Dashboard",    icon: "📊" },
  { href: "/admin/appointments",  label: "Appointments", icon: "📅" },
  { href: "/admin/products",      label: "Products",     icon: "🛍️" },
  { href: "/admin/testimonials",  label: "Testimonials", icon: "⭐" },
  { href: "/admin/gallery",       label: "Gallery",      icon: "🖼️" },
];

export default function AdminLayout({ children }) {
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  }

  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .adm-root {
          display: flex;
          min-height: 100vh;
          font-family: 'Inter', -apple-system, sans-serif;
          background: #0f1a13;
          color: #e8f0e9;
        }
        /* ── Sidebar ── */
        .adm-sidebar {
          width: 240px;
          min-height: 100vh;
          background: linear-gradient(180deg, #0f1a13 0%, #142b1d 100%);
          border-right: 1px solid rgba(255,255,255,0.06);
          display: flex;
          flex-direction: column;
          padding: 0;
          flex-shrink: 0;
          position: sticky;
          top: 0;
          height: 100vh;
          overflow-y: auto;
        }
        .adm-logo {
          padding: 1.5rem 1.25rem;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .adm-logo-icon {
          width: 36px;
          height: 36px;
          background: linear-gradient(135deg, #4CAF50, #2e7d32);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          flex-shrink: 0;
        }
        .adm-logo-text { font-weight: 700; font-size: 0.9rem; line-height: 1.25; }
        .adm-logo-sub { font-size: 0.7rem; color: rgba(232,240,233,0.45); }
        .adm-nav { flex: 1; padding: 1rem 0.75rem; display: flex; flex-direction: column; gap: 0.25rem; }
        .adm-nav-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.65rem 0.85rem;
          border-radius: 8px;
          font-size: 0.875rem;
          font-weight: 500;
          color: rgba(232,240,233,0.65);
          text-decoration: none;
          transition: background 0.15s, color 0.15s;
          cursor: pointer;
          border: none;
          background: transparent;
          width: 100%;
          text-align: left;
        }
        .adm-nav-item:hover { background: rgba(76,175,80,0.12); color: #e8f0e9; }
        .adm-nav-item.active { background: rgba(76,175,80,0.2); color: #4CAF50; font-weight: 600; }
        .adm-nav-icon { font-size: 1rem; width: 20px; text-align: center; }
        .adm-nav-footer { padding: 0.75rem; border-top: 1px solid rgba(255,255,255,0.06); }
        /* ── Main ── */
        .adm-main {
          flex: 1;
          display: flex;
          flex-direction: column;
          min-width: 0;
        }
        .adm-topbar {
          height: 58px;
          background: rgba(15,26,19,0.95);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          display: flex;
          align-items: center;
          padding: 0 1.5rem;
          backdrop-filter: blur(8px);
          position: sticky;
          top: 0;
          z-index: 10;
          justify-content: space-between;
        }
        .adm-topbar-title { font-weight: 600; font-size: 1rem; }
        .adm-badge {
          background: rgba(76,175,80,0.15);
          color: #4CAF50;
          border: 1px solid rgba(76,175,80,0.3);
          border-radius: 999px;
          font-size: 0.72rem;
          font-weight: 600;
          padding: 0.25rem 0.75rem;
          letter-spacing: 0.04em;
        }
        .adm-content { padding: 1.75rem; flex: 1; }

        /* ── Cards ── */
        .adm-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px;
          padding: 1.5rem;
        }
        .adm-card-title { font-size: 0.8rem; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; color: rgba(232,240,233,0.5); margin-bottom: 0.4rem; }
        .adm-card-value { font-size: 2rem; font-weight: 700; color: #fff; }
        .adm-card-sub { font-size: 0.8rem; color: rgba(232,240,233,0.45); margin-top: 0.25rem; }

        /* ── Table ── */
        .adm-table-wrap { overflow-x: auto; }
        .adm-table { width: 100%; border-collapse: collapse; font-size: 0.875rem; }
        .adm-table th {
          text-align: left;
          padding: 0.65rem 1rem;
          background: rgba(255,255,255,0.04);
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: rgba(232,240,233,0.5);
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .adm-table td {
          padding: 0.75rem 1rem;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          color: rgba(232,240,233,0.85);
          vertical-align: middle;
        }
        .adm-table tr:last-child td { border-bottom: none; }
        .adm-table tr:hover td { background: rgba(255,255,255,0.02); }

        /* ── Buttons ── */
        .adm-btn {
          padding: 0.5rem 1rem;
          border-radius: 8px;
          font-size: 0.825rem;
          font-weight: 600;
          cursor: pointer;
          border: none;
          transition: opacity 0.15s, transform 0.1s;
        }
        .adm-btn:hover { opacity: 0.85; transform: translateY(-1px); }
        .adm-btn:disabled { opacity: 0.5; cursor: not-allowed; transform: none; }
        .adm-btn-primary { background: linear-gradient(135deg, #4CAF50, #2e7d32); color: #fff; }
        .adm-btn-danger { background: rgba(239,68,68,0.15); color: #f87171; border: 1px solid rgba(239,68,68,0.25); }
        .adm-btn-ghost { background: rgba(255,255,255,0.07); color: rgba(232,240,233,0.8); border: 1px solid rgba(255,255,255,0.1); }
        .adm-btn-sm { padding: 0.3rem 0.7rem; font-size: 0.78rem; }

        /* ── Input ── */
        .adm-input, .adm-select, .adm-textarea {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 8px;
          padding: 0.6rem 0.9rem;
          color: #e8f0e9;
          font-size: 0.875rem;
          outline: none;
          transition: border-color 0.2s;
          width: 100%;
        }
        .adm-input:focus, .adm-select:focus, .adm-textarea:focus { border-color: #4CAF50; }
        .adm-input::placeholder, .adm-textarea::placeholder { color: rgba(232,240,233,0.3); }
        .adm-select option { background: #142b1d; color: #e8f0e9; }
        .adm-textarea { resize: vertical; min-height: 80px; }
        .adm-label { font-size: 0.78rem; font-weight: 600; color: rgba(232,240,233,0.55); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.35rem; display: block; }
        .adm-field { margin-bottom: 1rem; }

        /* ── Status pills ── */
        .pill { display: inline-block; border-radius: 999px; font-size: 0.72rem; font-weight: 600; padding: 0.2rem 0.65rem; }
        .pill-green { background: rgba(74,222,128,0.15); color: #4ade80; }
        .pill-red   { background: rgba(248,113,113,0.15); color: #f87171; }
        .pill-amber { background: rgba(251,191,36,0.15); color: #fbbf24; }

        /* ── Modal ── */
        .adm-overlay {
          position: fixed; inset: 0; z-index: 100;
          background: rgba(0,0,0,0.7);
          display: flex; align-items: center; justify-content: center;
          backdrop-filter: blur(4px);
        }
        .adm-modal {
          background: #142b1d;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 16px;
          padding: 2rem;
          width: 100%;
          max-width: 480px;
          max-height: 90vh;
          overflow-y: auto;
        }
        .adm-modal-title { font-size: 1.1rem; font-weight: 700; margin-bottom: 1.25rem; }
        .adm-modal-footer { display: flex; gap: 0.75rem; justify-content: flex-end; margin-top: 1.25rem; }
      `}</style>

      <div className="adm-root">
        {/* Sidebar */}
        <aside className="adm-sidebar">
          <div className="adm-logo">
            <div className="adm-logo-icon">🌿</div>
            <div className="adm-logo-text">
              Poshak Tattva
              <div className="adm-logo-sub">Admin Panel</div>
            </div>
          </div>

          <nav className="adm-nav">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`adm-nav-item ${router.pathname === item.href ? "active" : ""}`}
              >
                <span className="adm-nav-icon">{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="adm-nav-footer">
            <button className="adm-nav-item" onClick={handleLogout} style={{ color: "#f87171" }}>
              <span className="adm-nav-icon">🚪</span>
              Sign Out
            </button>
          </div>
        </aside>

        {/* Main content */}
        <div className="adm-main">
          <header className="adm-topbar">
            <span className="adm-topbar-title">
              {navItems.find((n) => n.href === router.pathname)?.label ?? "Admin"}
            </span>
            <span className="adm-badge">Poshak Tattva Dashboard</span>
          </header>
          <main className="adm-content">{children}</main>
        </div>
      </div>
    </>
  );
}
