import type { Metadata } from 'next'
import { Reveal, WordReveal } from '@/components/motion'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Solar Shield Technologies collects, uses and protects your personal information.',
}

export default function PrivacyPage() {
  return (
    <section className="section-shell" style={{ paddingTop: '10rem' }}>
      <div style={{ display: 'grid', gap: '1rem', marginBottom: '3rem', maxWidth: '38rem' }}>
        <Reveal><p className="chapter">Legal</p></Reveal>
        <WordReveal as="h1" text="Privacy policy." delay={0.05} />
        <Reveal delay={0.1}>
          <p className="prose-body">Last updated: July 2026</p>
        </Reveal>
      </div>
      <Reveal delay={0.15}>
        <div className="article-body">
          <h2>Information we collect</h2>
          <p>When you request a site survey, call us or submit an enquiry form, we collect your name, phone number, email address and property location. We use this information solely to respond to your enquiry, schedule a survey and prepare a system design.</p>

          <h2>How we use your data</h2>
          <p>Your information is used to provide the services you request — site surveys, system quotations and ongoing support. We do not sell, rent or share your personal data with third parties for marketing purposes.</p>

          <h2>Cookies and analytics</h2>
          <p>This website uses minimal analytics to understand traffic patterns. No personal data is stored in cookies. We use Vercel Analytics which processes data in aggregate without identifying individuals.</p>

          <h2>Data retention</h2>
          <p>We retain your contact information for as long as our business relationship is active or as required for legal compliance. You may request deletion at any time by contacting us.</p>

          <h2>Your rights</h2>
          <p>You have the right to access, correct or delete your personal data. To exercise these rights, contact us at info@solarshieldtech.com or call +91 938 118 1601.</p>

          <h2>Security</h2>
          <p>We implement reasonable security measures to protect your data. However, no internet transmission is completely secure, and we cannot guarantee absolute security.</p>

          <h2>Changes to this policy</h2>
          <p>We may update this policy periodically. The &ldquo;last updated&rdquo; date at the top reflects the most recent revision.</p>
        </div>
      </Reveal>
    </section>
  )
}
