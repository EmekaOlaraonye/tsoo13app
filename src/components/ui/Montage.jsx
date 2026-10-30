import { useRef, useState } from 'react';
import Reveal from './Reveal';
import { Play } from './Icons';
import { MONTAGE } from '../../siteConfig';

/**
 * 2025, end to end — the year cut into one run.
 *
 * Near-square rather than upright or widescreen, because that is how it was
 * cut. Like the other players on the site it is `preload="none"` behind a
 * poster, so none of its weight is paid by someone who only scrolls past.
 */
const Montage = () => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const start = () => {
    setPlaying(true);
    videoRef.current?.play().catch(() => {});
  };

  return (
    <div className="reel reel--montage reel--flip">
      <Reveal variant="left" className="reel__copy">
        <p className="eyebrow" style={{ '--eyebrow-dot': 'var(--c-yellow-ink)', marginBottom: '1rem' }}>
          2025, end to end
        </p>
        <h3 className="display display--md reel__title">The whole year, in one run.</h3>
        <p className="lede" style={{ marginTop: '1rem' }}>
          {MONTAGE.blurb}
        </p>
        <p className="reel__meta">{MONTAGE.runtime} · has sound</p>
      </Reveal>

      <Reveal variant="scale" delay={0.1} className="reel__frame">
        <video
          ref={videoRef}
          src={MONTAGE.src}
          poster={MONTAGE.poster}
          controls={playing}
          preload="none"
          playsInline
          muted
          onPlay={() => setPlaying(true)}
        />
        {!playing && (
          <button type="button" className="reel__play" onClick={start} aria-label="Play the 2025 montage">
            <Play size={26} />
          </button>
        )}
      </Reveal>
    </div>
  );
};

export default Montage;
