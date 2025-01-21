# 构建镜像
# 这里假设Vue应用构建后的dist文件夹放在当前目录下
# 需要进入包含这个dist文件夹的目录并运行
# docker build -t unicorn .
# docker run -d -p 80:80 -p 443:443 unicorn
# docker run -d -p 80:80 unicorn
# 用nginx镜像构建
FROM nginx:alpine
FROM node:23-alpine

# 创建app目录
WORKDIR /app

# 创建数据目录，然后通过挂载的方式和容器外的数据文件联系起来
RUN mkdir -p ./data


# node的环境
COPY package*.json ./
RUN npm install


# 源代码拷贝进容器
COPY src /app



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
# 运行express
CMD ["node", "src/server/index.mjs"]