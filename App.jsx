import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import VisionMission from './components/VisionMission'
import Services from './components/Services'
import Products from './components/Products'
import MakingDifference from './components/MakingDifference'
import Stats from './components/Stats'
import Stakeholders from './components/Stakeholders'
import Contact from './components/Contact'
import Footer from './components/Footer'

function ScrollTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <button
      className={`scroll-top-btn ${visible ? 'visible' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
    >
      <i className="fas fa-arrow-up"></i>
    </button>
  )
}

export default function App() {
  return (
    <div className="body">
      <Navbar />
      <Hero />
      <About />
      <VisionMission />
      <Services />
      <Products />
      <MakingDifference />
      <Stats />
      <Stakeholders />
      <Contact />
      <Footer />
      <ScrollTopButton />
    </div>
  )
}
