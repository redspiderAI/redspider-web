ARG NGINX_IMAGE=nginx:1.28-alpine
FROM ${NGINX_IMAGE}
COPY infra/site.conf /etc/nginx/conf.d/default.conf
COPY docs/ /usr/share/nginx/html/
HEALTHCHECK --interval=10s --timeout=3s --start-period=3s --retries=3 CMD wget -q -O - http://127.0.0.1/healthz || exit 1
