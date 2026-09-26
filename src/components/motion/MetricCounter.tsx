'use client'

import { useEffect, useRef } from 'react'

type Props = {
  target: number
  decimals?: number
  duration?: number
  className?: string
}

const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t))

/**
 * Counts from 0 to `target` once its enclosing <section> (or itself, if none)
 * is 25% visible, so all counters in one section start together.
 */
export default function MetricCounter({ target, decimals = 0, duration = 1800, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.textContent = target.toFixed(decimals)
      return
    }

    let frame = 0
    const run = () => {
      const startTime = performance.now()
      const update = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1)
        el.textContent = (easeOutExpo(progress) * target).toFixed(decimals)
        if (progress < 1) frame = requestAnimationFrame(update)
        else el.textContent = target.toFixed(decimals)
      }
      frame = requestAnimationFrame(update)
    }

    const trigger = el.closest('section') ?? el
    const observer = new IntersectionObserver(
      (entries, obs) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          obs.disconnect()
          run()
        }
      },
      { threshold: 0.25 },
    )
    observer.observe(trigger)

    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [target, decimals, duration])

  return (
    <span ref={ref} className={className ? `counter ${className}` : 'counter'}>
      {(0).toFixed(decimals)}
    </span>
  )
}
