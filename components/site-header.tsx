'use client'

import { ArrowRight, ChevronDown, Menu, Phone, Sun, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { CONTACT, navigation } from '@/lib/site-data'

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header className="site-header" data-scrolled={scrolled}>
        <div className="header-inner">
          <Link href="/" className="brand" aria-label="Solar Shield Technologies home">
            <span className="brand-mark" aria-hidden="true">
              <Sun />
            </span>
            <span>
              <b>Solar Shield</b>
              <small>Technologies</small>
            </span>
          </Link>

          <nav className="desktop-nav" aria-label="Primary">
            {navigation.map((item) => (
              <div key={item.label} className="nav-item">
                <Link
                  href={item.href}
                  className="nav-link"
                  data-active={pathname === item.href || pathname.startsWith(`${item.href}/`)}
                >
                  {item.label}
                  {item.children && <ChevronDown aria-hidden="true" />}
                </Link>
                {item.children && (
                  <div className="nav-panel">
                    {item.children.map(([label, href]) => (
                      <Link key={href} href={href}>
                        {label}
                        <ArrowRight aria-hidden="true" />
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="header-actions">
            <a href={CONTACT.phoneHref} className="header-phone">
              <Phone aria-hidden="true" />
              {CONTACT.phoneLabel}
            </a>
            <Link href="/site-survey" className="button button-primary header-cta">
              Free site survey
            </Link>
            <button
              type="button"
              className="menu-toggle"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
            >
              <Menu aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="drawer" role="dialog" aria-modal="true" aria-label="Site menu">
          <div className="drawer-head">
            <Link href="/" className="brand" onClick={() => setOpen(false)}>
              <span className="brand-mark" aria-hidden="true">
                <Sun />
              </span>
              <span>
                <b>Solar Shield</b>
                <small>Technologies</small>
              </span>
            </Link>
            <button type="button" className="menu-toggle" onClick={() => setOpen(false)} aria-label="Close menu">
              <X aria-hidden="true" />
            </button>
          </div>

          {navigation.map((item) => (
            <div key={item.label} className="drawer-group">
              <Link href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
              {item.children && (
                <div className="drawer-links">
                  {item.children.map(([label, href]) => (
                    <Link key={href} href={href} onClick={() => setOpen(false)}>
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="drawer-foot">
            <Link href="/site-survey" className="button button-primary" onClick={() => setOpen(false)}>
              Book a free site survey
              <ArrowRight aria-hidden="true" />
            </Link>
            <a href={CONTACT.phoneHref} className="button button-ghost">
              <Phone aria-hidden="true" />
              {CONTACT.phoneLabel}
            </a>
          </div>
        </div>
      )}
    </>
  )
}
