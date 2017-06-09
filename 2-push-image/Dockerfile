FROM node:8

MAINTAINER riskers

WORKDIR /src
RUN npm install -g cnpm --registry=https://registry.npm.taobao.org
RUN cnpm install

EXPOSE 3000

CMD ["node", "app.js"]