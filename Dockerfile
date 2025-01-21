# 构建镜像
# 这里假设Vue应用构建后的dist文件夹放在当前目录下
# 需要进入包含这个dist文件夹的目录并运行
# docker build -t unicorn .
# docker run -d -p 80:80 -p 443:443 unicorn
# docker run -d -p 80:80 unicorn
# 使用node作为基础镜像
FROM node:23-alpine

# 安装nginx和supervisor
RUN apk add --no-cache nginx supervisor

# 创建必要的目录
RUN mkdir -p /app/data && \
    mkdir -p /var/log/nginx && \
    mkdir -p /var/log/supervisor && \
    mkdir -p /var/run/nginx && \
    mkdir -p /var/lib/nginx

# 设置工作目录
WORKDIR /app

# 安装node依赖
COPY package*.json ./
RUN npm install

# 拷贝源代码
COPY src /app/src

# 拷贝Vue应用dist文件
COPY ./dist /usr/share/nginx/html
COPY 138cf264ee74dc2d392f25f5d6dcb0f5.txt /usr/share/nginx/html
COPY L0WlYvCol5.txt /usr/share/nginx/html
COPY ./ssl /etc/nginx/ssl
# 覆盖nginx默认配置
COPY nginx.conf /etc/nginx/conf.d/default.conf


# 拷贝supervisor配置文件
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# 暴露端口
EXPOSE 80
EXPOSE 443

# 启动supervisor
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]



## # 拷贝Vue应用dist文件
## COPY ./dist /usr/share/nginx/html
## COPY 138cf264ee74dc2d392f25f5d6dcb0f5.txt /usr/share/nginx/html
## COPY L0WlYvCol5.txt /usr/share/nginx/html
## COPY ./ssl /etc/nginx/ssl



## # 添加nginx配置,暴露80端口
## EXPOSE 80
## EXPOSE 443


## # 运行nginx
## CMD ["nginx", "-g", "daemon off;"]
## # 运行express
## CMD ["node", "./src/server/index.mjs"]
