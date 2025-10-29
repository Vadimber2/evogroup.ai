'use client'

import React from 'react'
import { useScrollAnimation } from '@/components/hooks/useScrollAnimation'

interface StaggeredContainerProps {
    children: React.ReactNode
    className?: string
    staggerDelay?: number
}

export const StaggeredContainer: React.FC<StaggeredContainerProps> = ({
                                                                          children,
                                                                          className = '',
                                                                          staggerDelay = 150
                                                                      }) => {
    const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()

    return (
        <div ref={ref} className={className}>
            {React.Children.map(children, (child, index) => (
                <div
                    className={`transition-all duration-700 ease-out ${
                        isVisible
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-6'
                    }`}
                    style={{
                        transitionDelay: isVisible ? `${index * staggerDelay}ms` : '0ms'
                    }}
                >
                    {child}
                </div>
            ))}
        </div>
    )
}
