# Используем базовый образ Node.js
FROM node:18-alpine AS build

# Устанавливаем pnpm глобально
RUN npm install -g pnpm

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Устанавливаем зависимости с использованием pnpm
RUN pnpm install

# Копируем все файлы проекта
COPY . .

# Сборка приложения
RUN pnpm build

# Удаляем dev-зависимости
RUN pnpm prune --prod

# Используем базовый образ Node.js для продакшн-окружения
FROM node:18-alpine AS production

# Устанавливаем pnpm глобально
RUN npm install -g pnpm

# Рабочая директория для продакшн-окружения
WORKDIR /app

# Копируем файлы с предыдущей стадии
COPY --from=build /app ./

# Открываем порт для приложения
EXPOSE 3000

# Запуск Next.js в продакшн-режиме
CMD ["pnpm", "start"]
