'use client'

import React, { useState } from 'react'
import { useTranslation } from '@/components/providers/I18nProvider'
import {
    BarChart,
    PieChart,
    AnimatedMetric,
    ComparisonChart,
    RadialProgress,
    RealtimeMetrics,
    FinancialDashboard,
    DashboardPreview
} from '@/components/charts/Charts'

const AnalyticsShowcase: React.FC = () => {
    const { t, locale } = useTranslation()
    const [activeTab, setActiveTab] = useState('banking')

    // Переводы для всех языков
    const getTranslations = () => {
        if (locale === 'en') {
            return {
                title: 'Real-time Analytics',
                subtitle: 'Our AI solutions provide detailed analytics and monitoring of key performance indicators',
                readyToImplement: 'Ready to implement analytics in your business?',
                readySubtitle: 'Get a personalized demo of our AI solutions for your industry',
                requestDemo: 'Request Demo',
                downloadPresentation: 'Download Presentation',
                tabs: {
                    banking: {
                        label: 'Banking Sector',
                        description: 'Real-time analytics of credit risks and financial indicators'
                    },
                    manufacturing: {
                        label: 'Manufacturing',
                        description: 'Production process monitoring and predictive maintenance'
                    },
                    government: {
                        label: 'Government',
                        description: 'Analytics of citizen requests processing and service efficiency'
                    }
                },
                banking: {
                    financialDashboard: 'Financial Dashboard',
                    keyMetrics: 'Key Metrics',
                    scoringAccuracy: 'Scoring Accuracy',
                    yearSavings: 'Annual Savings',
                    timeReduction: 'Time Reduction',
                    clientRating: 'Client Rating'
                },
                manufacturing: {
                    productivity: 'Productivity',
                    efficiency: 'Efficiency',
                    overallEfficiency: 'Overall Efficiency',
                    safety: 'Safety',
                    safetyLevel: 'Safety Level',
                    performanceComparison: 'Performance Comparison'
                },
                government: {
                    quarterlyProcessing: 'Quarterly Processing',
                    requestDistribution: 'Request Distribution',
                    solvedOnTime: 'Solved On Time',
                    citizenRating: 'Citizen Rating'
                }
            }
        } else if (locale === 'ky') {
            return {
                title: 'Реалдуу убактагы аналитика',
                subtitle: 'Биздин ИИ чечимдери негизги көрсөткүчтөрдүн толук аналитикасын жана мониторингин камсыз кылат',
                readyToImplement: 'Бизнесиңизге аналитиканы киргизүүгө дайынсызбы?',
                readySubtitle: 'Тармагыңыз үчүн биздин ИИ чечимдеринин жекелештирилген демострациясын алыңыз',
                requestDemo: 'Демо сураңыз',
                downloadPresentation: 'Презентацияны жүктөө',
                tabs: {
                    banking: {
                        label: 'Банк сектору',
                        description: 'Кредиттик тобокелдиктерди жана каржылык көрсөткүчтөрдү реалдуу убакта талдоо'
                    },
                    manufacturing: {
                        label: 'Өндүрүш',
                        description: 'Өндүрүш процесстерин мониторинг жана алдын ала тейлөө'
                    },
                    government: {
                        label: 'Мамлекеттик сектор',
                        description: 'Жарандардын кайрылууларын иштетүү жана кызматтардын натыйжалуулугун талдоо'
                    }
                },
                banking: {
                    financialDashboard: 'Каржылык дашборд',
                    keyMetrics: 'Негизги көрсөткүчтөр',
                    scoringAccuracy: 'Скоринг тактыгы',
                    yearSavings: 'Жылдык үнөмдөө',
                    timeReduction: 'Убакытты кыскартуу',
                    clientRating: 'Кардар баасы'
                },
                manufacturing: {
                    productivity: 'Продуктивдүүлүк',
                    efficiency: 'Натыйжалуулук',
                    overallEfficiency: 'Жалпы натыйжалуулук',
                    safety: 'Коопсуздук',
                    safetyLevel: 'Коопсуздук деңгээли',
                    performanceComparison: 'Көрсөткүчтөрдү салыштыруу'
                },
                government: {
                    quarterlyProcessing: 'Чейрек боюнча иштетүү',
                    requestDistribution: 'Кайрылуулардын бөлүштүрүү',
                    solvedOnTime: 'Мөөнөтүндө чечилди',
                    citizenRating: 'Жарандардын баасы'
                }
            }
        } else {
            return {
                title: 'Аналитика в реальном времени',
                subtitle: 'Наши ИИ-решения предоставляют детальную аналитику и мониторинг ключевых показателей',
                readyToImplement: 'Готовы внедрить аналитику в вашем бизнесе?',
                readySubtitle: 'Получите персонализированную демонстрацию наших ИИ-решений для вашей отрасли',
                requestDemo: 'Запросить демо',
                downloadPresentation: 'Скачать презентацию',
                tabs: {
                    banking: {
                        label: 'Банковский сектор',
                        description: 'Real-time аналитика кредитных рисков и финансовых показателей'
                    },
                    manufacturing: {
                        label: 'Производство',
                        description: 'Мониторинг производственных процессов и предиктивное обслуживание'
                    },
                    government: {
                        label: 'Госсектор',
                        description: 'Аналитика обработки обращений граждан и эффективности услуг'
                    }
                },
                banking: {
                    financialDashboard: 'Финансовый дашборд',
                    keyMetrics: 'Ключевые метрики',
                    scoringAccuracy: 'Точность скоринга',
                    yearSavings: 'Экономия в год',
                    timeReduction: 'Сокращение времени',
                    clientRating: 'Рейтинг клиентов'
                },
                manufacturing: {
                    productivity: 'Производительность',
                    efficiency: 'Эффективность',
                    overallEfficiency: 'Общая эффективность',
                    safety: 'Безопасность',
                    safetyLevel: 'Уровень безопасности',
                    performanceComparison: 'Сравнение показателей'
                },
                government: {
                    quarterlyProcessing: 'Обработка по кварталам',
                    requestDistribution: 'Распределение обращений',
                    solvedOnTime: 'Решено в срок',
                    citizenRating: 'Оценка граждан'
                }
            }
        }
    }

    const translations = getTranslations()

    // Табы с переводами
    const getTabs = () => [
        {
            id: 'banking',
            label: translations.tabs.banking.label,
            icon: '🏦',
            description: translations.tabs.banking.description
        },
        {
            id: 'manufacturing',
            label: translations.tabs.manufacturing.label,
            icon: '🏭',
            description: translations.tabs.manufacturing.description
        },
        {
            id: 'government',
            label: translations.tabs.government.label,
            icon: '🏛️',
            description: translations.tabs.government.description
        }
    ]

    const tabs = getTabs()

    const renderTabContent = () => {
        switch(activeTab) {
            case 'banking':
                return (
                    <div className="space-y-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                                <h4 className="text-lg font-semibold text-white mb-4">{translations.banking.financialDashboard}</h4>
                                <FinancialDashboard />
                            </div>
                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                                <h4 className="text-lg font-semibold text-white mb-6">{translations.banking.keyMetrics}</h4>
                                <div className="grid grid-cols-2 gap-4">
                                    <AnimatedMetric
                                        value={85}
                                        suffix="%"
                                        label={translations.banking.scoringAccuracy}
                                        trend="up"
                                        trendValue="+12%"
                                    />
                                    <AnimatedMetric
                                        value={2.3}
                                        suffix="M$"
                                        label={translations.banking.yearSavings}
                                        trend="up"
                                        trendValue="+23%"
                                    />
                                    <AnimatedMetric
                                        value={67}
                                        suffix="%"
                                        label={translations.banking.timeReduction}
                                        trend="up"
                                        trendValue="+15%"
                                    />
                                    <AnimatedMetric
                                        value={4.8}
                                        suffix="/5"
                                        label={translations.banking.clientRating}
                                        trend="up"
                                        trendValue="+0.3"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )

            case 'manufacturing':
                return (
                    <div className="space-y-8">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                                <h4 className="text-lg font-semibold text-white mb-4">{translations.manufacturing.productivity}</h4>
                                <RealtimeMetrics />
                            </div>
                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                                <h4 className="text-lg font-semibold text-white mb-4">{translations.manufacturing.efficiency}</h4>
                                <div className="flex justify-center">
                                    <RadialProgress
                                        value={94}
                                        label={translations.manufacturing.overallEfficiency}
                                        className="w-32 h-32"
                                    />
                                </div>
                            </div>
                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                                <h4 className="text-lg font-semibold text-white mb-4">{translations.manufacturing.safety}</h4>
                                <div className="flex justify-center">
                                    <RadialProgress
                                        value={89}
                                        label={translations.manufacturing.safetyLevel}
                                        className="w-32 h-32"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                            <h4 className="text-lg font-semibold text-white mb-4">{translations.manufacturing.performanceComparison}</h4>
                            <ComparisonChart />
                        </div>
                    </div>
                )

            case 'government':
                return (
                    <div className="space-y-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                                <h4 className="text-lg font-semibold text-white mb-4">{translations.government.quarterlyProcessing}</h4>
                                <BarChart />
                            </div>
                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                                <h4 className="text-lg font-semibold text-white mb-4">{translations.government.requestDistribution}</h4>
                                <div className="flex justify-center">
                                    <PieChart className="w-56 h-56" />
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-green-500/20">
                                <AnimatedMetric
                                    value={87}
                                    suffix="%"
                                    label={translations.government.solvedOnTime}
                                    trend="up"
                                    trendValue="+12%"
                                />
                            </div>
                            <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-blue-500/20">
                                <AnimatedMetric
                                    value={4.8}
                                    suffix="/5"
                                    label={translations.government.citizenRating}
                                    trend="up"
                                    trendValue="+0.3"
                                />
                            </div>
                        </div>
                    </div>
                )

            default:
                return <DashboardPreview />
        }
    }

    return (
        <section className="py-24 bg-slate-900/95 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        {translations.title}
                    </h2>
                    <p className="text-xl text-white/70 max-w-3xl mx-auto">
                        {translations.subtitle}
                    </p>
                </div>

                {/* Tab Navigation */}
                <div className="flex flex-col sm:flex-row justify-center mb-12 gap-4">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-6 py-4 rounded-xl transition-all duration-200 flex items-center space-x-3 ${
                                activeTab === tab.id
                                    ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                                    : 'bg-white/10 text-white/80 hover:bg-white/20 hover:text-white backdrop-blur-sm border border-white/20'
                            }`}
                        >
                            <span className="text-xl">{tab.icon}</span>
                            <div className="text-left">
                                <div className="font-semibold">{tab.label}</div>
                                <div className={`text-xs ${activeTab === tab.id ? 'text-white/90' : 'text-white/60'}`}>
                                    {tab.description}
                                </div>
                            </div>
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="min-h-[600px]">
                    {renderTabContent()}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold text-white mb-4">
                            {translations.readyToImplement}
                        </h3>
                        <p className="text-white/70 mb-6">
                            {translations.readySubtitle}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                                {translations.requestDemo}
                            </button>
                            <button className="border border-white/20 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-200 backdrop-blur-sm">
                                {translations.downloadPresentation}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AnalyticsShowcase