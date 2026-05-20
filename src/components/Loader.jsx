export default function Loader({ isVisible }) {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-midnight px-6 transition duration-700 ${
        isVisible ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      <div aria-hidden="true" className="absolute inset-0 loader-backdrop" />
      <div className="relative text-center">
        <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full border border-gold-400/30 bg-white/5 p-3 shadow-[0_0_80px_rgba(207,169,94,0.16)] backdrop-blur-sm">
          <div className="flex h-full w-full animate-[spin_12s_linear_infinite] items-center justify-center rounded-full border border-gold-300/35">
            <span className="font-heading text-4xl text-gold-200">A &amp; S</span>
          </div>
        </div>
        <p className="mt-8 text-xs uppercase tracking-[0.5em] text-gold-300/80">
          Preparing the invitation
        </p>
        <h2 className="mt-4 font-heading text-4xl text-ivory sm:text-5xl">
          A new chapter is about to bloom
        </h2>
      </div>
    </div>
  )
}
