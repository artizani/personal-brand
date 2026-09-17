import CtaBanner from '@/components/CtaBanner'
import CalendlyEmbed from '@/components/CalendlyEmbed'
import ContactForm from '@/components/ContactForm'
import PaymentButtons from '@/components/PaymentButtons'
import { integrations } from '@/lib/site'

export const metadata = {
  title: 'Work With Me — David Salami',
  description:
    'Advisory for technology leaders making high-stakes decisions under operational constraints.',
}

export default function Work() {
  return (
    <main>
      <section className="section-y bg-cream">
        <p className="page-label">
          <span className="h-px w-6 bg-black" />
          <span className="pl-3">Work with me</span>
        </p>
        <h1 className="t-h1 max-w-2xl">Let&apos;s build something consequential.</h1>
        <p className="t-lead mt-4">
          Advisory for technology leaders making high-stakes decisions under operational
          constraints.
        </p>
        <div id="payments" className="mt-7">
          <PaymentButtons />
          {!integrations.stripe && !integrations.paypal && (
            <p className="mt-3 max-w-xl text-[13px] leading-5 text-muted">
              Payment confirms the session. Stripe and PayPal will be connected here.
            </p>
          )}
        </div>
      </section>

      <section className="section-y bg-night text-white">
        <p className="text-[12px] uppercase tracking-[0.06em] text-white/70">
          01 — Private advisory sessions
        </p>
        <h2 className="t-h2 mt-4 max-w-2xl text-white">
          60 minutes, remote, one problem at a time.
        </h2>
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.3fr_1fr]">
          <div className="border-white/40 lg:border-r lg:pr-8">
            <p className="text-[15px] leading-6 text-white/85">
              We focus on one problem: technical architecture decisions, organizational design,
              vendor evaluation, or security and compliance strategy.
            </p>
            <p className="mt-3 text-[15px] leading-6 text-white/85">
              You receive direct guidance based on systems that have operated at scale in complex
              environments. No frameworks, no theory — practical direction you can act on
              immediately.
            </p>
          </div>
          <div>
            <p className="font-display text-[36px] font-bold leading-none">$1000</p>
            <p className="mt-3 text-[15px] leading-6 text-white/80">
              per hour, paid in advance.
              <br />
              Payment confirms your commitment to the work.
            </p>
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <p className="t-kicker border-b border-black/20 pb-3">03 — Get in Touch</p>
        <h2 className="t-h2 mt-6 max-w-xl">Include the details that matter.</h2>
        <p className="t-lead mt-3">
          The decision you&apos;re facing, the constraints you&apos;re working under, and what you
          need clarity on.
        </p>
        <ContactForm />
      </section>

      <section id="book" className="section-y scroll-mt-20 bg-paper">
        <p className="t-kicker border-b border-black/20 pb-3">04 — Book a private advisory session</p>
        <h2 className="t-h2 mt-6">60-minute sessions available.</h2>
        <p className="mt-3 text-[15px] text-sage">
          Review your specific challenge and receive direct guidance.
        </p>
        <div className="mt-6">
          <CalendlyEmbed />
        </div>
        <h3 className="t-h3 mt-10">Book a session</h3>
        <p className="mt-2 max-w-xl text-[14px] leading-6 text-[#5a667a]">
          We focus on one problem: technical architecture decisions, organizational design, vendor
          evaluation, or security and compliance strategy. Pay to confirm, then pick a time.
        </p>
        <div className="mt-6">
          <PaymentButtons size="wide" />
        </div>
      </section>

      <CtaBanner />
    </main>
  )
}
