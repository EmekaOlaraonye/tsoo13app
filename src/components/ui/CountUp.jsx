import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

/**
 * A number that arrives at its value instead of simply being there.
 *
 * Same idea as everything else in the ripening pass: the page comes to
 * fullness as you reach it. 13 is the brand, so watching it land on 13 is
 * worth a second of anyone's attention.
 *
 * Accessibility: the visible number changes about sixty times a second,
 * which is noise to a screen reader and in some of them a torrent of
 * announcements. So the animating copy is aria-hidden and the real value
 * sits beside it in an .sr-only span, said once, correctly.
 *
 * Reduced motion is handled by rendering the final value rather than by
 * setting state to it — a synchronous setState in an effect body is a
 * cascading render, and the lint rule that says so is right.
 *
 * Anything that is not digits-then-suffix ("13", "100%") renders as-is, so
 * this is safe to wrap around any stat.
 */
const CountUp = ({ value, duration = 1150, className, style }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-12% 0px' });
  const reduced = useReducedMotion();

  const parts = /^(\d+)(\D*)$/.exec(String(value));
  const target = parts ? Number(parts[1]) : null;
  const suffix = parts ? parts[2] : '';

  const [counted, setCounted] = useState(0);

  useEffect(() => {
    if (target === null || !inView || reduced) return undefined;
    let raf = 0;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      // The same ease-out the reveals use, so the counting belongs to the
      // same page as everything else moving on it.
      setCounted(Math.round(target * (1 - (1 - t) ** 3)));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration, reduced]);

  if (target === null) {
    return (
      <span ref={ref} className={className} style={style}>
        {value}
      </span>
    );
  }

  return (
    <span ref={ref} className={className} style={style}>
      <span aria-hidden="true">
        {reduced ? target : counted}
        {suffix}
      </span>
      <span className="sr-only">{value}</span>
    </span>
  );
};

export default CountUp;
