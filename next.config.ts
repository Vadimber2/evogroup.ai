import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    // Оптимизация компиляции и минификации
    swcMinify: true,

    // Оптимизация production build
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production' ? {
            exclude: ['error', 'warn'],
        } : false,
    },

    // Оптимизация изображений
    images: {
        formats: ['image/webp', 'image/avif'],
        minimumCacheTTL: 60,
    },

    // Экспериментальные функции для производительности
    experimental: {
        optimizePackageImports: ['@nextui-org/react', 'framer-motion', 'lucide-react'],
    },

    // Настройка webpack для оптимизации
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.optimization = {
                ...config.optimization,
                moduleIds: 'deterministic',
                runtimeChunk: 'single',
                splitChunks: {
                    chunks: 'all',
                    cacheGroups: {
                        default: false,
                        vendors: false,
                        framework: {
                            name: 'framework',
                            chunks: 'all',
                            test: /[\\/]node_modules[\\/](react|react-dom|next)[\\/]/,
                            priority: 40,
                            enforce: true,
                        },
                        lib: {
                            test: /[\\/]node_modules[\\/]/,
                            name(module: { context: string }) {
                                const packageName = module.context.match(
                                    /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                                )?.[1]
                                return `lib.${packageName?.replace('@', '')}`
                            },
                            priority: 30,
                            minChunks: 1,
                            reuseExistingChunk: true,
                        },
                    },
                },
            }
        }
        return config
    },
}

export default nextConfig
