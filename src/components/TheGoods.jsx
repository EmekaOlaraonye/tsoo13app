import Reveal from './ui/Reveal';
import SectionHead from './ui/SectionHead';
import { Blob } from './ui/Blobs';
import { Tomato } from './ui/Tomato';
import ProcessFlow from './ProcessFlow';
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
    desc: 'Produced in Botswana, borehole water used for irrigation — it says so on the front. Graded, bagged and picked by hand.',
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
    // Not a third photograph of a bag: the card is about coming to Mookane,
    // so it shows the place rather than the packaging again.
    image: '/farm/farm-gate.jpg',
    alt: 'The Tsoo...13 frontage at Mookane Village, the sun logo on the poles',
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

      {/* Moved off the journey, which now ends at the band. This is the last
          thing on the page by Setho's instruction — nothing follows it. */}
      <ProcessFlow />
    </div>
  </section>
);

export default TheGoods;
