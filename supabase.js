import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

// GANTI INI
const supabaseUrl = "https://fsoiasxkkjqdajygqwmx.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzb2lhc3hra2pxZGFqeWdxd214Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODExODk3NDIsImV4cCI6MjA5Njc2NTc0Mn0.VLQ7YFJU3eFd9zNI7Z51Z0Qg-YKezVTic6AFWRv3mtE";

export const supabase = createClient(supabaseUrl, supabaseKey);