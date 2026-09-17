'use client'

import { FormEvent, useState } from 'react'
import { site } from '@/lib/site'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [error, setError] = useState('')

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') || '')
    const email = String(data.get('email') || '')
    const organisation = String(data.get('organisation') || '')
    const message = String(data.get('message') || '')

    setStatus('sending')
    setError('')

    if (site.formspree) {
      try {
        const response = await fetch(site.formspree, {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: data,
        })
        if (!response.ok) throw new Error('Form service returned an error')
        form.reset()
        setStatus('sent')
      } catch {
        setStatus('error')
        setError('The message could not be sent. Email directly instead.')
      }
      return
    }

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      organisation ? `Organisation: ${organisation}` : '',
      '',
      message,
    ]
      .filter(Boolean)
      .join('\n')

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      `Advisory enquiry from ${name}`,
    )}&body=${encodeURIComponent(body)}`
    setStatus('sent')
  }

  const field =
    'mt-1.5 h-12 w-full border border-black/20 bg-paper px-3 text-[15px] outline-none focus:border-black'
  const label = 'text-[12px] font-bold uppercase tracking-[1px] text-[#4a4a4a]'

  return (
    <form onSubmit={onSubmit} className="mt-8 max-w-4xl space-y-5">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="block">
          <span className={label}>Full name</span>
          <input name="name" required className={field} autoComplete="name" />
        </label>
        <label className="block">
          <span className={label}>Email</span>
          <input type="email" name="email" required className={field} autoComplete="email" />
        </label>
      </div>
      <label className="block">
        <span className={label}>Organisation (optional)</span>
        <input name="organisation" className={field} autoComplete="organization" />
      </label>
      <label className="block">
        <span className={label}>Message</span>
        <textarea name="message" required className={`${field} h-28 p-3`} />
      </label>
      <button type="submit" disabled={status === 'sending'} className="btn-solid disabled:opacity-60">
        {status === 'sending' ? 'Sending…' : 'Send message →'}
      </button>
      {status === 'sent' && (
        <p className="text-[14px] text-sage">
          {site.formspree
            ? 'Message sent. I will follow up directly.'
            : 'Your email client should open with the message ready to send.'}
        </p>
      )}
      {status === 'error' && <p className="text-[14px] text-red-700">{error}</p>}
    </form>
  )
}
