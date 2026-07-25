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
  step = 0.09,
  once = false,
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
      viewport={{ once, margin: '-10% 0px -10% 0px' }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: step } } }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
  style,
  y = 30,
}: {
  children: ReactNode
  className?: string
  style?: CSSProperties
  y?: number
}) {
  return (
    <motion.div
      className={className}
      style={style}
      variants={{ hidden: { opacity: 0, y }, show: { opacity: 1, y: 0 } }}
      transition={{ duration: 0.8, ease: EASE }}
    >
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
  const inView = useInView(ref, { once: true, margin: '-15% 0px' })
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
