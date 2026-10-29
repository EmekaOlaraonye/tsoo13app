#!/usr/bin/env bash
# Builds the storm clip for the journey from the two phone videos.
#
# These were filmed as the storm hit, and they are the only moving record of
# it — there is no photograph of the collapse in the set. They arrived at
# 296x642 (sent over a messaging app, by the look of it), so nothing is
# upscaled here: blowing them up would only make the compression visible.
# The audio is the rain itself and is kept.
#
# Usage: scripts/build-storm.sh [source-dir] [output-dir]
set -euo pipefail

SRC="${1:-src/tsoo13}"
OUT="${2:-public/film}"
# A local scratch dir, not mktemp: on Windows the concat demuxer resolves a
# MSYS /tmp path against C:\ and cannot find the files.
TMP=".storm-build"
rm -rf "$TMP"; mkdir -p "$TMP"
trap 'rm -rf "$TMP"' EXIT

for part in flood1 flood2; do
  [ -f "$SRC/$part.mp4" ] || { echo "missing $SRC/$part.mp4" >&2; exit 1; }
  # Normalise timebase and GOP so the two join cleanly.
  ffmpeg -v error -y -i "$SRC/$part.mp4" \
    -c:v libx264 -preset slow -crf 23 -pix_fmt yuv420p \
    -g 60 -keyint_min 60 -sc_threshold 0 \
    -c:a aac -b:a 96k -ar 48000 -ac 2 \
    "$TMP/$part.mp4"
  # Paths in the list are resolved against the list file's own directory.
  echo "file '$part.mp4'" >> "$TMP/list.txt"
done

mkdir -p "$OUT"
ffmpeg -v error -y -f concat -safe 0 -i "$TMP/list.txt" -c copy -movflags +faststart \
  "$OUT/tsoo13-storm.mp4"

# Poster for the upright player: a frame where the structures are already down.
ffmpeg -v error -y -ss 34 -i "$SRC/flood2.mp4" -frames:v 1 -q:v 3 \
  "$OUT/tsoo13-storm-poster.jpg"

# Landscape still for the timeline panel, which is 16:11. Taken at 27.5s, the
# one stretch with the collapsed frames right across the shot and no doorway
# edge in the way. Cropped to the band holding the structures, then doubled
# and sharpened: the source is only 296px wide and the panel renders wider
# than that, so it is better to upscale deliberately than to let the browser
# do it.
ffmpeg -v error -y -ss 27.5 -i "$SRC/flood2.mp4" -frames:v 1 \
  -vf "crop=iw:iw*11/16:0:118,scale=iw*2:ih*2:flags=lanczos,unsharp=5:5:0.8" \
  -q:v 3 "$OUT/tsoo13-storm-still.jpg"

echo "built $OUT/tsoo13-storm.mp4"
ffprobe -v error -show_entries format=duration,size -of default=noprint_wrappers=1 "$OUT/tsoo13-storm.mp4"
