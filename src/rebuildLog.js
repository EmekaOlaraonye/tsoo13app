/**
 * The rebuild log.
 *
 * ---------------------------------------------------------------------------
 * HOW TO ADD AN ENTRY
 * ---------------------------------------------------------------------------
 * Drop the photograph into public/farm/, run `python scripts/gen-lqip.py` so
 * it gets a blur-up placeholder, then add one object to the TOP of ENTRIES:
 *
 *   {
 *     id: 'short-slug',
 *     date: '14 March 2027',          // what it says on the day
 *     title: 'One short line.',       // what happened, in a sentence
 *     body: 'Two sentences at most.', // what it means, plainly
 *     image: '/farm/your-photo.jpg',
 *     alt: 'What is in the frame, for someone who cannot see it',
 *   }
 *
 * Newest first. Nothing else to change — the page reads the length of this
 * array and lays itself out.
 *
 * ---------------------------------------------------------------------------
 * THE RULE
 * ---------------------------------------------------------------------------
 * This is a record, not a roadmap. An entry goes in after the thing has
 * happened and there is a photograph of it, never before. No target dates, no
 * "coming soon", no stage marked finished that is still being worked on. The
 * whole value of the log is that a reader can trust every line of it, and one
 * optimistic entry would cost that for all the rest.
 *
 * The two entries below are the two the farm can stand behind today, both
 * drawn from copy already on the Journey page. Everything after them wants
 * Setho's own dates and photographs.
 */

export const ENTRIES = [
  {
    id: 'rebuilding',
    date: 'Now',
    title: 'Frames back up, houses re-skinned.',
    body:
      'There is nothing to pick, pack or sell this season. The rebuild is the whole of the work — frames back up, houses re-skinned, bags relaid — and everything learned out in the field, under the net and inside the tunnels goes into what gets built this time.',
    image: '/farm/tunnel-frame.jpg',
    alt: 'A new tunnel frame going up, a finished house standing behind it',
    // Two thirds of this frame is sky. Optional on any entry: pass an
    // object-position and the square thumbnail crops to the part that matters.
    focus: 'center 88%',
  },
  {
    id: 'storm',
    date: '2025',
    title: 'The structures came down.',
    body:
      'Everything built to keep the weather out was, in one afternoon, the thing the weather took. No one got a photograph of the collapse. Somebody kept filming, and that clip is the only record of it there is — it plays further up this page.',
    image: '/farm/storm-aftermath.jpg',
    alt: 'A collapsed tunnel frame bent across rows of tomato plants still carrying ripe fruit',
  },
];

/**
 * Shown at the head of the log, above the newest entry. It is the reason the
 * log can be short without looking abandoned: it says outright that the next
 * line is not written yet.
 */
export const OPEN_NOTE =
  'The next entry goes up when there is something at Mookane worth photographing.';
