export default function About() {
  return (
    <section id="about-us" className="about-section">
      <div className="container">
        {/* Section Header */}
        <div className="row justify-content-center mb-5">
          <div className="col-12 col-lg-8 text-center">
            <span className="section-divider center"></span>
            <span className="section-label">About Us</span>
            <h2 className="section-title">
              We are committed to provide the best<br />
              Information, Communication &amp; Technology solutions
            </h2>
          </div>
        </div>

        <div className="row align-items-center g-5">
          {/* Image */}
          <div className="col-12 col-lg-6">
            <div className="about-image-wrapper text-center">
              <img
                src="/img/about-retalinternational.jpg"
                alt="About Retal International"
                className="img-fluid"
              />
              <div className="about-dot-pattern" aria-hidden="true"></div>
            </div>
          </div>

          {/* Text */}
          <div className="col-12 col-lg-6">
            <p className="fw-medium" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#333' }}>
              Retal Telecom and Information Technology is a privately-owned company established in 2014
              headquartered in Riyadh, Saudi Arabia.
            </p>
            <p style={{ color: '#555', lineHeight: '1.8' }}>
              We are the leading Information, Communication &amp; Technology (ICT) business entity with
              solid experience in the ICT sector. We are a well-established company with over 500 million
              SAR annual turnover and regional offices covering all Saudi Arabia. Our great team consists
              of over 150 highly professional and experienced employees in sales, marketing, IT, and
              warehousing supported with our state of art, stock management and fulfillment system to
              cover the rapid demand of all channels in real time.
            </p>

            <ul className="about-list mt-4">
              <li><i className="fas fa-bullseye"></i> Information</li>
              <li><i className="fas fa-bullseye"></i> Communication</li>
              <li><i className="fas fa-bullseye"></i> Technology</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
