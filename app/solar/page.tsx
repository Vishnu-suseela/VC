import { Check, Info } from 'lucide-react'
import Image from 'next/image'
import type { Metadata } from 'next'
import { Counter, Reveal, Stagger, StaggerItem } from '@/components/motion'
import { CtaBand, PageHero, SectionHeading } from '@/components/page-shell'
import { solarSystems } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Rooftop Solar Systems — On-grid, Off-grid & Hybrid',
  description:
    'On-grid, off-grid and hybrid rooftop solar designed around your load, roof and grid reliability. PM Surya Ghar subsidy, net metering and payback explained plainly.',
}

const subsidyRows: [string, string][] = [
  ['Up to 2 kW', '₹30,000 per kW'],
  ['3rd kW', '₹18,000 for that kW'],
  ['3 kW and above', '₹78,000 capped total'],
]

const costRows: [string, string][] = [
  ['1 kW', '₹55,000 – ₹75,000'],
  ['3 kW', '₹1.50 – ₹2.00 lakh'],
  ['5 kW', '₹2.50 – ₹3.25 lakh'],
  ['10 kW', '₹4.75 – ₹6.00 lakh'],
]

const process = [
  {
    title: 'Site survey and shade study',
    body: 'We measure usable roof area, check tilt and azimuth, and trace shading from parapets, tanks, trees and neighbouring buildings across the day. Nothing gets sized off a phone call.',
  },
  {
    title: 'Load analysis and system sizing',
    body: 'Twelve months of bills tell us your real consumption pattern. We size the array to your annual units and, on hybrid systems, size the battery to your night load rather than to the largest number on a price list.',
  },
  {
    title: 'Written design and quotation',
    body: 'You receive a single-line diagram, module and inverter datasheets, expected annual generation, subsidy breakdown and net cost. Typically within 48 hours of the survey.',
  },
  {
    title: 'Subsidy registration and DISCOM approval',
    body: 'We register the application on the National Portal, submit feasibility documents to the DISCOM and track the approval so you are not chasing reference numbers.',
  },
  {
    title: 'Installation and commissioning',
    body: 'Mounting structure, module laying, DC and AC wiring, earthing and lightning protection, then inverter configuration. Two to four days on site for a typical residential system.',
  },
  {
    title: 'Net meter and handover',
    body: 'Bidirectional meter installation, inspection, and commissioning certificate. We walk you through the monitoring app before we leave and register your warranty.',
  },
]

const standards = [
  'ALMM-listed modules, mandatory for subsidy eligibility',
  'IEC 61215 and IEC 61730 certified panels',
  'BIS-certified inverters with anti-islanding protection',
  'Galvanised or aluminium structure rated for local wind loads',
  'Dedicated earthing and surge protection on DC and AC sides',
  'MNRE-empanelled installation with commissioning documentation',
]

