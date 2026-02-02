export const metadata = {
  title: 'Work With Me - David Salami',
  description:
    'Advisory for technology leaders making high-stakes decisions under operational constraints.',
}

export default function Work() {
  return (
    <main>
      <section className="bg-tesco-blue text-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h1 className="text-5xl font-bold mb-6">Work With Me</h1>
          <p className="text-xl leading-relaxed opacity-95">
            Advisory for technology leaders making high-stakes decisions under operational
            constraints.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-16">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            I work with a limited number of clients on questions that require judgment, not just
            execution. If you&apos;re facing decisions where the cost of being wrong is high and
            the path forward is unclear, reach out with specifics.
          </p>
        </div>

        <div className="mb-16 bg-gray-50 p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-tesco-blue pl-4">
            Private Advisory Sessions
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Private advisory sessions are 60 minutes, conducted remotely. We focus on one problem:
            technical architecture decisions, organizational design, vendor evaluation, or security
            and compliance strategy.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            You receive direct guidance based on systems that have operated at scale in complex
            environments. No frameworks, no theory—practical direction you can act on immediately.
          </p>
        </div>

        <div className="mb-16 border-l-4 border-tesco-magenta pl-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Investment</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Sessions are $500 per hour, paid in advance.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Payment confirms your commitment to the work.
          </p>
        </div>

        <div className="mb-16 bg-gray-50 p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-tesco-blue pl-4">
            Payment
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Sessions are $500 per hour, paid in advance.
          </p>

          <div className="space-y-4">
            <a
              href="https://buy.stripe.com/YOUR_PAYMENT_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-tesco-blue text-white text-center py-4 px-6 font-semibold hover:bg-opacity-90 transition-all"
            >
              Pay with Stripe
            </a>

            <a
              href="https://paypal.me/YOUR_PAYPAL_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full border-2 border-gray-300 text-gray-900 text-center py-4 px-6 font-semibold hover:border-gray-400 transition-all"
            >
              Pay with PayPal
            </a>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 border-l-4 border-tesco-blue pl-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Include details about the decision you&apos;re facing, the constraints you&apos;re
            working under, and what you need clarity on.
          </p>
        </div>

        <form
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
          className="bg-gray-50 p-8 space-y-6 mb-16"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-tesco-blue"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-tesco-blue"
            />
          </div>

          <div>
            <label htmlFor="organisation" className="block text-sm font-semibold text-gray-700 mb-2">
              Organisation <span className="text-gray-500 font-normal">(optional)</span>
            </label>
            <input
              type="text"
              id="organisation"
              name="organisation"
              className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-tesco-blue"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-tesco-blue resize-vertical"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-tesco-blue text-white py-3 px-6 font-semibold hover:bg-opacity-90 transition-all"
          >
            Send Message
          </button>
        </form>

        <div className="bg-tesco-blue text-white p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Book a Private Advisory Session</h2>
          <p className="text-lg mb-6 opacity-95">
            60-minute sessions available. Review your specific challenge and receive direct
            guidance.
          </p>
          <a
            href="https://calendly.com/YOUR_CALENDLY_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-tesco-blue px-8 py-3 font-semibold hover:bg-opacity-90 transition-all"
          >
            Schedule Session
          </a>
        </div>
      </section>
    </main>
  )
}
