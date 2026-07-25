import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Manrope } from 'next/font/google'
import { ScrollProgress } from '@/components/motion'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import './globals.css'

const body = Manrope({ subsets: ['latin'], variable: '--font-body', display: 'swap' })
const display = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://solarshieldtech.com'),
  title: {
    default: 'Solar Shield Technologies | Rooftop Solar & CCTV Security in Andhra Pradesh',
    template: '%s | Solar Shield Technologies',
  },
  description:
    'Integrated rooftop solar and intelligent CCTV security for homes, businesses, farms and industrial sites across Andhra Pradesh and Telangana. Free site survey, PM Surya Ghar subsidy handled end to end.',
  generator: 'v0.app',
  keywords: [
    'rooftop solar Andhra Pradesh',
    'solar installation Vijayawada',
    'CCTV installation',
    'solar CCTV',
    'hybrid solar system',
    'on-grid solar',
    'off-grid solar',
    'PM Surya Ghar subsidy',
    'net metering',
  ],
  openGraph: {
    title: 'Solar Shield Technologies',
    description: 'Power that performs. Protection that persists.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Solar Shield Technologies',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solar Shield Technologies',
    description: 'Power that performs. Protection that persists.',
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#111820',
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`bg-background ${body.variable} ${display.variable}`}>
      <body className="font-sans antialiased">
        <ScrollProgress />
        <SiteHeader />
        <main id="top">{children}</main>
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
