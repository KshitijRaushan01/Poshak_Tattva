// Appointments admin page
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

const SERVICE_LABELS = {
  yoga: "Yoga Session",
  diet: "Diet Consultation",
  sound: "Sound Healing",
  consultation: "General Consultation",
};

export default function AdminAppointments() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  async function fetchData() {
    setLoading(true);
    const query = supabase.from("appointments").select("*").order("created_at", { ascending: false });
    const { data, error } = await query;
    if (error) {
      console.error("Supabase fetch error:", error);
      alert("Error fetching from Supabase: " + error.message);
    }
    setRows(data || []);
    setLoading(false);
  }

  useEffect(() => { fetchData(); }, []);

  async function updateStatus(id, status) {
    await supabase.from("appointments").update({ status }).eq("id", id);
    fetchData();
  }

  async function deleteRow(id) {
    if (!confirm("Delete this appointment?")) return;
    await supabase.from("appointments").delete().eq("id", id);
    fetchData();
  }

  const filtered = filter === "all" ? rows : rows.filter((r) => r.status === filter);

  return (
    <>
      <Head><title>Appointments – Admin</title></Head>
      <AdminLayout>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem", flexWrap: "wrap", gap: "0.75rem" }}>
          <div>
            <h1 style={{ fontSize: "1.3rem", fontWeight: 700 }}>Appointments</h1>
            <p style={{ color: "rgba(232,240,233,0.5)", fontSize: "0.825rem" }}>All contact form & booking submissions</p>
          </div>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            {["all", "pending", "confirmed", "cancelled"].map((s) => (
              <button key={s} className={`adm-btn adm-btn-sm ${filter === s ? "adm-btn-primary" : "adm-btn-ghost"}`} onClick={() => setFilter(s)}>
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="adm-card" style={{ padding: 0 }}>
          <div className="adm-table-wrap">
            {loading ? (
              <p style={{ padding: "2rem", textAlign: "center", color: "rgba(232,240,233,0.4)" }}>Loading…</p>
            ) : filtered.length === 0 ? (
              <p style={{ padding: "2rem", textAlign: "center", color: "rgba(232,240,233,0.4)" }}>No appointments yet.</p>
            ) : (
              <table className="adm-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Service</th>
                    <th>Date & Time</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((r) => (
                    <tr key={r.id}>
                      <td style={{ fontWeight: 600 }}>{r.name}</td>
                      <td>{r.email}</td>
                      <td>{r.phone}</td>
                      <td>{SERVICE_LABELS[r.service] || r.service}</td>
                      <td style={{ whiteSpace: "nowrap" }}>{r.preferred_date} @ {r.preferred_time}</td>
                      <td>
                        <select
                          className="adm-select"
                          style={{ minWidth: 110, padding: "0.25rem 0.5rem", fontSize: "0.78rem" }}
                          value={r.status || "pending"}
                          onChange={(e) => updateStatus(r.id, e.target.value)}
                        >
                          <option value="pending">Pending</option>
                          <option value="confirmed">Confirmed</option>
                          <option value="cancelled">Cancelled</option>
                        </select>
                      </td>
                      <td>
                        <button className="adm-btn adm-btn-danger adm-btn-sm" onClick={() => deleteRow(r.id)}>Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </AdminLayout>
    </>
  );
}
