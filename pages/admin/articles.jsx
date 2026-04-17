// Articles admin page — add/remove articles
import { useEffect, useState } from "react";
import Head from "next/head";
import AdminLayout from "../../src/components/admin/AdminLayout";
import { supabase } from "../../src/lib/supabaseClient";
import { isAdminAuthenticated } from "../../src/lib/adminAuth";

export async function getServerSideProps({ req }) {
  if (!isAdminAuthenticated(req)) {
    return { redirect: { destination: "/admin/login", permanent: false } };
  }
  return { props: {} };
}

const EMPTY = { title: "", content: "", image_url: "" };

export default function AdminArticles() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(null); // null | "add" | {row}
  const [form, setForm] = useState(EMPTY);
  const [saving, setSaving] = useState(false);

  async function fetchData() {
    setLoading(true);
    const { data } = await supabase.from("articles").select("*").order("created_at", { ascending: false });
    setRows(data || []);
    setLoading(false);
  }

  useEffect(() => { fetchData(); }, []);

  function openAdd() { setForm(EMPTY); setModal("add"); }
  function openEdit(row) { setForm({ ...row }); setModal(row); }

  async function handleSave() {
    setSaving(true);
    const payload = {
      title: form.title,
      content: form.content,
      image_url: form.image_url,
    };
    if (modal === "add") {
      await supabase.from("articles").insert(payload);
    } else {
      await supabase.from("articles").update(payload).eq("id", modal.id);
    }
    setModal(null);
    setForm(EMPTY);
    fetchData();
    setSaving(false);
  }

  async function handleDelete(id) {
    if (confirm("Delete this article?")) {
      await supabase.from("articles").delete().eq("id", id);
      fetchData();
    }
  }

  return (
    <AdminLayout>
      <Head>
        <title>Articles Admin - Poshak Tattva</title>
      </Head>

      <div className="container-fluid py-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="h3 mb-0">Articles Management</h1>
          <button className="btn btn-primary" onClick={openAdd}>Add Article</button>
        </div>

        {loading ? (
          <div className="text-center">Loading...</div>
        ) : (
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Image</th>
                  <th>Created</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.id}>
                    <td>{row.title}</td>
                    <td>{row.image_url ? <img src={row.image_url} width="50" alt="" /> : "No image"}</td>
                    <td>{new Date(row.created_at).toLocaleDateString()}</td>
                    <td>
                      <button className="btn btn-sm btn-outline-primary me-2" onClick={() => openEdit(row)}>Edit</button>
                      <button className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(row.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {modal && (
          <div className="modal show d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">{modal === "add" ? "Add Article" : "Edit Article"}</h5>
                  <button className="btn-close" onClick={() => setModal(null)}></button>
                </div>
                <div className="modal-body">
                  <div className="mb-3">
                    <label>Title</label>
                    <input type="text" className="form-control" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
                  </div>
                  <div className="mb-3">
                    <label>Content</label>
                    <textarea className="form-control" rows="10" value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} />
                  </div>
                  <div className="mb-3">
                    <label>Image URL</label>
                    <input type="text" className="form-control" value={form.image_url} onChange={(e) => setForm({ ...form, image_url: e.target.value })} />
                  </div>
                </div>
                <div className="modal-footer">
                  <button className="btn btn-secondary" onClick={() => setModal(null)}>Cancel</button>
                  <button className="btn btn-primary" onClick={handleSave} disabled={saving}>
                    {saving ? "Saving..." : "Save"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}