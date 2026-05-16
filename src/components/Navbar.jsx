import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useIsMobile } from '../hooks/useIsMobile';

const links = ['Journey', 'Wins', 'Goods', 'Contact'];

const Navbar = () => {
  const isMobile = useIsMobile(768);
  const [menuOpen, setMenuOpen] = useState(false);

  const linkStyle = {
    fontSize: '0.85rem',
    fontWeight: 700,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.7)',
    transition: 'color 0.3s',
    textDecoration: 'none',
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: '1.25rem 1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'linear-gradient(to bottom, rgba(10,10,10,0.9), transparent)',
          backdropFilter: 'blur(4px)'
        }}
      >
        <span style={{
          fontFamily: 'Anton, sans-serif',
          fontSize: '1.5rem',
          textTransform: 'uppercase',
          color: 'var(--color-golden-yellow)'
        }}>
          13WAY
        </span>

        {isMobile ? (
          /* Hamburger button */
          <button
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
              padding: '4px',
              zIndex: 110,
            }}
          >
            {[0, 1, 2].map(i => (
              <motion.span
                key={i}
                animate={
                  menuOpen
                    ? i === 0 ? { rotate: 45, y: 7 }
                    : i === 1 ? { opacity: 0, scaleX: 0 }
                    : { rotate: -45, y: -7 }
                    : { rotate: 0, y: 0, opacity: 1, scaleX: 1 }
                }
                transition={{ duration: 0.25 }}
                style={{
                  display: 'block',
                  width: '22px',
                  height: '2px',
                  background: 'var(--color-golden-yellow)',
                  borderRadius: '2px',
                  transformOrigin: 'center',
                }}
              />
            ))}
          </button>
        ) : (
          /* Desktop nav links */
          <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
            {links.map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                style={linkStyle}
                onMouseEnter={e => e.target.style.color = 'var(--color-golden-yellow)'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.7)'}
              >
                {link}
              </a>
            ))}
          </div>
        )}
      </motion.nav>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {isMobile && menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 99,
              background: 'rgba(5,5,5,0.97)',
              backdropFilter: 'blur(12px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2.5rem',
            }}
          >
            {links.map((link, i) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: 'Anton, sans-serif',
                  fontSize: 'clamp(2.5rem, 12vw, 4rem)',
                  textTransform: 'uppercase',
                  color: 'white',
                  textDecoration: 'none',
                  letterSpacing: '0.05em',
                }}
                onMouseEnter={e => e.target.style.color = 'var(--color-golden-yellow)'}
                onMouseLeave={e => e.target.style.color = 'white'}
              >
                {link}
              </motion.a>
            ))}
            <p style={{ color: 'var(--color-sunburst-orange)', fontSize: '0.8rem', letterSpacing: '0.2em', marginTop: '1rem' }}>
              #AskFor13
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
