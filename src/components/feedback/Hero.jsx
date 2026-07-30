export default function Hero() {
  const scrollToAbout = (e) => {
    e.preventDefault()
    const el = document.getElementById('about-us')
    if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero-section">
      {/* Particle dots overlay */}
      <div className="particle-dots" aria-hidden="true"></div>

      {/* Decorative shapes */}
      <div className="hero-shape hero-shape-1" aria-hidden="true"></div>
      <div className="hero-shape hero-shape-2" aria-hidden="true"></div>
      <div className="hero-shape hero-shape-3" aria-hidden="true"></div>

      <div className="container hero-content">
        <div className="row">
          <div className="col-12 col-lg-7">
            <span className="hero-label">Unique solutions for your unlimited dreams</span>
            <h1 className="hero-title">
              A Vision for a<br />
              <span>Promising Future</span>
            </h1>
            <a
              href="#about-us"
              className="hero-scroll-btn"
              onClick={scrollToAbout}
              aria-label="Scroll to About Us"
            >
              <i className="fas fa-arrow-down"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
