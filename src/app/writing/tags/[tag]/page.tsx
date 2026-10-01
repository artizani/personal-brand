import Link from 'next/link'
import { notFound } from 'next/navigation'
import FooterCta from '@/components/FooterCta'
import NewsletterSignup from '@/components/NewsletterSignup'
import WritingList from '@/components/WritingList'
import { getAllTags, getPostsByTag } from '@/lib/posts'

export function generateStaticParams() {
  return getAllTags().map((tag) => ({ tag: tag.slug }))
}

export function generateMetadata({ params }: { params: { tag: string } }) {
  const match = getAllTags().find((tag) => tag.slug === params.tag)
  if (!match) return { title: 'Writing — David Salami' }
  const title = `${match.tag} — Writing — David Salami`
  const description = `Notes tagged ${match.tag}.`
  const url = `/writing/tags/${match.slug}/`
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url },
    twitter: { title, description },
  }
}

export default function WritingTag({ params }: { params: { tag: string } }) {
  const match = getAllTags().find((tag) => tag.slug === params.tag)
  if (!match) notFound()
  const posts = getPostsByTag(params.tag)

  return (
    <main id="main" className="xp">
      <section className="writing-page-hero" id="hero">
        <div className="container">
          <div className="writing-page-content scroll-reveal" data-delay={0}>
            <span className="hero-eyebrow-dash">Writing</span>
            <h1 className="writing-page-headline">{match.tag}</h1>
            <p className="writing-page-description">
              {posts.length} {posts.length === 1 ? 'note' : 'notes'} in this tag.{' '}
              <Link
                href="/writing/"
                className="underline decoration-black/30 underline-offset-4 transition-colors hover:decoration-black"
              >
                All writing
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="writings-archive-section" id="latest-writings">
        <div className="container">
          <div className="archive-header-divider scroll-reveal" data-delay={50}>
            <h2 className="archive-category-title">Tagged: {match.tag}</h2>
          </div>
          <WritingList posts={posts} />
        </div>
      </section>

      <NewsletterSignup />
      <FooterCta />
    </main>
  )
}
