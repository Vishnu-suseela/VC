import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Reveal, Stagger, StaggerItem, WordReveal } from '@/components/motion'
import { CtaBand, PageHero } from '@/components/page-shell'
import { projects } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Projects — Solar & CCTV Installations',
  description:
    'Residential rooftops through industrial sheds and estate perimeters. Every one of these was surveyed, designed and installed by the same team.',
}

export default function ProjectsPage() {
  const featured = projects[2]
  const rest = [...projects.slice(0, 2), ...projects.slice(3)]

  return (
    <>
      <PageHero
        kicker="Selected work"
        title="Built, commissioned, still running."
        copy="Residential rooftops through industrial sheds and estate perimeters. Every project here was surveyed, designed and installed by our team."
        image="/images/solar-estate.jpeg"
        position="center 48%"
        crumbs={[['Projects', '/projects']]}
      />

      <section className="section-shell">
        <Reveal>
          <div className="featured group" style={{ display: 'block', position: 'relative' }}>
            <div className="frame frame-zoom" style={{ position: 'relative', aspectRatio: '21/9', borderRadius: 3, overflow: 'hidden' }}>
              <Image
                src={featured.image || '/placeholder.svg'}
                alt={featured.title}
                fill
                sizes="100vw"
                style={{ objectPosition: 'center 55%' }}
              />
            </div>
            <div style={{ marginTop: '1.5rem' }}>
              <span className="chapter">{featured.label}</span>
              <h2 className="display-sm" style={{ marginTop: '0.5rem' }}>{featured.title}</h2>
              <p className="prose-body" style={{ marginTop: '0.5rem' }}>{featured.meta}</p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section-shell">
        <Stagger className="card-grid card-grid-2" step={0.08}>
          {rest.map((p) => (
            <StaggerItem key={p.image} style={{ marginTop: '1.3rem' }}>
              <div className="project-tile group" style={{ display: 'block' }}>
                <div className="frame frame-zoom" style={{ position: 'relative', aspectRatio: '3/2', borderRadius: 3, overflow: 'hidden' }}>
                  <Image
                    src={p.image || '/placeholder.svg'}
                    alt={p.title}
                    fill
                    sizes="(min-width: 700px) 50vw, 100vw"
                    style={{ objectPosition: 'center 52%' }}
                  />
                </div>
                <div className="project-tile-body" style={{ marginTop: '1rem' }}>
                  <span className="chapter">{p.label}</span>
                  <h3 style={{ marginTop: '0.3rem' }}>{p.title}</h3>
                  <p className="prose-body" style={{ fontSize: '0.9rem', marginTop: '0.3rem' }}>{p.meta}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="section-shell" style={{ textAlign: 'center' }}>
        <Reveal>
          <p className="chapter">Your project</p>
        </Reveal>
        <WordReveal as="h2" text="Every roof is different. Every install meets the same standard." />
        <Reveal delay={0.1}>
          <p className="prose-body" style={{ maxWidth: '38rem', margin: '1rem auto 0' }}>
            Whether it is a 3 kW home system or a 100+ kW industrial array, the survey methodology, the component
            specification and the installation quality are identical.
          </p>
        </Reveal>
      </section>

      <CtaBand
        title="Have a roof in mind?"
        copy="The survey is free. You get a measured roof assessment, an expected yield figure and a written specification whether or not you proceed."
      />
    </>
  )
}
