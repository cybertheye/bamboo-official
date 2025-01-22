#!/bin/bash

CONTAINERS=$(docker ps -q)

# example:
#[root@i]# echo $CONTAINERS
# 6a7e88a007f5 6ebbbf9aaf54


if [ -z "$CONTAINERS" ]; then
    echo "No containers running"
    exit 0
fi


echo "Stopping follow containers:"
docker stop $CONTAINERS


# 输出结果
if [ $? -eq 0 ]; then
  echo "所有容器已暂停。"
else
  echo "暂停容器时出错。"
fi
