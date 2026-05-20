import { useEffect, useRef, useState } from 'react'
import ambientTrack from '../assets/music/ambient-bells.wav'

export default function MusicToggle({ label }) {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.28
    }
  }, [])

  const handleToggle = async () => {
    if (!audioRef.current) {
      return
    }

    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
      return
    }

    try {
      await audioRef.current.play()
      setIsPlaying(true)
    } catch {
      setIsPlaying(false)
    }
  }

  return (
    <>
      <audio ref={audioRef} src={ambientTrack} loop preload="auto" />
      <button
        type="button"
        onClick={handleToggle}
        className="fixed right-5 top-6 z-40 inline-flex items-center gap-3 rounded-full border border-gold-400/30 bg-black/35 px-4 py-3 text-left text-sm text-ivory shadow-[0_14px_40px_rgba(0,0,0,0.3)] backdrop-blur-md transition hover:-translate-y-0.5 hover:border-gold-300/55 sm:right-8 sm:top-8"
        aria-label={isPlaying ? 'Pause background music' : 'Play background music'}
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-500/16 text-gold-200">
          {isPlaying ? (
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
              <path d="M8 6h3v12H8zm5 0h3v12h-3z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
              <path d="M8 5.14v13.72a1 1 0 0 0 1.54.84l10.2-6.86a1 1 0 0 0 0-1.68L9.54 4.3A1 1 0 0 0 8 5.14z" />
            </svg>
          )}
        </span>
        <span className="hidden sm:block">
          <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-gold-300/75">
            Music
          </span>
          <span className="block font-medium text-ivory">
            {isPlaying ? `Pause ${label}` : `Play ${label}`}
          </span>
        </span>
      </button>
    </>
  )
}
