import Link from 'next/link'

export default function Pagination({
  page,
  totalPages,
  basePath = '/writing',
}: {
  page: number
  totalPages: number
  basePath?: string
}) {
  if (totalPages <= 1) return null

  const hrefFor = (n: number) => (n <= 1 ? `${basePath}/` : `${basePath}/page/${n}/`)

  return (
    <nav className="mt-8 flex items-center justify-between font-mono text-[12px] uppercase tracking-[1.2px]">
      {page > 1 ? (
        <Link href={hrefFor(page - 1)} className="text-ink">
          ← Newer
        </Link>
      ) : (
        <span className="text-muted">← Newer</span>
      )}
      <span className="text-muted">
        {page} / {totalPages}
      </span>
      {page < totalPages ? (
        <Link href={hrefFor(page + 1)} className="text-ink">
          Older →
        </Link>
      ) : (
        <span className="text-muted">Older →</span>
      )}
    </nav>
  )
}
