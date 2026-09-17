import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import CtaBanner from '@/components/CtaBanner'
import NewsletterSignup from '@/components/NewsletterSignup'
import { TagLinks } from '@/components/WritingList'
import { mdxComponents } from '@/components/mdx'
import { formatPostDate, getPost, getPostSlugs, siteUrl } from '@/lib/posts'

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug)
  if (!post) return { title: 'Writing — David Salami' }
  const url = `${siteUrl()}/writing/${post.slug}/`
  return {
    title: `${post.title} — David Salami`,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      url,
      publishedTime: post.pubDate.toISOString(),
      modifiedTime: (post.updatedDate ?? post.pubDate).toISOString(),
      tags: post.tags,
    },
    twitter: {
      card: 'summary',
      title: post.title,
      description: post.description,
    },
  }
}

export default function WritingPost({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug)
  if (!post) notFound()

  const url = `${siteUrl()}/writing/${post.slug}/`
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.pubDate.toISOString(),
    dateModified: (post.updatedDate ?? post.pubDate).toISOString(),
    url,
    author: {
      '@type': 'Person',
      name: 'David Salami',
    },
    mainEntityOfPage: url,
  }

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article>
        <header className="section-y bg-cream">
          <p className="page-label">
            <span className="h-px w-6 bg-black" />
            <span className="pl-3">Writing</span>
          </p>
          <p className="font-mono text-[13px] text-muted">
            {post.num ? `${post.num} · ` : ''}
            {formatPostDate(post.pubDate)}
            {` · ${post.readingMinutes} min read`}
          </p>
          <h1 className="t-h1 mt-3 max-w-3xl">{post.title}</h1>
          <p className="t-lead mt-4">{post.description}</p>
          <TagLinks tags={post.tags} />
        </header>
        <div className="section-y bg-white">
          <div className="max-w-2xl">
            <MDXRemote source={post.content} components={mdxComponents} />
            <p className="mt-12">
              <Link href="/writing/" className="text-[13px] font-semibold uppercase tracking-[0.08em]">
                ← All writing
              </Link>
            </p>
          </div>
        </div>
      </article>
      <NewsletterSignup />
      <CtaBanner />
    </main>
  )
}
