'use client'

import {useState} from 'react'

export function MotionToggle() {
  const [paused, setPaused] = useState(false)

  function toggleMotion() {
    const nextPaused = !paused
    document.documentElement.classList.toggle('motion-paused', nextPaused)
    setPaused(nextPaused)
  }

  return (
    <button
      className="motion-toggle"
      type="button"
      aria-pressed={paused}
      onClick={toggleMotion}
    >
      {paused ? 'RESUME MOTION ▶' : 'PAUSE MOTION Ⅱ'}
    </button>
  )
}
