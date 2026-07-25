import { MapPin } from 'lucide-react'
import type { Metadata } from 'next'
import { Reveal, Stagger, StaggerItem, WordReveal } from '@/components/motion'
import { CtaBand, SectionHeading } from '@/components/page-shell'

export const metadata: Metadata = {
  title: 'Service Areas — Andhra Pradesh & Telangana',
  description: 'Solar Shield Technologies serves all districts across Andhra Pradesh and Telangana for rooftop solar and CCTV installations.',
}

const apDistricts = [
  'Vijayawada (Krishna)', 'Guntur', 'Prakasam', 'Nellore', 'West Godavari', 'East Godavari',
  'Visakhapatnam', 'Srikakulam', 'Vizianagaram', 'Anantapur', 'Kurnool', 'Kadapa', 'Chittoor',
]

const tsDistricts = [
  'Hyderabad', 'Rangareddy', 'Medchal–Malkajgiri', 'Sangareddy', 'Nizamabad', 'Warangal', 'Karimnagar', 'Khammam',
]

export default function ServiceAreasPage() {
  return (
    <>
      <section className="section-shell" style={{ paddingTop: '10rem' }}>
        <div style={{ display: 'grid', gap: '1rem', marginBottom: '4rem', maxWidth: '38rem' }}>
          <Reveal>
            <p className="chapter">Service areas</p>
          </Reveal>
          <WordReveal as="h1" text="Two states. Every district." delay={0.05} />
          <Reveal delay={0.1}>
            <p className="prose-body">
              We conduct site surveys, installations and maintenance across all districts of Andhra Pradesh and
              Telangana. Headquartered in Vijayawada, we reach most sites within 48 hours.
            </p>
          </Reveal>
        </div>

        <div style={{ display: 'grid', gap: '3.5rem', gridTemplateColumns: '1fr' }} className="split-2">
          <Reveal>
            <div style={{ display: 'grid', gap: '1.5rem' }}>
              <h2 className="display-sm">Andhra Pradesh</h2>
              <Stagger className="card-grid card-grid-2" step={0.03}>
                {apDistricts.map((d) => (
                  <StaggerItem key={d}>
                    <div style={{ display: 'flex', gap: '0.7rem', alignItems: 'center', padding: '0.9rem 1.1rem', border: '1px solid var(--line)', borderRadius: 3, background: 'var(--panel)' }}>
                      <MapPin aria-hidden="true" style={{ width: '0.9rem', height: '0.9rem', color: 'var(--amber)', flexShrink: 0 }} />
                      <span style={{ fontSize: '0.93rem', color: 'var(--muted-fg)' }}>{d}</span>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div style={{ display: 'grid', gap: '1.5rem' }}>
              <h2 className="display-sm">Telangana</h2>
              <Stagger className="card-grid card-grid-2" step={0.03}>
                {tsDistricts.map((d) => (
                  <StaggerItem key={d}>
                    <div style={{ display: 'flex', gap: '0.7rem', alignItems: 'center', padding: '0.9rem 1.1rem', border: '1px solid var(--line)', borderRadius: 3, background: 'var(--panel)' }}>
                      <MapPin aria-hidden="true" style={{ width: '0.9rem', height: '0.9rem', color: 'var(--signal)', flexShrink: 0 }} />
                      <span style={{ fontSize: '0.93rem', color: 'var(--muted-fg)' }}>{d}</span>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Not sure if we cover your area?"
        copy="Call us. If we can reach your site, we will survey it."
      />
    </>
  )
}
