import React from 'react';

const InstagramIcon = ({ size = 16, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="1" fill={color} stroke="none"/>
  </svg>
);

const Footer = () => (
  <footer style={{
    background: '#050505',
    borderTop: '1px solid rgba(255,255,255,0.06)',
    padding: '4rem 0 2rem'
  }}>
    <div className="container">
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr auto 1fr',
        alignItems: 'center',
        marginBottom: '3rem',
        gap: '2rem'
      }}>
        {/* Left: Bio */}
        <div>
          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.85rem', lineHeight: 1.7, maxWidth: '280px' }}>
            Botswana's home of fresh tomatoes.<br />
            farming · creating · growing 🌱
          </p>
        </div>

        {/* Center: Wordmark */}
        <div style={{ textAlign: 'center' }}>
          <p style={{
            fontFamily: 'Anton, sans-serif',
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            textTransform: 'uppercase',
            lineHeight: 0.9,
            background: 'linear-gradient(to bottom, var(--color-white), var(--color-golden-yellow))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            13WAY
          </p>
          <p style={{ color: 'var(--color-sunburst-orange)', fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', marginTop: '0.25rem' }}>
            Mookane Village · Botswana
          </p>
        </div>

        {/* Right: Social + hashtag */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '1rem' }}>
          <a
            href="https://www.instagram.com/_13way_/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'rgba(255,255,255,0.55)',
              textDecoration: 'none',
              fontSize: '0.85rem',
              transition: 'color 0.3s'
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--color-golden-yellow)'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
          >
            <InstagramIcon size={16} />
            @_13way_
          </a>
          <p style={{
            fontFamily: 'Anton, sans-serif',
            fontSize: '1.1rem',
            color: 'var(--color-sunburst-orange)',
            letterSpacing: '0.05em'
          }}>
            #AskFor13
          </p>
        </div>
      </div>

      {/* Divider */}
      <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', marginBottom: '1.5rem' }} />

      {/* Bottom bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.75rem' }}>
          © 2025 13WAY · Formerly Tsoo...13 · All rights reserved
        </p>
        <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.75rem' }}>
          Home grown. Hand picked quality. Always reliable.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
