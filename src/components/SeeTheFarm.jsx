import { Link } from 'react-router-dom';
import Reveal from './ui/Reveal';
import { Arrow } from './ui/Icons';

const shots = [
  { src: '/hero.png', caption: 'First light in the greenhouse' },
  { src: '/cuttings.png', caption: 'Cuttings, rooting and ready' },
  { src: '/lifestyle.png', caption: 'The operation, day to day' },
  { src: '/tomatoes.png', caption: 'Crates, packed and moving' },
];

const SeeTheFarm = () => (
  <div style={{ marginTop: 'clamp(3rem, 6vw, 5rem)' }}>
    <Reveal
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1.5rem',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        marginBottom: '2rem',
      }}
    >
      <div>
        <p className="eyebrow" style={{ '--eyebrow-dot': 'var(--c-yellow)', marginBottom: '1rem' }}>
          Mookane Village
        </p>
        <h3 className="display display--md" style={{ color: 'var(--c-green)' }}>
          See the farm.
        </h3>
      </div>
      <Link to="/gallery" className="btn btn--ghost">
        Full gallery <Arrow size={16} />
      </Link>
    </Reveal>

    <div className="farm-strip">
      {shots.map((shot, i) => (
        <Reveal key={shot.src + i} delay={(i % 4) * 0.06} className="farm-strip__item">
          <img src={shot.src} alt={shot.caption} loading="lazy" />
          <span className="farm-strip__cap">{shot.caption}</span>
        </Reveal>
      ))}
    </div>
  </div>
);

export default SeeTheFarm;
