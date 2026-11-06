/**
 * Point every absolute URL on the site at one host.
 *
 *   node scripts/set-site-url.mjs https://tsoo13.co.bw
 *
 * Five files carry a hard-coded origin — index.html (canonical, og:url,
 * og:image, twitter:image), public/robots.txt, public/sitemap.xml and
 * src/siteConfig.js. They have to agree, and they drifted: all five pointed
 * at tsoo13.co.bw while the site was served from Vercel, so the share image
 * 404'd on every link preview and the canonical named a host that does not
 * resolve.
 *
 * Run this the day the domain starts serving, commit, done.
 */
import { readFileSync, writeFileSync } from 'node:fs';

const next = process.argv[2]?.replace(/\/+$/, '');

if (!next || !/^https?:\/\/[^/]+$/.test(next)) {
  console.error('Usage: node scripts/set-site-url.mjs https://example.com');
  process.exit(1);
}

// Any origin we have previously written, so the script is re-runnable.
const KNOWN = /https:\/\/(tsoo13\.co\.bw|13way-app\.vercel\.app|[a-z0-9-]+\.vercel\.app)/g;

const files = [
  'index.html',
  'public/robots.txt',
  'public/sitemap.xml',
  'src/siteConfig.js',
];

let touched = 0;

for (const file of files) {
  const before = readFileSync(file, 'utf8');
  const after = before.replace(KNOWN, next);
  if (after !== before) {
    writeFileSync(file, after);
    const n = (before.match(KNOWN) || []).length;
    console.log(`${file.padEnd(22)} ${n} URL${n === 1 ? '' : 's'} -> ${next}`);
    touched += n;
  } else {
    console.log(`${file.padEnd(22)} already correct`);
  }
}

console.log(`\n${touched} absolute URL${touched === 1 ? '' : 's'} now point at ${next}`);
console.log('Rebuild and deploy for link previews to pick it up.');
