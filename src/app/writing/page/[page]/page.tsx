import { notFound, redirect } from 'next/navigation'
import FooterCta from '@/components/FooterCta'
import NewsletterSignup from '@/components/NewsletterSignup'
import Pagination from '@/components/Pagination'
import WritingList from '@/components/WritingList'
import { getPostsPage } from '@/lib/posts'

export function generateStaticParams() {
  const { totalPages } = getPostsPage(1)
  const pages = Array.from({ length: Math.max(totalPages, 1) }, (_, i) => String(i + 1))
  return pages.map((page) => ({ page }))
}

export function generateMetadata({ params }: { params: { page: string } }) {
  const title = 'Writing — David Salami'
  const description = 'Essays on technology, leadership, and systems that operate under pressure.'
  const url = `/writing/page/${params.page}/`
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url },
    twitter: { title, description },
  }
}

export default function WritingPaged({ params }: { params: { page: string } }) {
  const page = Number(params.page)
  if (!Number.isInteger(page) || page < 1) notFound()
  if (page === 1) redirect('/writing/')

  const listing = getPostsPage(page)
  if (page > listing.totalPages) notFound()

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
            <p className="writing-page-description tabular-nums">
              Page {listing.page} of {listing.totalPages}.
            </p>
          </div>
        </div>
      </section>

      <section className="writings-archive-section" id="latest-writings">
        <div className="container">
          <div className="archive-header-divider scroll-reveal" data-delay={50}>
            <h2 className="archive-category-title">Latest Writings</h2>
          </div>
          <WritingList posts={listing.posts} />
          <Pagination page={listing.page} totalPages={listing.totalPages} />
        </div>
      </section>

      <NewsletterSignup />
      <FooterCta />
    </main>
  )
}
