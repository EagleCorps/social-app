FROM node:18-alpine AS build

RUN apk add --no-cache curl

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm ci

FROM build

WORKDIR /app

COPY . .

HEALTHCHECK --interval=5s --retries=10 CMD curl -f http://localhost:3000/api/.well-known/jwks.json || exit 1

CMD ["npm", "run", "dev"]
