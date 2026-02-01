export const metadata = {
  title: 'Company & Ventures - David Salami',
  description:
    'Building and advising companies focused on infrastructure-grade software.',
}

export default function Company() {
  return (
    <main>
      <section className="bg-tesco-blue text-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h1 className="text-5xl font-bold mb-6">Company & Ventures</h1>
          <p className="text-xl leading-relaxed opacity-95">
            I build and advise companies focused on infrastructure-grade software — systems that must
            function reliably in complex, regulated, or high-risk environments.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-gray-50 p-8 mb-12 border-l-4 border-tesco-magenta">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Current focus</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Taxable.ng — building the first fully digital tax filing platform for Nigerian taxpayers.
            The goal is to simplify compliance without weakening accountability.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-tesco-blue pl-4">
            Past work
          </h2>
          <ul className="space-y-4 text-lg text-gray-700">
            <li className="leading-relaxed flex items-start">
              <span className="text-tesco-magenta mr-3 text-2xl">•</span>
              <span>Founder, Island Digital</span>
            </li>
            <li className="leading-relaxed flex items-start">
              <span className="text-tesco-magenta mr-3 text-2xl">•</span>
              <span>Online manufacturing and logistics systems for large oil & gas operations</span>
            </li>
            <li className="leading-relaxed flex items-start">
              <span className="text-tesco-magenta mr-3 text-2xl">•</span>
              <span>Access control and movement management SaaS for high-risk sites</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-tesco-blue pl-4">
            How I think about building companies
          </h2>
          <ul className="space-y-4 text-lg text-gray-700">
            <li className="leading-relaxed pl-6 border-l-2 border-gray-200 hover:border-tesco-blue transition-colors">
              Start with constraints, not features
            </li>
            <li className="leading-relaxed pl-6 border-l-2 border-gray-200 hover:border-tesco-blue transition-colors">
              Optimize for reliability before growth
            </li>
            <li className="leading-relaxed pl-6 border-l-2 border-gray-200 hover:border-tesco-blue transition-colors">
              Design for operators, not just users
            </li>
            <li className="leading-relaxed pl-6 border-l-2 border-gray-200 hover:border-tesco-blue transition-colors">
              Treat security and compliance as first-class concerns
            </li>
          </ul>
        </div>
      </section>
    </main>
  )
}
