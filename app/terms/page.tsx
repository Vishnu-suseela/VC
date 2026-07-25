import type { Metadata } from 'next'
import { Reveal, WordReveal } from '@/components/motion'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms and conditions governing the use of Solar Shield Technologies services and website.',
}

export default function TermsPage() {
  return (
    <section className="section-shell" style={{ paddingTop: '10rem' }}>
      <div style={{ display: 'grid', gap: '1rem', marginBottom: '3rem', maxWidth: '38rem' }}>
        <Reveal><p className="chapter">Legal</p></Reveal>
        <WordReveal as="h1" text="Terms of service." delay={0.05} />
        <Reveal delay={0.1}>
          <p className="prose-body">Last updated: July 2026</p>
        </Reveal>
      </div>
      <Reveal delay={0.15}>
        <div className="article-body">
          <h2>Scope of services</h2>
          <p>Solar Shield Technologies provides rooftop solar installation, CCTV security solutions, maintenance services and technical support across Andhra Pradesh and Telangana. All services are subject to a site survey and written quotation accepted by the client.</p>

          <h2>Quotations and pricing</h2>
          <p>All quotations are valid for 30 days from the date of issue unless otherwise stated. Prices are inclusive of installation labour and standard materials. Any additional structural work, electrical upgrades or permits required beyond the standard scope will be quoted separately.</p>

          <h2>Payment terms</h2>
          <p>Payment schedules are outlined in each project quotation. Typical terms are an advance upon acceptance, a progress payment at installation completion and a final payment upon commissioning.</p>

          <h2>Warranties</h2>
          <p>Product warranties (panels, inverters, cameras) are provided by the respective manufacturers and passed through to the client. Installation workmanship is warranted by Solar Shield Technologies for two years from commissioning.</p>

          <h2>Subsidy facilitation</h2>
          <p>We assist with PM Surya Ghar and state subsidy applications as a service. Subsidy approval, amount and disbursement are determined by the respective government agencies and are not guaranteed by Solar Shield Technologies.</p>

          <h2>Limitation of liability</h2>
          <p>Solar Shield Technologies is not liable for indirect, incidental or consequential damages arising from the use of our systems. Our total liability is limited to the value of the specific service or product in question.</p>

          <h2>Governing law</h2>
          <p>These terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in Vijayawada, Andhra Pradesh.</p>

          <h2>Contact</h2>
          <p>For questions about these terms, contact info@solarshieldtech.com or call +91 938 118 1601.</p>
        </div>
      </Reveal>
    </section>
  )
}
