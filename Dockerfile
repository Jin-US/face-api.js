# Use the official Node.js 10 image.
# https://hub.docker.com/_/node
FROM node:10

WORKDIR /usr/src/app

COPY package*.json ./


COPY . .

ENV PORT 8080

CMD [ "npm", "start" ]
