#!/usr/bin/env bash
# Build a short web film from the landscape clips, in narrative order.
set -e

FF="/c/Users/olara/AppData/Local/Microsoft/WinGet/Packages/Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe/ffmpeg-9.0.2-full_build/bin/ffmpeg.exe"
SRC="src/tsoo13"
WORK="C:/Users/olara/AppData/Local/Temp/claude/c--Users-olara-Desktop-Tsoo13-13way-app/6fa590f5-1572-4a57-9885-88d2168729e7/scratchpad/film"
OUT="public/film"

rm -rf "$WORK"; mkdir -p "$WORK" "$OUT"

# clip : start : seconds — empty beds -> planting -> growing -> fruit
CLIPS="
IMG_9162:1.0:6
IMG_5405:3.0:6
IMG_5400:6.0:6
IMG_5436:2.0:6
IMG_5391:1.0:6
IMG_7366:4.0:7
IMG_6768:1.5:6
IMG_7060:1.0:6
"

i=0
for row in $CLIPS; do
  name="${row%%:*}"; rest="${row#*:}"; ss="${rest%%:*}"; dur="${rest#*:}"
  src="$SRC/$name.MOV"
  [ -f "$src" ] || { echo "missing $src"; continue; }
  # Normalise everything: H.264, 1280x720, 30fps, square pixels, no audio,
  # closed GOP — so the segments concatenate without re-encoding.
  "$FF" -v error -ss "$ss" -i "$src" -t "$dur" \
    -vf "scale=1280:720:force_original_aspect_ratio=increase,crop=1280:720,fps=30,setsar=1" \
    -c:v libx264 -profile:v high -preset slow -crf 23 -pix_fmt yuv420p \
    -g 60 -keyint_min 60 -sc_threshold 0 -an -movflags +faststart \
    -y "$WORK/$(printf '%02d' $i).mp4"
  echo "  segment $(printf '%02d' $i)  $name  ${ss}s +${dur}s"
  i=$((i+1))
done

: > "$WORK/list.txt"
for f in "$WORK"/[0-9][0-9].mp4; do echo "file '$(basename "$f")'" >> "$WORK/list.txt"; done

( cd "$WORK" && "$FF" -v error -f concat -safe 0 -i list.txt -c copy -movflags +faststart -y joined.mp4 )
cp "$WORK/joined.mp4" "$OUT/tsoo13-film.mp4"

# poster frame from the fruit-laden section near the end
"$FF" -v error -ss 40 -i "$OUT/tsoo13-film.mp4" -frames:v 1 -q:v 3 -y "$OUT/tsoo13-film-poster.jpg"

echo
echo "film : $(du -h "$OUT/tsoo13-film.mp4" | cut -f1)"
echo "poster: $(du -h "$OUT/tsoo13-film-poster.jpg" | cut -f1)"
