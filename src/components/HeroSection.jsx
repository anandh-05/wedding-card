export default function HeroSection({ hero }) {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative isolate min-h-screen overflow-hidden">
      <img
        src={hero.backgroundImage}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-45"
      />
      <div aria-hidden="true" className="hero-overlay absolute inset-0" />
      <div aria-hidden="true" className="hero-grain absolute inset-0" />
      <div className="absolute left-[-8rem] top-24 h-72 w-72 rounded-full bg-gold-500/12 blur-3xl" />
      <div className="absolute bottom-12 right-[-6rem] h-80 w-80 rounded-full bg-cream-200/8 blur-3xl" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-5 pb-14 pt-28 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:gap-10 lg:pb-20">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full border border-gold-400/30 bg-black/25 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.42em] text-gold-200/85 backdrop-blur-md">
            {hero.familyLine}
          </span>

          <p className="mt-7 text-sm uppercase tracking-[0.45em] text-ivory/65 sm:text-base">
            {hero.kicker}
          </p>

          <h1 className="mt-6 font-heading text-6xl leading-[0.92] text-ivory sm:text-7xl lg:text-[7.75rem]">
            <span className="block">{hero.bride}</span>
            <span className="mt-3 block text-gold-300/95">&amp;</span>
            <span className="block">{hero.groom}</span>
          </h1>

          <div className="mt-7 flex flex-wrap items-center gap-3 text-sm uppercase tracking-[0.34em] text-ivory/72 sm:text-base">
            <span>{hero.dateLabel}</span>
            <span className="text-gold-400">•</span>
            <span>{hero.city}</span>
          </div>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-ivory/78 sm:text-xl">
            {hero.tagline}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button
              type="button"
              onClick={() => scrollToSection('invitation')}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-cream-200 px-8 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#261a0a] shadow-[0_20px_50px_rgba(216,178,108,0.35)] transition hover:-translate-y-0.5"
            >
              Open Invitation
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('venue')}
              className="inline-flex items-center justify-center rounded-full border border-gold-400/30 bg-black/25 px-8 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-ivory backdrop-blur-sm transition hover:border-gold-300/60 hover:bg-black/35"
            >
              View Venue
            </button>
          </div>
        </div>

        <div className="mt-12 w-full max-w-md lg:mt-0">
          <div className="luxury-card p-7 sm:p-8">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.42em] text-gold-300/75">
              Wedding Day
            </p>
            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.32em] text-ivory/45">
                  Main Ceremony
                </p>
                <p className="font-heading text-3xl text-ivory">{hero.ceremonyTime}</p>
                <p className="text-sm leading-7 text-ivory/70">{hero.ceremonyVenue}</p>
              </div>
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.32em] text-ivory/45">
                  Destination
                </p>
                <p className="font-heading text-3xl text-ivory">{hero.city}</p>
                <p className="text-sm leading-7 text-ivory/70">
                  A heartfelt celebration awaits
                </p>
              </div>
            </div>
            <div className="mt-8 h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent" />
            <p className="mt-8 text-base leading-8 text-ivory/74">{hero.weekendNote}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
