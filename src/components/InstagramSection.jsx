import Reveal from './ui/Reveal';
import { Blob } from './ui/Blobs';
import { Instagram, Arrow } from './ui/Icons';
import { INSTAGRAM_URL, INSTAGRAM_HANDLE } from '../siteConfig';

const posts = [
  { src: '/tomatoes.png', caption: 'Crate day. Ask for 13 by name.' },
  { src: '/cuttings.png', caption: 'No seeds. Stems, roots and patience.' },
  { src: '/hero.png', caption: '6am in the greenhouse.' },
  { src: '/lifestyle.png', caption: 'Straight from the ground to you.' },
  { src: '/tomatoes.png', caption: 'SuperSpar Acacia restock.' },
  { src: '/cuttings.png', caption: 'Season two, day one.' },
];

const InstagramSection = () => (
  <section className="section ig" id="instagram">
    <Blob color="red" size={16} top="12%" left="7%" />
    <Blob color="green" size={22} top="22%" right="9%" />
    <Blob color="soft-red" size={280} bottom="-8%" left="-8%" opacity={0.7} />

    <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
      <Reveal
        variant="left"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1.5rem',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          marginBottom: 'clamp(2rem, 4vw, 3rem)',
        }}
      >
        <div>
          <p className="eyebrow" style={{ '--eyebrow-dot': 'var(--c-red)', marginBottom: '1rem' }}>
            The story continues
          </p>
          <h2 className="display display--lg" style={{ color: 'var(--c-red)' }}>
            Follow our<br />
            <span className="t-green">journey</span> daily.
          </h2>
          <p className="lede" style={{ marginTop: '1.2rem', maxWidth: '34ch' }}>
            The website is the edit. Instagram is the raw footage — every harvest,
            every restock, every small win as it happens.
          </p>
        </div>

        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--instagram"
        >
          <Instagram size={17} /> {INSTAGRAM_HANDLE} <Arrow size={15} />
        </a>
      </Reveal>

      <div className="ig__grid">
        {posts.map((post, i) => (
          <Reveal key={i} delay={i * 0.05} y={16}>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ig__tile"
              aria-label={`Instagram: ${post.caption}`}
            >
              <img src={post.src} alt="" loading="lazy" />
              <span className="ig__overlay">
                <Instagram size={16} />
                <span>{post.caption}</span>
              </span>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.15} style={{ textAlign: 'center', marginTop: '2.5rem' }}>
        <p className="eyebrow" style={{ '--eyebrow-dot': 'var(--c-green-lt)' }}>
          #AskFor13 &nbsp;·&nbsp; #FreshFrom13 &nbsp;·&nbsp; #PushaBW
        </p>
      </Reveal>
    </div>
  </section>
);

export default InstagramSection;
