import RevealSection from './RevealSection'
import SectionHeading from './SectionHeading'

export default function VenueSection({ venue }) {
  return (
    <section
      id="venue"
      className="relative mx-auto max-w-6xl px-4 py-16 sm:px-8 sm:py-24 lg:py-30"
    >
      <RevealSection icon>
        <SectionHeading
          eyebrow={venue.eyebrow}
          title={venue.title}
          subtitle={venue.subtitle}
          align="left"
        />
      </RevealSection>

      <div className="mt-10 grid gap-6 sm:mt-16 lg:grid-cols-[1.2fr_0.8fr]">
        <RevealSection className="overflow-hidden rounded-[1.25rem] border border-gold-400/25 bg-white/45 shadow-[0_28px_80px_rgba(95,64,19,0.14)]">
          <iframe
            title={venue.name}
            src={venue.mapEmbed}
            className="h-[20rem] w-full border-0 sepia-[0.15] saturate-[0.85] sm:h-[24rem]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </RevealSection>

        <RevealSection delay={80} className="luxury-card p-5 sm:p-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-gold-500/85 sm:text-[0.7rem] sm:tracking-[0.42em]">
            Venue Details
          </p>
          <h3 className="mt-4 font-heading text-3xl leading-tight text-ivory sm:text-4xl">{venue.name}</h3>
          <p className="mt-4 text-base leading-7 text-ivory/74 sm:leading-8">{venue.address}</p>

          <div className="mt-6 rounded-[1.25rem] border border-gold-400/20 bg-white/45 p-4 sm:mt-8 sm:p-5">
            <p className="text-[0.65rem] uppercase tracking-[0.24em] text-ivory/55 sm:text-xs sm:tracking-[0.34em]">
              Guest Notes
            </p>
            <div className="mt-4 space-y-4">
              {venue.notes.map((note) => (
                <p key={note} className="text-sm leading-7 text-ivory/72">
                  {note}
                </p>
              ))}
            </div>
          </div>

          <a
            href={venue.mapLink}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-200 px-6 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#261a0a] shadow-[0_18px_45px_rgba(157,109,19,0.2)] transition hover:-translate-y-0.5 sm:mt-8 sm:w-auto sm:px-8 sm:tracking-[0.3em]"
          >
            Navigate to Venue
          </a>
        </RevealSection>
      </div>
    </section>
  )
}
