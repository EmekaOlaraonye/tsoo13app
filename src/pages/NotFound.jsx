import { Link } from 'react-router-dom';
import Reveal from '../components/ui/Reveal';
import SectionHead from '../components/ui/SectionHead';
import { Blob } from '../components/ui/Blobs';
import { Tomato } from '../components/ui/Tomato';
import { Arrow } from '../components/ui/Icons';

/**
 * Anything that is not one of the seven routes lands here.
 *
 * Before this existed a mistyped or stale URL rendered the navbar, the
 * footer and nothing in between — a blank page with no explanation and no
 * way on. This is deliberately not lazy-loaded: the one page whose job is to
 * catch a mistake should never itself be waiting on a chunk.
 *
 * It doubles as the site map, which is why every route is listed rather than
 * just a link home.
 */
const everywhere = [
  { to: '/', label: 'Home', desc: 'The farm in short, and the film.', dot: 'var(--c-yellow)' },
  { to: '/journey', label: 'The Journey', desc: 'Open field, then net, then tunnels, then the storm.', dot: 'var(--c-lime)' },
  { to: '/goods', label: 'The Goods', desc: 'What we grow and how to get hold of it.', dot: 'var(--c-red)' },
  { to: '/team', label: 'The Team', desc: 'Who grows it, packs it, drives it and sells it.', dot: 'var(--c-yellow)' },
  { to: '/news', label: 'The News', desc: 'Press, open days and updates — each piece linked to its source.', dot: 'var(--c-green-lt)' },
  { to: '/gallery', label: 'Gallery', desc: 'Every photograph, in the order it happened.', dot: 'var(--c-red)' },
  { to: '/contact-us', label: 'Contact Us', desc: 'Phone, email, and where to find the farm.', dot: 'var(--c-lime)' },
];

const NotFound = () => (
  <section className="section section--top section--paper">
    <Blob color="soft-red" size={380} top={-140} right="-10%" />
    <Blob color="lime" size={18} bottom="18%" left="7%" />
    <Tomato color="var(--c-red)" size={120} bottom="6%" right="5%" opacity={0.14} rotate={-12} outline />

    <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
      <SectionHead
        as="h1"
        eyebrow="Nothing planted here"
        dot="var(--c-red)"
        color="var(--c-red)"
        variant="scale"
        title={<>This row is <span className="t-red">empty</span>.</>}
        lede="That address doesn't match anything on the site — most likely a typo, or a link that has moved. Everything there is to see is listed below."
      />

      <nav aria-label="All pages" className="notfound__map">
        {everywhere.map((item, i) => (
          <Reveal key={item.to} delay={(i % 4) * 0.06}>
            <Link to={item.to} className="notfound__row" style={{ '--dot': item.dot }}>
              <i aria-hidden="true" />
              <span className="notfound__label">{item.label}</span>
              <span className="notfound__desc">{item.desc}</span>
              <span className="notfound__arrow" aria-hidden="true"><Arrow size={15} /></span>
            </Link>
          </Reveal>
        ))}
      </nav>

      <Reveal style={{ marginTop: 'clamp(2.5rem, 5vw, 3.5rem)' }}>
        <Link to="/" className="btn btn--red">
          Take me home <Arrow size={16} />
        </Link>
      </Reveal>
    </div>
  </section>
);

export default NotFound;
