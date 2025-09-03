'use client'

import { Button } from '@/components/ui/Button'

export default function ContactForm() {
    return (
        <section className="px-6 py-24">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Готовы начать проект?
                    </h2>
                    <p className="text-xl text-white/70">
                        Расскажите о вашей задаче, и мы предложим оптимальное решение
                    </p>
                </div>

                <form className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label className="block text-white/70 text-sm font-medium mb-3">
                                Имя
                            </label>
                            <input
                                type="text"
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                placeholder="Имя"
                            />
                        </div>
                        <div>
                            <label className="block text-white/70 text-sm font-medium mb-3">
                                Email
                            </label>
                            <input
                                type="email"
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                placeholder="Email"
                            />
                        </div>
                    </div>

                    <div className="mb-6">
                        <label className="block text-white/70 text-sm font-medium mb-3">
                            Компания
                        </label>
                        <input
                            type="text"
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            placeholder="Компания"
                        />
                    </div>

                    <div className="mb-8">
                        <label className="block text-white/70 text-sm font-medium mb-3">
                            Сообщение
                        </label>
                        <textarea
                            rows={5}
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                            placeholder="Сообщение"
                        />
                    </div>

                    <Button
                        type="submit"
                        variant="primary"
                        size="xl"
                        className="w-full"
                    >
                        Отправить заявку
                    </Button>
                </form>
            </div>
        </section>
    )
}
