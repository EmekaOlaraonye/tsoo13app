
/**
 * The colour circles that carry the brand across the white canvas.
 * Each section gets its own arrangement so the pages feel distinct but related.
 */
export const Blob = ({ color = 'red', size = 200, top, right, bottom, left, opacity = 1, ring = false, style }) => (
  <span
    aria-hidden="true"
    className={ring ? 'blob blob--ring' : `blob blob--${color}`}
    style={{
      width: size,
      height: size,
      top,
      right,
      bottom,
      left,
      opacity,
      ...(ring ? { borderColor: `var(--c-${color === 'green' ? 'green-lt' : color})` } : null),
      ...style,
    }}
  />
);

/** A ready-made arrangement, so sections stay cohesive without repeating markup. */
export const BlobField = ({ variant = 'a' }) => {
  const fields = {
    a: (
      <>
        <Blob color="soft-lime" size={420} top={-140} right={-120} />
        <Blob color="yellow" size={16} top={110} right={180} />
        <Blob color="red" size={10} bottom={120} left={60} />
        <Blob color="soft-red" size={260} bottom={-110} left={-90} />
      </>
    ),
    b: (
      <>
        <Blob color="soft-yellow" size={360} bottom={-130} right={-100} />
        <Blob color="green" size={12} top={140} left={90} />
        <Blob color="red" size={190} top={-80} left={-70} opacity={0.12} />
        <Blob color="lime" size={14} bottom={180} right={140} />
      </>
    ),
    c: (
      <>
        <Blob color="soft-green" size={330} top={-110} left={-90} />
        <Blob color="red" size={14} top={90} right={120} />
        <Blob color="yellow" size={220} bottom={-90} right={-60} opacity={0.28} />
        <Blob color="lime" ring size={120} bottom={90} left={70} opacity={0.5} />
      </>
    ),
  };
  return <>{fields[variant] || fields.a}</>;
};

export default Blob;
