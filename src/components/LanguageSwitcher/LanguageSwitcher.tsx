'use client'

import { useRouter, usePathname } from 'next/navigation'
import { useState } from 'react'
import { useTranslation } from '../TranslationProvider'

const languages = [
    { code: 'ru', name: 'РУС', flag: '🇷🇺' },
    { code: 'eng', name: 'ENG', flag: '🇬🇧' },
    { code: 'kgz', name: 'КЫР', flag: '🇰🇬' }
]

export default function LanguageSwitcher() {
    const router = useRouter()
    const pathname = usePathname()
    const { locale } = useTranslation()
    const [isOpen, setIsOpen] = useState(false)

    const currentLang = languages.find(lang => lang.code === locale) || languages[0]

    const changeLanguage = (langCode: string) => {
        // Заменяем текущую локаль в пути
        const newPath = pathname.replace(`/${locale}`, `/${langCode}`)
        router.push(newPath)
        setIsOpen(false)
    }

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
            >
                <span className="text-lg">{currentLang.flag}</span>
                <span className="text-sm font-medium">{currentLang.name}</span>
                <svg
                    className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute top-full mt-2 right-0 bg-white rounded-lg shadow-lg border py-2 min-w-[120px] z-50">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => changeLanguage(lang.code)}
                            className={`w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center space-x-2 ${
                                locale === lang.code ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                            }`}
                        >
                            <span className="text-lg">{lang.flag}</span>
                            <span className="text-sm font-medium">{lang.name}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    )

}