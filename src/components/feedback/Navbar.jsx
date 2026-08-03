import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Home', href: 'home' },
  { label: 'About Us', href: 'about-us' },
  { label: 'Services', href: 'services' },
  { label: 'Products', href: 'products' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = navLinks.map((link) => document.getElementById(link.href))
      const scrollPos = window.scrollY + 100

      sections.forEach((section, index) => {
        if (!section) return
        if (
          section.offsetTop <= scrollPos &&
          section.offsetTop + section.offsetHeight > scrollPos
        ) {
          setActiveLink(navLinks[index].href)
        }
      })
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setMenuOpen(false)
  }

  const renderLink = (link, extraClass = '') => (
    <a
      key={link.href}
      href={`#${link.href}`}
      className={`nav-link ${extraClass} ${activeLink === link.href ? 'active' : ''}`.trim()}
      onClick={(e) => {
        e.preventDefault()
        scrollToSection(link.href)
      }}
    >
      {link.label}
    </a>
  )

  const renderContactLink = (extraClass = '') => (
    <a
      key="contact-us"
      href="#contact-us"
      className={`nav-link btn-contact-nav ${extraClass}`.trim()}
      onClick={(e) => {
        e.preventDefault()
        scrollToSection('contact-us')
      }}
    >
      Contact Us <i className="fas fa-arrow-right ms-1" style={{ fontSize: '0.75rem' }}></i>
    </a>
  )

  return (
    <nav className={`navbar-custom ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          {/* Logo */}
          <div className="nav-logo">
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home') }}>
              <img src="https://media.raihsuite.com/RS0015/web/retal-logo.avif" alt="Retal International Ltd." />
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="d-none d-lg-flex align-items-center gap-1">
            {navLinks.map((link) => renderLink(link))}
            {renderContactLink('ms-3')}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="navbar-toggler-custom d-lg-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="nav-collapse d-lg-none">
            {navLinks.map((link) => renderLink(link, 'd-block'))}
            {renderContactLink('d-inline-block mt-2')}
          </div>
        )}
      </div>
    </nav>
  )
}