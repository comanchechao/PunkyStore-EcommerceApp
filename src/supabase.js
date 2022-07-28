import { createClient } from "@supabase/supabase-js";

let supabaseUrl = process.env.VITE_SUPABASE_URL;
let supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

export let supabase = createClient(supabaseUrl, supabaseAnonKey);
