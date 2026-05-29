import RevealSection from './RevealSection'
import SectionHeading from './SectionHeading'

function TimelineCard({ item, index }) {
  const isLeft = index % 2 === 0

  return (
    <RevealSection
      as="article"
      delay={index * 90}
      className="relative lg:contents"
    >
      {isLeft ? (
        <>
          <div className="luxury-card relative ml-8 p-5 sm:ml-14 sm:p-8 lg:col-start-1 lg:ml-0">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-gold-500/85 sm:text-xs sm:tracking-[0.34em]">
              {item.date}
            </p>
            <h3 className="mt-3 font-heading text-2xl leading-tight text-ivory sm:mt-4 sm:text-4xl">
              {item.title}
            </h3>
            <p className="mt-3 text-base leading-7 text-ivory/72 sm:mt-4 sm:leading-8">
              {item.description}
            </p>
          </div>
          <div className="timeline-marker absolute left-0 top-8 lg:static lg:col-start-2 lg:row-start-1 lg:mx-auto" />
          <div className="hidden lg:block" />
        </>
      ) : (
        <>
          <div className="hidden lg:block" />
          <div className="timeline-marker absolute left-0 top-8 lg:static lg:col-start-2 lg:row-start-1 lg:mx-auto" />
          <div className="luxury-card relative ml-8 p-5 sm:ml-14 sm:p-8 lg:col-start-3 lg:ml-0">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-gold-500/85 sm:text-xs sm:tracking-[0.34em]">
              {item.date}
            </p>
            <h3 className="mt-3 font-heading text-2xl leading-tight text-ivory sm:mt-4 sm:text-4xl">
              {item.title}
            </h3>
            <p className="mt-3 text-base leading-7 text-ivory/72 sm:mt-4 sm:leading-8">
              {item.description}
            </p>
          </div>
        </>
      )}
    </RevealSection>
  )
}

export default function StoryTimeline({ story }) {
  return (
    <section className="relative mx-auto max-w-6xl px-4 py-16 sm:px-8 sm:py-24 lg:py-30">
      <RevealSection icon>
        <SectionHeading
          eyebrow="Our Story"
          title="The journey from hello to forever"
          subtitle="Each chapter carried its own tenderness, and every moment quietly led here."
        />
      </RevealSection>

      <div className="relative mt-10 grid gap-6 sm:mt-16 sm:gap-8 lg:grid-cols-[1fr_auto_1fr] lg:gap-x-8 lg:gap-y-10">
        <div className="absolute left-[0.35rem] top-0 h-full w-px bg-gradient-to-b from-gold-500/45 via-gold-400/25 to-transparent lg:left-1/2 lg:-translate-x-1/2" />
        {story.map((item, index) => (
          <TimelineCard key={`${item.date}-${item.title}`} item={item} index={index} />
        ))}
      </div>
    </section>
  )
}
