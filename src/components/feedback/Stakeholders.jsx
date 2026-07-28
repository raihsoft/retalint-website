const stakeholders = [
  {
    logo: '/img/clients-logos/stake-holders/arrab-logo.png',
    name: 'Arrab National Group',
    desc: 'The largest distributor of mobile communications service providers\' products and services',
    url: 'https://arrabtelecom.com.sa/',
    urlLabel: 'www.arrabtelecom.com.sa',
  },
  {
    logo: '/img/clients-logos/stake-holders/raihsoft.png',
    name: 'Raihsoft Technologies',
    desc: 'A team of seasoned developers dedicated to crafting exceptional software, websites, and mobile applications tailored to your needs.',
    url: 'https://raihsoft.com/',
    urlLabel: 'www.raihsoft.com',
  },
]

export default function Stakeholders() {
  return (
    <section id="clients" className="stakeholders-section">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-12 text-center">
            <span className="section-divider center"></span>
            <h3 className="section-title">Our Stakeholders</h3>
          </div>
        </div>

        <div className="row g-4 justify-content-center">
          {stakeholders.map((s) => (
            <div key={s.name} className="col-12 col-md-6">
              <div className="stakeholder-card">
                <div className="stakeholder-logo">
                  <img src={s.logo} alt={s.name} />
                </div>
                <div className="stakeholder-info">
                  <p>{s.desc}</p>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="read-more-link"
                  >
                    See More <i className="fas fa-angle-right ms-1"></i>{' '}
                    <span style={{ color: '#999', fontWeight: 400, fontSize: '0.8rem' }}>
                      {s.urlLabel}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
