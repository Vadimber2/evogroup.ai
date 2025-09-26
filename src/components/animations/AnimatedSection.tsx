'use client'

import React from 'react'
import { useScrollAnimation } from '@/components/hooks/useScrollAnimation'

interface AnimatedSectionProps {
    children: React.ReactNode
    className?: string
    animationType?: 'fadeIn' | 'slideUp' | 'slideInLeft' | 'slideInRight' | 'scaleIn'
    delay?: number
    duration?: number
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
                                                                    children,
                                                                    className = '',
                                                                    animationType = 'fadeIn',
                                                                    delay = 0,
                                                                    duration = 800
                                                                }) => {
    const { ref, isVisible } = useScrollAnimation()

    const getAnimationClasses = () => {
        const baseClasses = `transition-all duration-${duration} ease-out`

        switch (animationType) {
            case 'fadeIn':
                return `${baseClasses} ${isVisible ? 'opacity-100' : 'opacity-0'}`

            case 'slideUp':
                return `${baseClasses} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`

            case 'slideInLeft':
                return `${baseClasses} ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`

            case 'slideInRight':
                return `${baseClasses} ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`

            case 'scaleIn':
                return `${baseClasses} ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`

            default:
                return baseClasses
        }
    }

    return (
        <div
            ref={ref}
            className={`${getAnimationClasses()} ${className}`}
            style={{
                transitionDelay: `${delay}ms`,
                transitionDuration: `${duration}ms`
            }}
        >
            {children}
        </div>
    )
}