
export const Instagram = ({ size = 18, ...rest }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" {...rest}>
    <rect x="2" y="2" width="20" height="20" rx="5.5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.4" cy="6.6" r="1.15" fill="currentColor" stroke="none" />
  </svg>
);

export const Facebook = ({ size = 18, ...rest }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" {...rest}>
    <rect x="2" y="2" width="20" height="20" rx="5.5" />
    <path d="M14.5 8.5h-1.6c-.94 0-1.4.5-1.4 1.5v2h3l-.4 3h-2.6v6.7" />
  </svg>
);

export const Play = ({ size = 26, ...rest }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...rest}>
    <path d="M8.4 5.6a1 1 0 0 1 1.53-.85l8.1 5.15a1.2 1.2 0 0 1 0 2.03l-8.1 5.15a1 1 0 0 1-1.53-.85V5.6Z" />
  </svg>
);

export const Arrow = ({ size = 17, ...rest }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...rest}>
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </svg>
);

export const ArrowDown = ({ size = 17, ...rest }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...rest}>
    <path d="M12 5v14" />
    <path d="m5.5 12.5 6.5 6.5 6.5-6.5" />
  </svg>
);

export const ChevronDown = ({ size = 17, ...rest }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...rest}>
    <path d="m5.5 9 6.5 6.5L18.5 9" />
  </svg>
);

export const Close = ({ size = 20, ...rest }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" {...rest}>
    <path d="M6 6 18 18M18 6 6 18" />
  </svg>
);

export const Plus = ({ size = 18, ...rest }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" {...rest}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const Mail = ({ size = 18, ...rest }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" {...rest}>
    <rect x="2.5" y="4.5" width="19" height="15" rx="3" />
    <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
  </svg>
);

export const Phone = ({ size = 18, ...rest }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" {...rest}>
    <path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8Z" />
  </svg>
);

export const Pin = ({ size = 18, ...rest }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" {...rest}>
    <path d="M20 10c0 5.4-8 12-8 12s-8-6.6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="2.8" />
  </svg>
);

export const Star = ({ size = 18, ...rest }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" {...rest}>
    <path d="m12 3 2.7 5.6 6.1.85-4.4 4.3 1.05 6.1L12 17l-5.45 2.85L7.6 13.75 3.2 9.45l6.1-.85L12 3Z" />
  </svg>
);

export const Send = ({ size = 18, ...rest }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...rest}>
    <path d="M21 3 10.5 13.5" />
    <path d="M21 3 14.5 21l-4-7.5L3 9.5 21 3Z" />
  </svg>
);

export const Check = ({ size = 20, ...rest }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...rest}>
    <circle cx="12" cy="12" r="9.2" />
    <path d="m8 12.3 2.7 2.7L16 9.6" />
  </svg>
);
