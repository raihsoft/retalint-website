const cards = [
  {
    title: 'Identifying Opportunities',
    text: 'Our B2B team helps our partners realize the value of the industry they represent and helps them identify opportunities to grow, change and drive value.',
  },
  {
    title: 'Generating Revenues',
    text: 'We enable our partners to do great things by generating new revenue streams that they reinvest back into their business to meet core goals.',
  },
  {
    title: 'Enabling Change',
    text: 'Our work is often a catalyst for change. We work with clients to run programs that enable them to engage, grow and change.',
  },
]

export default function MakingDifference() {
  return (
    <section id="services1" className="making-diff-section">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left Text */}
          <div className="col-12 col-lg-6">
            <span className="section-divider"></span>
            <h3 className="section-title mb-4">Making the Difference</h3>
            <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.9' }}>
              This is our dedicated team who work day-in and day-out together to bring our clients
              the most amazing projects for a digitally connected world.
            </p>
          </div>

          {/* Right Cards */}
          <div className="col-12 col-lg-6">
            {cards.map((card) => (
              <div key={card.title} className="diff-card">
                <h4>{card.title}</h4>
                <p style={{ color: '#666', margin: 0, fontSize: '0.95rem', lineHeight: '1.7' }}>
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
