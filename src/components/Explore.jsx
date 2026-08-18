import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useIsMobile } from '../hooks/useIsMobile';

const destinations = [
  {
    label: 'The Journey',
    to: '/journey',
    category: 'Our Story',
    desc: 'From family plot to city shelves — how we got here.',
    image: '/hero.png',
    accent: 'var(--color-sunburst-orange)'
  },
  {
    label: 'The Wins',
    to: '/wins',
    category: 'Recognition',
    desc: 'Credentials, movements, and the spotlight.',
    image: '/tomatoes.png',
    accent: 'var(--color-golden-yellow)'
  },
  {
    label: 'The Goods',
    to: '/goods',
    category: 'Produce',
    desc: 'Home grown. Hand picked. Always reliable.',
    image: '/cuttings.png',
    accent: '#4A7C2F'
  },
  {
    label: 'The News',
    to: '/news',
    category: 'Dispatches',
    desc: 'Retail drops and fresh updates from the field.',
    image: '/tomatoes.png',
    accent: 'var(--color-sunburst-orange)'
  },
  {
    label: 'Gallery',
    to: '/gallery',
    category: 'In The Field',
    desc: 'The journey, documented in photos.',
    image: '/hero.png',
    accent: 'var(--color-golden-yellow)'
  },
  {
    label: 'Contact Us',
    to: '/contact-us',
    category: 'Get In Touch',
    desc: "Chef, retailer, or fan — let's talk.",
    image: '/cuttings.png',
    accent: '#4A7C2F'
  }
];

const DestinationCard = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-8%' }}
    transition={{ duration: 0.7, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
  >
    <Link
      to={item.to}
      style={{
        display: 'block',
        textDecoration: 'none',
        borderRadius: '1.5rem',
        overflow: 'hidden',
        background: '#111',
        border: '1px solid rgba(255,255,255,0.06)',
        position: 'relative'
      }}
    >
      <motion.div whileHover="hover" initial="rest" animate="rest">
        <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
          <motion.img
            variants={{ rest: { scale: 1 }, hover: { scale: 1.06 } }}
            transition={{ duration: 0.5 }}
            src={item.image}
            alt={item.label}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 55%)'
          }} />
          <div style={{ position: 'absolute', top: '1rem', left: '1rem' }}>
            <span style={{
              background: item.accent,
              borderRadius: '999px',
              padding: '0.3rem 0.9rem',
              fontFamily: 'Anton, sans-serif',
              fontSize: '0.65rem',
              letterSpacing: '0.15em',
              color: 'white'
            }}>
              {item.category}
            </span>
          </div>
          <motion.div
            variants={{ rest: { opacity: 0.5, x: 0 }, hover: { opacity: 1, x: 3 } }}
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: 'rgba(0,0,0,0.5)',
              backdropFilter: 'blur(6px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <ArrowUpRight size={16} color="white" />
          </motion.div>
          <div style={{ position: 'absolute', bottom: '1rem', left: '1.25rem', right: '1.25rem' }}>
            <h3 style={{
              fontFamily: 'Anton, sans-serif',
              fontSize: '1.4rem',
              textTransform: 'uppercase',
              lineHeight: 1,
              color: 'white'
            }}>
              {item.label}
            </h3>
          </div>
        </div>
      </motion.div>

      <div style={{ padding: '1.25rem 1.5rem 1.75rem', borderTop: `1px solid ${item.accent}25` }}>
        <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.9rem', lineHeight: 1.65 }}>
          {item.desc}
        </p>
      </div>
    </Link>
  </motion.div>
);

const Explore = () => {
  const isMobile = useIsMobile();
  return (
    <section className="section" style={{ background: 'var(--color-black)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: '4.5rem' }}
        >
          <p style={{
            color: 'var(--color-sunburst-orange)',
            fontWeight: 700,
            letterSpacing: '0.22em',
            fontSize: '0.75rem',
            textTransform: 'uppercase',
            marginBottom: '0.75rem'
          }}>
            There's More Where That Came From
          </p>
          <h2 style={{
            fontFamily: 'Anton, sans-serif',
            fontSize: 'clamp(3rem, 8vw, 7rem)',
            textTransform: 'uppercase',
            lineHeight: 0.88,
            color: 'var(--color-white)'
          }}>
            DIVE<br />
            <span style={{ color: 'var(--color-golden-yellow)' }}>DEEPER.</span>
          </h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
          gap: '1.5rem'
        }}>
          {destinations.map((item, i) => (
            <DestinationCard key={item.to} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Explore;
