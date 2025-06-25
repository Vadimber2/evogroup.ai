'use client'

import React from 'react'
import { Icon } from '@/components/ui/Icon'

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
        { label: 'API интеграция', href: '#solutions' },
        { label: 'Финтех', href: '#solutions' },
        { label: 'Корпоративные системы', href: '#solutions' },
        { label: 'Отраслевая автоматизация', href: '#solutions' },
      ]
    },
    {
      title: 'Ресурсы',
      links: [
        { label: 'Документация', href: '#' },
        { label: 'Кейсы', href: '#cases' },
        { label: 'Блог', href: '#' },
        { label: 'API', href: '#' },
      ]
    },
    {
      title: 'Контакты',
      links: [
        { label: '+996 555 123 456', href: 'tel:+996555123456' },
        { label: 'info@fiscalepro.kg', href: 'mailto:info@fiscalepro.kg' },
        { label: 'Бишкек, Технологическая 24', href: '#' },
      ]
    }
  ]

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href} 
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-700 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Icon name="brain" className="text-white text-lg" />
              </div>
              <div>
                <h3 className="font-bold">ФискалеПро</h3>
                <p className="text-sm text-gray-400">ИИ-решения для бизнеса</p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="linkedin" size="lg" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="github" size="lg" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="email" size="lg" />
              </a>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-gray-400">
            <p>&copy; {currentYear} ФискалеПро. Все права защищены.</p>
            <p className="mt-2">
              <a href="#" className="hover:text-white">Политика конфиденциальности</a>
              {' • '}
              <a href="#" className="hover:text-white">Условия использования</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer