import { Check } from 'lucide-react'
import type { Metadata } from 'next'
import { Reveal, Stagger, StaggerItem, WordReveal } from '@/components/motion'
import { CtaBand, SectionHeading } from '@/components/page-shell'

export const metadata: Metadata = {
  title: 'Warranty & Standards',
  description: 'Warranty coverage, component standards and compliance details for Solar Shield Technologies installations.',
}

const panelWarranty = [
  ['Product warranty', '12 years — covers manufacturing defects'],
  ['Performance warranty', '25 years — ≥ 84.8% rated output at year 25'],
  ['Module certification', 'IEC 61215 & IEC 61730'],
  ['Module listing', 'ALMM (Approved List of Models and Manufacturers)'],
]

const inverterWarranty = [
  ['Product warranty', '5 – 10 years (brand dependent, extendable)'],
  ['Certification', 'BIS-certified with anti-islanding protection'],
  ['Remote monitoring', 'Included on all Wi-Fi enabled models'],
]

const cctvWarranty = [
  ['Camera warranty', '2 – 3 years manufacturer warranty'],
  ['NVR warranty', '2 years manufacturer warranty'],
  ['Hard drive', '3 years (surveillance-grade rated)'],
]

const workmanship = [
  'Mounting structure: galvanised steel or aluminium, rated for local wind zone',
  'DC wiring: UV-rated, double-insulated solar cable with MC4 connectors',
  'AC wiring: as per IS/IEC 60364 with RCBO protection',
  'Earthing: dedicated earth electrode with lightning arrester on DC side',
  'Surge protection: SPDs on both DC and AC sides',
  'Conduit and cable management: clean, labelled, accessible for maintenance',
]

export default function WarrantyPage() {
  return (
    <>
      <section className="section-shell" style={{ paddingTop: '10rem' }}>
        <div style={{ display: 'grid', gap: '1rem', marginBottom: '4rem', maxWidth: '38rem' }}>
          <Reveal><p className="chapter">Standards</p></Reveal>
          <WordReveal as="h1" text="What goes on your roof, and why." delay={0.05} />
          <Reveal delay={0.1}>
            <p className="prose-body">
              Every component we specify carries a manufacturer warranty, and every installation carries our
              workmanship warranty. Here is the full breakdown.
            </p>
          </Reveal>
        </div>

        <div style={{ display: 'grid', gap: '4rem' }}>
          <Reveal>
            <div style={{ display: 'grid', gap: '1.2rem' }}>
              <h2 className="display-sm">Solar panels</h2>
              <dl className="spec-table">
                {panelWarranty.map(([k, v]) => (
                  <div className="spec-row" key={k}><dt>{k}</dt><dd>{v}</dd></div>
                ))}
              </dl>
            </div>
          </Reveal>

          <Reveal>
            <div style={{ display: 'grid', gap: '1.2rem' }}>
              <h2 className="display-sm">Inverters</h2>
              <dl className="spec-table">
                {inverterWarranty.map(([k, v]) => (
                  <div className="spec-row" key={k}><dt>{k}</dt><dd>{v}</dd></div>
                ))}
              </dl>
            </div>
          </Reveal>

          <Reveal>
            <div style={{ display: 'grid', gap: '1.2rem' }}>
              <h2 className="display-sm">CCTV equipment</h2>
              <dl className="spec-table">
                {cctvWarranty.map(([k, v]) => (
                  <div className="spec-row" key={k}><dt>{k}</dt><dd>{v}</dd></div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="services-section">
        <div className="section-shell">
          <SectionHeading
            kicker="Installation standard"
            title="Workmanship warranty: 2 years."
            copy="Beyond the component warranties, we warrant our installation work for two full years from commissioning. These are the non-negotiables on every install."
          />
          <Stagger className="card-grid card-grid-2" step={0.06}>
            {workmanship.map((s) => (
              <StaggerItem key={s}>
                <div style={{ display: 'flex', gap: '0.8rem', padding: '1.3rem 1.4rem', border: '1px solid var(--line)', borderRadius: 3, background: 'var(--panel)', alignItems: 'flex-start' }}>
                  <Check aria-hidden="true" style={{ width: '1rem', height: '1rem', color: 'var(--signal)', flexShrink: 0, marginTop: '0.28rem' }} />
                  <p style={{ color: 'var(--muted-fg)', fontSize: '0.93rem', lineHeight: 1.6 }}>{s}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CtaBand
        title="See these standards in person."
        copy="A free site survey lets you meet the team, see sample components and get a written specification for your property."
      />
    </>
  )
}
