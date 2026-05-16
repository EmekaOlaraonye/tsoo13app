import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
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
        padding: '1.5rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'linear-gradient(to bottom, rgba(10,10,10,0.8), transparent)',
        backdropFilter: 'blur(2px)'
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
      <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
        {['Journey', 'Wins', 'Goods', 'Contact'].map(link => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            style={{
              fontSize: '0.85rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.7)',
              transition: 'color 0.3s'
            }}
            onMouseEnter={e => e.target.style.color = 'var(--color-golden-yellow)'}
            onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.7)'}
          >
            {link}
          </a>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;
