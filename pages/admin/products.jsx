// Products admin page — in/out of stock, pricing, discount
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

const EMPTY = { slug: "", name: "", thumbnail: "", price_inr: "", original_price_inr: "", discount_pct: "", in_stock: true, short_description: "" };

export default function AdminProducts() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(null); // null | "add" | {row}
  const [form, setForm] = useState(EMPTY);
  const [saving, setSaving] = useState(false);
  const [search, setSearch] = useState("");

  async function fetchData() {
    setLoading(true);
    const { data } = await supabase.from("products").select("*").order("name");
    setRows(data || []);
    setLoading(false);
  }

  useEffect(() => { fetchData(); }, []);

  function openAdd() { setForm(EMPTY); setModal("add"); }
  function openEdit(row) { setForm({ ...row }); setModal(row); }

  async function handleSave() {
    setSaving(true);
    const payload = {
      slug: form.slug,
      name: form.name,
      thumbnail: form.thumbnail,
      price_inr: parseFloat(form.price_inr) || 0,
      original_price_inr: parseFloat(form.original_price_inr) || null,
      discount_pct: parseFloat(form.discount_pct) || null,
      in_stock: form.in_stock,
      short_description: form.short_description,
    };
    if (modal === "add") {
      await supabase.from("products").insert(payload);
    } else {
      await supabase.from("products").update(payload).eq("id", modal.id);
    }
    setSaving(false);
    setModal(null);
    fetchData();
  }

  async function toggleStock(id, current) {
    await supabase.from("products").update({ in_stock: !current }).eq("id", id);
    fetchData();
  }

  async function deleteRow(id) {
    if (!confirm("Delete this product from the DB?")) return;
    await supabase.from("products").delete().eq("id", id);
    fetchData();
  }

  const filtered = rows.filter((r) => r.name?.toLowerCase().includes(search.toLowerCase()));

  function f(field) { return (e) => setForm((s) => ({ ...s, [field]: e.target.type === "checkbox" ? e.target.checked : e.target.value })); }

  return (
    <>
      <Head><title>Products – Admin</title></Head>
      <AdminLayout>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem", flexWrap: "wrap", gap: "0.75rem" }}>
          <div>
            <h1 style={{ fontSize: "1.3rem", fontWeight: 700 }}>Products</h1>
            <p style={{ color: "rgba(232,240,233,0.5)", fontSize: "0.825rem" }}>Manage stock status, pricing & discounts</p>
          </div>
          <div style={{ display: "flex", gap: "0.75rem" }}>
            <input className="adm-input" style={{ width: 200 }} placeholder="Search products…" value={search} onChange={(e) => setSearch(e.target.value)} />
            <button className="adm-btn adm-btn-primary" onClick={openAdd}>+ Add Product</button>
          </div>
        </div>

        <div className="adm-card" style={{ padding: 0 }}>
          <div className="adm-table-wrap">
            {loading ? (
              <p style={{ padding: "2rem", textAlign: "center", color: "rgba(232,240,233,0.4)" }}>Loading…</p>
            ) : filtered.length === 0 ? (
              <p style={{ padding: "2rem", textAlign: "center", color: "rgba(232,240,233,0.4)" }}>
                {rows.length === 0 ? "No products in DB yet." : "No results."}
              </p>
            ) : (
              <table className="adm-table">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price (₹)</th>
                    <th>Original (₹)</th>
                    <th>Discount</th>
                    <th>Stock</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((r) => (
                    <tr key={r.id}>
                      <td>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                          {r.thumbnail && (
                            <img src={r.thumbnail} alt={r.name} style={{ width: 40, height: 40, objectFit: "cover", borderRadius: 6, background: "#1f3d2b" }} />
                          )}
                          <div>
                            <div style={{ fontWeight: 600, fontSize: "0.875rem" }}>{r.name}</div>
                            <div style={{ color: "rgba(232,240,233,0.4)", fontSize: "0.75rem" }}>{r.slug}</div>
                          </div>
                        </div>
                      </td>
                      <td style={{ fontWeight: 600 }}>₹{Number(r.price_inr || 0).toLocaleString("en-IN")}</td>
                      <td>{r.original_price_inr ? `₹${Number(r.original_price_inr).toLocaleString("en-IN")}` : "–"}</td>
                      <td>{r.discount_pct ? <span className="pill pill-amber">{r.discount_pct}% off</span> : "–"}</td>
                      <td>
                        <button
                          className={`pill ${r.in_stock ? "pill-green" : "pill-red"}`}
                          style={{ cursor: "pointer", border: "none", background: r.in_stock ? "rgba(74,222,128,0.15)" : "rgba(248,113,113,0.15)" }}
                          onClick={() => toggleStock(r.id, r.in_stock)}
                        >
                          {r.in_stock ? "In Stock" : "Out of Stock"}
                        </button>
                      </td>
                      <td>
                        <div style={{ display: "flex", gap: "0.5rem" }}>
                          <button className="adm-btn adm-btn-ghost adm-btn-sm" onClick={() => openEdit(r)}>Edit</button>
                          <button className="adm-btn adm-btn-danger adm-btn-sm" onClick={() => deleteRow(r.id)}>Del</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>

        {/* Modal */}
        {modal !== null && (
          <div className="adm-overlay" onClick={() => setModal(null)}>
            <div className="adm-modal" onClick={(e) => e.stopPropagation()}>
              <div className="adm-modal-title">{modal === "add" ? "Add Product" : "Edit Product"}</div>

              <div className="adm-field"><label className="adm-label">Name</label><input className="adm-input" value={form.name} onChange={f("name")} placeholder="Product name" /></div>
              <div className="adm-field"><label className="adm-label">Slug (URL key)</label><input className="adm-input" value={form.slug} onChange={f("slug")} placeholder="e.g. crystal-bowls" /></div>
              <div className="adm-field"><label className="adm-label">Thumbnail path</label><input className="adm-input" value={form.thumbnail} onChange={f("thumbnail")} placeholder="/img/Products/…" /></div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.75rem" }}>
                <div className="adm-field"><label className="adm-label">Price (₹)</label><input className="adm-input" type="number" value={form.price_inr} onChange={f("price_inr")} /></div>
                <div className="adm-field"><label className="adm-label">Original (₹)</label><input className="adm-input" type="number" value={form.original_price_inr} onChange={f("original_price_inr")} /></div>
                <div className="adm-field"><label className="adm-label">Discount %</label><input className="adm-input" type="number" value={form.discount_pct} onChange={f("discount_pct")} /></div>
              </div>
              <div className="adm-field"><label className="adm-label">Short description</label><textarea className="adm-textarea" value={form.short_description} onChange={f("short_description")} /></div>
              <div className="adm-field" style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <input type="checkbox" id="in_stock" checked={form.in_stock} onChange={f("in_stock")} style={{ width: 16, height: 16 }} />
                <label htmlFor="in_stock" style={{ marginBottom: 0, color: "rgba(232,240,233,0.8)", fontSize: "0.875rem" }}>In Stock</label>
              </div>

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
