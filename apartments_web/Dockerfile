FROM node:22

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD [ -d "node_modules" ] && npm run build ||  npm ci && npm run build && npm run start || npm ci && npm run start
