'use client'

import React, { useState } from 'react'
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
    const [activeTab, setActiveTab] = useState('banking')

    const tabs = [
        {
            id: 'banking',
            label: 'Банковский сектор',
            icon: '🏦',
            description: 'Real-time аналитика кредитных рисков и финансовых показателей'
        },
        {
            id: 'manufacturing',
            label: 'Производство',
            icon: '🏭',
            description: 'Мониторинг производственных процессов и предиктивное обслуживание'
        },
        {
            id: 'government',
            label: 'Госсектор',
            icon: '🏛️',
            description: 'Аналитика обработки обращений граждан и эффективности услуг'
        }
    ]

    const renderTabContent = () => {
        switch(activeTab) {
            case 'banking':
                return (
                    <div className="space-y-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                                <h4 className="text-lg font-semibold text-white mb-4">Финансовый дашборд</h4>
                                <FinancialDashboard />
                            </div>
                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                                <h4 className="text-lg font-semibold text-white mb-6">Ключевые метрики</h4>
                                <div className="grid grid-cols-2 gap-4">
                                    <AnimatedMetric value={85} suffix="%" label="Точность скоринга" trend="up" trendValue="+12%" />
                                    <AnimatedMetric value={2.3} suffix="M$" label="Экономия в год" trend="up" trendValue="+23%" />
                                    <AnimatedMetric value={67} suffix="%" label="Сокращение времени" trend="up" trendValue="+15%" />
                                    <AnimatedMetric value={4.8} suffix="/5" label="Рейтинг клиентов" trend="up" trendValue="+0.3" />
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
                                <h4 className="text-lg font-semibold text-white mb-4">Производительность</h4>
                                <RealtimeMetrics />
                            </div>
                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                                <h4 className="text-lg font-semibold text-white mb-4">Эффективность</h4>
                                <div className="flex justify-center">
                                    <RadialProgress value={94} label="Общая эффективность" className="w-32 h-32" />
                                </div>
                            </div>
                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                                <h4 className="text-lg font-semibold text-white mb-4">Безопасность</h4>
                                <div className="flex justify-center">
                                    <RadialProgress value={89} label="Уровень безопасности" className="w-32 h-32" />
                                </div>
                            </div>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                            <h4 className="text-lg font-semibold text-white mb-4">Сравнение показателей</h4>
                            <ComparisonChart />
                        </div>
                    </div>
                )

            case 'government':
                return (
                    <div className="space-y-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                                <h4 className="text-lg font-semibold text-white mb-4">Обработка по кварталам</h4>
                                <BarChart />
                            </div>
                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                                <h4 className="text-lg font-semibold text-white mb-4">Распределение обращений</h4>
                                <div className="flex justify-center">
                                    <PieChart className="w-56 h-56" />
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-green-500/20">
                                <AnimatedMetric value={87} suffix="%" label="Решено в срок" trend="up" trendValue="+12%" />
                            </div>
                            <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-blue-500/20">
                                <AnimatedMetric value={4.8} suffix="/5" label="Оценка граждан" trend="up" trendValue="+0.3" />
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
                        Аналитика в реальном времени
                    </h2>
                    <p className="text-xl text-white/70 max-w-3xl mx-auto">
                        Наши ИИ-решения предоставляют детальную аналитику и мониторинг ключевых показателей
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
                            Готовы внедрить аналитику в вашем бизнесе?
                        </h3>
                        <p className="text-white/70 mb-6">
                            Получите персонализированную демонстрацию наших ИИ-решений для вашей отрасли
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                                Запросить демо
                            </button>
                            <button className="border border-white/20 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-200 backdrop-blur-sm">
                                Скачать презентацию
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AnalyticsShowcase
