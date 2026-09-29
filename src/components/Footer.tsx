import Link from 'next/link'
import ExternalLink from '@/components/ExternalLink'
import { site } from '@/lib/site'

export default function Footer() {
  return (
    <footer className="site-bottom-footer dark-theme xp">
      <div className="container footer-bottom-inner">
        <div className="footer-brand">
          <span className="footer-copy">
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </span>
        </div>

        <nav className="footer-links" aria-label="Social">
          <ExternalLink href={site.github} className="footer-link" translate="no">
            GitHub
          </ExternalLink>
          <ExternalLink href={site.linkedin} className="footer-link" translate="no">
            LinkedIn
          </ExternalLink>
          <Link href="/work/#contact-form" className="footer-link">
            Email
          </Link>
        </nav>
      </div>
    </footer>
  )
}
