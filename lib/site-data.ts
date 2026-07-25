export const CONTACT = {
  phoneLabel: '+91 938 118 1601',
  phoneHref: 'tel:+919381181601',
  whatsappHref: 'https://wa.me/919381181601',
  email: 'info@solarshieldtech.com',
  emailHref: 'mailto:info@solarshieldtech.com',
  hours: 'Mon – Sat, 9:00 – 19:00 IST',
  service: 'Andhra Pradesh & Telangana',
}

export const solarSystems = [
  {
    slug: 'on-grid',
    label: 'On-grid',
    title: 'Connected to the grid. Built to lower every bill.',
    text: 'Net metering, ideal for homes and businesses with reliable supply.',
    image: '/images/on-grid.jpeg',
    position: 'center 48%',
    best: 'Homes and shops with stable grid supply',
    spec: [
      ['Battery', 'Not required'],
      ['Backup during cuts', 'No'],
      ['Export credit', 'Yes — net metering'],
      ['Typical payback', '5 – 7 years'],
    ],
  },
  {
    slug: 'off-grid',
    label: 'Off-grid',
    title: 'No grid. No compromise. Full independence, day and night.',
    text: 'Battery storage sized to your night load, built for remote sites.',
    image: '/images/off-grid.jpeg',
    position: '62% 45%',
    best: 'Farms, borewells, towers and remote plots',
    spec: [
      ['Battery', 'Lithium or tubular'],
      ['Backup during cuts', 'Full'],
      ['Export credit', 'Not applicable'],
      ['Typical payback', '6 – 9 years'],
    ],
  },
  {
    slug: 'hybrid',
    label: 'Hybrid',
    title: 'Grid, battery and sun, working together automatically.',
    text: 'Smart load management with uninterrupted supply through outages.',
    image: '/images/solar-hybrid.jpeg',
    position: 'center 52%',
    best: 'Homes and offices that cannot afford downtime',
    spec: [
      ['Battery', 'Lithium, right-sized'],
      ['Backup during cuts', 'Priority loads'],
      ['Export credit', 'Yes — net metering'],
      ['Typical payback', '6 – 8 years'],
    ],
  },
]

export const cameras = [
  { label: 'Dome', title: 'Compact, vandal-resistant, indoor or outdoor.', image: '/images/security-dome.jpeg', position: '62% 30%', use: 'Lobbies, corridors, retail floors' },
  { label: 'Bullet', title: 'Long-range, weatherproof, built for exteriors.', image: '/images/security-bullet.jpeg', position: 'center 38%', use: 'Driveways, gates, boundary walls' },
  { label: 'PTZ', title: 'Pan, tilt and zoom for wide-area coverage on demand.', image: '/images/security-ptz.jpeg', position: 'center 42%', use: 'Yards, parking, large campuses' },
  { label: 'IP camera', title: 'High-definition, remote monitoring, ONVIF compatible.', image: '/images/security-ip.jpeg', position: '58% 32%', use: 'Offices and multi-site businesses' },
  { label: 'WiFi camera', title: 'Wireless install with instant mobile alerts.', image: '/images/security-wifi.jpeg', position: '75% 22%', use: 'Apartments and small shops' },
  { label: 'Solar CCTV', title: 'Solar-powered and battery backed for sites without wiring.', image: '/images/security-solar.jpeg', position: '65% 35%', use: 'Fields, construction, remote assets' },
]

export const projects = [
  { label: 'Residential rooftop', title: 'Grid-connected comfort for the family home.', image: '/images/project-residential.jpeg', meta: 'Vijayawada · 5 kW on-grid' },
  { label: 'Commercial rooftop', title: 'Lower operating costs for growing businesses.', image: '/images/project-commercial.png', meta: 'Guntur · 25 kW on-grid' },
  { label: 'Industrial rooftop', title: 'Long-term reliability, engineered at scale.', image: '/images/project-industrial.png', meta: 'Nunna · 110 kW on-grid' },
  { label: 'Ground mount', title: 'Maximum generation across open land.', image: '/images/night-estate.jpeg', meta: 'Kankipadu · 40 kW hybrid' },
  { label: 'Night watch', title: 'Quiet, dependable, always on.', image: '/images/project-night-watch.jpeg', meta: 'Estate perimeter · 12 IP cameras' },
]

