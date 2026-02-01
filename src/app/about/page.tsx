export const metadata = {
  title: 'About - David Salami',
  description:
    'Technology leader and founder focused on systems that operate in the real world.',
}

export default function About() {
  return (
    <main>
      <section className="bg-tesco-blue text-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h1 className="text-5xl font-bold mb-6">About</h1>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-8 text-lg text-gray-700 leading-relaxed mb-16">
          <p className="pl-6 border-l-4 border-tesco-blue">
            I'm a technology leader and founder focused on systems that operate in the real world —
            where failure has cost, complexity is unavoidable, and constraints are non-negotiable.
          </p>
          <p className="pl-6 border-l-4 border-tesco-magenta">
            I've worked across infrastructure, security, logistics, and compliance-heavy
            environments, building software that supports large organizations and critical operations.
          </p>
        </div>

        <div className="mb-16 bg-gray-50 p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-tesco-magenta pl-4">
            Beliefs
          </h2>
          <ul className="space-y-4 text-lg text-gray-700">
            <li className="leading-relaxed pl-6 border-l-2 border-gray-200 hover:border-tesco-blue transition-colors">
              Technology should reduce risk, not just increase speed
            </li>
            <li className="leading-relaxed pl-6 border-l-2 border-gray-200 hover:border-tesco-blue transition-colors">
              Leadership is the ability to make good decisions with incomplete information
            </li>
            <li className="leading-relaxed pl-6 border-l-2 border-gray-200 hover:border-tesco-blue transition-colors">
              Systems that last are built deliberately, not optimistically
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4 border-l-4 border-tesco-blue pl-4">
            Current focus
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed pl-6">
            Building Taxable.ng and advising teams working on complex, high-stakes systems.
          </p>
        </div>
      </section>
    </main>
  )
}
