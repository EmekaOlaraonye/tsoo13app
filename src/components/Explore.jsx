import { Link } from 'react-router-dom';
import Reveal from './ui/Reveal';
import SectionHead from './ui/SectionHead';
import { Blob } from './ui/Blobs';
import { Arrow } from './ui/Icons';
import Photo from './ui/Photo';
import { destinationsExcept } from '../routeLabels';

/**
 * "Dive deeper" — the end of the How it grows page.
 *
 * The card headings used to be the pages' filing names: The Journey, The
 * Goods, The News. Setho asked for the phrases the site already says out
 * loud instead — "See how we got here", "Straight from the ground" — so the
 * words come from routeLabels.js, shared with the foot of the homepage. The
 * small chip above each picture still carries the page's short name, so the
 * nav bar and this grid stay tied together.
 *
 * Only the photographs live here; everything that is words lives in
 * routeLabels, because the two drifted apart last time they were separate.
 */
const IMAGES = {
  '/journey': { src: '/farm/rows-avenue.jpg', alt: '' },
  '/goods': { src: '/farm/bag-over-pile.jpg', alt: '' },
  '/team': { src: '/farm/team-lineup.jpg', alt: '' },
  '/gallery': { src: '/farm/tunnels-sunset.jpg', alt: '' },
  '/news': { src: '/farm/sorting-indoors.jpg', alt: '' },
};

const DestinationCard = ({ item, index }) => (
  <Reveal delay={(index % 4) * 0.07}>
    <Link to={item.to} className="card" style={{ '--card-accent': item.color }}>
      <div className="card__media">
        <Photo className="card__img" src={IMAGES[item.to].src} alt="" />
        <span className="card__wash" aria-hidden="true" />
        <span className="card__arrow" aria-hidden="true"><Arrow size={16} /></span>
        <span
          className="chip"
          style={{
            position: 'absolute',
            top: '1rem',
            left: '1rem',
            '--chip-bg': 'rgba(255,255,255,.92)',
            '--chip-fg': 'var(--ink)',
          }}
        >
          {item.nav}
        </span>
      </div>
      <div className="card__body">
        <h3 className="card__title">{item.label}</h3>
        <span className="card__rule" />
        <p className="body-sm">{item.desc}</p>
      </div>
    </Link>
  </Reveal>
);

const Explore = () => {
  // Not this page itself.
  const destinations = destinationsExcept('/grows');

  return (
    <section className="section section--paper" id="explore">
      <Blob color="soft-yellow" size={400} top={-150} left="-12%" />
      <Blob color="red" size={14} bottom="18%" right="8%" />
      <Blob color="lime" size={20} top="12%" right="16%" />

      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
        <SectionHead
          eyebrow="There's more"
          dot="var(--c-yellow)"
          color="var(--c-yellow-ink)"
          variant="fade"
          title={<>Dive <span className="t-red">deeper</span>.</>}
          lede="Five ways into the rest of it."
        />

        <div className="grid grid--4">
          {destinations.map((item, i) => (
            <DestinationCard key={item.to} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Explore;
