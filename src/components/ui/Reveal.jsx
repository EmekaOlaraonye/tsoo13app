import { motion, useReducedMotion } from 'framer-motion';

/**
 * Scroll reveal. Every animation on the site funnels through here so the
 * whole page shares one rhythm — but not every section has to enter the
 * same way. `variant` swaps the initial transform; `up` (the original,
 * default) is a short rise + fade.
 */
const VARIANTS = {
  up: (y) => ({ opacity: 0, y }),
  left: () => ({ opacity: 0, x: -46 }),
  right: () => ({ opacity: 0, x: 46 }),
  fade: () => ({ opacity: 0 }),
  scale: () => ({ opacity: 0, scale: 0.92, y: 14 }),
};

const Reveal = ({ children, delay = 0, y = 22, once = true, variant = 'up', className, style, as = 'div' }) => {
  const MotionTag = motion[as] || motion.div;
  // The CSS reduced-motion block can't reach Framer Motion — it animates
  // inline transforms in JS, not CSS transitions. So opt out here too:
  // content still appears, it just doesn't travel to get there.
  const reduced = useReducedMotion();
  const initial = reduced ? { opacity: 0 } : (VARIANTS[variant] || VARIANTS.up)(y);
  const animate = { opacity: 1, x: 0, y: 0, scale: 1 };

  return (
    <MotionTag
      className={className}
      style={style}
      initial={initial}
      whileInView={animate}
      viewport={{ once, margin: '-12% 0px -8% 0px' }}
      transition={reduced ? { duration: 0.2, delay: 0 } : { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  );
};

export default Reveal;
