import { ArrowUpRight, Clock, ExternalLink, Mail, MapPin, Phone, Sun } from 'lucide-react'
import Link from 'next/link'
import { CONTACT } from '@/lib/site-data'

const columns: { title: string; links: [string, string][] }[] = [
  {
    title: 'Solar',
    links: [
      ['On-grid systems', '/solar#on-grid'],
      ['Off-grid systems', '/solar#off-grid'],
      ['Hybrid systems', '/solar#hybrid'],
      ['Subsidy & payback', '/solar#economics'],
      ['Warranty & standards', '/warranty'],
    ],
  },
  {
    title: 'Security',
    links: [
      ['Camera range', '/cctv#range'],
      ['Solar-powered CCTV', '/cctv#solar-cctv'],
      ['Recording & storage', '/cctv#storage'],
      ['Install process', '/cctv#process'],
      ['Projects', '/projects'],
    ],
  },
  {
    title: 'Services',
    links: [
      ['Solar installation', '/services#solar-installation'],
      ['CCTV services', '/services#cctv-services'],
      ['Panel maintenance', '/services#panel-maintenance'],
      ['Annual maintenance', '/services#annual-maintenance'],
      ['Ongoing support', '/services#ongoing-support'],
    ],
  },
  {
    title: 'Company',
    links: [
      ['About us', '/about'],
      ['Service areas', '/service-areas'],
      ['Insights', '/insights'],
      ['FAQ', '/faq'],
      ['Contact', '/contact'],
    ],
  },
]

const socials: [string, string][] = [
  ['Instagram', 'https://instagram.com'],
  ['Facebook', 'https://facebook.com'],
  ['LinkedIn', 'https://linkedin.com'],
  ['YouTube', 'https://youtube.com'],
]

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <Link href="/" className="brand">
            <span className="brand-mark" aria-hidden="true">
              <Sun />
            </span>
            <span>
              <b>Solar Shield</b>
              <small>Technologies</small>
            </span>
          </Link>
          <h2>
            Power that performs. <em>Protection that persists.</em>
          </h2>
          <p>
            Solar and surveillance engineered together across Andhra Pradesh and Telangana. One survey, one design, one crew, and
            one number to call afterwards.
          </p>
          <Link href="/site-survey" className="button button-primary">
            Book a free site survey
            <ArrowUpRight aria-hidden="true" />
          </Link>
          <div className="footer-socials">
            {socials.map(([label, href]) => (
              <a key={label} href={href} aria-label={label} target="_blank" rel="noreferrer noopener" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.78rem', color: 'var(--muted-fg)', textDecoration: 'none' }}>
                <ExternalLink aria-hidden="true" style={{ width: '0.85rem', height: '0.85rem' }} />
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-columns">
          {columns.map((col) => (
            <div key={col.title} className="footer-col">
              <h3>{col.title}</h3>
              <ul>
                {col.links.map(([label, href]) => (
                  <li key={href}>
                    <Link href={href}>{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-contact-strip">
        <div>
          <div className="footer-contact-item">
            <Phone aria-hidden="true" />
            <div>
              <span>Speak to an engineer</span>
              <b>
                <a href={CONTACT.phoneHref}>{CONTACT.phoneLabel}</a>
              </b>
            </div>
          </div>
          <div className="footer-contact-item">
            <Mail aria-hidden="true" />
            <div>
              <span>Email</span>
              <b>
                <a href={CONTACT.emailHref}>{CONTACT.email}</a>
              </b>
            </div>
          </div>
          <div className="footer-contact-item">
            <MapPin aria-hidden="true" />
            <div>
              <span>Service region</span>
              <b>{CONTACT.service}</b>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-contact-strip">
        <div style={{ gridTemplateColumns: '1fr' }}>
          <div className="footer-contact-item">
            <Clock aria-hidden="true" />
            <div>
              <span>Working hours</span>
              <b>{CONTACT.hours}</b>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-wordmark" aria-hidden="true">
        <span>SOLAR SHIELD</span>
      </div>

      <div className="footer-bottom">
        <div>
          <p>© {new Date().getFullYear()} Solar Shield Technologies. All rights reserved.</p>
          <div className="footer-legal">
            <Link href="/privacy">Privacy policy</Link>
            <Link href="/terms">Terms of service</Link>
            <Link href="/warranty">Warranty</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
