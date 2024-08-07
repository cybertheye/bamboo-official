# 构建镜像
# 这里假设Vue应用构建后的dist文件夹放在当前目录下
# 需要进入包含这个dist文件夹的目录并运行
# docker build -t unicorn .
# docker run -d -p 80:80 -p 443:443 unicorn

# 用nginx镜像构建
FROM nginx:alpine

# 拷贝Vue应用dist文件
COPY ./dist /usr/share/nginx/html
COPY 138cf264ee74dc2d392f25f5d6dcb0f5.txt /usr/share/nginx/html
COPY L0WlYvCol5.txt /usr/share/nginx/html
COPY ./ssl /etc/nginx/ssl

# 添加nginx配置,暴露80端口
EXPOSE 80
EXPOSE 443

# 覆盖nginx默认配置
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 运行nginx
CMD ["nginx", "-g", "daemon off;"]
