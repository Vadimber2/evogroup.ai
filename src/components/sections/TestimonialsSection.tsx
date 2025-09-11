'use client'

import React, { useState, useEffect } from 'react'

interface Testimonial {
    id: number
    name: string
    position: string
    company: string
    content: string
    avatar: string
    rating: number
    project: string
}

const TestimonialsSection: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    const testimonials: Testimonial[] = [
        {
            id: 1,
            name: "Алмаз Сыдыков",
            position: "Директор по IT",
            company: "Демир Банк",
            content: "ФискалеПро полностью трансформировала наши процессы кредитного скоринга. Точность оценки рисков выросла на 35%, а время обработки заявок сократилось в 3 раза. Невероятные результаты за такой короткий срок внедрения.",
            avatar: "AS",
            rating: 5,
            project: "Система кредитного скоринга"
        },
        {
            id: 2,
            name: "Гульнара Токтосунова",
            position: "Заместитель председателя",
            company: "Министерство цифрового развития КР",
            content: "Автоматизация обработки обращений граждан с помощью ИИ позволила увеличить скорость рассмотрения на 60%. Качество и прозрачность государственных услуг вышли на новый уровень.",
            avatar: "ГТ",
            rating: 5,
            project: "Цифровые госуслуги"
        },
        {
            id: 3,
            name: "Мирлан Жапаров",
            position: "Генеральный директор",
            company: "КыргызГаз",
            content: "Предиктивная аналитика для обслуживания газопроводов снизила аварийные ситуации на 45% и сэкономила нам более $2М в год. Команда ФискалеПро - настоящие профессионалы своего дела.",
            avatar: "МЖ",
            rating: 5,
            project: "Предиктивное обслуживание"
        },
        {
            id: 4,
            name: "Айгуль Омурзакова",
            position: "Финансовый директор",
            company: "KICB",
            content: "ИИ-система для определения мошеннических операций работает круглосуточно и блокирует 98% подозрительных транзакций. Потери от мошенничества снизились в 8 раз.",
            avatar: "АО",
            rating: 5,
            project: "Антифрод система"
        }
    ]

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000)
        return () => clearInterval(timer)
    }, [])

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, i) => (
            <svg
                key={i}
                className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
            >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ))
    }

    return (
        <section className="py-24 bg-slate-800/30 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm text-white/80 shadow-sm mb-6">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        Отзывы наших клиентов
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Результаты говорят за нас
                    </h2>
                    <p className="text-xl text-white/70 max-w-3xl mx-auto">
                        Более 50 успешных проектов для ведущих компаний и организаций Кыргызстана
                    </p>
                </div>

                {/* Testimonial Slider */}
                <div className="relative max-w-5xl mx-auto">
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10 shadow-xl">
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            {/* Avatar and Company Info */}
                            <div className="flex-shrink-0 text-center md:text-left">
                                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-violet-600 rounded-full flex items-center justify-center text-white text-xl font-bold mb-4 mx-auto md:mx-0">
                                    {testimonials[currentSlide].avatar}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-1">
                                    {testimonials[currentSlide].name}
                                </h3>
                                <p className="text-white/70 text-sm mb-1">
                                    {testimonials[currentSlide].position}
                                </p>
                                <p className="text-white/60 text-sm mb-3">
                                    {testimonials[currentSlide].company}
                                </p>
                                <div className="flex justify-center md:justify-start mb-3">
                                    {renderStars(testimonials[currentSlide].rating)}
                                </div>
                                <div className="inline-block px-3 py-1 bg-blue-500/20 rounded-full text-blue-300 text-xs">
                                    {testimonials[currentSlide].project}
                                </div>
                            </div>

                            {/* Testimonial Content */}
                            <div className="flex-1">
                                <svg className="w-8 h-8 text-blue-400/40 mb-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
                                    <path d="M13.583 17.321c-1.03-1.094-1.583-2.321-1.583-4.31 0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
                                </svg>
                                <p className="text-white/90 text-lg leading-relaxed mb-6">
                                    {testimonials[currentSlide].content}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Dots Indicator */}
                    <div className="flex justify-center mt-8 gap-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                                    index === currentSlide
                                        ? 'bg-blue-500 scale-125'
                                        : 'bg-white/30 hover:bg-white/50'
                                }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
                    <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                        <div className="text-3xl font-bold text-white mb-2">50+</div>
                        <div className="text-white/60 text-sm">Довольных клиентов</div>
                    </div>
                    <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                        <div className="text-3xl font-bold text-white mb-2">95%</div>
                        <div className="text-white/60 text-sm">Удовлетворенность</div>
                    </div>
                    <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                        <div className="text-3xl font-bold text-white mb-2">24/7</div>
                        <div className="text-white/60 text-sm">Поддержка</div>
                    </div>
                    <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                        <div className="text-3xl font-bold text-white mb-2">15+</div>
                        <div className="text-white/60 text-sm">Лет опыта</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TestimonialsSection