# Base comum para reduzir duplicação
FROM node:20-alpine AS base

WORKDIR /app
COPY package*.json ./
RUN npm install

# Fase de desenvolvimento (usada pelo docker-compose)
FROM base AS dev

COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

# Fase de build para produção
FROM base AS build

COPY . .
RUN npm run build

# Imagem final de produção para servir os ficheiros estáticos
FROM nginx:1.27-alpine AS production

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
