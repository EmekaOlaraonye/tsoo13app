import Reveal from './Reveal';

/**
 * One heading pattern for every section: an eyebrow with a coloured dot,
 * a big display title, and at most one short line of copy underneath.
 */
const SectionHead = ({ eyebrow, dot = 'var(--c-red)', title, lede, align = 'left', size = 'lg', children }) => (
  <Reveal
    style={{
      marginBottom: 'clamp(2.5rem, 5vw, 4rem)',
      textAlign: align,
      display: 'flex',
      flexDirection: 'column',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      gap: '1.1rem',
      position: 'relative',
      zIndex: 1,
    }}
  >
    {eyebrow && (
      <p className="eyebrow" style={{ '--eyebrow-dot': dot }}>
        {eyebrow}
      </p>
    )}
    <h2 className={`display display--${size}`} style={{ maxWidth: '17ch' }}>
      {title}
    </h2>
    {lede && <p className="lede" style={{ marginInline: align === 'center' ? 'auto' : undefined }}>{lede}</p>}
    {children}
  </Reveal>
);

export default SectionHead;
