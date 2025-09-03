'use client'

import React from 'react'

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear()

    const footerLinks = [
        {
            title: 'Компания',
            links: [
                { label: 'О нас', href: '#about' },
                { label: 'Команда', href: '#team' },
                { label: 'Карьера', href: '#' },
                { label: 'Новости', href: '#' },
            ]
        },
        {
            title: 'Решения',
            links: [
                { label: 'Банковские системы', href: '#solutions' },
                { label: 'Госсектор', href: '#solutions' },
                { label: 'Нефть и газ', href: '#solutions' },
                { label: 'API интеграция', href: '#solutions' },
            ]
        },
        {
            title: 'Ресурсы',
            links: [
                { label: 'Документация', href: '#' },
                { label: 'Кейсы', href: '#cases' },
                { label: 'Блог', href: '#' },
                { label: 'Поддержка', href: '#' },
            ]
        },
        {
            title: 'Контакты',
            links: [
                { label: '+996 555 123 456', href: 'tel:+996555123456' },
                { label: 'info@fiscalepro.kg', href: 'mailto:info@fiscalepro.kg' },
                { label: 'Бишкек, Технопарк', href: '#' },
            ]
        }
    ]

    const socialLinks = [
        { icon: '📧', href: 'mailto:info@fiscalepro.kg', label: 'Email' },
        { icon: '💼', href: '#', label: 'LinkedIn' },
        { icon: '💻', href: '#', label: 'GitHub' },
        { icon: '📱', href: '#', label: 'Telegram' }
    ]

    return (
        <footer className="bg-slate-900/95 backdrop-blur-sm border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6">
                {/* Основной контент футера */}
                <div className="py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {footerLinks.map((section) => (
                        <div key={section.title}>
                            <h3 className="font-bold text-lg mb-6 text-white">{section.title}</h3>
                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            className="text-white/60 hover:text-white transition-colors duration-200 text-sm"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Нижняя часть */}
                <div className="border-t border-white/10 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                        {/* Логотип и описание */}
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                                <span className="text-white font-bold text-xl">Ф</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-white text-lg">ФискалеПро</h3>
                                <p className="text-sm text-white/60">ИИ-решения для бизнеса</p>
                            </div>
                        </div>

                        {/* Социальные ссылки */}
                        <div className="flex items-center space-x-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-200 hover:scale-105"
                                    title={social.label}
                                >
                                    <span className="text-lg">{social.icon}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Копирайт */}
                    <div className="mt-8 pt-8 border-t border-white/10 text-center">
                        <p className="text-sm text-white/60 mb-2">
                            © {currentYear} ФискалеПро. Все права защищены.
                        </p>
                        <div className="flex justify-center space-x-6 text-sm">
                            <a href="#" className="text-white/60 hover:text-white transition-colors">
                                Политика конфиденциальности
                            </a>
                            <span className="text-white/40">•</span>
                            <a href="#" className="text-white/60 hover:text-white transition-colors">
                                Условия использования
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer