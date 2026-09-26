'use client'

import { useEffect } from 'react'

const HEADER_OFFSET = 70

/**
 * Mounted once in the root layout. Same-page `#hash` links scroll smoothly to
 * their target, offset for the fixed header. The skip link is left native so
 * it still moves keyboard focus.
 */
export default function SmoothScrollAnchors() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
        return
      }
      const anchor = (e.target as Element | null)?.closest?.('a[href^="#"]:not(.skip-link)')
      if (!anchor) return

      const targetId = anchor.getAttribute('href')
      if (!targetId || targetId === '#') return

      let target: Element | null = null
      try {
        target = document.querySelector(targetId)
      } catch {
        return
      }
      if (!target) return

      e.preventDefault()
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET,
        behavior: reduceMotion ? 'auto' : 'smooth',
      })
    }

    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return null
}
