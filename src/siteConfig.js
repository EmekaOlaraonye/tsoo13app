/**
 * One place for the details that change without touching layout.
 */

export const INSTAGRAM_URL = 'https://www.instagram.com/_13way_/';
export const INSTAGRAM_HANDLE = '@_13way_';

/**
 * The intro film.
 *
 * To make the player live, do ONE of these:
 *   1. Drop the file at `public/intro.mp4` and set `src: '/intro.mp4'`, or
 *   2. Paste the YouTube id (the part after `watch?v=`) into `youtubeId`.
 *
 * Until one of them is set, the section still shows the poster and play
 * interaction, and the lightbox says the film is coming.
 */
export const VIDEO = {
  src: null,
  youtubeId: null,
  poster: '/hero.png',
  title: 'Two minutes with Tsoo...13',
  runtime: '2 MIN',
};

export const RETAILERS = [
  { name: "Food Lover's SquareMart", location: 'Gaborone' },
  { name: 'SuperSpar Acacia', location: 'Gaborone' },
  { name: 'Direct from the farm', location: 'Mookane Village' },
];
