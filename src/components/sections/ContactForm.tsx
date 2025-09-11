'use client'

import { Button } from '@/components/ui/Button'

export default function ContactForm() {
    return (
        <section className="px-6 py-24" id="contact">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Хотите подробную консультацию по вашему проекту?
                    </h2>
                    <p className="text-xl text-white/70">
                        Расскажите о вашей задаче, и наши эксперты предложат оптимальное ИИ-решение с учетом специфики вашего бизнеса
                    </p>
                </div>

                <form className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label className="block text-white/70 text-sm font-medium mb-3">
                                Имя *
                            </label>
                            <input
                                type="text"
                                required
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                placeholder="Ваше имя"
                            />
                        </div>
                        <div>
                            <label className="block text-white/70 text-sm font-medium mb-3">
                                Email *
                            </label>
                            <input
                                type="email"
                                required
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                placeholder="your@email.com"
                            />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label className="block text-white/70 text-sm font-medium mb-3">
                                Компания *
                            </label>
                            <input
                                type="text"
                                required
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                placeholder="Название компании"
                            />
                        </div>
                        <div>
                            <label className="block text-white/70 text-sm font-medium mb-3">
                                Телефон
                            </label>
                            <input
                                type="tel"
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                placeholder="+996 XXX XXX XXX"
                            />
                        </div>
                    </div>

                    <div className="mb-6">
                        <label className="block text-white/70 text-sm font-medium mb-3">
                            Тип проекта
                        </label>
                        <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
                            <option value="">Выберите тип проекта</option>
                            <option value="analytics">Аналитика данных</option>
                            <option value="chatbot">Чат-бот</option>
                            <option value="fraud">Антифрод система</option>
                            <option value="predictive">Предиктивная аналитика</option>
                            <option value="documents">Обработка документов</option>
                            <option value="vision">Компьютерное зрение</option>
                            <option value="other">Другое</option>
                        </select>
                    </div>

                    <div className="mb-8">
                        <label className="block text-white/70 text-sm font-medium mb-3">
                            Описание задачи *
                        </label>
                        <textarea
                            rows={5}
                            required
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                            placeholder="Опишите вашу бизнес-задачу, которую хотите решить с помощью ИИ. Чем подробнее - тем точнее мы сможем оценить проект и предложить решение."
                        />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button
                            type="submit"
                            variant="primary"
                            size="xl"
                            className="flex-1 bg-blue-600 hover:bg-blue-700"
                        >
                            Получить консультацию
                        </Button>
                        <Button
                            type="button"
                            variant="outline"
                            size="xl"
                            className="flex-1 border-white/20 text-white hover:bg-white/10"
                        >
                            Скачать презентацию
                        </Button>
                    </div>

                    <p className="text-white/50 text-xs mt-4 text-center">
                        Отправляя форму, вы соглашаетесь с обработкой персональных данных
                    </p>
                </form>
            </div>
        </section>
    )
}