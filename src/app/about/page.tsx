import type { Metadata } from 'next'
import Link from 'next/link'
import ExternalLink from '@/components/ExternalLink'
import FooterCta from '@/components/FooterCta'

export const metadata: Metadata = {
  title: 'About — David Salami | Founder. Builder. Operator.',
  description:
    'Founder, builder, and operator building technology that survives reality across emerging markets.',
}

const milestones = [
  {
    tag: 'BUILDING SYSTEMS',
    title: 'Industrial operations, at national scale',
    desc: 'Led delivery of the online manufacturing and logistics systems supporting the largest oil & gas operation in Sub-Saharan Africa: software with no room for downtime, built for an environment where the cost of failure is measured in real operations, not metrics.',
    why: 'Why it mattered: it proved that software could hold up under industrial-grade constraints, not just demo well.',
  },
  {
    tag: 'SECURITY & ACCESS',
    title: 'Movement management for high-risk sites',
    desc: 'Built SaaS-based access control and movement management systems securing large industrial sites, treating security as an operational discipline rather than a bolt-on tool.',
    why: 'Why it mattered: it shaped a conviction that security is a systems problem, not a checklist.',
  },
  {
    tag: 'COMPANY BUILDING',
    title: 'Founder, Islands Digital',
    desc: 'Founded Islands Digital, a technology company building software and digital infrastructure for organisations operating under real constraints.',
    why: 'Why it mattered: it moved the work from delivering systems for others to building a company around that judgment.',
  },
  {
    tag: 'CURRENT',
    title: 'Building Taxable.ng',
    desc: 'Currently building Taxable.ng, a fully digital tax filing platform for Nigerian taxpayers, designed to simplify compliance without weakening accountability.',
    why: 'Why it matters: it’s the same problem in a new form, making a high-stakes, regulated system genuinely usable.',
  },
]

const pillars = [
  {
    title: 'Software',
    desc: 'Building products and platforms designed around real user and business problems, not around what’s easy to ship.',
  },
  {
    title: 'Infrastructure',
    desc: 'Designing systems capable of supporting complex operational environments: logistics, manufacturing, and industrial-scale processes.',
  },
  {
    title: 'Security',
    desc: 'Thinking about security as an operational and organisational problem, a discipline systems enforce, not a tool bolted on afterward.',
  },
  {
    title: 'Companies',
    desc: 'Turning technology and ideas into durable businesses, from Islands Digital to Taxable.ng.',
  },
]

const topics = ['Technology', 'Infrastructure', 'Emerging Markets', 'Micro-economics']

function PlusIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M7 1V13M1 7H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export default function About() {
  return (
    <main id="main" className="xp">
      <section className="about-hero-section" id="about-hero">
        <div className="container about-hero-grid">
          <div className="about-hero-content scroll-reveal" data-delay={0}>
            <span className="section-tag-mono">ABOUT</span>
            <h1 className="about-headline">
              Founder.
              <br />
              Builder.
              <br />
              Operator.
            </h1>

            <p className="about-hero-description">
              David Salami is a technology leader and founder focused on systems that operate in the
              real world, where failure has cost, complexity is unavoidable, and constraints are
              non-negotiable.
            </p>

            <div className="about-hero-actions">
              <Link href="/work/" className="btn btn-primary">
                <span>Work with me</span>
                <svg
                  className="btn-arrow"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M1 7H13M13 7L7.5 1.5M13 7L7.5 12.5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <a href="#perspective" className="btn btn-secondary">
                About David
              </a>
            </div>
          </div>

          <div className="about-hero-visual scroll-reveal" data-delay={150}>
            <div className="about-portrait-frame">
              <img
                src="/executive/david-portrait.png"
                alt="David Salami seated in executive office"
                className="about-portrait-img"
                width={1224}
                height={1274}
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="perspective-section dark-theme" id="perspective">
        <div className="container">
          <div className="perspective-header scroll-reveal">
            <span className="section-tag-mono">PERSPECTIVE //</span>
            <h2 className="perspective-title">Building technology that survives reality.</h2>
          </div>

          <div className="perspective-grid scroll-reveal" data-delay={100}>
            <div className="perspective-narrative">
              <p className="narrative-lead">
                David spends most of his time on systems where failure has real cost, complexity
                can&rsquo;t be designed away, and the constraints aren&rsquo;t negotiable.
              </p>
              <p className="narrative-body">
                His work spans infrastructure, security, logistics, and compliance-heavy
                environments, building software that supports large organisations and critical
                operations. It sits at the intersection of technology, infrastructure, security,
                operations, enterprise software, and company building, disciplines he treats as one
                continuous problem rather than separate lanes.
              </p>
            </div>

            <div className="perspective-facts">
              <div className="fact-row">
                <span className="fact-label">CURRENTLY BUILDING:</span>
                <span className="fact-value">Taxable.ng</span>
              </div>
              <div className="fact-row">
                <span className="fact-label">FOUNDER:</span>
                <span className="fact-value">Islands Digital</span>
              </div>
              <div className="fact-row">
                <span className="fact-label">FOCUS:</span>
                <span className="fact-value">
                  Technology &amp; Infrastructure &amp; Company building
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="milestones-section" id="milestones">
        <div className="container">
          <div className="milestones-header scroll-reveal">
            <h2 className="section-title milestones-headline">
              The work has always
              <br />
              been about building
              <br />
              at scale<span className="amber-dot">.</span>
            </h2>
          </div>

          <div className="milestones-list">
            {milestones.map((item, i) => (
              <article key={item.title} className="milestone-item scroll-reveal" data-delay={(i + 1) * 50}>
                <div className="milestone-icon-col">
                  <div className="milestone-bullet">
                    <PlusIcon />
                  </div>
                </div>
                <div className="milestone-content">
                  <span className="milestone-tag-mono">{item.tag}</span>
                  <h3 className="milestone-title">{item.title}</h3>
                  <p className="milestone-desc">{item.desc}</p>
                  <div className="milestone-subdetail">
                    <span>{item.why}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="complexity-section dark-theme" id="complexity">
        <div className="container">
          <div className="complexity-header scroll-reveal">
            <span className="section-tag-mono">WHAT I BUILD</span>
            <h2 className="complexity-title">I work where technology meets complexity.</h2>
          </div>

          <div className="complexity-grid">
            {pillars.map((pillar, i) => (
              <div key={pillar.title} className="complexity-card scroll-reveal" data-delay={(i + 1) * 50}>
                <span className="pillar-num">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="pillar-title">{pillar.title}</h3>
                <p className="pillar-desc">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="building-now-section" id="building-now">
        <div className="container">
          <div className="building-now-header scroll-reveal">
            <span className="section-tag-mono">CURRENT VENTURES</span>
            <h2 className="section-title">What I&rsquo;m building now.</h2>
          </div>

          <div className="building-now-grid">
            <div className="building-card scroll-reveal" data-delay={100}>
              <div className="building-card-top">
                <span className="card-num-mono">01</span>
                <span className="card-badge">LIVE</span>
              </div>
              <h3 className="building-card-title">Taxable.ng</h3>
              <p className="building-card-desc">
                Building a tax filing platform for the Nigerian market, designing and shipping the
                product end to end, from infrastructure to interface.
              </p>
              <div className="building-card-footer">
                <ExternalLink href="https://taxable.ng" className="card-arrow-link">
                  <span>Explore Taxable</span>
                  <span className="arrow-circle" aria-hidden="true">
                    →
                  </span>
                </ExternalLink>
              </div>
            </div>

            <div className="building-card scroll-reveal" data-delay={200}>
              <div className="building-card-top">
                <span className="card-num-mono">02</span>
                <span className="card-badge">SELECTIVE</span>
              </div>
              <h3 className="building-card-title">Advisory &amp; Investing</h3>
              <p className="building-card-desc">
                Advising teams working on complex, high-stakes systems, helping them make sound
                decisions where the cost of getting it wrong compounds.
              </p>
              <div className="building-card-footer">
                <a href="#contact" className="card-arrow-link">
                  <span>Inquire about advisory</span>
                  <span className="arrow-circle" aria-hidden="true">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="domain-pills-wrapper scroll-reveal" data-delay={300}>
            <span className="domain-pills-label">CORE TOPICS:</span>
            <div className="domain-pills">
              {topics.map((topic) => (
                <span key={topic} className="domain-pill">
                  {topic}
                </span>
              ))}
            </div>
          </div>

          <div className="quote-callout scroll-reveal" data-delay={400}>
            <blockquote className="pull-quote">
              &ldquo;Away from the day-to-day of building, David spends time on the same questions in
              different forms: advising teams navigating similar constraints, and writing publicly
              about what the work teaches him. Little of it is separate from the work. Most of it
              feeds back into it.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      <FooterCta />
    </main>
  )
}
