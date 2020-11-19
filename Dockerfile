FROM node:14
LABEL org.opencontainers.image.source https://github.com/to-do-app/frontend

WORKDIR /frontend

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build
