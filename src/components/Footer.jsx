import RevealSection from './RevealSection'

export default function Footer({ footer, contacts }) {
  return (
    <footer className="relative border-t border-gold-400/12 px-5 pb-12 pt-16 sm:px-8 sm:pb-16">
      <RevealSection className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.42em] text-gold-300/78">
              With Gratitude
            </p>
            <h2 className="mt-4 font-heading text-4xl text-ivory sm:text-5xl">
              {footer.thankYou}
            </h2>
            <p className="mt-6 text-base leading-8 text-ivory/72">{footer.families}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {contacts.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-[1.25rem] border border-gold-400/16 bg-white/5 px-5 py-4 text-sm text-ivory/74 transition hover:border-gold-300/45"
              >
                <span className="block uppercase tracking-[0.28em] text-ivory/42">
                  {item.label}
                </span>
                <span className="mt-2 block font-medium text-ivory">{item.value}</span>
              </a>
            ))}
            {footer.socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                className="rounded-[1.25rem] border border-gold-400/16 bg-white/5 px-5 py-4 text-sm text-ivory/74 transition hover:border-gold-300/45"
              >
                <span className="block uppercase tracking-[0.28em] text-ivory/42">
                  {item.label}
                </span>
                <span className="mt-2 block font-medium text-ivory">{item.value}</span>
              </a>
            ))}
          </div>
        </div>
      </RevealSection>
    </footer>
  )
}
