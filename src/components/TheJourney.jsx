import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useIsMobile } from '../hooks/useIsMobile';

const chapters = [
  {
    id: 'origin',
    label: 'Origin',
    eyebrow: 'The Beginning',
    heading: 'FROM OUR\nFAMILY\nTO YOURS.',
    body: 'It started with soil in Mookane Village and a simple belief: Botswana deserved better tomatoes. We called it Tsoo...13 — a family operation, hand-picked, honest. That name carried everything we believed in.',
    quote: '"farming.creating.growing."',
    image: '/hero.png',
    accent: 'var(--color-sunburst-orange)'
  },
  {
    id: 'adapt',
    label: 'Adapt',
    eyebrow: 'The Hustle',
    heading: 'NOT ALL\nSEEDLINGS\nSURVIVE.',
    body: 'When we lost seedlings, we didn\'t stop. We turned to cuttings — no seeds, just stems, roots, and care. Those cuttings flowered faster than the parent plant. Different start. Same 13 quality.',
    quote: '"Boer maak \'n plan." — so do we.',
    image: '/cuttings.png',
    accent: 'var(--color-golden-yellow)'
  },
  {
    id: 'evolve',
    label: 'Evolve',
    eyebrow: 'The Rebrand',
    heading: 'SAME SOIL.\nBIGGER\nVISION.',
    body: 'Tsoo...13 grew into 13WAY. The name changed, the mission got sharper. Smart hands, smarter farming. Innovation growing right alongside our tomatoes — in the greenhouse, in the market, in the city.',
    quote: '"Smart hands, smarter farming."',
    image: '/tomatoes.png',
    accent: '#4A7C2F'
  },
  {
    id: 'reach',
    label: 'Reach',
    eyebrow: 'The Distribution',
    heading: 'GABORONE\nASKED.\nWE SHOWED UP.',
    body: 'Now on shelves at Food Lover\'s SquareMart and SuperSpar Acacia. Ask for it by name. A tomato a day keeps the flavour here to stay.',
    quote: '"Taste the difference. #AskFor13"',
    image: '/tomatoes.png',
    accent: 'var(--color-sunburst-orange)'
  }
];

