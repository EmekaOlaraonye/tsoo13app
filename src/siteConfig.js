/**
 * One place for the details that change without touching layout.
 */

/** Canonical origin, no trailing slash. Used for absolute URLs in metadata. */
export const SITE_URL = 'https://tsoo13.co.bw';

export const INSTAGRAM_URL = 'https://www.instagram.com/_13way_/';
export const INSTAGRAM_HANDLE = '@_13way_';
export const FACEBOOK_URL = 'https://www.facebook.com/share/1BjkxxYZkf/?mibextid=wwXIfr';
export const FACEBOOK_HANDLE = '13Way';

export const SALES_EMAIL = 'sales@tsoo13.co.bw';
export const PHONE_NUMBERS = ['+267 72706511', '+267 78312782'];

/**
 * The film section.
 *
 * To swap in a different film, do ONE of these:
 *   1. Drop the file at `public/intro.mp4` and set `src: '/intro.mp4'`, or
 *   2. Paste the YouTube id (the part after `watch?v=`) into `youtubeId`.
 *
 * With neither set, the section still shows the poster and play interaction,
 * and the lightbox says the film is coming.
 *
 * NOTE: what is embedded here is NOT our own footage — it is AgriTunnels'
 * video of tunnel houses at work, embedded (which needs no permission) and
 * credited on screen via `credit`. The copy in VideoSection is written to
 * match that. When Tsoo...13's own film exists, replace the id, clear
 * `credit` and `startAt`, and the section can go back to first-person.
 */
export const VIDEO = {
  src: null,
  youtubeId: 'RKr6qiwzphA',
  /** Seconds to open at — 2:08 is the "side rollup" moment. null = from the top. */
  startAt: 128,
  /* Our own greenhouse shot, not the YouTube thumbnail — that frame carries
     AgriTunnels' logo, email and phone number, which would turn this panel
     into an advert for them. The on-screen `credit` keeps it honest about
     whose footage plays. */
  poster: '/hero.png',
  title: 'Agritunnels at work',
  runtime: '3 MIN',
  /** Shown on screen. Leave null for our own footage. */
  credit: 'AgriTunnels',
  creditUrl: 'https://www.youtube.com/@agritunnels9526',
};

export const RETAILERS = [
  { name: "Food Lover's SquareMart", location: 'Gaborone' },
  { name: 'SuperSpar Acacia', location: 'Gaborone' },
  { name: 'Direct from the farm', location: 'Mookane Village' },
];
