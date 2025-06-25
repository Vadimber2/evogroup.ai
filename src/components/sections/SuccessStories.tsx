'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { caseStudies } from '@/lib/data'
import { Card } from '@/components/ui/Card'
import { Icon } from '@/components/ui/Icon'
import { Button } from '@/components/ui/Button'

const SuccessStories: React.FC = () => {
  return (
    <section id="cases" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
            Истории успеха
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Реальные кейсы внедрения наших ИИ-решений в различных отраслях
          </p>
        </motion.div>

        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card variant="hover" className="overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="p-8 lg:p-12">
                    <div className="mb-4">
                      <span className="text-sm text-blue-600 font-medium">{study.industry}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{study.title}</h3>
                    <p className="text-gray-600 mb-6">{study.client}</p>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Задача:</h4>
                        <p className="text-gray-600">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Решение:</h4>
                        <p className="text-gray-600">{study.solution}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {study.results.map((result) => (
                        <div key={result.metric} className="text-center">
                          <div className="text-2xl font-bold text-blue-600">{result.value}</div>
                          <div className="text-xs text-gray-600">{result.metric}</div>
                        </div>
                      ))}
                    </div>

                    <Button variant="primary" size="sm">
                      <Icon name="document" className="mr-2" />
                      Подробный кейс
                    </Button>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 lg:p-12 flex items-center justify-center">
                    <div className="text-center">
                      <Icon name="chart" className="text-6xl text-blue-600 mb-4" />
                      <p className="text-gray-600">Графики и скриншоты</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SuccessStories