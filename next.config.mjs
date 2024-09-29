/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  webpack: config => {
    // Настройка алиасов для Webpack
    config.resolve.alias['@'] = path.resolve(__dirname, 'src')

    return config
  },
}

module.exports = nextConfig
