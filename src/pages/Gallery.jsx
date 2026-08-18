import React from 'react';
import { motion } from 'framer-motion';

const photos = [
  { src: '/hero.png', caption: 'Greenhouse · Mookane Village', span: 'col-span-2 row-span-2', style: { gridColumn: 'span 2', gridRow: 'span 2' } },
  { src: '/tomatoes.png', caption: '#askfor13', style: {} },
  { src: '/cuttings.png', caption: 'No seeds. Just stems, roots and care.', style: {} },
  { src: '/tomatoes.png', caption: 'Food Lover\'s SquareMart · Gaborone', style: {} },
  { src: '/hero.png', caption: 'Smart hands, smarter farming.', style: {} },
];

const Gallery = () => (
  <section style={{
    background: 'var(--color-moss-green)',
    position: 'relative',
    overflow: 'hidden',
    padding: '6rem 0'
  }}>
    {/* Decorative glows */}
    <div style={{
      position: 'absolute', top: '-80px', right: '-80px',
      width: '450px', height: '450px', borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(253,184,19,0.12), transparent)',
      pointerEvents: 'none'
    }} />
    <div style={{
      position: 'absolute', bottom: '-100px', left: '-100px',
      width: '500px', height: '500px', borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(227,123,40,0.08), transparent)',
      pointerEvents: 'none'
    }} />

    <div className="container" style={{ position: 'relative', zIndex: 1 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ marginBottom: '3rem' }}
      >
        <p style={{ color: 'var(--color-sunburst-orange)', fontWeight: 700, letterSpacing: '0.22em', fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
          The Journey, Documented
        </p>
        <h2 style={{
          fontFamily: 'Anton, sans-serif',
          fontSize: 'clamp(2.5rem, 6vw, 5rem)',
          textTransform: 'uppercase',
          lineHeight: 0.9,
          color: 'white'
        }}>
          IN THE FIELD.
        </h2>
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridTemplateRows: 'repeat(2, 240px)',
        gap: '0.75rem'
      }}>
        {photos.map((photo, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-5%' }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            whileHover={{ scale: 1.02 }}
            style={{
              ...photo.style,
              borderRadius: '1rem',
              overflow: 'hidden',
              position: 'relative',
              cursor: 'pointer'
            }}
          >
            <img
              src={photo.src}
              alt={photo.caption}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 50%)',
              opacity: 0,
              transition: 'opacity 0.3s ease'
            }}
              onMouseEnter={e => e.currentTarget.style.opacity = '1'}
              onMouseLeave={e => e.currentTarget.style.opacity = '0'}
            >
              <p style={{
                position: 'absolute',
                bottom: '1rem',
                left: '1rem',
                right: '1rem',
                fontSize: '0.8rem',
                color: 'rgba(255,255,255,0.85)',
                fontWeight: 600
              }}>
                {photo.caption}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Gallery;
