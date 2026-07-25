import { useMemo } from 'react'
import { motion } from 'framer-motion'
import './App.css'

const PHONE_PRIMARY = '9603884444'
const PHONE_SECONDARY = '9908149199'
const WHATSAPP_BASE = 'https://wa.me/919603884444?text='

function waLink(message: string) {
  return WHATSAPP_BASE + encodeURIComponent(message)
}

const WHATSAPP = waLink(
  'Hi Subhash Garden! I want to know about school packages and how to book. 243, Madanpalle, Makloor, Telangana 503003.',
)
const ADDRESS = '243, Madanpalle, Makloor, Telangana 503003, India'
const MAPS_URL = 'https://maps.app.goo.gl/M49KjkBGy6xz85pp9'

type PackageGroup = {
  title: string
  items: string[]
}

type SchoolPackage = {
  id: string
  name: string
  price: string
  priceNote: string
  hours: string
  badge?: string
  featured?: boolean
  highlights: string[]
  fullGroups: PackageGroup[]
  ctaLabel: string
  whatsappMessage: string
}

const schoolPackages: SchoolPackage[] = [
  {
    id: 'day',
    name: 'Day trip',
    price: '₹399',
    priceNote: 'per student',
    hours: '11 AM – 5 PM',
    highlights: [
      'All water activities (~20 slides)',
      'Medium & low rope course',
      'Costume included',
      'Veg lunch + evening snacks',
    ],
    fullGroups: [
      {
        title: 'Water & adventure',
        items: [
          'All water activities',
          'About 20 slides',
          'Medium and low rope course',
          'Adventure activities',
        ],
      },
      {
        title: 'Food & costume',
        items: [
          'Costume',
          'Veg lunch',
          'Evening snacks (onion pakoda)',
        ],
      },
      {
        title: 'Timing',
        items: ['11:00 AM to 5:00 PM'],
      },
    ],
    ctaLabel: 'WhatsApp day trip',
    whatsappMessage:
      'Hi Subhash Garden! I want to book the school Day trip package (₹399, 11 AM–5 PM). School name: ',
  },
  {
    id: 'camping',
    name: 'Day + camping',
    price: '₹999',
    priceNote: 'per student',
    hours: '11 AM → next day 10 AM · 24 hours',
    badge: 'Most complete',
    featured: true,
    highlights: [
      'Everything in Day trip',
      'Tent stay from 5 PM',
      'Dinner + campfire with music',
      'Games, boating & group activities',
    ],
    fullGroups: [
      {
        title: 'Everything in Day trip',
        items: [
          'All water & adventure activities',
          'Costume, veg lunch, evening snacks',
          'Rope course and slides',
        ],
      },
      {
        title: 'After 5 PM — campsite',
        items: [
          'Campsite entry from 5 PM onwards',
          'Allotment of tents',
          'Outdoor game activities',
          'Indoor game activities',
          'Boating',
          'Dinner 7:00 PM – 8:00 PM',
          'Campfire with music',
          'Group activities',
          'Tug of war',
          'Musical chairs',
          'Tambola',
        ],
      },
      {
        title: 'Timing',
        items: ['11:00 AM to next day 10:00 AM (24 hours)'],
      },
    ],
    ctaLabel: 'WhatsApp camping',
    whatsappMessage:
      'Hi Subhash Garden! I want to book the school Day + camping package (₹999, 24 hours). School name: ',
  },
]

const faqs = [
  {
    q: 'Can I buy tickets on this website?',
    a: 'No. This website is only for information. Please call or WhatsApp to check prices and timings.',
  },
  {
    q: 'Where is Subhash Garden?',
    a: '243, Madanpalle, Makloor, Telangana 503003, India.',
  },
  {
    q: 'How much is entry?',
    a: 'Often about ₹399–400 for kids and ₹499–500 for adults. Some days may include free veg lunch until early afternoon. Please confirm before you come.',
  },
  {
    q: 'Are there extra charges?',
    a: 'Sometimes yes — for swim dress, tubes, or extra food. Ask on WhatsApp so you know the full cost.',
  },
]

