'use client'

import { useEffect, useRef, useState } from 'react'

interface UseScrollAnimationOptions {
    threshold?: number
    rootMargin?: string
    triggerOnce?: boolean
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
    const [isVisible, setIsVisible] = useState(false)
    const [hasTriggered, setHasTriggered] = useState(false)
    const elementRef = useRef<HTMLElement>(null)

    const { threshold = 0.1, rootMargin = '0px 0px -50px 0px', triggerOnce = true } = options

    useEffect(() => {
        const element = elementRef.current
        if (!element) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && (!triggerOnce || !hasTriggered)) {
                    setIsVisible(true)
                    setHasTriggered(true)
                } else if (!triggerOnce && !entry.isIntersecting) {
                    setIsVisible(false)
                }
            },
            { threshold, rootMargin }
        )

        observer.observe(element)

        return () => observer.disconnect()
    }, [threshold, rootMargin, triggerOnce, hasTriggered])

    return { ref: elementRef, isVisible }
}