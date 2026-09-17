import Link from 'next/link'
import type { PostMeta } from '@/lib/posts'
import { tagSlug } from '@/lib/posts'

export default function WritingList({ posts }: { posts: PostMeta[] }) {
  return (
    <div className="mt-6 space-y-4">
      {posts.map((post) => (
        <Link
          key={post.slug}
          href={`/writing/${post.slug}/`}
          className="flex flex-wrap items-center justify-between gap-4 border-b border-r border-black/10 border-l-[6px] border-l-black bg-paper px-5 py-5 transition-colors hover:bg-[#f0f0ee] sm:px-8"
        >
          <div className="min-w-[240px] flex-1 pr-4">
            {post.num ? <p className="font-mono text-[12px] text-muted">{post.num}</p> : null}
            <h2 className="t-h3 mt-1">{post.title}</h2>
            <p className="mt-1 text-[14px] text-muted">{post.description}</p>
          </div>
          <span className="border border-black px-6 py-3 text-[12px] font-medium uppercase tracking-[0.05em]">
            Read
          </span>
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
        <Link key={tag} href={`/writing/tags/${tagSlug(tag)}/`}>
          {tag}
        </Link>
      ))}
    </p>
  )
}
