import Reveal from '../components/ui/Reveal';
import SectionHead from '../components/ui/SectionHead';
import { Blob } from '../components/ui/Blobs';
import { Arrow } from '../components/ui/Icons';
import { INSTAGRAM_URL } from '../siteConfig';

const stories = [
  {
    id: 'squaremart',
    category: 'Retail',
    date: 'June 2025',
    title: 'Now on the shelf at SuperSpar Acacia.',
    body: 'Gaborone asked, so we packed the crates and showed up. Fresh Tsoo...13 tomatoes now sit alongside our run at Food Lover’s SquareMart — ask for it by name.',
    image: '/tomatoes.png',
    color: 'var(--c-red)',
    lead: true,
  },
  {
    id: 'aspire',
    category: 'Recognition',
    date: 'April 2025',
    title: 'Selected for the Aspire Leaders Programme.',
    body: 'One of Africa’s most competitive Harvard-affiliated accelerators, and a room full of founders building at a bigger scale.',
    image: '/lifestyle.png',
    color: 'var(--c-yellow)',
  },
  {
    id: 'cuttings',
    category: 'Field notes',
    date: 'January 2025',
    title: 'Cuttings over seeds.',
    body: 'Losing a run of seedlings forced a new method: no seeds, just stems, roots and patience. They flowered faster than the parent plant.',
    image: '/cuttings.png',
    color: 'var(--c-green-lt)',
  },
  {
    id: 'mcw',
    category: 'Credential',
    date: 'November 2024',
    title: 'MCW leadership cohort graduation.',
    body: 'Building leaders who build things — the operation now runs on more than instinct.',
    image: '/hero.png',
    color: 'var(--c-lime)',
  },
  {
    id: 'season',
    category: 'Field notes',
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

const News = () => (
  <section className="section section--top">
    <Blob color="soft-lime" size={430} top={-150} right="-12%" />
    <Blob color="red" size={15} top="16%" left="8%" />
    <Blob color="soft-yellow" size={300} bottom="4%" left="-9%" />

    <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
      <SectionHead
        eyebrow="Fresh off the vine"
        dot="var(--c-green-lt)"
        title={<>The <span className="t-red">news</span>.</>}
        lede="Retail drops, recognitions and notes from the field."
      />

      <div className="news-grid">
        {stories.map((item, i) => (
          <NewsCard key={item.id} item={item} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default News;
