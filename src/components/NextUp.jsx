import { Link } from 'react-router-dom';
import Reveal from './ui/Reveal';
import { Arrow } from './ui/Icons';
import { destinationsExcept } from '../routeLabels';

/**
 * The foot of the homepage, and the end of it.
 *
 * The homepage used to hand a reader one button and nothing else — take it
 * or leave the site. Setho asked for the rest of the ways on to sit down
 * here as well, "to ease the flow and give option to user", in the order
 * they appear in the bar at the top.
 *
 * Deliberately not another grid of photographs: there are already three
 * picture cards directly above this, and a fourth row of them would read as
 * more of the same rather than as a way out. These are lines of type you
 * can run your eye down.
 *
 * Nothing follows this block. That is the point of it — the page ends on a
 * choice rather than trailing off.
 */
const NextUp = () => {
  // "How it grows" is the red button immediately above this, so it would
  // appear twice in a row if it were listed here too.
  const onward = destinationsExcept('/grows');

  return (
    <section className="section nextup" aria-labelledby="nextup-head">
      <div className="wrap">
        <Reveal variant="left">
          <p className="eyebrow" style={{ '--eyebrow-dot': 'var(--c-red)', marginBottom: '0.9rem' }}>
            Where to next
          </p>
          <h2 id="nextup-head" className="display display--md" style={{ color: 'var(--c-green)' }}>
            Pick a way in.
          </h2>
        </Reveal>

        <nav className="nextup__list" aria-label="The rest of the site">
          {onward.map((item, i) => (
            <Reveal key={item.to} delay={(i % 5) * 0.06}>
              <Link to={item.to} className="nextup__row" style={{ '--dot': item.color }}>
                <i aria-hidden="true" />
                <span className="nextup__label">{item.label}</span>
                <span className="nextup__nav">{item.nav}</span>
                <span className="nextup__arrow" aria-hidden="true"><Arrow size={16} /></span>
              </Link>
            </Reveal>
          ))}
        </nav>
      </div>
    </section>
  );
};

export default NextUp;
