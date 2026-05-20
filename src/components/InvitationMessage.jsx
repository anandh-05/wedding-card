import RevealSection from './RevealSection'
import SectionHeading from './SectionHeading'

export default function InvitationMessage({ invitation }) {
  return (
    <RevealSection
      id="invitation"
      className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-30"
    >
      <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/45 to-transparent" />
      <SectionHeading
        eyebrow={invitation.eyebrow}
        title={invitation.title}
        subtitle={invitation.subtitle}
      />

      <div className="relative mt-16 overflow-hidden rounded-[2rem] border border-gold-400/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] px-6 py-10 shadow-[0_28px_80px_rgba(0,0,0,0.3)] backdrop-blur-md sm:px-10 sm:py-14 lg:px-16">
        <div className="absolute -left-10 top-0 h-32 w-32 rounded-full bg-gold-400/12 blur-3xl" />
        <div className="absolute -bottom-12 right-0 h-44 w-44 rounded-full bg-cream-200/8 blur-3xl" />
        <div className="relative mx-auto max-w-3xl text-center">
          <span className="font-heading text-7xl leading-none text-gold-300/65 sm:text-8xl">
            “
          </span>
          <div className="space-y-7 text-base leading-8 text-ivory/78 sm:text-lg">
            {invitation.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mx-auto mt-10 h-px w-32 bg-gradient-to-r from-transparent via-gold-400/55 to-transparent" />
          <p className="mt-8 font-heading text-3xl text-gold-200 sm:text-4xl">
            {invitation.signature}
          </p>
        </div>
      </div>
    </RevealSection>
  )
}
