import { site } from '@/lib/site'

type Props = {
  size?: 'default' | 'wide'
}

export default function PaymentButtons({ size = 'default' }: Props) {
  const wide = size === 'wide'
  const stripeClass = wide
    ? 'btn-solid min-h-12 w-full max-w-xl px-8 text-[13px] tracking-[0.12em] lg:min-h-[72px]'
    : 'btn-solid'
  const paypalClass = wide
    ? 'btn-outline min-h-12 w-full max-w-xl px-8 text-[13px] tracking-[0.12em] lg:min-h-[72px]'
    : 'btn-outline'

  return (
    <div className={`flex flex-wrap items-center gap-3 ${wide ? 'w-full gap-8' : ''}`}>
      {site.stripe ? (
        <a href={site.stripe} target="_blank" rel="noopener noreferrer" className={stripeClass}>
          Pay with Stripe
        </a>
      ) : (
        <span className={`${stripeClass} cursor-not-allowed opacity-55`} aria-disabled>
          Pay with Stripe
        </span>
      )}
      {site.paypal ? (
        <a href={site.paypal} target="_blank" rel="noopener noreferrer" className={paypalClass}>
          Pay with PayPal
        </a>
      ) : (
        <span className={`${paypalClass} cursor-not-allowed opacity-55`} aria-disabled>
          Pay with PayPal
        </span>
      )}
    </div>
  )
}
