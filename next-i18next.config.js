/** @type {import('next-i18next').UserConfig} */
const config = {
    i18n: {
        defaultLocale: 'ru',
        locales: ['ru', 'en', 'ky'],
        localeDetection: false, // Отключаем автоопределение языка
    },
    fallbackLng: 'ru',
    debug: process.env.NODE_ENV === 'development',
    reloadOnPrerender: process.env.NODE_ENV === 'development',

    // Настройки для React
    react: {
        useSuspense: false,
    },

    // Настройки интерполяции
    interpolation: {
        escapeValue: false,
    },

    // Пространства имен для переводов
    ns: [
        'common',
        'hero',
        'navigation',
        'solutions',
        'calculator',
        'contact',
        'footer',
        'team',
        'testimonials',
        'technology'
    ],

    defaultNS: 'common',

    // Серверные и клиентские языки
    serverLanguageDetection: false,

    // Функция загрузки переводов
    load: 'languageOnly',
}

module.exports = config