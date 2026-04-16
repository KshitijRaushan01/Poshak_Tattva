// ─── Supabase Client ────────────────────────────────────────────────────────
// Credentials flow:
//   1. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local
//   2. Restart the dev server after editing .env.local
// ─────────────────────────────────────────────────────────────────────────────

import { createClient } from "@supabase/supabase-js";

const supabaseUrl     = process.env.NEXT_PUBLIC_SUPABASE_URL     || "https://qcnvvzmxqfxdcfhdviyc.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFjbnZ2em14cWZ4ZGNmaGR2aXljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU3OTAwMjUsImV4cCI6MjA5MTM2NjAyNX0.yib8uTlHLvMNSKJhCvGVI0BXxLrT6H4CtSyVG5nnkqU";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
