import { site } from '@/lib/site'

function embedSrc(url: string) {
  try {
    const next = new URL(url)
    next.searchParams.set('hide_gdpr_banner', '1')
    next.searchParams.set('hide_landing_page_details', '1')
    return next.toString()
  } catch {
    return url
  }
}

export default function CalendlyEmbed() {
  if (!site.calendly) {
    return (
      <div className="border border-black/15 bg-white p-5">
        <p className="t-h3 max-w-xl">Sessions are scheduled directly — pick a time that works for you.</p>
        <p className="mt-3 max-w-2xl text-[14px] leading-6 text-sage">
          The Calendly scheduler will appear here once booking is connected.
        </p>
      </div>
    )
  }

  return (
    <div className="overflow-hidden border border-black/15 bg-white">
      <div className="flex flex-col items-start justify-between gap-4 p-5 lg:flex-row lg:items-center">
        <p className="t-h3 max-w-xl">
          Sessions are scheduled directly — pick a time that works for you.
        </p>
        <a
          href={site.calendly}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-solid"
        >
          Book a Session →
        </a>
      </div>
      <iframe
        title="Book a Calendly session"
        src={embedSrc(site.calendly)}
        className="h-[680px] w-full border-t border-black/10"
      />
    </div>
  )
}
