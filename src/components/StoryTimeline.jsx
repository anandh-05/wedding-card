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
          <div className="luxury-card relative ml-10 p-6 sm:ml-14 sm:p-8 lg:col-start-1 lg:ml-0">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-gold-300/80">
              {item.date}
            </p>
            <h3 className="mt-4 font-heading text-3xl text-ivory sm:text-4xl">
              {item.title}
            </h3>
            <p className="mt-4 text-base leading-8 text-ivory/72">
              {item.description}
            </p>
          </div>
          <div className="timeline-marker absolute left-0 top-9 lg:static lg:col-start-2 lg:row-start-1 lg:mx-auto" />
          <div className="hidden lg:block" />
        </>
      ) : (
        <>
          <div className="hidden lg:block" />
          <div className="timeline-marker absolute left-0 top-9 lg:static lg:col-start-2 lg:row-start-1 lg:mx-auto" />
          <div className="luxury-card relative ml-10 p-6 sm:ml-14 sm:p-8 lg:col-start-3 lg:ml-0">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-gold-300/80">
              {item.date}
            </p>
            <h3 className="mt-4 font-heading text-3xl text-ivory sm:text-4xl">
              {item.title}
            </h3>
            <p className="mt-4 text-base leading-8 text-ivory/72">
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
    <section className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-30">
      <RevealSection>
        <SectionHeading
          eyebrow="Our Story"
          title="The journey from hello to forever"
          subtitle="Each chapter carried its own tenderness, and every moment quietly led here."
        />
      </RevealSection>

      <div className="relative mt-16 grid gap-8 lg:grid-cols-[1fr_auto_1fr] lg:gap-x-8 lg:gap-y-10">
        <div className="absolute left-[0.35rem] top-0 h-full w-px bg-gradient-to-b from-gold-400/45 via-gold-300/20 to-transparent lg:left-1/2 lg:-translate-x-1/2" />
        {story.map((item, index) => (
          <TimelineCard key={`${item.date}-${item.title}`} item={item} index={index} />
        ))}
      </div>
    </section>
  )
}
