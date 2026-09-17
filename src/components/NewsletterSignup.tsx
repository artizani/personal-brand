'use client'

import { FormEvent, useState } from 'react'

export default function NewsletterSignup() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [message, setMessage] = useState('')

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const email = String(new FormData(form).get('email') || '')
    setStatus('sending')
    setMessage('')

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
      setMessage('You are on the list.')
    } catch {
      setStatus('error')
      setMessage('The list is not available yet. Email me directly in the meantime.')
    }
  }

  return (
    <section className="section-y bg-cream">
      <p className="t-kicker">Writing</p>
      <h2 className="t-h2 mt-2">New notes, occasionally.</h2>
      <p className="t-lead mt-3">No cadence promises. When something is worth sending, it goes out.</p>
      <form onSubmit={onSubmit} className="mt-6 flex max-w-xl flex-col gap-3 sm:flex-row sm:items-end">
        <label className="block min-w-0 flex-1">
          <span className="text-[12px] font-bold uppercase tracking-[1px] text-[#4a4a4a]">Email</span>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            className="mt-1.5 h-12 w-full border border-black/20 bg-paper px-3 text-[15px] outline-none focus:border-black"
          />
        </label>
        <button type="submit" disabled={status === 'sending'} className="btn-solid disabled:opacity-60">
          {status === 'sending' ? 'Sending…' : 'Subscribe'}
        </button>
      </form>
      {message ? <p className="mt-3 text-[14px] text-sage">{message}</p> : null}
    </section>
  )
}
