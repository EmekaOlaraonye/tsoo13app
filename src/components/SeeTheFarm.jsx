import { Link } from 'react-router-dom';
import Reveal from './ui/Reveal';
import { Arrow } from './ui/Icons';
import Photo from './ui/Photo';

const shots = [
  { src: '/farm/tunnel-mature.jpg', caption: 'Inside the tunnels' },
  { src: '/farm/seedling-planted.jpg', caption: 'A seedling into its bag' },
  { src: '/farm/sorting-indoors.jpg', caption: 'Sorting under the shed' },
  { src: '/farm/tunnels-exterior.jpg', caption: 'The tunnels at Mookane' },
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

    <div className="farm-strip farm-strip--hero">
      {shots.map((shot, i) => (
        <Reveal key={shot.src + i} delay={(i % 4) * 0.06} variant="scale" className="farm-strip__item">
          <Photo src={shot.src} alt={shot.caption} />
          <span className="farm-strip__cap">{shot.caption}</span>
        </Reveal>
      ))}
    </div>
  </div>
);

export default SeeTheFarm;
