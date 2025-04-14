FROM node:20-slim as builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

#RUN npm install -g serve

#CMD ["serve","-s","build"]

FROM nginx:alpine

WORKDIR /app

COPY --from=builder /app/build /app/build

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

#RUN ls -al /app && ls -al /app/build

COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

