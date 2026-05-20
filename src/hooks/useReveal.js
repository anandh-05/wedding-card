import { useEffect, useRef, useState } from 'react'

export default function useReveal({
  threshold = 0.18,
  rootMargin = '0px 0px -72px 0px',
} = {}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current

    if (!node || visible) {
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(node)
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
    }
  }, [rootMargin, threshold, visible])

  return { ref, visible }
}