export const services = [
  { slug: 'solar-installation', number: '01', title: 'Solar installation', text: 'Complete end-to-end setup tailored to your property, roofline and energy needs.', image: '/images/service-install.jpeg', includes: ['Load study and shade analysis', 'Structure, wiring and earthing', 'Net-metering paperwork', 'Commissioning and handover'] },
  { slug: 'cctv-services', number: '02', title: 'CCTV services', text: 'Strategic placement and clean installation for complete, dependable coverage.', image: '/images/service-cctv.jpeg', includes: ['Risk-point walkthrough', 'Camera and lens selection', 'NVR, storage and retention plan', 'Mobile access setup'] },
  { slug: 'panel-maintenance', number: '03', title: 'Panel maintenance', text: 'Cleaning and health checks that preserve efficiency and year-round output.', image: '/images/service-care.jpeg', includes: ['Deionised water cleaning', 'String and inverter checks', 'Thermal hotspot scan', 'Output report'] },
  { slug: 'annual-maintenance', number: '04', title: 'Annual maintenance', text: 'Planned inspections and priority repairs for both solar and security systems.', image: '/images/service-amc.jpeg', includes: ['Scheduled visits', 'Priority response window', 'Consumables covered', 'Annual performance review'] },
  { slug: 'ongoing-support', number: '05', title: 'Ongoing support', text: 'Responsive technical assistance so you are never left in the dark.', image: '/images/service-support.jpeg', includes: ['Direct line to a technician', 'Remote inverter diagnostics', 'Warranty claim handling', 'Spare part sourcing'] },
]

export const faqs = [
  {
    group: 'Solar',
    items: [
      { q: 'How much roof do I need for a 3 kW system?', a: 'Roughly 200 to 300 sq ft of shade-free roof, depending on panel wattage and tilt. We measure this during the site survey rather than guessing from a phone call.' },
      { q: 'What subsidy applies to a home in 2026?', a: 'Under PM Surya Ghar Muft Bijli Yojana, residential systems receive ₹30,000 per kW for the first 2 kW and ₹18,000 for the third, capped at ₹78,000 for 3 kW and above. Some states add a top-up. Panels must be ALMM-listed and the installer MNRE-empanelled.' },
      { q: 'When will I break even?', a: 'For a well-sited 3 kW on-grid home system with net metering, five to seven years is the honest range. High-tariff and high-consumption sites land closer to four.' },
      { q: 'Do panels work in monsoon?', a: 'Yes, at reduced output. Diffuse light still generates. We size systems on annual yield, not a best-case sunny day, so a wet month does not break your numbers.' },
      { q: 'How long does installation take?', a: 'Typically two to four days on site for a residential system. Net-metering approval and DISCOM commissioning run in parallel and set the overall timeline.' },
    ],
  },
  {
    group: 'CCTV',
    items: [
      { q: 'How many cameras do I actually need?', a: 'Fewer than most quotes suggest. We map entry points, blind corners and asset zones, then place the minimum number of correctly specified cameras to cover them.' },
      { q: 'How much footage is retained?', a: 'We size storage to your retention requirement, commonly 15 to 30 days. Motion-based recording and smart codecs extend that considerably.' },
      { q: 'Can I watch the feed from my phone?', a: 'Yes. We configure secure mobile access on handover, with separate credentials per user so you are not sharing one admin login.' },
      { q: 'What happens during a power cut?', a: 'Cameras and the recorder sit behind a UPS or, on solar sites, the battery bank. Recording continues through the outage.' },
    ],
  },
  {
    group: 'Working with us',
    items: [
      { q: 'Is the site survey really free?', a: 'Yes, and there is no obligation. You get measurements, a shade assessment and a written system recommendation whether or not you proceed.' },
      { q: 'Do you handle both solar and CCTV on one project?', a: 'That is the point of us. One survey, one design, one install crew, one number to call afterwards.' },
      { q: 'What warranty do I get?', a: 'Manufacturer warranties on panels, inverters and cameras, plus our workmanship warranty on the installation itself. We handle claims on your behalf.' },
    ],
  },
]

