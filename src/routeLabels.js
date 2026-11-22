/**
 * The words a link uses for each page, in one place.
 *
 * Setho's instruction: stop labelling the ways on with the page's filing
 * name — "Journey", "Goods", "News" — and use the phrases the site already
 * says out loud. "See how we got here" tells a reader what they get; "The
 * Journey" only tells them what we called the folder.
 *
 * The nav bar keeps the short names, because a nav bar is an index and has
 * to stay scannable. Everywhere a link is an invitation — the foot of the
 * homepage, the "Dive deeper" grid — it uses `label` from here, so the two
 * can never drift apart again.
 *
 * Order is the order the pages sit in the nav bar, left to right.
 */
export const DESTINATIONS = [
  {
    to: '/grows',
    nav: 'How it grows',
    label: 'See how it grows',
    category: 'The method',
    desc: 'Soilless, fed by the litre — and fifty seconds of it on film.',
    color: 'var(--c-green-lt)',
  },
  {
    to: '/journey',
    nav: 'Journey',
    label: 'See how we got here',
    category: 'The story',
    desc: 'Open field, then net, then tunnels, then the storm — and the rebuild log.',
    color: 'var(--c-lime)',
  },
  {
    to: '/goods',
    nav: 'Goods',
    label: 'Straight from the ground',
    category: 'Produce',
    desc: 'Home grown, hand picked, and how to get hold of it.',
    color: 'var(--c-red)',
  },
  {
    to: '/team',
    nav: 'Team',
    label: 'Meet the hands behind it',
    category: 'The people',
    desc: 'Different hands, different skills, one shared standard.',
    color: 'var(--c-yellow)',
  },
  {
    to: '/news',
    nav: 'News',
    label: 'Fresh off the vine',
    category: 'Dispatches',
    desc: 'Press, open days and appearances — each one linked to its source.',
    color: 'var(--c-green-lt)',
  },
  {
    to: '/gallery',
    nav: 'Gallery',
    label: 'See it in picture',
    category: 'In the field',
    desc: 'Every photograph and clip, in the order it happened.',
    color: 'var(--c-lime)',
  },
];

/** Everything except the page you are standing on. */
export const destinationsExcept = (...paths) =>
  DESTINATIONS.filter((d) => !paths.includes(d.to));
