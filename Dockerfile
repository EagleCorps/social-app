FROM node:18-alpine AS build

RUN apk add --no-cache curl

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN apk add vips
RUN npm install --include=optional --os=linux --libc=musl --cpu=x64 sharp@latest
RUN npm ci

FROM build

WORKDIR /app

COPY . .

HEALTHCHECK --interval=5s --retries=10 CMD curl -f http://localhost:3000/api/.well-known/jwks.json || exit 1

CMD ["npm", "run", "dev"]
