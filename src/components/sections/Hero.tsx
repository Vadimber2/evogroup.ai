'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { companyStats } from '@/lib/data'

const Hero: React.FC = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy via-blue-900 to-purple-900">
      {/* Animated background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-blue-600/20 animate-pulse" />
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300A8FF' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => {
          // Use deterministic values based on index instead of Math.random()
          const left = ((i * 37) % 100);
          const top = ((i * 53) % 100);
          const duration = 3 + (i % 3);
          const delay = (i % 5) * 0.4;
          
          return (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
              style={{
                left: `${left}%`,
                top: `${top}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                delay: delay,
              }}
            />
          );
        })}
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div variants={fadeIn} className="flex justify-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2">
              <Icon name="brain" className="text-blue-400" />
              <span className="text-sm text-white/90 font-medium">
                ИИ-центричная компания №1 в Кыргызстане
              </span>
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.h1 
            variants={fadeIn}
            className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold text-white leading-tight"
          >
            Искусственный интеллект
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              в основе цифровой трансформации
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            variants={fadeIn}
            className="text-lg sm:text-xl lg:text-2xl text-white/80 max-w-3xl mx-auto"
          >
            Комплексные ИИ-решения для банков, нефтеперерабатывающих компаний 
            и государственного сектора Кыргызской Республики
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={fadeIn}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            <Button size="xl" variant="secondary" className="shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300">
              <Icon name="rocket" className="mr-2" />
              Запросить демо
            </Button>
            <Button size="xl" variant="outline" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">
              <Icon name="document" className="mr-2" />
              Скачать презентацию
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div 
            variants={fadeIn}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-12"
          >
            {[
              { label: 'Проектов завершено', value: companyStats.projectsCompleted, icon: 'check' },
              { label: 'Сэкономлено клиентам', value: companyStats.clientsSaved, icon: 'money' },
              { label: 'Uptime системы', value: companyStats.uptime, icon: 'shield' },
              { label: 'Экспертов в команде', value: companyStats.teamSize, icon: 'brain' },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Icon name={stat.icon} className="text-blue-400 text-2xl mb-2" />
                <div className="text-2xl lg:text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            variants={fadeIn}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Icon name="arrow-down" className="text-white/50 text-2xl" />
          </motion.div>
        </motion.div>
      </div>

      {/* Partners logos */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/20 to-transparent py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-white/60 text-sm mb-4">Нам доверяют лидеры рынка</p>
          <div className="flex items-center justify-center space-x-8 opacity-60">
            {['🏦', '🏭', '🏛️', '💼', '🏢'].map((icon, i) => (
              <motion.span
                key={i}
                className="text-3xl grayscale hover:grayscale-0 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
              >
                {icon}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero