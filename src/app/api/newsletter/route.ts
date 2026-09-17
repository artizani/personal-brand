import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'

const bodySchema = z.object({
  email: z.string().email(),
})

export async function POST(request: Request) {
  const parsed = bodySchema.safeParse(await request.json().catch(() => null))
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: 'A valid email is required.' }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY?.trim()
  const from = process.env.RESEND_FROM_EMAIL?.trim()
  const notify = process.env.NEWSLETTER_NOTIFY_EMAIL?.trim() || process.env.NEXT_PUBLIC_EMAIL?.trim()

  if (!apiKey || !from || !notify) {
    // TODO: Set RESEND_API_KEY, RESEND_FROM_EMAIL, and NEWSLETTER_NOTIFY_EMAIL to send signups.
    console.warn('Newsletter stubbed: Resend env is not configured.')
    return NextResponse.json({ ok: true, stubbed: true })
  }

  const resend = new Resend(apiKey)
  const { error } = await resend.emails.send({
    from,
    to: notify,
    subject: `Newsletter signup: ${parsed.data.email}`,
    text: `${parsed.data.email} asked to receive writing updates.`,
  })

  if (error) {
    return NextResponse.json({ ok: false, error: 'Could not subscribe.' }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
