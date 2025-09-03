import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'outline' | 'primary' | 'secondary' | 'ghost'
    size?: 'sm' | 'default' | 'md' | 'lg' | 'xl'
    children: React.ReactNode
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
                                                                            variant = 'default',
                                                                            size = 'default',
                                                                            className = '',
                                                                            children,
                                                                            ...props
                                                                        }, ref) => {
    let baseClasses = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none disabled:opacity-50'

    // Стили для вариантов
    if (variant === 'default' || variant === 'primary') {
        baseClasses += ' bg-slate-900 text-white hover:bg-slate-800 shadow-lg hover:shadow-xl'
    } else if (variant === 'secondary') {
        baseClasses += ' bg-slate-200 text-slate-900 hover:bg-slate-300'
    } else if (variant === 'outline') {
        baseClasses += ' border border-slate-300 bg-transparent text-slate-700 hover:bg-slate-50'
    } else if (variant === 'ghost') {
        baseClasses += ' bg-transparent text-slate-700 hover:bg-slate-100'
    }

    // Стили для размеров
    if (size === 'sm') {
        baseClasses += ' h-8 px-3 text-sm'
    } else if (size === 'md') {
        baseClasses += ' h-9 px-4 text-sm'
    } else if (size === 'lg') {
        baseClasses += ' h-12 px-6 text-base'
    } else if (size === 'xl') {
        baseClasses += ' h-14 px-8 text-lg'
    } else {
        baseClasses += ' h-10 px-4 text-sm' // default
    }

    return (
        <button
            ref={ref}
            className={`${baseClasses} ${className}`}
            {...props}
        >
            {children}
        </button>
    )
})

Button.displayName = 'Button'
