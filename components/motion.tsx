'use client'

import { motion, useInView, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from 'motion/react'
import type { CSSProperties, ReactNode } from 'react'
import { useEffect, useRef, useState } from 'react'

const EASE = [0.2, 0.8, 0.2, 1] as const

/* ---------- Scroll progress bar ---------- */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 })
  return <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden />
}

/* ---------- Reveal on enter ---------- */
export function Reveal({
  children,
  delay = 0,
  y = 26,
  className,
  as = 'div',
  once = true,
}: {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
  as?: 'div' | 'section' | 'li' | 'span' | 'article' | 'header'
  once?: boolean
}) {
  const reduce = useReducedMotion()
  const Tag = motion[as] as typeof motion.div
  return (
    <Tag
      className={className}
      initial={reduce ? undefined : { opacity: 0, y }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once, margin: '-12% 0px -12% 0px' }}
      transition={{ duration: 0.85, delay, ease: EASE }}
    >
      {children}
    </Tag>
  )
}

/* ---------- Stagger group ---------- */
export function Stagger({
  children,
  className,
  step = 0.11,
  once = true,
}: {
  children: ReactNode
  className?: string
  step?: number
  once?: boolean
}) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? undefined : 'hidden'}
      whileInView={reduce ? undefined : 'show'}
      viewport={{ once, amount: 0.2, margin: '0px 0px -14% 0px' }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: step, delayChildren: 0.08 } } }}
      style={{ perspective: 1400 }}
    >
      {children}
    </motion.div>
  )
}

/* Cards rise out of an occluding mask — weight, not bounce. */
export function StaggerItem({
  children,
  className,
  style,
  y = 44,
}: {
  children: ReactNode
  className?: string
  style?: CSSProperties
  y?: number
}) {
  return (
    <motion.div
      className={className}
      style={{ willChange: 'transform, opacity, clip-path', ...style }}
      variants={{
        hidden: { opacity: 0, y, scale: 0.975, clipPath: 'inset(12% 0% 0% 0%)', filter: 'blur(6px)' },
        show: { opacity: 1, y: 0, scale: 1, clipPath: 'inset(0% 0% 0% 0%)', filter: 'blur(0px)' },
      }}
      transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

/* ---------- Scroll-linked scene: content settles as it enters the frame ---------- */
export function ScrollScene({
  children,
  className,
  lift = 70,
  style,
}: {
  children: ReactNode
  className?: string
  lift?: number
  style?: CSSProperties
}) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'center center'] })
  const p = useSpring(scrollYProgress, { stiffness: 90, damping: 26, restDelta: 0.001 })
  const y = useTransform(p, [0, 1], [lift, 0])
  const opacity = useTransform(p, [0, 0.55, 1], [0, 0.8, 1])
  const scale = useTransform(p, [0, 1], [0.965, 1])
  return (
    <motion.div ref={ref} className={className} style={reduce ? style : { y, opacity, scale, ...style }}>
      {children}
    </motion.div>
  )
}

/* ---------- Seam: scroll-drawn light line with a travelling node ---------- */
export function Seam({ label }: { label?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 95%', 'end 55%'] })
  const p = useSpring(scrollYProgress, { stiffness: 110, damping: 30, restDelta: 0.001 })
  const scaleX = useTransform(p, [0, 1], [0, 1])
  const nodeX = useTransform(p, [0, 1], ['-50%', '50%'])
  const glow = useTransform(p, [0, 0.6, 1], [0, 1, 0.55])
  const labelOpacity = useTransform(p, [0.35, 0.85], [0, 1])
  const labelY = useTransform(p, [0.35, 0.85], [12, 0])

  return (
    <div className="seam" ref={ref} aria-hidden="true">
      <div className="seam-rail">
        <motion.span className="seam-line" style={reduce ? { scaleX: 1 } : { scaleX }} />
        <motion.span className="seam-node" style={reduce ? { opacity: 1 } : { x: nodeX, opacity: glow }} />
      </div>
      {label ? (
        <motion.span className="seam-label" style={reduce ? undefined : { opacity: labelOpacity, y: labelY }}>
          {label}
        </motion.span>
      ) : null}
    </div>
  )
}

/* ---------- Aperture: iris/curtain opening driven by scroll (hero → next scene) ---------- */
export function Aperture({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'center center'] })
  const p = useSpring(scrollYProgress, { stiffness: 80, damping: 24, restDelta: 0.001 })
  const top = useTransform(p, [0, 1], [50, 0])
  const clipPath = useTransform(top, (v) => `inset(${v}% 0% ${v}% 0%)`)
  const scale = useTransform(p, [0, 1], [1.18, 1])
  const opacity = useTransform(p, [0, 0.4, 1], [0.25, 0.8, 1])
  return (
    <div ref={ref} className={className} style={{ overflow: 'hidden' }}>
      <motion.div style={reduce ? { height: '100%' } : { clipPath, scale, opacity, height: '100%' }}>{children}</motion.div>
    </div>
  )
}

