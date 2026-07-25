import { Check, Shield } from 'lucide-react'
import Image from 'next/image'
import type { Metadata } from 'next'
import { Counter, Reveal, Stagger, StaggerItem } from '@/components/motion'
import { CtaBand, PageHero, SectionHeading } from '@/components/page-shell'
import { cameras } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'CCTV Security Solutions — Dome, Bullet, PTZ, IP, WiFi & Solar',
  description:
    'Intelligent CCTV security designed around your property. Dome, bullet, PTZ, IP, WiFi and solar-powered cameras with on-camera analytics, no subscription required.',
}

const storageOptions: [string, string][] = [
  ['4 cameras, 15 days', '2 TB NVR'],
  ['8 cameras, 30 days', '6 TB NVR'],
  ['16 cameras, 30 days', '12 TB NVR'],
  ['Custom retention', 'RAID or cloud hybrid'],
]

const process = [
  {
    title: 'Risk-point walkthrough',
    body: 'We walk the property with you and map entry points, blind corners and high-value asset zones before specifying a single camera.',
  },
  {
    title: 'Camera and lens selection',
    body: 'Each position gets the correct sensor, lens and housing for its range, light conditions and mounting surface. No one-size-fits-all kits.',
  },
  {
    title: 'Wiring and NVR installation',
    body: 'Cat6 or fibre runs, surge protection, UPS-backed NVR placement in a secure enclosure. Clean runs that do not look like an afterthought.',
  },
  {
    title: 'Configuration and testing',
    body: 'Motion zones, recording schedules, alert thresholds and mobile access configured on site. Every camera is tested in day and night conditions before handover.',
  },
  {
    title: 'Handover and training',
    body: 'You get a walkthrough of the app, the NVR controls and the playback workflow. Written documentation and login credentials for every user.',
  },
]

const analytics = [
  'Line-crossing detection',
  'Loitering alerts with dwell-time threshold',
  'Human vs. vehicle classification',
  'Intrusion zone mapping',
  'Missing-object detection',
  'Face detection (non-biometric)',
]

export default function CctvPage() {
  return (
    <>
      <PageHero
        kicker="CCTV security"
        title="Coverage that holds after dark."
        copy="We map risk points first, then specify the fewest cameras that cover them properly. Analytics run on the camera, not on a subscription."
        image="/images/security-ptz.jpeg"
        position="center 48%"
        crumbs={[['CCTV', '/cctv']]}
      />

      <section className="section-shell" id="range">
        <SectionHeading
          kicker="Camera range"
          title="Six types. One design principle."
          copy="Every camera earns its position. The choice depends on the viewing angle, the mounting surface and what happens in the scene — not on what costs the most."
        />

        <Stagger className="card-grid card-grid-3">
          {cameras.map((c) => (
            <StaggerItem key={c.label}>
              <div className="card card-security" style={{ height: '100%' }}>
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
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="services-section" id="solar-cctv">
        <div className="section-shell">
          <SectionHeading
            kicker="Solar-powered CCTV"
            title="No wiring. No grid dependency."
            copy="Solar-powered cameras with integrated battery backup bring surveillance to sites where running cable is impractical or impossible — fields, construction perimeters, remote warehouses and boundary walls."
          />
          <Stagger className="card-grid card-grid-2" step={0.08}>
            {[
              { title: 'Self-sufficient power', text: 'Integrated solar panel with lithium battery sized for 3–5 days of autonomy in overcast conditions.' },
              { title: '4G or WiFi backhaul', text: 'Cellular connectivity for sites with no broadband. Footage streams to your phone and records locally on SD card.' },
              { title: 'Plug-and-mount install', text: 'Pole or wall bracket, no trenching, no conduit. Relocatable when the site changes.' },
              { title: 'Night vision and alerts', text: 'IR illumination to 30 m. Motion-triggered push notifications to multiple users.' },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div style={{ display: 'grid', gap: '0.8rem', padding: '2rem', border: '1px solid var(--line)', borderRadius: 3, background: 'var(--panel)', height: '100%', alignContent: 'start' }}>
                  <Shield aria-hidden="true" style={{ width: '1.5rem', height: '1.5rem', color: 'var(--signal)' }} />
                  <h3 className="display-sm">{item.title}</h3>
                  <p className="prose-body" style={{ fontSize: '0.93rem' }}>{item.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section-shell" id="storage">
        <SectionHeading
          kicker="Recording and storage"
          title="Sized to your retention, not to the largest box on the shelf."
          copy="We calculate storage from the number of cameras, resolution, codec efficiency and your required retention window. Motion-based recording and H.265+ extend capacity considerably."
        />
        <Reveal>
          <dl className="spec-table">
            {storageOptions.map(([k, v]) => (
              <div className="spec-row" key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Stagger className="stat-strip" step={0.07}>
          <StaggerItem className="stat-cell">
            <b><Counter value={30} suffix=" days" /></b>
            <p>Standard retention window</p>
            <small>H.265+ recording</small>
          </StaggerItem>
          <StaggerItem className="stat-cell">
            <b><Counter value={4} suffix="K" /></b>
            <p>Maximum resolution supported</p>
            <small>8 MP sensors</small>
          </StaggerItem>
          <StaggerItem className="stat-cell">
            <b><Counter value={24} suffix="/7" /></b>
            <p>Continuous or motion recording</p>
            <small>UPS-backed NVR</small>
          </StaggerItem>
        </Stagger>
      </section>

      <section className="services-section" id="analytics">
        <div className="section-shell">
          <SectionHeading
            kicker="On-camera intelligence"
            title="Analytics that run on the edge."
            copy="Modern cameras process events locally. No cloud subscription, no latency, no monthly bill. These are the features worth specifying in 2026."
          />
          <Stagger className="card-grid card-grid-2" step={0.06}>
            {analytics.map((s) => (
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

      <section className="section-shell" id="process">
        <SectionHeading
          kicker="Install process"
          title="Five stages, full clarity."
          copy="From the first walkthrough to the handover training. You know where things stand at every point."
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

      <CtaBand
        title="Tell us what you need to protect."
        copy="A free site survey gives you a risk-point map, camera placement plan and a written specification. No obligation, no pressure."
        image="/images/night-estate.jpeg"
      />
    </>
  )
}