function Bubbles() {
  const items = useMemo(
    () =>
      Array.from({ length: 14 }, (_, i) => ({
        id: i,
        left: `${(i * 7.3) % 100}%`,
        size: 8 + ((i * 13) % 22),
        duration: 12 + (i % 8) * 2.5,
        delay: (i % 10) * 1.1,
      })),
    [],
  )

  return (
    <div className="bubbles" aria-hidden="true">
      {items.map((b) => (
        <span
          key={b.id}
          className="bubble"
          style={{
            left: b.left,
            width: b.size,
            height: b.size,
            animationDuration: `${b.duration}s`,
            animationDelay: `${b.delay}s`,
          }}
        />
      ))}
    </div>
  )
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
}

export default function App() {
  return (
    <div className="app">
      <Bubbles />

      <header className="nav">
        <a href="#top" className="nav-brand">
          <img
            className="nav-logo"
            src="/images/subhash-chandra-bose.png"
            alt="Netaji Subhash Chandra Bose"
            width={40}
            height={40}
          />
          <span className="nav-title">
            Subhash Garden
            <span>Nizamabad water park</span>
          </span>
        </a>
        <nav className="nav-links" aria-label="Main menu">
          <a href="#packages">Packages</a>
          <a href="#visit">Visit info</a>
          <a href="#location">Location</a>
          <a href="#faq">FAQ</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-label="Welcome">
          <div className="hero-media">
            <video
              autoPlay
              muted
              loop
              playsInline
              poster="/images/hero-still.jpg"
              aria-label="Kids and teachers around a campfire at night with fireflies"
            >
              <source src="/videos/hero.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="hero-overlay" />
          <div className="hero-content">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: 'easeOut' }}
            >
              <h1>
                <span className="brand-name">Subhash Garden</span>
                <span className="brand-version" aria-hidden="true">
                  <span className="brand-version-glow" />
                  <span className="brand-version-num">2.0</span>
                </span>
                <span className="sr-only">2.0</span>
              </h1>
              <div className="hero-underline" aria-hidden="true" />
              <p className="hero-lead">
                Day trips · overnight camps · group fun
              </p>
              <div className="hero-actions">
                <a className="btn btn-whatsapp" href={WHATSAPP} target="_blank" rel="noreferrer">
                  WhatsApp us
                </a>
              </div>
              <a className="hero-secondary-link" href="#packages">
                View packages →
              </a>
            </motion.div>
          </div>
        </section>

        <div className="quick-strip" aria-label="Quick facts">
          <div className="quick-card">
            <strong>11 AM – 5 PM</strong>
            <span>Day package</span>
          </div>
          <div className="quick-card">
            <strong>₹399 · ₹999</strong>
            <span>Day · day + camping</span>
          </div>
          <div className="quick-card">
            <strong>For schools</strong>
            <span>Groups · 15:1 care</span>
          </div>
        </div>

        <section className="section" id="packages">
          <motion.div
            className="section-head"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
          >
            <span className="section-kicker">School packages</span>
            <h2>Two ways to come.</h2>
            <p>Pick day or overnight. Open the full list anytime — then WhatsApp to book.</p>
          </motion.div>

          <div className="package-grid">
            {schoolPackages.map((pkg, i) => (
              <motion.article
                key={pkg.id}
                className={`package-card${pkg.featured ? ' package-card--featured' : ''}`}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
              >
                {pkg.badge ? <span className="package-badge">{pkg.badge}</span> : null}

                <header className="package-card-head">
                  <div>
                    <h3>{pkg.name}</h3>
                    <p className="package-hours">{pkg.hours}</p>
                  </div>
                  <div className="package-price" aria-label={`${pkg.price} ${pkg.priceNote}`}>
                    <strong>{pkg.price}</strong>
                    <span>{pkg.priceNote}</span>
                  </div>
                </header>

                <ul className="package-highlights">
                  {pkg.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <a
                  className={`btn ${pkg.featured ? 'btn-whatsapp' : 'btn-primary'} package-cta`}
                  href={waLink(pkg.whatsappMessage)}
                  target="_blank"
                  rel="noreferrer"
                >
                  {pkg.ctaLabel}
                </a>

                <details className="package-details">
                  <summary>See everything included</summary>
                  <div className="package-details-body">
                    {pkg.fullGroups.map((group) => (
                      <div key={group.title} className="package-group">
                        <h4>{group.title}</h4>
                        <ul>
                          {group.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </details>
              </motion.article>
            ))}
          </div>

          <p className="package-footnote">
            15:1 student–teacher care · Madanpalle, Makloor · Prices per student — confirm for your
            group size on WhatsApp
          </p>
        </section>

        <section className="section" id="visit">
          <div className="section-head">
            <span className="section-kicker">Plan your visit</span>
            <h2>How to reach us</h2>
            <p>
              School packages are listed above. Confirm dates and group size on
              WhatsApp — tickets are not sold on this website.
            </p>
          </div>

          <div className="info-grid info-grid--single">
            <div className="glass-panel">
              <div className="meta-list">
                <div className="meta-item">
                  <div className="meta-icon" aria-hidden>
                    ⏰
                  </div>
                  <div>
                    <h3>Day package hours</h3>
                    <p>11:00 AM – 5:00 PM</p>
                  </div>
                </div>
                <div className="meta-item">
                  <div className="meta-icon" aria-hidden>
                    ⛺
                  </div>
                  <div>
                    <h3>Camping package</h3>
                    <p>11:00 AM → next day 10:00 AM (24 hours)</p>
                  </div>
                </div>
                <div className="meta-item">
                  <div className="meta-icon" aria-hidden>
                    📍
                  </div>
                  <div>
                    <h3>Address</h3>
                    <p>{ADDRESS}</p>
                  </div>
                </div>
                <div className="meta-item">
                  <div className="meta-icon" aria-hidden>
                    📞
                  </div>
                  <div>
                    <h3>Phone</h3>
                    <p>
                      <a href={`tel:+91${PHONE_PRIMARY}`}>{PHONE_PRIMARY}</a>
                      {' · '}
                      <a href={`tel:+91${PHONE_SECONDARY}`}>{PHONE_SECONDARY}</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="location">
          <div className="section-head">
            <span className="section-kicker">Find us</span>
            <h2>Find us on the map</h2>
            <p>243, Madanpalle, Makloor, Telangana 503003, India</p>
          </div>
          <div className="map-card">
            <div className="map-visual">
              <img src="/images/aerial.jpg" alt="View of the garden and water park" />
              <span className="map-pin" aria-hidden />
            </div>
            <div className="map-body">
              <h3>Subhash Garden</h3>
              <p>{ADDRESS}</p>
              <div className="map-actions">
                <a className="btn btn-primary" href={MAPS_URL} target="_blank" rel="noreferrer">
                  Open in Google Maps
                </a>
                <a className="btn btn-ghost" href={WHATSAPP} target="_blank" rel="noreferrer">
                  Ask for directions
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="faq">
          <div className="section-head">
            <span className="section-kicker">FAQ</span>
            <h2>Common questions</h2>
          </div>
          <div className="faq">
            {faqs.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <img
          className="footer-logo"
          src="/images/subhash-chandra-bose.png"
          alt="Netaji Subhash Chandra Bose"
          width={72}
          height={72}
        />
        <div className="logo-script">Subhash Garden</div>
        <p>Water park · Madanpalle · Makloor · 503003</p>
        <p>
          <a href={`tel:+91${PHONE_PRIMARY}`}>{PHONE_PRIMARY}</a>
          {' · '}
          <a href={`tel:+91${PHONE_SECONDARY}`}>{PHONE_SECONDARY}</a>
        </p>
        <p className="tiny">
          This website is for information only. Tickets are not sold online
          here.
        </p>
      </footer>

      <div className="sticky-cta" role="navigation" aria-label="Quick contact">
        <a className="call" href={`tel:+91${PHONE_PRIMARY}`}>
          Call now
        </a>
        <a className="wa" href={WHATSAPP} target="_blank" rel="noreferrer">
          WhatsApp
        </a>
      </div>
    </div>
  )
}
