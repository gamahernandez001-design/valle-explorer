export type Database = {
  public: {
    Tables: {
      leads: {
        Row: {
          id: string
          place_id: string
          type: string
          source: string
          metadata: Record<string, unknown> | null
          created_at: string
        }
        Insert: {
          id?: string
          place_id: string
          type: string
          source: string
          metadata?: Record<string, unknown> | null
          created_at?: string
        }
        Update: {
          id?: string
          place_id?: string
          type?: string
          source?: string
          metadata?: Record<string, unknown> | null
          created_at?: string
        }
      }
    }
    Views: Record<string, never>
    Functions: Record<string, never>
    Enums: Record<string, never>
  }
}