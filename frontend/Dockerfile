FROM node:22-alpine

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

CMD sh -c "npm ci && npx ng serve --host 0.0.0.0 --port 9000 --poll 1000"
