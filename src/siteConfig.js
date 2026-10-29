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
 * This is our own footage now — cut from the farm clips into one 49-second
 * run, in the order the work actually happens: prepared beds, planting out,
 * the rows filling, then fruit. It is silent on purpose; the source clips
 * were shot separately and their audio does not cut together.
 *
 * Rebuild it with scripts/build-film.sh after adding or re-ordering clips.
 *
 * To swap in a different film instead:
 *   1. Replace the file at `public/film/tsoo13-film.mp4`, or
 *   2. Clear `src` and paste a YouTube id into `youtubeId`.
 *
 * With neither set, the section still shows the poster and play interaction,
 * and the lightbox says the film is coming. Set `credit` only when the
 * footage is someone else's.
 */
export const VIDEO = {
  src: '/film/tsoo13-film.mp4',
  youtubeId: null,
  startAt: null,
  poster: '/film/tsoo13-film-poster.jpg',
  title: 'From bare beds to fruit',
  runtime: '49 SEC',
  credit: null,
  creditUrl: null,
};

/**
 * The vertical reel — every portrait clip from the folder, three seconds
 * each, in one run. Shot on a phone, so it is shown upright rather than
 * cropped into a widescreen panel.
 *
 * Rebuild with scripts/build-reel.sh.
 */
export const REEL = {
  src: '/film/tsoo13-reel.mp4',
  poster: '/film/tsoo13-reel-poster.jpg',
  runtime: '1 min 54',
  blurb:
    'Every upright clip from the farm, three seconds apiece — hands on the trusses, trays going down the row, bags coming off the shelf.',
};

export const RETAILERS = [
  { name: "Food Lover's SquareMart", location: 'Gaborone' },
  { name: 'SuperSpar Acacia', location: 'Gaborone' },
  { name: 'Direct from the farm', location: 'Mookane Village' },
];
