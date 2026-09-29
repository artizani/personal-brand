'use client'

import { useEffect } from 'react'

const SELECTOR = '.scroll-reveal:not(.is-revealed)'

/**
 * Mounted once in the root layout. Reveals every `.scroll-reveal` element as it
 * enters the viewport, after its optional `data-delay` (ms). Also picks up
 * elements added later (client navigation, client-rendered content).
 */
export default function ScrollRevealObserver() {
  useEffect(() => {
    const timers = new Set<number>()
    const watched = new WeakSet<Element>()

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const el = entry.target
          const delay = parseInt(el.getAttribute('data-delay') || '0', 10) || 0
          const timer = window.setTimeout(() => {
            timers.delete(timer)
            el.classList.add('is-revealed')
          }, delay)
          timers.add(timer)
          obs.unobserve(el)
        })
      },
      { root: null, rootMargin: '0px 0px -20px 0px', threshold: 0.05 },
    )

    const watch = (root: ParentNode) => {
      root.querySelectorAll(SELECTOR).forEach((el) => {
        if (watched.has(el)) return
        watched.add(el)
        observer.observe(el)
      })
    }

    watch(document)

    const mutations = new MutationObserver((records) => {
      records.forEach((record) => {
        record.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) return
          if (node.matches(SELECTOR) && !watched.has(node)) {
            watched.add(node)
            observer.observe(node)
          }
          watch(node)
        })
      })
    })
    mutations.observe(document.body, { childList: true, subtree: true })

    return () => {
      mutations.disconnect()
      observer.disconnect()
      timers.forEach((timer) => window.clearTimeout(timer))
    }
  }, [])

  return null
}
