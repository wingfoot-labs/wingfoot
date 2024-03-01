FROM node:lts-alpine AS base

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

FROM base AS builder

RUN npm run build

FROM nginx:alpine AS production

COPY /nginx.conf /etc/nginx/conf.d/default.conf
COPY /ssl /etc/nginx/ssl
COPY --from=builder /app/dist /usr/share/nginx/html