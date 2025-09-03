'use client'

import AnimatedCounter from '../ui/AnimatedCounter'

export default function Hero() {
    return (
        <main className="px-6 py-16 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-white">
                Искусственный интеллект для бизнеса
            </h1>

            <p className="text-xl text-white/80 mb-12 max-w-4xl mx-auto">
                Создаем интеллектуальные решения для крупнейших компаний Кыргызстана
            </p>

            <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
                <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl text-white">
                    Начать проект →
                </button>
                <button className="border border-white/20 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/10 transition-all duration-200 backdrop-blur-sm text-white">
                    Посмотреть кейсы
                </button>
            </div>

            {/* Статистики с анимированными счетчиками */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
                <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">
                        <AnimatedCounter end={50} suffix="+" />
                    </div>
                    <div className="text-white/60">Проектов</div>
                </div>
                <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">
                        <AnimatedCounter end={10} prefix="$" suffix="M+" />
                    </div>
                    <div className="text-white/60">Экономии клиентов</div>
                </div>
                <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">
                        <AnimatedCounter end={99.9} suffix="%" />
                    </div>
                    <div className="text-white/60">Аптайм</div>
                </div>
                <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">
                        <AnimatedCounter end={25} suffix="+" />
                    </div>
                    <div className="text-white/60">Экспертов</div>
                </div>
            </div>
        </main>
    )
}
