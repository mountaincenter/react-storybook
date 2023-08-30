FROM nginx:1.25.2

RUN rm -f /etc/nginx/conf.d/*

ADD nginx.conf /etc/nginx/conf.d/sample.conf
CMD /usr/sbin/nginx -g 'daemon off;' -c /etc/nginx/nginx.conf
