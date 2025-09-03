'use client'

import React from 'react'

const CompetitiveAdvantages: React.FC = () => {
    // Временно используем статичные данные, потом подключим из data
    const advantages = [
        {
            title: "Экспертиза в ИИ",
            description: "15+ лет опыта в разработке решений искусственного интеллекта",
            icon: "🧠"
        },
        {
            title: "Быстрое внедрение",
            description: "Готовые решения и API для интеграции за считанные дни",
            icon: "⚡"
        },
        {
            title: "24/7 Поддержка",
            description: "Круглосуточная техническая поддержка и мониторинг систем",
            icon: "🛡️"
        },
        {
            title: "Гибкость решений",
            description: "Адаптируем технологии под специфику вашего бизнеса",
            icon: "🔧"
        }
    ]

    return (
        <section className="py-24 bg-slate-800/30">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Почему выбирают нас
                    </h2>
                    <p className="text-xl text-white/70 max-w-3xl mx-auto">
                        Мы не просто разрабатываем ПО — мы создаем интеллектуальные экосистемы
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {advantages.map((advantage, index) => (
                        <div
                            key={advantage.title}
                            className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105 border border-white/10"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-3xl">{advantage.icon}</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">{advantage.title}</h3>
                            <p className="text-white/70 text-sm leading-relaxed">{advantage.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CompetitiveAdvantages
