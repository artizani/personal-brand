import type { ImgHTMLAttributes, ReactNode } from 'react'

function isExternal(href?: string) {
  return /^https?:\/\//.test(href ?? '')
}

export const mdxComponents = {
  h2: ({ children }: { children?: ReactNode }) => (
    <h2 className="t-h3 mt-10 scroll-mt-20 text-ink">{children}</h2>
  ),
  h3: ({ children }: { children?: ReactNode }) => (
    <h3 className="mt-8 scroll-mt-20 font-display text-[16px] font-bold text-ink">{children}</h3>
  ),
  p: ({ children }: { children?: ReactNode }) => (
    <p className="mt-5 text-[16px] leading-7 text-body/90">{children}</p>
  ),
  ul: ({ children }: { children?: ReactNode }) => (
    <ul className="mt-4 list-disc space-y-2 pl-5 text-[16px] leading-7 text-body/90">{children}</ul>
  ),
  ol: ({ children }: { children?: ReactNode }) => (
    <ol className="mt-4 list-decimal space-y-2 pl-5 text-[16px] leading-7 text-body/90">
      {children}
    </ol>
  ),
  li: ({ children }: { children?: ReactNode }) => <li className="pl-1">{children}</li>,
  blockquote: ({ children }: { children?: ReactNode }) => (
    <blockquote className="mt-6 border-l-[3px] border-black bg-paper px-5 py-4 text-[16px] leading-7 text-sage">
      {children}
    </blockquote>
  ),
  a: ({ href, children }: { href?: string; children?: ReactNode }) => {
    const external = isExternal(href)
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className="underline decoration-black/30 underline-offset-4 transition-colors hover:decoration-black"
      >
        {children}
        {external ? <span className="sr-only"> (opens in new tab)</span> : null}
      </a>
    )
  },
  img: ({ alt = '', ...rest }: ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img alt={alt} loading="lazy" decoding="async" className="mt-6 h-auto max-w-full" {...rest} />
  ),
  hr: () => <hr className="my-10 border-black/10" />,
}
