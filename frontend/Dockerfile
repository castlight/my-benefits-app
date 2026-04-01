FROM node:22-alpine

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install

CMD ["npx", "ng", "serve", "--host", "0.0.0.0", "--port", "9000"]
