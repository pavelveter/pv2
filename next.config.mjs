/** @type {import('next').NextConfig} */
import path from 'path'

const nextConfig = {
  reactStrictMode: true,
  webpack: config => {
    // Настройка алиасов для Webpack
    config.resolve.alias['@'] = path.resolve('./src')
    return config
  },
  // Пропуск проверки типов во время сборки
  typescript: {
    ignoreBuildErrors: true,
  },
  // Отключение линтинга на этапе сборки
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
