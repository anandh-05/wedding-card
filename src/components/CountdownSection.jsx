import useCountdown from '../hooks/useCountdown'
import RevealSection from './RevealSection'

function CountdownUnit({ label, value }) {
  return (
    <div className="luxury-card min-w-[8rem] p-6 text-center sm:p-8">
      <div className="font-heading text-5xl text-gold-200 sm:text-6xl">{value}</div>
      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.34em] text-ivory/58">
        {label}
      </p>
    </div>
  )
}

export default function CountdownSection({ targetDate, names }) {
  const timeLeft = useCountdown(targetDate)

  return (
    <RevealSection className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-30">
      <div className="overflow-hidden rounded-[2.25rem] border border-gold-400/18 bg-[radial-gradient(circle_at_top,rgba(219,184,110,0.14),transparent_48%),linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] px-6 py-12 shadow-[0_30px_80px_rgba(0,0,0,0.28)] sm:px-10 sm:py-16">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.42em] text-gold-300/78">
          Countdown to the Ceremony
        </p>
        <h2 className="mt-5 text-center font-heading text-4xl text-ivory sm:text-5xl lg:text-6xl">
          {timeLeft.isComplete
            ? `The celebration of ${names} has begun`
            : `${names} say “I do” very soon`}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-8 text-ivory/72 sm:text-lg">
          Each passing day brings us closer to the music, the rituals, and the moment forever begins.
        </p>

        {timeLeft.isComplete ? (
          <div className="mx-auto mt-10 max-w-xl rounded-[1.75rem] border border-gold-400/20 bg-black/25 px-6 py-8 text-center text-lg leading-8 text-ivory/76 backdrop-blur-sm">
            The ceremony is underway, the family is gathered, and the celebration has begun.
          </div>
        ) : (
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <CountdownUnit label="Days" value={timeLeft.days} />
            <CountdownUnit label="Hours" value={timeLeft.hours} />
            <CountdownUnit label="Minutes" value={timeLeft.minutes} />
            <CountdownUnit label="Seconds" value={timeLeft.seconds} />
          </div>
        )}
      </div>
    </RevealSection>
  )
}
