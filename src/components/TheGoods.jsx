import { Link } from 'react-router-dom';
import Reveal from './ui/Reveal';
import SectionHead from './ui/SectionHead';
import { Blob } from './ui/Blobs';
import { Tomato } from './ui/Tomato';
import { Arrow, Pin } from './ui/Icons';
import { RETAILERS } from '../siteConfig';
import Photo from './ui/Photo';

/**
 * There is one crop here, not four. Every photograph in the set — the
 * trusses, the packhouse pile, the crates, the run into town — shows the same
 * large round tomato, so the old Cherry / Plum / Season's blend split was a
 * product line the farm does not have. These cards are the one tomato and the
 * ways it actually reaches someone.
 */
const produce = [
  {
    id: 'tomato',
    name: 'The tomato',
    tagline: 'Round, full size, ripened on the plant.',
    desc: 'One crop, carried the whole way at Mookane — seedling, bag, truss, crate. Grown hydroponically on borehole water, never in the ground.',
    badge: 'Home grown',
    image: '/farm/ripening-in-hand.jpg',
    alt: 'A ripe tomato held on the truss, still attached to the plant',
    color: 'var(--c-red)',
  },
  {
    id: 'bag',
    name: 'The 13 bag',
    tagline: 'Look for the number.',
    desc: 'Graded and packed by hand at the farm, then driven in ourselves. Produced in Botswana, borehole water used for irrigation — it says so on the front.',
    badge: 'Hand packed',
    image: '/farm/bag-in-hand.jpg',
    alt: 'A Tsoo...13 bag of tomatoes, the 13 printed across the front',
    color: 'var(--c-yellow)',
  },
  {
    id: 'direct',
    name: 'From the farm',
    tagline: 'Closest to the source.',
    desc: 'Come to Mookane Village and buy it where it grows, before it travels anywhere at all.',
    badge: 'At Mookane',
    image: '/farm/bag-over-pile.jpg',
    alt: 'A hand holding a 13 bag above a pile of freshly picked tomatoes',
    color: 'var(--c-green-lt)',
  },
];

const ProduceCard = ({ item, index }) => (
  <Reveal delay={(index % 4) * 0.07}>
    <article className="card" style={{ '--card-accent': item.color }}>
      <div className="card__media">
        <Photo className="card__img" src={item.image} alt={item.alt} />
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
    <Blob color="lime" size={18} top="13%" left="58%" />
    <Blob color="soft-yellow" size={280} bottom="6%" left="-8%" />
    <Tomato color="var(--c-red)" size={110} top={90} right="8%" opacity={0.16} rotate={18} />
    <Tomato color="var(--c-green-lt)" size={80} bottom="14%" left="4%" opacity={0.18} rotate={-20} outline />

    <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
      <SectionHead
        as={standalone ? 'h1' : 'h2'}
        eyebrow="Straight from the ground"
        dot="var(--c-red)"
        variant="right"
        title={<>The <span className="t-green">goods</span>.</>}
        lede="One tomato, grown and packed at Mookane. Home grown, hand picked, always reliable — that is the whole of what the 13 on the bag means."
      />

      <Reveal
        variant="scale"
        style={{
          position: 'relative',
          borderRadius: 'var(--r-xl)',
          overflow: 'hidden',
          aspectRatio: '21 / 9',
          marginBottom: 'clamp(2.5rem, 5vw, 4rem)',
          boxShadow: 'var(--shadow-lg)',
        }}
      >
        <Photo
          src="/farm/dispatch.jpg"
          alt="Crates of Tsoo...13 bags loaded on the bakkie, ready to go out"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <span
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(100deg, rgba(20,21,15,.88) 0%, rgba(20,21,15,.6) 45%, rgba(20,21,15,.18) 80%)',
          }}
        />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', padding: 'clamp(1.5rem, 5vw, 3.5rem)' }}>
          <div>
            <p className="eyebrow" style={{ '--eyebrow-dot': 'var(--c-yellow)', color: 'rgba(255,255,255,.75)', marginBottom: '1rem' }}>
              The product
            </p>
            <h3 className="display display--lg" style={{ color: 'var(--white)', maxWidth: '11ch' }}>
              Grown here.<br />Packed here.<br />
              <span style={{ color: 'var(--c-yellow)' }}>Going somewhere.</span>
            </h3>
          </div>
        </div>
      </Reveal>

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
            <h3 className="display display--md" style={{ color: 'var(--c-red)' }}>
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
