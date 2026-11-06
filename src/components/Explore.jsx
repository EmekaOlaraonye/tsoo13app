import { Link } from 'react-router-dom';
import Reveal from './ui/Reveal';
import SectionHead from './ui/SectionHead';
import { Blob } from './ui/Blobs';
import { Arrow } from './ui/Icons';
import Photo from './ui/Photo';

const destinations = [
  {
    // The biggest section on the site, and this grid used to omit it
    // entirely — it was reachable only from the hero button above.
    label: 'The Journey',
    to: '/journey',
    category: 'The story',
    desc: 'Open field, then net, then tunnels, then the storm.',
    image: '/farm/rows-avenue.jpg',
    color: 'var(--c-lime)',
  },
  {
    label: 'The Goods',
    to: '/goods',
    category: 'Produce',
    desc: 'Home grown, hand picked, and how to get hold of it.',
    image: '/farm/bag-over-pile.jpg',
    color: 'var(--c-red)',
  },
  {
    label: 'The Team',
    to: '/team',
    category: 'The people',
    desc: 'Growing, packing, logistics, branding, sales.',
    image: '/farm/team-lineup.jpg',
    color: 'var(--c-yellow)',
  },
  {
    label: 'The News',
    to: '/news',
    category: 'Dispatches',
    desc: 'Press, recognitions and notes from the field.',
    image: '/farm/sorting-indoors.jpg',
    color: 'var(--c-green-lt)',
  },
  {
    label: 'Gallery',
    to: '/gallery',
    category: 'In the field',
    desc: 'The journey, documented in photographs.',
    image: '/farm/tunnels-sunset.jpg',
    color: 'var(--c-lime)',
  },
];

const DestinationCard = ({ item, index }) => (
  <Reveal delay={(index % 4) * 0.07}>
    <Link to={item.to} className="card" style={{ '--card-accent': item.color }}>
      <div className="card__media">
        <Photo className="card__img" src={item.image} alt="" />
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
          {item.category}
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

const Explore = () => (
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

export default Explore;
