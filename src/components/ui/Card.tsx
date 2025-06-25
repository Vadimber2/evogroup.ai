import React from 'react'
import { cn } from '@/utils/cn'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'gradient' | 'hover'
  children: React.ReactNode
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    return (
      <div
        className={cn(
          // Base styles
          'rounded-xl transition-all duration-300',
          
          // Variants
          {
            'bg-white border border-gray-200 shadow-sm hover:shadow-md': variant === 'default',
            'bg-white/10 backdrop-blur-md border border-white/20 shadow-xl': variant === 'glass',
            'bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-md border border-white/30 shadow-xl': variant === 'gradient',
            'bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 cursor-pointer': variant === 'hover',
          },
          
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        className={cn('p-6 pb-4', className)}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    )
  }
)

CardHeader.displayName = 'CardHeader'

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        className={cn('p-6 pt-0', className)}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    )
  }
)

CardContent.displayName = 'CardContent'

const CardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <h3
        className={cn('text-lg font-semibold leading-none tracking-tight', className)}
        ref={ref}
        {...props}
      >
        {children}
      </h3>
    )
  }
)

CardTitle.displayName = 'CardTitle'

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <p
        className={cn('text-sm text-gray-600 mt-2', className)}
        ref={ref}
        {...props}
      >
        {children}
      </p>
    )
  }
)

CardDescription.displayName = 'CardDescription'

export { Card, CardHeader, CardContent, CardTitle, CardDescription }