import { useRef, useState, useEffect } from 'react'
import './App.css'

function useInView(options = {}) {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)
  const { rootMargin = '0px 0px -60px 0px', threshold = 0.1 } = options

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true)
      },
      { rootMargin, threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [rootMargin, threshold])

  return [ref, isInView]
}

function AnimateIn({ children, className = '', animation = 'slideUp', delay = 0, as: Tag = 'div' }) {
  const [ref, isInView] = useInView()
  return (
    <Tag
      ref={ref}
      className={`animate-in animate-${animation} ${isInView ? 'is-visible' : ''} ${className}`.trim()}
      style={{ transitionDelay: delay ? `${delay}ms` : undefined }}
    >
      {children}
    </Tag>
  )
}

import logoImg from '../assets/logo.png'
import heroImage from '../assets/ChatGPT Image Feb 23, 2026, 10_58_25 AM.png'
import puffPuffImg from '../assets/puffpuff.webp'
import bunsImg from '../assets/buns.jpeg'
import eggRollImg from '../assets/ChatGPT Image Feb 24, 2026, 01_40_53 PM.png'
import doughnutImg from '../assets/No-Yeast-Doughnuts-1536x864.jpg'
import meatPieImg from '../assets/meatpie.jpeg'
import sausageRollImg from '../assets/sussageroll.jpeg'
import fishRollImg from '../assets/fishroll.jpg'
import aboutImage from '../assets/3c101a961c80239c54d154326fb96498.jpg'

