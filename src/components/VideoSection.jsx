import { useCallback, useEffect, useState } from 'react';
import Reveal from './ui/Reveal';
import { Blob } from './ui/Blobs';
import { Play, Close } from './ui/Icons';
import { VIDEO, INSTAGRAM_URL } from '../siteConfig';

const hasFilm = Boolean(VIDEO.src || VIDEO.youtubeId);

const Lightbox = ({ onClose }) => {
  const handleKey = useCallback((e) => { if (e.key === 'Escape') onClose(); }, [onClose]);

  useEffect(() => {
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [handleKey]);

  return (
    <div
      className="lightbox"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={VIDEO.title}
    >
      <div className="lightbox__frame" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox__close" onClick={onClose} aria-label="Close video">
          <Close size={19} />
        </button>

        {VIDEO.youtubeId ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${VIDEO.youtubeId}?autoplay=1&rel=0`}
            title={VIDEO.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        ) : VIDEO.src ? (
          <video src={VIDEO.src} poster={VIDEO.poster} controls autoPlay playsInline />
        ) : (
          <div className="lightbox__soon">
            <div>
              <p className="eyebrow" style={{ '--eyebrow-dot': 'var(--c-yellow)', color: 'rgba(255,255,255,.65)', marginBottom: '1rem' }}>
                In production
              </p>
              <h3 className="display display--md" style={{ marginBottom: '1rem' }}>
                The film is<br />still shooting.
              </h3>
              <p style={{ color: 'rgba(255,255,255,.7)', maxWidth: '34ch', margin: '0 auto 1.75rem' }}>
                We&apos;re out in the field putting it together. Follow along and you&apos;ll see it first.
              </p>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn btn--light">
                Watch the clips on Instagram
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const VideoSection = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="section" id="film" style={{ background: 'var(--white)' }}>
      <Blob color="soft-yellow" size={460} top="-16%" right="-14%" />
      <Blob color="red" size={16} top="12%" left="10%" />
      <Blob color="lime" size={26} bottom="10%" right="8%" />

      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
        <Reveal
          variant="right"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1.5rem',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: 'clamp(1.75rem, 3.5vw, 2.75rem)',
          }}
        >
          <div>
            <p className="eyebrow" style={{ '--eyebrow-dot': 'var(--c-red)', marginBottom: '1rem' }}>
              Meet us properly
            </p>
            <h2 className="display display--lg" style={{ color: 'var(--c-red)' }}>
              Two minutes<br />
              with <span className="t-green">Tsoo...13</span>.
            </h2>
          </div>
          <p className="lede" style={{ maxWidth: '30ch' }}>
            The people, the greenhouse, the crates going out at sunrise. Everything the
            words on this page can&apos;t do.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            className="vid"
            role="button"
            tabIndex={0}
            aria-label={`Play: ${VIDEO.title}`}
            onClick={() => setOpen(true)}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setOpen(true); } }}
          >
            <img className="vid__poster" src={VIDEO.poster} alt="" loading="lazy" />
            <span className="vid__scrim" aria-hidden="true" />
            <span className="vid__play" aria-hidden="true">
              <Play size={30} />
            </span>

            <div className="vid__meta">
              <div>
                <span className="chip" style={{ '--chip-bg': 'rgba(255,255,255,.9)', '--chip-fg': 'var(--ink)' }}>
                  {hasFilm ? VIDEO.runtime : 'Coming soon'}
                </span>
                <p className="display display--sm" style={{ marginTop: '0.85rem', color: 'var(--white)' }}>
                  From the soil up.
                </p>
              </div>
              <p style={{ fontSize: '0.84rem', fontWeight: 600, color: 'rgba(255,255,255,.82)' }}>
                Mookane Village, Botswana
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      {open && <Lightbox onClose={() => setOpen(false)} />}
    </section>
  );
};

export default VideoSection;
