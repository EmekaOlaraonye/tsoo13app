import { useRef, useState } from 'react';
import Reveal from './Reveal';
import Photo from './Photo';
import { Play } from './Icons';
import { STORM } from '../../siteConfig';

/**
 * The storm that took the structures down, in the journey where it happened.
 *
 * Filmed on a phone as it came through, so it is shown upright and small
 * rather than blown up to fill a widescreen panel. Unlike the film and the
 * reel this one has sound — it is the rain — so it starts muted and the
 * controls let people turn it up if they want it.
 *
 * The two photographs below it are the morning after.
 */
const StormFilm = () => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const start = () => {
    setPlaying(true);
    videoRef.current?.play().catch(() => {});
  };

  return (
    <div className="reel reel--storm">
      <Reveal variant="left" className="reel__copy">
        <p className="eyebrow" style={{ '--eyebrow-dot': 'var(--c-green-lt)', marginBottom: '1rem' }}>
          Filmed as it happened
        </p>
        <h3 className="display display--md reel__title">The afternoon it came down.</h3>
        <p className="lede" style={{ marginTop: '1rem' }}>
          Nobody set out to document this. Someone stood in the doorway with a
          phone and kept filming, which is the only reason there is anything to
          show — there is no photograph of it. By the end of the second clip the
          frames are flat across the yard.
        </p>
        <p className="reel__meta">{STORM.runtime} · {STORM.year} · has sound</p>
      </Reveal>

      <Reveal variant="scale" delay={0.1} className="reel__frame">
        <video
          ref={videoRef}
          src={STORM.src}
          poster={STORM.poster}
          controls={playing}
          preload="none"
          playsInline
          muted
          onPlay={() => setPlaying(true)}
        />
        {!playing && (
          <button type="button" className="reel__play" onClick={start} aria-label="Play the storm footage">
            <Play size={26} />
          </button>
        )}
      </Reveal>

      <div className="stills__row">
        {STORM.stills.map((shot, i) => (
          <Reveal key={shot.src} variant="scale" delay={0.08 + i * 0.06} className="dlv__tile">
            <Photo src={shot.src} alt={shot.alt} />
            <span className="dlv__cap">{shot.caption}</span>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default StormFilm;
