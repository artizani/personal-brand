'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/writing/', label: 'Writing' },
  { href: '/company/', label: 'Company' },
  { href: '/speaking/', label: 'Speaking' },
  { href: '/about/', label: 'About' },
]

export default function Navigation() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-20 bg-cream/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-site items-center justify-between gap-6 px-6 lg:px-10">
        <Link
          href="/"
          className="font-mono text-[12px] font-bold uppercase leading-5 tracking-[1.4px] text-ink"
        >
          David Salami
        </Link>
        <nav className="hidden items-center md:flex">
          {links.map((link, i) => {
            const active =
              pathname === link.href ||
              pathname === link.href.replace(/\/$/, '') ||
              pathname.startsWith(`${link.href.replace(/\/$/, '')}/`)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-mono text-[11px] uppercase leading-4 tracking-[1.2px] ${
                  i === 0 ? '' : 'pl-8'
                } ${active ? 'text-ink' : 'text-muted'}`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>
        <Link href="/work/" className="btn-outline h-9 px-4 text-[11px]">
          Work with me
        </Link>
      </div>
      <nav className="flex flex-wrap gap-x-5 gap-y-2 px-6 pb-3 md:hidden">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`font-mono text-[11px] uppercase tracking-[1.2px] ${
              pathname === link.href ||
              pathname === link.href.replace(/\/$/, '') ||
              pathname.startsWith(`${link.href.replace(/\/$/, '')}/`)
                ? 'text-ink'
                : 'text-muted'
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
