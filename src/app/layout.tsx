import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'ФискалеПро - AI Solutions for Business',
    description: 'Искусственный интеллект для банков, нефтегазовых компаний и государственных организаций Кыргызстана',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="ru">
        <body className="antialiased">
        {children}
        </body>
        </html>
    )
}
