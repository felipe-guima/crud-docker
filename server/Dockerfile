# Use a imagem oficial do Node.js como base
FROM node:20

# Define o diretório de trabalho dentro do container
WORKDIR /app-node

# Define a porta para build e runtime
ARG PORT_BUILD=8800
ENV PORT=$PORT_BUILD
EXPOSE $PORT_BUILD

# Copia os arquivos da aplicação para o diretório de trabalho no container
COPY . .

# Instala as dependências
RUN npm install

# Gera o Prisma Client
RUN npx prisma generate

# Comando para rodar a aplicação
ENTRYPOINT ["npm", "run", "back"]