const WHATSAPP_NUMBER = '2348036857203' // 0803 685 7203 with country code
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`

const services = [
  { name: 'Puff Puff', desc: 'Golden, fluffy balls of fried dough—our signature treat, perfect with a cold drink.', image: puffPuffImg },
  { name: 'Buns', desc: 'Soft, sweet buns baked fresh. Plain or filled, they never last long.', image: bunsImg },
  { name: 'Egg Roll', desc: 'Crispy pastry wrapped around spiced egg—a crowd favourite at every gathering.', image: eggRollImg },
  { name: 'Doughnut', desc: 'Classic ring doughnuts, sugar-dusted or glazed. Simple and satisfying.', image: doughnutImg },
  { name: 'Meat Pie', desc: 'Flaky shortcrust filled with seasoned minced meat. Hearty and delicious.', image: meatPieImg },
  { name: 'Sausage Roll', desc: 'Savoury sausage wrapped in buttery pastry. Ideal for parties and packs.', image: sausageRollImg },
  { name: 'Fish Roll', desc: 'Crispy rolls with tender fish filling. A must-try for seafood lovers.', image: fishRollImg },
]

const events = [
  'Nikkah',
  'Naming Ceremony',
  'Hafla',
  'House Warming',
  'Get Togethers',
  'Birthdays',
  'Corporate Events',
]

function App() {
  const contactRef = useRef(null)

  return (
    <div className="app">
      {/* Top nav */}
      {/* <nav className="top-nav">
        <a href="#" className="nav-logo" aria-label="ALFA PUFF PUFF Home">
          <img src={logoImg} alt="ALFA PUFF PUFF" className="nav-logo-img" />
        </a>
        <ul className="nav-menu">
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#events">Events</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav> */}

      {/* Hero */}
      <header className="hero">
        <div className="hero-bg" />
        <div className="hero-image-wrap">
          <img src={heroImage} alt="Alfa Puff Puff — Snacks and small chops" className="hero-image" />
          <div className="hero-image-overlay" />
        </div>
        <div className="hero-content">
          <div className="logo-wrap hero-logo-wrap">
            <img src={logoImg} alt="ALFA PUFF PUFF" className="hero-logo" />
          </div>
          <h1 className="brand-name">ALFA PUFF PUFF</h1>
          <p className="tagline">Snacks & Pastries</p>
          <p className="hero-sub">Fresh, homemade small chops made with care. Perfect for every occasion.</p>
          <a href="#contact" className="cta-btn">Order or enquire</a>
        </div>
      </header>

      {/* About */}
      <section className="section about" id="about">
        <div className="container about-container">
          <AnimateIn animation="slideUp">
            <h2 className="section-title">About Us</h2>
          </AnimateIn>
          <div className="about-grid">
            <AnimateIn animation="slideRight" delay={100}>
              <div className="about-content">
                <p className="about-lead">
                At ALFA PUFF PUFF, we believe the best moments are shared over great food. What started as a love for homemade snacks and pastries has grown into a small business built on quality, freshness, and that first bite that keeps people coming back.
              </p>
              <p className="about-body">
                We make our puff puff, buns, egg rolls, meat pies, and more in small batches so every order is fresh. Whether you’re ordering for yourself, your family, or a full event, we take care with every item—because we know it’s not just snacks; it’s part of your celebration.
              </p>
              <p className="about-close">
                <strong>Snacks and small chops at affordable prices.</strong> A trial will surely convince you.
              </p>
              </div>
            </AnimateIn>
            <AnimateIn animation="slideLeft" delay={150}>
              <div className="about-image-wrap">
                <img src={aboutImage} alt="ALFA PUFF PUFF — fresh small chops and pastries" className="about-image" />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="section services" id="services">
        <div className="container">
          <AnimateIn animation="slideUp">
            <h2 className="section-title">Our Services</h2>
            <p className="section-intro">We offer a full range of small chops and pastries, made to order for you and your guests.</p>
          </AnimateIn>
          <ul className="services-grid">
            {services.map((item, i) => (
              <AnimateIn key={i} as="li" className="service-card" animation="slideUp" delay={80 * i}>
                <div className="service-card-image-wrap">
                  <img src={item.image} alt={item.name} className="service-card-image" />
                </div>
                <div className="service-card-body">
                  <h3>{item.name}</h3>
                  <p>{item.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </ul>
        </div>
      </section>

      {/* Event catering */}
      <section className="section events" id="events">
        <div className="events-bg" />
        <div className="container events-container">
          <AnimateIn animation="slideUp">
            <div className="events-header">
              <h2 className="events-title">Event Catering</h2>
              <p className="events-tagline">We specialise in packaging small chops for your events</p>
              <p className="events-intro">Whether it’s a small gathering or a big celebration, we’ve got you covered.</p>
            </div>
          </AnimateIn>
          <ul className="events-list">
            {events.map((event, i) => (
              <AnimateIn key={i} as="li" className="event-item" animation="fadeIn" delay={60 * i}>
                <span className="event-bullet" />{event}
              </AnimateIn>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section className="section contact" id="contact" ref={contactRef}>
        <div className="container">
          <AnimateIn animation="slideUp">
            <h2 className="section-title">Contact us</h2>
            <p className="section-intro">Reach out on WhatsApp for orders, quotes, or event enquiries. We’re just a message away.</p>
          </AnimateIn>
          <AnimateIn animation="slideUp" delay={100}>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-block"
            aria-label="Chat with us on WhatsApp"
          >
            <div className="whatsapp-icon-wrap">
              <svg className="whatsapp-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>
            <div className="whatsapp-text">
              <strong>Chat with us on WhatsApp</strong>
              <span>Tap to start a conversation — we’ll reply as soon as we can.</span>
            </div>
          </a>

          <p className="contact-numbers">
            Or call: <a href="tel:+2348036857203">0803 685 7203</a> · <a href="tel:+2347054172171">0705 417 2171</a>
          </p>

          <p className="slogan">A trial will surely convince you.</p>
          </AnimateIn>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <a href="#" className="footer-logo-link">
              <img src={logoImg} alt="ALFA PUFF PUFF" className="footer-logo" />
            </a>
          </div>
          <nav className="footer-nav">
            <span className="footer-nav-label">Quick links</span>
            <ul className="footer-links">
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#events">Events</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
          <div className="footer-contact">
            <span className="footer-nav-label">Contact</span>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="footer-whatsapp">WhatsApp</a>
            <p className="footer-phone">0803 685 7203</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} ALFA PUFF PUFF — Snacks & Pastries</p>
        </div>
      </footer>
    </div>
  )
}

export default App
