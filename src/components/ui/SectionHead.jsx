import Reveal from './Reveal';

/**
 * One heading pattern for every section: an eyebrow with a coloured dot,
 * a big display title, and at most one short line of copy underneath.
 * The title colour defaults to the section's own dot colour (never black),
 * so each page's heading feels tied to its surrounding colour language.
 */
const SectionHead = ({ eyebrow, dot = 'var(--c-red)', color, title, lede, align = 'left', size = 'lg', variant = 'up', as: Heading = 'h2', children }) => (
  <Reveal
    variant={variant}
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
    {/* `as="h1"` on whichever head is the page's own title — every route needs
        exactly one h1, and these sections double as both page and section heads. */}
    <Heading className={`display display--${size}`} style={{ maxWidth: '17ch', color: color || dot }}>
      {title}
    </Heading>
    {lede && <p className="lede" style={{ marginInline: align === 'center' ? 'auto' : undefined }}>{lede}</p>}
    {children}
  </Reveal>
);

export default SectionHead;
