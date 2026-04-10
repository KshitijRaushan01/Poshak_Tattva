// API route: POST /api/admin/login
import { serialize } from "cookie";
import { ADMIN_USERNAME, ADMIN_PASSWORD, ADMIN_COOKIE } from "../../../src/lib/adminAuth";

export default function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { username, password } = req.body || {};

  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    res.setHeader(
      "Set-Cookie",
      serialize(ADMIN_COOKIE, "authenticated", {
        httpOnly: true,
        path: "/",
        maxAge: 60 * 60 * 8, // 8 hours
        sameSite: "lax",
      })
    );
    return res.status(200).json({ ok: true });
  }

  return res.status(401).json({ error: "Invalid credentials" });
}
