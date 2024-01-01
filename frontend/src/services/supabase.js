import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://trjlwshwwjzcylxkioix.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRyamx3c2h3d2p6Y3lseGtpb2l4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQxMzgyOTQsImV4cCI6MjAxOTcxNDI5NH0.-4rRo26MjxhrmSsAz6Lq5zMxcMM7XcOelj8YxAT5w0k";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
