export const metadata = {
  title: 'Speaking - David Salami',
  description:
    'Speaking to technical leaders about building systems that hold up under real conditions.',
}

export default function Speaking() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold text-gray-900 mb-6">Speaking</h1>
      <p className="text-xl text-gray-700 mb-16 leading-relaxed">
        I speak to technical leaders, founders, and operators about building systems and
        organizations that hold up under real conditions.
      </p>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Topics</h2>
        <ul className="space-y-4 text-lg text-gray-700">
          <li className="leading-relaxed">Technical leadership at scale</li>
          <li className="leading-relaxed">Building software for regulated environments</li>
          <li className="leading-relaxed">Security as a systems problem</li>
          <li className="leading-relaxed">Decision-making under operational constraints</li>
          <li className="leading-relaxed">Scaling teams without losing judgment</li>
          <li className="leading-relaxed">When engineering excellence backfires</li>
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Audience</h2>
        <ul className="space-y-4 text-lg text-gray-700">
          <li className="leading-relaxed">Engineering leaders</li>
          <li className="leading-relaxed">Founders</li>
          <li className="leading-relaxed">Executives</li>
          <li className="leading-relaxed">Technical teams in complex environments</li>
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Outcome</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Audiences leave with clearer mental models, fewer abstractions, and better questions.
        </p>
      </section>

      <section>
        <p className="text-xl text-gray-900 leading-relaxed">
          Contact:{' '}
          <a href="mailto:hello@davidsalami.com" className="text-tesco-blue hover:underline">
            hello@davidsalami.com
          </a>
        </p>
      </section>
    </main>
  )
}
