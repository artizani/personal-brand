import type { ReactNode } from 'react'

export const mdxComponents = {
  h2: ({ children }: { children?: ReactNode }) => (
    <h2 className="t-h3 mt-10 text-ink">{children}</h2>
  ),
  h3: ({ children }: { children?: ReactNode }) => (
    <h3 className="mt-8 font-display text-[16px] font-bold text-ink">{children}</h3>
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
  a: ({ href, children }: { href?: string; children?: ReactNode }) => (
    <a href={href} className="underline decoration-black/30 underline-offset-4 hover:decoration-black">
      {children}
    </a>
  ),
  hr: () => <hr className="my-10 border-black/10" />,
}
