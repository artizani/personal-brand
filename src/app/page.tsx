import type { Metadata } from 'next'
import Link from 'next/link'
import ExternalLink from '@/components/ExternalLink'
import FooterCta from '@/components/FooterCta'
import { getPosts } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'David Salami — Founder & Growth Executive',
  description:
    'Founder & growth executive building companies that turn complex, real-world markets into scalable products & durable revenue.',
}

const brands = [
  { src: 'nigeria-revenue-service.svg', name: 'Nigeria Revenue Service', size: 'brand-img-wide' },
  { src: 'dangote.svg', name: 'Dangote Group', size: '' },
  { src: 'bank-of-scotland.svg', name: 'Bank of Scotland', size: 'brand-img-wide' },
  { src: 'microsoft.svg', name: 'Microsoft', size: 'brand-img-wide' },
  { src: 'liberty-mutual.svg', name: 'Liberty Mutual', size: '' },
  { src: 'hmrc.svg', name: 'HM Revenue & Customs', size: 'brand-img-wide' },
  { src: 'citibank.svg', name: 'Citibank', size: '' },
  { src: 'lloyds-bank.svg', name: 'Lloyds Bank', size: 'brand-img-wide' },
  { src: 'aci-worldwide.svg', name: 'ACI Universal Payments', size: 'brand-img-wide' },
  { src: 'vocalink-mastercard.svg', name: 'Vocalink Mastercard', size: 'brand-img-wide' },
  { src: 'financial-times.svg', name: 'Financial Times', size: 'brand-img-tall' },
  { src: 'domestic-and-general.svg', name: 'Domestic & General', size: 'brand-img-wide' },
  { src: 'intelligent-finance.svg', name: 'Intelligent Finance', size: '' },
  { src: 'abn-amro.svg', name: 'ABN AMRO', size: 'brand-img-wide' },
  { src: 'natwest-group.svg', name: 'NatWest Group', size: 'brand-img-wide' },
]

const glance = [
  { label: 'FOUNDER', value: 'Islands Digital' },
  { label: 'CURRENTLY BUILDING', value: 'Taxable.ng' },
  {
    label: 'FOCUS',
    value: (
      <>
        Technology ·<br />
        Infrastructure ·<br />
        Security · Operations
      </>
    ),
  },
  { label: 'MARKETS', value: 'Nigeria · Sub-Saharan Africa' },
]

const ventures = [
  {
    name: 'Islands Digital',
    role: 'Founder',
    body: 'A technology company building software and digital infrastructure, including manufacturing and logistics systems for large-scale industrial operations, and access control and movement management platforms for high-risk sites.',
    href: 'https://www.islands.digital/',
    cta: 'Visit site',
  },
  {
    name: 'Taxable.ng',
    role: 'Founder & Builder',
    body: 'Nigeria’s first fully digital tax filing platform, built to simplify compliance for taxpayers without weakening accountability.',
    href: 'https://www.taxable.ng/',
    cta: 'Visit site',
  },
  {
    name: 'Truss.ng',
    role: 'Founder & Builder',
    body: 'The non-custodial reliability layer for African payment rails. We hold the record, reconcile against settlement truth, and surface what silently fails, without ever touching your money.',
    href: 'https://www.truss.ng/',
    cta: 'Visit Website',
  },
]

const stakes = [
  {
    num: '01',
    badge: 'VENTURE',
    title: 'Founder, Islands Digital',
    body: 'Built and scaled a digital product agency focused on systems engineering and high-fidelity interfaces. Led a distributed team delivering infrastructure solutions for enterprise clients.',
    href: 'https://www.islands.digital/',
    cta: 'Explore',
    label: 'Explore Islands Digital',
  },
  {
    num: '02',
    badge: 'SCALE-UP',
    title: 'Online manufacturing & logistics systems',
    body: 'Architected end-to-end operational software for distributed manufacturing. Replaced legacy monolithic structures with micro-services, improving throughput by 40%.',
    href: '#contact',
    cta: 'Read architecture note',
    label: 'Ask about the manufacturing systems architecture',
  },
  {
    num: '03',
    badge: 'FINTECH',
    title: 'Taxable.ng',
    body: 'Spearheaded product design and technical architecture for a specialised taxation compliance platform aimed at SME ecosystems in emerging markets.',
    href: 'https://www.taxable.ng',
    cta: 'View Website',
    label: 'Learn more about Taxable.ng',
  },
]

