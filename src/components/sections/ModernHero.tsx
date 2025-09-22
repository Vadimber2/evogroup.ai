'use client'

import React from 'react'
import { useTranslation } from '@/components/providers/I18nProvider'
import { Button } from '@/components/ui/Button'

const ModernHero: React.FC = () => {
    const { t, locale } = useTranslation()

    // Функция для безопасного получения переводов с fallback
    const getString = (key: string, fallback: string): string => {
        const value = t(key, 'hero')
        return (typeof value === 'string' && value !== key) ? value : fallback
    }

    const getArray = (key: string, fallback: string[]): string[] => {
        const value = t(key, 'hero')
        return Array.isArray(value) ? value : fallback
    }

    // Переводы с fallback значениями
    const getTranslations = () => {
        if (locale === 'en') {
            return {
                badge: getString('badge_text', 'Revolution in Corporate Solutions'),
                title: {
                    line1: getString('title.line1', 'Artificial'),
                    line2: getString('title.line2', 'Intelligence'),
                    line3: getString('title.line3', 'for Business')
                },
                subtitle: getString('subtitle', 'We create intelligent solutions that transform how Kyrgyzstan\'s largest companies work'),
                buttons: {
                    startProject: getString('cta_primary', 'Start Project'),
                    viewCases: getString('cta_secondary', 'View Cases')
                },
                metrics: {
                    projects: {
                        value: getString('metrics.projects.value', '50+'),
                        label: getString('metrics.projects.label', 'Projects')
                    },
                    savings: {
                        value: getString('metrics.savings.value', '$10M+'),
                        label: getString('metrics.savings.label', 'Client Savings')
                    },
                    uptime: {
                        value: getString('metrics.uptime.value', '99.9%'),
                        label: getString('metrics.uptime.label', 'Uptime')
                    },
                    experts: {
                        value: getString('metrics.experts.value', '25+'),
                        label: getString('metrics.experts.label', 'Experts')
                    }
                },
                features: getArray('features', [
                    'Rapid deployment in 1-3 months',
                    'Guaranteed return on investment',
                    '24/7 support',
                    'Integration with any systems'
                ])
            }
        } else if (locale === 'ky') {
            return {
                badge: getString('badge_text', 'Корпоративдик чечимдердеги революция'),
                title: {
                    line1: getString('title.line1', 'Жасалма'),
                    line2: getString('title.line2', 'интеллект'),
                    line3: getString('title.line3', 'бизнес үчүн')
                },
                subtitle: getString('subtitle', 'Кыргызстандын эң ири компанияларынын иштөө ыкмаларын өзгөрткөн акылдуу чечимдерди түзөбүз'),
                buttons: {
                    startProject: getString('cta_primary', 'Долбоорду баштоо'),
                    viewCases: getString('cta_secondary', 'Мисалдарды көрүү')
                },
                metrics: {
                    projects: {
                        value: getString('metrics.projects.value', '50+'),
                        label: getString('metrics.projects.label', 'Долбоор')
                    },
                    savings: {
                        value: getString('metrics.savings.value', '$10M+'),
                        label: getString('metrics.savings.label', 'Кардарлардын үнөмү')
                    },
                    uptime: {
                        value: getString('metrics.uptime.value', '99.9%'),
                        label: getString('metrics.uptime.label', 'Жумуштоо убактысы')
                    },
                    experts: {
                        value: getString('metrics.experts.value', '25+'),
                        label: getString('metrics.experts.label', 'Адис')
                    }
                },
                features: getArray('features', [
                    '1-3 ай ичинде тез орнотуу',
                    'Кайтарымдуулук кепилдиги',
                    'Түнкү күндүзгү колдоо',
                    'Кайсы болбосун система менен интеграция'
                ])
            }
        } else {
            return {
                badge: getString('badge_text', 'Революция в корпоративных решениях'),
                title: {
                    line1: getString('title.line1', 'Искусственный'),
                    line2: getString('title.line2', 'интеллект'),
                    line3: getString('title.line3', 'для бизнеса')
                },
                subtitle: getString('subtitle', 'Создаем интеллектуальные решения, которые трансформируют способ работы крупнейших компаний Кыргызстана'),
                buttons: {
                    startProject: getString('cta_primary', 'Начать проект'),
                    viewCases: getString('cta_secondary', 'Посмотреть кейсы')
                },
                metrics: {
                    projects: {
                        value: getString('metrics.projects.value', '50+'),
                        label: getString('metrics.projects.label', 'Проектов')
                    },
                    savings: {
                        value: getString('metrics.savings.value', '$10M+'),
                        label: getString('metrics.savings.label', 'Экономии клиентов')
                    },
                    uptime: {
                        value: getString('metrics.uptime.value', '99.9%'),
                        label: getString('metrics.uptime.label', 'Аптайм')
                    },
                    experts: {
                        value: getString('metrics.experts.value', '25+'),
                        label: getString('metrics.experts.label', 'Экспертов')
                    }
                },
                features: getArray('features', [
                    'Быстрое внедрение за 1-3 месяца',
                    'Гарантированная окупаемость',
                    'Круглосуточная поддержка',
                    'Интеграция с любыми системами'
                ])
            }
        }
    }

    const translations = getTranslations()

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
                    {translations.badge}
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-tight">
                    {translations.title.line1}
                    <br />
                    <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-blue-400 bg-clip-text text-transparent">
                        {translations.title.line2}
                    </span>
                    <br />
                    {translations.title.line3}
                </h1>

                {/* Subtitle */}
                <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto mb-12 leading-relaxed font-light">
                    {translations.subtitle}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                    <Button
                        variant="primary"
                        size="xl"
                        className="hover:scale-105 transform transition-all duration-300 bg-blue-600 hover:bg-blue-700 shadow-xl"
                    >
                        {translations.buttons.startProject} →
                    </Button>

                    <Button
                        variant="outline"
                        size="xl"
                        className="hover:scale-105 transform transition-all duration-300 border-white/20 text-white hover:bg-white/10"
                    >
                        {translations.buttons.viewCases}
                    </Button>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap items-center justify-center gap-12 text-white/60">
                    <div className="text-center">
                        <div className="text-2xl font-bold text-white">{translations.metrics.projects.value}</div>
                        <div className="text-sm">{translations.metrics.projects.label}</div>
                    </div>
                    <div className="w-px h-8 bg-white/20" />
                    <div className="text-center">
                        <div className="text-2xl font-bold text-white">{translations.metrics.savings.value}</div>
                        <div className="text-sm">{translations.metrics.savings.label}</div>
                    </div>
                    <div className="w-px h-8 bg-white/20" />
                    <div className="text-center">
                        <div className="text-2xl font-bold text-white">{translations.metrics.uptime.value}</div>
                        <div className="text-sm">{translations.metrics.uptime.label}</div>
                    </div>
                    <div className="w-px h-8 bg-white/20" />
                    <div className="text-center">
                        <div className="text-2xl font-bold text-white">{translations.metrics.experts.value}</div>
                        <div className="text-sm">{translations.metrics.experts.label}</div>
                    </div>
                </div>

                {/* Features List */}
                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                    {translations.features.map((feature: string, index: number) => (
                        <div key={index} className="flex items-center justify-center gap-2 text-white/70 text-sm">
                            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {feature}
                        </div>
                    ))}
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