FROM node:8.17-alpine

ENV NODE_ENV=development

WORKDIR /usr/src/app

COPY package.json package-lock.json tsconfig.json ./

RUN npm i

COPY . .

ENTRYPOINT ["npm", "start"]