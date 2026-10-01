import type { Metadata } from 'next'
import FooterCta from '@/components/FooterCta'
import { site } from '@/lib/site'

const title = 'Speaking — David Salami | Ideas worth putting in the room.'
const description =
  'Keynotes and talks on technology leadership, execution, enterprise company building, security, and operating complex systems.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/speaking/' },
  openGraph: { title, description, url: '/speaking/' },
  twitter: { title, description },
}

const talks = [
  {
    title: 'Technical leadership at scale',
    desc: 'Navigating organisational complexity, aligning engineering output with commercial survival, and leading high-context autonomous teams under real pressure.',
  },
  {
    title: 'Building software for constrained environments',
    desc: 'Architecting distributed resilience, graceful degradation, and offline-first capabilities where network and hardware failures are daily operational certainties.',
  },
  {
    title: 'Security as a systems problem',
    desc: 'Moving beyond dashboard compliance: designing human protocols, threat-modeled incentives, and zero-trust operational accountability directly into code.',
  },
  {
    title: 'Decision-making under operational constraints',
    desc: 'Rigorous frameworks for high-stakes execution, capital allocation, and technical trade-offs when time, runway, and error budgets are razor-thin.',
  },
  {
    title: 'Bridging software and physical supply chains',
    desc: 'Deploying real-time telemetry, inventory reconcilement, and warehouse dispatch algorithms across messy emerging market distribution channels.',
  },
  {
    title: 'Scaling technology in emerging markets',
    desc: 'Hard-won playbooks for turning informal commerce, fragmented cash workflows, and infrastructure volatility into durable, high-margin software.',
  },
]

const audiences = ['Engineering leaders', 'Founders', 'Executives']

export default function Speaking() {
  return (
    <main id="main" className="xp">
      <section className="speaking-hero-section" id="speaking-hero">
        <div className="container speaking-hero-grid">
          <div className="speaking-hero-content scroll-reveal" data-delay={0}>
            <span className="section-tag-mono">SPEAKING</span>
            <h1 className="speaking-headline">Ideas worth putting in the room.</h1>

            <p className="speaking-hero-description">
              Keynotes and talks on technology leadership, execution, enterprise company building,
              security, and operating complex systems.
            </p>

            <div className="speaking-hero-actions">
              <a
                href={`mailto:${site.email}?subject=${encodeURIComponent('Speaking invitation')}`}
                className="btn btn-primary btn-speak"
              >
                <span>INVITE DAVID TO SPEAK</span>
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
              </a>
            </div>
          </div>

          <div className="speaking-hero-visual scroll-reveal" data-delay={150}>
            <div className="speaking-photo-frame">
              <img
                src="/executive/david-speaking.png"
                alt="David Salami engaging with attendees at technology summit"
                className="speaking-photo-img"
                width={1226}
                height={922}
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="talks-section dark-theme" id="talks">
        <div className="container">
          <div className="talks-header scroll-reveal">
            <span className="section-tag-mono">TALKS</span>
            <h2 className="talks-title">
              Six areas drawn directly from work on systems that don&rsquo;t get second chances.
            </h2>
          </div>

          <div className="talks-grid">
            {talks.map((talk, i) => (
              <article key={talk.title} className="talk-card scroll-reveal" data-delay={(i + 1) * 50}>
                <span className="card-num-mono">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="talk-card-title">{talk.title}</h3>
                <p className="talk-card-desc">{talk.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="audience-section" id="audience">
        <div className="container">
          <div className="audience-block scroll-reveal">
            <span className="section-tag-mono">AUDIENCE</span>
            <h2 className="section-title audience-headline">Who These Talks Are Built For.</h2>

            <div className="audience-pills">
              {audiences.map((label) => (
                <div key={label} className="audience-pill">
                  {label}
                </div>
              ))}
              <div className="audience-pill wide-pill">Technical teams in complex environments</div>
            </div>
          </div>

          <div className="audience-divider" />

          <div className="outcomes-block scroll-reveal" data-delay={150}>
            <span className="section-tag-mono">OUTCOMES</span>
            <div className="outcomes-callout">
              <p className="outcomes-text">
                Audiences leave with clearer mental models, fewer abstractions, and better questions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FooterCta />
    </main>
  )
}
