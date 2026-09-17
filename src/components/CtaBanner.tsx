import Link from 'next/link'
import { site } from '@/lib/site'

const pills = [
  { label: 'Book a call', rotate: 'rotate-[7deg]', top: 'top-[36%]', left: 'left-[62%]' },
  { label: 'Contact Me', rotate: 'rotate-[5deg]', top: 'top-[20%]', left: 'left-[74%]' },
  { label: 'Work with me', rotate: '-rotate-[2deg]', top: 'top-[50%]', left: 'left-[76%]' },
  { label: 'Book a session', rotate: 'rotate-[1deg]', top: 'top-[62%]', left: 'left-[64%]' },
]

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-14 text-white lg:px-16 lg:py-16">
      <div className="pointer-events-none absolute bottom-0 left-16 size-20 rounded-t-full bg-white/5" />
      <div className="pointer-events-none absolute bottom-0 right-10 top-16 w-40 border-l border-white/10 opacity-30" />

      <div className="relative z-10 max-w-xl">
        <a href={`mailto:${site.email}`} className="text-[14px] font-light text-[#e8ede5]/90 underline">
          {site.email}
        </a>
        <h2 className="t-h2 mt-3 text-white">For advisory, speaking, or collaboration.</h2>
        <p className="mt-4 max-w-lg text-[15px] leading-6 text-white/85">
          I&apos;m open to conversations with founders, investors, technology companies, and
          strategic partners working on ambitious problems.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link href="/work/" className="inline-flex h-11 items-center bg-white px-5 text-[12px] font-semibold uppercase tracking-[0.08em] text-black">
            Work with me →
          </Link>
          <a
            href={site.calendly || '/work/#book'}
            target={site.calendly ? '_blank' : undefined}
            rel={site.calendly ? 'noopener noreferrer' : undefined}
            className="btn-ghost"
          >
            Book a session
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        {pills.map((pill) => (
          <span
            key={pill.label}
            className={`absolute flex h-11 w-44 items-center justify-center rounded-full border border-gray-300 text-[11px] font-medium uppercase tracking-[1.2px] text-white opacity-50 ${pill.rotate} ${pill.top} ${pill.left}`}
          >
            {pill.label}
          </span>
        ))}
      </div>
    </section>
  )
}
