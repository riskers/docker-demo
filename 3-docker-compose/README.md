# docker-compose

每次我们运行一个容器，都要手动输入一行命令行，比如： `docker run -it --name demo -p 3000:3000 riskers/docker-demo`

一个容器还好，要是部署一个多容器应用，这些命令行会让人累死，所以有了 docker-compose ，只要写好 `docker-compose.yml`，就相当于把命令行参数保存到这个文件。部署的时候，只要执行：

```shell
docker-compose up
```