# Stage 1: Build Stage
FROM node:20-slim as builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV REACT_APP_API_URL=__REACT_APP_API_URL_PLACEHOLDER__

RUN npm run build

#RUN npm install -g serve

#CMD ["serve","-s","build"]

# Stage 2: Production Stage
FROM nginx:alpine

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

#RUN ls -al /app && ls -al /app/build

COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["/bin/sh", "-c", "find /usr/share/nginx/html -type f -name '*.js' -exec sed -i \"s|__REACT_APP_API_URL_PLACEHOLDER__|${REACT_APP_API_URL}|g\" {} + && nginx -g 'daemon off;'"]
#CMD ["nginx", "-g", "daemon off;"]
