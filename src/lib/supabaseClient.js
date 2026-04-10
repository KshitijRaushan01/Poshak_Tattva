// ─── Supabase Client ────────────────────────────────────────────────────────
// Credentials flow:
//   1. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local
//   2. Restart the dev server after editing .env.local
// ─────────────────────────────────────────────────────────────────────────────

import { createClient } from "@supabase/supabase-js";

const supabaseUrl     = process.env.NEXT_PUBLIC_SUPABASE_URL     || "https://qcnvvzmxqfxdcfhdviyc.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "sb_secret_0e8suPDeHfnwz7DCy65xEQ_hTv7PEVR";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
