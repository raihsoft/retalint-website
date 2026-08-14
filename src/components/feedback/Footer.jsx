const quickLinks = [
  { label: 'About Us', href: 'about-us' },
  { label: 'Services', href: 'services' },
  { label: 'Vision & Mission', href: 'vision_mission' },
  { label: 'Contact Us', href: 'contact-us' },
]

const serviceLinks = [
  { label: 'Information', href: 'services' },
  { label: 'Communication', href: 'services' },
  { label: 'Technology', href: 'services' },
]

export default function Footer() {
  const scrollTo = (e, id) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <footer id="footer" className="footer-section">
      <div className="container">
        <div className="row g-5">
          {/* Logo & Description */}
          <div className="col-12 col-lg-4">
            <div className="footer-logo">
              <a href="#home" onClick={(e) => scrollTo(e, 'home')}>
                <img src="https://media.raihsuite.com/RS0015/web/retal-logo.avif" alt="Retal International Ltd." />
              </a>
            </div>
            <p className="footer-desc">
              A privately-owned company established in 2014<br />
              headquartered in Riyadh, Saudi Arabia.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-6 col-lg-2">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={`#${link.href}`} onClick={(e) => scrollTo(e, link.href)}>
                    <i className="fas fa-angle-right" style={{ fontSize: '0.75rem', color: '#c8a951' }}></i>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="col-6 col-lg-2">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a href={`#${link.href}`} onClick={(e) => scrollTo(e, link.href)}>
                    <i className="fas fa-angle-right" style={{ fontSize: '0.75rem', color: '#c8a951' }}></i>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-12 col-lg-3">
            <h4 className="footer-heading">Contact Us</h4>
            <div className="footer-contact-item">
              <i className="fas fa-envelope"></i>
              <a href="mailto:info@retalint.com">info@retalint.com</a>
            </div>
            <div className="footer-contact-item">
              <i className="fas fa-phone-alt"></i>
              <div>
                <a href="tel:+966112153737" style={{ display: 'block' }}>+966 11 2153737</a>
                <a href="tel:+966112152600">+966 11 2152600</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
<footer>
  <p>
    © 2026 Paneurostones LLP. All Rights Reserved. Designed & Developed by{" "}
    <a
      href="https://raihsoft.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="raihsoft-link"
    >
      Raihsoft
    </a>
    .
  </p>
</footer>
        </div>
      </div>
    </footer>
  )
}
