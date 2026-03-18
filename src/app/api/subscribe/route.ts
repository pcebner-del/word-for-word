import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(req: NextRequest) {
  let body: { email?: string }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  const { email } = body

  if (!email || typeof email !== 'string' || !EMAIL_REGEX.test(email.trim())) {
    return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
  }

  const { error } = await supabase
    .from('email_signups')
    .insert({ email: email.trim().toLowerCase() })

  if (error) {
    // Duplicate email — treat as success
    if (error.code === '23505') {
      return NextResponse.json({ success: true, message: 'Already subscribed' })
    }
    console.error('Supabase insert error:', error)
    return NextResponse.json({ error: 'Failed to subscribe. Please try again.' }, { status: 500 })
  }

  return NextResponse.json({ success: true, message: 'Subscribed successfully' })
}
