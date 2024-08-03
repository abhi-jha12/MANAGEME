import { createClient } from "@supabase/supabase-js";

const projectUrl = import.meta.env.VITE_PROJECT_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;
export const supabaseClient = createClient(projectUrl, supabaseAnonKey);
