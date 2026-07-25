import { ArrowUpRight, Check } from 'lucide-react'
import Image from 'next/image'
import type { Metadata } from 'next'
import { Reveal, Stagger, StaggerItem } from '@/components/motion'
import { CtaBand, PageHero, SectionHeading } from '@/components/page-shell'
import { services } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Services — Solar Installation, CCTV, Maintenance & Support',
  description:
    'End-to-end solar installation, CCTV services, panel maintenance, annual maintenance contracts and ongoing technical support across Andhra Pradesh and Telangana.',
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        kicker="Services"
        title="The work does not end at handover."
        copy="A solar array is a twenty-five year asset and a camera network is a living system. Both need someone who answers the phone."
        image="/images/service-install.jpeg"
        position="center 50%"
        crumbs={[['Services', '/services']]}
      />

      <section className="section-shell">
        <SectionHeading
          kicker="What we do"
          title="Five services. One accountable team."
          copy="From the first survey to the tenth annual inspection. Every service below is delivered by the same crew that knows your system."
        />

        <div style={{ display: 'grid', gap: '5rem' }}>
          {services.map((s, i) => (
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
                    alt={s.title}
                    fill
                    sizes="(min-width: 900px) 50vw, 100vw"
                    style={{ objectPosition: 'center 50%' }}
                  />
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div style={{ display: 'grid', gap: '1.2rem' }}>
                  <p className="chapter">{s.number} — {s.title}</p>
                  <h2 className="display-sm">{s.title}</h2>
                  <p className="prose-body">{s.text}</p>
                  <ul className="check-list">
                    {s.includes.map((item) => (
                      <li key={item}>
                        <Check aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      <CtaBand
        title="Start with a conversation."
        copy="Tell us what you need — solar, security or both — and we will survey the site, design the system and give you a written specification. Free, no obligation."
      />
    </>
  )
}
