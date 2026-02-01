export const metadata = {
  title: 'About - David Salami',
  description:
    'Technology leader and founder focused on systems that operate in the real world.',
}

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold text-gray-900 mb-6">About</h1>
      <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
        <p>
          I'm a technology leader and founder focused on systems that operate in the real world —
          where failure has cost, complexity is unavoidable, and constraints are non-negotiable.
        </p>
        <p>
          I've worked across infrastructure, security, logistics, and compliance-heavy
          environments, building software that supports large organizations and critical operations.
        </p>
      </div>

      <section className="mt-16 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Beliefs</h2>
        <ul className="space-y-4 text-lg text-gray-700">
          <li className="leading-relaxed">
            Technology should reduce risk, not just increase speed
          </li>
          <li className="leading-relaxed">
            Leadership is the ability to make good decisions with incomplete information
          </li>
          <li className="leading-relaxed">
            Systems that last are built deliberately, not optimistically
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Current focus</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Building Taxable.ng and advising teams working on complex, high-stakes systems.
        </p>
      </section>
    </main>
  )
}
