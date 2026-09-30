'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

const links = [
  { href: '/about/', label: 'About' },
  { href: '/company/', label: 'Company' },
  { href: '/writing/', label: 'Writing' },
  { href: '/speaking/', label: 'Speaking' },
  { href: '/work/', label: 'Work' },
]

const ctaHref = '/work/'

function isActive(pathname: string, href: string) {
  const base = href.replace(/\/$/, '')
  return pathname === href || pathname === base || pathname.startsWith(`${base}/`)
}

export default function Navigation() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const menuBtnRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return

    const onClick = (e: MouseEvent) => {
      const target = e.target as Node
      if (!navRef.current?.contains(target) && !menuBtnRef.current?.contains(target)) {
        setMenuOpen(false)
      }
    }
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }

    document.addEventListener('click', onClick)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('click', onClick)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)
  const ctaActive = isActive(pathname, ctaHref)

  return (
    <header className={`site-header xp${scrolled ? ' scrolled' : ''}`}>
      <div className="header-container">
        <Link href="/" className="brand-logo" aria-label="David Salami Home">
          <span className="logo-text">David Salami</span>
        </Link>

        <nav
          ref={navRef}
          id="site-nav"
          className={`site-nav${menuOpen ? ' mobile-open' : ''}`}
          aria-label="Primary Navigation"
        >
          <ul className="nav-links">
            {links.map((link) => {
              const active = isActive(pathname, link.href)
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`nav-link${active ? ' active' : ''}`}
                    aria-current={active ? 'page' : undefined}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>
          <div className="mobile-nav-cta">
            <Link
              href={ctaHref}
              className={`btn mobile-cta-btn${ctaActive ? ' active' : ''}`}
              aria-current={ctaActive ? 'page' : undefined}
              onClick={closeMenu}
            >
              WORK WITH ME
            </Link>
          </div>
        </nav>

        <div className="header-cta">
          <Link
            href={ctaHref}
            className="btn btn-outline-nav"
            aria-current={ctaActive ? 'page' : undefined}
          >
            WORK WITH ME
          </Link>
        </div>

        <button
          ref={menuBtnRef}
          type="button"
          className={`mobile-menu-btn${menuOpen ? ' is-active' : ''}`}
          aria-label="Toggle Navigation Menu"
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
      </div>
    </header>
  )
}
