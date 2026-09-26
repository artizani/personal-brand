'use client'

import { FormEvent, useEffect, useRef, useState } from 'react'
import { site } from '@/lib/site'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [dirty, setDirty] = useState(false)
  const statusRef = useRef<HTMLParagraphElement>(null)

  // Warn before leaving with an unsent message.
  useEffect(() => {
    if (!dirty || status === 'sent') return
    const warn = (event: BeforeUnloadEvent) => {
      event.preventDefault()
      event.returnValue = ''
    }
    window.addEventListener('beforeunload', warn)
    return () => window.removeEventListener('beforeunload', warn)
  }, [dirty, status])

  useEffect(() => {
    if (status === 'error') statusRef.current?.focus()
  }, [status])

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (status === 'sending') return
    const form = event.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') || '')
    const email = String(data.get('email') || '')
    const organisation = String(data.get('organisation') || '')
    const message = String(data.get('message') || '')

    setStatus('sending')

    if (site.formspree) {
      try {
        const response = await fetch(site.formspree, {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: data,
        })
        if (!response.ok) throw new Error('Form service returned an error')
        form.reset()
        setDirty(false)
        setStatus('sent')
      } catch {
        setStatus('error')
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
    setDirty(false)
    setStatus('sent')
  }

  const sending = status === 'sending'

  return (
    <form onSubmit={onSubmit} onChange={() => setDirty(true)} className="mt-8 max-w-4xl space-y-5">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="block">
          <span className="field-label">Full Name</span>
          <input
            name="name"
            required
            className="field"
            autoComplete="name"
            spellCheck={false}
            placeholder="Jane Doe…"
          />
        </label>
        <label className="block">
          <span className="field-label">Email</span>
          <input
            type="email"
            name="email"
            required
            className="field"
            autoComplete="email"
            spellCheck={false}
            inputMode="email"
            placeholder="jane@company.com…"
          />
        </label>
      </div>
      <label className="block">
        <span className="field-label">Organisation (Optional)</span>
        <input
          name="organisation"
          className="field"
          autoComplete="organization"
          spellCheck={false}
          placeholder="Acme Ltd…"
        />
      </label>
      <label className="block">
        <span className="field-label">Message</span>
        <textarea
          name="message"
          required
          className="field h-28 p-3"
          placeholder="What you’re working on and where you need help…"
        />
      </label>
      <button type="submit" aria-busy={sending} className="btn-solid">
        {sending ? 'Sending…' : 'Send Message →'}
      </button>
      <p
        ref={statusRef}
        tabIndex={-1}
        aria-live="polite"
        className={`text-[14px] ${status === 'error' ? 'text-red-700' : 'text-sage'}`}
      >
        {status === 'sent' &&
          (site.formspree
            ? 'Message sent. You’ll hear back directly.'
            : 'Your email client should open with the message ready to send.')}
        {status === 'error' && (
          <>
            The message could not be sent. Email{' '}
            <a href={`mailto:${site.email}`} className="underline">
              {site.email}
            </a>{' '}
            directly instead.
          </>
        )}
      </p>
    </form>
  )
}
