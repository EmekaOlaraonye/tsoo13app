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
 * The three entries below are what the farm can stand behind today. The
 * first went in on 22 November 2026, when Setho said the build was finished
 * and sent the photograph of the three houses standing. It stops there: the
 * build is done. It does not say the farm is selling again, because nobody
 * has said so and the photograph cannot.
 *
 * What this log still wants is dates. "Now" and "Before that" are honest
 * about being positions in a sequence rather than days, but the day the
 * build was signed off would be the strongest line on the site.
 */

export const ENTRIES = [
  {
    id: 'finished',
    date: 'Now',
    title: 'The houses are standing again.',
    body:
      'The build is finished. Frames up, houses re-skinned, bags back down the rows, and the new water lines trenched in across the ground in front of them. Everything learned out in the open field, under the net and inside the tunnels went into what got built this time.',
    image: '/farm/tunnels-exterior.jpg',
    alt: 'Three finished greenhouse houses standing re-skinned at Mookane, new pipework trenched in across the ground in front of them',
  },
  {
    id: 'rebuilding',
    // Not a date, because nobody has given me one. It is honest about being
    // a position in the sequence rather than a day, which is better than a
    // month I guessed at. Replace it the moment Setho says when.
    date: 'Before that',
    title: 'Frames back up, houses re-skinned.',
    body:
      'The rebuild was the whole of the work — nothing to pick, nothing to pack, nothing to sell. Frames back up, houses re-skinned, bags relaid, one house at a time.',
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
