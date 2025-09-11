'use client'

import React from 'react'
import { Button } from '@/components/ui/Button'

const ModernHero: React.FC = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                />
            </div>

            {/* Floating Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-4 -left-4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute top-1/4 -right-4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm text-white/80 shadow-sm mb-8">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    Революция в корпоративных решениях
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-tight">
                    Искусственный
                    <br />
                    <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-blue-400 bg-clip-text text-transparent">
                        интеллект
                    </span>
                    <br />
                    для бизнеса
                </h1>

                {/* Subtitle */}
                <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto mb-12 leading-relaxed font-light">
                    Создаем интеллектуальные решения, которые трансформируют
                    <br className="hidden md:block" />
                    способ работы крупнейших компаний Кыргызстана
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                    <Button
                        variant="primary"
                        size="xl"
                        className="hover:scale-105 transform transition-all duration-300 bg-blue-600 hover:bg-blue-700 shadow-xl"
                    >
                        Начать проект →
                    </Button>

                    <Button
                        variant="outline"
                        size="xl"
                        className="hover:scale-105 transform transition-all duration-300 border-white/20 text-white hover:bg-white/10"
                    >
                        Посмотреть кейсы
                    </Button>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap items-center justify-center gap-12 text-white/60">
                    <div className="text-center">
                        <div className="text-2xl font-bold text-white">50+</div>
                        <div className="text-sm">Проектов</div>
                    </div>
                    <div className="w-px h-8 bg-white/20" />
                    <div className="text-center">
                        <div className="text-2xl font-bold text-white">$10M+</div>
                        <div className="text-sm">Экономии клиентов</div>
                    </div>
                    <div className="w-px h-8 bg-white/20" />
                    <div className="text-center">
                        <div className="text-2xl font-bold text-white">99.9%</div>
                        <div className="text-sm">Аптайм</div>
                    </div>
                    <div className="w-px h-8 bg-white/20" />
                    <div className="text-center">
                        <div className="text-2xl font-bold text-white">25+</div>
                        <div className="text-sm">Экспертов</div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center animate-bounce">
                    <div className="w-1 h-3 bg-white/40 rounded-full mt-2" />
                </div>
            </div>
        </section>
    )
}

export default ModernHero
