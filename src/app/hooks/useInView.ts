import { useEffect, useRef, useState } from 'react'

const VISIBILITY_THRESHOLD = 0.1
const VIEWPORT_BOTTOM_INSET = '0px 0px -6% 0px'

export function useInView<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const element = ref.current

    if (!element) return

    const isObserverSupported = typeof IntersectionObserver !== 'undefined'

    if (!isObserverSupported) {
      setIsInView(true)
      return
    }

    const observer = new IntersectionObserver(
      entries => {
        const hasEnteredViewport = entries.some(entry => entry.isIntersecting)

        if (hasEnteredViewport) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: VISIBILITY_THRESHOLD, rootMargin: VIEWPORT_BOTTOM_INSET }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [])

  return { ref, isInView }
}
