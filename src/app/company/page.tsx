import FooterCta from '@/components/FooterCta'

export const metadata = {
  title: 'Company & Ventures — David Salami',
  description:
    'A track record of taking complex systems from inception to scale across emerging markets, regulated industries, and high-volume infrastructure.',
}

const brands = [
  { src: 'nigeria-revenue-service.svg', alt: 'NRS — Nigeria Revenue Service', title: 'Nigeria Revenue Service', width: 165, height: 42, variant: 'brand-img-wide' },
  { src: 'dangote.svg', alt: 'Dangote Group', title: 'Dangote Group', width: 145, height: 52, variant: '' },
  { src: 'bank-of-scotland.svg', alt: 'Bank of Scotland', title: 'Bank of Scotland', width: 165, height: 48, variant: 'brand-img-wide' },
  { src: 'microsoft.svg', alt: 'Microsoft', title: 'Microsoft', width: 165, height: 48, variant: 'brand-img-wide' },
  { src: 'liberty-mutual.svg', alt: 'Liberty Mutual', title: 'Liberty Mutual', width: 150, height: 52, variant: '' },
  { src: 'hmrc.svg', alt: 'HM Revenue & Customs', title: 'HM Revenue & Customs', width: 155, height: 48, variant: 'brand-img-wide' },
  { src: 'citibank.svg', alt: 'Citibank', title: 'Citibank', width: 140, height: 48, variant: '' },
  { src: 'lloyds-bank.svg', alt: 'Lloyds Bank', title: 'Lloyds Bank', width: 160, height: 48, variant: 'brand-img-wide' },
  { src: 'aci-worldwide.svg', alt: 'ACI Universal Payments', title: 'ACI Universal Payments', width: 160, height: 48, variant: 'brand-img-wide' },
  { src: 'vocalink-mastercard.svg', alt: 'Vocalink Mastercard', title: 'Vocalink Mastercard', width: 160, height: 48, variant: 'brand-img-wide' },
  { src: 'financial-times.svg', alt: 'Financial Times', title: 'Financial Times', width: 110, height: 56, variant: 'brand-img-tall' },
  { src: 'domestic-and-general.svg', alt: 'Domestic & General', title: 'Domestic & General', width: 165, height: 50, variant: 'brand-img-wide' },
  { src: 'intelligent-finance.svg', alt: 'Intelligent Finance', title: 'Intelligent Finance', width: 135, height: 54, variant: '' },
  { src: 'abn-amro.svg', alt: 'ABN AMRO', title: 'ABN AMRO', width: 165, height: 48, variant: 'brand-img-wide' },
  { src: 'natwest-group.svg', alt: 'NatWest Group', title: 'NatWest Group', width: 165, height: 50, variant: 'brand-img-wide' },
]

const principles = [
  'Start with constraints, not features.',
  'Optimise for reliability before growth.',
  'Distribution is an architectural decision, not a marketing add-on.',
  'Software is operational leverage, not the business itself.',
]

