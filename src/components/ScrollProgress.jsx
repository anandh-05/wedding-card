import { useEffect, useEffectEvent, useState } from 'react'

function getScrollProgress() {
  if (typeof window === 'undefined') {
    return 0
  }

  const scrollTop = window.scrollY
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight

  if (scrollHeight <= 0) {
    return 0
  }

  return Math.min((scrollTop / scrollHeight) * 100, 100)
}

export default function ScrollProgress() {
  const [progress, setProgress] = useState(() => getScrollProgress())

  const updateProgress = useEffectEvent(() => {
    setProgress(getScrollProgress())
  })

  useEffect(() => {
    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)

    return () => {
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-40 h-1 bg-gold-500/10">
      <div
        className="h-full bg-gradient-to-r from-gold-500 via-gold-300 to-gold-500 shadow-[0_0_18px_rgba(157,109,19,0.38)] transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
