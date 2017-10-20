FROM node:8

WORKDIR /app
ADD ./ /app

RUN npm install

CMD ["node", "index.js"]
