FROM node:8

MAINTAINER riskers

WORKDIR /src
COPY ./src/package.json .
RUN npm install --registry=https://registry.npm.taobao.org

EXPOSE 3000

CMD ["node", "app.js"]