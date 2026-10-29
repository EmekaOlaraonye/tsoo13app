import { useRef, useState } from 'react';
import Reveal from './Reveal';
import { Play } from './Icons';
import { REEL } from '../../siteConfig';

/**
 * The vertical companion to the 16:9 film.
 *
 * Most of the farm footage was shot upright on a phone, which no widescreen
 * panel can show without throwing away most of the frame — so it gets a
 * player shaped the way it was filmed.
 *
 * `preload="none"` matters here: the reel is several megabytes and sits near
 * the bottom of a long page, so nothing is fetched until someone presses
 * play. The poster carries the frame until then.
 */
const Reel = () => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const start = () => {
    setPlaying(true);
    // play() resolves asynchronously and rejects if interrupted; the catch
    // keeps a refused autoplay from surfacing as an unhandled rejection.
    videoRef.current?.play().catch(() => {});
  };

  return (
    <div className="reel">
      <Reveal variant="left" className="reel__copy">
        <p className="eyebrow" style={{ '--eyebrow-dot': 'var(--c-red)', marginBottom: '1rem' }}>
          Shot on the row
        </p>
        <h2 className="display display--md reel__title">In motion.</h2>
        <p className="lede" style={{ marginTop: '1rem' }}>
          {REEL.blurb}
        </p>
        <p className="reel__meta">{REEL.runtime} · no sound</p>
      </Reveal>

      <Reveal variant="scale" delay={0.1} className="reel__frame">
        <video
          ref={videoRef}
          src={REEL.src}
          poster={REEL.poster}
          controls={playing}
          preload="none"
          playsInline
          onPlay={() => setPlaying(true)}
        />
        {!playing && (
          <button type="button" className="reel__play" onClick={start} aria-label="Play the reel">
            <Play size={26} />
          </button>
        )}
      </Reveal>
    </div>
  );
};

export default Reel;
