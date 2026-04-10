// Testimonials admin page
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

const EMPTY = { name: "", role: "", quote: "", rating: 5 };

export default function AdminTestimonials() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(null);
  const [form, setForm] = useState(EMPTY);
  const [saving, setSaving] = useState(false);

  async function fetchData() {
    setLoading(true);
    const { data } = await supabase.from("testimonials").select("*").order("created_at", { ascending: false });
    setRows(data || []);
    setLoading(false);
  }

  useEffect(() => { fetchData(); }, []);

  function openAdd() { setForm(EMPTY); setModal("add"); }
  function openEdit(r) { setForm({ ...r }); setModal(r); }

  async function handleSave() {
    setSaving(true);
    const payload = { name: form.name, role: form.role || null, quote: form.quote, rating: parseInt(form.rating) || 5 };
    if (modal === "add") {
      await supabase.from("testimonials").insert(payload);
    } else {
      await supabase.from("testimonials").update(payload).eq("id", modal.id);
    }
    setSaving(false);
    setModal(null);
    fetchData();
  }

  async function deleteRow(id) {
    if (!confirm("Delete this testimonial?")) return;
    await supabase.from("testimonials").delete().eq("id", id);
    fetchData();
  }

  function f(field) { return (e) => setForm((s) => ({ ...s, [field]: e.target.value })); }

  return (
    <>
      <Head><title>Testimonials – Admin</title></Head>
      <AdminLayout>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem", flexWrap: "wrap", gap: "0.75rem" }}>
          <div>
            <h1 style={{ fontSize: "1.3rem", fontWeight: 700 }}>Testimonials</h1>
            <p style={{ color: "rgba(232,240,233,0.5)", fontSize: "0.825rem" }}>Add, edit, or remove client testimonials</p>
          </div>
          <button className="adm-btn adm-btn-primary" onClick={openAdd}>+ Add Testimonial</button>
        </div>

        <div className="adm-card" style={{ padding: 0 }}>
          <div className="adm-table-wrap">
            {loading ? (
              <p style={{ padding: "2rem", textAlign: "center", color: "rgba(232,240,233,0.4)" }}>Loading…</p>
            ) : rows.length === 0 ? (
              <p style={{ padding: "2rem", textAlign: "center", color: "rgba(232,240,233,0.4)" }}>No testimonials yet.</p>
            ) : (
              <table className="adm-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Rating</th>
                    <th>Quote</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r) => (
                    <tr key={r.id}>
                      <td style={{ fontWeight: 600 }}>{r.name}</td>
                      <td style={{ color: "rgba(232,240,233,0.5)", fontSize: "0.825rem" }}>{r.role || "–"}</td>
                      <td>
                        <span className="pill pill-amber">{"⭐".repeat(Math.min(r.rating, 5))}</span>
                      </td>
                      <td style={{ maxWidth: 360, color: "rgba(232,240,233,0.7)", fontSize: "0.825rem" }}>
                        {r.quote?.length > 100 ? r.quote.slice(0, 100) + "…" : r.quote}
                      </td>
                      <td>
                        <div style={{ display: "flex", gap: "0.5rem" }}>
                          <button className="adm-btn adm-btn-ghost adm-btn-sm" onClick={() => openEdit(r)}>Edit</button>
                          <button className="adm-btn adm-btn-danger adm-btn-sm" onClick={() => deleteRow(r.id)}>Delete</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>

        {modal !== null && (
          <div className="adm-overlay" onClick={() => setModal(null)}>
            <div className="adm-modal" onClick={(e) => e.stopPropagation()}>
              <div className="adm-modal-title">{modal === "add" ? "Add Testimonial" : "Edit Testimonial"}</div>

              <div className="adm-field"><label className="adm-label">Name</label><input className="adm-input" value={form.name} onChange={f("name")} placeholder="Client name" /></div>
              <div className="adm-field"><label className="adm-label">Role (optional)</label><input className="adm-input" value={form.role} onChange={f("role")} placeholder="e.g. Yoga Student, New Delhi" /></div>
              <div className="adm-field">
                <label className="adm-label">Rating (1–5)</label>
                <select className="adm-select" value={form.rating} onChange={f("rating")}>
                  {[5, 4, 3, 2, 1].map((n) => <option key={n} value={n}>{n} ⭐</option>)}
                </select>
              </div>
              <div className="adm-field"><label className="adm-label">Quote</label><textarea className="adm-textarea" style={{ minHeight: 120 }} value={form.quote} onChange={f("quote")} placeholder="Client feedback…" /></div>

              <div className="adm-modal-footer">
                <button className="adm-btn adm-btn-ghost" onClick={() => setModal(null)}>Cancel</button>
                <button className="adm-btn adm-btn-primary" onClick={handleSave} disabled={saving}>{saving ? "Saving…" : "Save"}</button>
              </div>
            </div>
          </div>
        )}
      </AdminLayout>
    </>
  );
}
