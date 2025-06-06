import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bogmvhadjlngmyxtbgtv.supabase.co"; // your URL
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJvZ212aGFkamxuZ215eHRiZ3R2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg2MTkyODQsImV4cCI6MjA2NDE5NTI4NH0.bDo2qKy0ihdlyJOpA1kZwixduOA7xu7F70IPgQ28LEA";

export const supabase = createClient(supabaseUrl, supabaseKey);
