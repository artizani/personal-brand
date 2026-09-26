import ExternalLink from '@/components/ExternalLink'
import { site } from '@/lib/site'

type Props = {
  size?: 'default' | 'wide'
}

const wideClass = 'min-h-12 w-full max-w-xl px-8 text-[13px] tracking-[0.12em] lg:min-h-[72px]'

function PaymentButton({ href, label, className }: { href: string; label: string; className: string }) {
  if (!href) {
    return (
      <button
        type="button"
        disabled
        aria-describedby="payments-unavailable"
        className={`${className} cursor-not-allowed opacity-55`}
      >
        {label}
      </button>
    )
  }
  return (
    <ExternalLink href={href} className={className}>
      {label}
    </ExternalLink>
  )
}

export default function PaymentButtons({ size = 'default' }: Props) {
  const wide = size === 'wide'
  const stripeClass = wide ? `btn-solid ${wideClass}` : 'btn-solid'
  const paypalClass = wide ? `btn-outline ${wideClass}` : 'btn-outline'

  return (
    <div className={`flex flex-wrap items-center gap-3 ${wide ? 'w-full gap-8' : ''}`}>
      <PaymentButton href={site.stripe} label="Pay with Stripe" className={stripeClass} />
      <PaymentButton href={site.paypal} label="Pay with PayPal" className={paypalClass} />
    </div>
  )
}
