'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/Button'

const Footer: React.FC = () => {
    const [email, setEmail] = useState('')
    const currentYear = new Date().getFullYear()

    const footerLinks = [
        {
            title: 'Решения',
            links: [
                { label: 'Банковские системы', href: '#solutions', icon: '🏦' },
                { label: 'Госсектор', href: '#solutions', icon: '🏛️' },
                { label: 'Производство', href: '#solutions', icon: '🏭' },
                { label: 'API интеграция', href: '#solutions', icon: '🔗' },
            ]
        },
        {
            title: 'Компания',
            links: [
                { label: 'О нас', href: '#about', icon: '👥' },
                { label: 'Команда', href: '#team', icon: '🚀' },
                { label: 'Карьера', href: '#careers', icon: '💼' },
                { label: 'Блог', href: '#blog', icon: '📰' },
            ]
        },
        {
            title: 'Поддержка',
            links: [
                { label: 'Документация', href: '#docs', icon: '📖' },
                { label: 'Кейсы', href: '#cases', icon: '📊' },
                { label: 'FAQ', href: '#faq', icon: '❓' },
                { label: 'Техподдержка', href: '#support', icon: '🛠️' },
            ]
        }
    ]

    const technologies = [
        { name: 'Python', icon: '🐍' },
        { name: 'TensorFlow', icon: '🧠' },
        { name: 'React', icon: '⚛️' },
        { name: 'AWS', icon: '☁️' },
        { name: 'Docker', icon: '🐳' },
        { name: 'Kubernetes', icon: '⚙️' }
    ]

    const achievements = [
        { metric: '50+', label: 'Проектов', icon: '🎯' },
        { metric: '$10M+', label: 'Экономии', icon: '💰' },
        { metric: '25+', label: 'Экспертов', icon: '👨‍💻' },
        { metric: '99.9%', label: 'Аптайм', icon: '⚡' }
    ]

    const handleNewsletterSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Здесь логика подписки
        console.log('Подписка на email:', email)
        setEmail('')
        alert('Спасибо за подписку!')
    }

    return (
        <footer className="bg-gradient-to-b from-slate-900/95 to-slate-900 backdrop-blur-sm border-t border-white/10 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Newsletter Section */}
                <div className="py-16 border-b border-white/10">
                    <div className="text-center mb-8">
                        <h3 className="text-3xl font-bold text-white mb-4">
                            Будьте в курсе последних новостей ИИ
                        </h3>
                        <p className="text-white/70 max-w-2xl mx-auto">
                            Получайте эксклюзивные кейсы, аналитику рынка и анонсы новых решений
                        </p>
                    </div>

                    <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
                        <div className="flex gap-3">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Ваш email"
                                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                required
                            />
                            <Button
                                type="submit"
                                variant="primary"
                                className="bg-blue-600 hover:bg-blue-700"
                            >
                                Подписаться
                            </Button>
                        </div>
                    </form>
                </div>

                {/* Achievements */}
                <div className="py-12 border-b border-white/10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {achievements.map((achievement, index) => (
                            <div key={index} className="text-center group">
                                <div className="text-4xl mb-2">{achievement.icon}</div>
                                <div className="text-3xl font-bold text-blue-400 mb-1 group-hover:scale-110 transition-transform">
                                    {achievement.metric}
                                </div>
                                <div className="text-white/60 text-sm">{achievement.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Main Footer Content */}
                <div className="py-16 grid md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="md:col-span-1">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-violet-600 rounded-xl flex items-center justify-center shadow-lg">
                                <span className="text-white font-bold text-xl">Ф</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-white text-xl">ФискалеПро</h3>
                                <p className="text-sm text-white/60">AI Solutions</p>
                            </div>
                        </div>

                        <p className="text-white/70 mb-6 leading-relaxed">
                            Создаем интеллектуальные решения, которые трансформируют способ работы компаний.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group">
                                <span className="text-lg group-hover:scale-110 transition-transform">📧</span>
                                <a href="mailto:info@fiscalepro.kg">info@fiscalepro.kg</a>
                            </div>
                            <div className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group">
                                <span className="text-lg group-hover:scale-110 transition-transform">📞</span>
                                <a href="tel:+996555123456">+996 555 123 456</a>
                            </div>
                            <div className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group">
                                <span className="text-lg group-hover:scale-110 transition-transform">📍</span>
                                <span>Бишкек, Технопарк</span>
                            </div>
                        </div>
                    </div>

                    {/* Links Sections */}
                    {footerLinks.map((section) => (
                        <div key={section.title}>
                            <h4 className="font-bold text-lg mb-6 text-white">{section.title}</h4>
                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            className="text-white/60 hover:text-white transition-colors duration-200 text-sm flex items-center gap-2 group"
                                        >
                                            <span className="group-hover:scale-110 transition-transform">{link.icon}</span>
                                            <span>{link.label}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Technologies */}
                <div className="py-8 border-t border-white/10 border-b border-white/10">
                    <h4 className="text-white font-semibold mb-4 text-center">Технологии, с которыми мы работаем:</h4>
                    <div className="flex flex-wrap justify-center gap-4">
                        {technologies.map((tech) => (
                            <div
                                key={tech.name}
                                className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-200 hover:scale-105 group"
                            >
                                <span className="text-lg group-hover:scale-110 transition-transform">{tech.icon}</span>
                                <span className="text-white/70 text-sm">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                        {/* Social Links */}
                        <div className="flex items-center space-x-4">
                            {[
                                { icon: '💼', href: '#', label: 'LinkedIn', color: 'hover:bg-blue-600/20' },
                                { icon: '💻', href: '#', label: 'GitHub', color: 'hover:bg-gray-600/20' },
                                { icon: '📱', href: '#', label: 'Telegram', color: 'hover:bg-blue-500/20' },
                                { icon: '🎥', href: '#', label: 'YouTube', color: 'hover:bg-red-600/20' }
                            ].map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    className={`w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110 group ${social.color}`}
                                    title={social.label}
                                >
                                    <span className="text-xl group-hover:scale-110 transition-transform">{social.icon}</span>
                                </a>
                            ))}
                        </div>

                        {/* Quick Stats */}
                        <div className="text-center">
                            <div className="text-2xl font-bold text-green-400 mb-1">
                                Статус: Онлайн 🟢
                            </div>
                            <div className="text-white/60 text-sm">
                                Среднее время ответа: 15 минут
                            </div>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="mt-8 pt-8 border-t border-white/10 text-center">
                        <p className="text-sm text-white/60 mb-4">
                            © {currentYear} ФискалеПро. Все права защищены.
                            <span className="ml-2">Сделано с ❤️ в Кыргызстане</span>
                        </p>
                        <div className="flex flex-wrap justify-center gap-6 text-sm">
                            <a href="#privacy" className="text-white/60 hover:text-white transition-colors">
                                Политика конфиденциальности
                            </a>
                            <span className="text-white/40">•</span>
                            <a href="#terms" className="text-white/60 hover:text-white transition-colors">
                                Условия использования
                            </a>
                            <span className="text-white/40">•</span>
                            <a href="#cookies" className="text-white/60 hover:text-white transition-colors">
                                Файлы cookie
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer