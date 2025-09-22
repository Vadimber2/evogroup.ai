'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

// Тип для локалей
export type Locale = 'ru' | 'en' | 'ky'

// Базовые типы для переводов
type TranslationValue = string | number | boolean | TranslationObject | TranslationArray
type TranslationObject = { [key: string]: TranslationValue }
type TranslationArray = TranslationValue[]

// Тип для namespace переводов
type NamespaceTranslations = Record<string, TranslationValue>

// Тип для всех переводов
type AllTranslations = Record<Locale, Record<string, NamespaceTranslations>>

// Контекст
interface I18nContextType {
    locale: Locale
    changeLanguage: (locale: Locale) => void
    t: (key: string, namespace?: string) => TranslationValue
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
            console.warn(`Failed to load translations from ${path}:`, error)
            return {}
        }
    }

    // Функция для загрузки переводов
    const loadTranslations = async (targetLocale: Locale) => {
        try {
            setIsLoading(true)

            // Загружаем переводы динамически с обработкой ошибок
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
                technology,
                competitiveAdvantages
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
                safeImport(`@/locales/${targetLocale}/technology.json`),
                safeImport(`@/locales/${targetLocale}/competitiveadvantages.json`)
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
                    competitiveAdvantages,
                }
            }))
        } catch (error) {
            console.error(`Error loading translations for ${targetLocale}:`, error)

            // Fallback переводы с правильной типизацией
            const fallbackTranslations: Record<string, NamespaceTranslations> = {
                common: {
                    company_name: 'ФискалеПро',
                    tagline: 'AI Solutions',
                    buttons: {
                        start_project: 'Начать проект',
                        view_cases: 'Посмотреть кейсы',
                        contact: 'Связаться',
                        demo: 'Демо'
                    }
                },
                hero: {
                    title: {
                        line1: 'Искусственный',
                        line2: 'интеллект',
                        line3: 'для бизнеса'
                    },
                    subtitle: 'Создаем интеллектуальные решения',
                    features: [
                        'Быстрое внедрение',
                        'Гарантированная окупаемость',
                        'Круглосуточная поддержка',
                        'Интеграция с системами'
                    ]
                },
                navigation: {
                    solutions: 'Решения',
                    cases: 'Кейсы',
                    technology: 'Технологии',
                    team: 'Команда'
                },
                solutions: { title: 'Наши решения' },
                calculator: { title: 'Калькулятор стоимости' },
                contact: {
                    title: 'Связаться с нами',
                    form: {
                        fields: {
                            name: { label: 'Имя', placeholder: 'Ваше имя' },
                            email: { label: 'Email', placeholder: 'your@email.com' },
                            company: { label: 'Компания', placeholder: 'Название компании' }
                        }
                    }
                },
                footer: { company: { name: 'ФискалеПро' } },
                team: { title: 'Наша команда' },
                testimonials: { title: 'Отзывы' },
                technology: { title: 'Технологии' },
                competitiveAdvantages: { title: 'Наши преимущества' }
            }

            setTranslations(prev => ({
                ...prev,
                [targetLocale]: fallbackTranslations
            }))
        } finally {
            setIsLoading(false)
        }
    }

    // Инициализация переводов при первой загрузке
    useEffect(() => {
        // Проверяем сохраненный язык
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

        // Сохраняем в localStorage
        if (typeof window !== 'undefined') {
            localStorage.setItem('locale', newLocale)
        }

        // Загружаем переводы для нового языка если их еще нет
        if (!translations[newLocale]) {
            await loadTranslations(newLocale)
        }
    }

    // Функция перевода с правильной типизацией
    const t = (key: string, namespace: string = 'common'): TranslationValue => {
        try {
            if (isLoading) {
                return key // Возвращаем ключ пока загружаются переводы
            }

            const localeTranslations = translations[locale]
            if (!localeTranslations) {
                console.warn(`No translations found for locale "${locale}"`)
                return key
            }

            const namespaceTranslations = localeTranslations[namespace]
            if (!namespaceTranslations) {
                console.warn(`Namespace "${namespace}" not found for locale "${locale}"`)
                return key
            }

            const keys = key.split('.')
            let value: TranslationValue = namespaceTranslations

            for (const k of keys) {
                if (value && typeof value === 'object' && !Array.isArray(value) && k in value) {
                    value = (value as TranslationObject)[k]
                } else {
                    console.warn(`Translation key "${key}" not found in namespace "${namespace}" for locale "${locale}"`)
                    return key
                }
            }

            return value !== undefined ? value : key
        } catch (error) {
            console.error(`Translation error for key "${key}" in namespace "${namespace}":`, error)
            return key
        }
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

// Хук для использования переводов
export function useTranslation(namespace?: string) {
    const context = useContext(I18nContext)

    if (!context) {
        throw new Error('useTranslation must be used within I18nProvider')
    }

    // Возвращаем функцию t с предустановленным namespace, если он указан
    const t = (key: string): TranslationValue => context.t(key, namespace)

    return {
        ...context,
        t: namespace ? t : context.t,
    }
}

// Утилитарные функции для типизированного доступа к переводам
export const useTypedTranslation = (namespace?: string) => {
    const { t, ...rest } = useTranslation(namespace)

    return {
        ...rest,
        // Функция для строковых переводов
        tString: (key: string): string => {
            const value = t(key)
            return typeof value === 'string' ? value : String(value)
        },
        // Функция для массивов переводов
        tArray: (key: string): string[] => {
            const value = t(key)
            return Array.isArray(value) ? value.map(String) : []
        },
        // Функция для объектов переводов
        tObject: (key: string): Record<string, string> => {
            const value = t(key)
            if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
                const result: Record<string, string> = {}
                Object.entries(value as TranslationObject).forEach(([k, v]) => {
                    result[k] = String(v)
                })
                return result
            }
            return {}
        },
        // Общая функция
        t
    }
}