import { useEffect, useState } from 'react'
import CountdownSection from './components/CountdownSection'
import FloatingPetals from './components/FloatingPetals'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import InvitationMessage from './components/InvitationMessage'
import LoveStorySection from './components/LoveStorySection'
import Loader from './components/Loader'
import MusicToggle from './components/MusicToggle'
import ScrollProgress from './components/ScrollProgress'
import VenueSection from './components/VenueSection'
import { weddingData } from './data/weddingData'

function App() {
  const [showLoader, setShowLoader] = useState(true)
  const [loaderVisible, setLoaderVisible] = useState(true)

  useEffect(() => {
    const fadeTimer = window.setTimeout(() => {
      setLoaderVisible(false)
    }, 1600)

    const removeTimer = window.setTimeout(() => {
      setShowLoader(false)
    }, 2300)

    return () => {
      window.clearTimeout(fadeTimer)
      window.clearTimeout(removeTimer)
    }
  }, [])

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-midnight text-ivory">
      <div aria-hidden="true" className="site-backdrop" />
      <FloatingPetals />
      <ScrollProgress />
      <MusicToggle label={weddingData.musicLabel} />
      {showLoader ? <Loader isVisible={loaderVisible} /> : null}

      <HeroSection hero={weddingData.hero} />

      <main className="relative z-10">
        <InvitationMessage invitation={weddingData.invitation} />
        <LoveStorySection />
        <CountdownSection
          names={weddingData.hero.shortNames}
          targetDate={weddingData.countdownTarget}
        />
        <VenueSection venue={weddingData.venue} />
      </main>

      <Footer footer={weddingData.footer} />
    </div>
  )
}

export default App
