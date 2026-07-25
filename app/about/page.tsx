import { Check, ShieldCheck, Users, Zap } from 'lucide-react'
import Image from 'next/image'
import type { Metadata } from 'next'
import { Counter, Reveal, Stagger, StaggerItem, WordReveal } from '@/components/motion'
import { CtaBand, PageHero, SectionHeading } from '@/components/page-shell'

export const metadata: Metadata = {
  title: 'About Solar Shield Technologies',
  description:
    'Solar Shield Technologies delivers integrated rooftop solar and intelligent CCTV security across Andhra Pradesh and Telangana. One team, one standard, one number to call.',
}

const values = [
  {
    icon: Zap,
    title: 'Specify honestly',
    body: 'Load studies and shade analysis decide your system size. If a smaller system serves you better, that is what we recommend.',
  },
  {
    icon: Users,
    title: 'One accountable team',
    body: 'Survey, design, install and service handled in-house. No subcontractor pointing at the other one when something needs fixing.',
  },
  {
    icon: ShieldCheck,
    title: 'Build to last',
    body: 'ALMM-listed modules, BIS-certified inverters, galvanised structure. We specify components that still perform in year fifteen, not components that win on price in year one.',
  },
]

const timeline = [
  { year: '2019', event: 'Founded in Vijayawada with a focus on residential rooftop solar.' },
  { year: '2020', event: 'Expanded to commercial and industrial installations across Krishna district.' },
  { year: '2021', event: 'Added CCTV and integrated security to the service line.' },
  { year: '2022', event: 'Reached 100+ installations. Began serving Guntur, Prakasam and West Godavari.' },
  { year: '2024', event: 'Expanded into Telangana. Introduced solar-powered CCTV for remote sites.' },
  { year: '2026', event: 'PM Surya Ghar approved installer. MNRE empanelled. Serving all of AP and Telangana.' },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About us"
        title="One roof. Two kinds of peace of mind."
        copy="Solar Shield Technologies delivers integrated rooftop solar and intelligent CCTV security for homes, businesses, farms and industrial sites across Andhra Pradesh and Telangana."
        image="/images/solar-estate.jpeg"
        position="center 48%"
        crumbs={[['About', '/about']]}
      />

      <section className="section-shell">
        <div style={{ display: 'grid', gap: '2.5rem', gridTemplateColumns: '1fr' }} className="split-2">
          <Reveal>
            <div style={{ display: 'grid', gap: '1.2rem' }}>
              <p className="chapter">The thesis</p>
              <h2 className="display-sm">Most buildings buy power from one company and safety from another.</h2>
              <p className="prose-body">
                We think a building should generate its own electricity and watch its own perimeter — designed once,
                by one team, so nothing falls between the two. That is the entire business, and we have been doing it
                since 2019.
              </p>
              <p className="prose-body">
                Every system we install is surveyed, designed and built by the same crew. There is no handoff
                between a sales team and a technical team, and there is no subcontractor who disappears after
                commissioning. The person who measures your roof is the same person who answers the phone two years
                later.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div
              className="frame frame-inset frame-zoom"
              style={{ aspectRatio: '4/3', borderRadius: 3, border: '1px solid var(--line)' }}
            >
              <Image
                src="/images/service-install.jpeg"
                alt="Solar Shield installation team at work"
                fill
                sizes="(min-width: 900px) 50vw, 100vw"
                style={{ objectPosition: 'center 50%' }}
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="services-section">
        <div className="section-shell">
          <SectionHeading
            kicker="How we work"
            title="Three principles."
          />
          <Stagger className="card-grid card-grid-3" step={0.1}>
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div style={{ display: 'grid', gap: '1rem', padding: '2rem', border: '1px solid var(--line)', borderRadius: 3, background: 'var(--panel)', height: '100%', alignContent: 'start' }}>
                  <v.icon aria-hidden="true" style={{ width: '1.5rem', height: '1.5rem', color: 'var(--amber)' }} />
                  <h3 className="display-sm">{v.title}</h3>
                  <p className="prose-body" style={{ fontSize: '0.93rem' }}>{v.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading
          kicker="Timeline"
          title="Getting here."
        />
        <div className="process">
          {timeline.map((t, i) => (
            <Reveal key={t.year} delay={i * 0.04} className="process-step">
              <h3>{t.year}</h3>
              <p>{t.event}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell" style={{ paddingTop: 0 }}>
        <Stagger className="stat-strip" step={0.07}>
          <StaggerItem className="stat-cell">
            <b><Counter value={500} suffix="+" /></b>
            <p>Systems installed</p>
            <small>Residential, commercial, industrial</small>
          </StaggerItem>
          <StaggerItem className="stat-cell">
            <b><Counter value={2} suffix=" states" /></b>
            <p>Service coverage</p>
            <small>Andhra Pradesh &amp; Telangana</small>
          </StaggerItem>
          <StaggerItem className="stat-cell">
            <b><Counter value={7} suffix=" yrs" /></b>
            <p>In business</p>
            <small>Since 2019</small>
          </StaggerItem>
          <StaggerItem className="stat-cell">
            <b><Counter value={25} suffix=" yr" /></b>
            <p>Panel warranty tier</p>
            <small>ALMM-listed modules</small>
          </StaggerItem>
        </Stagger>
      </section>

      <CtaBand
        title="Meet us on your roof."
        copy="The site survey is free and there is no obligation. You get a written system recommendation whether or not you go ahead."
      />
    </>
  )
}
