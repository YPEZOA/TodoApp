## STAGE 1 BUILD REACT PROJECT
FROM node:alpine AS build
WORKDIR /app
COPY . /app
RUN npm install
COPY . .
RUN npm run build

## STAGE 2 CREATE NGINX SERVER FOR START
FROM nginx:alpine AS prod-stage
COPY --from=build /app/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
