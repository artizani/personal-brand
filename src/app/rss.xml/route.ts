import { getPosts, siteUrl } from '@/lib/posts'

export const dynamic = 'force-static'

function escapeXml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export function GET() {
  const origin = siteUrl()
  const items = getPosts()
    .map((post) => {
      const link = `${origin}/writing/${post.slug}/`
      return `<item>
        <title>${escapeXml(post.title)}</title>
        <link>${escapeXml(link)}</link>
        <guid>${escapeXml(link)}</guid>
        <pubDate>${post.pubDate.toUTCString()}</pubDate>
        <description>${escapeXml(post.description)}</description>
      </item>`
    })
    .join('')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>David Salami — Writing</title>
    <link>${escapeXml(`${origin}/writing/`)}</link>
    <description>Notes on technology, leadership, infrastructure, and systems that survive at scale.</description>
    ${items}
  </channel>
</rss>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  })
}
