import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-semibold text-gray-900">
            davidsalami.com
          </Link>
          <div className="flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-tesco-blue">
              Home
            </Link>
            <Link href="/writing" className="text-gray-700 hover:text-tesco-blue">
              Writing
            </Link>
            <Link href="/company" className="text-gray-700 hover:text-tesco-blue">
              Company
            </Link>
            <Link href="/speaking" className="text-gray-700 hover:text-tesco-blue">
              Speaking
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-tesco-blue">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
