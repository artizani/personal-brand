import Link from 'next/link'
import type { PostMeta } from '@/lib/posts'
import { tagSlug } from '@/lib/posts'

export default function WritingList({ posts }: { posts: PostMeta[] }) {
  if (posts.length === 0) {
    return <p className="writing-card-summary">Nothing published here yet. Check back soon.</p>
  }

  return (
    <div className="writings-stack">
      {posts.map((post, index) => (
        <Link
          key={post.slug}
          href={`/writing/${post.slug}/`}
          className="writing-card-row scroll-reveal"
          data-delay={100 + index * 50}
        >
          <div className="writing-card-body">
            {post.num ? (
              <p className="mb-1 font-mono text-[12px] tabular-nums text-[color:var(--text-muted)]">{post.num}</p>
            ) : null}
            <h3 className="writing-card-headline break-words">{post.title}</h3>
            <p className="writing-card-summary line-clamp-2">{post.description}</p>
          </div>
          <div className="writing-card-action">
            <span className="btn-read-badge">Read</span>
          </div>
        </Link>
      ))}
    </div>
  )
}

export function TagLinks({ tags }: { tags: string[] }) {
  if (tags.length === 0) return null
  return (
    <p className="mt-3 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[12px] uppercase tracking-[1.2px] text-muted">
      {tags.map((tag) => (
        <Link key={tag} href={`/writing/tags/${tagSlug(tag)}/`} className="t-link">
          {tag}
        </Link>
      ))}
    </p>
  )
}
