FROM node:20-alpine

WORKDIR /app
COPY package.json .
RUN npm install --production
COPY . .

ENV SESSION_NAME=ernest-v3
CMD ["node", "--no-warnings", "src/core/client.js"]