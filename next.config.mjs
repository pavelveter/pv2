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
  async redirects() {
    return [
      {
        source: '/x/:path*',
        destination: 'https://cloud.mail.ru/public/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
