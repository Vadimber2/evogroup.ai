'use client'

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/Button'

interface ProjectOptions {
    type: string
    duration: number
    complexity: string
    integrations: string[]
    support: string
}

interface PricingResult {
    basePrice: number
    totalPrice: number
    monthlySupport: number
    breakdown: {
        development: number
        integration: number
        testing: number
        deployment: number
        support: number
    }
}

const AICalculatorSection: React.FC = () => {
    const [options, setOptions] = useState<ProjectOptions>({
        type: 'data-analytics',
        duration: 3,
        complexity: 'medium',
        integrations: [],
        support: 'standard'
    })

    const [result, setResult] = useState<PricingResult | null>(null)
    const [showResult, setShowResult] = useState(false)

    const projectTypes = [
        { id: 'data-analytics', label: 'Аналитика данных', multiplier: 1.0, icon: '📊' },
        { id: 'chatbot', label: 'Чат-бот', multiplier: 0.7, icon: '💬' },
        { id: 'fraud-detection', label: 'Антифрод система', multiplier: 1.5, icon: '🛡️' },
        { id: 'predictive', label: 'Предиктивная аналитика', multiplier: 1.3, icon: '🔮' },
        { id: 'document-processing', label: 'Обработка документов', multiplier: 1.1, icon: '📄' },
        { id: 'computer-vision', label: 'Компьютерное зрение', multiplier: 1.8, icon: '👁️' }
    ]

    const complexityLevels = [
        { id: 'simple', label: 'Простой', multiplier: 0.8, description: 'Стандартные алгоритмы' },
        { id: 'medium', label: 'Средний', multiplier: 1.0, description: 'Кастомная логика' },
        { id: 'complex', label: 'Сложный', multiplier: 1.4, description: 'Глубокое обучение' },
        { id: 'enterprise', label: 'Энтерпрайз', multiplier: 1.8, description: 'Масштабируемая архитектура' }
    ]

    const integrationOptions = [
        { id: '1c', label: '1С', cost: 15000 },
        { id: 'sap', label: 'SAP', cost: 25000 },
        { id: 'crm', label: 'CRM системы', cost: 20000 },
        { id: 'erp', label: 'ERP системы', cost: 30000 },
        { id: 'api', label: 'REST API', cost: 10000 },
        { id: 'database', label: 'Базы данных', cost: 12000 }
    ]

    const supportLevels = [
        { id: 'basic', label: 'Базовая', multiplier: 0.05, description: 'Email поддержка' },
        { id: 'standard', label: 'Стандартная', multiplier: 0.08, description: '8/5 поддержка' },
        { id: 'premium', label: 'Премиум', multiplier: 0.12, description: '24/7 поддержка' },
        { id: 'enterprise', label: 'Корпоративная', multiplier: 0.15, description: 'Выделенная команда' }
    ]

    const calculatePrice = () => {
        const basePrice = 50000

        const typeMultiplier = projectTypes.find(t => t.id === options.type)?.multiplier || 1
        const complexityMultiplier = complexityLevels.find(c => c.id === options.complexity)?.multiplier || 1
        const supportMultiplier = supportLevels.find(s => s.id === options.support)?.multiplier || 0.08

        const developmentCost = basePrice * typeMultiplier * complexityMultiplier * (options.duration / 3)

        const integrationCost = options.integrations.reduce((sum, integration) => {
            const integrationOption = integrationOptions.find(i => i.id === integration)
            return sum + (integrationOption?.cost || 0)
        }, 0)

        const breakdown = {
            development: Math.round(developmentCost * 0.6),
            integration: integrationCost,
            testing: Math.round(developmentCost * 0.15),
            deployment: Math.round(developmentCost * 0.15),
            support: Math.round(developmentCost * 0.1)
        }

        const totalPrice = Object.values(breakdown).reduce((sum, cost) => sum + cost, 0)
        const monthlySupport = Math.round(totalPrice * supportMultiplier)

        setResult({
            basePrice: developmentCost,
            totalPrice,
            monthlySupport,
            breakdown
        })
        setShowResult(true)

        // Автоскролл к результатам
        setTimeout(() => {
            const resultsElement = document.querySelector('#calculator-results')
            if (resultsElement) {
                resultsElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                })
            }
        }, 100)
    }

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('ru-RU', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(price)
    }

    const handleIntegrationChange = (integrationId: string, checked: boolean) => {
        if (checked) {
            setOptions(prev => ({
                ...prev,
                integrations: [...prev.integrations, integrationId]
            }))
        } else {
            setOptions(prev => ({
                ...prev,
                integrations: prev.integrations.filter(id => id !== integrationId)
            }))
        }
    }

    useEffect(() => {
        if (showResult) {
            calculatePrice()
        }
    }, [options])

    return (
        <section className="py-24 bg-slate-900/50 relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/3 left-20 w-72 h-72 bg-green-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/3 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm text-white/80 shadow-sm mb-6">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        Калькулятор стоимости
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Рассчитайте стоимость вашего ИИ проекта
                    </h2>
                    <p className="text-xl text-white/70 max-w-3xl mx-auto">
                        Получите предварительную оценку стоимости и сроков разработки
                    </p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Left Column - Form */}
                        <div>
                            {/* Project Type */}
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-white mb-4">Тип проекта</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {projectTypes.map((type) => (
                                        <button
                                            key={type.id}
                                            onClick={() => setOptions(prev => ({ ...prev, type: type.id }))}
                                            className={`p-4 rounded-xl border transition-all duration-200 text-left ${
                                                options.type === type.id
                                                    ? 'bg-blue-500/20 border-blue-500/50 text-white'
                                                    : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'
                                            }`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <span className="text-2xl">{type.icon}</span>
                                                <div>
                                                    <div className="font-medium">{type.label}</div>
                                                    <div className="text-xs opacity-60">от {formatPrice(50000 * type.multiplier)}</div>
                                                </div>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Duration */}
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-white mb-4">Срок разработки</h3>
                                <div className="bg-white/10 rounded-xl p-4">
                                    <input
                                        type="range"
                                        min="1"
                                        max="12"
                                        value={options.duration}
                                        onChange={(e) => setOptions(prev => ({ ...prev, duration: parseInt(e.target.value) }))}
                                        className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
                                    />
                                    <div className="flex justify-between text-sm text-white/60 mt-2">
                                        <span>1 мес</span>
                                        <span className="text-white font-medium">{options.duration} мес</span>
                                        <span>12 мес</span>
                                    </div>
                                </div>
                            </div>

                            {/* Complexity */}
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-white mb-4">Сложность проекта</h3>
                                <div className="space-y-3">
                                    {complexityLevels.map((level) => (
                                        <button
                                            key={level.id}
                                            onClick={() => setOptions(prev => ({ ...prev, complexity: level.id }))}
                                            className={`w-full p-4 rounded-xl border transition-all duration-200 text-left ${
                                                options.complexity === level.id
                                                    ? 'bg-blue-500/20 border-blue-500/50 text-white'
                                                    : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'
                                            }`}
                                        >
                                            <div className="flex justify-between items-center">
                                                <div>
                                                    <div className="font-medium">{level.label}</div>
                                                    <div className="text-xs opacity-60">{level.description}</div>
                                                </div>
                                                <div className="text-sm font-medium">
                                                    x{level.multiplier}
                                                </div>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Integrations */}
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-white mb-4">Интеграции</h3>
                                <div className="grid grid-cols-2 gap-3">
                                    {integrationOptions.map((integration) => (
                                        <label
                                            key={integration.id}
                                            className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-200 cursor-pointer border border-white/10"
                                        >
                                            <input
                                                type="checkbox"
                                                checked={options.integrations.includes(integration.id)}
                                                onChange={(e) => handleIntegrationChange(integration.id, e.target.checked)}
                                                className="w-4 h-4 text-blue-500 bg-white/20 border-white/30 rounded focus:ring-blue-500 focus:ring-2"
                                            />
                                            <div className="flex-1 min-w-0">
                                                <div className="text-white text-sm font-medium">{integration.label}</div>
                                                <div className="text-white/60 text-xs">{formatPrice(integration.cost)}</div>
                                            </div>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Support */}
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-white mb-4">Уровень поддержки</h3>
                                <div className="space-y-3">
                                    {supportLevels.map((level) => (
                                        <button
                                            key={level.id}
                                            onClick={() => setOptions(prev => ({ ...prev, support: level.id }))}
                                            className={`w-full p-4 rounded-xl border transition-all duration-200 text-left ${
                                                options.support === level.id
                                                    ? 'bg-blue-500/20 border-blue-500/50 text-white'
                                                    : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'
                                            }`}
                                        >
                                            <div className="flex justify-between items-center">
                                                <div>
                                                    <div className="font-medium">{level.label}</div>
                                                    <div className="text-xs opacity-60">{level.description}</div>
                                                </div>
                                                <div className="text-sm font-medium">
                                                    {(level.multiplier * 100).toFixed(1)}%/мес
                                                </div>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <Button
                                onClick={calculatePrice}
                                variant="primary"
                                size="lg"
                                className="w-full bg-blue-600 hover:bg-blue-700"
                            >
                                Рассчитать стоимость
                            </Button>
                        </div>

                        {/* Right Column - Results */}
                        <div id="calculator-results">
                            {showResult && result && (
                                <div className="space-y-6">
                                    <div className="bg-gradient-to-br from-blue-500/20 to-violet-500/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30">
                                        <div className="text-center">
                                            <h3 className="text-2xl font-bold text-white mb-2">Общая стоимость проекта</h3>
                                            <div className="text-4xl font-bold text-blue-400 mb-4">
                                                {formatPrice(result.totalPrice)}
                                            </div>
                                            <div className="text-white/70">
                                                Срок разработки: {options.duration} мес
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                                        <h3 className="text-lg font-bold text-white mb-4">Детализация стоимости</h3>
                                        <div className="space-y-3">
                                            <div className="flex justify-between items-center text-sm">
                                                <span className="text-white/70">Разработка</span>
                                                <span className="text-white font-medium">{formatPrice(result.breakdown.development)}</span>
                                            </div>
                                            <div className="flex justify-between items-center text-sm">
                                                <span className="text-white/70">Интеграции</span>
                                                <span className="text-white font-medium">{formatPrice(result.breakdown.integration)}</span>
                                            </div>
                                            <div className="flex justify-between items-center text-sm">
                                                <span className="text-white/70">Тестирование</span>
                                                <span className="text-white font-medium">{formatPrice(result.breakdown.testing)}</span>
                                            </div>
                                            <div className="flex justify-between items-center text-sm">
                                                <span className="text-white/70">Развертывание</span>
                                                <span className="text-white font-medium">{formatPrice(result.breakdown.deployment)}</span>
                                            </div>
                                            <div className="flex justify-between items-center text-sm">
                                                <span className="text-white/70">Обучение</span>
                                                <span className="text-white font-medium">{formatPrice(result.breakdown.support)}</span>
                                            </div>
                                            <div className="border-t border-white/20 pt-3">
                                                <div className="flex justify-between items-center font-bold">
                                                    <span className="text-white">Итого</span>
                                                    <span className="text-blue-400 text-lg">{formatPrice(result.totalPrice)}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <h4 className="text-lg font-bold text-white">Ежемесячная поддержка</h4>
                                                <p className="text-white/60 text-sm">
                                                    {supportLevels.find(s => s.id === options.support)?.label} уровень
                                                </p>
                                            </div>
                                            <div className="text-xl font-bold text-green-400">
                                                {formatPrice(result.monthlySupport)}/мес
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
                                        <h4 className="text-lg font-bold text-white mb-3">Готовы начать проект?</h4>
                                        <p className="text-white/70 mb-4 text-sm">
                                            Получите детальную консультацию и точную смету
                                        </p>
                                        <div className="flex flex-col gap-3">
                                            <Button
                                                variant="primary"
                                                size="md"
                                                className="bg-blue-600 hover:bg-blue-700"
                                            >
                                                Заказать консультацию
                                            </Button>
                                            <Button
                                                variant="outline"
                                                size="md"
                                                className="border-white/20 text-white hover:bg-white/10"
                                            >
                                                Скачать смету PDF
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {!showResult && (
                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
                                    <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">Настройте параметры проекта</h3>
                                    <p className="text-white/60">
                                        Выберите тип проекта, сложность и дополнительные опции для получения расчета
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .slider::-webkit-slider-thumb {
                    appearance: none;
                    height: 20px;
                    width: 20px;
                    border-radius: 50%;
                    background: #3B82F6;
                    cursor: pointer;
                    border: 2px solid #1E40AF;
                }
            `}</style>
        </section>
    )
}

export default AICalculatorSection