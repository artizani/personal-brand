export const metadata = {
  title: 'Writing - David Salami',
  description:
    'Essays on technology, leadership, and systems that operate under pressure.',
}

export default function Writing() {
  const essays = [
    'Most software fails because the environment was ignored',
    'Scaling teams is harder than scaling systems',
    'Why "best practices" collapse under real constraints',
    'Security work is leadership work',
    'The hidden cost of operational shortcuts',
    'When technical excellence becomes a liability',
    'Building for regulators, not just users',
    'Why serious systems require slower thinking',
  ]

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold text-gray-900 mb-6">Writing</h1>
      <p className="text-xl text-gray-700 mb-12 leading-relaxed">
        I write occasional essays on technology, leadership, and systems that operate under
        pressure. These are working notes, not hot takes.
      </p>

      <ul className="space-y-6">
        {essays.map((essay, index) => (
          <li key={index}>
            <h2 className="text-2xl font-semibold text-tesco-blue">{essay}</h2>
          </li>
        ))}
      </ul>
    </main>
  )
}
