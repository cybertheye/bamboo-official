# 文案修改
- 文案目录位于 英文文案: src/i18n/en-US.json 中文文案: src/i18n/zh-CN.json


# 图片替换
- 图片目录位于 assets/images/
- 视频目录位于 assets/videos/
> 图片替换 注意保持文件名和文件格式一致

# 本地调试
> npm run dev 脚本可以本地调试预览

# 生产部署
* 打包: npm run build 会构建出dist文件夹
* 上传: 通过 git 上传代码或者ssh copy代码到云服务器中
* 部署: (部署前需要删除之前旧的容器和镜像)
  - docker build -t unicorn . (docker 构建镜像)
  - docker run -d -p 80:80 -p 443:443 unicorn (docker 运行容器)
