import { useCallback, useEffect, useRef } from 'react';
import { Close, Arrow } from './Icons';

/**
 * Full-size viewer for the gallery. Keyboard-complete: Escape closes,
 * left/right step through the whole set, and focus moves to the dialog on
 * open and back to the thumbnail that opened it on close.
 */
const Lightbox = ({ photos, index, onClose, onStep }) => {
  const closeRef = useRef(null);
  const photo = photos[index];

  const handleKey = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onStep(1);
      if (e.key === 'ArrowLeft') onStep(-1);
    },
    [onClose, onStep],
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = prev;
    };
  }, [handleKey]);

  return (
    <div className="lb" onClick={onClose} role="dialog" aria-modal="true" aria-label={photo.caption}>
      <button ref={closeRef} className="lightbox__close lb__close" onClick={onClose} aria-label="Close">
        <Close size={19} />
      </button>

      <button
        className="lb__nav lb__nav--prev"
        onClick={(e) => { e.stopPropagation(); onStep(-1); }}
        aria-label="Previous photograph"
      >
        <Arrow size={18} />
      </button>

      <figure className="lb__figure" onClick={(e) => e.stopPropagation()}>
        <img src={photo.src} alt={photo.caption} />
        <figcaption className="lb__cap">
          <span>{photo.caption}</span>
          <span className="lb__count">{index + 1} / {photos.length}</span>
        </figcaption>
      </figure>

      <button
        className="lb__nav lb__nav--next"
        onClick={(e) => { e.stopPropagation(); onStep(1); }}
        aria-label="Next photograph"
      >
        <Arrow size={18} />
      </button>
    </div>
  );
};

export default Lightbox;