export default function Home() {
  const posts = getPosts().slice(0, 5)

  return (
    <main id="main" className="xp">
      <section className="hero-section" id="hero">
        <div className="container hero-grid">
          <aside className="hero-sidebar scroll-reveal" data-delay={0}>
            <div className="profile-card">
              <div className="profile-header">
                <div className="avatar-wrapper">
                  <img
                    src="/executive/mr-david.png"
                    alt="David Salami"
                    className="avatar-img"
                    width={200}
                    height={200}
                    fetchPriority="high"
                  />
                  <span className="online-indicator" title="Active & Available" />
                </div>
                <div className="profile-title">
                  <h3 className="profile-name">David Salami</h3>
                  <span className="profile-role">Founder / Operator</span>
                </div>
              </div>

              <div className="profile-divider" />

              <div className="profile-meta-list">
                <div className="meta-item">
                  <span className="meta-label">ROLE</span>
                  <span className="meta-value">Founder &amp; Technology Leader</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">FOCUS</span>
                  <span className="meta-value">Infrastructure · Security · Operations</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">CONTACT</span>
                  <Link href="/work/#contact-form" className="meta-value">
                    Send a message
                  </Link>
                </div>
              </div>
            </div>
          </aside>

          <div className="hero-content scroll-reveal" data-delay={150}>
            <h1 className="hero-headline">
              <span className="hero-badge">Founder</span> &amp; growth executive building companies
              that turn complex, real-world markets into{' '}
              <strong className="text-highlight">scalable products &amp; durable revenue.</strong>
            </h1>

            <p className="hero-description">
              I work at the intersection of technology, infrastructure, regulation, and growth,
              turning difficult market problems into products and businesses built to scale.
            </p>

            <div className="hero-actions">
              <Link href="/work/" className="btn btn-primary">
                <span>WORK WITH ME</span>
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
              <Link href="/about/" className="btn btn-secondary">
                ABOUT David
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="brands-section" id="about">
        <div className="container">
          <div className="brands-header scroll-reveal">
            <div className="eyebrow-dots" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <h2 className="brands-title">Brands I&rsquo;ve worked with</h2>
          </div>

          <div className="brands-marquee-wrapper scroll-reveal" data-delay={100}>
            <div className="brands-marquee-track">
              {brands.map((brand) => (
                <div key={brand.src} className="brands-marquee-item" title={brand.name}>
                  <img
                    src={`/executive/brands/${brand.src}`}
                    alt={brand.name}
                    className={`brands-marquee-img ${brand.size}`.trim()}
                  />
                </div>
              ))}
              {brands.map((brand) => (
                <div key={`dup-${brand.src}`} className="brands-marquee-item" aria-hidden="true">
                  <img
                    src={`/executive/brands/${brand.src}`}
                    alt=""
                    className={`brands-marquee-img ${brand.size}`.trim()}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="scale-section dark-theme" id="scale">
        <div className="container">
          <div className="scale-header scroll-reveal">
            <span className="scale-eyebrow">AT A GLANCE</span>
            <h2 className="scale-title">
              Built for scale<span className="scale-amber-square" aria-hidden="true" />
            </h2>
          </div>

          <div className="scale-glance-grid scroll-reveal" data-delay={100}>
            {glance.map((item) => (
              <div key={item.label} className="scale-glance-col">
                <span className="scale-glance-label">{item.label}</span>
                <div className="scale-glance-val">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ventures-section" id="ventures">
        <div className="container">
          <div className="ventures-header scroll-reveal">
            <h2 className="section-title">Building beyond the idea.</h2>
            <p className="section-subtitle">
              A track record of taking complex systems from inception to scale across emerging
              markets.
            </p>
          </div>

          <div className="ventures-list">
            {ventures.map((venture, i) => (
              <div key={venture.name} className="venture-row scroll-reveal" data-delay={(i + 1) * 100}>
                <div className="venture-col-company">
                  <h3 className="venture-name">{venture.name}</h3>
                  <span className="venture-role">{venture.role}</span>
                </div>
                <div className="venture-col-desc">
                  <p>{venture.body}</p>
                </div>
                <div className="venture-col-link">
                  <ExternalLink href={venture.href} className="venture-link">
                    <span>{venture.cta}</span>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path
                        d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </ExternalLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="stakes-section dark-theme" id="systems">
        <div className="container">
          <div className="stakes-header scroll-reveal">
            <span className="section-tag-mono">PROOF //</span>
            <h2 className="stakes-title">Built where the stakes are high.</h2>
          </div>

          <div className="stakes-grid">
            {stakes.map((card, i) => {
              const content = (
                <>
                  <span>{card.cta}</span>
                  <span className="arrow-circle" aria-hidden="true">
                    →
                  </span>
                </>
              )
              return (
                <article key={card.num} className="stake-card scroll-reveal" data-delay={(i + 1) * 100}>
                  <div className="stake-card-top">
                    <span className="card-num-mono">{card.num}</span>
                    <span className="card-badge">{card.badge}</span>
                  </div>
                  <h3 className="stake-card-title">{card.title}</h3>
                  <p className="stake-card-text">{card.body}</p>
                  <div className="stake-card-footer">
                    {card.href.startsWith('#') ? (
                      <a href={card.href} className="card-arrow-link" aria-label={card.label}>
                        {content}
                      </a>
                    ) : (
                      <ExternalLink href={card.href} className="card-arrow-link" aria-label={card.label}>
                        {content}
                      </ExternalLink>
                    )}
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="writing-section" id="writing">
        <div className="container">
          <div className="writing-header scroll-reveal">
            <span className="section-tag-mono">ESSAYS &amp; IDEAS</span>
            <h2 className="writing-title">
              Selected writing on building and leading systems that don&rsquo;t get second chances.
            </h2>
          </div>

          <div className="writing-grid">
            {posts.map((post, i) => (
              <Link
                key={post.slug}
                href={`/writing/${post.slug}/`}
                className="essay-card scroll-reveal"
                data-delay={(i + 1) * 100}
              >
                <span className="essay-num">{post.num ?? String(i + 1).padStart(2, '0')}</span>
                <h3 className="essay-title">{post.title}</h3>
                <p className="essay-desc">{post.description}</p>
                <div className="essay-meta">
                  <span className="essay-time">{post.readingMinutes} min read</span>
                  <span className="essay-arrow" aria-hidden="true">
                    ↗
                  </span>
                </div>
              </Link>
            ))}

            <Link
              href="/writing/"
              className="essay-card action-card scroll-reveal"
              data-delay={(posts.length + 1) * 100}
            >
              <div className="action-card-content">
                <span className="action-card-tag">ARCHIVE</span>
                <h3 className="action-card-title">VIEW ALL</h3>
                <p className="action-card-sub">
                  Read all essays, architectural blueprints &amp; field notes
                </p>
              </div>
              <div className="action-card-btn" aria-hidden="true">
                <span className="action-arrow-circle">→</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <FooterCta />
    </main>
  )
}
