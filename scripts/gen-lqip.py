"""Regenerate src/photoData.js from the photographs in public/farm.

Run after adding, replacing or removing a photo:
    python3 scripts/gen-lqip.py

Produces, for every file, a 20px JPEG inlined as a data URI (the blur-up
placeholder) plus the intrinsic width/height used to reserve layout space.
"""
from PIL import Image
import os, io, base64, json

SRC = 'public/farm'
DEST = 'src/photoData.js'

out = {}
for f in sorted(os.listdir(SRC)):
    if not f.endswith('.jpg'):
        continue
    im = Image.open(os.path.join(SRC, f)).convert('RGB')
    w, h = im.size
    im.thumbnail((20, 20), Image.LANCZOS)
    buf = io.BytesIO()
    im.save(buf, 'JPEG', quality=40, optimize=True)
    out['/farm/' + f] = {
        'lqip': 'data:image/jpeg;base64,' + base64.b64encode(buf.getvalue()).decode(),
        'w': w,
        'h': h,
    }

header = (
    "/**\n"
    " * Generated — do not edit by hand.\n"
    " *\n"
    " * One entry per photograph in public/farm:\n"
    " *   lqip — a 20px JPEG inlined as a data URI, shown blurred while the real\n"
    " *          file downloads, so a slow connection gets colour and composition\n"
    " *          immediately instead of a white hole.\n"
    " *   w/h  — intrinsic pixel size, passed to the <img> so the browser can\n"
    " *          reserve the right box and the page stops jumping as photos land.\n"
    " *\n"
    " * Regenerate with scripts/gen-lqip.py after adding or replacing a photo.\n"
    " */\n"
)
with open(DEST, 'w', encoding='utf-8') as fh:
    fh.write(header)
    fh.write("export const PHOTOS = " + json.dumps(out, indent=0, sort_keys=True) + ";\n\n")
    fh.write("export const photoMeta = (src) => PHOTOS[src] || null;\n")

print(f'{len(out)} placeholders -> {DEST}')
