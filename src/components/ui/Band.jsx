import Reveal from './Reveal';
import Photo from './Photo';

/**
 * A full-bleed photographic band — one dark, wide moment to break up a page
 * that would otherwise be an unbroken scroll of white. Deliberately sparse:
 * a photograph, a scrim, and one line worth reading.
 *
 * `quote` renders larger and in quotation marks; `kicker` is the small
 * label above it; `attribution` sits underneath when the line is someone's
 * actual words. `bleed` drops the corners and the margins so the band runs
 * the full width of the page — for that it has to sit outside a .wrap.
 */
const Band = ({ image, alt, kicker, line, attribution, quote = false, align = 'center', bleed = false }) => (
  <Reveal variant="fade" className={`band band--${align}${bleed ? ' band--bleed' : ''}`}>
    <Photo src={image} alt={alt} className="band__img" />
    <span className="band__scrim" aria-hidden="true" />
    <div className="band__inner">
      {kicker && (
        <p className="eyebrow band__kicker" style={{ '--eyebrow-dot': 'var(--c-yellow)' }}>
          {kicker}
        </p>
      )}
      <p className={`display ${quote ? 'display--md' : 'display--sm'} band__line`}>
        {quote ? `“${line}”` : line}
      </p>
      {attribution && <p className="band__attr">{attribution}</p>}
    </div>
  </Reveal>
);

export default Band;
