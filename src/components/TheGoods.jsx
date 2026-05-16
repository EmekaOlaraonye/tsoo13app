import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ShoppingBag } from 'lucide-react';

const produce = [
  {
    id: 1,
    name: 'Tomatoes',
    tagline: 'The juiciest tomatoes bursting with flavour.',
    desc: 'Sun-ripened at Mookane Village. Zero shortcuts. Ask for it by name.',
    badge: 'HOME GROWN',
    image: '/tomatoes.png',
    accent: '#E85520'
  },
  {
    id: 2,
    name: 'Cherry Tomatoes',
    tagline: 'Tiny. Explosive. Addictive.',
    desc: 'Small but they carry all the 13 quality you expect.',
    badge: 'HAND PICKED',
    image: '/cuttings.png',
    accent: '#F5A623'
  },
  {
    id: 3,
    name: 'Plum Tomatoes',
    tagline: 'The chef\'s obsession.',
    desc: 'Dense, rich, flavour that holds. At your table all year round.',
    badge: '13 GROWN',
    image: '/tomatoes.png',
    accent: '#4A7C2F'
  },
  {
    id: 4,
    name: 'Season\'s Blend',
    tagline: 'Colors that sell themselves.',
    desc: 'What\'s growing is what you get. Straight from the ground to you.',
    badge: 'FRESH FROM 13',
    image: '/hero.png',
    accent: '#E85520'
  }
];

const retailers = [
  { name: "Food Lover's SquareMart", location: "Gaborone", icon: '🛒' },
  { name: "SuperSpar Acacia", location: "Gaborone", icon: '🏪' },
  { name: "Direct Farm", location: "Mookane Village", icon: '🌱' },
];

const ProduceCard = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-5%' }}
    transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
    whileHover={{ y: -8 }}
    style={{
      borderRadius: '1.5rem',
      overflow: 'hidden',
      background: '#111',
      border: '1px solid rgba(255,255,255,0.06)',
      cursor: 'default',
      position: 'relative'
    }}
  >
    {/* Image */}
    <div style={{ height: '260px', overflow: 'hidden', position: 'relative' }}>
      <motion.img
        whileHover={{ scale: 1.06 }}
        transition={{ duration: 0.5 }}
        src={item.image}
        alt={item.name}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
      {/* Gradient */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 55%)`
      }} />
      {/* Badge */}
      <div style={{
        position: 'absolute',
        top: '1rem',
        left: '1rem',
        background: item.accent,
        borderRadius: '999px',
        padding: '0.3rem 0.9rem',
        fontFamily: 'Anton, sans-serif',
        fontSize: '0.65rem',
        letterSpacing: '0.15em',
        color: 'white'
      }}>
        {item.badge}
      </div>
      {/* Name on image */}
      <div style={{
        position: 'absolute',
        bottom: '1rem',
        left: '1.25rem',
        right: '1.25rem'
      }}>
        <h3 style={{
          fontFamily: 'Anton, sans-serif',
          fontSize: '1.6rem',
          textTransform: 'uppercase',
          lineHeight: 1,
          color: 'white'
        }}>
          {item.name}
        </h3>
        <p style={{ color: item.accent, fontSize: '0.85rem', fontWeight: 600, marginTop: '0.2rem' }}>
          {item.tagline}
        </p>
      </div>
    </div>

    {/* Body */}
    <div style={{
      padding: '1.25rem 1.5rem 1.75rem',
      borderTop: `1px solid ${item.accent}25`
    }}>
      <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.9rem', lineHeight: 1.65 }}>
        {item.desc}
      </p>
    </div>
  </motion.div>
);

const TheGoods = () => (
  <section id="goods" className="section" style={{ background: '#0A0A0A' }}>
    <div className="container">
      {/* Header */}
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
          Straight from the Ground
        </p>
        <h2 style={{
          fontFamily: 'Anton, sans-serif',
          fontSize: 'clamp(3rem, 8vw, 7rem)',
          textTransform: 'uppercase',
          lineHeight: 0.88,
          color: 'var(--color-white)'
        }}>
          THE<br />
          <span style={{ color: 'var(--color-sunburst-orange)' }}>GOODS.</span>
        </h2>
        <p style={{
          marginTop: '1.5rem',
          color: 'rgba(255,255,255,0.5)',
          fontSize: '1rem',
          maxWidth: '480px',
          lineHeight: 1.7
        }}>
          Home grown. Hand picked quality. Always reliable. — This is what the 13 label means.
        </p>
      </motion.div>

      {/* Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '1.5rem',
        marginBottom: '6rem'
      }}>
        {produce.map((item, i) => (
          <ProduceCard key={item.id} item={item} index={i} />
        ))}
      </div>

      {/* Where to Find Us */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{
          background: 'linear-gradient(135deg, #111 0%, #1A1A0D 100%)',
          border: '1px solid rgba(227,123,40,0.2)',
          borderRadius: '2rem',
          padding: '3.5rem',
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: '3rem',
          alignItems: 'center'
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
            <MapPin size={16} color="var(--color-sunburst-orange)" />
            <p style={{ color: 'var(--color-sunburst-orange)', fontWeight: 700, letterSpacing: '0.2em', fontSize: '0.75rem', textTransform: 'uppercase' }}>
              Where to Find Us
            </p>
          </div>
          <h3 style={{
            fontFamily: 'Anton, sans-serif',
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            textTransform: 'uppercase',
            lineHeight: 0.95,
            marginBottom: '2rem',
            color: 'white'
          }}>
            ASK FOR 13<br />BY NAME.
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            {retailers.map(r => (
              <div key={r.name} style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '0.75rem',
                padding: '0.75rem 1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem'
              }}>
                <span style={{ fontSize: '1.2rem' }}>{r.icon}</span>
                <div>
                  <p style={{ fontWeight: 700, fontSize: '0.85rem', color: 'white' }}>{r.name}</p>
                  <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)' }}>{r.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.04, backgroundColor: 'var(--color-golden-yellow)' }}
          whileTap={{ scale: 0.97 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.7rem',
            background: 'var(--color-sunburst-orange)',
            color: 'white',
            padding: '1rem 2rem',
            borderRadius: '0.75rem',
            fontFamily: 'Anton, sans-serif',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            fontSize: '0.9rem',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            transition: 'all 0.3s ease'
          }}
        >
          <ShoppingBag size={18} />
          Order Direct
        </motion.a>
      </motion.div>
    </div>
  </section>
);

export default TheGoods;
