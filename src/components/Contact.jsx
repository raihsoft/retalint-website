export default function Contact() {
  return (
    <section id="contact-us" className="contact-section">
      <div className="container contact-inner">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 text-center text-white">
            {/* Phone badge */}
            <div className="d-inline-block mb-4">
              <div className="contact-phone-badge">
                <i className="fas fa-phone-alt"></i>
                <div>
                  <span className="label">Call Us Now</span>
                  <a href="tel:+966112153737">+966 11 2153737, +966 11 2152600</a>
                </div>
              </div>
            </div>

            {/* Heading */}
            <h2
              style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                fontWeight: 800,
                color: '#fff',
                lineHeight: 1.3,
                marginBottom: 0,
              }}
            >
              Speak to one of our specialist advisers.
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}
