import { useState, useEffect } from 'react'

import Navbar from './Navbar'
import Hero from './Hero'
import About from '../About'
import VisionMission from './VisionMission'
import Services from './Services'
import Products from './Products'
import MakingDifference from './MakingDifference'
import Stats from './Stats'
import Stakeholders from './Stakeholders'
import Contact from '../Contact'
import Footer from './Footer'

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
