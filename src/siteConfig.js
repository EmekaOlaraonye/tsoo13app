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
    'Every upright clip from the farm, three seconds apiece — hands on the trusses, trays going down the row, crates going onto the bakkie.',
};

/**
 * Deliberately no shop names: supply is being rebuilt and we are not back
 * on those shelves yet, so naming them would promise something that is not
 * true this week. Put the names back when it is.
 */
export const RETAILERS = [
  { name: 'Direct from the farm', location: 'Mookane Village' },
  { name: 'Wholesale and retail', location: 'Gaborone' },
  { name: 'Ask for 13 by name', location: 'Wherever you find it' },
];

/**
 * The storm, filmed as it happened.
 *
 * Two phone videos cut into one run. There is no photograph of the collapse
 * in the set, so this is the only record of it. They arrived at 296x642 —
 * small, and left that way, because upscaling would only make the
 * compression visible. The audio is the rain and is kept.
 *
 * Rebuild with scripts/build-storm.sh.
 */
export const STORM = {
  src: '/film/tsoo13-storm.mp4',
  poster: '/film/tsoo13-storm-poster.jpg',
  runtime: '1 min 10',
  year: '2025',
  /**
   * The morning after. These two were filed as 'end of season' and
   * 'cleared and ready to start again', which they are not — the fruit is
   * still ripe on the plants. Nobody clears a season with a crop on it.
   */
  stills: [
    {
      src: '/farm/storm-aftermath.jpg',
      caption: 'The frame folded over a crop still carrying fruit',
      alt: 'A collapsed tunnel frame bent across rows of tomato plants still carrying ripe fruit',
    },
    {
      src: '/farm/storm-wreckage.jpg',
      caption: 'Bags on their sides, netting down, tomatoes ripe',
      alt: 'Grow bags knocked over and torn netting lying across flattened tomato plants',
    },
  ],
};

/**
 * Getting it to town.
 *
 * The delivery film was lost off the phone, but it turned out not to be
 * lost at all: the 2025 montage carries the same scene between 65s and
 * 81s — crates of 13 bags at the roadside in town, traffic going past.
 * scripts/build-delivery.sh cuts it out, crops past the collage's black
 * bars and past the CapCut watermark, and drops the audio, which is
 * the montage's backing track rather than anything from the day.
 */
export const DELIVERY = {
  video: '/film/tsoo13-delivery.mp4',
  poster: '/film/tsoo13-delivery-poster.jpg',
  runtime: '16 sec',
  stills: [
    {
      src: '/farm/dispatch.jpg',
      caption: 'Crates off the bakkie at the receiving bay',
      alt: 'Crates of Tsoo...13 bags on the back of the bakkie at a store receiving bay',
    },
    {
      src: '/farm/crate-carried.jpg',
      caption: 'In through the back, crate by crate',
      alt: 'Stacked crates of bagged tomatoes being wheeled across the paving',
    },
  ],
};

/**
 * 2025 cut into one run — the farm's own year-in-review.
 *
 * Near square (720x768) because that is how it was edited. The source was
 * 16.6 MB; scripts/build-montage.sh brings it down to about 8.5 and leaves
 * the resolution alone.
 */
export const MONTAGE = {
  src: '/film/tsoo13-montage.mp4',
  poster: '/film/tsoo13-montage-poster.jpg',
  runtime: '1 min 28',
  blurb:
    'Planting, picking, packing, the open days, the storm and the start of the rebuild — the year as it ran, cut together by us.',
};
