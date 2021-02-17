FROM node as build

WORKDIR /app/

COPY . /app/
RUN npm install
RUN npm build

FROM nginx
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/ /app/
