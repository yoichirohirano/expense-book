FROM node:26.12.1-alpine

ENV NODE_ENV=development

WORKDIR /usr/src/app

COPY package.json package-lock.json tsconfig.json ./

RUN npm i

COPY . .

CMD ["npm", "start", "--", "--host"]
