'use client'

import { ArrowRight, Check, Clock, MapPin, Phone } from 'lucide-react'
import { useState } from 'react'
import { Reveal, WordReveal } from '@/components/motion'
import { CONTACT } from '@/lib/site-data'

type FormData = {
  name: string
  phone: string
  location: string
  interest: string
  roofType: string
  message: string
}

export default function SiteSurveyPage() {
  const [form, setForm] = useState<FormData>({
    name: '',
    phone: '',
    location: '',
    interest: 'Solar + CCTV',
    roofType: 'RCC flat roof',
    message: '',
  })

  const update = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
  }

  const whatsappLink = () => {
    const text = `Hi, I would like to book a free site survey.\n\nName: ${form.name}\nPhone: ${form.phone}\nLocation: ${form.location}\nInterested in: ${form.interest}\nRoof type: ${form.roofType}\n${form.message ? `Notes: ${form.message}` : ''}`
    return `https://wa.me/919381181601?text=${encodeURIComponent(text)}`
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.9rem 1rem',
    background: 'var(--panel)',
    border: '1px solid var(--line)',
    borderRadius: 3,
    color: 'var(--foreground)',
    fontSize: '0.95rem',
    fontFamily: 'inherit',
    outline: 'none',
    transition: 'border-color 0.2s ease',
  }

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '0.76rem',
    textTransform: 'uppercase',
    letterSpacing: '0.18em',
    color: 'var(--muted-fg)',
    marginBottom: '0.5rem',
    fontWeight: 600,
  }

  return (
    <>
      <section className="section-shell" style={{ paddingTop: '10rem' }}>
        <div style={{ display: 'grid', gap: '1rem', marginBottom: '4rem', maxWidth: '38rem' }}>
          <Reveal>
            <p className="chapter">Site survey</p>
          </Reveal>
          <WordReveal as="h1" text="Every good system starts with someone on your roof." delay={0.05} />
          <Reveal delay={0.1}>
            <p className="prose-body">
              The survey is free and there is no obligation. You get measurements, a shade assessment and a written
              system recommendation whether or not you go ahead with us.
            </p>
          </Reveal>
        </div>

        <div style={{ display: 'grid', gap: '3.5rem', gridTemplateColumns: '1fr' }} className="split-sidebar">
          <Reveal>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                window.open(whatsappLink(), '_blank')
              }}
              style={{ display: 'grid', gap: '1.5rem' }}
            >
              <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: '1fr' }} className="split-2">
                <div>
                  <label style={labelStyle}>Your name</label>
                  <input type="text" required placeholder="Full name" value={form.name} onChange={update('name')} style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Phone number</label>
                  <input type="tel" required placeholder="+91 ..." value={form.phone} onChange={update('phone')} style={inputStyle} />
                </div>
              </div>

              <div>
                <label style={labelStyle}>Location / City</label>
                <input type="text" required placeholder="e.g. Vijayawada, Krishna district" value={form.location} onChange={update('location')} style={inputStyle} />
              </div>

              <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: '1fr' }} className="split-2">
                <div>
                  <label style={labelStyle}>Interested in</label>
                  <select value={form.interest} onChange={update('interest')} style={inputStyle}>
                    <option>Solar + CCTV</option>
                    <option>Solar only</option>
                    <option>CCTV only</option>
                    <option>Maintenance / AMC</option>
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Roof type</label>
                  <select value={form.roofType} onChange={update('roofType')} style={inputStyle}>
                    <option>RCC flat roof</option>
                    <option>Sheet / tin roof</option>
                    <option>Sloped / tiled</option>
                    <option>Ground mount</option>
                    <option>Not sure</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={labelStyle}>Anything else? (optional)</label>
                <textarea rows={3} placeholder="Monthly bill, number of cameras needed, specific concerns..." value={form.message} onChange={update('message')} style={{ ...inputStyle, resize: 'vertical' }} />
              </div>

              <button type="submit" className="button button-primary" style={{ justifySelf: 'start' }}>
                Send via WhatsApp
                <ArrowRight aria-hidden="true" />
              </button>
            </form>
          </Reveal>

          <Reveal delay={0.15}>
            <div style={{ display: 'grid', gap: '1.5rem', alignContent: 'start' }}>
              <div style={{ padding: '2rem', border: '1px solid var(--line)', borderRadius: 3, background: 'var(--panel)' }}>
                <h3 className="display-sm" style={{ marginBottom: '1rem' }}>What happens next</h3>
                <ul className="check-list">
                  <li><Check aria-hidden="true" />We call to confirm a convenient date and time.</li>
                  <li><Check aria-hidden="true" />A technician visits to measure roof area and check shading.</li>
                  <li><Check aria-hidden="true" />You receive a written design and quotation within 48 hours.</li>
                  <li><Check aria-hidden="true" />No obligation — proceed only if the numbers work for you.</li>
                </ul>
              </div>

              <div style={{ display: 'grid', gap: '1rem' }}>
                <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
                  <Phone aria-hidden="true" style={{ width: '1rem', height: '1rem', color: 'var(--amber)' }} />
                  <a href={CONTACT.phoneHref} style={{ fontWeight: 600, color: 'var(--foreground)', textDecoration: 'none' }}>{CONTACT.phoneLabel}</a>
                </div>
                <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
                  <MapPin aria-hidden="true" style={{ width: '1rem', height: '1rem', color: 'var(--amber)' }} />
                  <span style={{ color: 'var(--muted-fg)', fontSize: '0.93rem' }}>{CONTACT.service}</span>
                </div>
                <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
                  <Clock aria-hidden="true" style={{ width: '1rem', height: '1rem', color: 'var(--amber)' }} />
                  <span style={{ color: 'var(--muted-fg)', fontSize: '0.93rem' }}>{CONTACT.hours}</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
