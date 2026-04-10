// Gallery admin page — manage image paths (GitHub-hosted)
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

const EMPTY = { title: "", image_url: "", alt_text: "", sort_order: 0 };

export default function AdminGallery() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(null);
  const [form, setForm] = useState(EMPTY);
  const [saving, setSaving] = useState(false);

  async function fetchData() {
    setLoading(true);
    const { data } = await supabase.from("gallery").select("*").order("sort_order", { ascending: true });
    setRows(data || []);
    setLoading(false);
  }

  useEffect(() => { fetchData(); }, []);

  function openAdd() { setForm(EMPTY); setModal("add"); }
  function openEdit(r) { setForm({ ...r }); setModal(r); }

  async function handleSave() {
    setSaving(true);
    const payload = {
      title: form.title || null,
      image_url: form.image_url,
      alt_text: form.alt_text || null,
      sort_order: parseInt(form.sort_order) || 0,
    };
    if (modal === "add") {
      await supabase.from("gallery").insert(payload);
    } else {
      await supabase.from("gallery").update(payload).eq("id", modal.id);
    }
    setSaving(false);
    setModal(null);
    fetchData();
  }

  async function deleteRow(id) {
    if (!confirm("Remove this image entry?")) return;
    await supabase.from("gallery").delete().eq("id", id);
    fetchData();
  }

  function f(field) { return (e) => setForm((s) => ({ ...s, [field]: e.target.value })); }

  return (
    <>
      <Head><title>Gallery – Admin</title></Head>
      <AdminLayout>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem", flexWrap: "wrap", gap: "0.75rem" }}>
          <div>
            <h1 style={{ fontSize: "1.3rem", fontWeight: 700 }}>Gallery</h1>
            <p style={{ color: "rgba(232,240,233,0.5)", fontSize: "0.825rem" }}>
              Add / remove gallery image paths — images are served from GitHub (<code style={{ background: "rgba(255,255,255,0.08)", borderRadius: 4, padding: "0 4px" }}>/img/Gallery/…</code>)
            </p>
          </div>
          <button className="adm-btn adm-btn-primary" onClick={openAdd}>+ Add Image</button>
        </div>

        {loading ? (
          <p style={{ textAlign: "center", color: "rgba(232,240,233,0.4)", padding: "3rem" }}>Loading…</p>
        ) : rows.length === 0 ? (
          <div className="adm-card" style={{ textAlign: "center", padding: "3rem", color: "rgba(232,240,233,0.4)" }}>
            No gallery images yet. Add your first entry above.
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "1rem" }}>
            {rows.map((r) => (
              <div key={r.id} className="adm-card" style={{ padding: "0.75rem" }}>
                <div style={{ aspectRatio: "4/3", background: "rgba(0,0,0,0.3)", borderRadius: 8, overflow: "hidden", marginBottom: "0.75rem" }}>
                  <img
                    src={r.image_url}
                    alt={r.alt_text || r.title || "Gallery"}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    onError={(e) => { e.target.style.display = "none"; }}
                  />
                </div>
                <div style={{ fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.25rem", color: "#e8f0e9", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {r.title || "Untitled"}
                </div>
                <div style={{ fontSize: "0.72rem", color: "rgba(232,240,233,0.4)", marginBottom: "0.75rem", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {r.image_url}
                </div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <button className="adm-btn adm-btn-ghost adm-btn-sm" style={{ flex: 1 }} onClick={() => openEdit(r)}>Edit</button>
                  <button className="adm-btn adm-btn-danger adm-btn-sm" style={{ flex: 1 }} onClick={() => deleteRow(r.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}

        {modal !== null && (
          <div className="adm-overlay" onClick={() => setModal(null)}>
            <div className="adm-modal" onClick={(e) => e.stopPropagation()}>
              <div className="adm-modal-title">{modal === "add" ? "Add Gallery Image" : "Edit Gallery Image"}</div>

              <div className="adm-field">
                <label className="adm-label">Image URL / Path</label>
                <input className="adm-input" value={form.image_url} onChange={f("image_url")} placeholder="/img/Gallery/1.jpg" />
                <div style={{ fontSize: "0.72rem", color: "rgba(232,240,233,0.35)", marginTop: "0.3rem" }}>
                  Use the path relative to /public (e.g. /img/Gallery/photo.jpg)
                </div>
              </div>
              <div className="adm-field"><label className="adm-label">Title (optional)</label><input className="adm-input" value={form.title} onChange={f("title")} placeholder="Yoga Workshop 2024" /></div>
              <div className="adm-field"><label className="adm-label">Alt text (for SEO)</label><input className="adm-input" value={form.alt_text} onChange={f("alt_text")} placeholder="Describe the image" /></div>
              <div className="adm-field"><label className="adm-label">Sort order (lower = first)</label><input className="adm-input" type="number" value={form.sort_order} onChange={f("sort_order")} /></div>

              {form.image_url && (
                <div style={{ marginBottom: "1rem" }}>
                  <label className="adm-label">Preview</label>
                  <div style={{ borderRadius: 8, overflow: "hidden", background: "rgba(0,0,0,0.3)", maxHeight: 160, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <img src={form.image_url} alt="preview" style={{ maxWidth: "100%", maxHeight: 160, objectFit: "contain" }} onError={(e) => e.target.style.opacity = 0.2} />
                  </div>
                </div>
              )}

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
