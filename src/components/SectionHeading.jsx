export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
}) {
  const alignment =
    align === 'left'
      ? 'items-start text-left'
      : 'items-center text-center'

  return (
    <div className={`flex max-w-3xl flex-col gap-4 ${alignment}`}>
      <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.42em] text-gold-300/80">
        <span className="h-px w-10 bg-gold-400/50" />
        {eyebrow}
      </span>
      <h2 className="font-heading text-4xl leading-none text-ivory sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      <p className="max-w-2xl text-base leading-8 text-ivory/72 sm:text-lg">
        {subtitle}
      </p>
    </div>
  )
}
