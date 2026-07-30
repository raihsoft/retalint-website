const products = [
  {
    id: 'ezhal',
    name: 'Ezhal',
    desc: 'A platform that helps our customers to get the best services through the use of an easy application that meets their immediate needs.',
    url: 'https://ezhal.com/',
    image: 'https://media.raihsuite.com/RS0015/web/ezhal-retalint.jpg',
    reverse: false,
  },
  {
    id: 'tarmeez',
    name: 'Tarmeez',
    desc: 'Helping the economy by creating a new innovative financing channel that connects both SMEs and investors together through the issuance of Sukuk.',
    url: 'https://tarmeez.co/',
    image: 'https://media.raihsuite.com/RS0015/web/tarmeez-retalint.jpg',
    reverse: true,
  },
]

export default function Products() {
  return (
    <section id="products" className="products-section">
      <div className="container">
        {/* Section Header */}
        <div className="row justify-content-center mb-5">
          <div className="col-12 col-lg-8 text-center">
            <span className="section-divider center"></span>
            <span className="section-label">Our Products</span>
            <h2 className="section-title">
              Popular Products from our<br />in-house development
            </h2>
          </div>
        </div>

        {/* Products */}
        {products.map((product) => (
          <div key={product.id} className={`product-item ${product.reverse ? 'reverse' : ''}`}>
            <div className="product-text">
              <h4>{product.name}</h4>
              <p>{product.desc}</p>
              <a
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="read-more-link"
              >
                Read More <i className="fas fa-angle-right"></i>
              </a>
            </div>
            <div className="product-image-wrapper">
              <div className="bg-bar" aria-hidden="true"></div>
              <img src={product.image} alt={product.name} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
