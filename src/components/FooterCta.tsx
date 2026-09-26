import Constellation from '@/components/motion/Constellation'
import { site } from '@/lib/site'

export default function FooterCta() {
  return (
    <section className="custom-dark-footer-cta" id="contact">
      <div className="container footer-cta-grid">
        <div className="footer-cta-left scroll-reveal">
          <a href={`mailto:${site.email}`} className="footer-hero-email-link">
            {site.email}
          </a>
          <h2 className="footer-hero-title">
            For advisory, speaking,
            <br />
            or collaboration.
          </h2>
          <p className="footer-hero-desc">
            I&rsquo;m Open To Conversations With Founders, Investors, Technology Companies, And
            Strategic Partners Working On Ambitious Problems.
          </p>
          <div className="footer-hero-actions">
            <a href="/work/" className="btn btn-work-with-me">
              <span>Work With Me</span>
              <span>&rarr;</span>
            </a>
            <a href="/work/#booking" className="btn btn-book-session-outline">
              Book A Session
            </a>
          </div>
        </div>

        <div className="footer-cta-right scroll-reveal" data-delay="200">
          <Constellation />
        </div>
      </div>
    </section>
  )
}
