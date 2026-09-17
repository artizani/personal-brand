import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { z } from 'zod'

export const PAGE_SIZE = 5

export const postFrontmatterSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  tags: z.array(z.string().min(1)).default([]),
  draft: z.boolean().default(false),
  num: z.string().optional(),
})

export type PostFrontmatter = z.infer<typeof postFrontmatterSchema>

export type Post = PostFrontmatter & {
  slug: string
  content: string
  readingMinutes: number
}

export type PostMeta = Omit<Post, 'content'>

const postsDir = path.join(process.cwd(), 'content/writing')

export function readingMinutes(content: string) {
  const words = content.trim().split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.round(words / 200))
}

export function tagSlug(tag: string) {
  return tag
    .trim()
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

export function includeDrafts() {
  return process.env.NODE_ENV !== 'production'
}

function listFiles() {
  if (!fs.existsSync(postsDir)) return []
  return fs.readdirSync(postsDir).filter((file) => /\.mdx?$/.test(file))
}

function parseFile(filename: string): Post {
  const slug = filename.replace(/\.mdx?$/, '')
  const raw = fs.readFileSync(path.join(postsDir, filename), 'utf8')
  const { data, content } = matter(raw)
  const parsed = postFrontmatterSchema.safeParse(data)

  if (!parsed.success) {
    throw new Error(`Invalid frontmatter in ${filename}: ${parsed.error.message}`)
  }

  return {
    ...parsed.data,
    slug,
    content,
    readingMinutes: readingMinutes(content),
  }
}

function byNewest(a: PostMeta, b: PostMeta) {
  return b.pubDate.getTime() - a.pubDate.getTime()
}

export function getAllPosts(): Post[] {
  return listFiles()
    .map(parseFile)
    .filter((post) => includeDrafts() || !post.draft)
    .sort(byNewest)
}

export function getPosts(): PostMeta[] {
  return getAllPosts().map(({ content: _content, ...meta }) => meta)
}

export function getPost(slug: string): Post | null {
  const post = getAllPosts().find((entry) => entry.slug === slug)
  return post ?? null
}

export function getPostSlugs() {
  return getPosts().map((post) => post.slug)
}

export function getPostsPage(page: number) {
  const posts = getPosts()
  const totalPages = Math.max(1, Math.ceil(posts.length / PAGE_SIZE))
  const current = Math.min(Math.max(1, page), totalPages)
  const start = (current - 1) * PAGE_SIZE
  return {
    posts: posts.slice(start, start + PAGE_SIZE),
    page: current,
    totalPages,
    total: posts.length,
  }
}

export function getAllTags() {
  const counts = new Map<string, { tag: string; slug: string; count: number }>()
  for (const post of getPosts()) {
    for (const tag of post.tags) {
      const slug = tagSlug(tag)
      const existing = counts.get(slug)
      if (existing) existing.count += 1
      else counts.set(slug, { tag, slug, count: 1 })
    }
  }
  return Array.from(counts.values()).sort((a, b) => a.tag.localeCompare(b.tag))
}

export function getPostsByTag(slug: string) {
  return getPosts().filter((post) => post.tags.some((tag) => tagSlug(tag) === slug))
}

export function formatPostDate(value: Date) {
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(value)
}

export function siteUrl() {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim() || 'https://davidsalami.com'
  return raw.replace(/\/$/, '')
}
