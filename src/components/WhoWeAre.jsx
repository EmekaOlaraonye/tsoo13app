import { Link } from 'react-router-dom';
import Reveal from './ui/Reveal';
import { Blob } from './ui/Blobs';
import { Tomato } from './ui/Tomato';
import { Arrow } from './ui/Icons';
import Photo from './ui/Photo';

const pillars = [
  {
    n: '01',
    title: 'We grow it',
    body: 'Hydroponic, under cover and out of the soil — every plant in its own bag, fed by drip. If the usual way stops working, we find another one.',
    image: '/farm/tunnel-mature.jpg',
    alt: 'Tomato plants growing in bags inside the tunnel',
    color: 'var(--c-lime)',
    soft: 'var(--c-lime-soft)',
  },
  {
    n: '02',
    title: 'We move it',
    body: 'Picked, packed and driven in ourselves. Same day.',
    image: '/farm/crate-sunlit.jpg',
    alt: 'Crates of bagged tomatoes in the morning sun, ready to go out',
    color: 'var(--c-red)',
    soft: 'var(--c-red-soft)',
  },
  {
    n: '03',
    title: 'We build it',
    body: 'The brand, the standard, the ambition. Run by young people who want this to be more than a farm.',
    image: '/farm/tunnels-exterior.jpg',
    alt: 'The greenhouse tunnels at Mookane Village from the track',
    color: 'var(--c-yellow)',
    soft: 'var(--c-yellow-soft)',
  },
];

const stats = [
  { num: '13', label: 'The name people ask for', color: 'var(--c-red)' },
  { num: '1', label: 'Farm where it all began', color: 'var(--c-green-lt)' },
  { num: '100%', label: 'Botswana grown', color: 'var(--c-lime-ink)' },
];

const PillarCard = ({ item, index }) => (
  <Reveal delay={index * 0.08}>
    <article
      className="card"
      style={{ '--card-accent': item.color, overflow: 'hidden' }}
    >
      <div className="pillar__media">
        <Photo src={item.image} alt={item.alt} />
        <span className="pillar__num" style={{ color: item.color }}>{item.n}</span>
      </div>
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '0.85rem', padding: '1.5rem 1.7rem 2rem' }}>
        <h3 className="card__title" style={{ fontSize: '1.75rem' }}>{item.title}</h3>
        <span className="card__rule" />
        <p className="body-sm">{item.body}</p>
      </div>
    </article>
  </Reveal>
);

const WhoWeAre = () => (
  <section className="section section--paper" id="who-we-are">
    <Blob color="soft-green" size={380} top={-140} left="-10%" />
    <Blob color="red" size={13} top="16%" right="12%" />
    <Blob color="lime" size={20} bottom="14%" left="7%" />
    <Tomato color="var(--c-green-lt)" size={130} top={40} right="6%" opacity={0.14} rotate={-12} outline />

    <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
      {/* The headline is the biggest piece of type on the site and an even
          split left it seven lines deep in a column it had outgrown. The
          wider share goes to the words; the lede and the stats need less. */}
      <div className="who__head">
        <Reveal variant="left">
          <p className="eyebrow" style={{ '--eyebrow-dot': 'var(--c-green-lt)', marginBottom: '1.1rem' }}>
            Who we are
          </p>
          <h2 className="display display--lg who__title" style={{ color: 'var(--c-green)' }}>
            Not a farm.<br />
            A young company<br />
            that <span className="mark" style={{ '--mark': 'var(--c-lime)', color: 'var(--ink)' }}>started</span><br />
            on one.
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="lede">
            Farming taught us the standard. Everything since — the brand, the packing,
            the way we solve problems — is what we built on top of it.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2.25rem', marginTop: '2rem' }}>
            {stats.map((s) => (
              <div key={s.label}>
                <p className="stat__num" style={{ color: s.color }}>{s.num}</p>
                <p className="stat__label" style={{ maxWidth: '14ch' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="grid grid--3">
        {pillars.map((item, i) => (
          <PillarCard key={item.n} item={item} index={i} />
        ))}
      </div>

      <Reveal delay={0.2} style={{ marginTop: '2.5rem' }}>
        {/* One button, and it says where it goes. Setho's call: this should
            push a first-time reader into the growing story rather than
            offering them a vague prize ("what we've got to show for it",
            which was also the old Wins page's line, and that page is gone). */}
        <Link to="/grows" className="btn btn--red">
          See how it grows <Arrow size={16} />
        </Link>
      </Reveal>
    </div>
  </section>
);

export default WhoWeAre;
