const petals = [
  { left: '5%', size: '18px', delay: '-3s', duration: '17s', drift: '6vw' },
  { left: '12%', size: '14px', delay: '-12s', duration: '19s', drift: '8vw' },
  { left: '20%', size: '22px', delay: '-1s', duration: '21s', drift: '5vw' },
  { left: '28%', size: '16px', delay: '-8s', duration: '18s', drift: '9vw' },
  { left: '37%', size: '12px', delay: '-15s', duration: '20s', drift: '7vw' },
  { left: '46%', size: '20px', delay: '-6s', duration: '23s', drift: '10vw' },
  { left: '54%', size: '18px', delay: '-18s', duration: '19s', drift: '6vw' },
  { left: '63%', size: '15px', delay: '-4s', duration: '22s', drift: '8vw' },
  { left: '71%', size: '13px', delay: '-11s', duration: '24s', drift: '7vw' },
  { left: '79%', size: '21px', delay: '-9s', duration: '18s', drift: '10vw' },
  { left: '87%', size: '16px', delay: '-14s', duration: '21s', drift: '5vw' },
  { left: '94%', size: '12px', delay: '-2s', duration: '20s', drift: '7vw' },
]

export default function FloatingPetals() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[5] overflow-hidden"
    >
      {petals.map((petal) => (
        <span
          key={`${petal.left}-${petal.delay}`}
          className="petal"
          style={{
            '--petal-left': petal.left,
            '--petal-size': petal.size,
            '--petal-delay': petal.delay,
            '--petal-duration': petal.duration,
            '--petal-drift': petal.drift,
          }}
        />
      ))}
    </div>
  )
}
