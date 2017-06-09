# docker 化应用

我们在 `0-app` 的基础上，把它 docker 化。

1. 把刚才所有文件都放在 `src` 下
2. 新建一个 `Dockerfile`

  ```dockerfile
  FROM node:8

  MAINTAINER riskers

  WORKDIR /src
  RUN npm install -g cnpm --registry=https://registry.npm.taobao.org
  RUN cnpm install

  EXPOSE 3000

  CMD ["node", "app.js"]
  ```

3. 构建镜像

  ```shell
  docker build -t docker-demo .
  ```

4. 运行镜像

  ```shell
  docker run -it --name demo -v ~/docker-demo/1-docker-app/src:/src -p 3000:3000 docker-demo
  ```

5. 停止镜像

  ```shell
  docker stop demo
  ```