import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const taglines = [
  'farming.creating.growing.',
  '#askfor13',
  'Smart hands, smarter farming.',
  'Botswana\'s home of fresh tomatoes.',
  'Home grown. Hand picked. Always reliable.',
  'Different start. Same 13 quality.',
];

const Ticker = () => {
  const items = [...taglines, ...taglines];
  return (
    <div style={{
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      overflow: 'hidden',
      background: 'var(--color-sunburst-orange)',
      padding: '0.6rem 0',
      zIndex: 10
    }}>
      <motion.div
        animate={{ x: [0, '-50%'] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
        style={{ display: 'flex', gap: '4rem', whiteSpace: 'nowrap', width: 'max-content' }}
      >
        {items.map((t, i) => (
          <span key={i} style={{
            fontFamily: 'Anton, sans-serif',
            fontSize: '0.85rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'white'
          }}>
            {t} <span style={{ opacity: 0.5, margin: '0 0.5rem' }}>✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = '/hero.png';
    img.onload = () => setLoaded(true);
  }, []);

  return (
    <section className="hero" style={{
      position: 'relative',
      height: '100vh',
      width: '100vw',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#0D1A0A'
    }}>
      {/* Background */}
      <motion.div
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: loaded ? 1 : 1.08, opacity: loaded ? 0.55 : 0 }}
        transition={{ duration: 2.2, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/hero.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
        }}
      />

      {/* Gradient overlays */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.85) 100%)',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at 50% 60%, transparent 40%, rgba(10,10,10,0.7) 100%)',
        pointerEvents: 'none'
      }} />

      {/* Formerly badge */}
      <motion.div
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.7 }}
        style={{
          zIndex: 2,
          marginBottom: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
          background: 'rgba(255,255,255,0.06)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(255,255,255,0.12)',
          borderRadius: '999px',
          padding: '0.4rem 1.2rem',
          fontSize: '0.7rem',
          fontWeight: 700,
          letterSpacing: '0.18em',
          color: 'rgba(255,255,255,0.55)'
        }}
      >
        <span style={{
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          background: 'var(--color-sunburst-orange)',
          display: 'inline-block'
        }} />
        FORMERLY TSOO...13 &nbsp;→&nbsp; NOW 13WAY
      </motion.div>

      {/* Main heading */}
      <div style={{ zIndex: 2, textAlign: 'center' }}>
        <motion.h1
          initial={{ scale: 0.85, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          style={{
            fontFamily: 'Anton, sans-serif',
            fontSize: 'clamp(6rem, 22vw, 18rem)',
            lineHeight: 0.85,
            textTransform: 'uppercase',
            letterSpacing: '-0.01em',
            color: 'var(--color-white)',
            textShadow: '0 0 80px rgba(227,123,40,0.25)',
          }}
        >
          13WAY
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          style={{
            marginTop: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          <p style={{
            fontSize: 'clamp(0.9rem, 2.5vw, 1.3rem)',
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--color-golden-yellow)'
          }}>
            Botswana's Home of Fresh Tomatoes
          </p>
          <p style={{
            fontSize: 'clamp(0.8rem, 1.8vw, 1rem)',
            color: 'rgba(255,255,255,0.55)',
            letterSpacing: '0.08em'
          }}>
            farming · creating · growing · Mookane Village → Gaborone
          </p>
        </motion.div>

        <motion.a
          href="#journey"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7 }}
          whileHover={{ scale: 1.04, backgroundColor: 'var(--color-golden-yellow)' }}
          whileTap={{ scale: 0.97 }}
          style={{
            display: 'inline-block',
            marginTop: '2.5rem',
            padding: '0.9rem 2.4rem',
            background: 'var(--color-sunburst-orange)',
            color: 'white',
            fontFamily: 'Anton, sans-serif',
            fontSize: '0.9rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            borderRadius: '0.5rem',
            transition: 'all 0.3s ease',
            textDecoration: 'none'
          }}
        >
          #AskFor13
        </motion.a>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2.2 }}
        style={{
          position: 'absolute',
          bottom: '4rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.4rem'
        }}
      >
        <span style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase' }}>
          Scroll
        </span>
        <div style={{ width: '1px', height: '50px', background: 'linear-gradient(to bottom, rgba(227,123,40,0.8), transparent)' }} />
      </motion.div>

      {/* Ticker */}
      <Ticker />
    </section>
  );
};

export default Hero;
