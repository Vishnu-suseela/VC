import { ArrowRight, ChevronRight, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Magnetic, Parallax, Reveal, WordReveal } from '@/components/motion'
import { CONTACT } from '@/lib/site-data'

export function PageHero({
  kicker,
  title,
  copy,
  image,
  position = 'center 50%',
  crumbs,
}: {
  kicker: string
  title: string
  copy?: string
  image: string
  position?: string
  crumbs: [string, string][]
}) {
  return (
    <section className="page-hero">
      <Parallax className="page-hero-media" distance={45}>
        <Image src={image || '/placeholder.svg'} alt="" fill sizes="100vw" priority style={{ objectPosition: position }} />
      </Parallax>
      <div className="page-hero-shade" />
      <div className="page-hero-inner">
        <Reveal y={16}>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            {crumbs.map(([label, href]) => (
              <span key={href} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                <ChevronRight aria-hidden="true" />
                <Link href={href}>{label}</Link>
              </span>
            ))}
          </nav>
        </Reveal>
        <Reveal y={20} delay={0.05}>
          <p className="chapter">{kicker}</p>
        </Reveal>
        <WordReveal as="h1" text={title} delay={0.1} />
        {copy && (
          <Reveal y={20} delay={0.2}>
            <p className="lede">{copy}</p>
          </Reveal>
        )}
      </div>
    </section>
  )
}

export function CtaBand({
  kicker = 'Next step',
  title,
  copy,
  image = '/images/contact-solar.jpeg',
}: {
  kicker?: string
  title: string
  copy: string
  image?: string
}) {
  return (
    <section className="cta-band">
      <Parallax className="cta-band-media" distance={45}>
        <Image src={image || '/placeholder.svg'} alt="" fill sizes="100vw" style={{ objectPosition: 'center 50%' }} />
      </Parallax>
      <div className="cta-band-shade" />
      <div className="cta-band-inner">
        <Reveal>
          <p className="chapter">{kicker}</p>
        </Reveal>
        <WordReveal as="h2" text={title} />
        <Reveal delay={0.1}>
          <p>{copy}</p>
        </Reveal>
        <Reveal delay={0.15} className="cta-band-actions">
          <Magnetic>
            <Link href="/site-survey" className="button button-primary">
              Book a free site survey
              <ArrowRight aria-hidden="true" />
            </Link>
          </Magnetic>
          <a href={CONTACT.phoneHref} className="button button-ghost">
            <Phone aria-hidden="true" />
            {CONTACT.phoneLabel}
          </a>
        </Reveal>
      </div>
    </section>
  )
}

export function SectionHeading({ kicker, title, copy }: { kicker: string; title: string; copy?: string }) {
  return (
    <div className="section-heading">
      <div>
        <Reveal>
          <p className="chapter">{kicker}</p>
        </Reveal>
        <WordReveal as="h2" text={title} />
      </div>
      {copy && (
        <Reveal delay={0.1}>
          <p>{copy}</p>
        </Reveal>
      )}
    </div>
  )
}
