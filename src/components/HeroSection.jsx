export default function HeroSection({ hero }) {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden">
      <img
        src={hero.backgroundImage}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-multiply"
      />
      <div aria-hidden="true" className="hero-overlay absolute inset-0" />
      <div aria-hidden="true" className="hero-grain absolute inset-0" />
      <div aria-hidden="true" className="pookalam absolute -left-20 top-24 h-44 w-44 opacity-20 sm:h-72 sm:w-72 sm:opacity-30" />
      <div aria-hidden="true" className="pookalam absolute -right-24 bottom-24 h-48 w-48 rotate-45 opacity-15 sm:bottom-10 sm:h-80 sm:w-80 sm:opacity-20" />
      <div className="absolute inset-x-0 top-0 h-3 bg-gradient-to-r from-gold-500 via-gold-300 to-gold-500" />
      <div className="absolute inset-x-0 top-5 h-px bg-gold-500/35" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-4 pb-10 pt-24 sm:px-8 sm:pb-14 sm:pt-28 lg:flex-row lg:items-end lg:justify-between lg:gap-10 lg:pb-20">
        <div className="mobile-safe-copy max-w-3xl">
          <span className="inline-flex max-w-full rounded-full border border-gold-400/35 bg-white/55 px-3 py-2 text-[0.6rem] font-semibold uppercase tracking-[0.24em] text-gold-500 shadow-[0_14px_35px_rgba(95,64,19,0.08)] backdrop-blur-md sm:px-4 sm:text-[0.65rem] sm:tracking-[0.42em]">
            {hero.familyLine}
          </span>

          <p className="mt-5 text-xs uppercase tracking-[0.24em] text-ivory/70 sm:mt-7 sm:text-base sm:tracking-[0.45em]">
            {hero.kicker}
          </p>

          <h1 className="mt-5 text-center font-heading text-[clamp(3.25rem,17vw,5.25rem)] leading-[0.94] text-ivory drop-shadow-[0_10px_22px_rgba(95,64,19,0.12)] sm:mt-6 sm:text-7xl lg:text-[7.75rem]">
            <span className="block">{hero.bride}</span>
            <span className="mt-2 block text-gold-500 sm:mt-3">&amp;</span>
            <span className="block">{hero.groom}</span>
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs uppercase tracking-[0.2em] text-ivory/72 sm:mt-7 sm:text-base sm:tracking-[0.34em]">
            <span>{hero.dateLabel}</span>
            <span className="text-gold-500">&bull;</span>
            <span>{hero.city}</span>
          </div>

          <p className="mt-6 max-w-2xl text-base leading-7 text-ivory/78 sm:mt-8 sm:text-xl sm:leading-8">
            {hero.tagline}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
            <button
              type="button"
              onClick={() => scrollToSection('venue')}
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-gold-400/35 bg-white/55 px-6 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-ivory shadow-[0_14px_35px_rgba(95,64,19,0.08)] backdrop-blur-sm transition hover:border-gold-500/60 hover:bg-white/75 sm:w-auto sm:px-8 sm:tracking-[0.3em]"
            >
              View Venue
            </button>
          </div>
        </div>

        <div className="mt-10 w-full max-w-md lg:mt-0">
          <div className="luxury-card motif-corners p-5 sm:p-8">
            <div aria-hidden="true" className="temple-lamp mx-auto mb-6 h-10 w-16 border-b border-gold-500/35 sm:mb-7" />
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-gold-500/85 sm:text-[0.7rem] sm:tracking-[0.42em]">
              Wedding Day
            </p>
            <div className="mt-6 grid gap-5 sm:mt-7 sm:grid-cols-2">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.32em] text-ivory/55">
                  Muhurtham
                </p>
                <p className="font-heading text-3xl text-ivory">{hero.ceremonyTime}</p>
              </div>
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.32em] text-ivory/55">
                  Destination
                </p>
                <p className="font-heading text-3xl text-ivory">{hero.ceremonyVenue}</p>
                <p className="text-sm leading-7 text-ivory/70">
                  {hero.city}
                </p>
              </div>
            </div>
            <div className="mt-8 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
            <p className="mt-6 text-base leading-7 text-ivory/74 sm:mt-8 sm:leading-8">{hero.weekendNote}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
