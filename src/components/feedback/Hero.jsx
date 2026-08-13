export default function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about-us");

    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

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
            <span className="hero-label">
              Unique solutions for your unlimited dreams
            </span>

            <h1 className="hero-title">
              A Vision for a <span>Promising Future</span>
            </h1>

            <button
              type="button"
              className="hero-scroll-btn"
              onClick={scrollToAbout}
              aria-label="Scroll to About Us"
            >
              <i className="fas fa-arrow-down"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}