'use client'

import { FormEvent, useState } from 'react'
import { site } from '@/lib/site'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function NewsletterSignup() {
  const [status, setStatus] = useState<Status>('idle')

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (status === 'sending') return
    const form = event.currentTarget
    const email = String(new FormData(form).get('email') || '')
    setStatus('sending')

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = (await response.json()) as { ok?: boolean; error?: string }
      if (!response.ok || !data.ok) {
        throw new Error(data.error || 'Could not subscribe')
      }
      form.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  const sending = status === 'sending'

  return (
    <section className="section-y bg-cream">
      <p className="t-kicker">Writing</p>
      <h2 className="t-h2 mt-2">New notes, occasionally.</h2>
      <p className="t-lead mt-3">No cadence promises. When something is worth sending, it goes out.</p>
      <form onSubmit={onSubmit} className="mt-6 flex max-w-xl flex-col gap-3 sm:flex-row sm:items-end">
        <label className="block min-w-0 flex-1">
          <span className="field-label">Email</span>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            spellCheck={false}
            inputMode="email"
            placeholder="you@example.com…"
            className="field"
          />
        </label>
        <button type="submit" aria-busy={sending} className="btn-solid">
          {sending ? 'Subscribing…' : 'Subscribe'}
        </button>
      </form>
      <p
        aria-live="polite"
        className={`mt-3 text-[14px] ${status === 'error' ? 'text-red-700' : 'text-sage'}`}
      >
        {status === 'sent' && 'You’re on the list.'}
        {status === 'error' && (
          <>
            The list isn’t available yet. Email{' '}
            <a href={`mailto:${site.email}`} className="underline">
              {site.email}
            </a>{' '}
            in the meantime.
          </>
        )}
      </p>
    </section>
  )
}
