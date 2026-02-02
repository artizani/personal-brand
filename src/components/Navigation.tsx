import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-tesco-blue hover:text-tesco-magenta transition-colors">
            davidsalami.com
          </Link>
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="text-gray-700 font-medium px-4 py-2 rounded-md hover:bg-tesco-blue-light hover:text-tesco-blue transition-all"
            >
              Home
            </Link>
            <Link
              href="/writing"
              className="text-gray-700 font-medium px-4 py-2 rounded-md hover:bg-tesco-blue-light hover:text-tesco-blue transition-all"
            >
              Writing
            </Link>
            <Link
              href="/company"
              className="text-gray-700 font-medium px-4 py-2 rounded-md hover:bg-tesco-blue-light hover:text-tesco-blue transition-all"
            >
              Company
            </Link>
            <Link
              href="/speaking"
              className="text-gray-700 font-medium px-4 py-2 rounded-md hover:bg-tesco-blue-light hover:text-tesco-blue transition-all"
            >
              Speaking
            </Link>
            <Link
              href="/work"
              className="text-gray-700 font-medium px-4 py-2 rounded-md hover:bg-tesco-blue-light hover:text-tesco-blue transition-all"
            >
              Work
            </Link>
            <Link
              href="/about"
              className="text-gray-700 font-medium px-4 py-2 rounded-md hover:bg-tesco-blue-light hover:text-tesco-blue transition-all"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
