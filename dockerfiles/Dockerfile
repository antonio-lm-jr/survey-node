# build
FROM node:18-alpine as builder
WORKDIR /src

COPY . ./

RUN npm install --only=development; \
    npm run build; \
    npm install --only=production;

# release
FROM node:18-alpine
WORKDIR /app

COPY --from=builder src/dist ./dist
COPY --from=builder src/node_modules ./node_modules

CMD ["node", "dist/main/server.js"]