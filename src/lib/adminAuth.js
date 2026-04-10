// ─── Admin Auth Helper ───────────────────────────────────────────────────────
// Credentials: poshak_tattva@LaliPugalia / LaliPugalia@123
// This is a lightweight hardcoded auth — not Supabase Auth.
// ─────────────────────────────────────────────────────────────────────────────

export const ADMIN_USERNAME = "poshak_tattva@LaliPugalia";
export const ADMIN_PASSWORD = "LaliPugalia@123";
export const ADMIN_COOKIE  = "pt_admin_session";

/** Returns true if the session cookie is set correctly on the server side. */
export function isAdminAuthenticated(req) {
  const raw = req.cookies?.[ADMIN_COOKIE];
  return raw === "authenticated";
}
