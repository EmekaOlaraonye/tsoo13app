import { motion, useScroll, useSpring, useTransform, useReducedMotion } from 'framer-motion';

/**
 * The ripening rail — a hairline under the nav that fills as you read.
 *
 * Every site with a scroll indicator uses one flat brand colour. This one
 * carries the farm's own gradient, green through lime and yellow to red, and
 * because it is revealed left to right rather than stretched, the colour at
 * the leading edge is the true colour of where you are on the page. The top
 * of a page is green. The bottom is ripe. It is the only progress bar that
 * could belong to this farm and nobody else.
 *
 * Deliberately not a scroll-driven CSS animation, unlike the rest of the
 * ripening work. Those are decoration and degrade to nothing; this is a
 * reading cue, and it should be there for everyone — scroll-driven CSS only
 * became Baseline this year and iOS is the likeliest straggler. Framer is
 * already in the bundle for the reveals, so this costs no new bytes.
 *
 * clip-path rather than width or scaleX: width relayouts on every frame, and
 * scaleX would squash the gradient so the leading edge would be red from the
 * first pixel. Clipping leaves the gradient at its true size underneath and
 * just uncovers more of it.
 */
const RipenRail = () => {
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();

  // A little lag makes the rail feel like it is catching up with you rather
  // than welded to the scrollbar. Reduced motion takes the raw value: the
  // bar still moves, because it moves only when the reader moves, but it
  // stops having a motion character of its own.
  const eased = useSpring(scrollYProgress, { stiffness: 190, damping: 34, mass: 0.35 });
  const source = reduced ? scrollYProgress : eased;

  const clipPath = useTransform(source, (v) => {
    const p = Math.min(Math.max(v, 0), 1);
    return `inset(0 ${((1 - p) * 100).toFixed(2)}% 0 0)`;
  });

  return <motion.div className="ripen" aria-hidden="true" style={{ clipPath }} />;
};

export default RipenRail;
