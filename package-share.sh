#!/bin/zsh
set -e
DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$DIR"
DATE="$(date +%Y%m%d)"
OUT="$DIR/../homepage-editable-share-${DATE}.zip"

if ! command -v zip >/dev/null 2>&1; then
  echo "Error: 'zip' is required. On macOS it is built in."
  exit 1
fi

zip -r "$OUT" . \
  -x ".git/*" \
  -x "*/.git/*" \
  -x "*.DS_Store" \
  -x "*__MACOSX*" \
  -x "*.zip" \
  -x "dist/*"

echo ""
echo "Share package created:"
ls -lh "$OUT"
echo ""
echo "Teammate steps: see SHARING.md"
echo "  1. Unzip"
echo "  2. cd into homepage-editable"
echo "  3. ./preview.sh  (or: python3 -m http.server 8081)"
echo "  4. Open http://localhost:8081/"
echo "  5. Pricing: http://localhost:8081/pricing.html"
