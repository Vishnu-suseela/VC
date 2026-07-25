import { ArrowRight, ArrowUpRight, Check, Clock, MapPin, Phone, Radio, ShieldCheck } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Aperture,
  Counter,
  Curtain,
  HeroContent,
  HeroExit,
  HeroHeadline,
  HeroLine,
  HeroMedia,
  HeroVideo,
  Magnetic,
  Parallax,
  Reveal,
  ScrollScene,
  Seam,
  Stagger,
  StaggerItem,
  WordReveal,
} from '@/components/motion'
import { ServiceIndex } from '@/components/service-index'
import { SunPathStory } from '@/components/sun-path-story'
import { cameras, CONTACT, projects, solarSystems, stats } from '@/lib/site-data'

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
          <HeroVideo src="/media/hero-upscaled.mp4" plate="/images/solar-estate.jpeg" />
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

        <HeroExit className="hero-stage">
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
        </HeroExit>
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

      <Seam label="The thesis" />

      <section className="manifesto" aria-label="Our approach">
        <Aperture className="manifesto-media">
          <Image src="/images/night-estate.jpeg" alt="" fill sizes="100vw" style={{ objectPosition: 'center 52%' }} />
        </Aperture>
        <div className="manifesto-shade" />
        <div className="manifesto-content">
          <ScrollScene lift={56}>
            <p className="chapter">One building. Two systems. One team.</p>
          </ScrollScene>
          <WordReveal
            as="h2"
            className="display-md"
            text="A building buys its power from one company and its safety from another, then lives in the gap between them. We close that gap — the array that generates and the cameras that watch, specified together, installed by the same hands, answerable to one number."
          />
          <ScrollScene lift={34}>
            <Link href="/about" className="button button-quiet">
              Read how we work
              <ArrowRight aria-hidden="true" />
            </Link>
          </ScrollScene>
        </div>
      </section>

      <SunPathStory />

      <Seam label="01 — Solar" />

      <section className="section-shell" id="solar" style={{ paddingBlockStart: '2.5rem' }}>
        <div className="section-heading">
          <div>
            <ScrollScene lift={40}>
              <p className="chapter">Sized to the roof, not to the invoice</p>
            </ScrollScene>
            <WordReveal as="h2" text="Three architectures. One honest recommendation." />
          </div>
          <ScrollScene lift={40}>
            <p>
              Grid reliability, night load and roof geometry decide the system — never the margin on the quote. Here is the plain
              comparison, in the order most people need to read it.
            </p>
          </ScrollScene>
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
              <ScrollScene lift={40}>
                <p className="chapter">02 — Surveillance</p>
              </ScrollScene>
              <WordReveal as="h2" text="Coverage that holds after dark." />
            </div>
            <ScrollScene lift={40}>
              <p>
                Entry points, blind corners and asset zones get mapped first. Then we specify the fewest cameras that cover them
                properly — with the analytics running on the camera, not on a subscription.
              </p>
            </ScrollScene>
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

      <Seam label="03 — Selected work" />

      <section className="section-shell" id="projects" style={{ paddingBlockStart: '2.5rem' }}>
        <div className="section-heading">
          <div>
            <ScrollScene lift={40}>
              <p className="chapter">Commissioned, handed over, still running</p>
            </ScrollScene>
            <WordReveal as="h2" text="Built, commissioned, still running." />
          </div>
          <ScrollScene lift={40}>
            <p>
              Family rooftops through commercial sheds and estate perimeters. Every one of these was surveyed, designed and
              installed by the same team — and every one is still under our number.
            </p>
          </ScrollScene>
        </div>

        <Curtain>
          <Link href="/projects" className="featured group" style={{ display: 'block' }}>
            <div className="frame frame-zoom" style={{ position: 'absolute', inset: 0 }}>
              <Image
                src={featured.image || '/placeholder.svg'}
                alt={featured.title}
                fill
                priority={false}
                sizes="100vw"
                style={{ objectPosition: 'center 46%' }}
              />
            </div>
            <div className="featured-copy">
              <span>{featured.label}</span>
              <h3>{featured.title}</h3>
              <p>{featured.meta}</p>
            </div>
          </Link>
        </Curtain>

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
              <ScrollScene lift={40}>
                <p className="chapter">04 — Services</p>
              </ScrollScene>
              <WordReveal as="h2" text="Handover is the beginning, not the invoice." />
            </div>
            <ScrollScene lift={40}>
              <p>
                An array is a twenty-five year asset. A camera network is a system that lives. Five services carry both, in the
                order they are actually needed — survey to install, install to upkeep, upkeep to the call you make at 9pm.
              </p>
            </ScrollScene>
          </div>

          <ServiceIndex />

          <Reveal delay={0.1}>
            <div style={{ marginTop: '3.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
              <Link href="/services" className="button button-ghost">
                All five services in detail
                <ArrowUpRight aria-hidden="true" />
              </Link>
              <Link href="/warranty" className="button button-ghost">
                Warranty &amp; response times
                <ArrowRight aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Seam label="Why clients stay" />

      <section className="section-shell" aria-label="Why clients choose us" style={{ paddingBlockStart: '2.5rem' }}>
        <Stagger className="card-grid card-grid-3" step={0.13}>
          {trustPillars.map((t) => (
            <StaggerItem key={t.title}>
              <div className="pillar">
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
