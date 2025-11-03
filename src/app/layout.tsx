import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

// Метаданные для каждого языка
const metadataByLocale = {
    ru: {
        title: 'Evolution Group - AI Solutions for Business',
        description: 'Искусственный интеллект для банков, нефтегазовых компаний и государственных организаций Кыргызстана'
    },
    en: {
        title: 'Evolution Group - AI Solutions for Business',
        description: 'Artificial intelligence for banks, oil & gas companies and government organizations in Kyrgyzstan'
    },
    ky: {
        title: 'Evolution Group - Бизнес үчүн AI чечимдери',
        description: 'Кыргызстандын банктары, мунай-газ компаниялары жана мамлекеттик уюмдары үчүн жасалма акыл'
    }
}

export const metadata: Metadata = metadataByLocale.ru

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="ru">
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <body className={`${inter.className} antialiased`}>
        {children}
        </body>
        </html>
    )
}