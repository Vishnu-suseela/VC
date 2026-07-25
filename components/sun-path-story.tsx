'use client'

import { Check } from 'lucide-react'
import Image from 'next/image'
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useSpring, useTransform } from 'motion/react'
import { useRef, useState } from 'react'

const chapters = [
  {
    time: '06:40',
    title: 'First light hits the array',
    body: 'Panels wake before you do. Output ramps from nothing to a few hundred watts while the house is still asleep, quietly trimming the first units off your bill.',
    image: '/images/on-grid.jpeg',
    position: 'center 58%',
    readout: { yield: '0.4', label: 'kW output', mode: 'Grid import' },
    points: ['String voltage confirmed before sunrise', 'Inverter self-test logged automatically'],
  },
  {
    time: '12:15',
    title: 'Peak generation, peak offset',
    body: 'Midday is where the economics happen. A well-sited array produces more than the property consumes, and every surplus unit is exported against your meter.',
    image: '/images/solar-estate.jpeg',
    position: 'center 48%',
    readout: { yield: '4.8', label: 'kW output', mode: 'Exporting' },
    points: ['Surplus credited through net metering', 'Live production visible from your phone'],
  },
  {
    time: '18:05',
    title: 'The battery takes the handover',
    body: 'As irradiance falls the hybrid inverter shifts priority loads onto stored energy. No flicker, no switching noise, no scramble for the inverter trolley.',
    image: '/images/solar-hybrid.jpeg',
    position: 'center 52%',
    readout: { yield: '1.2', label: 'kW output', mode: 'Charging' },
    points: ['Priority circuits mapped during design', 'Depth of discharge capped to protect cells'],
  },
  {
    time: '23:30',
    title: 'The cameras hold the night',
    body: 'When generation stops, protection does not. Cameras and the recorder sit behind the same battery bank, so a power cut never becomes a blind spot.',
    image: '/images/project-night-watch.jpeg',
    position: 'center 45%',
    readout: { yield: '0.0', label: 'kW output', mode: 'Battery · armed' },
    points: ['Recording continues through outages', 'Motion events pushed to your phone'],
  },
]

export function SunPathStory() {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const [active, setActive] = useState(0)

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 26, restDelta: 0.001 })

  useMotionValueEvent(smooth, 'change', (v) => {
    const next = Math.min(chapters.length - 1, Math.max(0, Math.round(v * (chapters.length - 1))))
    setActive(next)
  })

  // Sun travels along an arc across the stage
  const sunX = useTransform(smooth, [0, 1], [10, 90])
  const sunY = useTransform(smooth, [0, 0.5, 1], [78, 16, 82])
  const sunGlow = useTransform(smooth, [0, 0.5, 1], [0.45, 1, 0.2])
  const arcDraw = useTransform(smooth, [0, 1], [0, 1])

  return (
    <section className="story" id="a-day-in-the-life" aria-label="A day on a Solar Shield system">
      <div className="story-prologue">
        <p className="chapter">Scroll story</p>
        <h2>Watch one property hand off from sunlight to surveillance.</h2>
        <p>
          The animation follows the real operating rhythm: generation rises, power is routed, batteries take over, and the
          camera network stays awake after the grid goes quiet.
        </p>
      </div>
      <div className="story-layout" ref={ref}>
        <div className="story-sticky">
          <div className="story-stage">
            {chapters.map((c, i) => (
              <motion.div
                key={c.time}
                className="story-stage-layer"
                initial={false}
                animate={{ opacity: active === i ? 1 : 0, scale: active === i ? 1 : 1.05 }}
                transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
                aria-hidden={active !== i}
              >
                <Image
                  src={c.image || '/placeholder.svg'}
                  alt=""
                  fill
                  sizes="(min-width: 940px) 42vw, 100vw"
                  style={{ objectPosition: c.position }}
                  priority={i === 0}
                />
                <div className="story-stage-shade" />
              </motion.div>
            ))}

            <svg className="story-arc" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <motion.path
                d="M 10 78 Q 50 -6 90 82"
                fill="none"
                stroke="var(--amber)"
                strokeWidth="0.35"
                strokeDasharray="1 1"
                pathLength={1}
                style={reduce ? undefined : { pathLength: arcDraw }}
                opacity="0.5"
              />
            </svg>

            <div className="story-relay-map" aria-hidden="true">
              <span className="story-relay-dot story-relay-dot-a" />
              <span className="story-relay-dot story-relay-dot-b" />
              <span className="story-relay-dot story-relay-dot-c" />
              <span className="story-relay-line" />
            </div>

            <motion.div
              aria-hidden="true"
              style={{
                position: 'absolute',
                left: reduce ? '50%' : (sunX as unknown as string),
                top: reduce ? '18%' : (sunY as unknown as string),
                translateX: '-50%',
                translateY: '-50%',
                width: '2.6rem',
                height: '2.6rem',
                borderRadius: '50%',
                background: 'var(--amber)',
                opacity: reduce ? 1 : sunGlow,
                boxShadow: '0 0 60px 18px oklch(0.81 0.15 72 / 0.45)',
              }}
            />

            <div className="story-readout">
              <div className="story-readout-item">
                <b>{chapters[active].time}</b>
                <span>Local time</span>
              </div>
              <div className="story-readout-item">
                <b>{chapters[active].readout.yield}</b>
                <span>{chapters[active].readout.label}</span>
              </div>
              <div className="story-readout-item">
                <b style={{ fontSize: '0.95rem', color: 'var(--signal)' }}>{chapters[active].readout.mode}</b>
                <span>System mode</span>
              </div>
            </div>
          </div>
        </div>

        <div className="story-steps">
          {chapters.map((c, i) => (
            <motion.article
              key={c.time}
              className="story-step"
              initial={reduce ? undefined : { opacity: 0, y: 30 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20% 0px -20% 0px' }}
              transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <p className="chapter">Chapter {String(i + 1).padStart(2, '0')}</p>
              <p className="story-step-time">{c.time}</p>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
              <ul>
                {c.points.map((p) => (
                  <li key={p}>
                    <Check aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
