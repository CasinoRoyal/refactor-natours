FROM node:12.22.8-alpine3.14
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm ci --only=production
USER node
CMD ["node", "server.js"]