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

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    fetchOrders();
  }, []);

  async function fetchOrders() {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("orders")
        .select("*")
        .order("created_at", { ascending: false });
      
      if (error) throw error;
      setOrders(data || []);
    } catch (err) {
      console.error("Error fetching orders:", err.message);
    } finally {
      setLoading(false);
    }
  }

  async function updateStatus(id, newStatus) {
    try {
      const { error } = await supabase
        .from("orders")
        .update({ status: newStatus })
        .eq("id", id);
      
      if (error) throw error;
      setOrders(prev => prev.map(o => o.id === id ? { ...o, status: newStatus } : o));
      if (selectedOrder?.id === id) {
        setSelectedOrder(prev => ({ ...prev, status: newStatus }));
      }
    } catch (err) {
      alert("Failed to update status: " + err.message);
    }
  }

  return (
    <>
      <Head><title>Manage Orders – Admin</title></Head>
      <AdminLayout>
        <div style={{ marginBottom: "2rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <h1 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.25rem" }}>Orders</h1>
            <p style={{ color: "rgba(232,240,233,0.5)", fontSize: "0.875rem" }}>Monitor and manage customer purchases.</p>
          </div>
          <button className="adm-btn adm-btn-ghost" onClick={fetchOrders} disabled={loading}>
            {loading ? "Refreshing..." : "🔄 Refresh"}
          </button>
        </div>

        <div className="adm-card" style={{ padding: 0, overflow: "hidden" }}>
          <div className="adm-table-wrap">
            <table className="adm-table">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {loading && orders.length === 0 ? (
                  <tr><td colSpan="6" style={{ textAlign: "center", padding: "3rem" }}>Loading orders...</td></tr>
                ) : orders.length === 0 ? (
                  <tr><td colSpan="6" style={{ textAlign: "center", padding: "3rem" }}>No orders found.</td></tr>
                ) : (
                  orders.map((order) => (
                    <tr key={order.id}>
                      <td style={{ fontWeight: 600, fontSize: "0.8rem" }}>{order.order_id}</td>
                      <td>
                        <div style={{ fontWeight: 600 }}>{order.customer_name}</div>
                        <div style={{ fontSize: "0.75rem", opacity: 0.6 }}>{order.customer_email}</div>
                      </td>
                      <td style={{ fontWeight: 700 }}>₹{order.amount.toLocaleString()}</td>
                      <td>
                        <span className={`pill ${
                          order.status === 'paid' ? 'pill-green' : 
                          order.status === 'shipped' ? 'pill-amber' : 'pill-amber'
                        }`}>
                          {order.status}
                        </span>
                      </td>
                      <td style={{ fontSize: "0.8rem", opacity: 0.7 }}>
                        {new Date(order.created_at).toLocaleDateString()}
                      </td>
                      <td>
                        <button 
                          className="adm-btn adm-btn-ghost adm-btn-sm"
                          onClick={() => setSelectedOrder(order)}
                        >
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Order Details Modal */}
        {selectedOrder && (
          <div className="adm-overlay" onClick={() => setSelectedOrder(null)}>
            <div className="adm-modal" onClick={e => e.stopPropagation()} style={{ maxWidth: "600px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
                <h3 className="adm-modal-title" style={{ marginBottom: 0 }}>Order Details</h3>
                <button 
                  onClick={() => setSelectedOrder(null)}
                  style={{ background: "none", border: "none", color: "#fff", fontSize: "1.5rem", cursor: "pointer" }}
                >
                  &times;
                </button>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "1.5rem" }}>
                <div>
                  <label className="adm-label">Customer Info</label>
                  <p style={{ fontWeight: 600, marginBottom: "0.25rem" }}>{selectedOrder.customer_name}</p>
                  <p style={{ fontSize: "0.875rem", opacity: 0.7 }}>{selectedOrder.customer_email}</p>
                  <p style={{ fontSize: "0.875rem", opacity: 0.7 }}>{selectedOrder.customer_phone}</p>
                </div>
                <div>
                  <label className="adm-label">Shipping Address</label>
                  <p style={{ fontSize: "0.875rem", lineHeight: 1.5 }}>
                    {selectedOrder.address}<br />
                    {selectedOrder.city}, {selectedOrder.state} - {selectedOrder.pincode}
                  </p>
                </div>
              </div>

              <div style={{ marginBottom: "1.5rem" }}>
                <label className="adm-label">Items</label>
                <div style={{ background: "rgba(255,255,255,0.03)", borderRadius: "8px", padding: "1rem" }}>
                  {selectedOrder.items?.map((item, idx) => (
                    <div key={idx} style={{ display: "flex", justifyContent: "space-between", marginBottom: idx === selectedOrder.items.length - 1 ? 0 : "0.75rem" }}>
                      <span style={{ fontSize: "0.875rem" }}>{item.title} x {item.quantity}</span>
                      <span style={{ fontWeight: 600 }}>₹{(item.price * item.quantity).toLocaleString()}</span>
                    </div>
                  ))}
                  <hr style={{ border: "none", borderTop: "1px solid rgba(255,255,255,0.1)", margin: "1rem 0" }} />
                  <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 700 }}>
                    <span>Total</span>
                    <span style={{ color: "#4CAF50" }}>₹{selectedOrder.amount.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="adm-field">
                <label className="adm-label">Order Status</label>
                <select 
                  className="adm-select"
                  value={selectedOrder.status}
                  onChange={(e) => updateStatus(selectedOrder.id, e.target.value)}
                >
                  <option value="paid">Paid</option>
                  <option value="shipped">Shipped</option>
                  <option value="delivered">Delivered</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>

              <div className="adm-modal-footer">
                <button className="adm-btn adm-btn-ghost" onClick={() => setSelectedOrder(null)}>Close</button>
              </div>
            </div>
          </div>
        )}
      </AdminLayout>
    </>
  );
}
