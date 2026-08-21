import { Link } from 'react-router-dom';
import Reveal from './ui/Reveal';
import SectionHead from './ui/SectionHead';
import { Blob } from './ui/Blobs';
import { Arrow, Pin } from './ui/Icons';
import { RETAILERS } from '../siteConfig';

const produce = [
  {
    id: 'round',
    name: 'Tomatoes',
    tagline: 'Juicy, loud, unmistakable.',
    desc: 'Sun-ripened at Mookane. Zero shortcuts, zero compromise.',
    badge: 'Home grown',
    image: '/tomatoes.png',
    color: 'var(--c-red)',
  },
  {
    id: 'cherry',
    name: 'Cherry',
    tagline: 'Tiny. Explosive.',
    desc: 'Small format, full 13 quality. They rarely make it home whole.',
    badge: 'Hand picked',
    image: '/cuttings.png',
    color: 'var(--c-yellow)',
  },
  {
    id: 'plum',
    name: 'Plum',
    tagline: 'The chef pick.',
    desc: 'Dense and rich, with flavour that holds all the way through the pan.',
    badge: '13 grown',
    image: '/lifestyle.png',
    color: 'var(--c-green-lt)',
  },
  {
    id: 'blend',
    name: "Season's blend",
    tagline: 'Colour that sells itself.',
    desc: "Whatever is at its best that week, straight from the ground to you.",
    badge: 'Fresh from 13',
    image: '/hero.png',
    color: 'var(--c-lime)',
  },
];

const ProduceCard = ({ item, index }) => (
  <Reveal delay={(index % 4) * 0.07}>
    <article className="card" style={{ '--card-accent': item.color }}>
      <div className="card__media">
        <img className="card__img" src={item.image} alt={item.name} loading="lazy" />
        <span className="card__wash" aria-hidden="true" />
        <span
          className="chip"
          style={{
            position: 'absolute',
            top: '1rem',
            left: '1rem',
            '--chip-bg': item.color,
            '--chip-fg': item.color === 'var(--c-yellow)' || item.color === 'var(--c-lime)' ? 'var(--ink)' : 'var(--white)',
          }}
        >
          {item.badge}
        </span>
      </div>
      <div className="card__body">
        <h3 className="card__title">{item.name}</h3>
        <p style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--ink)' }}>{item.tagline}</p>
        <span className="card__rule" />
        <p className="body-sm">{item.desc}</p>
      </div>
    </article>
  </Reveal>
);

const TheGoods = ({ standalone = false }) => (
  <section id="goods" className={`section ${standalone ? 'section--top' : ''}`}>
    <Blob color="soft-red" size={420} top={-160} right="-12%" />
    <Blob color="lime" size={18} top="18%" left="7%" />
    <Blob color="soft-yellow" size={280} bottom="6%" left="-8%" />

    <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
      <SectionHead
        eyebrow="Straight from the ground"
        dot="var(--c-red)"
        title={<>The <span className="t-red">goods</span>.</>}
        lede="Home grown. Hand picked. Always reliable. That is the whole of what the 13 on the bag means."
      />

      <div className="grid grid--4">
        {produce.map((item, i) => (
          <ProduceCard key={item.id} item={item} index={i} />
        ))}
      </div>

      {/* Where to find us */}
      <Reveal
        delay={0.1}
        style={{
          marginTop: 'clamp(3rem, 6vw, 5rem)',
          background: 'var(--c-lime-soft)',
          borderRadius: 'var(--r-xl)',
          padding: 'clamp(2rem, 5vw, 3.5rem)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <span className="blob blob--yellow" aria-hidden="true" style={{ width: 190, height: 190, top: -70, right: -50, opacity: 0.5 }} />
        <span className="blob blob--red" aria-hidden="true" style={{ width: 14, height: 14, bottom: 40, right: 90 }} />

        <div
          style={{
            position: 'relative',
            zIndex: 1,
            display: 'grid',
            gap: 'clamp(1.75rem, 4vw, 3rem)',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            alignItems: 'center',
          }}
        >
          <div>
            <p className="eyebrow" style={{ '--eyebrow-dot': 'var(--c-red)', marginBottom: '1rem' }}>
              Where to find us
            </p>
            <h3 className="display display--md">
              Ask for 13<br />by name.
            </h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
            {RETAILERS.map((r) => (
              <div
                key={r.name}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  background: 'var(--white)',
                  borderRadius: 'var(--r-sm)',
                  padding: '0.85rem 1.1rem',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <span style={{ color: 'var(--c-red)', display: 'flex' }}><Pin size={18} /></span>
                <div>
                  <p style={{ fontWeight: 700, fontSize: '0.92rem' }}>{r.name}</p>
                  <p style={{ fontSize: '0.78rem', color: 'var(--ink-3)' }}>{r.location}</p>
                </div>
              </div>
            ))}
            <Link to="/contact-us" className="btn btn--red" style={{ alignSelf: 'flex-start', marginTop: '0.5rem' }}>
              Order direct <Arrow size={16} />
            </Link>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default TheGoods;
