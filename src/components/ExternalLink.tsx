import type { AnchorHTMLAttributes, ReactNode } from 'react'

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & { children: ReactNode }

/** Opens in a new tab and tells screen readers so. */
export default function ExternalLink({ children, ...rest }: Props) {
  return (
    <a target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
      <span className="sr-only"> (opens in new tab)</span>
    </a>
  )
}
