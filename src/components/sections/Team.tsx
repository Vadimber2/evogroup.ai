'use client'

export default function Team() {
    return (
        <section className="px-6 py-24 bg-slate-800/30">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Наша команда
                    </h2>
                    <p className="text-xl text-white/70">
                        Опытные специалисты в области искусственного интеллекта
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* CEO Card */}
                    <div className="text-center group">
                        <div className="relative mb-6">
                            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1">
                                <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center text-4xl font-bold text-white">
                                    АП
                                </div>
                            </div>
                            <div className="absolute inset-0 rounded-full bg-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                            Алексей Петров
                        </h3>
                        <p className="text-blue-400 font-semibold mb-2">
                            CEO & AI Architect
                        </p>
                        <p className="text-white/60 text-sm">
                            15+ лет в ИИ
                        </p>
                    </div>

                    {/* CTO Card */}
                    <div className="text-center group">
                        <div className="relative mb-6">
                            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-purple-400 to-pink-600 p-1">
                                <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center text-4xl font-bold text-white">
                                    МИ
                                </div>
                            </div>
                            <div className="absolute inset-0 rounded-full bg-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                            Мария Иванова
                        </h3>
                        <p className="text-purple-400 font-semibold mb-2">
                            CTO & ML Engineer
                        </p>
                        <p className="text-white/60 text-sm">
                            12+ лет в ML/DL
                        </p>
                    </div>

                    {/* Lead Developer Card */}
                    <div className="text-center group">
                        <div className="relative mb-6">
                            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-green-400 to-blue-600 p-1">
                                <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center text-4xl font-bold text-white">
                                    БО
                                </div>
                            </div>
                            <div className="absolute inset-0 rounded-full bg-green-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                            Бекзат Омуралиев
                        </h3>
                        <p className="text-green-400 font-semibold mb-2">
                            Lead Developer
                        </p>
                        <p className="text-white/60 text-sm">
                            10+ лет в разработке
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}