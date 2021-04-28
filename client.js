const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(
  "https://feeylixypghiumtqiuco.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxNDg5OTM4OSwiZXhwIjoxOTMwNDc1Mzg5fQ.-s5U5KCAkc-WaWAzjD3qZoSxCNOpxYZ7vjQ_HaGfF3Q",
  {
    detectSessionInUrl: false,
    persistSession: false,
  }
);

module.export = { supabase };