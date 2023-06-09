## STAGE 1 BUILD REACT PROJECT
FROM node:lts-alpine3.18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

## STAGE 2 CREATE NGINX SERVER FOR START
FROM nginx:alpine AS prod-stage
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
