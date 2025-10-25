'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Хук анимации появления при скролле.
 * Использует IntersectionObserver.
 * Поддерживает generic для разных элементов (div, section и т.д.)
 */
export function useScrollAnimation<T extends HTMLElement>() {
    const ref = useRef<T | null>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.1 }
        )

        const element = ref.current
        if (element) observer.observe(element)

        return () => {
            if (element) observer.unobserve(element)
        }
    }, [])

    return { ref, isVisible }
}
