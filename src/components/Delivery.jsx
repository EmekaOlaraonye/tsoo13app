import { useRef, useState } from 'react';
import Reveal from './ui/Reveal';
import Photo from './ui/Photo';
import { Play } from './ui/Icons';
import { DELIVERY } from '../siteConfig';

/**
 * Getting it to town — the third of "we grow it, we move it, we build it",
 * and until now the only part of it on the site was one line in the process
 * strip.
 *
 * The tiles are a single auto-fitting row, which is the point: when the
 * delivery film is recovered, setting DELIVERY.video adds a third tile and
 * nothing else has to change.
 */
const VideoTile = () => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const start = () => {
    setPlaying(true);
    videoRef.current?.play().catch(() => {});
  };

  return (
    <Reveal variant="scale" className="dlv__tile dlv__tile--video">
      <video
        ref={videoRef}
        src={DELIVERY.video}
        poster={DELIVERY.poster ?? undefined}
        controls={playing}
        preload="none"
        playsInline
        muted
        onPlay={() => setPlaying(true)}
      />
      {!playing && (
        <button type="button" className="reel__play" onClick={start} aria-label="Play the delivery film">
          <Play size={22} />
        </button>
      )}
      {DELIVERY.runtime && <span className="dlv__cap">{DELIVERY.runtime}</span>}
    </Reveal>
  );
};

const Delivery = () => (
  <div className="dlv">
    <Reveal>
      <p className="eyebrow" style={{ '--eyebrow-dot': 'var(--c-red)', marginBottom: '1rem' }}>
        We move it
      </p>
      <h3 className="display display--md" style={{ color: 'var(--c-red)', marginBottom: '0.5rem' }}>
        The run to town.
      </h3>
      <p className="lede" style={{ maxWidth: '52ch' }}>
        Packed at Mookane, loaded onto the bakkie and driven in ourselves — no
        agent, no depot, nobody in between deciding what arrives. What was picked
        in the morning is in town by the afternoon, the same day it was packed.
      </p>
    </Reveal>

    <div className="dlv__row">
      {DELIVERY.video && <VideoTile />}
      {DELIVERY.stills.map((shot, i) => (
        <Reveal key={shot.src} variant="scale" delay={0.08 + i * 0.06} className="dlv__tile">
          <Photo src={shot.src} alt={shot.alt} />
          <span className="dlv__cap">{shot.caption}</span>
        </Reveal>
      ))}
    </div>
  </div>
);

export default Delivery;
