function publicUrl(value: string | undefined) {
  const trimmed = value?.trim() ?? ''
  if (!trimmed) return ''
  if (/YOUR_|yourdomain|example\.com/i.test(trimmed)) return ''
  return trimmed
}

export const site = {
  name: 'David Salami',
  email: process.env.NEXT_PUBLIC_EMAIL?.trim() || 'hello@davidsalami.com',
  profileEmail: process.env.NEXT_PUBLIC_PROFILE_EMAIL?.trim() || 'salamibusiness@gmail.com',
  github: publicUrl(process.env.NEXT_PUBLIC_GITHUB_URL) || 'https://github.com',
  linkedin: publicUrl(process.env.NEXT_PUBLIC_LINKEDIN_URL) || 'https://www.linkedin.com',
  twitter: publicUrl(process.env.NEXT_PUBLIC_TWITTER_URL) || 'https://x.com',
  instagram: publicUrl(process.env.NEXT_PUBLIC_INSTAGRAM_URL) || 'https://www.instagram.com',
  stripe: publicUrl(process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK),
  paypal: publicUrl(process.env.NEXT_PUBLIC_PAYPAL_URL),
  calendly: publicUrl(process.env.NEXT_PUBLIC_CALENDLY_URL),
  formspree: publicUrl(process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT),
}

export const integrations = {
  stripe: Boolean(site.stripe),
  paypal: Boolean(site.paypal),
  calendly: Boolean(site.calendly),
  formspree: Boolean(site.formspree),
}
