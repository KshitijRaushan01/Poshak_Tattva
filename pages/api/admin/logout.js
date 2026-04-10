// API route: POST /api/admin/logout
import { serialize } from "cookie";
import { ADMIN_COOKIE } from "../../../src/lib/adminAuth";

export default function handler(req, res) {
  res.setHeader(
    "Set-Cookie",
    serialize(ADMIN_COOKIE, "", { httpOnly: true, path: "/", maxAge: 0 })
  );
  res.status(200).json({ ok: true });
}
