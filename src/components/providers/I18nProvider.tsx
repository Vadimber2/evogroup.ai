'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

// Тип для локалей
export type Locale = 'ru' | 'en' | 'ky'

// Простые типы для переводов
type TranslationValue = string | number | boolean | { [key: string]: unknown } | unknown[]
type NamespaceTranslations = Record<string, TranslationValue>
type AllTranslations = Record<Locale, Record<string, NamespaceTranslations>>

// Контекст
interface I18nContextType {
    locale: Locale
    changeLanguage: (locale: Locale) => void
    t: (key: string, namespace?: string) => string
    isLoading: boolean
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

// Провайдер
interface I18nProviderProps {
    children: ReactNode
    initialLocale?: Locale
}

export function I18nProvider({ children, initialLocale = 'ru' }: I18nProviderProps) {
    const [locale, setLocale] = useState<Locale>(initialLocale)
    const [translations, setTranslations] = useState<AllTranslations>({} as AllTranslations)
    const [isLoading, setIsLoading] = useState(true)

    // Функция для безопасного импорта переводов
    const safeImport = async (path: string): Promise<NamespaceTranslations> => {
        try {
            const module = await import(path)
            return module.default || {}
        } catch (error) {
            console.warn(`Failed to load translations from ${path}`)
            return {}
        }
    }

    // Функция для загрузки переводов
    const loadTranslations = async (targetLocale: Locale) => {
        try {
            setIsLoading(true)

            // Загружаем переводы динамически
            const [
                common,
                hero,
                navigation,
                solutions,
                calculator,
                contact,
                footer,
                team,
                testimonials,
                technology
            ] = await Promise.all([
                safeImport(`@/locales/${targetLocale}/common.json`),
                safeImport(`@/locales/${targetLocale}/hero.json`),
                safeImport(`@/locales/${targetLocale}/navigation.json`),
                safeImport(`@/locales/${targetLocale}/solutions.json`),
                safeImport(`@/locales/${targetLocale}/aicalculator.json`),
                safeImport(`@/locales/${targetLocale}/contact.json`),
                safeImport(`@/locales/${targetLocale}/footer.json`),
                safeImport(`@/locales/${targetLocale}/team.json`),
                safeImport(`@/locales/${targetLocale}/testimonials.json`),
                safeImport(`@/locales/${targetLocale}/technology.json`)
            ])

            setTranslations(prev => ({
                ...prev,
                [targetLocale]: {
                    common,
                    hero,
                    navigation,
                    solutions,
                    calculator,
                    contact,
                    footer,
                    team,
                    testimonials,
                    technology,
                }
            }))
        } catch (error) {
            console.error(`Error loading translations for ${targetLocale}:`, error)

            // Fallback переводы
            setTranslations(prev => ({
                ...prev,
                [targetLocale]: {
                    common: {
                        company_name: 'ФискалеПро',
                        tagline: 'AI Solutions',
                        buttons: { start_project: 'Начать проект', view_cases: 'Посмотреть кейсы' }
                    },
                    hero: {
                        badge_text: 'AI для бизнеса',
                        title: { line1: 'Искусственный', line2: 'интеллект', line3: 'для бизнеса' },
                        subtitle: 'Создаем интеллектуальные решения',
                        metrics: {
                            projects: { value: '50+', label: 'Проектов' },
                            savings: { value: '$10M+', label: 'Экономии' },
                            uptime: { value: '99.9%', label: 'Аптайм' },
                            experts: { value: '25+', label: 'Экспертов' }
                        },
                        features: ['Быстрое внедрение', 'Гарантированная окупаемость', 'Круглосуточная поддержка', 'Интеграция с системами']
                    },
                    navigation: { solutions: 'Решения', cases: 'Кейсы', technology: 'Технологии', team: 'Команда' },
                    contact: {
                        title: 'Связаться с нами',
                        form: {
                            personal_info: { title: 'Контактная информация' },
                            project_info: { title: 'Информация о проекте' },
                            fields: {
                                name: { label: 'Имя', placeholder: 'Ваше имя' },
                                email: { label: 'Email', placeholder: 'your@email.com' },
                                company: { label: 'Компания', placeholder: 'Название компании' }
                            }
                        }
                    }
                }
            }))
        } finally {
            setIsLoading(false)
        }
    }

    // Инициализация переводов
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const savedLocale = localStorage.getItem('locale') as Locale
            if (savedLocale && ['ru', 'en', 'ky'].includes(savedLocale)) {
                setLocale(savedLocale)
                loadTranslations(savedLocale)
                return
            }
        }
        loadTranslations(locale)
    }, [])

    // Смена языка
    const changeLanguage = async (newLocale: Locale) => {
        if (newLocale === locale) return

        setLocale(newLocale)

        if (typeof window !== 'undefined') {
            localStorage.setItem('locale', newLocale)
        }

        if (!translations[newLocale]) {
            await loadTranslations(newLocale)
        }
    }

    // Простая функция перевода - всегда возвращает строку
    const t = (key: string, namespace: string = 'common'): string => {
        if (isLoading) return key

        const localeTranslations = translations[locale]
        if (!localeTranslations) return key

        const namespaceTranslations = localeTranslations[namespace]
        if (!namespaceTranslations) return key

        const keys = key.split('.')
        let value: unknown = namespaceTranslations

        for (const k of keys) {
            if (value && typeof value === 'object' && value !== null && k in value) {
                value = (value as Record<string, unknown>)[k]
            } else {
                return key
            }
        }

        // Всегда возвращаем строку
        if (typeof value === 'string') return value
        if (typeof value === 'number') return String(value)
        if (typeof value === 'boolean') return String(value)
        if (Array.isArray(value)) return value.join(', ')
        if (typeof value === 'object') return JSON.stringify(value)

        return key
    }

    const contextValue: I18nContextType = {
        locale,
        changeLanguage,
        t,
        isLoading,
    }

    return (
        <I18nContext.Provider value={contextValue}>
            {children}
        </I18nContext.Provider>
    )
}

