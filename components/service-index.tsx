'use client'

import { ArrowRight, Check } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { services } from '@/lib/site-data'

const EASE = [0.16, 1, 0.3, 1] as const

/** Per-image focal point so every frame crops on the subject, not the sky. */
const FOCUS: Record<string, string> = {
  'solar-installation': 'center 42%',
  'cctv-services': 'center 38%',
  'panel-maintenance': 'center 48%',
  'annual-maintenance': 'center 45%',
  'ongoing-support': 'center 40%',
}

/**
 * The focal scroll moment: the five services are one continuous sequence.
 * A single pinned frame holds the work; the numeral rail advances as the
 * visitor descends, so the order of delivery is read, not just listed.
 */
export function ServiceIndex({ detailed = false }: { detailed?: boolean }) {
  const wrap = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const reduce = useReducedMotion()

  const { scrollYProgress } = useScroll({ target: wrap, offset: ['start 60%', 'end 90%'] })
  const railScale = useSpring(scrollYProgress, { stiffness: 110, damping: 28, restDelta: 0.001 })

  useEffect(() => {
    const nodes = wrap.current?.querySelectorAll<HTMLElement>('[data-idx]')
    if (!nodes?.length) return
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(Number(visible.target.getAttribute('data-idx')))
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.5, 1] },
    )
    nodes.forEach((n) => io.observe(n))
    return () => io.disconnect()
  }, [])

  const current = services[active]

  return (
    <div className="svc-index" ref={wrap}>
      {/* Pinned frame — desktop only */}
      <div className="svc-stage" aria-hidden="true">
        <div className="svc-stage-frame">
          <AnimatePresence initial={false}>
            <motion.div
              key={current.slug}
              className="svc-stage-layer"
              initial={reduce ? { opacity: 1 } : { opacity: 0, scale: 1.07, clipPath: 'inset(12% 0% 0% 0%)' }}
              animate={{ opacity: 1, scale: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 1.03 }}
              transition={{ duration: 1, ease: EASE }}
            >
              <Image
                src={current.image || '/placeholder.svg'}
                alt=""
                fill
                sizes="(min-width: 1000px) 46vw, 100vw"
                style={{ objectFit: 'cover', objectPosition: FOCUS[current.slug] ?? 'center 45%' }}
              />
            </motion.div>
          </AnimatePresence>
          <span className="svc-stage-grain" />
          <div className="svc-stage-tag">
            <span className="mono-label">Now showing</span>
            <motion.b key={current.slug} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              {current.number} · {current.title}
            </motion.b>
          </div>
        </div>
      </div>

      {/* Entries */}
      <ol className="svc-list">
        <span className="svc-rail" aria-hidden="true">
          <motion.i style={reduce ? { transform: 'scaleY(1)' } : { scaleY: railScale, transformOrigin: 'top' }} />
        </span>

        {services.map((s, i) => (
          <li key={s.slug} id={s.slug} data-idx={i} className={`svc-entry${i === active ? ' is-active' : ''}`}>
            <motion.div
              initial={reduce ? undefined : { opacity: 0, y: 40 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-18% 0px -18% 0px' }}
              transition={{ duration: 0.9, ease: EASE }}
            >
              <div className="svc-entry-head">
                <span className="svc-num">{s.number}</span>
                <h3 className="display-sm">{s.title}</h3>
              </div>

              {/* Inline media — the only frame on mobile, a detail on desktop */}
              <div className="svc-entry-media">
                <Image
                  src={s.image || '/placeholder.svg'}
                  alt={s.title}
                  fill
                  sizes="(min-width: 1000px) 40vw, 100vw"
                  style={{ objectFit: 'cover', objectPosition: FOCUS[s.slug] ?? 'center 45%' }}
                />
              </div>

              <p className="prose-body">{s.text}</p>

              <ul className="svc-includes">
                {s.includes.map((item) => (
                  <li key={item}>
                    <Check aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>

              {!detailed && (
                <Link href={`/services#${s.slug}`} className="button button-quiet svc-entry-link">
                  What this covers
                  <ArrowRight aria-hidden="true" />
                </Link>
              )}
            </motion.div>
          </li>
        ))}
      </ol>
    </div>
  )
}
