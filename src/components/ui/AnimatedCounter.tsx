'use client'

import { useState, useEffect } from 'react'

interface AnimatedCounterProps {
    end: number
    duration?: number
    prefix?: string
    suffix?: string
}

export default function AnimatedCounter({
                                            end,
                                            duration = 2000,
                                            prefix = "",
                                            suffix = ""
                                        }: AnimatedCounterProps) {
    const [count, setCount] = useState(0)

    useEffect(() => {
        let startTime: number
        let animationFrame: number

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp
            const progress = timestamp - startTime
            const percentage = Math.min(progress / duration, 1)

            // Easing function для более плавной анимации
            const easeOut = 1 - Math.pow(1 - percentage, 3)
            setCount(Math.floor(end * easeOut))

            if (percentage < 1) {
                animationFrame = requestAnimationFrame(animate)
            }
        }

        animationFrame = requestAnimationFrame(animate)

        return () => cancelAnimationFrame(animationFrame)
    }, [end, duration])

    return <span>{prefix}{count}{suffix}</span>
}