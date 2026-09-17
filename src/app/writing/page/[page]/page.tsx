import { notFound, redirect } from 'next/navigation'
import CtaBanner from '@/components/CtaBanner'
import NewsletterSignup from '@/components/NewsletterSignup'
import Pagination from '@/components/Pagination'
import WritingList from '@/components/WritingList'
import { getPostsPage } from '@/lib/posts'

export function generateStaticParams() {
  const { totalPages } = getPostsPage(1)
  const pages = Array.from({ length: Math.max(totalPages, 1) }, (_, i) => String(i + 1))
  return pages.map((page) => ({ page }))
}

export const metadata = {
  title: 'Writing — David Salami',
  description: 'Essays on technology, leadership, and systems that operate under pressure.',
}

export default function WritingPaged({ params }: { params: { page: string } }) {
  const page = Number(params.page)
  if (!Number.isInteger(page) || page < 1) notFound()
  if (page === 1) redirect('/writing/')

  const listing = getPostsPage(page)
  if (page > listing.totalPages) notFound()

  return (
    <main>
      <section className="section-y bg-cream">
        <p className="page-label">
          <span className="h-px w-6 bg-black" />
          <span className="pl-3">Writing</span>
        </p>
        <h1 className="t-h1 max-w-xl">Thinking beyond technology.</h1>
        <p className="t-lead mt-4">Page {listing.page} of {listing.totalPages}.</p>
      </section>

      <section className="section-y bg-white">
        <p className="t-kicker border-b border-black/20 pb-4">Latest writings</p>
        <WritingList posts={listing.posts} />
        <Pagination page={listing.page} totalPages={listing.totalPages} />
      </section>

      <NewsletterSignup />
      <CtaBanner />
    </main>
  )
}
