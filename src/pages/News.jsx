import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowUpRight } from 'lucide-react';
import { useIsMobile } from '../hooks/useIsMobile';

const stories = [
  {
    id: 'rename',
    category: 'Announcement',
    date: 'August 2025',
    title: 'From 13WAY Back To\nTSOO13. We\'re Home.',
    body: 'Same soil, same roots, same 13 quality — just the name on the label has changed. We\'re dropping 13WAY and returning to where it all started. Ask for it as TSOO13 from here on out.',
    image: '/cuttings.png',
    accent: '#4A7C2F',
    large: true
  },
  {
    id: 'squaremart',
    category: 'Retail',
    date: 'June 2025',
    title: '13WAY Now On Shelves\nAt SuperSpar Acacia.',
    body: 'Gaborone asked, we showed up. Fresh 13WAY tomatoes are now stocked alongside Food Lover\'s SquareMart at SuperSpar Acacia — ask for it by name.',
    image: '/hero.png',
    accent: 'var(--color-sunburst-orange)',
    large: false
  },
  {
    id: 'aspire',
    category: 'Recognition',
    date: 'April 2025',
    title: 'Selected For The\nAspire Leaders Program.',
    body: 'One of Africa\'s most competitive Harvard-affiliated accelerators. Exceptional founders building exceptional things.',
    image: '/tomatoes.png',
    accent: 'var(--color-golden-yellow)',
    large: false
  },
  {
    id: 'rebrand',
    category: 'Announcement',
    date: 'February 2025',
    title: 'From Tsoo...13 To 13WAY:\nWhy We Rebranded.',
    body: 'Same soil, bigger vision. The name changed, the mission got sharper — smart hands, smarter farming.',
    image: '/cuttings.png',
    accent: '#4A7C2F',
    large: false
  },
  {
    id: 'cuttings',
    category: 'Field Notes',
    date: 'January 2025',
    title: 'Cuttings Over Seeds:\nSolving Our Seedling Problem.',
    body: 'When we lost seedlings, we didn\'t stop. No seeds, just stems, roots and care — those cuttings flowered faster than the parent plant.',
    image: '/cuttings.png',
    accent: 'var(--color-sunburst-orange)',
    large: false
  },
  {
    id: 'mcw',
    category: 'Credential',
    date: 'November 2024',
    title: 'MCW Leadership\nCohort Graduation.',
    body: 'Building leaders who build things. The 13WAY approach to farming is now backed by world-class leadership training.',
    image: '/tomatoes.png',
    accent: 'var(--color-golden-yellow)',
    large: false
  },
  {
    id: 'season',
    category: 'Field Notes',
    date: 'September 2024',
    title: 'Nine Months In:\nA Season On The Ground.',
    body: 'From Mookane Village soil to city shelves — a look back at our first full growing season under the 13WAY name.',
    image: '/hero.png',
    accent: '#4A7C2F',
    large: false
  }
];

const NewsCard = ({ item, index, isMobile }) => (
  <motion.a
    href="https://www.instagram.com/_13way_/"
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-8%' }}
    transition={{ duration: 0.7, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
    whileHover={{ y: -6 }}
    style={{
      display: 'block',
      textDecoration: 'none',
      borderRadius: '1.5rem',
      overflow: 'hidden',
      background: '#111',
      border: '1px solid rgba(255,255,255,0.06)',
      gridColumn: (!isMobile && item.large) ? 'span 2' : 'span 1',
      position: 'relative'
    }}
  >
    <div style={{ height: item.large && !isMobile ? '380px' : '220px', overflow: 'hidden', position: 'relative' }}>
      <motion.img
        whileHover={{ scale: 1.06 }}
        transition={{ duration: 0.5 }}
        src={item.image}
        alt={item.title.replace('\n', ' ')}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 55%)'
      }} />
      <div style={{
        position: 'absolute',
        top: '1rem',
        left: '1rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.6rem'
      }}>
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
      <div style={{
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
      }}>
        <ArrowUpRight size={16} color="white" />
      </div>
      <div style={{
        position: 'absolute',
        bottom: '1rem',
        left: '1.25rem',
        right: '1.25rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.4rem' }}>
          <Calendar size={13} color="rgba(255,255,255,0.5)" />
          <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', fontWeight: 600 }}>{item.date}</span>
        </div>
        <h3 style={{
          fontFamily: 'Anton, sans-serif',
          fontSize: item.large && !isMobile ? 'clamp(1.8rem, 3vw, 2.4rem)' : '1.4rem',
          textTransform: 'uppercase',
          lineHeight: 1,
          whiteSpace: 'pre-line',
          color: 'white'
        }}>
          {item.title}
        </h3>
      </div>
    </div>

    <div style={{ padding: '1.25rem 1.5rem 1.75rem', borderTop: `1px solid ${item.accent}25` }}>
      <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.9rem', lineHeight: 1.65 }}>
        {item.body}
      </p>
    </div>
  </motion.a>
);

const News = () => {
  const isMobile = useIsMobile();
  return (
    <section className="section" style={{
      background: 'var(--color-moss-green)',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: isMobile ? '9rem' : '11rem'
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
            Fresh Off The Vine
          </p>
          <h1 style={{
            fontFamily: 'Anton, sans-serif',
            fontSize: 'clamp(3rem, 8vw, 7rem)',
            textTransform: 'uppercase',
            lineHeight: 0.88,
            color: 'var(--color-white)'
          }}>
            THE<br />
            <span style={{ color: 'var(--color-sunburst-orange)' }}>NEWS.</span>
          </h1>
          <p style={{
            marginTop: '1.5rem',
            color: 'rgba(255,255,255,0.5)',
            fontSize: '1rem',
            maxWidth: '480px',
            lineHeight: 1.7
          }}>
            Retail drops, recognitions, and dispatches from the field. Everything happening in the TSOO13 world.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
          gap: '1.5rem'
        }}>
          {stories.map((item, i) => (
            <NewsCard key={item.id} item={item} index={i} isMobile={isMobile} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
