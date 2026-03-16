FROM node:24.14.0-alpine

WORKDIR /app

COPY package.json .

RUN pnpm install

COPY . .

RUN pnpm run build

EXPOSE 4000

CMD [ "pnpm" "start" ]