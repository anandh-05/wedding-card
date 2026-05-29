import useCountdown from '../hooks/useCountdown'
import RevealSection from './RevealSection'

function CountdownUnit({ label, value }) {
  return (
    <div className="luxury-card min-w-0 p-4 text-center sm:min-w-[8rem] sm:p-8">
      <div className="font-heading text-4xl text-gold-500 sm:text-6xl">{value}</div>
      <p className="mt-2 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-ivory/58 sm:mt-3 sm:text-xs sm:tracking-[0.34em]">
        {label}
      </p>
    </div>
  )
}

export default function CountdownSection({ targetDate, names }) {
  const timeLeft = useCountdown(targetDate)

  return (
    <RevealSection icon className="relative mx-auto max-w-6xl px-4 py-16 sm:px-8 sm:py-24 lg:py-30">
      <div className="kasavu-panel relative overflow-hidden rounded-[1.25rem] px-5 py-10 sm:px-10 sm:py-16">
        <div aria-hidden="true" className="pookalam absolute left-1/2 top-8 h-36 w-36 -translate-x-1/2 opacity-10 sm:h-52 sm:w-52" />
        <p className="relative text-center text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-gold-500/85 sm:text-xs sm:tracking-[0.42em]">
          Countdown To Our Forever
        </p>
        <h2 className="relative mt-4 text-center font-heading text-3xl leading-tight text-ivory sm:mt-5 sm:text-5xl lg:text-6xl">
          {timeLeft.isComplete
            ? `The celebration of ${names} has begun`
            : `${names} say "I do" very soon`}
        </h2>
        <p className="relative mx-auto mt-4 max-w-2xl text-center text-base leading-7 text-ivory/72 sm:mt-5 sm:text-lg sm:leading-8">
          Each passing day brings us closer to a lifetime filled with love, laughter, traditions, and beautiful memories.        
          </p>
        {timeLeft.isComplete ? (
          <div className="relative mx-auto mt-8 max-w-xl rounded-[1.25rem] border border-gold-400/25 bg-white/45 px-5 py-6 text-center text-base leading-7 text-ivory/76 backdrop-blur-sm sm:mt-10 sm:px-6 sm:py-8 sm:text-lg sm:leading-8">
            The ceremony is underway, the family is gathered, and the celebration has begun.
          </div>
        ) : (
          <div className="relative mt-8 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-4 lg:grid-cols-4">
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
