import type { Database } from '@/lib/supabase/types'
import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/client'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const { place_id, type, source, ...extra } = body

    if (!place_id || !type || !source) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const supabase = createClient()

    type LeadInsert = Database['public']['Tables']['leads']['Insert']

    const lead: LeadInsert = {
      place_id: String(place_id),
      type: String(type),
      source: String(source),
      metadata: extra as Record<string, unknown>,
    }

    const { error } = await supabase
      .from('leads')
      .insert([lead] as never)

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Failed to save lead' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true }, { status: 201 })

  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}