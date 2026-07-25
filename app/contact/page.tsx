import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import type { Metadata } from 'next'
import { Reveal, WordReveal } from '@/components/motion'
import { CONTACT } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Speak to a Solar Shield Technologies engineer. Call, email or visit — we cover Andhra Pradesh and Telangana.',
}

const contactMethods = [
  { icon: Phone, label: 'Speak to an engineer', value: CONTACT.phoneLabel, href: CONTACT.phoneHref },
  { icon: Mail, label: 'Email', value: CONTACT.email, href: CONTACT.emailHref },
  { icon: MapPin, label: 'Service region', value: CONTACT.service, href: null },
  { icon: Clock, label: 'Working hours', value: CONTACT.hours, href: null },
]

export default function ContactPage() {
  return (
    <>
      <section className="section-shell" style={{ paddingTop: '10rem' }}>
        <div style={{ display: 'grid', gap: '1rem', marginBottom: '4rem', maxWidth: '38rem' }}>
          <Reveal>
            <p className="chapter">Contact</p>
          </Reveal>
          <WordReveal as="h1" text="Let us talk about your building." delay={0.05} />
          <Reveal delay={0.1}>
            <p className="prose-body">
              Whether you have a specific project in mind or just want to understand what solar or security would look
              like for your property, the conversation starts the same way — a phone call or an email, and we take it
              from there.
            </p>
          </Reveal>
        </div>

        <div style={{ display: 'grid', gap: '2.5rem', gridTemplateColumns: '1fr' }} className="split-2">
          <Reveal>
            <div style={{ display: 'grid', gap: '2rem' }}>
              {contactMethods.map((m) => (
                <div key={m.label} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <m.icon
                    aria-hidden="true"
                    style={{ width: '1.3rem', height: '1.3rem', color: 'var(--amber)', flexShrink: 0, marginTop: '0.15rem' }}
                  />
                  <div>
                    <span style={{ display: 'block', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--muted-fg)', marginBottom: '0.35rem' }}>
                      {m.label}
                    </span>
                    {m.href ? (
                      <a href={m.href} style={{ fontWeight: 600, fontSize: '1.1rem', color: 'var(--foreground)', textDecoration: 'none' }}>
                        {m.value}
                      </a>
                    ) : (
                      <b style={{ fontSize: '1.1rem' }}>{m.value}</b>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div style={{ padding: '2.5rem', border: '1px solid var(--line)', borderRadius: 3, background: 'var(--panel)' }}>
              <h2 className="display-sm" style={{ marginBottom: '0.6rem' }}>Prefer WhatsApp?</h2>
              <p className="prose-body" style={{ fontSize: '0.93rem', marginBottom: '1.5rem' }}>
                Send us a message with your name, location and what you are looking for. We will respond within a few
                hours during working days.
              </p>
              <a href={CONTACT.whatsappHref} target="_blank" rel="noreferrer noopener" className="button button-primary">
                Open WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-shell" style={{ paddingTop: 0 }}>
        <Reveal>
          <div style={{ padding: '2.5rem', border: '1px solid var(--line)', borderRadius: 3, background: 'var(--panel)' }}>
            <h2 className="display-sm" style={{ marginBottom: '0.6rem' }}>Office address</h2>
            <p className="prose-body" style={{ fontSize: '0.93rem' }}>
              Vijayawada, Andhra Pradesh, India<br />
              Site surveys conducted across all districts of AP and Telangana.
            </p>
          </div>
        </Reveal>
      </section>
    </>
  )
}
