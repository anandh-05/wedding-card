export default function Loader({ isVisible }) {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-midnight px-4 transition duration-700 sm:px-6 ${
        isVisible ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      <div aria-hidden="true" className="absolute inset-0 loader-backdrop" />
      <div className="relative text-center">
        <div className="pookalam absolute left-1/2 top-0 h-28 w-28 -translate-x-1/2 opacity-20 sm:h-36 sm:w-36" />
        <div className="relative mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-gold-400/35 bg-white/55 p-3 shadow-[0_0_80px_rgba(157,109,19,0.14)] backdrop-blur-sm sm:h-32 sm:w-32">
          <div className="flex h-full w-full animate-[spin_16s_linear_infinite] items-center justify-center rounded-full border border-gold-400/45">
            <span className="font-heading text-4xl text-gold-500">A&amp;S</span>
          </div>
        </div>
        <p className="mt-7 text-[0.65rem] uppercase tracking-[0.3em] text-gold-500/85 sm:mt-8 sm:text-xs sm:tracking-[0.5em]">
          Preparing the invitation
        </p>
        <h2 className="mt-4 font-heading text-3xl leading-tight text-ivory sm:text-5xl">
          A new chapter is about to bloom
        </h2>
      </div>
    </div>
  )
}
