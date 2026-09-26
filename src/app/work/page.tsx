import CalendlyEmbed from '@/components/CalendlyEmbed'
import ContactForm from '@/components/ContactForm'
import PaymentButtons from '@/components/PaymentButtons'
import Constellation from '@/components/motion/Constellation'
import { integrations, site } from '@/lib/site'

export const metadata = {
  title: "Advisory & Contact — David Salami | Let's build something consequential.",
  description:
    'Advisory for technology leaders making high-stakes decisions under operational constraints. 60-minute private advisory sessions.',
}

const sessionPrice = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
}).format(1000)

export default function Work() {
  return (
    <main id="main" className="xp">
      <section className="advisory-hero-section" id="hero">
        <div className="container">
          <div className="advisory-hero-content scroll-reveal" data-delay={0}>
            <span className="section-tag-mono">Work with me</span>
            <h1 className="advisory-headline">
              Let&rsquo;s build something
              <br />
              consequential.
            </h1>

            <p className="advisory-hero-description">
              Advisory for technology leaders making high-stakes decisions under operational
              constraints.
            </p>

            <div className="advisory-hero-actions">
              <PaymentButtons />
            </div>
            {(!integrations.stripe || !integrations.paypal) && (
              <p id="payments-unavailable" className="session-price-note mt-4 max-w-xl">
                Payment confirms the session. Stripe and PayPal will be connected here.
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="private-sessions-section dark-theme" id="sessions">
        <div className="container">
          <div className="private-sessions-header scroll-reveal">
            <span className="section-tag-mono">01 — PRIVATE ADVISORY SESSIONS</span>
            <h2 className="private-sessions-title">
              60 minutes, remote, one
              <br />
              problem at a time.
            </h2>
          </div>

          <div className="private-sessions-grid scroll-reveal" data-delay={100}>
            <div className="sessions-narrative">
              <h3 className="session-subtitle">60 minutes, remote, one problem at a time.</h3>
              <p className="session-desc-lead">
                We focus on one specific bottleneck: architecture review, organisational design,
                vendor selection, operational strategy, or technical hiring.
              </p>
              <p className="session-desc-body">
                You receive direct guidance based on systems that have operated at scale in complex
                environments. No frameworks, no theory, just practical direction you can act on
                immediately.
              </p>
            </div>

            <div className="session-price-box">
              <div className="session-price-amount">{sessionPrice}</div>
              <div className="session-price-term">per hour, paid in advance</div>
              <p className="session-price-note">Payment confirms your commitment to the work.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-form-section" id="contact-form">
        <div className="container">
          <div className="contact-form-header scroll-reveal">
            <span className="section-tag-mono">02 — GET IN TOUCH</span>
            <h2 className="section-title form-headline">
              Include the details
              <br />
              that matter.
            </h2>
            <p className="form-subheading">
              The decision you&rsquo;re facing, the constraints you&rsquo;re working under, and
              what you need clarity on.
            </p>
          </div>

          <div className="scroll-reveal" data-delay={100}>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="booking-section" id="booking">
        <div className="container">
          <div className="booking-header scroll-reveal">
            <span className="section-tag-mono">03 — BOOK A 60-MINUTE ADVISORY SESSION</span>
            <h2 className="section-title booking-headline">
              60-minute sessions
              <br />
              available.
            </h2>
            <p className="booking-subheading">Reserve your spot directly on the calendar below.</p>
          </div>

          <div id="book" className="scroll-reveal mb-[4.5rem] scroll-mt-24" data-delay={100}>
            <CalendlyEmbed />
          </div>

          <div className="booking-cta-block scroll-reveal" data-delay={200}>
            <h3 className="booking-cta-title">BOOK A SESSION</h3>
            <p className="booking-cta-desc">
              We focus on one problem: technical architecture decisions, organisational design,
              vendor evaluation, or security and compliance strategy. {sessionPrice} per hour, paid
              in advance.
            </p>

            <div className="booking-cta-actions">
              <PaymentButtons size="wide" />
            </div>
          </div>
        </div>
      </section>

      <section className="footer-cta-section dark-theme" id="footer-cta">
        <div className="container footer-cta-grid">
          <div className="footer-cta-left scroll-reveal">
            <span className="section-tag-mono">GET IN TOUCH //</span>
            <h2 className="footer-cta-title">For advisory, speaking, or collaboration.</h2>
            <p className="footer-cta-desc">
              Open to select board advisory roles, executive coaching for venture-backed founders,
              and keynote speaking engagements on scaling mission-critical systems.
            </p>
            <div className="footer-cta-actions">
              <a href={`mailto:${site.email}`} className="btn btn-white">
                Get in touch
              </a>
              <a
                href={`mailto:${site.email}?subject=${encodeURIComponent('CV request')}`}
                className="btn btn-outline-light"
              >
                Request CV
              </a>
            </div>
          </div>

          <div className="footer-cta-right scroll-reveal" data-delay={200}>
            <Constellation />
          </div>
        </div>
      </section>
    </main>
  )
}
