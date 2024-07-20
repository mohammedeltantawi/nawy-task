FROM node:22

WORKDIR /app

COPY package.json .

COPY package-lock.json ./

COPY . .

EXPOSE 9000

CMD [ -d "node_modules" ] && npm run start || npm ci && npm run start
