export const metadata = {
  title: 'Company & Ventures - David Salami',
  description:
    'Building and advising companies focused on infrastructure-grade software.',
}

export default function Company() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold text-gray-900 mb-6">Company & Ventures</h1>
      <p className="text-xl text-gray-700 mb-16 leading-relaxed">
        I build and advise companies focused on infrastructure-grade software — systems that must
        function reliably in complex, regulated, or high-risk environments.
      </p>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Current focus</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Taxable.ng — building the first fully digital tax filing platform for Nigerian taxpayers.
          The goal is to simplify compliance without weakening accountability.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Past work</h2>
        <ul className="space-y-4 text-lg text-gray-700">
          <li className="leading-relaxed">Founder, Island Digital</li>
          <li className="leading-relaxed">
            Online manufacturing and logistics systems for large oil & gas operations
          </li>
          <li className="leading-relaxed">
            Access control and movement management SaaS for high-risk sites
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          How I think about building companies
        </h2>
        <ul className="space-y-4 text-lg text-gray-700">
          <li className="leading-relaxed">Start with constraints, not features</li>
          <li className="leading-relaxed">Optimize for reliability before growth</li>
          <li className="leading-relaxed">Design for operators, not just users</li>
          <li className="leading-relaxed">
            Treat security and compliance as first-class concerns
          </li>
        </ul>
      </section>
    </main>
  )
}
