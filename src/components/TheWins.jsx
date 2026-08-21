import { useState } from 'react';
import { motion } from 'framer-motion';
import Reveal from './ui/Reveal';
import SectionHead from './ui/SectionHead';
import { Blob } from './ui/Blobs';
import { Plus, Star } from './ui/Icons';

const wins = [
  {
    id: 'innovation',
    category: 'How we work',
    title: 'Smart hands,\nsmarter farming.',
    body: 'When the usual method fails, we build another one. That habit is the actual product.',
    detail: 'Losing a season of seedlings could have ended it. Instead it produced our cuttings method — faster to flower, cheaper to run, and entirely ours. Every problem since has been treated the same way.',
    tags: ['#innovationinthefield', '#smartfarming'],
    bg: 'var(--c-red)',
    fg: 'var(--white)',
    wide: true,
  },
  {
    id: 'mcw',
    category: 'Credential',
    title: 'MCW Leadership',
    subtitle: 'Management College of Warsaw',
    body: 'Leadership training behind the operation, not just the growing.',
    detail: 'A programme built around running organisations rather than running fields — which is exactly the gap most young agri-businesses fall into.',
    bg: 'var(--white)',
    fg: 'var(--ink)',
    accent: 'var(--c-yellow)',
  },
  {
    id: 'aspire',
    category: 'Credential',
    title: 'Aspire Leaders',
    subtitle: 'Harvard-affiliated programme',
    body: 'Selected for one of Africa’s most competitive leadership accelerators.',
    detail: 'Thousands apply across the continent each cycle. It put the company in a room with founders solving problems at a far bigger scale, and we brought that back to Mookane.',
    bg: 'var(--white)',
    fg: 'var(--ink)',
    accent: 'var(--c-green-lt)',
  },
  {
    id: 'pusha',
    category: 'Movement',
    title: 'Pusha BW.',
    body: 'Every crate sold is a vote for a local grower, a local hustle, a local standard.',
    detail: 'We would rather grow the market for Botswana produce than take a slice of someone else’s. That is why the number goes on the bag instead of a logo — it travels by word of mouth.',
    tags: ['#pushabw', '#freshfrom13'],
    bg: 'var(--c-lime-soft)',
    fg: 'var(--ink)',
    accent: 'var(--c-lime-ink)',
    wide: true,
  },
];

const WinCard = ({ item, index }) => {
  const [open, setOpen] = useState(false);
  const accent = item.accent || item.fg;

  return (
    <Reveal
      delay={(index % 2) * 0.08}
      className={item.wide ? 'is-wide' : undefined}
      style={{ minWidth: 0 }}
    >
      <article
        className="card"
        style={{
          '--card-accent': accent,
          background: item.bg,
          color: item.fg,
          padding: 'clamp(1.75rem, 3.5vw, 2.6rem)',
          height: '100%',
        }}
      >
        <span
          className="blob"
          aria-hidden="true"
          style={{
            width: 200,
            height: 200,
            top: -80,
            right: -60,
            background: item.bg === 'var(--white)' ? 'var(--paper)' : 'rgba(255,255,255,.16)',
          }}
        />

        <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '0.9rem', height: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
            <span
              className="chip"
              style={{
                '--chip-bg': item.bg === 'var(--white)' ? 'var(--paper)' : 'rgba(255,255,255,.2)',
                '--chip-fg': item.fg,
              }}
            >
              {item.category}
            </span>
            {item.category === 'Credential' && <Star size={20} style={{ color: accent }} />}
          </div>

          <h3
            className="display display--md"
            style={{ whiteSpace: 'pre-line', color: item.fg, fontSize: item.wide ? undefined : 'clamp(1.6rem, 3vw, 2.1rem)' }}
          >
            {item.title}
          </h3>

          {item.subtitle && (
            <p style={{ fontWeight: 700, fontSize: '0.88rem', color: accent, marginTop: '-0.4rem' }}>
              {item.subtitle}
            </p>
          )}

          <p style={{ fontSize: '1rem', lineHeight: 1.65, opacity: item.fg === 'var(--white)' ? 0.9 : 1, color: item.fg === 'var(--white)' ? 'inherit' : 'var(--ink-2)' }}>
            {item.body}
          </p>

          <div className={`collapse ${open ? 'is-open' : ''}`}>
            <div>
              <p
                style={{
                  fontSize: '0.94rem',
                  lineHeight: 1.7,
                  paddingTop: '0.9rem',
                  borderTop: `1px solid ${item.fg === 'var(--white)' ? 'rgba(255,255,255,.25)' : 'var(--line)'}`,
                  color: item.fg === 'var(--white)' ? 'rgba(255,255,255,.88)' : 'var(--ink-2)',
                }}
              >
                {item.detail}
              </p>
            </div>
          </div>

          <div style={{ marginTop: 'auto', paddingTop: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
            {item.tags ? (
              <div style={{ display: 'flex', gap: '0.7rem', flexWrap: 'wrap', fontSize: '0.78rem', fontWeight: 600, color: item.fg === 'var(--white)' ? 'rgba(255,255,255,.75)' : accent }}>
                {item.tags.map((t) => <span key={t}>{t}</span>)}
              </div>
            ) : <span />}

            <button
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: item.fg === 'var(--white)' ? 'var(--white)' : accent,
              }}
            >
              <motion.span
                animate={{ rotate: open ? 45 : 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                style={{ display: 'flex' }}
              >
                <Plus size={15} />
              </motion.span>
              {open ? 'Less' : 'More'}
            </button>
          </div>
        </div>
      </article>
    </Reveal>
  );
};

const TheWins = ({ standalone = false }) => (
  <section id="wins" className={`section section--paper ${standalone ? 'section--top' : ''}`}>
    <Blob color="soft-yellow" size={400} top={-150} left="-12%" />
    <Blob color="red" size={15} top="20%" right="10%" />
    <Blob color="lime" size={22} bottom="12%" left="8%" />

    <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
      <SectionHead
        eyebrow="In the spotlight"
        dot="var(--c-yellow)"
        title={<>The <span className="t-red">wins</span>.</>}
        lede="Proof that a young company can be taken seriously. Open a card for the full story."
      />

      <div className="wins-grid">
        {wins.map((item, i) => (
          <WinCard key={item.id} item={item} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default TheWins;