const ChapterCard = ({ chapter, index, isMobile }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['5%', '-5%']);
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      id={chapter.id}
      style={{ minHeight: isMobile ? 'auto' : '90vh', display: 'flex', alignItems: 'center', padding: isMobile ? '3rem 0' : '6rem 0' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: '-10%' }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: isMobile ? '2rem' : '5rem',
          alignItems: 'center',
          width: '100%'
        }}
      >
        {/* Image side — always top on mobile */}
        <div
          style={{
            order: isMobile ? 1 : isEven ? 2 : 1,
            height: isMobile ? '240px' : 'clamp(380px, 55vh, 560px)',
            borderRadius: '1.5rem',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <div style={{
            position: 'absolute',
            inset: '-2px',
            borderRadius: '1.5rem',
            background: `linear-gradient(135deg, ${chapter.accent}40, transparent)`,
            zIndex: 1,
            pointerEvents: 'none'
          }} />
          <motion.img
            style={{ y: isMobile ? 0 : imgY, width: '100%', height: isMobile ? '100%' : '110%', objectFit: 'cover', objectPosition: 'center', marginTop: isMobile ? 0 : '-5%' }}
            src={chapter.image}
            alt={chapter.label}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: `linear-gradient(to top, ${chapter.accent}20 0%, transparent 50%)`,
            pointerEvents: 'none'
          }} />
          <div style={{
            position: 'absolute',
            bottom: '1.5rem',
            left: '1.5rem',
            zIndex: 2,
            background: 'rgba(10,10,10,0.75)',
            backdropFilter: 'blur(8px)',
            border: `1px solid ${chapter.accent}50`,
            borderRadius: '0.5rem',
            padding: '0.4rem 0.9rem',
            fontFamily: 'Anton, sans-serif',
            fontSize: '0.75rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: chapter.accent
          }}>
            {chapter.label}
          </div>
        </div>

        {/* Text side */}
        <div style={{ order: isMobile ? 2 : isEven ? 1 : 2 }}>
          <motion.p
            initial={{ opacity: 0, x: isEven ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: chapter.accent,
              marginBottom: '1.2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}
          >
            <span style={{ fontFamily: 'Anton, sans-serif', fontSize: '1.4rem', opacity: 0.25 }}>
              0{index + 1}
            </span>
            {chapter.eyebrow}
          </motion.p>

          <h2 style={{
            fontFamily: 'Anton, sans-serif',
            fontSize: isMobile ? 'clamp(2.2rem, 11vw, 3.5rem)' : 'clamp(2.8rem, 6vw, 5.5rem)',
            textTransform: 'uppercase',
            lineHeight: 0.92,
            marginBottom: '1.5rem',
            whiteSpace: 'pre-line',
            color: 'var(--color-white)'
          }}>
            {chapter.heading}
          </h2>

          <p style={{
            fontSize: isMobile ? '0.95rem' : '1.1rem',
            lineHeight: 1.8,
            color: 'rgba(255,255,255,0.68)',
            marginBottom: '1.5rem'
          }}>
            {chapter.body}
          </p>

          <div style={{
            borderLeft: `3px solid ${chapter.accent}`,
            paddingLeft: '1.25rem',
          }}>
            <p style={{
              fontStyle: 'italic',
              color: chapter.accent,
              fontSize: '1rem',
              fontWeight: 600
            }}>
              {chapter.quote}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const TheJourney = () => {
  const isMobile = useIsMobile();
  const [activeChapter, setActiveChapter] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const idx = chapters.findIndex(c => c.id === entry.target.id);
            if (idx !== -1) setActiveChapter(idx);
          }
        });
      },
      { threshold: 0.5 }
    );
    chapters.forEach(c => {
      const el = document.getElementById(c.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section id="journey" style={{ background: 'var(--color-moss-green)', position: 'relative', overflow: 'hidden' }}>
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

      {/* Section header */}
      <div className="container" style={{ paddingTop: isMobile ? '9rem' : '11rem', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: '2rem' }}
        >
          <p style={{ color: 'var(--color-sunburst-orange)', fontWeight: 700, letterSpacing: '0.22em', fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            Documenting The Journey
          </p>
          <h2 style={{
            fontFamily: 'Anton, sans-serif',
            fontSize: isMobile ? 'clamp(2.8rem, 14vw, 5rem)' : 'clamp(3rem, 8vw, 7rem)',
            textTransform: 'uppercase',
            lineHeight: 0.88,
            color: 'var(--color-white)'
          }}>
            TSOO<span style={{ color: 'var(--color-sunburst-orange)' }}>13</span>
          </h2>
        </motion.div>
      </div>

      {/* Sticky chapter indicator — desktop only */}
      {!isMobile && (
        <div style={{
          position: 'sticky',
          top: '50%',
          float: 'right',
          marginRight: '2rem',
          transform: 'translateY(-50%)',
          zIndex: 20,
          display: 'flex',
          flexDirection: 'column',
          gap: '0.6rem',
          pointerEvents: 'none'
        }}>
          {chapters.map((c, i) => (
            <div key={c.id} style={{
              width: i === activeChapter ? '30px' : '10px',
              height: '2px',
              background: i === activeChapter ? 'var(--color-sunburst-orange)' : 'rgba(255,255,255,0.2)',
              borderRadius: '2px',
              transition: 'all 0.4s ease',
              marginLeft: 'auto'
            }} />
          ))}
        </div>
      )}

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {chapters.map((chapter, i) => (
          <ChapterCard key={chapter.id} chapter={chapter} index={i} isMobile={isMobile} />
        ))}
      </div>
    </section>
  );
};

export default TheJourney;
