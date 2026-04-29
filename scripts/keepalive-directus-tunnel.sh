#!/usr/bin/env bash
set -euo pipefail

LOG_FILE="${HOME}/.ngrok-directus.log"

echo "[$(date)] Starting Directus ngrok keepalive loop" >> "$LOG_FILE"

while true; do
  echo "[$(date)] Launching ngrok tunnel: directus" >> "$LOG_FILE"
  ngrok start --config "${HOME}/Library/Application Support/ngrok/ngrok.yml" directus >> "$LOG_FILE" 2>&1 || true
  echo "[$(date)] ngrok exited; restarting in 2s" >> "$LOG_FILE"
  sleep 2
done
