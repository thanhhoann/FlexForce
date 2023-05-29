import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mvozqapgprvvpfumlkpu.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im12b3pxYXBncHJ2dnBmdW1sa3B1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ4MzU1OTcsImV4cCI6MjAwMDQxMTU5N30.a8oMlCP71zYbT-QCA86xYejI0_pzMiHlRSMttqTHbgE";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
