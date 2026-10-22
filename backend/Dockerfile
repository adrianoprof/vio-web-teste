# Imagem base com Node.js
FROM node:24-alpine

# Pasta de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de dependências
COPY package*.json ./

# Instala somente dependências necessárias à execução
RUN npm ci --omit=dev

# Copia o código da API
COPY . .

# Define a porta utilizada pela aplicação
ENV PORT=3000
EXPOSE 3000

# Inicia o backend
CMD ["npm", "start"]
