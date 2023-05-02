FROM node:18.16-bullseye-slim

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY ./src ./src
COPY ./env ./env

RUN npm install pm2 -g
ENV PM2_PUBLIC_KEY {YOUR_PM2_PUBLIC_KEY}
ENV PM2_SECRET_KEY {YOUR_PM2_SECRET_KEY}

CMD ["pm2-runtime", "src/app.js"]
