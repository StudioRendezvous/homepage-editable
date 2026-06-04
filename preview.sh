#!/bin/zsh
set -e
DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$DIR"
PORT=8081

if lsof -i :$PORT >/dev/null 2>&1; then
  echo "Server already running on http://localhost:$PORT"
else
  echo "Starting server on http://localhost:$PORT"
  python3 -m http.server "$PORT" >/dev/null 2>&1 &
  sleep 0.5
fi

open "http://localhost:$PORT/" 2>/dev/null || true
echo "Preview: http://localhost:$PORT/"
