import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Arrow } from './ui/Icons';

const links = [
  { label: 'Journey', to: '/journey', dot: 'var(--c-lime)' },
  { label: 'Goods', to: '/goods', dot: 'var(--c-red)' },
  { label: 'Wins', to: '/wins', dot: 'var(--c-yellow)' },
  { label: 'News', to: '/news', dot: 'var(--c-green-lt)' },
  { label: 'Gallery', to: '/gallery', dot: 'var(--c-red)' },
];

/** The top-left wordmark. The full logo lives on the homepage, not up here. */
export const Wordmark = ({ className = 'nav__mark' }) => (
  <span className={className}>
    Tsoo<em>...</em><b>13</b>
  </span>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 26, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // The sheet closes on link click; this just makes sure the page never stays locked.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <header className={`nav ${scrolled || open ? 'nav--solid' : ''}`}>
        <div className="nav__inner">
          <Link to="/" aria-label="Tsoo...13 — home">
            <Wordmark />
          </Link>

          <nav className="nav__links">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => `nav__link ${isActive ? 'is-active' : ''}`}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <Link to="/contact-us" className="btn btn--red nav__cta">
            Get in touch <Arrow size={15} />
          </Link>

          <button
            className={`nav__burger ${open ? 'is-open' : ''}`}
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <span /><span /><span />
          </button>
        </div>

        {scrolled && (
          <motion.div className="nav__progress" style={{ scaleX: progress }} />
        )}
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="sheet"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="blob blob--soft-lime" style={{ width: 300, height: 300, top: -90, right: -80 }} />
            <span className="blob blob--soft-red" style={{ width: 220, height: 220, bottom: -70, left: -60 }} />

            {[...links, { label: 'Contact Us', to: '/contact-us', dot: 'var(--c-red)' }].map((link, i) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, x: -18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.06 + i * 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                style={{ position: 'relative', zIndex: 1 }}
              >
                <NavLink
                  to={link.to}
                  className={({ isActive }) => `sheet__link ${isActive ? 'is-active' : ''}`}
                  style={{ '--dot': link.dot }}
                  onClick={() => setOpen(false)}
                >
                  <i /> {link.label}
                </NavLink>
              </motion.div>
            ))}

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="eyebrow"
              style={{ '--eyebrow-dot': 'var(--c-yellow)', marginTop: '2rem', position: 'relative', zIndex: 1 }}
            >
              #AskFor13
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