// Обычный хук
export function useTranslation(namespace?: string) {
    const context = useContext(I18nContext)

    if (!context) {
        throw new Error('useTranslation must be used within I18nProvider')
    }

    const t = (key: string): string => context.t(key, namespace)

    return {
        ...context,
        t: namespace ? t : context.t,
    }
}

// Утилитарные функции для работы с массивами и объектами
export function useTranslationHelpers(namespace?: string) {
    const { t, ...rest } = useTranslation(namespace)

    return {
        ...rest,
        t,
        // Получить массив из переводов
        getArray: (key: string): string[] => {
            try {
                const { translations, locale } = rest as { translations: AllTranslations, locale: Locale }
                const ns = namespace || 'common'
                const value = translations[locale]?.[ns]
                const keys = key.split('.')
                let result: unknown = value

                for (const k of keys) {
                    if (result && typeof result === 'object' && k in result) {
                        result = (result as Record<string, unknown>)[k]
                    } else {
                        return []
                    }
                }

                if (Array.isArray(result)) {
                    return result.map(String)
                }
                return []
            } catch {
                return []
            }
        },
        // Получить объект из переводов
        getObject: (key: string): Record<string, string> => {
            try {
                const { translations, locale } = rest as { translations: AllTranslations, locale: Locale }
                const ns = namespace || 'common'
                const value = translations[locale]?.[ns]
                const keys = key.split('.')
                let result: unknown = value

                for (const k of keys) {
                    if (result && typeof result === 'object' && k in result) {
                        result = (result as Record<string, unknown>)[k]
                    } else {
                        return {}
                    }
                }

                if (typeof result === 'object' && result !== null && !Array.isArray(result)) {
                    const obj: Record<string, string> = {}
                    Object.entries(result as Record<string, unknown>).forEach(([k, v]) => {
                        obj[k] = String(v)
                    })
                    return obj
                }
                return {}
            } catch {
                return {}
            }
        }
    }
}