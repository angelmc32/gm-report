import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL_API ?? "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_KEY_ANON ?? "";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
