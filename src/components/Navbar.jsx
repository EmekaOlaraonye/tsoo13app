import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Arrow } from './ui/Icons';
import logoMark from '../assets/13icon.png';
import dotsThirteen from '../assets/13nb-cropped.png';

const links = [
  { label: 'Journey', to: '/journey', dot: 'var(--c-lime)' },
  { label: 'Goods', to: '/goods', dot: 'var(--c-red)' },
  { label: 'Wins', to: '/wins', dot: 'var(--c-yellow)' },
  { label: 'News', to: '/news', dot: 'var(--c-green-lt)' },
  { label: 'Gallery', to: '/gallery', dot: 'var(--c-red)' },
];

const sheetLinks = [...links, { label: 'Contact Us', to: '/contact-us', dot: 'var(--c-red)' }];

/**
 * The top-left wordmark. The homepage gets the "...13" mark since the full
 * hero logo is already below it; every other page gets the small sun icon
 * instead, since there's nothing else on screen carrying the brand.
 */
export const Wordmark = ({ isHome = false }) =>
  isHome ? (
    <img src={dotsThirteen} alt="Tsoo...13" className="nav__mark nav__mark--img nav__mark--img-13" />
  ) : (
    <img src={logoMark} alt="Tsoo...13" className="nav__mark nav__mark--img" />
  );

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const sheetRef = useRef(null);
  const burgerRef = useRef(null);
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  // Already home: Link won't remount the page, so Layout's scroll-to-top
  // effect never fires. Glide there ourselves instead.
  const handleHomeClick = (e) => {
    if (pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

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

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  // A sheet link can still hold focus the instant it closes (link click, Escape).
  // aria-hidden on an element with focus inside it is invalid, so hand focus
  // back to the button that controls the sheet.
  useEffect(() => {
    if (open) return;
    if (sheetRef.current?.contains(document.activeElement)) {
      burgerRef.current?.focus();
    }
  }, [open]);

  return (
    <>
      <header className={`nav ${scrolled || open ? 'nav--solid' : ''}`}>
        <div className="nav__inner">
          <Link to="/" aria-label="Tsoo...13 — home" onClick={handleHomeClick}>
            <Wordmark isHome={isHome} />
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
            ref={burgerRef}
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

      {/* Always mounted; visibility and pointer-events are class-driven. */}
      <div ref={sheetRef} className={`sheet ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <span className="blob blob--soft-lime" style={{ width: 300, height: 300, top: -90, right: -80 }} />
        <span className="blob blob--soft-red" style={{ width: 220, height: 220, bottom: -70, left: -60 }} />

        {sheetLinks.map((link, i) => (
          <div className="sheet__item" key={link.to} style={{ '--i': i }}>
            <NavLink
              to={link.to}
              className={({ isActive }) => `sheet__link ${isActive ? 'is-active' : ''}`}
              style={{ '--dot': link.dot }}
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
            >
              <i /> {link.label}
            </NavLink>
          </div>
        ))}

        <p
          className="eyebrow sheet__item"
          style={{ '--eyebrow-dot': 'var(--c-yellow)', '--i': sheetLinks.length, marginTop: '2rem' }}
        >
          #AskFor13
        </p>
      </div>
    </>
  );
};

export default Navbar;
