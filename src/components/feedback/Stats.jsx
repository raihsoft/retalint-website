'use client';

import { useState, useEffect, useRef } from 'react'

const stats = [
  { value: 18745270, suffix: '+', label: 'Satisfied Customers' },
  { value: 4500, suffix: '+', label: 'Connected Clients' },
  { value: 150, suffix: '+', label: 'Staffs' },
]

function useCountUp(target, duration = 2000, started = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!started) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, started])

  return count
}

function StatItem({ value, suffix, label, started }) {
  const count = useCountUp(value, 2000, started)

  const formatted = count >= 1000000
    ? (count / 1000000).toFixed(1) + 'M'
    : count >= 1000
    ? (count / 1000).toFixed(1) + 'K'
    : count

  return (
    <div className="col-12 col-lg-4 mb-4 mb-lg-0">
      <div className="stat-item">
        <span className="stat-number">{formatted}{suffix}</span>
        <span className="stat-label">{label}</span>
      </div>
    </div>
  )
}

export default function Stats() {
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="stats-section" ref={ref}>
      <div className="container">
        {/* Header */}
        <div className="row justify-content-center mb-5">
          <div className="col-12 text-center">
            <span className="section-divider center" style={{ backgroundColor: '#c8a951' }}></span>
            <span className="section-label" style={{ color: 'rgba(255,255,255,0.5)' }}>Company Stats</span>
            <h2 className="section-title light">We in numbers</h2>
          </div>
        </div>

        {/* Counters */}
        <div className="row">
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} started={started} />
          ))}
        </div>
      </div>
    </section>
  )
}
