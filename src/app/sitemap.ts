import type { MetadataRoute } from 'next'
import { getAllTags, getPosts, siteUrl } from '@/lib/posts'

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = siteUrl()
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    '',
    '/writing/',
    '/about/',
    '/company/',
    '/speaking/',
    '/work/',
  ].map((path) => ({
    url: `${origin}${path || '/'}`,
    lastModified: now,
  }))

  const posts = getPosts().map((post) => ({
    url: `${origin}/writing/${post.slug}/`,
    lastModified: post.updatedDate ?? post.pubDate,
  }))

  const tags = getAllTags().map((tag) => ({
    url: `${origin}/writing/tags/${tag.slug}/`,
    lastModified: now,
  }))

  return [...staticRoutes, ...posts, ...tags]
}
