FROM nginx

COPY dist/ /data/www
COPY nginx.conf /etc/nginx/nginx.conf
