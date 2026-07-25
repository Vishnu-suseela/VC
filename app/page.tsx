import { ArrowRight, ArrowUpRight, Check, Clock, MapPin, Phone, Radio, ShieldCheck } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Counter,
  HeroContent,
  HeroHeadline,
  HeroLine,
  HeroMedia,
  Magnetic,
  Parallax,
  Reveal,
  Stagger,
  StaggerItem,
  WordReveal,
} from '@/components/motion'
import { SunPathStory } from '@/components/sun-path-story'
import { cameras, CONTACT, projects, services, solarSystems, stats } from '@/lib/site-data'

const marqueeItems = [
  'MNRE empanelled',
  'ALMM-listed modules',
  'PM Surya Ghar approved',
  '25-year performance warranty',
  'Net metering handled end to end',
  'On-camera AI analytics',
  'Andhra Pradesh & Telangana',
]

const trustPillars = [
  {
    icon: ShieldCheck,
    title: 'One accountable team',
    body: 'Survey, design, install and service handled in-house. No subcontractor shrugging at the other one.',
  },
  {
    icon: Radio,
    title: 'Specified, not sold',
    body: 'Load studies and shade analysis decide your system size. You get the numbers behind the quote in writing.',
  },
  {
    icon: Clock,
    title: 'Support that answers',
    body: 'A direct line to a technician who knows your install, with remote inverter diagnostics before anyone drives out.',
  },
]

