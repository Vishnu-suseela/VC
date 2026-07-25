'use client'

import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { Reveal } from '@/components/motion'
import { faqs } from '@/lib/site-data'

function FaqGroup({ group, items }: { group: string; items: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div style={{ display: 'grid', gap: '0' }}>
      <Reveal>
        <h2 className="display-sm" style={{ marginBottom: '1.2rem' }}>{group}</h2>
      </Reveal>
      {items.map((item, i) => (
        <Reveal key={item.q} delay={i * 0.03}>
          <div
            style={{
              borderBottom: '1px solid var(--line)',
              ...(i === 0 ? { borderTop: '1px solid var(--line)' } : {}),
            }}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                padding: '1.3rem 0',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font-sans)',
                fontSize: '1.05rem',
                fontWeight: 500,
                color: 'var(--foreground)',
                textAlign: 'left',
                gap: '1rem',
              }}
              aria-expanded={openIndex === i}
            >
              {item.q}
              <ChevronDown
                aria-hidden="true"
                style={{
                  width: '1.1rem',
                  height: '1.1rem',
                  color: 'var(--muted-fg)',
                  flexShrink: 0,
                  transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0)',
                  transition: 'transform 0.3s ease',
                }}
              />
            </button>
            <div
              style={{
                maxHeight: openIndex === i ? '500px' : '0',
                overflow: 'hidden',
                transition: 'max-height 0.4s ease, opacity 0.3s ease',
                opacity: openIndex === i ? 1 : 0,
              }}
            >
              <p
                style={{
                  padding: '0 0 1.4rem 0',
                  color: 'var(--muted-fg)',
                  fontSize: '0.95rem',
                  lineHeight: 1.7,
                  maxWidth: '42rem',
                }}
              >
                {item.a}
              </p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  )
}

export default function FaqPage() {
  return (
    <>
      <section className="section-shell" style={{ paddingTop: '10rem' }}>
        <div style={{ display: 'grid', gap: '1rem', marginBottom: '4rem' }}>
          <Reveal>
            <p className="chapter">Frequently asked questions</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="display-md">Straight answers.</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="prose-body" style={{ maxWidth: '38rem' }}>
              Real questions from homeowners, businesses and farmers we have worked with. If yours is not here, call us
              — we would rather explain than oversimplify.
            </p>
          </Reveal>
        </div>

        <div style={{ display: 'grid', gap: '4rem' }}>
          {faqs.map((group) => (
            <FaqGroup key={group.group} group={group.group} items={group.items} />
          ))}
        </div>
      </section>
    </>
  )
}
