import { useState } from 'react'
import loveStoryImage from '../assets/images/LoveStory.png'
import RevealSection from './RevealSection'

export default function LoveStorySection() {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <section className="relative mx-auto max-w-5xl px-4 py-16 sm:px-8 sm:py-24">
      <RevealSection icon className="flex flex-col items-center">
        <button
          type="button"
          aria-expanded={isVisible}
          aria-controls="love-story-image"
          onClick={() => setIsVisible((current) => !current)}
          className="inline-flex min-h-12 items-center justify-center rounded-full border border-gold-500/35 bg-gold-500 px-8 py-3 text-sm font-bold uppercase tracking-[0.22em] text-white shadow-[0_18px_45px_rgba(157,109,19,0.24)] transition duration-300 hover:-translate-y-0.5 hover:bg-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2 focus:ring-offset-midnight sm:text-base"
        >
          Our Story
        </button>

        <div
          id="love-story-image"
          aria-hidden={!isVisible}
          className={`grid w-full transition-[grid-template-rows,opacity,transform,margin] duration-700 ease-out ${
            isVisible
              ? 'mt-10 grid-rows-[1fr] translate-y-0 opacity-100'
              : 'mt-0 grid-rows-[0fr] -translate-y-3 opacity-0'
          }`}
        >
          <div className="min-h-0 overflow-hidden">
            <img
              src={loveStoryImage}
              alt="Love story"
              className="love-story-image block h-auto w-full rounded-2xl border border-gold-500/25 bg-white/55 shadow-[0_24px_70px_rgba(95,64,19,0.14)]"
              loading="lazy"
            />
          </div>
        </div>
      </RevealSection>
    </section>
  )
}
