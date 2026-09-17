import Link from 'next/link'
import CtaBanner from '@/components/CtaBanner'

const timeline = [
  {
    tag: 'Building systems',
    title: 'Industrial operations, at national scale',
    desc: 'Led delivery of the online manufacturing and logistics systems supporting the largest oil and gas operation in Sub-Saharan Africa, software with no room for downtime.',
    why: 'it proved that software could hold up under industrial grade constraints, not just demo well.',
  },
  {
    tag: 'Security & access',
    title: 'Movement management for high-risk sites',
    desc: 'Built SaaS based access control and movement management systems securing large industrial sites, treating security as an operational discipline rather than a bolt on tool.',
    why: 'it shaped a conviction that security is a systems problem, not a checklist.',
  },
  {
    tag: 'Company building',
    title: 'Founder, Islands Digital',
    desc: 'Founded Islands Digital, a technology company building software and digital infrastructure for organizations operating under real constraints.',
    why: 'it moved the work from delivering systems for others to building a company around that judgment.',
  },
  {
    tag: 'Current',
    title: 'Building Taxable.ng',
    desc: "Currently building Taxable.ng, Nigeria's first fully digital tax filing platform, designed to simplify compliance without weakening accountability.",
    why: "it's the same problem in a new form: making a high stakes, regulated system genuinely usable.",
  },
]

export const metadata = {
  title: 'About — David Salami',
  description:
    'Technology leader and founder focused on systems that operate in the real world.',
}

export default function About() {
  return (
    <main>
      <section className="section-y bg-cream">
        <div className="mx-auto grid max-w-site items-center gap-10 lg:grid-cols-[1fr_280px]">
          <div>
            <p className="page-label">
              <span className="h-px w-6 bg-black" />
              <span className="pl-3">About</span>
            </p>
            <h1 className="t-h1 text-[#1a1a1a]">
              Founder.
              <br />
              Builder.
              <br />
              Operator.
            </h1>
            <p className="t-lead mt-4">
              David Salami is a technology leader and founder focused on systems that operate in the
              real world, where failure has cost, complexity is unavoidable and constraints are
              non-negotiable.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/work/" className="btn-solid">
                Work with me →
              </Link>
              <a href="#introduction" className="btn-outline">
                About David
              </a>
            </div>
          </div>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[280px] overflow-hidden rounded-xl">
            <img
              src="/images/portrait-about.png"
              alt="David Salami"
              className="absolute inset-0 size-full object-cover"
            />
          </div>
        </div>
      </section>

      <section id="introduction" className="section-y scroll-mt-20 bg-night text-white">
        <div className="mx-auto grid max-w-site items-start gap-10 lg:grid-cols-[minmax(0,1fr)_220px]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-white/60">
              Introduction
            </p>
            <h2 className="t-h2 mt-4 text-white">Building technology that survives reality.</h2>
            <p className="mt-4 max-w-2xl text-[15px] leading-6 text-white/75">
              David is a technology leader and founder focused on systems that operate in the real
              world, where failure has cost, complexity is unavoidable and constraints are
              non-negotiable.
            </p>
            <p className="mt-3 max-w-2xl text-[15px] leading-6 text-white/75">
              His work spans infrastructure, security, logistics and compliance heavy environments,
              building software that supports large organizations and critical operations.
            </p>
          </div>
          <dl className="space-y-5 lg:pt-8">
            <div>
              <dt className="text-[13px] text-white/55">Currently building</dt>
              <dd className="mt-1 text-[15px] font-semibold">Taxable.ng</dd>
            </div>
            <div>
              <dt className="text-[13px] text-white/55">Founder</dt>
              <dd className="mt-1 text-[15px] font-semibold">Islands Digital</dd>
            </div>
            <div>
              <dt className="text-[13px] text-white/55">Focus</dt>
              <dd className="mt-1 text-[15px] font-semibold">
                Technology, Infrastructure, Company building
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="section-y bg-white">
        <h2 className="t-h2 max-w-lg">The work has always been about building at scale.</h2>
        <div className="mt-8 space-y-7">
          {timeline.map((item) => (
            <article key={item.title} className="flex gap-4">
              <span className="mt-1.5 size-2 shrink-0 rounded-full border-2 border-[#4d4d4d]" />
              <div>
                <p className="t-kicker">{item.tag}</p>
                <h3 className="t-h3 mt-1">{item.title}</h3>
                <p className="mt-1.5 max-w-xl text-[14px] leading-6 text-sage">{item.desc}</p>
                <p className="mt-1 max-w-xl text-[13px] italic text-[#9a9a9a]">
                  Why it mattered: {item.why}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-y bg-night text-white">
        <p className="text-[11px] uppercase tracking-[0.08em] text-white/60">What I build</p>
        <h2 className="t-h2 mt-2 max-w-md text-white">I work where technology meets complexity.</h2>
        <div className="mt-8 grid gap-px bg-[#262626] sm:grid-cols-2 lg:grid-cols-4">
          {[
            ['Software', "Building products and platforms designed around real user and business problems, not around what's easy to ship."],
            ['Infrastructure', 'Designing systems capable of supporting complex operational environments, from logistics to manufacturing to national scale processes.'],
            ['Security', 'Treating security as an operational and organizational problem, a discipline systems enforce rather than a tool bolted on.'],
            ['Companies', 'Turning technology and ideas into durable businesses, from Islands Digital to Taxable.ng.'],
          ].map(([title, body]) => (
            <div key={title} className="bg-white p-5 text-black">
              <h3 className="t-h3">{title}</h3>
              <p className="mt-2 text-[13px] leading-5 text-sage">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-y bg-white">
        <p className="t-kicker">Current focus</p>
        <h2 className="t-h2 mt-2">What I&apos;m building now.</h2>
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <article className="border border-[#e5e5e5] p-6">
            <div className="mb-4 flex justify-between">
              <span className="font-mono text-[13px] text-sage">01</span>
              <span className="border border-black px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.05em]">
                Building
              </span>
            </div>
            <h3 className="t-h3">Taxable.ng</h3>
            <p className="mt-2 text-[14px] leading-6 text-sage">
              Building a tax filing platform for the Nigerian market — designing and shipping the
              product end to end, from infrastructure to interface.
            </p>
          </article>
          <article className="border border-[#e5e5e5] p-6">
            <div className="mb-4 flex justify-between">
              <span className="font-mono text-[13px] text-sage">02</span>
              <span className="border border-black px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.05em]">
                Advisory
              </span>
            </div>
            <h3 className="t-h3">Advisory &amp; speaking</h3>
            <p className="mt-2 text-[14px] leading-6 text-sage">
              Advising teams working on complex, high-stakes systems — helping them make sound
              decisions where the cost of getting it wrong compounds.
            </p>
          </article>
        </div>
        <p className="t-lead mt-6">
          Away from the day-to-day of building, David spends time on the same questions in different
          forms — advising teams navigating similar constraints, and writing publicly about what the
          work teaches him. Little of it is separate from the work; most of it feeds back into it.
        </p>
      </section>

      <CtaBanner />
    </main>
  )
}
