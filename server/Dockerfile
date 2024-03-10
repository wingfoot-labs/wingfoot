FROM node:lts-alpine AS base

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["tsc"]

FROM base AS builder

CMD [ "npm", "run", "build" ]

FROM node:lts-alpine AS production

WORKDIR /app

COPY --from=builder /dist /app/dist
COPY --from=builder /ssl /app/ssl
