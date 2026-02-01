export const metadata = {
  title: 'Speaking - David Salami',
  description:
    'Speaking to technical leaders about building systems that hold up under real conditions.',
}

export default function Speaking() {
  return (
    <main>
      <section className="bg-tesco-blue text-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h1 className="text-5xl font-bold mb-6">Speaking</h1>
          <p className="text-xl leading-relaxed opacity-95">
            I speak to technical leaders, founders, and operators about building systems and
            organizations that hold up under real conditions.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-tesco-magenta pl-4">
            Topics
          </h2>
          <ul className="space-y-4 text-lg text-gray-700">
            <li className="leading-relaxed pl-6 border-l-2 border-gray-200 hover:border-tesco-blue transition-colors">
              Technical leadership at scale
            </li>
            <li className="leading-relaxed pl-6 border-l-2 border-gray-200 hover:border-tesco-blue transition-colors">
              Building software for regulated environments
            </li>
            <li className="leading-relaxed pl-6 border-l-2 border-gray-200 hover:border-tesco-blue transition-colors">
              Security as a systems problem
            </li>
            <li className="leading-relaxed pl-6 border-l-2 border-gray-200 hover:border-tesco-blue transition-colors">
              Decision-making under operational constraints
            </li>
            <li className="leading-relaxed pl-6 border-l-2 border-gray-200 hover:border-tesco-blue transition-colors">
              Scaling teams without losing judgment
            </li>
            <li className="leading-relaxed pl-6 border-l-2 border-gray-200 hover:border-tesco-blue transition-colors">
              When engineering excellence backfires
            </li>
          </ul>
        </div>

        <div className="mb-16 bg-gray-50 p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-tesco-blue pl-4">
            Audience
          </h2>
          <ul className="space-y-4 text-lg text-gray-700">
            <li className="leading-relaxed flex items-start">
              <span className="text-tesco-magenta mr-3 text-2xl">•</span>
              <span>Engineering leaders</span>
            </li>
            <li className="leading-relaxed flex items-start">
              <span className="text-tesco-magenta mr-3 text-2xl">•</span>
              <span>Founders</span>
            </li>
            <li className="leading-relaxed flex items-start">
              <span className="text-tesco-magenta mr-3 text-2xl">•</span>
              <span>Executives</span>
            </li>
            <li className="leading-relaxed flex items-start">
              <span className="text-tesco-magenta mr-3 text-2xl">•</span>
              <span>Technical teams in complex environments</span>
            </li>
          </ul>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-tesco-magenta pl-4">
            Outcome
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed pl-6">
            Audiences leave with clearer mental models, fewer abstractions, and better questions.
          </p>
        </div>

        <div className="bg-tesco-blue text-white p-8">
          <p className="text-xl leading-relaxed">
            Contact:{' '}
            <a href="mailto:hello@davidsalami.com" className="text-white underline decoration-tesco-magenta decoration-2 hover:decoration-4 transition-all">
              hello@davidsalami.com
            </a>
          </p>
        </div>
      </section>
    </main>
  )
}