export const insights = [
  {
    slug: 'solar-economics-2026',
    kicker: 'Economics',
    title: 'What rooftop solar actually costs in 2026',
    date: 'January 2026',
    read: '6 min',
    excerpt: 'Gross cost for a 3 kW residential system sits between ₹1.5 and ₹2.0 lakh. After the ₹78,000 central subsidy, most homes land at ₹85,000 to ₹1.2 lakh net. Here is where the variance comes from.',
    image: '/images/on-grid.jpeg',
  },
  {
    slug: 'net-metering-explained',
    kicker: 'Policy',
    title: 'Net metering, gross metering and why the difference matters',
    date: 'February 2026',
    read: '5 min',
    excerpt: 'Net metering offsets imported units at the full retail tariff. Gross metering pays a fixed feed-in rate. The mechanism you are assigned changes your payback by years.',
    image: '/images/solar-hybrid.jpeg',
  },
  {
    slug: 'battery-sizing',
    kicker: 'Engineering',
    title: 'Battery sizing without the guesswork',
    date: 'March 2026',
    read: '7 min',
    excerpt: 'Oversized batteries are the most common way to waste money on a hybrid system. Size to your night load and your tolerance for a dark hour, not to the biggest number on the quote.',
    image: '/images/off-grid.jpeg',
  },
  {
    slug: 'ai-cctv-2027',
    kicker: 'Security',
    title: 'On-camera analytics: what is worth paying for by 2027',
    date: 'April 2026',
    read: '5 min',
    excerpt: 'Line-crossing, loitering and human-versus-vehicle classification now run on the camera itself. Cloud-only analytics add subscription cost without adding much certainty.',
    image: '/images/security-ip.jpeg',
  },
]

export const stats = [
  { value: 4.6, suffix: ' kWh', label: 'Average daily yield per kW installed', note: 'Coastal Andhra, annualised' },
  { value: 78000, prefix: '₹', label: 'Central subsidy available on 3 kW homes', note: 'PM Surya Ghar, 2026' },
  { value: 25, suffix: ' yrs', label: 'Panel performance warranty on our standard tier', note: 'ALMM-listed modules' },
  { value: 48, suffix: ' hrs', label: 'From survey to a written system design', note: 'Typical turnaround' },
]

export const navigation = [
  {
    label: 'Solar',
    href: '/solar',
    children: [
      ['On-grid systems', '/solar#on-grid'],
      ['Off-grid systems', '/solar#off-grid'],
      ['Hybrid systems', '/solar#hybrid'],
      ['Subsidy & payback', '/solar#economics'],
    ],
  },
  {
    label: 'CCTV',
    href: '/cctv',
    children: [
      ['Camera types', '/cctv#range'],
      ['Solar-powered CCTV', '/cctv#solar-cctv'],
      ['Recording & storage', '/cctv#storage'],
    ],
  },
  { label: 'Projects', href: '/projects' },
  {
    label: 'Services',
    href: '/services',
    children: services.map((s) => [s.title, `/services#${s.slug}`] as [string, string]),
  },
  {
    label: 'Company',
    href: '/about',
    children: [
      ['About us', '/about'],
      ['Insights', '/insights'],
      ['FAQ', '/faq'],
      ['Contact', '/contact'],
    ],
  },
]
