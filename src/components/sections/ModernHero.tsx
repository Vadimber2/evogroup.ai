'use client'

import React, { useState, useEffect } from 'react'
import { useTranslation, Locale } from '@/components/providers/I18nProvider'
import { Button } from '@/components/ui/Button'

const ModernHero: React.FC = () => {
    const { t, locale } = useTranslation()
    const [isVisible, setIsVisible] = useState(false)
    const [currentWord, setCurrentWord] = useState(0)

    useEffect(() => {
        setIsVisible(true)
        const interval = setInterval(() => {
            setCurrentWord(prev => (prev + 1) % 3)
        }, 4000)
        return () => clearInterval(interval)
    }, [])

    // Функция для получения переводов с fallback значениями
    const getTranslations = () => {
        if (locale === 'en') {
            return {
                badge: 'Enterprise AI Solutions',
                mainTitle: 'Transform Your Business with',
                dynamicWords: ['Intelligence', 'Innovation', 'Efficiency'],
                subtitle: 'We help Kyrgyzstan\'s leading companies implement AI solutions that deliver measurable results and competitive advantages in banking, government, and industrial sectors.',
                ctaPrimary: 'Start Project',
                ctaSecondary: 'View Cases',
                features: [
                    { text: 'Enterprise-grade solutions', icon: '🏢' },
                    { text: 'Proven ROI of 340%+', icon: '📈' },
                    { text: '24/7 expert support', icon: '🛡️' },
                    { text: 'Government certified', icon: '✓' }
                ],
                stats: {
                    projects: { value: '50+', label: 'Projects' },
                    savings: { value: '$10M+', label: 'Client Savings' },
                    uptime: { value: '99.9%', label: 'Uptime' },
                    experts: { value: '25+', label: 'AI Experts' }
                }
            }
        } else if (locale === 'ky') {
            return {
                badge: 'Корпоративдүү ИИ чечимдери',
                mainTitle: 'Бизнесиңизди өзгөртүңүз',
                dynamicWords: ['Акыл менен', 'Инновация менен', 'Натыйжалуулук менен'],
                subtitle: 'Банктык, мамлекеттик жана өнөр жай секторлорунда өлчөнүүчү натыйжаларды жана атаандаштык артыкчылыктарды берген ИИ чечимдерин ишке ашырууда Кыргызстандын алдыңкы компанияларына жардам беребиз.',
                ctaPrimary: 'Долбоорду баштоо',
                ctaSecondary: 'Кейстерди көрүү',
                features: [
                    { text: 'Корпоративдик деңгээлдеги чечимдер', icon: '🏢' },
                    { text: '340%+ текшерилген ROI', icon: '📈' },
                    { text: '24/7 эксперт колдоосу', icon: '🛡️' },
                    { text: 'Мамлекет тарабынан сертификатталган', icon: '✓' }
                ],
                stats: {
                    projects: { value: '50+', label: 'Долбоор' },
                    savings: { value: '$10M+', label: 'Кардар үнөмү' },
                    uptime: { value: '99.9%', label: 'Иштеш убактысы' },
                    experts: { value: '25+', label: 'ИИ эксперти' }
                }
            }
        } else {
            return {
                badge: 'Корпоративные ИИ-решения',
                mainTitle: 'Трансформируйте бизнес с помощью',
                dynamicWords: ['Интеллекта', 'Инноваций', 'Эффективности'],
                subtitle: 'Помогаем ведущим компаниям Кыргызстана внедрять ИИ-решения, которые обеспечивают измеримые результаты и конкурентные преимущества в банковском, государственном и промышленном секторах.',
                ctaPrimary: 'Начать проект',
                ctaSecondary: 'Посмотреть кейсы',
                features: [
                    { text: 'Решения корпоративного класса', icon: '🏢' },
                    { text: 'Проверенный ROI 340%+', icon: '📈' },
                    { text: '24/7 экспертная поддержка', icon: '🛡️' },
                    { text: 'Сертифицировано государством', icon: '✓' }
                ],
                stats: {
                    projects: { value: '50+', label: 'Проектов' },
                    savings: { value: '$10M+', label: 'Экономии клиентов' },
                    uptime: { value: '99.9%', label: 'Аптайм' },
                    experts: { value: '25+', label: 'ИИ экспертов' }
                }
            }
        }
    }

    const translations = getTranslations()

    return (
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-800/90 pt-20">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-[0.02]">
                <div className="absolute inset-0"
                     style={{
                         backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                         backgroundSize: '32px 32px'
                     }}
                />
            </div>

            {/* Minimal gradient overlay for smooth transition */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-800/50 to-transparent" />

            <div className="relative z-10 max-w-6xl mx-auto px-6">
                <div className="text-center">
                    {/* Professional badge */}
                    <div className={`inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-4 py-2 text-sm text-white/90 mb-8 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                        <div className="w-2 h-2 bg-blue-400 rounded-full" />
                        <span className="font-medium">{translations.badge}</span>
                    </div>

                    {/* Clean main title with subtle animation */}
                    <div className={`mb-8 transform transition-all duration-700 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                            {translations.mainTitle}
                        </h1>
                        <div className="h-16 md:h-20 lg:h-24 flex items-center justify-center">
                            <span
                                key={currentWord}
                                className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400 bg-clip-text text-transparent"
                                style={{
                                    animation: 'fadeInScale 4s ease-in-out infinite'
                                }}
                            >
                                {translations.dynamicWords[currentWord]}
                            </span>
                        </div>
                    </div>

                    {/* Professional subtitle */}
                    <p className={`text-lg md:text-xl text-white/80 max-w-4xl mx-auto mb-12 leading-relaxed transform transition-all duration-700 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                        {translations.subtitle}
                    </p>

                    {/* Clean CTA buttons */}
                    <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 transform transition-all duration-700 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                        <Button
                            variant="primary"
                            size="lg"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl transition-all duration-200"
                        >
                            {translations.ctaPrimary}
                        </Button>

                        <Button
                            variant="outline"
                            size="lg"
                            className="border-white/20 text-white hover:bg-white/5 px-8 py-4 rounded-xl transition-all duration-200"
                        >
                            {translations.ctaSecondary}
                        </Button>
                    </div>

                    {/* Professional features */}
                    <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16 transform transition-all duration-700 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                        {translations.features.map((feature, index) => (
                            <div key={index} className="flex flex-col items-center text-center p-4">
                                <div className="text-2xl mb-2 text-blue-400">{feature.icon}</div>
                                <p className="text-white/80 text-sm leading-tight">{feature.text}</p>
                            </div>
                        ))}
                    </div>

                    {/* Clean stats */}
                    <div className={`grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto transform transition-all duration-700 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                        {Object.entries(translations.stats).map(([key, stat]) => (
                            <div key={key} className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                                <div className="text-3xl font-bold text-blue-400 mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-white/60 text-sm font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeInScale {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    25% { opacity: 0.8; transform: scale(1.02); }
                    50% { opacity: 1; transform: scale(1); }
                    75% { opacity: 0.9; transform: scale(0.98); }
                }
            `}</style>
        </section>
    )
}

export default ModernHero