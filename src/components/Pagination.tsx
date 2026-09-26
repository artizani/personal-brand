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
    <nav
      aria-label="Pagination"
      className="mt-12 flex items-center justify-between border-t border-[color:var(--border-light)] pt-8 font-mono text-[0.78rem] font-semibold uppercase tracking-[0.12em]"
    >
      {page > 1 ? (
        <Link href={hrefFor(page - 1)} rel="prev" className="text-[color:var(--text-main)] transition-colors hover:underline hover:underline-offset-4">
          ← Newer
        </Link>
      ) : (
        <span aria-disabled="true" className="text-[color:var(--text-muted)]">
          ← Newer
        </span>
      )}
      <span aria-current="page" className="tabular-nums text-[color:var(--text-muted)]">
        {page} / {totalPages}
      </span>
      {page < totalPages ? (
        <Link href={hrefFor(page + 1)} rel="next" className="text-[color:var(--text-main)] transition-colors hover:underline hover:underline-offset-4">
          Older →
        </Link>
      ) : (
        <span aria-disabled="true" className="text-[color:var(--text-muted)]">
          Older →
        </span>
      )}
    </nav>
  )
}
