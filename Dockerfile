# build front end
FROM node:20-alpine AS client_build

WORKDIR /app

COPY ./client /app/

RUN npm install
RUN node_modules/.bin/ng build -c=production

# build back end
FROM node:20-alpine AS server_build

WORKDIR /app

COPY ./server /app/
COPY --from=client_build /app/dist/client /app/angular

RUN npm install --production

RUN npm run build

# build docker
FROM node:20-alpine

WORKDIR /app

RUN node -v

COPY --from=server_build /app ./

CMD ["node", "./dist/app.mjs"]

