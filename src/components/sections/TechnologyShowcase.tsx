'use client'

import React from 'react'
import { useTranslation, Locale } from '@/components/providers/I18nProvider'

const TechnologyShowcase: React.FC = () => {
    const { t, locale } = useTranslation()

    // Функция для получения переводов с fallback значениями
    const getTranslations = () => {
        if (locale === 'en') {
            return {
                title: 'Cutting-Edge Technologies',
                subtitle: 'We use the most modern technologies to create reliable and efficient solutions',
                certificationText: 'All technologies are certified and tested in production environment',
                categories: {
                    ai: 'Artificial Intelligence',
                    integrations: 'Integrations',
                    security: 'Security'
                }
            }
        } else if (locale === 'ky') {
            return {
                title: 'Алдыңкы технологиялар',
                subtitle: 'Ишенимдүү жана эффективдүү чечимдерди түзүү үчүн эң заманбап технологияларды колдонобуз',
                certificationText: 'Бардык технологиялар сертификатталган жана сыналган',
                categories: {
                    ai: 'Жасалма акыл',
                    integrations: 'Интеграциялар',
                    security: 'Коопсуздук'
                }
            }
        } else {
            return {
                title: 'Передовые технологии',
                subtitle: 'Используем самые современные технологии для создания надежных и эффективных решений',
                certificationText: 'Все технологии сертифицированы и протестированы в production-среде',
                categories: {
                    ai: 'Искусственный интеллект',
                    integrations: 'Интеграции',
                    security: 'Безопасность'
                }
            }
        }
    }

    // Данные технологий с переводами
    const getTechnologies = () => {
        if (locale === 'en') {
            return [
                {
                    category: 'Artificial Intelligence',
                    description: 'Advanced machine learning algorithms and neural networks',
                    items: [
                        {
                            name: 'Machine Learning',
                            icon: '🧠',
                            description: 'Predictive analytics and decision automation'
                        },
                        {
                            name: 'Natural Language Processing',
                            icon: '📝',
                            description: 'Understanding and generating human language'
                        },
                        {
                            name: 'Computer Vision',
                            icon: '👁️',
                            description: 'Image and video analysis and processing'
                        },
                    ]
                },
                {
                    category: 'Integrations',
                    description: 'Seamless connection to existing systems and services',
                    items: [
                        {
                            name: 'API Gateway',
                            icon: '🔗',
                            description: 'Single access point to microservices'
                        },
                        {
                            name: 'Microservices',
                            icon: '🧩',
                            description: 'Scalable and flexible architecture'
                        },
                        {
                            name: 'Real-time Processing',
                            icon: '⚡',
                            description: 'Instant data processing and sync'
                        },
                    ]
                },
                {
                    category: 'Security',
                    description: 'Enterprise-level data protection and compliance',
                    items: [
                        {
                            name: 'Data Encryption',
                            icon: '🛡️',
                            description: '256-bit data encryption algorithms'
                        },
                        {
                            name: 'Standards Compliance',
                            icon: '📜',
                            description: 'International security standards'
                        },
                        {
                            name: 'System Monitoring',
                            icon: '📊',
                            description: '24/7 system monitoring and alerts'
                        },
                    ]
                }
            ]
        } else if (locale === 'ky') {
            return [
                {
                    category: 'Жасалма акыл',
                    description: 'Машина үйрөнүү жана нейрондук тармактын алдыңкы алгоритмдери',
                    items: [
                        {
                            name: 'Machine Learning',
                            icon: '🧠',
                            description: 'Алдын ала аналитика жана автоматташтыруу'
                        },
                        {
                            name: 'NLP',
                            icon: '📝',
                            description: 'Табигый тилди иштетүү жана түшүнүү'
                        },
                        {
                            name: 'Computer Vision',
                            icon: '👁️',
                            description: 'Сүрөт жана видеону талдоо жана иштетүү'
                        },
                    ]
                },
                {
                    category: 'Интеграциялар',
                    description: 'Учурдагы системалар менен бийик баамдуу туташуу',
                    items: [
                        {
                            name: 'API Gateway',
                            icon: '🔗',
                            description: 'Микросервистерге бирдиктүү кирүү чекити'
                        },
                        {
                            name: 'Microservices',
                            icon: '🧩',
                            description: 'Масштабдалуучу жана ийкемдүү архитектура'
                        },
                        {
                            name: 'Real-time Sync',
                            icon: '⚡',
                            description: 'Реалдуу убакта синхрондоштуруу'
                        },
                    ]
                },
                {
                    category: 'Коопсуздук',
                    description: 'Корпоративдик деңгээлде маалыматтарды коргоо',
                    items: [
                        {
                            name: 'Шифрлөө',
                            icon: '🛡️',
                            description: '256-бит маалыматтарды шифрлөө'
                        },
                        {
                            name: 'Стандарттар',
                            icon: '📜',
                            description: 'Эл аралык коопсуздук стандарттары'
                        },
                        {
                            name: 'Мониторинг',
                            icon: '📊',
                            description: '24/7 системаларды көзөмөлдөө'
                        },
                    ]
                }
            ]
        } else {
            return [
                {
                    category: 'Искусственный интеллект',
                    description: 'Передовые алгоритмы машинного обучения и нейронных сетей',
                    items: [
                        {
                            name: 'Machine Learning',
                            icon: '🧠',
                            description: 'Предиктивная аналитика и автоматизация'
                        },
                        {
                            name: 'NLP',
                            icon: '📝',
                            description: 'Обработка естественного языка'
                        },
                        {
                            name: 'Computer Vision',
                            icon: '👁️',
                            description: 'Компьютерное зрение для контроля'
                        },
                    ]
                },
                {
                    category: 'Интеграции',
                    description: 'Бесшовное подключение к существующим системам',
                    items: [
                        {
                            name: 'API Gateway',
                            icon: '🔗',
                            description: 'Единая точка доступа к госсервисам'
                        },
                        {
                            name: 'Microservices',
                            icon: '🧩',
                            description: 'Масштабируемая архитектура'
                        },
                        {
                            name: 'Real-time Sync',
                            icon: '⚡',
                            description: 'Синхронизация в реальном времени'
                        },
                    ]
                },
                {
                    category: 'Безопасность',
                    description: 'Корпоративный уровень защиты данных',
                    items: [
                        {
                            name: 'Encryption',
                            icon: '🛡️',
                            description: '256-bit шифрование данных'
                        },
                        {
                            name: 'Compliance',
                            icon: '📜',
                            description: 'Соответствие стандартам'
                        },
                        {
                            name: 'Monitoring',
                            icon: '📊',
                            description: '24/7 мониторинг систем'
                        },
                    ]
                }
            ]
        }
    }

    // Дополнительные технологические стеки
    const getTechStack = () => {
        if (locale === 'en') {
            return {
                title: 'Technology Stack',
                cloud: {
                    title: 'Cloud Platforms',
                    items: ['AWS', 'Google Cloud', 'Microsoft Azure', 'Yandex.Cloud']
                },
                databases: {
                    title: 'Databases',
                    items: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch']
                },
                frameworks: {
                    title: 'Frameworks',
                    items: ['TensorFlow', 'PyTorch', 'React', 'Node.js']
                }
            }
        } else if (locale === 'ky') {
            return {
                title: 'Технологиялык стек',
                cloud: {
                    title: 'Булут платформалары',
                    items: ['AWS', 'Google Cloud', 'Microsoft Azure', 'Yandex.Cloud']
                },
                databases: {
                    title: 'Маалымат базалары',
                    items: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch']
                },
                frameworks: {
                    title: 'Фреймворктор',
                    items: ['TensorFlow', 'PyTorch', 'React', 'Node.js']
                }
            }
        } else {
            return {
                title: 'Технологический стек',
                cloud: {
                    title: 'Облачные платформы',
                    items: ['AWS', 'Google Cloud', 'Microsoft Azure', 'Яндекс.Облако']
                },
                databases: {
                    title: 'Базы данных',
                    items: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch']
                },
                frameworks: {
                    title: 'Фреймворки',
                    items: ['TensorFlow', 'PyTorch', 'React', 'Node.js']
                }
            }
        }
    }

    const translations = getTranslations()
    const technologies = getTechnologies()
    const techStack = getTechStack()

    return (
        <section id="technology" className="py-24 bg-slate-800/50 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/3 left-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/3 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm text-white/80 shadow-sm mb-6">
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                        {translations.title}
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        {translations.title}
                    </h2>
                    <p className="text-xl text-white/70 max-w-3xl mx-auto">
                        {translations.subtitle}
                    </p>
                </div>

                {/* Main Technology Categories */}
                <div className="grid lg:grid-cols-3 gap-8 mb-16">
                    {technologies.map((tech, index) => (
                        <div
                            key={tech.category}
                            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                        >
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                    {tech.category}
                                </h3>
                                <p className="text-white/60 text-sm leading-relaxed">
                                    {tech.description}
                                </p>
                            </div>

                            <div className="space-y-6">
                                {tech.items.map((item) => (
                                    <div key={item.name} className="flex items-start space-x-4 group/item">
                                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform duration-200">
                                            <span className="text-xl">{item.icon}</span>
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-semibold text-white text-lg mb-2 group-hover/item:text-blue-300 transition-colors">
                                                {item.name}
                                            </h4>
                                            <p className="text-white/70 text-sm leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Technology Stack */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 mb-16">
                    <h3 className="text-2xl font-bold text-white mb-8 text-center">
                        {techStack.title}
                    </h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <h4 className="text-lg font-semibold text-blue-400 mb-4">
                                {techStack.cloud.title}
                            </h4>
                            <div className="space-y-2">
                                {techStack.cloud.items.map((item) => (
                                    <div key={item} className="text-white/70 text-sm bg-white/5 rounded-lg py-2 px-3">
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="text-center">
                            <h4 className="text-lg font-semibold text-purple-400 mb-4">
                                {techStack.databases.title}
                            </h4>
                            <div className="space-y-2">
                                {techStack.databases.items.map((item) => (
                                    <div key={item} className="text-white/70 text-sm bg-white/5 rounded-lg py-2 px-3">
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="text-center">
                            <h4 className="text-lg font-semibold text-green-400 mb-4">
                                {techStack.frameworks.title}
                            </h4>
                            <div className="space-y-2">
                                {techStack.frameworks.items.map((item) => (
                                    <div key={item} className="text-white/70 text-sm bg-white/5 rounded-lg py-2 px-3">
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Certification Badge */}
                <div className="text-center">
                    <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm text-white px-8 py-4 rounded-full border border-blue-500/30 hover:scale-105 transition-transform duration-200">
                        <span className="text-xl">🏆</span>
                        <span className="font-medium">{translations.certificationText}</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TechnologyShowcase