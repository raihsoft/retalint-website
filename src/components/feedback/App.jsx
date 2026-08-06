'use client';

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
    const getScrollTop = () => {
      const scrollingElement = document.scrollingElement || document.documentElement || document.body
      return window.scrollY || scrollingElement?.scrollTop || document.body.scrollTop || 0
    }

    const handleScroll = () => setVisible(getScrollTop() > 0)
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('wheel', handleScroll, { passive: true })
    window.addEventListener('touchmove', handleScroll, { passive: true })
    handleScroll()
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('wheel', handleScroll)
      window.removeEventListener('touchmove', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    if (typeof window === 'undefined') return

    const scrollingElement = document.scrollingElement || document.documentElement || document.body
    const targets = [scrollingElement, document.documentElement, document.body]

    targets.forEach((target) => {
      if (target && typeof target.scrollTo === 'function') {
        target.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
      }
      if (target) {
        target.scrollTop = 0
        target.scrollLeft = 0
      }
    })

    const topSection = document.getElementById('home')
    if (topSection && typeof topSection.scrollIntoView === 'function') {
      topSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <button
      type="button"
      className={`scroll-top-btn ${visible ? 'visible' : ''}`}
      onClick={scrollToTop}
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
