'use client'

import { createContext, useContext, ReactNode } from 'react'

// Типы для переводов
type TranslationKeys = {
    header: {
        solutions: string
        cases: string
        technologies: string
        about: string
        contact: string
        demo: string
    }
    hero: {
        title: string
        subtitle: string
        startProject: string
        viewCases: string
        revolution: string
    }
    stats: {
        projects: string
        savings: string
        uptime: string
        experts: string
    }
    footer: {
        company: string
        description: string
        rights: string
    }
    [key: string]: unknown
}

// Импортируем все переводы
import ruTranslations from '../../../public/locales/ru/common.json'
import engTranslations from '../../../public/locales/eng/common.json'
import kgzTranslations from '../../../public/locales/kgz/common.json'

const translations = {
    ru: ruTranslations as TranslationKeys,
    eng: engTranslations as TranslationKeys,
    kgz: kgzTranslations as TranslationKeys
}

type Locale = keyof typeof translations
type TranslationContextType = {
    t: (key: string) => string
    locale: Locale
}

const TranslationContext = createContext<TranslationContextType | null>(null)

export function TranslationProvider({
                                        children,
                                        locale
                                    }: {
    children: ReactNode
    locale: string
}) {
    const currentLocale = (locale as Locale) || 'ru'
    const currentTranslations = translations[currentLocale] || translations.ru

    const t = (key: string): string => {
        const keys = key.split('.')
        let value: unknown = currentTranslations

        for (const k of keys) {
            if (value && typeof value === 'object' && value !== null && k in value) {
                value = (value as Record<string, unknown>)[k]
            } else {
                console.warn(`Translation key not found: ${key}`)
                return key // Возвращаем ключ если перевод не найден
            }
        }

        return typeof value === 'string' ? value : key
    }

    return (
        <TranslationContext.Provider value={{ t, locale: currentLocale }}>
            {children}
        </TranslationContext.Provider>
    )
}

export function useTranslation() {
    const context = useContext(TranslationContext)
    if (!context) {
        throw new Error('useTranslation must be used within TranslationProvider')
    }
    return context
}