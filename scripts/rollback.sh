#!/usr/bin/env bash
set -euo pipefail
release_id="${1:?release ID to roll back required}"
[[ "$release_id" =~ ^[a-zA-Z0-9._-]+$ ]] || exit 2
backup="/opt/redspider-web/backups/$release_id"
teen_release=$(cat "$backup/teenai-release.txt")
[[ "$teen_release" = /opt/teenai-h5/releases/* ]] || exit 2
cp -p "$backup/teenai.env" "$teen_release/.env.docker"
docker compose --env-file "$teen_release/.env.docker" -f "$teen_release/compose.deploy.yaml" up -d --no-deps gateway
docker exec teenai-h5-gateway-1 nginx -t
echo 'Restored the previous gateway. Website image and release are retained for inspection.'
