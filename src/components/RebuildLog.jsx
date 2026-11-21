import Reveal from './ui/Reveal';
import Photo from './ui/Photo';
import { ENTRIES, OPEN_NOTE } from '../rebuildLog';

/**
 * A dated, append-only record of the rebuild, sitting at the foot of the
 * journey — because the journey's last stop is "now we build it back", and
 * this is that, written down as it goes.
 *
 * Almost no farm publishes one of these, which is the point: every other
 * agricultural site is a brochure, finished and undated, and a brochure
 * cannot say "nothing to sell this season" without sounding like a failure.
 * A log can. It turns the gap into the content.
 *
 * It is deliberately an <ol>: the order is the meaning. Newest first, so the
 * thing a returning reader came for is the first thing they hit.
 *
 * Entries live in src/rebuildLog.js, which carries the rule about what is
 * allowed in one. Read that before adding anything here.
 */
const RebuildLog = () => (
  <section id="log" className="section section--paper" aria-labelledby="log-head">
    <div className="wrap">
      <Reveal variant="left">
        <p className="eyebrow" style={{ '--eyebrow-dot': 'var(--c-green-lt)', marginBottom: '0.9rem' }}>
          The rebuild log
        </p>
        <h2 id="log-head" className="display display--md" style={{ color: 'var(--c-green)' }}>
          Kept as it happens.
        </h2>
        <p className="lede" style={{ maxWidth: '44ch', marginTop: '1rem' }}>
          Not a plan and not a promise — a record. A date, a photograph, and what was
          actually done. Nothing goes in before it has happened.
        </p>
      </Reveal>

      <Reveal variant="fade" className="log">
        {/* The head row is what lets a two-entry log read as live rather than
            unfinished: it says plainly that the next line is not written yet. */}
        <p className="log__open">
          <span className="log__pulse" aria-hidden="true" />
          <span>
            <strong>Open.</strong> {OPEN_NOTE}
          </span>
        </p>

        <ol className="log__list">
          {ENTRIES.map((entry, i) => (
            <li key={entry.id} className="log__entry">
              <Reveal delay={(i % 4) * 0.06} className="log__inner">
                <p className="log__date">{entry.date}</p>

                <div className="log__media">
                  <Photo
                    src={entry.image}
                    alt={entry.alt}
                    style={entry.focus ? { objectPosition: entry.focus } : undefined}
                  />
                </div>

                <div>
                  <h3 className="log__title">{entry.title}</h3>
                  <p className="body-sm log__body">{entry.body}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </Reveal>
    </div>
  </section>
);

export default RebuildLog;
