# 发布镜像

1. 制作自己的镜像

  ```shell
  docker build -t riskers/docker-demo .
  ```

2. 发布镜像到 docker hub

  ```shell
  docker push riskers/docker-demo
  ```

3. 运行镜像

  ```shell
  docker run -it --name demo -p 3000:3000 riskers/docker-demo
  ```