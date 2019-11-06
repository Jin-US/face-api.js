# Use the official Node.js 10 image.
# https://hub.docker.com/_/node
FROM node:12.13.0

WORKDIR /usr/src/app

COPY package*.json ./


COPY . .

ENV PORT 8081

RUN cd examples/examples-nodejs && npm install
RUN npm i canvas @tensorflow/tfjs-node

CMD [ "npm", "start" ]
# CMD [ "node" ]
