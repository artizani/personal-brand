export default function Home() {
  return (
    <main>
      <section className="bg-tesco-blue text-white">
        <div className="max-w-4xl mx-auto px-6 py-24">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            I build and scale software systems that operate under real-world constraints.
          </h1>
          <p className="text-2xl leading-relaxed opacity-95">
            Founder and technology leader working at the intersection of infrastructure, security, and
            large-scale operations. I focus on systems that must work — not demos.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 border-l-4 border-tesco-magenta pl-4">
          What I work on
        </h2>
        <ul className="space-y-6 text-lg text-gray-700">
          <li className="leading-relaxed pl-6 border-l-2 border-gray-200 hover:border-tesco-blue transition-colors">
            <span className="font-semibold text-tesco-blue">Company building</span> — founding and
            scaling software businesses
          </li>
          <li className="leading-relaxed pl-6 border-l-2 border-gray-200 hover:border-tesco-blue transition-colors">
            <span className="font-semibold text-tesco-blue">Complex systems</span> —
            infrastructure, access control, logistics, and compliance
          </li>
          <li className="leading-relaxed pl-6 border-l-2 border-gray-200 hover:border-tesco-blue transition-colors">
            <span className="font-semibold text-tesco-blue">Leadership & judgment</span> —
            decision-making at scale
          </li>
        </ul>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 border-l-4 border-tesco-magenta pl-4">
            How I think
          </h2>
          <p className="text-lg text-gray-700 mb-10 leading-relaxed pl-6">
            Selected writing on building and leading systems that don&apos;t get second chances.
          </p>
          <div className="space-y-6">
            <div className="bg-white p-6 border-l-4 border-tesco-blue hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-tesco-blue mb-2">
                Why most technical leadership fails at scale
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Competence doesn&apos;t collapse systems. Poor judgment does.
              </p>
            </div>
            <div className="bg-white p-6 border-l-4 border-tesco-blue hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-tesco-blue mb-2">
                The difference between software that demos well and software that survives reality
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Most teams optimize for the wrong feedback loops.
              </p>
            </div>
            <div className="bg-white p-6 border-l-4 border-tesco-blue hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-tesco-blue mb-2">
                Security is an operational problem, not a tooling problem
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Tools don&apos;t enforce discipline. Systems do.
              </p>
            </div>
            <div className="bg-white p-6 border-l-4 border-tesco-blue hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-tesco-blue mb-2">
                What large organizations actually need from engineers
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Hint: it&apos;s not cleverness.
              </p>
            </div>
            <div className="bg-white p-6 border-l-4 border-tesco-blue hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-tesco-blue mb-2">
                Why infrastructure work is invisible until it breaks
              </h3>
              <p className="text-gray-700 leading-relaxed">
                And why that changes how leaders should think.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 border-l-4 border-tesco-magenta pl-4">
          Proof
        </h2>
        <ul className="space-y-4 text-lg text-gray-700">
          <li className="leading-relaxed flex items-start">
            <span className="text-tesco-magenta mr-3 text-2xl">•</span>
            <span>Founder, Island Digital</span>
          </li>
          <li className="leading-relaxed flex items-start">
            <span className="text-tesco-magenta mr-3 text-2xl">•</span>
            <span>Led delivery of online manufacturing and logistics systems supporting the largest oil &
            gas operation in Sub-Saharan Africa</span>
          </li>
          <li className="leading-relaxed flex items-start">
            <span className="text-tesco-magenta mr-3 text-2xl">•</span>
            <span>Built SaaS-based access control and movement management systems securing large
            industrial sites</span>
          </li>
          <li className="leading-relaxed flex items-start">
            <span className="text-tesco-magenta mr-3 text-2xl">•</span>
            <span>Currently building Taxable.ng, Nigeria&apos;s first digital tax filing platform</span>
          </li>
        </ul>
      </section>

      <section className="bg-tesco-blue text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-2xl leading-relaxed">
            For advisory, speaking, or collaboration:{' '}
            <a href="mailto:hello@davidsalami.com" className="text-white underline decoration-tesco-magenta decoration-2 hover:decoration-4 transition-all">
              hello@davidsalami.com
            </a>
          </p>
        </div>
      </section>
    </main>
  )
}
