'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { competitiveAdvantages } from '@/lib/data'
import { Icon } from '@/components/ui/Icon'

const CompetitiveAdvantages: React.FC = () => {
  return (
    <section id="advantages" className="py-20 bg-gradient-to-br from-navy via-blue-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-display font-bold mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Мы не просто разрабатываем ПО — мы создаем интеллектуальные экосистемы
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {competitiveAdvantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Icon name={advantage.icon} size="xl" />
                </div>
                <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>
                <p className="text-white/80 text-sm">{advantage.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CompetitiveAdvantages