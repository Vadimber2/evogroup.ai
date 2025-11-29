'use client'

import { I18nProvider } from '@/components/providers/I18nProvider'
import ModernHeader from '@/components/sections/ModernHeader'
import Solutions from '@/components/sections/Solutions'
import CompetitiveAdvantages from '@/components/sections/CompetitiveAdvantages'
import Footer from '@/components/sections/Footer'

export default function SolutionsPage() {
    return (
        <I18nProvider initialLocale="ru">
            <div className="relative min-h-screen bg-black">
                {/* Background gradients */}
                <div className="fixed inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-blue-500/20 rounded-full blur-[120px] animate-float" />
                    <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[100px] animate-float" style={{animationDelay: '2s'}} />
                </div>

                <ModernHeader />

                {/* Page header */}
                <section className="relative pt-32 pb-16">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            Решения для вашего бизнеса
                        </h1>
                        <p className="text-xl text-white/70 max-w-3xl mx-auto">
                            AI-системы, адаптированные под уникальные задачи вашей отрасли
                        </p>
                    </div>
                </section>

                <Solutions />
                <CompetitiveAdvantages />
                <Footer />
            </div>
        </I18nProvider>
    )
}
