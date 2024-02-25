FROM node:lts-alpine AS base

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

FROM base AS builder

CMD [ "npm", "run", "build" ]

FROM node:lts-alpine AS production

WORKDIR /app

COPY --from=builder /dist /app/dist

EXPOSE 5000

