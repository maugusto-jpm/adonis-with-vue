FROM node:12-alpine

WORKDIR /app

RUN apk add postgresql-client
