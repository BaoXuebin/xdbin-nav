# 使用官方 Nginx 镜像作为基础镜像
FROM nginx:latest

# 将本地的 public 文件夹拷贝到 Nginx 的默认 HTML 目录
COPY ./public /usr/share/nginx/html
