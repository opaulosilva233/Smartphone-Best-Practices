# Fase de desenvolvimento
FROM node:18-alpine AS dev

WORKDIR /app

# Instalar dependências do sistema
RUN apk add --no-cache git

# Copiar package.json e package-lock.json
COPY package*.json ./

# Instalar dependências npm
RUN npm install

# Copiar todo o código-fonte
COPY . .

# Expor porta do Vite
EXPOSE 5173

# Comando padrão para desenvolvimento com hot-reload
CMD ["npm", "run", "dev"]
