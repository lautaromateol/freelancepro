
import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://tnljsdwixndlvufausjp.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRubGpzZHdpeG5kbHZ1ZmF1c2pwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU4ODIzMTMsImV4cCI6MjAzMTQ1ODMxM30.MRG2yQ-NatwHJYiE_q3mTERoPyln2zOJc75w7guM1Qs"
export const supabase = createClient(supabaseUrl, supabaseKey)