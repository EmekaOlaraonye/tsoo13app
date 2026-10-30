#!/usr/bin/env bash
# Cuts the delivery scene out of the 2025 montage.
#
# The farm's own delivery film was lost off the phone, but this stretch of
# the montage — 65s to 81s — is the same thing: crates of 13 bags at the
# roadside in town, two people working them, traffic going past.
#
# Cropped twice over: to the montage's content panel (the collage leaves
# black bars either side) and past the CapCut watermark in the top corner.
#
# Usage: scripts/build-delivery.sh [source-dir] [output-dir]
set -euo pipefail

SRC="${1:-src/tsoo13}"
OUT="${2:-public/film}"
IN="$SRC/montage2025.mp4"
[ -f "$IN" ] || { echo "missing $IN" >&2; exit 1; }
mkdir -p "$OUT"

# The collage puts this scene in a panel at x141..578. Measured on a band
# well below the CapCut watermark, because the watermark sits at x33-75 and
# reads as content if you measure the whole frame. Cropping to the panel
# leaves the watermark outside the frame entirely, so no height is lost to
# it; the 4:5 window then matches the tiles beside it.
ffmpeg -v error -y -ss 65 -t 16 -i "$IN" \
  -vf "crop=438:548:141:110" \
  -c:v libx264 -preset slow -crf 24 -pix_fmt yuv420p \
  -an -movflags +faststart \
  "$OUT/tsoo13-delivery.mp4"

ffmpeg -v error -y -ss 72 -i "$IN" -frames:v 1 \
  -vf "crop=438:548:141:110" -q:v 3 "$OUT/tsoo13-delivery-poster.jpg"

echo "built $OUT/tsoo13-delivery.mp4"
ffprobe -v error -show_entries stream=width,height -show_entries format=duration,size \
  -of default=noprint_wrappers=1 "$OUT/tsoo13-delivery.mp4"
