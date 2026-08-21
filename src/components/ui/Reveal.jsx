import { motion } from 'framer-motion';

/**
 * Scroll reveal. Deliberately restrained — a short rise and a fade, nothing else.
 * Every animation on the site funnels through here so the whole page shares one rhythm.
 */
const Reveal = ({ children, delay = 0, y = 22, once = true, className, style, as = 'div' }) => {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-12% 0px -8% 0px' }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  );
};

export default Reveal;
