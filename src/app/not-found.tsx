import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="section-y bg-cream">
      <p className="page-label">
        <span className="h-px w-6 bg-black" />
        <span className="pl-3">404</span>
      </p>
      <h1 className="t-h1 max-w-xl">This page is not in the system.</h1>
      <p className="t-lead mt-4">The URL does not match a published page or essay.</p>
      <div className="mt-7 flex flex-wrap gap-3">
        <Link href="/" className="btn-solid">
          Home
        </Link>
        <Link href="/writing/" className="btn-outline">
          Writing
        </Link>
      </div>
    </main>
  )
}
