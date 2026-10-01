import FooterCta from '@/components/FooterCta'
import NewsletterSignup from '@/components/NewsletterSignup'
import Pagination from '@/components/Pagination'
import WritingList from '@/components/WritingList'
import { getPostsPage } from '@/lib/posts'

const title = 'Writing — David Salami'
const description = 'Essays on technology, leadership, and systems that operate under pressure.'

export const metadata = {
  title,
  description,
  alternates: { canonical: '/writing/' },
  openGraph: { title, description, url: '/writing/' },
  twitter: { title, description },
}

export default function Writing() {
  const { posts, page, totalPages } = getPostsPage(1)

  return (
    <main id="main" className="xp">
      <section className="writing-page-hero" id="hero">
        <div className="container">
          <div className="writing-page-content scroll-reveal" data-delay={0}>
            <span className="hero-eyebrow-dash">Writing</span>
            <h1 className="writing-page-headline">
              Thinking beyond
              <br />
              technology.
            </h1>
            <p className="writing-page-description">
              Notes on technology, leadership, infrastructure and the decisions that determine whether
              systems survive at scale.
            </p>
          </div>
        </div>
      </section>

      <section className="writings-archive-section" id="latest-writings">
        <div className="container">
          <div className="archive-header-divider scroll-reveal" data-delay={50}>
            <h2 className="archive-category-title">Latest Writings</h2>
          </div>
          <WritingList posts={posts} />
          <Pagination page={page} totalPages={totalPages} />
        </div>
      </section>

      <NewsletterSignup />
      <FooterCta />
    </main>
  )
}
