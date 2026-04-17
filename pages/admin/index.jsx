// Dashboard overview page
import { useEffect, useState } from "react";
import Head from "next/head";
import AdminLayout from "components/admin/AdminLayout";
import { supabase } from "../../src/lib/supabaseClient";
import { isAdminAuthenticated } from "../../src/lib/adminAuth";

export async function getServerSideProps({ req }) {
  if (!isAdminAuthenticated(req)) {
    return { redirect: { destination: "/admin/login", permanent: false } };
  }
  return { props: {} };
}

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    appointments: null,
    products: null,
    testimonials: null,
    gallery: null,
    articles: null,
  });

  useEffect(() => {
    async function fetchCounts() {
      try {
        const [appt, prod, test, gall, art] = await Promise.all([
          supabase.from("appointments").select("id", { count: "exact", head: true }),
          supabase.from("products").select("id", { count: "exact", head: true }),
          supabase.from("testimonials").select("id", { count: "exact", head: true }),
          supabase.from("gallery").select("id", { count: "exact", head: true }),
          supabase.from("articles").select("id", { count: "exact", head: true }),
        ]);
        if (appt.error) console.error("appt error", appt.error);

        setStats({
          appointments: appt.count ?? 0,
          products: prod.count ?? 0,
          testimonials: test.count ?? 0,
          gallery: gall.count ?? 0,
          articles: art.count ?? 0,
        });
      } catch (err) {
        console.error("Dashboard count error:", err);
      }
    }
    fetchCounts();
  }, []);

  const cards = [
    { label: "Total Appointments", value: stats.appointments, icon: "📅", href: "/admin/appointments", color: "#4ade80" },
    { label: "Products in DB",     value: stats.products,     icon: "🛍️", href: "/admin/products",     color: "#60a5fa" },
    { label: "Testimonials",       value: stats.testimonials, icon: "⭐", href: "/admin/testimonials", color: "#fbbf24" },
    { label: "Gallery Images",     value: stats.gallery,      icon: "🖼️", href: "/admin/gallery",      color: "#c084fc" },
    { label: "Articles",           value: stats.articles,     icon: "📝", href: "/admin/articles",     color: "#f87171" },
  ];

  return (
    <>
      <Head><title>Admin Dashboard – Poshak Tattva</title></Head>
      <AdminLayout>
        <div style={{ marginBottom: "1.5rem" }}>
          <h1 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.3rem" }}>Welcome back 👋</h1>
          <p style={{ color: "rgba(232,240,233,0.5)", fontSize: "0.875rem" }}>Here's an overview of your Poshak Tattva platform.</p>
        </div>

        {/* Stat cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "1rem", marginBottom: "2rem" }}>
          {cards.map((c) => (
            <a key={c.label} href={c.href} style={{ textDecoration: "none" }}>
              <div className="adm-card" style={{ cursor: "pointer", transition: "border-color 0.2s" }}
                onMouseOver={(e) => e.currentTarget.style.borderColor = c.color}
                onMouseOut={(e) => e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"}
              >
                <div style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}>{c.icon}</div>
                <div className="adm-card-title">{c.label}</div>
                <div className="adm-card-value" style={{ color: c.color }}>
                  {c.value === null ? (
                    <span style={{ display: "inline-block", width: 40, height: 28, background: "rgba(255,255,255,0.08)", borderRadius: 6, animation: "pulse 1.5s infinite" }} />
                  ) : c.value}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Recent section placeholder */}
        <div className="adm-card">
          <p style={{ color: "rgba(232,240,233,0.5)", fontSize: "0.875rem", textAlign: "center", padding: "2rem 0" }}>
            Use the sidebar to manage Appointments, Products, Testimonials, and Gallery.
          </p>
        </div>

        <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.4} }`}</style>
      </AdminLayout>
    </>
  );
}
