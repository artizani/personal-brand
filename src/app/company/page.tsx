import BrandLogos from '@/components/BrandLogos'
import CtaBanner from '@/components/CtaBanner'

const principles = [
  'Start with constraints, not features',
  'Optimize for reliability before growth',
  'Design for operators, not just users',
  'Treat security and compliance as first-class concerns',
]

export const metadata = {
  title: 'Company & Ventures — David Salami',
  description: 'Building and advising companies focused on infrastructure-grade software.',
}

export default function Company() {
  return (
    <main>
      <section className="section-y bg-cream">
        <p className="page-label">
          <span className="h-px w-6 bg-black" />
          <span className="pl-3">Company</span>
        </p>
        <h1 className="t-h1">Company &amp; Ventures.</h1>
        <p className="t-lead mt-4">
          I build and advise companies focused on infrastructure-grade software — systems that must
          function reliably in complex, regulated, or high-risk environments.
        </p>
      </section>

      <section className="section-y bg-night text-white">
        <p className="text-[11px] uppercase tracking-[0.08em] text-white/60">Company</p>
        <p className="mt-2 text-[13px] text-white/60">Founder</p>
        <div className="mt-2 flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
          <div>
            <h2 className="t-h2 text-white">Islands Digital</h2>
            <p className="mt-3 max-w-xl text-[15px] leading-6 text-white/75">
              Built and scaled a digital product agency focused on systems engineering and
              high-fidelity interfaces. Led a distributed team delivering infrastructure solutions
              for enterprise clients.
            </p>
            <a
              href="https://islands.digital"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex border border-[#4d4d4d] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.05em]"
            >
              View website
            </a>
          </div>
          <p className="font-display text-[22px] font-extrabold tracking-tight text-white/90 lg:text-right">
            ISLANDS DIGITAL
          </p>
        </div>
      </section>

      <section className="section-y bg-white">
        <p className="page-label">
          <span className="h-px w-4 bg-black" />
          <span className="pl-3">Current focus</span>
        </p>
        <h2 className="t-h2">Building Taxable.ng</h2>
        <article className="mt-6 flex flex-wrap items-start justify-between gap-4 border-t border-[#e5e5e5] py-6">
          <div className="max-w-xl">
            <p className="t-kicker">Building systems</p>
            <h3 className="t-h3 mt-1">Taxable.ng</h3>
            <p className="mt-2 text-[14px] leading-6 text-sage">
              Building the first fully digital tax filing platform for Nigerian taxpayers. The goal
              is to simplify compliance without weakening accountability.
            </p>
          </div>
          <a href="https://taxable.ng" target="_blank" rel="noopener noreferrer" className="btn-outline h-9 text-[11px]">
            View Taxable website
          </a>
        </article>
        <article className="flex flex-wrap items-start justify-between gap-4 border-y border-[#e5e5e5] py-6">
          <div className="max-w-xl">
            <p className="t-kicker">Financial software</p>
            <h3 className="t-h3 mt-1">Truss.ng</h3>
            <p className="mt-2 text-[14px] leading-6 text-sage">
              The non custodial reliability layer for African payment rails. We hold the record,
              reconcile against settlement truth and surface what silently fails, without ever
              touching your money.
            </p>
          </div>
          <a href="https://truss.ng" target="_blank" rel="noopener noreferrer" className="btn-outline h-9 text-[11px]">
            View Truss website
          </a>
        </article>
      </section>

      <section className="bg-white px-6 pb-12 lg:px-16">
        <p className="page-label">
          <span className="h-px w-4 bg-black" />
          <span className="pl-3">Past product</span>
        </p>
        <h2 className="t-h2">Ventures &amp; systems built.</h2>
        <div className="mt-8 space-y-8">
          <article className="flex flex-wrap justify-between gap-6">
            <div className="max-w-xl">
              <p className="t-kicker">Building systems</p>
              <h3 className="t-h3 mt-1">Industrial operations, at national scale</h3>
              <p className="mt-2 text-[14px] leading-6 text-sage">
                Led delivery of the online manufacturing and logistics systems supporting the
                largest oil and gas operation in Sub-Saharan Africa. Software with no room for
                downtime.
              </p>
            </div>
            <div className="relative h-8 w-[70px] shrink-0">
              <img
                src="/images/dangote.png"
                alt="Dangote"
                className="absolute inset-0 size-full object-contain"
              />
            </div>
          </article>
          <article>
            <p className="t-kicker">Security &amp; access</p>
            <h3 className="t-h3 mt-1">Movement management for high risk sites</h3>
            <p className="mt-2 max-w-xl text-[14px] leading-6 text-sage">
              Built SaaS-based access control and movement management systems securing large
              industrial sites — treating security as an operational discipline rather than a
              bolt-on tool.
            </p>
          </article>
        </div>
      </section>

      <section className="section-y bg-cream">
        <p className="t-kicker">At a glance</p>
        <h2 className="t-h2 mt-2">Brands I&apos;ve worked with</h2>
        <div className="mt-6">
          <BrandLogos extra />
        </div>
      </section>

      <section className="section-y bg-white">
        <h2 className="t-h2">How I think about building companies.</h2>
        <ol className="mt-6 space-y-2">
          {principles.map((label, i) => (
            <li key={label} className="flex items-center gap-4 bg-[#f7f7f7] px-5 py-3.5">
              <span className="font-display text-[13px] font-extrabold text-[#c9c9c9]">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="text-[14px] font-semibold">{label}</span>
            </li>
          ))}
        </ol>
      </section>

      <CtaBanner />
    </main>
  )
}
