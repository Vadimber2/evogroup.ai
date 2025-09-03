'use client'

import React from 'react'
import { Button } from '@/components/ui/Button'

const SuccessStories: React.FC = () => {
    const caseStudies = [
        {
            id: 'banking-integration',
            industry: 'Банковский сектор',
            title: 'ИИ-система кредитования для крупнейшего банка КР',
            client: 'Ведущий банк Кыргызстана',
            challenge: 'Ручная обработка кредитных заявок занимала до 7 дней, высокий процент просроченной задолженности',
            solution: 'Внедрили ML-модель для автоматической оценки кредитоспособности и предиктивной аналитики рисков',
            results: [
                { value: '85%', metric: 'Сокращение времени обработки' },
                { value: '23%', metric: 'Снижение NPL' },
                { value: '$2.3M', metric: 'Экономия в год' }
            ]
        },
        {
            id: 'oil-automation',
            industry: 'Нефтегазовая отрасль',
            title: 'Автоматизация производственных процессов',
            client: 'НефтеГаз Кыргызстан',
            challenge: 'Частые простои оборудования, неэффективное планирование обслуживания',
            solution: 'Система предиктивного обслуживания на базе IoT и машинного обучения',
            results: [
                { value: '47%', metric: 'Снижение простоев' },
                { value: '31%', metric: 'Экономия на ремонте' },
                { value: '99.2%', metric: 'Точность прогнозов' }
            ]
        },
        {
            id: 'government-integration',
            industry: 'Государственный сектор',
            title: 'Цифровизация обращений граждан',
            client: 'Министерство цифрового развития КР',
            challenge: 'Низкая скорость обработки обращений, отсутствие аналитики',
            solution: 'Единая платформа с NLP для автоматической категоризации и маршрутизации обращений',
            results: [
                { value: '67%', metric: 'Ускорение обработки' },
                { value: '4.8/5', metric: 'Рейтинг граждан' },
                { value: '12', metric: 'Интегрированных ведомств' }
            ]
        }
    ]

    return (
        <section id="cases" className="py-24 bg-slate-800/30">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Истории успеха
                    </h2>
                    <p className="text-xl text-white/70 max-w-3xl mx-auto">
                        Реальные кейсы внедрения наших ИИ-решений в различных отраслях
                    </p>
                </div>

                <div className="space-y-16">
                    {caseStudies.map((study, index) => (
                        <div
                            key={study.id}
                            className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300"
                        >
                            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-0">
                                <div className="p-8 lg:p-12 order-2 lg:order-1">
                                    <div className="mb-4">
                    <span className="text-sm text-blue-400 font-medium bg-blue-400/10 px-3 py-1 rounded-full">
                      {study.industry}
                    </span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                                    <p className="text-white/60 mb-8 text-lg">{study.client}</p>

                                    <div className="space-y-6 mb-8">
                                        <div>
                                            <h4 className="font-semibold text-white mb-3">Задача:</h4>
                                            <p className="text-white/70 leading-relaxed">{study.challenge}</p>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-white mb-3">Решение:</h4>
                                            <p className="text-white/70 leading-relaxed">{study.solution}</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                                        {study.results.map((result) => (
                                            <div key={result.metric} className="text-center p-4 bg-white/10 rounded-xl border border-white/20">
                                                <div className="text-2xl font-bold text-blue-400 mb-1">{result.value}</div>
                                                <div className="text-xs text-white/60">{result.metric}</div>
                                            </div>
                                        ))}
                                    </div>

                                    <Button variant="primary" size="md">
                                        📄 Подробный кейс
                                    </Button>
                                </div>

                                <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8 lg:p-12 order-1 lg:order-2 flex items-center justify-center min-h-[300px]">
                                    <div className="text-center">
                                        <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-6 opacity-80">
                                            <span className="text-3xl">📊</span>
                                        </div>
                                        <h4 className="text-lg font-semibold text-white mb-4">Визуализация данных</h4>
                                        <p className="text-white/60 text-sm">
                                            Интерактивные дашборды и аналитика в реальном времени
                                        </p>
                                        <div className="mt-6 grid grid-cols-2 gap-3">
                                            <div className="bg-white/10 rounded-lg p-3 text-center">
                                                <div className="text-lg font-bold text-blue-400">Real-time</div>
                                                <div className="text-xs text-white/60">Мониторинг</div>
                                            </div>
                                            <div className="bg-white/10 rounded-lg p-3 text-center">
                                                <div className="text-lg font-bold text-green-400">AI-driven</div>
                                                <div className="text-xs text-white/60">Аналитика</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SuccessStories