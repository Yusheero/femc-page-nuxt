# ---------- этап сборки ----------
FROM node:20-alpine AS builder

WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm i -g pnpm
RUN pnpm install 
COPY . .
RUN pnpm build          # создаст .output

# ---------- этап запуска ----------
FROM node:20-alpine AS runtime

WORKDIR /app
# копируем только .output
COPY --from=builder /app/.output ./.output
EXPOSE 3001
ENV HOST=0.0.0.0
ENV PORT=3001
CMD ["node", ".output/server/index.mjs"]
