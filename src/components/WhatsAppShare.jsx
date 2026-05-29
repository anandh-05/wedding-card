export default function WhatsAppShare({ shareText }) {
  const handleShare = () => {
    const currentUrl = window.location.href
    const message = encodeURIComponent(`${shareText}\n${currentUrl}`)
    window.open(`https://wa.me/?text=${message}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <button
      type="button"
      onClick={handleShare}
      className="fixed bottom-4 left-4 z-40 inline-flex min-h-12 items-center gap-3 rounded-full border border-[#46c464]/35 bg-[#1f6a36]/90 px-4 py-3 text-sm font-semibold text-[#f2fff5] shadow-[0_18px_40px_rgba(95,64,19,0.16)] backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-[#18582c] sm:bottom-8 sm:left-8"
      aria-label="Share invitation on WhatsApp"
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
        <path d="M20.52 3.48A11.83 11.83 0 0 0 12.1 0C5.53 0 .18 5.34.18 11.91c0 2.1.55 4.15 1.6 5.96L0 24l6.31-1.65a11.9 11.9 0 0 0 5.79 1.48h.01c6.57 0 11.91-5.34 11.91-11.91 0-3.18-1.24-6.17-3.5-8.44ZM12.1 21.83h-.01a9.93 9.93 0 0 1-5.06-1.39l-.36-.21-3.75.98 1-3.66-.24-.38a9.9 9.9 0 0 1-1.53-5.26c0-5.47 4.45-9.92 9.93-9.92 2.65 0 5.14 1.03 7.01 2.91a9.84 9.84 0 0 1 2.9 7.02c0 5.47-4.45 9.91-9.9 9.91Zm5.44-7.42c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.95 1.18-.18.2-.35.22-.65.08-.3-.15-1.26-.46-2.4-1.47-.88-.79-1.47-1.76-1.64-2.06-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.07-.15-.68-1.64-.93-2.24-.24-.58-.49-.5-.68-.5h-.58c-.2 0-.53.08-.8.38-.28.3-1.06 1.03-1.06 2.5s1.08 2.89 1.23 3.09c.15.2 2.11 3.22 5.12 4.52.71.31 1.26.49 1.7.63.71.23 1.35.2 1.86.12.57-.08 1.78-.73 2.03-1.43.25-.71.25-1.31.18-1.43-.08-.13-.28-.2-.58-.35Z" />
      </svg>
      <span>Share</span>
    </button>
  )
}