/* ---------- Hero exit: the hero recedes as the next scene takes over ---------- */
export function HeroExit({ children, className }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion()
  const { scrollY } = useScroll()
  const [vh, setVh] = useState(900)

  useEffect(() => {
    const read = () => setVh(window.innerHeight)
    read()
    window.addEventListener('resize', read)
    return () => window.removeEventListener('resize', read)
  }, [])

  const y = useTransform(scrollY, [0, vh * 0.9], [0, -120])
  const opacity = useTransform(scrollY, [0, vh * 0.45, vh * 0.8], [1, 0.65, 0])
  const filter = useTransform(scrollY, [0, vh * 0.8], ['blur(0px)', 'blur(7px)'])

  return (
    <motion.div className={className} style={reduce ? undefined : { y, opacity, filter }}>
      {children}
    </motion.div>
  )
}

/* ---------- Word-by-word text reveal ---------- */
export function WordReveal({
  text,
  className,
  as: Tag = 'h2',
  delay = 0,
}: {
  text: string
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'p'
  delay?: number
}) {
  const reduce = useReducedMotion()
  const words = text.split(' ')
  const Wrapper = motion[Tag] as typeof motion.h2

  if (reduce) {
    const Plain = Tag as 'h2'
    return <Plain className={className}>{text}</Plain>
  }

  return (
    <Wrapper
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-15% 0px -15% 0px' }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.035, delayChildren: delay } } }}
    >
      {words.map((w, i) => (
        <span key={`${w}-${i}`} style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom' }}>
          <motion.span
            className="word"
            variants={{ hidden: { y: '105%', opacity: 0 }, show: { y: '0%', opacity: 1 } }}
            transition={{ duration: 0.75, ease: EASE }}
          >
            {w}
            {i < words.length - 1 ? '\u00A0' : ''}
          </motion.span>
        </span>
      ))}
    </Wrapper>
  )
}

/* ---------- Parallax wrapper ---------- */
export function Parallax({ children, distance = 70, className }: { children: ReactNode; distance?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [-distance, distance])
  return (
    <div ref={ref} className={className} style={{ overflow: 'hidden' }}>
      <motion.div style={reduce ? undefined : { y, height: '100%' }}>{children}</motion.div>
    </div>
  )
}

