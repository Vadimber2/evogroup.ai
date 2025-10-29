'use client'

import React, { useState } from 'react'
import { useTranslation } from '@/components/providers/I18nProvider'
import { Button } from '@/components/ui/Button'

interface FormData {
    name: string
    email: string
    company: string
    phone: string
    description: string
    newsletter: boolean
}

const ContactForm: React.FC = () => {
    const { locale } = useTranslation()

    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        company: '',
        phone: '',
        description: '',
        newsletter: false,
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    // Переводы для всех языков
    const getTranslations = () => {
        if (locale === 'en') {
            return {
                title: 'Contact Us',
                subtitle: 'Tell us about your task, and our experts will propose optimal AI solution considering your business specifics',
                form: {
                    fields: {
                        name: { label: 'Name', placeholder: 'Your name' },
                        email: { label: 'Email', placeholder: 'your@email.com' },
                        company: { label: 'Company', placeholder: 'Company name' },
                        phone: { label: 'Phone', placeholder: '+996 XXX XXX XXX' },
                        description: {
                            label: 'Task Description',
                            placeholder: 'Describe your business task that you want to solve with AI. The more detailed - the more accurately we can evaluate the project and propose a solution.'
                        }
                    },
                    newsletter: {
                        label: 'Subscribe to AI technology news',
                        description: 'We\'ll send interesting cases and technology updates'
                    }
                },
                buttons: {
                    submit: 'Submit Request',
                    submitting: 'Submitting...',
                    downloadPresentation: 'Download Presentation',
                    sendAnother: 'Send Another Request'
                },
                success: {
                    title: 'Request Sent!',
                    message: 'We received your request and will respond within 2 hours during business hours.',
                    nextSteps: [
                        'Our expert will study your task',
                        'We\'ll prepare preliminary proposal',
                        'Contact you to discuss details',
                        'Provide accurate project estimate'
                    ]
                },
                privacyNotice: 'By submitting the form, you agree to personal data processing according to our privacy policy'
            }
        } else if (locale === 'ky') {
            return {
                title: 'Биз менен байланышуу',
                subtitle: 'Сиздин тапшырмаңыз жөнүндө айтыңыз, биздин адистер сиздин бизнесиңиздин өзгөчөлүктөрүн эске алуу менен оптималдуу ИИ чечимин сунушташат',
                form: {
                    fields: {
                        name: { label: 'Аты', placeholder: 'Сиздин атыңыз' },
                        email: { label: 'Email', placeholder: 'sizdin@email.com' },
                        company: { label: 'Компания', placeholder: 'Компанияның аталышы' },
                        phone: { label: 'Телефон', placeholder: '+996 XXX XXX XXX' },
                        description: {
                            label: 'Тапшырманын сүрөттөмөсү',
                            placeholder: 'ИИ менен чечкиңиз келген бизнес тапшырмаңызды сүрөттөңүз. Канчалык толук болсо - ошончолук так долбоорду баалап, чечим сунушта алабыз.'
                        }
                    },
                    newsletter: {
                        label: 'ИИ технологиялары жаңылыктарына жазылуу',
                        description: 'Кызыктуу мисалдарды жана технология жаңыртууларын жөнөтөбүз'
                    }
                },
                buttons: {
                    submit: 'Өтүнүч жөнөтүү',
                    submitting: 'Жөнөтүлүүдө...',
                    downloadPresentation: 'Презентацияны жүктөө',
                    sendAnother: 'Дагы бир өтүнүч жөнөтүү'
                },
                success: {
                    title: 'Өтүнүч жөнөтүлдү!',
                    message: 'Биз сиздин өтүнүчүңүздү алдык жана жумуш убактысында 2 саат ичинде жооп беребиз.',
                    nextSteps: [
                        'Биздин адис сиздин тапшырмаңызды изилдейт',
                        'Алдын ала сунушту даярдайбыз',
                        'Деталдарды талкуулоо үчүн байланышабыз',
                        'Долбоордун так бааланышын беребиз'
                    ]
                },
                privacyNotice: 'Форманы жөнөтүү менен, сиз биздин купуялуулук саясатыбызга ылайык жеке маалыматтарды иштетүүгө макулсуз'
            }
        } else {
            return {
                title: 'Свяжитесь с нами',
                subtitle: 'Расскажите о вашей задаче, и наши эксперты предложат оптимальное ИИ-решение с учетом специфики вашего бизнеса',
                form: {
                    fields: {
                        name: { label: 'Имя', placeholder: 'Ваше имя' },
                        email: { label: 'Email', placeholder: 'your@email.com' },
                        company: { label: 'Компания', placeholder: 'Название компании' },
                        phone: { label: 'Телефон', placeholder: '+996 XXX XXX XXX' },
                        description: {
                            label: 'Описание задачи',
                            placeholder: 'Опишите бизнес-задачу, которую хотите решить с помощью ИИ. Чем подробнее - тем точнее сможем оценить проект и предложить решение.'
                        }
                    },
                    newsletter: {
                        label: 'Подписаться на новости о технологиях ИИ',
                        description: 'Будем присылать интересные кейсы и обновления технологий'
                    }
                },
                buttons: {
                    submit: 'Отправить заявку',
                    submitting: 'Отправка...',
                    downloadPresentation: 'Скачать презентацию',
                    sendAnother: 'Отправить еще одну заявку'
                },
                success: {
                    title: 'Заявка отправлена!',
                    message: 'Мы получили вашу заявку и ответим в течение 2 часов в рабочее время.',
                    nextSteps: [
                        'Наш эксперт изучит вашу задачу',
                        'Подготовим предварительное предложение',
                        'Свяжемся для обсуждения деталей',
                        'Предоставим точную оценку проекта'
                    ]
                },
                privacyNotice: 'Отправляя форму, вы соглашаетесь с обработкой персональных данных согласно нашей политике конфиденциальности'
            }
        }
    }

    const translations = getTranslations()

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target

        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            await new Promise(resolve => setTimeout(resolve, 1000))
            console.log('Form data:', formData)
            setIsSubmitted(true)
        } catch (error) {
            console.error('Error submitting form:', error)
        } finally {
            setIsSubmitting(false)
        }
    }

    if (isSubmitted) {
        return (
            <section className="px-6 py-24 bg-slate-800/30" id="contact">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/10">
                        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-4">
                            {translations.success.title}
                        </h2>
                        <p className="text-white/70 mb-8 text-lg">
                            {translations.success.message}
                        </p>

                        <div className="grid md:grid-cols-2 gap-4 mb-8">
                            {translations.success.nextSteps.map((step: string, index: number) => (
                                <div key={index} className="flex items-center gap-3 text-left text-white/80">
                                    <span className="flex-shrink-0 w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center text-xs text-blue-400 font-bold">
                                        {index + 1}
                                    </span>
                                    {step}
                                </div>
                            ))}
                        </div>

                        <Button
                            onClick={() => setIsSubmitted(false)}
                            variant="outline"
                            size="lg"
                            className="border-white/20 text-white hover:bg-white/10"
                        >
                            {translations.buttons.sendAnother}
                        </Button>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section className="px-6 py-24 bg-slate-800/30" id="contact">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        {translations.title}
                    </h2>
                    <p className="text-xl text-white/70 max-w-3xl mx-auto">
                        {translations.subtitle}
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label className="block text-white/70 text-sm font-medium mb-3">
                                {translations.form.fields.name.label} *
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                placeholder={translations.form.fields.name.placeholder}
                            />
                        </div>

                        <div>
                            <label className="block text-white/70 text-sm font-medium mb-3">
                                {translations.form.fields.email.label} *
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                placeholder={translations.form.fields.email.placeholder}
                            />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label className="block text-white/70 text-sm font-medium mb-3">
                                {translations.form.fields.company.label} *
                            </label>
                            <input
                                type="text"
                                name="company"
                                value={formData.company}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                placeholder={translations.form.fields.company.placeholder}
                            />
                        </div>

                        <div>
                            <label className="block text-white/70 text-sm font-medium mb-3">
                                {translations.form.fields.phone.label}
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                placeholder={translations.form.fields.phone.placeholder}
                            />
                        </div>
                    </div>

                    <div className="mb-8">
                        <label className="block text-white/70 text-sm font-medium mb-3">
                            {translations.form.fields.description.label} *
                        </label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            rows={5}
                            required
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                            placeholder={translations.form.fields.description.placeholder}
                        />
                    </div>

                    <div className="mb-8">
                        <label className="flex items-start gap-3 cursor-pointer">
                            <input
                                type="checkbox"
                                name="newsletter"
                                checked={formData.newsletter}
                                onChange={handleInputChange}
                                className="mt-1 w-4 h-4 text-blue-500 bg-white/20 border-white/30 rounded focus:ring-blue-500 focus:ring-2"
                            />
                            <div>
                                <div className="text-white font-medium text-sm">
                                    {translations.form.newsletter.label}
                                </div>
                                <div className="text-white/60 text-xs">
                                    {translations.form.newsletter.description}
                                </div>
                            </div>
                        </label>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button
                            type="submit"
                            variant="primary"
                            size="xl"
                            className="flex-1 bg-blue-600 hover:bg-blue-700"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? translations.buttons.submitting : translations.buttons.submit}
                        </Button>
                        <Button
                            type="button"
                            variant="outline"
                            size="xl"
                            className="flex-1 border-white/20 text-white hover:bg-white/10"
                        >
                            {translations.buttons.downloadPresentation}
                        </Button>
                    </div>

                    <p className="text-white/50 text-xs mt-4 text-center">
                        {translations.privacyNotice}
                    </p>
                </form>
            </div>
        </section>
    )
}

export default ContactForm