#!/usr/bin/env bash
# Run as root on the confirmed zgyjserver host. Archive contains docs/ and infra/.
set -euo pipefail
release_id="${1:?release ID required}"
archive="${2:?absolute archive path required}"
[[ "$release_id" =~ ^[a-z0-9][a-z0-9-]*$ ]] || exit 2
[[ "$archive" = /tmp/redspider-*.tar.gz ]] || exit 2
base=/opt/redspider-web
release="$base/releases/$release_id"
teen_release=$(readlink -f /opt/teenai-h5/current)
gateway=teenai-h5-gateway-1
site_project="redspider-$release_id"
site_container="$site_project-site-1"
old_image=$(docker inspect "$gateway" --format '{{.Config.Image}}')
test "$(docker inspect "$gateway" --format '{{.State.Health.Status}}')" = healthy
test ! -e "$release"
mkdir -p "$release" "$base/backups/$release_id"
tar -xzf "$archive" -C "$release"
test -f "$release/docs/index.html"
test -f "$release/docs/release.json"
docker cp "$gateway:/etc/nginx/conf.d/default.conf" "$release/infra/gateway.before.conf"
cp -p "$teen_release/.env.docker" "$base/backups/$release_id/teenai.env"
chmod 600 "$base/backups/$release_id/teenai.env"
printf '%s\n' "$old_image" > "$base/backups/$release_id/gateway-image.txt"
printf '%s\n' "$teen_release" > "$base/backups/$release_id/teenai-release.txt"
python3 - "$release" "$release_id" <<'PY'
import pathlib, re, sys
root = pathlib.Path(sys.argv[1])
config = (root / 'infra/gateway.before.conf').read_text()
config = re.sub(r'    # Red Spider company website\.[\s\S]*?(?=    location / \{\n        proxy_pass http://web:80;)', '', config)
needle = '    location / {\n        proxy_pass http://web:80;'
assert config.count(needle) == 1, 'Unexpected gateway layout; refusing to replace routes'
addition = '''    # Red Spider company website. All existing application paths stay on web.
    location = / {
        proxy_pass http://UPSTREAM_HOST:80;
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-Proto https;
    }

    location ^~ /redspider-site/ {
        proxy_pass http://UPSTREAM_HOST:80/;
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-Proto https;
    }

'''
(root / 'infra/gateway.conf').write_text(config.replace(needle, addition.replace('UPSTREAM_HOST', 'redspider-site-' + sys.argv[2]) + needle))
(root / 'infra/Gateway.Dockerfile').write_text('ARG BASE_IMAGE=nginx:1.28-alpine\nFROM ${BASE_IMAGE}\nCOPY infra/gateway.conf /etc/nginx/conf.d/default.conf\n')
PY
docker build --pull=false --build-arg "NGINX_IMAGE=$old_image" -f "$release/infra/Dockerfile" -t "redspider-site:$release_id" "$release"
docker build --pull=false --build-arg "BASE_IMAGE=$old_image" -f "$release/infra/Gateway.Dockerfile" -t "redspider-gateway:$release_id" "$release"
printf 'SITE_IMAGE=redspider-site:%s\nSITE_ALIAS=redspider-site-%s\n' "$release_id" "$release_id" > "$release/site.env"
docker compose --project-name "$site_project" --env-file "$release/site.env" -f "$release/infra/compose.yaml" up -d
for attempt in $(seq 1 20); do
  test "$(docker inspect "$site_container" --format '{{.State.Health.Status}}')" = healthy && break
  sleep 1
done
test "$(docker inspect "$site_container" --format '{{.State.Health.Status}}')" = healthy
docker run --rm --network teenai-h5_application --volumes-from "$gateway":ro "redspider-gateway:$release_id" nginx -t

rollback() {
  cp -p "$base/backups/$release_id/teenai.env" "$teen_release/.env.docker"
  docker compose --env-file "$teen_release/.env.docker" -f "$teen_release/compose.deploy.yaml" up -d --no-deps gateway
  echo 'Gateway rolled back to the previous image.' >&2
}
trap rollback ERR
python3 - "$teen_release/.env.docker" "$release_id" <<'PY'
import pathlib, re, sys
path = pathlib.Path(sys.argv[1])
content = path.read_text()
content, count = re.subn(r'^GATEWAY_IMAGE=.*$', 'GATEWAY_IMAGE=redspider-gateway:' + sys.argv[2], content, flags=re.M)
assert count == 1
path.write_text(content)
PY
docker compose --env-file "$teen_release/.env.docker" -f "$teen_release/compose.deploy.yaml" up -d --no-deps gateway
for attempt in $(seq 1 20); do
  test "$(docker inspect "$gateway" --format '{{.State.Health.Status}}')" = healthy && break
  sleep 1
done
test "$(docker inspect "$gateway" --format '{{.State.Health.Status}}')" = healthy
curl --fail --silent --show-error --max-time 15 https://hzai.tech/ | grep -F '/redspider-site/assets/' > /dev/null
curl --fail --silent --show-error --max-time 15 https://hzai.tech/AiCampSignUp/api/health > /dev/null
curl --fail --silent --show-error --max-time 15 https://hzai.tech/AiCampHomePage/ > /dev/null
ln -sfn "$release" "$base/current.next"
mv -Tf "$base/current.next" "$base/current"
trap - ERR
docker inspect "$site_container" "$gateway" --format '{{.Name}} {{.Config.Image}} {{.State.Health.Status}}'
echo "DEPLOYED=$release_id"
