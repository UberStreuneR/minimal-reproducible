FROM node:18.0-alpine

WORKDIR /usr/src/app

COPY ./package*.json .

RUN npm i

COPY . .

# WORKDIR /usr/src/app/frontend

# RUN npm run dev
# ENTRYPOINT [ "npm", "run", "dev" ]