'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { teamMembers } from '@/lib/data'
import { Card } from '@/components/ui/Card'
import { Icon } from '@/components/ui/Icon'

const Team: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
            Наша команда
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Эксперты в области искусственного интеллекта и enterprise-разработки
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card variant="hover" className="text-center">
                <div className="p-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name="brain" className="text-3xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{member.position}</p>
                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                    {member.expertise.map((skill) => (
                      <span 
                        key={skill} 
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  {member.linkedin && (
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700"
                    >
                      <Icon name="linkedin" className="mr-2" />
                      LinkedIn
                    </a>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team