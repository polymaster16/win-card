import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://daygfsatrqolktvbswef.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRheWdmc2F0cnFvbGt0dmJzd2VmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzMzMTQ0ODgsImV4cCI6MTk4ODg5MDQ4OH0.NbQWBhJBmoFeeSiUvBBNGG6w2qg_dhJIR88CBFPevzs'

const database = createClient(supabaseUrl, supabaseAnonKey)

export default database;