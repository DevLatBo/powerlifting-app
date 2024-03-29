FROM node:lts-alpine as build

WORKDIR /app

COPY package*.json /app/
COPY public/favicon.ico /app/public/
RUN npm install
COPY ./ /app/
RUN npm run build


FROM nginx:stable-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
