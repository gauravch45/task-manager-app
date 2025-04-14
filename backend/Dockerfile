#-----------------------1st Stage-------------------------------
FROM node:20-slim as base

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev

#------------------------2nd stage-------------------------------
FROM node:20-slim

WORKDIR /app

COPY --from=base /app/node_modules ./node_modules
COPY . .

EXPOSE 5000

CMD ["npm","start"]
