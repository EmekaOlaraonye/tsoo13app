/**
 * A stylised tomato silhouette — the brand's other recurring shape, alongside
 * the colour Blob. Kept abstract (rounded body + a small calyx notch) so it
 * reads as texture/motif rather than literal produce photography.
 */
const Body = ({ fill, stroke }) => (
  <svg viewBox="0 0 100 100" width="100%" height="100%">
    <path
      d="M50 22c9-9 21-11 27-6 4 3 4 8 0 12 10 2 18 11 18 24 0 20-19 36-45 36S5 72 5 52c0-13 8-22 18-24-4-4-4-9 0-12 6-5 18-3 27 6Z"
      fill={fill}
      stroke={stroke}
      strokeWidth={stroke ? 2.5 : 0}
    />
    <path
      d="M50 22c-2-6-1-12 2-16M50 22c2-6 1-12-2-16"
      fill="none"
      stroke={fill === 'none' ? stroke : 'rgba(255,255,255,.55)'}
      strokeWidth="3"
      strokeLinecap="round"
      opacity={fill === 'none' ? 1 : 0.7}
    />
  </svg>
);

export const Tomato = ({
  color = 'var(--c-red)',
  size = 160,
  top,
  right,
  bottom,
  left,
  opacity = 1,
  rotate = 0,
  outline = false,
  style,
}) => (
  <span
    aria-hidden="true"
    style={{
      position: 'absolute',
      width: size,
      height: size,
      top,
      right,
      bottom,
      left,
      opacity,
      transform: `rotate(${rotate}deg)`,
      pointerEvents: 'none',
      zIndex: 0,
      display: 'block',
      ...style,
    }}
  >
    <Body fill={outline ? 'none' : color} stroke={outline ? color : undefined} />
  </span>
);

export default Tomato;
