'use client'

import React from 'react'

const TrustSignals: React.FC = () => {
    const certifications = [
        { name: 'ISO 27001', icon: '🏆', description: 'Сертификация безопасности' },
        { name: 'API Partner', icon: '🤝', description: 'Официальный партнер госорганов' },
        { name: 'AI Certified', icon: '🧠', description: 'Сертифицированные ИИ-решения' },
    ]

    const stats = [
        { value: '10+', label: 'Лет на рынке', icon: '⭐' },
        { value: '50+', label: 'Крупных клиентов', icon: '🏢' },
        { value: '99.9%', label: 'Надежность систем', icon: '🛡️' },
        { value: '24/7', label: 'Техподдержка', icon: '📞' },
    ]

    const clients = [
        { icon: '🏦', name: 'Крупнейший банк КР', color: 'from-blue-500 to-blue-600' },
        { icon: '🏭', name: 'НефтеПром КР', color: 'from-orange-500 to-orange-600' },
        { icon: '🏛️', name: 'Министерство цифрового развития', color: 'from-purple-500 to-purple-600' },
        { icon: '🏢', name: 'Корпорация развития КР', color: 'from-green-500 to-green-600' },
    ]

    return (
        <section id="trust" className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Нам доверяют лидеры рынка
                    </h2>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto">
                        Работаем с крупнейшими банками, промышленными компаниями и государственными организациями
                    </p>
                </div>

                {/* Client logos */}
                <div className="mb-16">
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                        <p className="text-center text-sm text-white/60 mb-8 uppercase tracking-wider">
                            Наши ключевые клиенты
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {clients.map((client) => (
                                <div
                                    key={client.name}
                                    className="flex flex-col items-center justify-center p-6 hover:bg-white/10 rounded-lg transition-all duration-200 group"
                                >
                                    <div className={`mb-4 w-16 h-16 bg-gradient-to-br ${client.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                                        <span className="text-2xl">{client.icon}</span>
                                    </div>
                                    <span className="text-sm text-white/80 text-center">{client.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300 border border-white/10"
                        >
                            <div className="text-3xl mb-3">{stat.icon}</div>
                            <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                            <div className="text-sm text-white/60">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Certifications */}
                <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                    <h3 className="text-2xl font-bold text-center text-white mb-8">
                        Сертификации и партнерства
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        {certifications.map((cert) => (
                            <div
                                key={cert.name}
                                className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors duration-200"
                            >
                                <div className="bg-white/20 rounded-full p-3 text-2xl">
                                    {cert.icon}
                                </div>
                                <div>
                                    <div className="font-semibold text-white text-lg">{cert.name}</div>
                                    <div className="text-sm text-white/70">{cert.description}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Trust message */}
                <div className="text-center mt-16">
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-4xl mx-auto">
                        <p className="text-lg text-white/90 italic mb-4">
                            "ФискалеПро - единственная компания в Кыргызстане с полной интеграцией государственных API
                            и экспертизой в области искусственного интеллекта для enterprise-решений"
                        </p>
                        <p className="text-sm text-white/60">
                            — Ассоциация IT-компаний Кыргызстана
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TrustSignals