import Link from 'next/link'
import BrandLogos from '@/components/BrandLogos'
import CtaBanner from '@/components/CtaBanner'
import { getPosts } from '@/lib/posts'
import { site } from '@/lib/site'

const companies = [
  {
    name: 'Islands Digital',
    role: 'Founder',
    body: 'A technology company building software and digital infrastructure, including manufacturing and logistics systems for large scale industrial operations, and access control and movement management platforms for high risk sites.',
  },
  {
    name: 'Taxable.ng',
    role: 'Founder / Builder',
    body: "Nigeria's first fully digital tax filing platform. Built to simplify compliance for taxpayers without weakening accountability.",
  },
  {
    name: 'Truss.ng',
    role: 'Founder / Builder',
    body: 'The non custodial reliability layer for African payment rails. We hold the record, reconcile against settlement truth and surface what silently fails, without ever touching your money.',
  },
]

const stakes = [
  {
    num: '01',
    tag: 'Company',
    title: 'Founder, Islands Digital',
    body: 'Built and scaled a digital product agency focused on systems engineering and high-fidelity interfaces. Led a distributed team delivering infrastructure solutions for enterprise clients.',
  },
  {
    num: '02',
    tag: 'Infrastructure',
    title: 'Online manufacturing & logistics systems',
    body: 'Architected end to end operational software for distributed manufacturing. Replaced legacy monolithic structures with micro services, improving throughput by 40%.',
  },
  {
    num: '03',
    tag: 'Product',
    title: 'Taxable.ng',
    body: 'Spearheaded product design and technical architecture for a tax compliance platform built for SME ecosystems in emerging markets.',
  },
]

export default function Home() {
  const posts = getPosts()

  return (
    <main>
      <section className="bg-cream px-6 pb-12 pt-8 lg:px-16 lg:pb-14 lg:pt-10">
        <div className="mx-auto grid max-w-site items-start gap-10 lg:grid-cols-[240px_1fr] lg:gap-14">
          <aside className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="relative size-16 shrink-0 overflow-hidden rounded-full">
                <img
                  src="/images/avatar.png"
                  alt="David Salami"
                  className="absolute inset-0 size-full object-cover"
                />
              </div>
              <div>
                <p className="text-[16px] font-semibold leading-5 text-body">David Salami</p>
                <p className="mt-1 text-[13px] leading-4 text-muted">CEO, Founder</p>
                <div className="mt-2 flex gap-2">
                  <a href={site.twitter} className="relative block size-4" aria-label="X">
                    <img src="/images/icon-social-1.svg" alt="" className="absolute inset-0 size-4" />
                  </a>
                  <a href={site.instagram} className="relative block size-4" aria-label="Instagram">
                    <img src="/images/icon-social-2.svg" alt="" className="absolute inset-0 size-4" />
                  </a>
                  <a href={site.linkedin} className="relative block size-4" aria-label="LinkedIn">
                    <img src="/images/icon-social-3.svg" alt="" className="absolute inset-0 size-4" />
                  </a>
                </div>
              </div>
            </div>
            <dl className="max-w-[240px]">
              <div className="border-t border-gray-200 py-3">
                <dt className="t-kicker">Role</dt>
                <dd className="mt-1.5 text-[14px] leading-5">Founder &amp; Technology Leader</dd>
              </div>
              <div className="border-t border-gray-200 py-3">
                <dt className="t-kicker">Focus</dt>
                <dd className="mt-1.5 text-[14px] leading-5">Infrastructure · Security · Operations</dd>
              </div>
              <div className="border-t border-gray-200 py-3">
                <dt className="t-kicker">Contact</dt>
                <dd className="mt-1.5">
                  <a href={`mailto:${site.profileEmail}`} className="text-[14px] leading-5">
                    {site.profileEmail}
                  </a>
                </dd>
              </div>
            </dl>
          </aside>

          <div>
            <h1 className="t-h1 max-w-[42rem] text-black">
              <span className="t-chip">Founder</span>
              {' '}
              &amp; growth executive building companies that turn complex, real-world markets into
              scalable products &amp; durable revenue.
            </h1>
            <p className="t-lead mt-5">
              I work at the intersection of technology, infrastructure, regulation, and
              growth—turning difficult market problems into products and businesses built to scale.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link href="/work/" className="btn-solid">
                Work with me →
              </Link>
              <Link href="/about/" className="btn-outline">
                About David
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <p className="t-kicker">At a glance</p>
        <h2 className="t-h2 mt-2 text-ink">Brands I&apos;ve worked with</h2>
        <div className="mt-7">
          <BrandLogos />
        </div>
      </section>

      <section className="section-y bg-night text-white">
        <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-white/70">At a glance</p>
        <h2 className="t-h2 mt-2 text-white">
          Built for scale<span className="text-gold">.</span>
        </h2>
        <div className="mt-6 grid border-t border-white/30 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ['Founder', 'Islands Digital'],
            ['Currently building', 'Taxable.ng'],
            ['Focus', 'Technology · Infrastructure · Security · Operations'],
            ['Markets', 'Nigeria · Sub-Saharan Africa'],
          ].map(([label, value], i) => (
            <div
              key={label}
              className={`border-white/30 py-6 ${i < 3 ? 'lg:border-r lg:pr-6' : ''} ${
                i > 0 ? 'lg:pl-6' : ''
              }`}
            >
              <p className="text-[11px] uppercase tracking-[1.2px] text-white/70">{label}</p>
              <p className="mt-1.5 text-[15px] leading-6">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-y bg-white">
        <h2 className="t-h2 max-w-xl text-black">Building beyond the idea.</h2>
        <p className="t-lead mt-3">
          I build companies around problems where technology can create structural advantage.
        </p>
        <div className="mt-8">
          {companies.map((c) => (
            <article
              key={c.name}
              className="grid gap-3 border-b border-gray-300 py-6 lg:grid-cols-12 lg:gap-8 lg:items-start"
            >
              <div className="lg:col-span-3">
                <h3 className="t-h3">{c.name}</h3>
                <p className="mt-1 text-[11px] uppercase tracking-[1.2px] text-sage">{c.role}</p>
              </div>
              <p className="text-[14px] leading-6 text-sage lg:col-span-6">{c.body}</p>
              <Link href="/company/" className="text-[13px] lg:col-span-3 lg:text-right">
                Explore the work →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section-y bg-night text-white">
        <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-white/70">Proof</p>
        <h2 className="t-h2 mt-2 max-w-lg text-white">Built where the stakes are high.</h2>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {stakes.map((card) => (
            <article key={card.num} className="flex flex-col bg-paper p-6 text-black">
              <div className="flex items-start justify-between">
                <span className="font-mono text-[18px] font-bold text-sage">{card.num}</span>
                <span className="border border-black px-2 py-0.5 font-mono text-[10px] uppercase tracking-[1.2px]">
                  {card.tag}
                </span>
              </div>
              <h3 className="t-h3 mt-5">{card.title}</h3>
              <p className="mt-2 text-[14px] leading-6 text-sage">{card.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-y bg-cream">
        <p className="t-kicker">How I think</p>
        <h2 className="t-h2 mt-2 max-w-xl">
          Selected writing on building and leading systems that don&apos;t get second chances.
        </h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {posts.slice(0, 4).map((post) => (
            <article key={post.slug}>
              <p className="font-mono text-[14px] text-gray-300">{post.num}</p>
              <h3 className="t-h3 mt-1">
                <Link href={`/writing/${post.slug}/`}>{post.title}</Link>
              </h3>
              <p className="mt-1.5 text-[14px] text-muted">{post.description}</p>
            </article>
          ))}
          <Link
            href="/writing/"
            className="flex min-h-[88px] flex-col justify-between bg-night p-5 text-white md:col-start-2"
          >
            <span className="flex items-center justify-between">
              <span className="text-[13px] font-extrabold tracking-[0.04em]">View all</span>
              <span className="relative flex size-7 items-center justify-center rounded-full border border-white">
                <img src="/images/icon-arrow.svg" alt="" width={14} height={14} className="invert" />
              </span>
            </span>
            <span className="text-[12px] text-[#9a9a9a]">More on how I work.</span>
          </Link>
        </div>
      </section>

      <CtaBanner />
    </main>
  )
}