export default function Company() {
  return (
    <main id="main" className="xp">
      <section className="company-hero-section" id="hero">
        <div className="container">
          <div className="company-hero-content scroll-reveal" data-delay={0}>
            <span className="section-tag-mono">COMPANY</span>
            <h1 className="company-hero-title">
              Company
              <br />
              &amp; Ventures.
            </h1>
            <p className="company-hero-desc">
              I build and advise companies focused on infrastructure-grade software: systems that
              must function reliably in complex, regulated, or high-risk environments.
            </p>
          </div>
        </div>
      </section>

      <section className="islands-spotlight-section dark-theme" id="islands">
        <div className="container islands-spotlight-grid">
          <div className="islands-spotlight-left scroll-reveal" data-delay={100}>
            <span className="spotlight-eyebrow">CURRENT FOCUS</span>
            <span className="spotlight-role">FOUNDER</span>
            <h2 className="islands-spotlight-title">Islands Digital</h2>
            <p className="islands-spotlight-desc">
              Built and scaled a digital product agency focused on systems engineering and
              high-fidelity interfaces. Led a distributed team delivering infrastructure solutions
              for enterprise clients.
            </p>
            <a
              href="https://islandsdigital.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-visit-islands"
            >
              <span>VISIT ISLANDS</span>
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>

          <div className="islands-spotlight-right scroll-reveal" data-delay={200}>
            <div className="islands-logo-svg-wrap">
              <img
                src="/executive/brands/island-digital.png"
                alt="Islands Digital"
                className="islands-hero-logo"
                width={320}
                height={96}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="building-taxable-section" id="active-ventures">
        <div className="container">
          <h2 className="building-taxable-title scroll-reveal">Building Taxable.ng</h2>

          <div className="active-ventures-stack">
            <div className="active-venture-row scroll-reveal" data-delay={100}>
              <div className="active-venture-left">
                <span className="venture-eyebrow-num">01 — TAX INTELLIGENCE</span>
                <div className="active-venture-icon-wrap">
                  <img
                    src="/executive/brands/taxable-island-digital.png"
                    alt="Taxable.ng by Islands Digital"
                    className="venture-brand-logo-img"
                    width={100}
                    height={56}
                    style={{ height: 56, width: 'auto', maxWidth: '100%', objectFit: 'contain' }}
                  />
                </div>
                <h3 className="active-venture-brand-name">Taxable.ng</h3>
                <p className="active-venture-desc">
                  Building the first fully digital tax filing platform for Nigerian taxpayers. The
                  goal is to simplify compliance without weakening accountability.
                </p>
              </div>
              <div className="active-venture-right">
                <a
                  href="https://taxable.ng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="venture-direct-link"
                >
                  <span>VISIT TAXABLE.NG</span>
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>

            <div className="active-venture-row scroll-reveal" data-delay={200}>
              <div className="active-venture-left">
                <span className="venture-eyebrow-num">02 — LOGISTICS PROTOCOL</span>
                <div className="active-venture-icon-wrap">
                  <div className="truss-brand-lockup">
                    <img
                      src="/executive/brands/truss.png"
                      alt="Truss Icon"
                      className="truss-brand-icon-img"
                      width={44}
                      height={44}
                    />
                    <span className="truss-brand-text">TRUSS.NG</span>
                  </div>
                </div>
                <h3 className="active-venture-brand-name">TRUSS.NG</h3>
                <p className="active-venture-desc">
                  The non-custodial reliability layer for African payment rails. We hold the record,
                  reconcile against settlement truth, and surface what silently fails, without ever
                  touching your money.
                </p>
              </div>
              <div className="active-venture-right">
                <a
                  href="https://truss.ng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="venture-direct-link"
                >
                  <span>VISIT TRUSS.NG</span>
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="past-systems-section" id="past-systems">
        <div className="container">
          <div className="past-systems-header scroll-reveal">
            <span className="past-systems-eyebrow">PAST PROJECTS</span>
            <h2 className="past-systems-title">Ventures &amp; systems built.</h2>
          </div>

          <div className="systems-built-grid">
            <div className="system-case-item scroll-reveal" data-delay={100}>
              <div className="system-case-left">
                <div className="system-case-tag">01 — BUILDING SYSTEMS</div>
                <h3 className="system-case-headline">Industrial operations, at national scale</h3>
                <p className="system-case-desc">
                  Led delivery of the online manufacturing and logistics systems supporting the
                  largest oil &amp; gas operation in Sub-Saharan Africa: software with no room for
                  downtime, built for an environment where the cost of failure is measured in real
                  operations, not metrics.
                </p>
              </div>
              <div className="system-case-right">
                <img
                  src="/executive/brands/dangote.svg"
                  alt="Dangote Group"
                  className="system-case-brand-img"
                  width={160}
                  height={60}
                />
              </div>
            </div>

            <div className="system-case-item scroll-reveal" data-delay={200}>
              <div className="system-case-left">
                <div className="system-case-tag">02 — SECURITY &amp; ACCESS</div>
                <h3 className="system-case-headline">Movement management for high-risk sites</h3>
                <p className="system-case-desc">
                  Built SaaS-based access control and movement management systems securing large
                  industrial sites, treating security as an operational discipline rather than a
                  bolt-on tool.
                </p>
              </div>
              <div className="system-case-right">
                <svg
                  width="160"
                  height="50"
                  viewBox="0 0 160 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <rect x="2" y="8" width="34" height="34" rx="6" fill="#f4f4f5" stroke="#d4d4d8" strokeWidth="1.5" />
                  <path d="M12 25C12 20 26 20 26 25" stroke="#09090b" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="19" cy="18" r="4" stroke="#09090b" strokeWidth="2" />
                  <text
                    x="46"
                    y="31"
                    fontFamily="'JetBrains Mono', monospace"
                    fontWeight="700"
                    fontSize="13"
                    fill="#52525b"
                    letterSpacing="0.05em"
                  >
                    ACCESS // SEC
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="company-brands-section" id="brands">
        <div className="container">
          <div className="company-brands-header scroll-reveal">
            <span className="company-brands-eyebrow">AT A GLANCE</span>
            <h2 className="company-brands-title">Brands I&rsquo;ve worked with</h2>
          </div>

          <div className="brands-showcase-grid">
            {brands.map((brand, i) => (
              <div
                key={brand.src}
                className="brand-showcase-box scroll-reveal"
                data-delay={(i + 1) * 50}
                title={brand.title}
              >
                <img
                  src={`/executive/brands/${brand.src}`}
                  alt={brand.alt}
                  className={brand.variant ? `brand-showcase-img ${brand.variant}` : 'brand-showcase-img'}
                  width={brand.width}
                  height={brand.height}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="philosophy-section" id="philosophy">
        <div className="container">
          <h2 className="philosophy-title scroll-reveal">How I think about building companies.</h2>

          <div className="philosophy-stack">
            {principles.map((text, i) => (
              <div key={text} className="philosophy-card-row scroll-reveal" data-delay={(i + 1) * 100}>
                <span className="philosophy-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="philosophy-text">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterCta />
    </main>
  )
}
