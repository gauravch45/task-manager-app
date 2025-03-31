FROM node:20-slim

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install react-scripts

COPY . .

EXPOSE 3000

CMD ["node_modules/.bin/react-scripts", "start"]
