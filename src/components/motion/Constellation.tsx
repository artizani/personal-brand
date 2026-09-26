'use client'

import { useRef, type CSSProperties, type MouseEvent } from 'react'

const DEFAULT_LABELS = [
  'Book a call',
  'Work with me',
  'Executive Advisory',
  'Call to speak',
  'Book a session',
] as const

const NODE_POSITIONS: CSSProperties[] = [
  { top: '20%', left: '8%' },
  { top: '15%', right: '10%' },
  { top: '50%', left: '18%' },
  { top: '48%', right: '12%' },
  { top: '75%', left: '35%' },
]

type Props = {
  /** Up to five pill labels, in node order. */
  labels?: readonly string[]
}

/** Floating tag cloud that drifts toward the cursor (parallax per node). */
export default function Constellation({ labels = DEFAULT_LABELS }: Props) {
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([])

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const mouseX = (e.clientX - rect.left) / rect.width - 0.5
    const mouseY = (e.clientY - rect.top) / rect.height - 0.5
    nodeRefs.current.forEach((node, idx) => {
      if (!node) return
      const factor = (idx + 1) * 8
      node.style.transform = `translate(${mouseX * factor}px, ${mouseY * factor}px)`
    })
  }

  const onMouseLeave = () => {
    nodeRefs.current.forEach((node) => {
      if (node) node.style.transform = 'translate(0, 0)'
    })
  }

  return (
    <div className="constellation-container" onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
      <svg
        className="constellation-lines"
        viewBox="0 0 360 260"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <line x1="80" y1="60" x2="260" y2="70" className="conn-line" />
        <line x1="260" y1="70" x2="190" y2="150" className="conn-line" />
        <line x1="80" y1="60" x2="100" y2="150" className="conn-line" />
        <line x1="100" y1="150" x2="240" y2="200" className="conn-line" />
        <line x1="190" y1="150" x2="240" y2="200" className="conn-line" />
      </svg>
      {labels.slice(0, NODE_POSITIONS.length).map((label, idx) => (
        <div
          key={label}
          ref={(node) => {
            nodeRefs.current[idx] = node
          }}
          className={`constellation-node node-${idx + 1}`}
          style={NODE_POSITIONS[idx]}
        >
          <span className="node-pill">{label}</span>
        </div>
      ))}
    </div>
  )
}