/* ---------- Curtain: occlusion reveal (image uncovers itself) ---------- */
export function Curtain({
  children,
  className,
  from = 'bottom',
  delay = 0,
  style,
}: {
  children: ReactNode
  className?: string
  from?: 'bottom' | 'left'
  delay?: number
  style?: CSSProperties
}) {
  const reduce = useReducedMotion()
  const closed = from === 'bottom' ? 'inset(100% 0% 0% 0%)' : 'inset(0% 100% 0% 0%)'

  return (
    <motion.div
      className={className}
      style={style}
      initial={reduce ? undefined : { clipPath: closed, opacity: 0.4 }}
      whileInView={reduce ? undefined : { clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 }}
      viewport={{ once: true, margin: '-12% 0px -12% 0px' }}
      transition={{ duration: 1.25, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

/* ---------- Scroll-drawn hairline rule ---------- */
export function ScrollRule({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 85%', 'start 45%'] })
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 26 })
  return (
    <div ref={ref} className={className} aria-hidden>
      <motion.span style={reduce ? { transform: 'scaleX(1)' } : { scaleX, transformOrigin: 'left' }} />
    </div>
  )
}

/* ---------- Animated counter ---------- */
export function Counter({
  value,
  prefix = '',
  suffix = '',
  decimals = 0,
}: {
  value: number
  prefix?: string
  suffix?: string
  decimals?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px 8% 0px' })
  const reduce = useReducedMotion()
  const [display, setDisplay] = useState(reduce ? value : 0)

  useEffect(() => {
    if (!inView || reduce) return
    const duration = 1500
    const start = performance.now()
    let frame = 0
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setDisplay(value * eased)
      if (p < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, reduce, value])

  const formatted =
    decimals > 0
      ? display.toFixed(decimals)
      : Math.round(display).toLocaleString('en-IN')

  return (
    <span ref={ref}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  )
}

/* ---------- Hero: media scale + content lift on scroll ---------- */
export function HeroMedia({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.16])
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])
  return (
    <motion.div ref={ref} className="hero-media" style={reduce ? undefined : { scale, y }}>
      {children}
    </motion.div>
  )
}

/* ---------- Hero video: no poster flash, fades up from black when ready ---------- */
export function HeroVideo({ src, plate }: { src: string; plate: string }) {
  const [ready, setReady] = useState(false)
  return (
    <>
      {/* Soft out-of-focus plate: holds the frame while the film loads, then dissolves. */}
      <motion.img
        src={plate}
        alt=""
        aria-hidden="true"
        className="hero-plate"
        initial={{ opacity: 0 }}
        animate={{ opacity: ready ? 0 : 1 }}
        transition={{ duration: ready ? 1.5 : 1.1, ease: 'easeInOut' }}
      />
      <motion.video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        onCanPlay={() => setReady(true)}
        onPlaying={() => setReady(true)}
        initial={{ opacity: 0, scale: 1.06 }}
        animate={ready ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.06 }}
        transition={{ opacity: { duration: 1.6, ease: 'easeOut' }, scale: { duration: 2.4, ease: [0.16, 1, 0.3, 1] } }}
      >
        <source src={src} type="video/mp4" />
      </motion.video>
    </>
  )
}

export function HeroContent({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className="hero-inner"
      initial={reduce ? undefined : 'hidden'}
      animate={reduce ? undefined : 'show'}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.13, delayChildren: 0.15 } } }}
    >
      {children}
    </motion.div>
  )
}

export function HeroLine({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={{ hidden: { opacity: 0, y: 34 }, show: { opacity: 1, y: 0 } }}
      transition={{ duration: 1, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

/* ---------- Masked headline for hero (per-line clip reveal) ---------- */
export function HeroHeadline({ lines, className }: { lines: ReactNode[]; className?: string }) {
  const reduce = useReducedMotion()
  return (
    <h1 className={className}>
      {lines.map((line, i) => (
        <span key={i} style={{ display: 'block', overflow: 'hidden' }}>
          <motion.span
            style={{ display: 'block' }}
            initial={reduce ? undefined : { y: '108%' }}
            animate={reduce ? undefined : { y: '0%' }}
            transition={{ duration: 1.15, delay: 0.15 + i * 0.13, ease: EASE }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </h1>
  )
}

/* ---------- Magnetic hover (subtle pointer follow) ---------- */
export function Magnetic({ children, className, strength = 8 }: { children: ReactNode; className?: string; strength?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 200, damping: 18 })
  const sy = useSpring(y, { stiffness: 200, damping: 18 })
  const reduce = useReducedMotion()

  return (
    <motion.div
      ref={ref}
      className={className}
      style={reduce ? undefined : { x: sx, y: sy, display: 'inline-flex' }}
      onPointerMove={(e) => {
        if (reduce || !ref.current) return
        const r = ref.current.getBoundingClientRect()
        x.set(((e.clientX - r.left) / r.width - 0.5) * strength * 2)
        y.set(((e.clientY - r.top) / r.height - 0.5) * strength * 2)
      }}
      onPointerLeave={() => {
        x.set(0)
        y.set(0)
      }}
    >
      {children}
    </motion.div>
  )
}
