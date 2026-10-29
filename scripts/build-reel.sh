#!/usr/bin/env bash
# Build the vertical reel from every portrait clip in the source folder.
#
# The landscape clips become the 16:9 film (scripts/build-film.sh); these are
# the phone-shot ones, which only work upright. Each contributes a short
# section, so nothing in the folder goes unused.
set -e

FF="/c/Users/olara/AppData/Local/Microsoft/WinGet/Packages/Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe/ffmpeg-9.0.2-full_build/bin/ffmpeg.exe"
FP="${FF%ffmpeg.exe}ffprobe.exe"
SRC="src/tsoo13"
WORK="${TMPDIR:-/tmp}/reel"
OUT="public/film"
SECONDS_PER_CLIP=3

rm -rf "$WORK"; mkdir -p "$WORK" "$OUT"

i=0
for f in "$SRC"/*.MOV "$SRC"/*.MP4; do
  [ -f "$f" ] || continue

  # Portrait only — decode one frame and let ffmpeg apply the rotation
  # metadata, then measure. Probing width/height alone reports the stored
  # 1920x1080 for every phone clip and would wrongly call them landscape.
  "$FF" -v error -ss 1 -i "$f" -frames:v 1 -y "$WORK/probe.jpg" 2>/dev/null || continue
  read -r w h <<< "$("$FP" -v error -select_streams v:0 -show_entries stream=width,height -of csv=p=0:nk=1 "$WORK/probe.jpg" | tr ',' ' ')"
  [ -z "$w" ] && continue
  [ "$w" -ge "$h" ] && continue

  dur=$("$FP" -v error -show_entries format=duration -of csv=p=0:nk=1 "$f" | cut -d. -f1)
  [ -z "$dur" ] && dur=5
  # start a little in, so we skip the shaky moment after pressing record
  ss=1; [ "$dur" -gt 8 ] && ss=2
  [ "$dur" -lt $((SECONDS_PER_CLIP + 2)) ] && ss=0

  "$FF" -v error -ss "$ss" -i "$f" -t "$SECONDS_PER_CLIP" \
    -vf "scale=720:1280:force_original_aspect_ratio=increase,crop=720:1280,fps=30,setsar=1" \
    -c:v libx264 -profile:v high -preset slow -crf 30 \
    -maxrate 1200k -bufsize 2400k -pix_fmt yuv420p \
    -g 60 -keyint_min 60 -sc_threshold 0 -an -movflags +faststart \
    -y "$WORK/$(printf '%03d' $i).mp4"
  i=$((i+1))
done

echo "portrait clips used: $i"

: > "$WORK/list.txt"
for f in "$WORK"/[0-9][0-9][0-9].mp4; do echo "file '$(basename "$f")'" >> "$WORK/list.txt"; done
( cd "$WORK" && "$FF" -v error -f concat -safe 0 -i list.txt -c copy -movflags +faststart -y reel.mp4 )

cp "$WORK/reel.mp4" "$OUT/tsoo13-reel.mp4"
"$FF" -v error -ss 4 -i "$OUT/tsoo13-reel.mp4" -frames:v 1 -q:v 3 -y "$OUT/tsoo13-reel-poster.jpg"

echo "reel  : $(du -h "$OUT/tsoo13-reel.mp4" | cut -f1)"
echo "length: $("$FP" -v error -show_entries format=duration -of csv=p=0:nk=1 "$OUT/tsoo13-reel.mp4" | cut -d. -f1)s"
