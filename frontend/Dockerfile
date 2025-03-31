FROM node:20-slim

WORKDIR /app

COPY package*.json ./

RUN npm cache clean --force

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node_modules/.bin/react-scripts", "start"]