export default function SolarPage() {
  return (
    <>
      <PageHero
        kicker="Solar systems"
        title="Sunlight is free. Engineering is what makes it pay."
        copy="Three system architectures, one specification standard. We design around your grid reliability, your night load and your actual roof, then show you the arithmetic behind the recommendation."
        image="/images/solar-estate.jpeg"
        position="center 48%"
        crumbs={[['Solar', '/solar']]}
      />

      <section className="section-shell">
        <SectionHeading
          kicker="Choosing an architecture"
          title="On-grid, off-grid or hybrid."
          copy="Most homes with a stable supply want on-grid. Sites with no grid or a very unreliable one want off-grid or hybrid. The differences are worth understanding before you sign anything."
        />

        <div style={{ display: 'grid', gap: '5rem' }}>
          {solarSystems.map((s, i) => (
            <div
              key={s.slug}
              id={s.slug}
              style={{
                display: 'grid',
                gap: '2.5rem',
                gridTemplateColumns: '1fr',
                alignItems: 'center',
              }}
              className="solar-detail"
            >
              <Reveal className={i % 2 === 1 ? 'solar-detail-media-alt' : 'solar-detail-media'}>
                <div
                  className="frame frame-inset frame-zoom"
                  style={{ aspectRatio: '4 / 3', borderRadius: 3, border: '1px solid var(--line)' }}
                >
                  <Image
                    src={s.image || '/placeholder.svg'}
                    alt={`${s.label} solar system`}
                    fill
                    sizes="(min-width: 900px) 50vw, 100vw"
                    style={{ objectPosition: s.position }}
                  />
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div style={{ display: 'grid', gap: '1.2rem' }}>
                  <p className="chapter">{s.label}</p>
                  <h2 className="display-sm">{s.title}</h2>
                  <p className="prose-body">{s.text}</p>
                  <p className="prose-body" style={{ fontSize: '0.9rem' }}>
                    <strong style={{ color: 'var(--foreground)' }}>Best suited to:</strong> {s.best}
                  </p>
                  <dl className="spec-table">
                    {s.spec.map(([k, v]) => (
                      <div className="spec-row" key={k}>
                        <dt>{k}</dt>
                        <dd>{v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      <section className="services-section" id="economics">
        <div className="section-shell">
          <SectionHeading
            kicker="Subsidy and payback"
            title="What it costs and when it pays back."
            copy="Figures below reflect the PM Surya Ghar Muft Bijli Yojana structure as it stands in 2026. Your DISCOM tariff and consumption pattern move the payback more than anything else."
          />

          <div style={{ display: 'grid', gap: '2.5rem', gridTemplateColumns: '1fr' }} className="economics-grid">
            <Reveal>
              <div style={{ display: 'grid', gap: '1.1rem' }}>
                <h3 className="display-sm">Central subsidy structure</h3>
                <dl className="spec-table">
                  {subsidyRows.map(([k, v]) => (
                    <div className="spec-row" key={k}>
                      <dt>{k}</dt>
                      <dd>{v}</dd>
                    </div>
                  ))}
                </dl>
                <div className="note">
                  <Info aria-hidden="true" />
                  <p>
                    Subsidy applies to residential consumers only, requires ALMM-listed modules and an MNRE-empanelled installer,
                    and is credited to your bank account after commissioning and net-meter installation. Some states add a top-up.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div style={{ display: 'grid', gap: '1.1rem' }}>
                <h3 className="display-sm">Indicative gross cost</h3>
                <dl className="spec-table">
                  {costRows.map(([k, v]) => (
                    <div className="spec-row" key={k}>
                      <dt>{k}</dt>
                      <dd>{v}</dd>
                    </div>
                  ))}
                </dl>
                <p className="prose-body" style={{ fontSize: '0.88rem' }}>
                  Ranges reflect module technology, structure height, cable runs and whether a battery is included. A 3 kW home
                  claiming the full ₹78,000 typically nets ₹85,000 to ₹1.2 lakh out of pocket.
                </p>
              </div>
            </Reveal>
          </div>

          <Stagger className="stat-strip" step={0.07} >
            <StaggerItem className="stat-cell">
              <b>
                <Counter value={4.6} suffix=" kWh" decimals={1} />
              </b>
              <p>Average daily yield per kW installed</p>
              <small>Coastal Andhra, annualised</small>
            </StaggerItem>
            <StaggerItem className="stat-cell">
              <b>
                <Counter value={78000} prefix="₹" />
              </b>
              <p>Maximum central subsidy on a residential system</p>
              <small>3 kW and above</small>
            </StaggerItem>
            <StaggerItem className="stat-cell">
              <b>
                <Counter value={5} suffix=" – 7 yrs" />
              </b>
              <p>Typical payback on a well-sited on-grid home</p>
              <small>With net metering</small>
            </StaggerItem>
            <StaggerItem className="stat-cell">
              <b>
                <Counter value={25} suffix=" yrs" />
              </b>
              <p>Module performance warranty</p>
              <small>ALMM-listed modules</small>
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      <section className="section-shell" id="process">
        <SectionHeading
          kicker="How an install runs"
          title="Six stages, no surprises."
          copy="From the first roof measurement to the commissioning certificate. You will know which stage you are in at any point."
        />
        <div className="process">
          {process.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.04} className="process-step">
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="services-section" id="standards">
        <div className="section-shell">
          <SectionHeading
            kicker="Specification standard"
            title="What goes on your roof, and why."
            copy="Cheap systems save money in places you cannot see. These are the non-negotiables on every install we sign our name to."
          />
          <Stagger className="card-grid card-grid-2" step={0.06}>
            {standards.map((s) => (
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
        title="Find out what your roof can actually produce."
        copy="A free survey gives you measured roof area, a shade assessment, an expected annual generation figure and a written subsidy breakdown. No obligation either way."
      />
    </>
  )
}
