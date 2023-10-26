FROM node:18-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npx tsc
EXPOSE 3334
CMD ["node", "./dist/server.js"]

# docker build -t ws1-api .
# docker container run -p 8098:3334 --name ws1-api-container1 ws1-api
# docker run -d --name nginx-node -p 80:80 -v ./conf.d:/etc/nginx/conf.d nginx
