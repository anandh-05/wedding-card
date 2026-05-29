import RevealSection from './RevealSection'

export default function Footer({ footer }) {
  return (
    <footer className="relative border-t border-gold-500/18 bg-[#f0dfbd]/45 px-4 pb-10 pt-12 sm:px-8 sm:pb-16 sm:pt-16">
      <RevealSection icon className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-gold-500/85 sm:text-xs sm:tracking-[0.42em]">
            With Gratitude
          </p>
          <h2 className="mt-4 font-heading text-3xl leading-tight text-ivory sm:text-5xl">
            {footer.thankYou}
          </h2>
          <p className="mt-5 text-base leading-7 text-ivory/72 sm:mt-6 sm:leading-8">{footer.families}</p>
        </div>
      </RevealSection>
    </footer>
  )
}
