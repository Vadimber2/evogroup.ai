'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Icon } from '@/components/ui/Icon'

const TrustSignals: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  const certifications = [
    { name: 'ISO 27001', icon: 'certificate', description: 'Сертификация безопасности' },
    { name: 'API Partner', icon: 'api', description: 'Официальный партнер госорганов' },
    { name: 'AI Certified', icon: 'brain', description: 'Сертифицированные ИИ-решения' },
  ]

  const stats = [
    { value: '10+', label: 'Лет на рынке', icon: 'star' },
    { value: '50+', label: 'Крупных клиентов', icon: 'building' },
    { value: '99.9%', label: 'Надежность систем', icon: 'shield' },
    { value: '24/7', label: 'Техподдержка', icon: 'phone' },
  ]

  return (
    <section id="trust" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 30c11.046 0 20 8.954 20 20s-8.954 20-20 20-20-8.954-20-20 8.954-20 20-20zm0 10c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10z' fill='%231B2951' fill-opacity='0.4'/%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
            Нам доверяют лидеры рынка
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Работаем с крупнейшими банками, промышленными компаниями и государственными организациями
          </p>
        </motion.div>

        {/* Client logos */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <p className="text-center text-sm text-gray-500 mb-8 uppercase tracking-wider">
              Наши ключевые клиенты
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              {[
                { icon: 'bank', name: 'Крупнейший банк КР', color: 'text-blue-600' },
                { icon: 'factory', name: 'НефтеПром КР', color: 'text-orange-600' },
                { icon: 'government', name: 'Министерство цифрового развития', color: 'text-purple-600' },
                { icon: 'building', name: 'Корпорация развития КР', color: 'text-green-600' },
              ].map((client) => (
                <motion.div
                  key={client.name}
                  variants={itemVariants}
                  className="flex flex-col items-center justify-center p-4 hover:bg-gray-50 rounded-lg transition-colors duration-200 group"
                >
                  <div className={`mb-3 ${client.color} opacity-80 group-hover:opacity-100 transition-all duration-200 group-hover:scale-110`}>
                    <Icon name={client.icon} size="xl" />
                  </div>
                  <span className="text-sm text-gray-600 text-center">{client.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <Icon name={stat.icon} className="text-3xl text-blue-600 mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Сертификации и партнерства
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <motion.div
                key={cert.name}
                variants={itemVariants}
                className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-colors duration-200"
              >
                <div className="bg-white/20 rounded-full p-3">
                  <Icon name={cert.icon} className="text-2xl" />
                </div>
                <div>
                  <div className="font-semibold">{cert.name}</div>
                  <div className="text-sm text-white/80">{cert.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-600 italic">
            &ldquo;ФискалеПро - единственная компания в Кыргызстане с полной интеграцией государственных API 
            и экспертизой в области искусственного интеллекта для enterprise-решений&rdquo;
          </p>
          <p className="text-sm text-gray-500 mt-2">
            — Ассоциация IT-компаний Кыргызстана
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default TrustSignals