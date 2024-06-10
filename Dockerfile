# Define a imagem base
FROM node:14-alpine

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de requisitos para o diretório de trabalho
COPY index.html .
COPY css/style.css css/ 
COPY images/ images/
COPY scripts/scripts.js scripts/
COPY README.md .

# Instale o http-server globalmente via npm
RUN npm install -g http-server

# Exponha a porta 8080 para servir o aplicativo
EXPOSE 8000

# Inicie o servidor http quando o contêiner for iniciado
CMD ["http-server", ".", "-p", "8000"]
