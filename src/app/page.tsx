export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <section className="mb-24">
        <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
          I build and scale software systems that operate under real-world constraints.
        </h1>
        <p className="text-2xl text-gray-700 leading-relaxed">
          Founder and technology leader working at the intersection of infrastructure, security, and
          large-scale operations. I focus on systems that must work — not demos.
        </p>
      </section>

      <section className="mb-24">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">What I work on</h2>
        <ul className="space-y-4 text-lg text-gray-700">
          <li className="leading-relaxed">
            <span className="font-semibold text-gray-900">Company building</span> — founding and
            scaling software businesses
          </li>
          <li className="leading-relaxed">
            <span className="font-semibold text-gray-900">Complex systems</span> —
            infrastructure, access control, logistics, and compliance
          </li>
          <li className="leading-relaxed">
            <span className="font-semibold text-gray-900">Leadership & judgment</span> —
            decision-making at scale
          </li>
        </ul>
      </section>

      <section className="mb-24">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">How I think</h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Selected writing on building and leading systems that don't get second chances.
        </p>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-tesco-blue mb-2">
              Why most technical leadership fails at scale
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Competence doesn't collapse systems. Poor judgment does.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-tesco-blue mb-2">
              The difference between software that demos well and software that survives reality
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Most teams optimize for the wrong feedback loops.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-tesco-blue mb-2">
              Security is an operational problem, not a tooling problem
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Tools don't enforce discipline. Systems do.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-tesco-blue mb-2">
              What large organizations actually need from engineers
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Hint: it's not cleverness.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-tesco-blue mb-2">
              Why infrastructure work is invisible until it breaks
            </h3>
            <p className="text-gray-700 leading-relaxed">
              And why that changes how leaders should think.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-24">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Proof</h2>
        <ul className="space-y-4 text-lg text-gray-700">
          <li className="leading-relaxed">Founder, Island Digital</li>
          <li className="leading-relaxed">
            Led delivery of online manufacturing and logistics systems supporting the largest oil &
            gas operation in Sub-Saharan Africa
          </li>
          <li className="leading-relaxed">
            Built SaaS-based access control and movement management systems securing large
            industrial sites
          </li>
          <li className="leading-relaxed">
            Currently building Taxable.ng, Nigeria's first digital tax filing platform
          </li>
        </ul>
      </section>

      <section>
        <p className="text-xl text-gray-900 leading-relaxed">
          For advisory, speaking, or collaboration:{' '}
          <a href="mailto:hello@davidsalami.com" className="text-tesco-blue hover:underline">
            hello@davidsalami.com
          </a>
        </p>
      </section>
    </main>
  )
}
