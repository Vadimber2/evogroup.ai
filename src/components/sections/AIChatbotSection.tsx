'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/Button'

interface Message {
    id: string
    text: string
    sender: 'user' | 'bot'
    timestamp: Date
    typing?: boolean
}

interface QuickReply {
    id: string
    text: string
    response: string
}

const AIChatbotSection: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState<Message[]>([])
    const [inputText, setInputText] = useState('')
    const [isTyping, setIsTyping] = useState(false)
    const messagesEndRef = useRef<HTMLDivElement>(null)

    const quickReplies: QuickReply[] = [
        {
            id: '1',
            text: 'Стоимость ИИ проекта',
            response: 'Стоимость ИИ проекта зависит от многих факторов: типа задачи, сложности, сроков и интеграций. Базовая стоимость начинается от $50,000 за 3 месяца разработки. Используйте наш калькулятор выше для точного расчета или свяжитесь с нами для персональной консультации.'
        },
        {
            id: '2',
            text: 'Сроки разработки',
            response: 'Типичные сроки разработки ИИ-решений:\n• Простые чат-боты: 1-2 месяца\n• Аналитические системы: 3-4 месяца\n• Сложные ML модели: 4-6 месяцев\n• Энтерпрайз решения: 6-12 месяцев\n\nТочные сроки зависят от ваших требований и готовности данных.'
        },
        {
            id: '3',
            text: 'Какие технологии используете',
            response: 'Мы работаем с передовыми технологиями ИИ:\n• Machine Learning: TensorFlow, PyTorch, Scikit-learn\n• NLP: OpenAI GPT, Transformers, spaCy\n• Computer Vision: OpenCV, YOLO, ResNet\n• Big Data: Apache Spark, Kafka, Elasticsearch\n• Cloud: AWS, Google Cloud, Azure\n\nВыбираем оптимальный стек под каждую задачу.'
        },
        {
            id: '4',
            text: 'Примеры ваших работ',
            response: 'У нас более 50 успешных проектов:\n• Кредитный скоринг для Демир Банка (+35% точности)\n• Цифровые госуслуги для Минцифры (+60% скорости)\n• Антифрод система для KICB (98.5% точности)\n• Предиктивное обслуживание для КыргызГаз (-45% аварий)\n\nПосмотрите полное портфолио в галерее работ выше.'
        }
    ]

    const botResponses: { [key: string]: string } = {
        'привет': 'Привет! Я ИИ-ассистент ФискалеПро. Помогу ответить на вопросы о наших услугах и решениях искусственного интеллекта.',
        'услуги': 'Мы предоставляем:\n• Разработку ИИ-решений под заказ\n• Аналитику больших данных\n• Автоматизацию бизнес-процессов\n• Интеграцию с существующими системами\n• Техническую поддержку 24/7',
        'цена': 'Стоимость проектов начинается от $50,000. Используйте калькулятор выше для расчета или оставьте заявку для персональной консультации.',
        'контакты': 'Свяжитесь с нами:\n📧 info@fiscalepro.kg\n📞 +996 312 123-456\n🏢 г. Бишкек, ул. Киевская 123\n\nИли заполните форму обратной связи на сайте.',
        'команда': 'В нашей команде 25+ экспертов:\n• ML-инженеры\n• Data Scientists\n• Backend/Frontend разработчики\n• DevOps инженеры\n• Бизнес-аналитики\n\nСредний опыт команды - 7+ лет в ИИ.',
        'время': 'Обычно отвечаем в течение 15 минут в рабочее время (9:00-18:00). Для срочных вопросов звоните по телефону.',
        'поддержка': 'Предоставляем несколько уровней поддержки:\n• Базовая (email)\n• Стандартная (8/5)\n• Премиум (24/7)\n• Корпоративная (выделенная команда)\n\nСтоимость от 5% до 15% от стоимости проекта.'
    }

    const getRandomDelay = () => Math.random() * 1000 + 500

    const addMessage = (text: string, sender: 'user' | 'bot', typing = false) => {
        const message: Message = {
            id: Date.now().toString(),
            text,
            sender,
            timestamp: new Date(),
            typing
        }
        setMessages(prev => [...prev, message])
    }

    const findBotResponse = (userMessage: string): string => {
        const message = userMessage.toLowerCase()

        for (const [key, response] of Object.entries(botResponses)) {
            if (message.includes(key)) {
                return response
            }
        }

        // Fallback responses
        if (message.includes('помощь') || message.includes('помоги')) {
            return 'Конечно! Я могу рассказать о наших услугах, ценах, сроках разработки и портфолио. Что именно вас интересует?'
        }

        if (message.includes('спасибо')) {
            return 'Пожалуйста! Если у вас есть еще вопросы - обращайтесь. Готов помочь с выбором ИИ-решения для вашего бизнеса.'
        }

        return 'Интересный вопрос! Для получения детальной консультации рекомендую связаться с нашими специалистами по телефону +996 312 123-456 или заполнить форму на сайте.'
    }

    const handleSendMessage = async () => {
        if (!inputText.trim()) return

        // Add user message
        addMessage(inputText, 'user')
        const userMessage = inputText
        setInputText('')

        // Show typing indicator
        setIsTyping(true)
        await new Promise(resolve => setTimeout(resolve, getRandomDelay()))

        // Add bot response
        const response = findBotResponse(userMessage)
        setIsTyping(false)
        addMessage(response, 'bot')
    }

    const handleQuickReply = async (quickReply: QuickReply) => {
        addMessage(quickReply.text, 'user')

        setIsTyping(true)
        await new Promise(resolve => setTimeout(resolve, getRandomDelay()))

        setIsTyping(false)
        addMessage(quickReply.response, 'bot')
    }

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages, isTyping])

    useEffect(() => {
        if (isOpen && messages.length === 0) {
            // Welcome message
            setTimeout(() => {
                addMessage('Здравствуйте! Я ИИ-ассистент ФискалеПро. Помогу ответить на вопросы о наших услугах в области искусственного интеллекта. Чем могу помочь?', 'bot')
            }, 500)
        }
    }, [isOpen])

    return (
        <section className="py-24 bg-slate-900/30 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/3 left-16 w-64 h-64 bg-green-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/3 right-16 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm text-white/80 shadow-sm mb-6">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        ИИ Ассистент
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Задайте вопрос нашему ИИ-боту
                    </h2>
                    <p className="text-xl text-white/70 max-w-3xl mx-auto">
                        Получите мгновенные ответы о наших услугах, ценах и возможностях ИИ для вашего бизнеса
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    {/* Demo Preview */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-8">
                        <h3 className="text-2xl font-bold text-white mb-6 text-center">Демонстрация чат-бота</h3>

                        {/* Quick Actions */}
                        <div className="grid md:grid-cols-2 gap-4 mb-8">
                            {quickReplies.map((reply) => (
                                <button
                                    key={reply.id}
                                    onClick={() => {
                                        setIsOpen(true)
                                        setTimeout(() => handleQuickReply(reply), 300)
                                    }}
                                    className="p-4 bg-white/5 border border-white/10 rounded-xl text-left hover:bg-white/10 transition-all duration-200 group"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                                            <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                            </svg>
                                        </div>
                                        <div className="flex-1">
                                            <div className="text-white font-medium">{reply.text}</div>
                                            <div className="text-white/60 text-sm">Нажмите для примера</div>
                                        </div>
                                        <svg className="w-5 h-5 text-white/40 group-hover:text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </button>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="text-center">
                            <Button
                                onClick={() => setIsOpen(true)}
                                variant="primary"
                                size="lg"
                                className="bg-blue-600 hover:bg-blue-700 text-lg px-8"
                            >
                                Открыть чат-бот
                            </Button>
                        </div>
                    </div>

                    {/* Features */}
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h4 className="text-lg font-bold text-white mb-2">Мгновенные ответы</h4>
                            <p className="text-white/60 text-sm">Получайте ответы на вопросы 24/7 без ожидания</p>
                        </div>

                        <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <h4 className="text-lg font-bold text-white mb-2">Умные советы</h4>
                            <p className="text-white/60 text-sm">Персонализированные рекомендации для вашего бизнеса</p>
                        </div>

                        <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                            <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h4 className="text-lg font-bold text-white mb-2">Везде с вами</h4>
                            <p className="text-white/60 text-sm">Работает на всех устройствах и платформах</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Chat Widget */}
            {isOpen && (
                <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl z-50 flex flex-col overflow-hidden">
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b border-white/10 bg-gradient-to-r from-blue-600 to-violet-600">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <div className="text-white font-medium">ИИ Ассистент</div>
                                <div className="text-white/70 text-xs">Онлайн • Отвечает быстро</div>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center text-white transition-colors"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {messages.map((message) => (
                            <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-xs px-4 py-2 rounded-lg ${
                                    message.sender === 'user'
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-white/10 text-white border border-white/10'
                                }`}>
                                    <div className="whitespace-pre-wrap text-sm">{message.text}</div>
                                    <div className={`text-xs mt-1 ${
                                        message.sender === 'user' ? 'text-blue-100' : 'text-white/50'
                                    }`}>
                                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    </div>
                                </div>
                            </div>
                        ))}

                        {isTyping && (
                            <div className="flex justify-start">
                                <div className="bg-white/10 border border-white/10 px-4 py-2 rounded-lg">
                                    <div className="flex space-x-1">
                                        <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce"></div>
                                        <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                        <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <div className="p-4 border-t border-white/10">
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                                placeholder="Напишите ваш вопрос..."
                                className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                            />
                            <button
                                onClick={handleSendMessage}
                                disabled={!inputText.trim()}
                                className="w-10 h-10 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg flex items-center justify-center text-white transition-colors"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Floating Chat Button */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 z-40 flex items-center justify-center group"
                >
                    <svg className="w-8 h-8 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                </button>
            )}
        </section>
    )
}

export default AIChatbotSection