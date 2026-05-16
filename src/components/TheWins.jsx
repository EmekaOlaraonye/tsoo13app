import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, X } from 'lucide-react';

const wins = [
  {
    id: 'innovation',
    type: 'highlight',
    category: 'Innovation',
    title: 'Smart Hands,\nSmarter Farming.',
    body: '"Boer maak \'n plan" and we couldn\'t agree more. Innovation that grows right alongside our tomatoes — in the greenhouse, in the strategy, in the supply chain.',
    hashtags: ['#innovationinthefield', '#smartfarming', '#13way'],
    accent: 'var(--color-sunburst-orange)',
    bg: 'linear-gradient(135deg, rgba(227,123,40,0.15) 0%, rgba(58,82,40,0.15) 100%)',
    large: true
  },
  {
    id: 'mcw',
    type: 'credential',
    category: 'Credential',
    title: 'MCW Leadership',
    subtitle: 'Management College of Warsaw',
    body: 'Building leaders who build things. The 13Way approach to farming is backed by world-class leadership training.',
    accent: 'var(--color-golden-yellow)',
    bg: '#121212',
    large: false
  },
  {
    id: 'aspire',
    type: 'credential',
    category: 'Credential',
    title: 'Aspire Leaders',
    subtitle: 'Harvard-Affiliated Program',
    body: 'Selected for one of Africa\'s most competitive leadership accelerators. Exceptional founders building exceptional things.',
    accent: 'var(--color-golden-yellow)',
    bg: '#121212',
    large: false
  },
  {
    id: 'pushabw',
    type: 'movement',
    category: 'Movement',
    title: 'Push BW.',
    body: 'We don\'t just grow tomatoes — we grow Botswana\'s local economy. Every purchase is a vote for the local farmer, the local hustle, the 13 way.',
    hashtags: ['#pushabw', '#freshfrom13', '#sustainablefarming'],
    accent: '#4A7C2F',
    bg: 'linear-gradient(135deg, rgba(74,124,47,0.12) 0%, rgba(10,10,10,0) 100%)',
    large: false
  }
];

const WinCard = ({ item, onOpen }) => {
  const isClickable = item.type === 'highlight' || item.type === 'movement';

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8%' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      onClick={() => isClickable && onOpen(item)}
      style={{
        borderRadius: '1.5rem',
        padding: '2.5rem',
        cursor: isClickable ? 'pointer' : 'default',
        border: `1px solid ${item.accent}25`,
        background: item.bg,
        position: 'relative',
        overflow: 'hidden',
        gridColumn: item.large ? 'span 2' : 'span 1',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: item.large ? '320px' : '260px'
      }}
    >
      {/* Glow blob */}
      <div style={{
        position: 'absolute',
        top: '-40px',
        right: '-40px',
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        background: `radial-gradient(circle, ${item.accent}18, transparent)`,
        pointerEvents: 'none'
      }} />

      <div>
        {/* Header row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
          <span style={{
            background: `${item.accent}20`,
            border: `1px solid ${item.accent}40`,
            borderRadius: '999px',
            padding: '0.3rem 0.9rem',
            fontSize: '0.7rem',
            fontWeight: 700,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: item.accent
          }}>
            {item.category}
          </span>
          {item.type === 'credential' && <Award size={22} color="var(--color-golden-yellow)" />}
          {isClickable && <ExternalLink size={18} color={item.accent} style={{ opacity: 0.7 }} />}
        </div>

        {/* Title */}
        <h3 style={{
          fontFamily: 'Anton, sans-serif',
          fontSize: item.large ? 'clamp(2rem, 4vw, 3rem)' : '1.7rem',
          textTransform: 'uppercase',
          lineHeight: 0.95,
          whiteSpace: 'pre-line',
          marginBottom: '1rem',
          color: 'var(--color-white)'
        }}>
          {item.title}
        </h3>

        {item.subtitle && (
          <p style={{ color: item.accent, fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.75rem' }}>
            {item.subtitle}
          </p>
        )}

        <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.65, fontSize: '0.95rem' }}>
          {item.body}
        </p>
      </div>

      {/* Hashtags */}
      {item.hashtags && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1.5rem' }}>
          {item.hashtags.map(tag => (
            <span key={tag} style={{
              fontSize: '0.75rem',
              color: item.accent,
              fontWeight: 600,
              opacity: 0.8
            }}>
              {tag}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
};

const Modal = ({ item, onClose }) => (
  <AnimatePresence>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        background: 'rgba(0,0,0,0.88)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem'
      }}
    >
      <motion.div
        initial={{ scale: 0.88, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.88, y: 30 }}
        onClick={e => e.stopPropagation()}
        style={{
          background: '#111',
          borderRadius: '1.5rem',
          width: '100%',
          maxWidth: '620px',
          border: `1px solid ${item.accent}30`,
          overflow: 'hidden'
        }}
      >
        <div style={{ background: item.bg, padding: '3rem', position: 'relative' }}>
          <span style={{ color: item.accent, fontWeight: 700, letterSpacing: '0.2em', fontSize: '0.75rem', textTransform: 'uppercase' }}>
            {item.category}
          </span>
          <h2 style={{
            fontFamily: 'Anton, sans-serif',
            fontSize: '3rem',
            textTransform: 'uppercase',
            lineHeight: 0.95,
            whiteSpace: 'pre-line',
            margin: '1rem 0',
            color: 'white'
          }}>
            {item.title}
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.68)', lineHeight: 1.7 }}>{item.body}</p>
          {item.hashtags && (
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
              {item.hashtags.map(t => (
                <span key={t} style={{ color: item.accent, fontWeight: 600, fontSize: '0.85rem' }}>{t}</span>
              ))}
            </div>
          )}
        </div>
        <div style={{ padding: '1rem 1.5rem', display: 'flex', justifyContent: 'flex-end' }}>
          <button onClick={onClose} style={{ color: 'rgba(255,255,255,0.5)', cursor: 'pointer', background: 'none', border: 'none', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem' }}>
            <X size={16} /> Close
          </button>
        </div>
      </motion.div>
    </motion.div>
  </AnimatePresence>
);

const TheWins = () => {
  const [modal, setModal] = useState(null);

  return (
    <section id="wins" className="section" style={{ background: 'linear-gradient(to bottom, #0A0A0A, #0D1A0A, #0A0A0A)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: '4.5rem' }}
        >
          <p style={{ color: 'var(--color-sunburst-orange)', fontWeight: 700, letterSpacing: '0.22em', fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            In The Spotlight
          </p>
          <h2 style={{
            fontFamily: 'Anton, sans-serif',
            fontSize: 'clamp(3rem, 8vw, 7rem)',
            textTransform: 'uppercase',
            lineHeight: 0.88,
            color: 'var(--color-white)'
          }}>
            THE<br />
            <span style={{ color: 'var(--color-golden-yellow)' }}>WINS.</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
          {wins.map(item => (
            <WinCard key={item.id} item={item} onOpen={setModal} />
          ))}
        </div>
      </div>

      {modal && <Modal item={modal} onClose={() => setModal(null)} />}
    </section>
  );
};

export default TheWins;
