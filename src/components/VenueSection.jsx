import RevealSection from './RevealSection'
import SectionHeading from './SectionHeading'

export default function VenueSection({ venue }) {
  return (
    <section
      id="venue"
      className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-30"
    >
      <RevealSection>
        <SectionHeading
          eyebrow={venue.eyebrow}
          title={venue.title}
          subtitle={venue.subtitle}
          align="left"
        />
      </RevealSection>

      <div className="mt-16 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <RevealSection className="overflow-hidden rounded-[2rem] border border-gold-400/18 bg-black/28 shadow-[0_28px_80px_rgba(0,0,0,0.3)]">
          <iframe
            title={venue.name}
            src={venue.mapEmbed}
            className="min-h-[24rem] w-full border-0 grayscale-[0.1] sepia-[0.2]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </RevealSection>

        <RevealSection delay={80} className="luxury-card p-6 sm:p-8">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.42em] text-gold-300/78">
            Venue Details
          </p>
          <h3 className="mt-4 font-heading text-4xl text-ivory">{venue.name}</h3>
          <p className="mt-4 text-base leading-8 text-ivory/74">{venue.address}</p>

          <div className="mt-8 rounded-[1.5rem] border border-gold-400/16 bg-white/5 p-5">
            <p className="text-xs uppercase tracking-[0.34em] text-ivory/45">
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

          <div className="mt-8 space-y-4">
            {venue.contact.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center justify-between gap-4 rounded-[1.25rem] border border-gold-400/14 bg-black/20 px-5 py-4 text-sm text-ivory/78 transition hover:border-gold-300/45"
              >
                <span className="uppercase tracking-[0.28em] text-ivory/45">
                  {item.label}
                </span>
                <span className="font-medium text-ivory">{item.value}</span>
              </a>
            ))}
          </div>

          <a
            href={venue.mapLink}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-cream-200 px-8 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#261a0a] shadow-[0_18px_45px_rgba(216,178,108,0.28)] transition hover:-translate-y-0.5"
          >
            Navigate to Venue
          </a>
        </RevealSection>
      </div>
    </section>
  )
}
