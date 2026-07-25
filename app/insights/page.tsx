import { ArrowRight, Clock } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Reveal, Stagger, StaggerItem, WordReveal } from '@/components/motion'
import { CtaBand } from '@/components/page-shell'
import { insights } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Insights — Solar & Security Knowledge Base',
  description: 'Plain-English guides on rooftop solar economics, net metering, battery sizing and CCTV analytics. Written by engineers, not marketers.',
}

export default function InsightsPage() {
  return (
    <>
      <section className="section-shell" style={{ paddingTop: '10rem' }}>
        <div style={{ display: 'grid', gap: '1rem', marginBottom: '4rem', maxWidth: '38rem' }}>
          <Reveal>
            <p className="chapter">Insights</p>
          </Reveal>
          <WordReveal as="h1" text="Written by engineers, not marketers." delay={0.05} />
          <Reveal delay={0.1}>
            <p className="prose-body">
              Plain-English guides to the decisions that matter when you are buying a solar system or specifying
              security. No jargon, no hype, no affiliate links.
            </p>
          </Reveal>
        </div>

        <Stagger className="card-grid card-grid-2" step={0.08}>
          {insights.map((post) => (
            <StaggerItem key={post.slug}>
              <div className="card group" style={{ height: '100%' }}>
                <div className="card-media frame frame-zoom">
                  <Image
                    src={post.image || '/placeholder.svg'}
                    alt={post.title}
                    fill
                    sizes="(min-width: 700px) 50vw, 100vw"
                    style={{ objectPosition: 'center 50%' }}
                  />
                </div>
                <div className="card-body">
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <span className="chapter">{post.kicker}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.72rem', color: 'var(--muted-fg)' }}>
                      <Clock aria-hidden="true" style={{ width: '0.75rem', height: '0.75rem' }} />
                      {post.read}
                    </span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: 'var(--amber)', fontWeight: 600, marginTop: '0.5rem' }}>
                    Read more <ArrowRight aria-hidden="true" style={{ width: '0.9rem', height: '0.9rem' }} />
                  </span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <CtaBand
        title="Questions the articles don't cover?"
        copy="Call us directly. We would rather explain properly than point you at a blog post."
      />
    </>
  )
}
