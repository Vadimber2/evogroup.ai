/** @type {import('next-i18next').UserConfig} */
const config = {
    i18n: {
        defaultLocale: 'ru',
        locales: ['ru', 'eng', 'kgz'],
    },
    fallbackLng: 'ru',
    debug: process.env.NODE_ENV === 'development',

    reloadOnPrerender: process.env.NODE_ENV === 'development',
}

export default config