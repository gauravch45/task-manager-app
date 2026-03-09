#-----------------------1st Stage-------------------------------
FROM node:20-slim AS base

WORKDIR /app

COPY package*.json ./
## 'npm ci' is faster and more reliable for CI/CD than 'npm install'
RUN npm ci --omit=dev

#------------------------2nd stage-------------------------------
FROM node:20-slim

# SRE Security: Don't run as root in production
RUN groupadd -r testgroup && useradd -r -g testgroup testuser

WORKDIR /app

COPY --from=base /app/node_modules ./node_modules
COPY . .

# Secure the folder permissions
RUN chown -R taskuser:taskgroup /app

# Switch to the limited user
USER taskuser

EXPOSE 5000

CMD ["node","server,js"]
