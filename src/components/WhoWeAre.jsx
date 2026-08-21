import { Link } from 'react-router-dom';
import Reveal from './ui/Reveal';
import { Blob } from './ui/Blobs';
import { Arrow } from './ui/Icons';

const pillars = [
  {
    n: '01',
    title: 'We grow it',
    body: 'Greenhouse, cuttings, whatever the season demands. If the usual way stops working, we find another one.',
    color: 'var(--c-lime)',
    soft: 'var(--c-lime-soft)',
  },
  {
    n: '02',
    title: 'We move it',
    body: 'Picked, packed and driven from Mookane to Gaborone shelves — no middle-man diluting the quality.',
    color: 'var(--c-red)',
    soft: 'var(--c-red-soft)',
  },
  {
    n: '03',
    title: 'We build it',
    body: 'The brand, the standard, the ambition. Run by young people who want this to be more than a farm.',
    color: 'var(--c-yellow)',
    soft: 'var(--c-yellow-soft)',
  },
];

const stats = [
  { num: '13', label: 'The name people ask for', color: 'var(--c-red)' },
  { num: '3', label: 'Places to find us', color: 'var(--c-green-lt)' },
  { num: '100%', label: 'Botswana grown', color: 'var(--c-lime-ink)' },
];

const PillarCard = ({ item, index }) => (
  <Reveal delay={index * 0.08}>
    <article
      className="card"
      style={{ '--card-accent': item.color, padding: '1.9rem 1.7rem 2rem', overflow: 'hidden' }}
    >
      <span
        className="blob"
        aria-hidden="true"
        style={{
          width: 150,
          height: 150,
          top: -60,
          right: -50,
          background: item.soft,
        }}
      />
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
        <span
          className="display"
          style={{ fontSize: '1.05rem', color: item.color, letterSpacing: '0.08em' }}
        >
          {item.n}
        </span>
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

    <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
      <div
        style={{
          display: 'grid',
          gap: 'clamp(1.75rem, 4vw, 3.5rem)',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          alignItems: 'end',
          marginBottom: 'clamp(2.5rem, 5vw, 4rem)',
        }}
      >
        <Reveal>
          <p className="eyebrow" style={{ '--eyebrow-dot': 'var(--c-green-lt)', marginBottom: '1.1rem' }}>
            Who we are
          </p>
          <h2 className="display display--lg">
            Not a farm.<br />
            A young company<br />
            that <span className="mark" style={{ '--mark': 'var(--c-lime)' }}>started</span> on one.
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="lede">
            Farming taught us the standard. Everything since — the brand, the shelves,
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
        <Link to="/wins" className="btn btn--ghost">
          What we&apos;ve got to show for it <Arrow size={16} />
        </Link>
      </Reveal>
    </div>
  </section>
);

export default WhoWeAre;
