const items = [
  {
    icon: 'https://media.raihsuite.com/RS0015/web/icons/vision.png',
    title: 'Vision',
    text: "Our vision is to be the leading provider of ICT services in the region, serving an essential role in achieving the Crown Prince's Vision 2030.",
  },
  {
    icon: 'https://media.raihsuite.com/RS0015/web/icons/mission.png',
    title: 'Mission',
    text: "Our mission is to provide the highest quality ICT services, maintaining the trust of our partners and customers, and sustaining growth in the region through advancing and expanding its ICT market.",
  },
]

export default function VisionMission() {
  return (
    <section id="vision_mission" className="vision-mission-section">
      <div className="container">
        <div className="row g-4 justify-content-center">
          {items.map((item) => (
            <div key={item.title} className="col-12 col-lg-5">
              <div className="vm-card">
                <div className="vm-icon-wrapper">
                  <img src={item.icon} alt={item.title} />
                </div>
                <h3 style={{ fontWeight: 700, color: '#1a1a2e', marginBottom: 12 }}>{item.title}</h3>
                <p style={{ color: '#555', lineHeight: 1.8 }}>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
