import Link from 'next/link'
import { notFound } from 'next/navigation'
import CtaBanner from '@/components/CtaBanner'
import NewsletterSignup from '@/components/NewsletterSignup'
import WritingList from '@/components/WritingList'
import { getAllTags, getPostsByTag } from '@/lib/posts'

export function generateStaticParams() {
  return getAllTags().map((tag) => ({ tag: tag.slug }))
}

export function generateMetadata({ params }: { params: { tag: string } }) {
  const match = getAllTags().find((tag) => tag.slug === params.tag)
  if (!match) return { title: 'Writing — David Salami' }
  return {
    title: `${match.tag} — Writing — David Salami`,
    description: `Notes tagged ${match.tag}.`,
  }
}

export default function WritingTag({ params }: { params: { tag: string } }) {
  const match = getAllTags().find((tag) => tag.slug === params.tag)
  if (!match) notFound()
  const posts = getPostsByTag(params.tag)

  return (
    <main>
      <section className="section-y bg-cream">
        <p className="page-label">
          <span className="h-px w-6 bg-black" />
          <span className="pl-3">Writing</span>
        </p>
        <h1 className="t-h1 max-w-xl">{match.tag}</h1>
        <p className="t-lead mt-4">
          {posts.length} {posts.length === 1 ? 'note' : 'notes'} in this tag.{' '}
          <Link href="/writing/" className="underline decoration-black/30 underline-offset-4">
            All writing
          </Link>
        </p>
      </section>

      <section className="section-y bg-white">
        <p className="t-kicker border-b border-black/20 pb-4">Latest writings</p>
        <WritingList posts={posts} />
      </section>

      <NewsletterSignup />
      <CtaBanner />
    </main>
  )
}
