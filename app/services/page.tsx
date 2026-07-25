import { ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Reveal, ScrollRule, Stagger, StaggerItem, WordReveal } from '@/components/motion'
import { CtaBand, PageHero, SectionHeading } from '@/components/page-shell'
import { ServiceIndex } from '@/components/service-index'

export const metadata: Metadata = {
  title: 'Services — Solar Installation, CCTV, Maintenance & Support',
  description:
    'End-to-end solar installation, CCTV services, panel maintenance, annual maintenance contracts and ongoing technical support across Andhra Pradesh and Telangana.',
}

const promise = [
  { k: 'Survey to quote', v: '72 hours', note: 'Measured drawing, shade study and written specification.' },
  { k: 'Install window', v: '2–5 days', note: 'Residential rooftop, from scaffolding to commissioning.' },
  { k: 'Support response', v: 'Same day', note: 'Remote diagnostics first; a technician on site if it needs one.' },
  { k: 'Performance cover', v: '25 years', note: 'Module warranty, with inverter and workmanship documented separately.' },
]

export default function ServicesPage() {
  return (
    <>
      <PageHero
        kicker="Services"
        title="Five services. One accountable team."
        copy="Nothing here is subcontracted. The crew that surveys your roof is the crew that installs it, and the technician who answers your call already knows the system by name."
        image="/images/service-install.jpeg"
        position="center 42%"
        crumbs={[['Services', '/services']]}
      />

      <section className="section-shell">
        <SectionHeading
          kicker="The sequence"
          title="Read top to bottom. That is the order it happens in."
          copy="Each service hands over to the next. Scroll through and the frame on the left follows you, so you can see the work while you read what it covers."
        />
        <ServiceIndex detailed />
      </section>

      <section className="section-shell section-shell-tight" aria-label="Service commitments">
        <ScrollRule className="scroll-rule" />
        <div style={{ marginTop: '3.5rem', display: 'grid', gap: '2.5rem' }}>
          <div>
            <Reveal>
              <p className="chapter">In writing</p>
            </Reveal>
            <WordReveal as="h2" className="display-md" text="The numbers we commit to before you commit to us." />
          </div>

          <Stagger className="card-grid card-grid-2" step={0.08}>
            {promise.map((p) => (
              <StaggerItem key={p.k}>
                <div
                  style={{
                    display: 'grid',
                    gap: '0.6rem',
                    padding: '2rem',
                    border: '1px solid var(--line)',
                    borderRadius: 3,
                    background: 'var(--panel)',
                    height: '100%',
                    alignContent: 'start',
                  }}
                >
                  <span className="mono-label">{p.k}</span>
                  <b
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontWeight: 400,
                      fontSize: 'clamp(1.7rem, 3vw, 2.4rem)',
                      color: 'var(--amber)',
                      lineHeight: 1.05,
                    }}
                  >
                    {p.v}
                  </b>
                  <p className="prose-body" style={{ fontSize: '0.9rem' }}>
                    {p.note}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.1}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
              <Link href="/warranty" className="button button-ghost">
                Read the full warranty
                <ArrowRight aria-hidden="true" />
              </Link>
              <Link href="/faq" className="button button-ghost">
                Common questions
                <ArrowRight aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Start with a conversation, not a quote."
        copy="Tell us what you need — solar, security or both. We survey the site, design the system and hand you a written specification. Free, and yours to keep either way."
      />
    </>
  )
}
