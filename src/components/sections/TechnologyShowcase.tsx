'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import { Icon } from '@/components/ui/Icon'

const TechnologyShowcase: React.FC = () => {
  const technologies = [
    {
      category: 'Искусственный интеллект',
      items: [
        { name: 'Machine Learning', icon: 'brain', description: 'Предиктивная аналитика и автоматизация' },
        { name: 'NLP', icon: 'document', description: 'Обработка естественного языка' },
        { name: 'Computer Vision', icon: 'eye', description: 'Компьютерное зрение для контроля' },
      ]
    },
    {
      category: 'Интеграции',
      items: [
        { name: 'API Gateway', icon: 'api', description: 'Единая точка доступа к госсервисам' },
        { name: 'Microservices', icon: 'puzzle', description: 'Масштабируемая архитектура' },
        { name: 'Real-time Sync', icon: 'lightning', description: 'Синхронизация в реальном времени' },
      ]
    },
    {
      category: 'Безопасность',
      items: [
        { name: 'Encryption', icon: 'shield', description: '256-bit шифрование данных' },
        { name: 'Compliance', icon: 'certificate', description: 'Соответствие стандартам' },
        { name: 'Monitoring', icon: 'eye', description: '24/7 мониторинг систем' },
      ]
    }
  ]

  return (
    <section id="technology" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
            Передовые технологии
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Используем самые современные технологии для создания надежных и эффективных решений
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">{tech.category}</h3>
                  <div className="space-y-4">
                    {tech.items.map((item) => (
                      <div key={item.name} className="flex items-start space-x-3">
                        <div className="bg-blue-100 text-blue-600 p-2 rounded-lg">
                          <Icon name={item.icon} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{item.name}</h4>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-6 py-3 rounded-full">
            <Icon name="cpu" />
            <span className="font-medium">Все технологии сертифицированы и протестированы</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TechnologyShowcase