import { useEffect, useRef, useState } from 'react';
import { photoMeta } from '../../photoData';

/**
 * A photograph from public/farm, with the slow-connection case handled.
 *
 * Two things a bare <img> doesn't do here:
 *
 *  1. Blur-up. A 20px version of the same picture is inlined as a data URI
 *     and painted as the element's own background, so the frame carries the
 *     right colour and rough composition from the first paint instead of
 *     sitting white. Scaling 20px across a 300px box blurs it for free — no
 *     filter needed. The background is dropped once the real file lands.
 *
 *  2. Reserved space. The intrinsic width/height go on the element, so the
 *     browser can size the box before the bytes arrive and the page stops
 *     reflowing as each photo appears. CSS still controls the rendered size;
 *     these attributes only establish the ratio.
 *
 * Anything not in the manifest degrades to a plain lazy <img>.
 */
const Photo = ({ src, alt = '', className, style, eager = false, ...rest }) => {
  const meta = photoMeta(src);
  const ref = useRef(null);
  const [loaded, setLoaded] = useState(false);

  // A cached image can finish before React attaches onLoad, which would leave
  // the placeholder up for good — so check the element's own state on mount.
  useEffect(() => {
    if (ref.current?.complete && ref.current.naturalWidth > 0) setLoaded(true);
  }, []);

  const placeholder =
    meta && !loaded
      ? {
          backgroundImage: `url("${meta.lqip}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }
      : null;

  return (
    <img
      ref={ref}
      src={src}
      alt={alt}
      width={meta?.w}
      height={meta?.h}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={eager ? 'high' : undefined}
      onLoad={() => setLoaded(true)}
      onError={() => setLoaded(true)}
      className={className}
      style={{ ...placeholder, ...style }}
      {...rest}
    />
  );
};

export default Photo;
