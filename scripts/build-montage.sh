#!/usr/bin/env bash
# Builds the 2025 montage for the journey page.
#
# The source is 720x768 (near square) and 16.6 MB for 88 seconds, which is
# too heavy to put on a page people open on mobile data. Re-encoded to about
# a third of that. Resolution is left alone — it is already modest, and the
# frame it sits in is smaller than 720 wide.
#
# Usage: scripts/build-montage.sh [source-dir] [output-dir]
set -euo pipefail

SRC="${1:-src/tsoo13}"
OUT="${2:-public/film}"
IN="$SRC/montage2025.mp4"
[ -f "$IN" ] || { echo "missing $IN" >&2; exit 1; }
mkdir -p "$OUT"

# Capped rather than CRF alone: a montage cuts constantly, so every cut is a
# fresh keyframe and plain CRF runs away with the file size.
ffmpeg -v error -y -i "$IN" \
  -c:v libx264 -preset slow -crf 27 -maxrate 850k -bufsize 1700k -pix_fmt yuv420p \
  -c:a aac -b:a 96k -ar 48000 -ac 2 -movflags +faststart \
  "$OUT/tsoo13-montage.mp4"

ffmpeg -v error -y -ss 3 -i "$IN" -frames:v 1 -q:v 3 "$OUT/tsoo13-montage-poster.jpg"

echo "built $OUT/tsoo13-montage.mp4"
ffprobe -v error -show_entries format=duration,size -of default=noprint_wrappers=1 "$OUT/tsoo13-montage.mp4"
