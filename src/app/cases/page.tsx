'use client'

import { I18nProvider } from '@/components/providers/I18nProvider'
import ModernHeader from '@/components/sections/ModernHeader'
import AIChatbotSection from '@/components/sections/AIChatbotSection'
import Footer from '@/components/sections/Footer'

export default function CasesPage() {
    return (
        <I18nProvider initialLocale="ru">
            <div className="relative min-h-screen bg-black">
                {/* Background gradients */}
                <div className="fixed inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-green-500/20 rounded-full blur-[120px] animate-float" />
                    <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[100px] animate-float" style={{animationDelay: '2s'}} />
                </div>

                <ModernHeader />

                {/* Minimal page header */}
                <div className="relative pt-32 pb-12">
                    <div className="max-w-7xl mx-auto px-6">
                        <p className="text-sm uppercase tracking-wider text-white/50 mb-3">Портфолио</p>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Наши проекты
                        </h1>
                        <p className="text-lg text-white/60 max-w-2xl">
                            Реальные кейсы внедрения AI-решений
                        </p>
                    </div>
                </div>

                <AIChatbotSection />
                <Footer />
            </div>
        </I18nProvider>
    )
}
