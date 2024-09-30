# Шаг 1: Используем базовый образ Node.js
FROM node:18-alpine AS build

# Отключаем телеметрию Next.js на этапе сборки
ENV NEXT_TELEMETRY_DISABLED 1

# Устанавливаем рабочую директорию
WORKDIR /app

# Устанавливаем pnpm
RUN npm install -g pnpm

# Копируем package.json и pnpm-lock.yaml для установки зависимостей
COPY package.json pnpm-lock.yaml ./

# Устанавливаем зависимости
RUN pnpm install

# Копируем все файлы проекта
COPY . .

# Собираем Next.js проект для продакшена
RUN pnpm build

# Шаг 2: Финальный продакшн образ
FROM node:18-alpine AS production

# Отключаем телеметрию Next.js на этапе выполнения
ENV NEXT_TELEMETRY_DISABLED 1

# Устанавливаем рабочую директорию
WORKDIR /app

# Устанавливаем pnpm
RUN npm install -g pnpm

# Копируем только необходимые файлы из предыдущего этапа сборки
COPY --from=build /app ./

# Открываем порт 4000
EXPOSE 4000

# Запускаем приложение
CMD ["pnpm", "start", "-p", "4000"]
