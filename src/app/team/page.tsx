'use client'

import { I18nProvider } from '@/components/providers/I18nProvider'
import ModernHeader from '@/components/sections/ModernHeader'
import Team from '@/components/sections/Team'
import TrustSignals from '@/components/sections/TrustSignals'
import Footer from '@/components/sections/Footer'

export default function TeamPage() {
    return (
        <I18nProvider initialLocale="ru">
            <div className="relative min-h-screen bg-black">
                {/* Background gradients */}
                <div className="fixed inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-pink-500/20 rounded-full blur-[120px] animate-float" />
                    <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[100px] animate-float" style={{animationDelay: '2s'}} />
                </div>

                <ModernHeader />

                {/* Minimal page header */}
                <div className="relative pt-32 pb-12">
                    <div className="max-w-7xl mx-auto px-6">
                        <p className="text-sm uppercase tracking-wider text-white/50 mb-3">Команда</p>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Эксперты в AI
                        </h1>
                        <p className="text-lg text-white/60 max-w-2xl">
                            Профессионалы с опытом в машинном обучении
                        </p>
                    </div>
                </div>

                <Team />
                <TrustSignals />
                <Footer />
            </div>
        </I18nProvider>
    )
}
