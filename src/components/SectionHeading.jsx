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
      <span className="inline-flex max-w-full items-center gap-3 text-[0.65rem] font-semibold uppercase tracking-[0.26em] text-gold-500/85 sm:text-xs sm:tracking-[0.42em]">
        <span className="h-px w-7 shrink-0 bg-gold-500/50 sm:w-10" />
        {eyebrow}
      </span>
      <h2 className="mobile-safe-copy font-heading text-3xl leading-tight text-ivory sm:text-5xl sm:leading-none lg:text-6xl">
        {title}
      </h2>
      <p className="max-w-2xl text-base leading-7 text-ivory/72 sm:text-lg sm:leading-8">
        {subtitle}
      </p>
    </div>
  )
}
