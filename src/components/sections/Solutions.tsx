'use client'

export default function Solutions() {
    return (
        <section className="px-6 py-24 bg-slate-800/50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Наши решения
                    </h2>
                    <p className="text-xl text-white/70 max-w-3xl mx-auto">
                        Разрабатываем ИИ-системы для разных отраслей бизнеса
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Banking Card */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105 border border-white/10">
                        <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Банковские решения
                        </h3>
                        <p className="text-white/70 leading-relaxed">
                            Автоматизация кредитных решений, анализ рисков и персонализация продуктов
                        </p>
                    </div>

                    {/* Government Card */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105 border border-white/10">
                        <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Государственный сектор
                        </h3>
                        <p className="text-white/70 leading-relaxed">
                            Цифровизация услуг, анализ данных и оптимизация процессов
                        </p>
                    </div>

                    {/* Energy Card */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105 border border-white/10">
                        <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Нефть и газ
                        </h3>
                        <p className="text-white/70 leading-relaxed">
                            Предиктивная аналитика, оптимизация добычи и мониторинг оборудования
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
