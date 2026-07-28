const services = [
  {
    icon: '/img/icons/information.svg',
    title: 'Information',
    desc: 'Deeply involved with research and development.',
  },
  {
    icon: '/img/icons/communication.svg',
    title: 'Communication',
    desc: 'Serving innovative ideas for the communication systems.',
  },
  {
    icon: '/img/icons/technology.svg',
    title: 'Technology',
    desc: 'Creative technological solutions including Fin-tech.',
  },
]

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="container">
        {/* Section Header */}
        <div className="row justify-content-center mb-5">
          <div className="col-12 col-lg-8 text-center">
            <span className="section-divider center"></span>
            <span className="section-label">What We Serve</span>
            <h2 className="section-title">Creative &amp; Innovative Solutions In</h2>
          </div>
        </div>

        {/* Cards */}
        <div className="row g-4">
          {services.map((service) => (
            <div key={service.title} className="col-12 col-md-4">
              <div className="service-card">
                <img src={service.icon} alt={service.title} />
                <h4 style={{ fontWeight: 700, color: '#1a1a2e', marginBottom: 10 }}>{service.title}</h4>
                <p style={{ color: '#555', fontSize: '0.95rem' }}>{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
