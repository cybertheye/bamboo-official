#!/bin/bash


npm run build

# docker network create bamboo-network

echo "docker building nginx..."
docker build -f Dockerfile.nginx -t bamboo-nginx .

echo "docker building express.."
docker build -f Dockerfile.express -t bamboo-express .


echo "docker run express service on port 5001 within bamboo-network"

docker run -d --name express --network bamboo-network -v /root/bamboo-official/data/quotes.db:/app/data/quotes.db -p 5001:5001 bamboo-express


echo "docker run nginx service on port 80/443 within bamboo-network"
docker run -d --network bamboo-network -p 80:80 -p 443:443 bamboo-nginx
