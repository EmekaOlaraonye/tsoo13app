import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/ui/Reveal';
import SectionHead from '../components/ui/SectionHead';
import { Blob } from '../components/ui/Blobs';
import { Tomato } from '../components/ui/Tomato';
import { Arrow, Play } from '../components/ui/Icons';
import { INSTAGRAM_URL, VIDEO } from '../siteConfig';

const CATEGORIES = ['All', 'Events', 'Company updates', 'Articles', 'Videos', 'Interviews'];

const stories = [
  {
    id: 'squaremart',
    category: 'Events',
    date: 'June 2025',
    title: 'Now on the shelf at SuperSpar Acacia.',
    body: 'Gaborone asked, so we packed the crates and showed up. Fresh Tsoo...13 tomatoes now sit alongside our run at Food Lover’s SquareMart — ask for it by name.',
    image: '/tomatoes.png',
    color: 'var(--c-red)',
    lead: true,
  },
  {
    id: 'aspire',
    category: 'Company updates',
    date: 'April 2025',
    title: 'Selected for the Aspire Leaders Programme.',
    body: 'One of Africa’s most competitive Harvard-affiliated accelerators, and a room full of founders building at a bigger scale.',
    image: '/lifestyle.png',
    color: 'var(--c-yellow)',
  },
  {
    id: 'cuttings',
    category: 'Articles',
    date: 'January 2025',
    title: 'Cuttings over seeds.',
    body: 'Losing a run of seedlings forced a new method: no seeds, just stems, roots and patience. They flowered faster than the parent plant.',
    image: '/cuttings.png',
    color: 'var(--c-green-lt)',
  },
  {
    id: 'mcw',
    category: 'Company updates',
    date: 'November 2024',
    title: 'MCW leadership cohort graduation.',
    body: 'Building leaders who build things — the operation now runs on more than instinct.',
    image: '/hero.png',
    color: 'var(--c-lime)',
  },
  {
    id: 'season',
    category: 'Articles',
    date: 'September 2024',
    title: 'Nine months in: a season on the ground.',
    body: 'From Mookane Village soil to city shelves — a look back at the first full growing season.',
    image: '/cuttings.png',
    color: 'var(--c-red)',
  },
];

const NewsCard = ({ item, index }) => (
  <Reveal delay={(index % 2) * 0.08} className={item.lead ? 'is-lead' : undefined}>
    <a
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="card"
      style={{ '--card-accent': item.color }}
    >
      <div className="card__media">
        <img className="card__img" src={item.image} alt="" loading="lazy" />
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
        <p className="eyebrow" style={{ '--eyebrow-dot': item.color }}>{item.date}</p>
        <h3 className="card__title">{item.title}</h3>
        <span className="card__rule" />
        <p className="body-sm">{item.body}</p>
      </div>
    </a>
  </Reveal>
);

/** The video lives on the homepage film section — this card sends you there. */
const VideoCard = () => (
  <Reveal className="is-lead">
    <Link to="/#film" className="card" style={{ '--card-accent': 'var(--c-red)' }}>
      <div className="card__media">
        <img className="card__img" src={VIDEO.poster} alt="" loading="lazy" />
        <span className="card__wash" aria-hidden="true" />
        <span
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            display: 'grid',
            placeItems: 'center',
          }}
        >
          <span style={{ width: 52, height: 52, borderRadius: '50%', background: 'rgba(255,255,255,.92)', display: 'grid', placeItems: 'center', color: 'var(--c-red)' }}>
            <Play size={20} />
          </span>
        </span>
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
          Videos
        </span>
      </div>
      <div className="card__body">
        <p className="eyebrow" style={{ '--eyebrow-dot': 'var(--c-red)' }}>{VIDEO.runtime}</p>
        <h3 className="card__title">Inside the growing tunnels.</h3>
        <span className="card__rule" />
        <p className="body-sm">
          Tunnel houses and side rollups — the growing method, on the homepage.
          {VIDEO.credit ? ` Footage by ${VIDEO.credit}.` : ''}
        </p>
      </div>
    </Link>
  </Reveal>
);

/** No interview has run yet — say so plainly instead of inventing one. */
const InterviewCard = () => (
  <Reveal>
    <div className="card" style={{ '--card-accent': 'var(--c-yellow-ink)', opacity: 0.85 }}>
      <div className="card__media">
        <img className="card__img" src="/lifestyle.png" alt="" loading="lazy" />
        <span className="card__wash" aria-hidden="true" />
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
          Interviews
        </span>
      </div>
      <div className="card__body">
        <p className="eyebrow" style={{ '--eyebrow-dot': 'var(--c-yellow-ink)' }}>Coming soon</p>
        <h3 className="card__title">Nothing published yet.</h3>
        <span className="card__rule" />
        <p className="body-sm">First interview lands here once it&apos;s recorded — check back, or follow along on Instagram.</p>
      </div>
    </div>
  </Reveal>
);

const News = () => {
  const [active, setActive] = useState('All');

  const items = useMemo(() => {
    const all = [
      ...stories,
      { id: 'video', category: 'Videos', kind: 'video' },
      { id: 'interview', category: 'Interviews', kind: 'interview' },
    ];
    return active === 'All' ? all : all.filter((item) => item.category === active);
  }, [active]);

  return (
    <section className="section section--top">
      <Blob color="soft-lime" size={430} top={-150} right="-12%" />
      <Blob color="red" size={15} top="16%" left="8%" />
      <Blob color="soft-yellow" size={300} bottom="4%" left="-9%" />
      <Tomato color="var(--c-green-lt)" size={100} top="6%" left="4%" opacity={0.14} rotate={8} outline />

      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
        <SectionHead
          eyebrow="Fresh off the vine"
          dot="var(--c-green-lt)"
          color="var(--c-green)"
          title={<>The <span className="t-red">news</span>.</>}
          lede="Retail drops, recognitions, notes from the field — and the film."
        />

        <Reveal
          delay={0.05}
          style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: 'clamp(2rem, 4vw, 3rem)' }}
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className="chip"
              style={{
                '--chip-bg': active === cat ? 'var(--c-green)' : 'var(--paper)',
                '--chip-fg': active === cat ? 'var(--white)' : 'var(--ink-2)',
                border: active === cat ? 'none' : '1px solid var(--line)',
                cursor: 'pointer',
              }}
            >
              {cat}
            </button>
          ))}
        </Reveal>

        <div className="news-grid">
          {items.map((item, i) => {
            if (item.kind === 'video') return <VideoCard key={item.id} />;
            if (item.kind === 'interview') return <InterviewCard key={item.id} />;
            return <NewsCard key={item.id} item={item} index={i} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default News;
