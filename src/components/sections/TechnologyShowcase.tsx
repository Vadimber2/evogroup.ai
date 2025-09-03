'use client'

import React from 'react'

const TechnologyShowcase: React.FC = () => {
    const technologies = [
        {
            category: 'Искусственный интеллект',
            items: [
                { name: 'Machine Learning', icon: '🧠', description: 'Предиктивная аналитика и автоматизация' },
                { name: 'NLP', icon: '📝', description: 'Обработка естественного языка' },
                { name: 'Computer Vision', icon: '👁️', description: 'Компьютерное зрение для контроля' },
            ]
        },
        {
            category: 'Интеграции',
            items: [
                { name: 'API Gateway', icon: '🔗', description: 'Единая точка доступа к госсервисам' },
                { name: 'Microservices', icon: '🧩', description: 'Масштабируемая архитектура' },
                { name: 'Real-time Sync', icon: '⚡', description: 'Синхронизация в реальном времени' },
            ]
        },
        {
            category: 'Безопасность',
            items: [
                { name: 'Encryption', icon: '🛡️', description: '256-bit шифрование данных' },
                { name: 'Compliance', icon: '📜', description: 'Соответствие стандартам' },
                { name: 'Monitoring', icon: '📊', description: '24/7 мониторинг систем' },
            ]
        }
    ]

    return (
        <section id="technology" className="py-24 bg-slate-800/50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Передовые технологии
                    </h2>
                    <p className="text-xl text-white/70 max-w-3xl mx-auto">
                        Используем самые современные технологии для создания надежных и эффективных решений
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {technologies.map((tech, index) => (
                        <div
                            key={tech.category}
                            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300"
                        >
                            <h3 className="text-2xl font-bold text-white mb-8">{tech.category}</h3>
                            <div className="space-y-6">
                                {tech.items.map((item) => (
                                    <div key={item.name} className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <span className="text-xl">{item.icon}</span>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-white text-lg mb-2">{item.name}</h4>
                                            <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full border border-white/20">
                        <span className="text-xl">🏆</span>
                        <span className="font-medium">Все технологии сертифицированы и протестированы</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TechnologyShowcase