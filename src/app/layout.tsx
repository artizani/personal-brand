import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono, Plus_Jakarta_Sans, Sora } from 'next/font/google'
import './globals.css'
import '@/styles/executive.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ScrollProgressBar from '@/components/ScrollProgressBar'
import ScrollRevealObserver from '@/components/motion/ScrollRevealObserver'
import SmoothScrollAnchors from '@/components/motion/SmoothScrollAnchors'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
  weight: ['400', '600', '700'],
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'David Salami — Founder & Technology Leader',
  description:
    'Founder and growth executive building companies that turn complex, real-world markets into scalable products and durable revenue.',
}

export const viewport: Viewport = {
  themeColor: '#fcfcfc',
  colorScheme: 'light',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} ${jakarta.variable} ${jetbrains.variable}`}
    >
      <body className="font-sans">
        <a href="#main" className="skip-link">
          Skip to Content
        </a>
        <ScrollProgressBar />
        <Navigation />
        {children}
        <Footer />
        <ScrollRevealObserver />
        <SmoothScrollAnchors />
      </body>
    </html>
  )
}
