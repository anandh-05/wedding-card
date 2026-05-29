import RevealSection from './RevealSection'
import SectionHeading from './SectionHeading'

export default function InvitationMessage({ invitation }) {
  return (
    <RevealSection
      id="invitation"
      icon
      className="relative mx-auto max-w-6xl px-4 py-16 sm:px-8 sm:py-24 lg:py-30"
    >
      <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/45 to-transparent" />
      <SectionHeading
        eyebrow={invitation.eyebrow}
        title={invitation.title}
        subtitle={invitation.subtitle}
      />

      <div className="kasavu-panel motif-corners relative mt-10 rounded-[1.25rem] px-5 py-8 sm:mt-16 sm:px-10 sm:py-14 lg:px-16">
        <div aria-hidden="true" className="pookalam absolute -left-12 top-8 h-24 w-24 opacity-20 sm:-left-14 sm:top-6 sm:h-36 sm:w-36 sm:opacity-25" />
        <div aria-hidden="true" className="pookalam absolute -bottom-10 right-0 h-28 w-28 rotate-12 opacity-15 sm:-bottom-16 sm:h-44 sm:w-44 sm:opacity-20" />
        <div className="relative mx-auto max-w-3xl text-center">
          <span className="font-heading text-6xl leading-none text-gold-500/55 sm:text-8xl">
            &ldquo;
          </span>
          <div className="space-y-5 text-base leading-7 text-ivory/78 sm:space-y-7 sm:text-lg sm:leading-8">
            {invitation.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mx-auto mt-8 h-px w-28 bg-gradient-to-r from-transparent via-gold-500/55 to-transparent sm:mt-10 sm:w-32" />
          <p className="mt-6 font-heading text-2xl leading-tight text-gold-500 sm:mt-8 sm:text-4xl">
            {invitation.signature}
          </p>
        </div>
      </div>
    </RevealSection>
  )
}
