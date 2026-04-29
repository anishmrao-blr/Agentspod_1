#!/bin/sh
set -e
ROOT="/Users/swami/Documents/Pluging_test/official-brand-logos-research/scripts"
CODE_FILE="$ROOT/_figma-plugin-inline.txt"
OUT="$ROOT/use-figma-payload.json"
jq -n --rawfile code "$CODE_FILE" \
  '{fileKey:"VvrakxvcRDVDVP6XH1sZrz",description:"Replace logos: native SVG vectors + official PNG (FIT)",code:$code}' \
  > "$OUT"
echo "Wrote $OUT ($(wc -c < "$OUT") bytes)"
