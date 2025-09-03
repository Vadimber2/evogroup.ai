'use client'

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/Button'

const ModernHeader: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems = [
        { label: 'Решения', href: '#solutions' },
        { label: 'Кейсы', href: '#cases' },
        { label: 'Технологии', href: '#technology' },
        { label: 'О команде', href: '#team' },
    ]

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
        setIsMobileMenuOpen(false)
    }

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    isScrolled
                        ? 'bg-slate-900/95 backdrop-blur-xl border-b border-white/10 shadow-xl'
                        : 'bg-slate-900/80 backdrop-blur-sm'
                }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex items-center justify-between h-16 lg:h-20">
                        {/* Logo */}
                        <div className="flex items-center space-x-3 cursor-pointer hover:scale-105 transition-transform">
                            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-blue-500 to-violet-600 rounded-lg flex items-center justify-center shadow-lg">
                                <div className="w-4 h-4 lg:w-5 lg:h-5 bg-white rounded-sm" />
                            </div>
                            <div>
                                <h1 className="text-lg lg:text-xl font-bold text-white">
                                    ФискалеПро
                                </h1>
                                <p className="text-xs text-white/70 hidden sm:block leading-none">
                                    AI Solutions
                                </p>
                            </div>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center space-x-1">
                            {navItems.map((item) => (
                                <button
                                    key={item.label}
                                    onClick={() => scrollToSection(item.href)}
                                    className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white rounded-lg hover:bg-white/10 transition-all duration-200 hover:-translate-y-0.5"
                                >
                                    {item.label}
                                </button>
                            ))}
                        </nav>

                        {/* Desktop CTA */}
                        <div className="hidden lg:flex items-center space-x-3">
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => scrollToSection('#contact')}
                                className="border-white/20 text-white hover:bg-white/10"
                            >
                                Связаться
                            </Button>
                            <Button
                                variant="primary"
                                size="sm"
                                onClick={() => scrollToSection('#contact')}
                                className="bg-blue-600 hover:bg-blue-700"
                            >
                                Демо
                            </Button>
                        </div>

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors duration-200"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {isMobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden bg-slate-900/98 backdrop-blur-xl border-t border-white/10 shadow-xl">
                        <div className="px-6 py-6 space-y-4">
                            {navItems.map((item) => (
                                <button
                                    key={item.label}
                                    onClick={() => scrollToSection(item.href)}
                                    className="block w-full text-left px-4 py-3 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 font-medium"
                                >
                                    {item.label}
                                </button>
                            ))}

                            <div className="pt-4 border-t border-white/10 space-y-3">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="w-full border-white/20 text-white hover:bg-white/10"
                                    onClick={() => scrollToSection('#contact')}
                                >
                                    Связаться
                                </Button>
                                <Button
                                    variant="primary"
                                    size="lg"
                                    className="w-full bg-blue-600 hover:bg-blue-700"
                                    onClick={() => scrollToSection('#contact')}
                                >
                                    Запросить демо
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </header>
        </>
    )
}

export default ModernHeader