FROM node:18-alpine AS build
RUN npm install -g pnpm
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install
COPY . .
RUN pnpm build

# Проверка наличия файлов сборки
RUN ls .next
FROM node:18-alpine AS production
RUN npm install -g pnpm
WORKDIR /app
COPY --from=build /app ./
EXPOSE 4000
CMD ["pnpm", "start -p 4000"]
