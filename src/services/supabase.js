import { createClient } from '@supabase/supabase-js'
const supabaseUrl = ''
const supabaseKey = import.meta.env.VITE_KEY

export const supabase = createClient(supabaseUrl, supabaseKey);