export default function HomePage() {
  const featured = projects[2]
  const rest = [...projects.slice(0, 2), ...projects.slice(3)]

  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <HeroMedia>
          <video autoPlay muted loop playsInline preload="auto" poster="/images/solar-estate.jpeg" aria-hidden="true">
            <source src="/media/hero-upscaled.mp4" type="video/mp4" />
          </video>
        </HeroMedia>
        <div className="hero-shade" />
        <div className="hero-vignette" />
        <div className="hero-grid" />
        <div className="hero-haze" />
        <div className="hero-bloom" />
        <div className="hero-relay" aria-hidden="true">
          <span className="relay-node relay-node-a" />
          <span className="relay-node relay-node-b" />
          <span className="relay-node relay-node-c" />
          <span className="relay-pulse relay-pulse-a" />
          <span className="relay-pulse relay-pulse-b" />
        </div>
        <div className="scroll-cue" aria-hidden="true">
          <span>Scroll</span>
          <i />
        </div>

        <div style={{ position: 'relative', zIndex: 2, width: '100%' }}>
          <HeroContent>
            <HeroLine>
              <p className="chapter">Solar Shield Technologies · Andhra Pradesh</p>
            </HeroLine>

            <HeroHeadline
              lines={[
                <span key="a">Secure today.</span>,
                <span key="b">
                  <em>Sustain</em> tomorrow.
                </span>,
              ]}
            />

            <HeroLine>
              <p className="hero-copy text-pretty">
                Integrated rooftop solar and intelligent surveillance, engineered as one system. We survey the site, design the
                array, place every camera, and stay on the other end of the phone for the next twenty-five years.
              </p>
            </HeroLine>

            <HeroLine className="hero-actions">
              <Magnetic>
                <Link href="/site-survey" className="button button-primary">
                  Book a free site survey
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Magnetic>
              <Link href="/projects" className="button button-ghost">
                See our work
                <ArrowUpRight aria-hidden="true" />
              </Link>
            </HeroLine>
          </HeroContent>

          <div className="hero-ticker">
            <div className="hero-ticker-inner">
              {stats.map((s) => (
                <div key={s.label} className="hero-ticker-item">
                  <b>
                    <Counter
                      value={s.value}
                      prefix={s.prefix ?? ''}
                      suffix={s.suffix ?? ''}
                      decimals={s.value % 1 !== 0 ? 1 : 0}
                    />
                  </b>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[0, 1].map((dup) => (
            <span key={dup} style={{ display: 'flex', gap: '3.5rem' }}>
              {marqueeItems.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <section className="manifesto" aria-label="Our approach">
        <Parallax className="manifesto-media" distance={60}>
          <Image src="/images/solar-estate.jpeg" alt="" fill sizes="100vw" style={{ objectPosition: 'center 45%' }} />
        </Parallax>
        <div className="manifesto-shade" />
        <div className="manifesto-content">
          <Reveal>
            <p className="chapter">The thesis</p>
          </Reveal>
          <WordReveal
            as="h2"
            className="display-md"
            text="Most buildings buy power from one company and safety from another. We think a building should generate its own electricity and watch its own perimeter, designed once, by one team, so nothing falls between the two."
          />
          <Reveal delay={0.15}>
            <Link href="/about" className="button button-quiet">
              Read how we work
              <ArrowRight aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      <SunPathStory />

      <section className="section-shell" id="solar">
        <div className="section-heading">
          <div>
            <Reveal>
              <p className="chapter">01 — Solar systems</p>
            </Reveal>
            <WordReveal as="h2" text="Three architectures. One honest recommendation." />
          </div>
          <Reveal delay={0.1}>
            <p>
              The right system depends on your grid reliability, your night load and your roof, not on what carries the highest
              margin. Here is the plain comparison.
            </p>
          </Reveal>
        </div>

        <Stagger className="card-grid card-grid-3">
          {solarSystems.map((s) => (
            <StaggerItem key={s.slug}>
              <Link href={`/solar#${s.slug}`} className="card group" style={{ height: '100%' }}>
                <div className="card-media frame frame-inset frame-zoom">
                  <Image
                    src={s.image || '/placeholder.svg'}
                    alt={`${s.label} solar system installation`}
                    fill
                    sizes="(min-width: 700px) 33vw, 100vw"
                    style={{ objectPosition: s.position }}
                  />
                </div>
                <div className="card-body">
                  <span>{s.label}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <dl className="card-foot">
                    {s.spec.slice(0, 3).map(([k, v]) => (
                      <div key={k}>
                        <dt>{k}</dt>
                        <dd>{v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1}>
          <div style={{ marginTop: '2.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
            <Link href="/solar" className="button button-ghost">
              Explore solar in detail
              <ArrowRight aria-hidden="true" />
            </Link>
            <Link href="/solar#economics" className="button button-ghost">
              Subsidy &amp; payback
              <ArrowRight aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="section-shell section-shell-tight" aria-label="Performance data">
        <Stagger className="stat-strip" step={0.07}>
          {stats.map((s) => (
            <StaggerItem key={s.label} className="stat-cell">
              <b>
                <Counter value={s.value} prefix={s.prefix ?? ''} suffix={s.suffix ?? ''} decimals={s.value % 1 !== 0 ? 1 : 0} />
              </b>
              <p>{s.label}</p>
              <small>{s.note}</small>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="security-section" id="security">
        <div className="security-atmosphere" aria-hidden="true" />
        <div className="section-shell" style={{ position: 'relative' }}>
          <div className="section-heading">
            <div>
              <Reveal>
                <p className="chapter">02 — Surveillance</p>
              </Reveal>
              <WordReveal as="h2" text="Coverage that holds after dark." />
            </div>
            <Reveal delay={0.1}>
              <p>
                We map entry points, blind corners and asset zones first, then specify the fewest cameras that cover them properly.
                Analytics run on the camera, not on a subscription.
              </p>
            </Reveal>
          </div>

          <Stagger className="card-grid card-grid-3">
            {cameras.map((c) => (
              <StaggerItem key={c.label}>
                <Link href="/cctv#range" className="card card-security group" style={{ height: '100%' }}>
                  <div className="card-media frame frame-zoom">
                    <span className="live-dot" aria-hidden="true" />
                    <span className="scan" aria-hidden="true" />
                    <Image
                      src={c.image || '/placeholder.svg'}
                      alt={`${c.label} security camera`}
                      fill
                      sizes="(min-width: 700px) 33vw, 100vw"
                      style={{ objectPosition: c.position }}
                    />
                  </div>
                  <div className="card-body">
                    <span>{c.label}</span>
                    <h3>{c.title}</h3>
                    <p>{c.use}</p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.1}>
            <div style={{ marginTop: '2.5rem' }}>
              <Link href="/cctv" className="button button-ghost">
                Explore CCTV in detail
                <ArrowRight aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-shell" id="projects">
        <div className="section-heading">
          <div>
            <Reveal>
              <p className="chapter">03 — Selected work</p>
            </Reveal>
            <WordReveal as="h2" text="Built, commissioned, still running." />
          </div>
          <Reveal delay={0.1}>
            <p>
              Residential rooftops through industrial sheds and estate perimeters. Every one of these was surveyed, designed and
              installed by the same team.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <Link href="/projects" className="featured group" style={{ display: 'block' }}>
            <div className="frame frame-zoom" style={{ position: 'absolute', inset: 0 }}>
              <Image
                src={featured.image || '/placeholder.svg'}
                alt={featured.title}
                fill
                sizes="100vw"
                style={{ objectPosition: 'center 55%' }}
              />
            </div>
            <div className="featured-copy">
              <span>{featured.label}</span>
              <h3>{featured.title}</h3>
              <p>{featured.meta}</p>
            </div>
          </Link>
        </Reveal>

        <Stagger className="card-grid card-grid-2" step={0.08}>
          {rest.map((p) => (
            <StaggerItem key={p.image} style={{ marginTop: '1.3rem' }}>
              <Link href="/projects" className="project-tile group" style={{ display: 'block' }}>
                <div className="frame frame-zoom">
                  <Image
                    src={p.image || '/placeholder.svg'}
                    alt={p.title}
                    fill
                    sizes="(min-width: 700px) 50vw, 100vw"
                    style={{ objectPosition: 'center 52%' }}
                  />
                </div>
                <div className="project-tile-body">
                  <span>{p.label}</span>
                  <h3>{p.title}</h3>
                  <p>{p.meta}</p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="services-section" id="services">
        <div className="section-shell">
          <div className="section-heading">
            <div>
              <Reveal>
                <p className="chapter">04 — Services</p>
              </Reveal>
              <WordReveal as="h2" text="The work does not end at handover." />
            </div>
            <Reveal delay={0.1}>
              <p>
                A solar array is a twenty-five year asset and a camera network is a living system. Both need someone who answers
                the phone.
              </p>
            </Reveal>
          </div>

          <div>
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.05}>
                <Link href={`/services#${s.slug}`} className="service-row group" style={{ display: 'grid' }}>
                  <div className="frame frame-zoom">
                    <Image
                      src={s.image || '/placeholder.svg'}
                      alt={s.title}
                      fill
                      sizes="(min-width: 940px) 210px, 100vw"
                      style={{ objectPosition: 'center 50%' }}
                    />
                  </div>
                  <span className="service-row-num">{s.number}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <ArrowUpRight className="service-row-arrow" aria-hidden="true" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell" aria-label="Why clients choose us">
        <Stagger className="card-grid card-grid-3" step={0.1}>
          {trustPillars.map((t) => (
            <StaggerItem key={t.title}>
              <div
                style={{
                  display: 'grid',
                  gap: '1rem',
                  padding: '2rem',
                  border: '1px solid var(--line)',
                  borderRadius: 3,
                  background: 'var(--panel)',
                  height: '100%',
                  alignContent: 'start',
                }}
              >
                <t.icon aria-hidden="true" style={{ width: '1.5rem', height: '1.5rem', color: 'var(--amber)' }} />
                <h3 className="display-sm">{t.title}</h3>
                <p className="prose-body" style={{ fontSize: '0.93rem' }}>
                  {t.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="cta-band" id="contact">
        <Parallax className="cta-band-media" distance={50}>
          <Image src="/images/contact-solar.jpeg" alt="" fill sizes="100vw" style={{ objectPosition: 'center 50%' }} />
        </Parallax>
        <div className="cta-band-shade" />
        <div className="cta-band-inner">
          <Reveal>
            <p className="chapter">Start here</p>
          </Reveal>
          <WordReveal as="h2" text="Every good system starts with someone on your roof." />
          <Reveal delay={0.1}>
            <p>
              The survey is free and there is no obligation. You get measurements, a shade assessment and a written system
              recommendation whether or not you go ahead with us.
            </p>
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
          <Reveal delay={0.2}>
            <div className="cta-points">
              <span>
                <Check aria-hidden="true" />
                No-obligation assessment
              </span>
              <span>
                <MapPin aria-hidden="true" />
                {CONTACT.service}
              </span>
              <span>
                <Clock aria-hidden="true" />
                {CONTACT.hours}
              </span>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
