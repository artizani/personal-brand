import CtaBanner from '@/components/CtaBanner'
import { site } from '@/lib/site'

const topics = [
  { num: '01', label: 'Technical leadership at scale' },
  { num: '02', label: 'Building software for regulated environments' },
  { num: '03', label: 'Security as a systems problem' },
  { num: '04', label: 'Decision-making under operational constraints' },
  { num: '05', label: 'Founder lessons from building in emerging markets' },
  { num: '06', label: 'What infrastructure-grade software actually requires' },
]

export const metadata = {
  title: 'Speaking — David Salami',
  description:
    'Speaking to technical leaders about building systems that hold up under real conditions.',
}

export default function Speaking() {
  return (
    <main>
      <section className="section-y bg-cream">
        <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="page-label">
              <span className="h-px w-6 bg-black" />
              <span className="pl-3">Speaking</span>
            </p>
            <h1 className="t-h1 text-[#1a1a1a]">Ideas worth putting in the room.</h1>
            <p className="t-lead mt-4">
              David speaks about technology leadership, infrastructure, company building, security,
              and operating complex systems.
            </p>
            <a
              href={`mailto:${site.email}?subject=${encodeURIComponent('Speaking invitation')}`}
              className="btn-solid mt-6"
            >
              Invite David to Speak →
            </a>
          </div>
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg">
            <img
              src="/images/speaking.jpg"
              alt="David Salami speaking"
              className="absolute left-[-8%] top-0 h-full w-[116%] max-w-none object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section-y bg-night text-white">
        <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-white/70">Topics</p>
        <h2 className="t-h2 mt-2 max-w-2xl text-white">
          Six areas drawn directly from work on systems that don&apos;t get second chances.
        </h2>
        <div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => (
            <article
              key={topic.num}
              className="rounded-[5px] border border-black/20 bg-white px-5 py-5 text-black"
            >
              <p className="font-mono text-[18px] font-medium tracking-[-0.04em] text-sage">
                {topic.num}
              </p>
              <p className="mt-2 text-[15px] leading-6">{topic.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-y bg-white">
        <p className="t-kicker border-b border-black/20 pb-3">Audience</p>
        <h2 className="t-h2 mt-5">Who these talks are built for.</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {[
            'Engineering leaders',
            'Founders',
            'Executives',
            'Technical teams in complex environments',
          ].map((label) => (
            <span
              key={label}
              className="inline-flex items-center rounded-full border border-black/30 px-5 py-2.5 text-[14px] font-medium"
            >
              {label}
            </span>
          ))}
        </div>
      </section>

      <section className="bg-white px-6 pb-12 lg:px-16">
        <p className="t-kicker border-b border-black/20 pb-3">Outcome</p>
        <div className="relative mt-6 border-b border-r border-black/10 bg-paper py-6 pl-8 pr-6">
          <div className="absolute bottom-0 left-0 top-0 w-1 bg-[#102e6b]" />
          <p className="t-h3 max-w-3xl text-[#111]">
            Audiences leave with clearer mental models, fewer abstractions, and better questions.
          </p>
        </div>
      </section>

      <CtaBanner />
    </main>
  )
}
