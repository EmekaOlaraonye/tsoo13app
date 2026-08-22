import { Link } from 'react-router-dom';
import { Instagram, Arrow } from './ui/Icons';
import { INSTAGRAM_URL, INSTAGRAM_HANDLE } from '../siteConfig';
import askFor13Badge from '../assets/askfor13.png';

const columns = [
  {
    title: 'Explore',
    links: [
      { label: 'The Journey', to: '/journey' },
      { label: 'The Goods', to: '/goods' },
      { label: 'The Wins', to: '/wins' },
    ],
  },
  {
    title: 'More',
    links: [
      { label: 'The News', to: '/news' },
      { label: 'Gallery', to: '/gallery' },
      { label: 'Contact Us', to: '/contact-us' },
    ],
  },
];

const Footer = () => (
  <footer className="foot">
    <span className="blob" aria-hidden="true" style={{ width: 340, height: 340, top: -140, right: -110, background: 'rgba(190,195,49,.10)' }} />
    <span className="blob" aria-hidden="true" style={{ width: 240, height: 240, bottom: -110, left: -80, background: 'rgba(216,72,31,.14)' }} />

    <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
      <div
        style={{
          display: 'grid',
          gap: 'clamp(2rem, 5vw, 4rem)',
          gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
          marginBottom: 'clamp(2.5rem, 6vw, 4rem)',
        }}
      >
        <div style={{ minWidth: 0 }}>
          <p style={{ color: 'var(--white)', fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.6rem' }}>
            Botswana&apos;s home of fresh tomatoes.
          </p>
          <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,.55)', maxWidth: '30ch' }}>
            Farming, creating, growing — out of Mookane Village and onto shelves in Gaborone.
          </p>

          <div style={{ display: 'flex', gap: '0.4rem', marginTop: '1.5rem' }}>
            {['var(--c-lime)', 'var(--c-yellow)', 'var(--c-red)', 'var(--c-green-lt)'].map((c) => (
              <span key={c} style={{ width: 13, height: 13, borderRadius: '50%', background: c, display: 'block' }} />
            ))}
          </div>
        </div>

        {columns.map((col) => (
          <nav key={col.title} style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
            <p className="eyebrow" style={{ '--eyebrow-dot': 'var(--c-yellow)', color: 'rgba(255,255,255,.42)', marginBottom: '0.3rem' }}>
              {col.title}
            </p>
            {col.links.map((l) => (
              <Link key={l.to} to={l.to} className="foot__link">{l.label}</Link>
            ))}
          </nav>
        ))}

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
          <p className="eyebrow" style={{ '--eyebrow-dot': 'var(--c-red)', color: 'rgba(255,255,255,.42)' }}>
            Follow
          </p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--light"
            style={{ padding: '0.7rem 1.25rem', fontSize: '0.85rem' }}
          >
            <Instagram size={16} /> {INSTAGRAM_HANDLE} <Arrow size={14} />
          </a>
          <img src={askFor13Badge} alt="#AskFor13" style={{ width: 92, height: 92 }} />
        </div>
      </div>

      <p className="foot__word" aria-hidden="true">Tsoo...13</p>

      <hr style={{ height: 1, border: 0, background: 'rgba(255,255,255,.12)', margin: '2rem 0 1.25rem' }} />

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.75rem',
          justifyContent: 'space-between',
          fontSize: '0.78rem',
          color: 'rgba(255,255,255,.4)',
        }}
      >
        <p>&copy; {new Date().getFullYear()} Tsoo...13 &middot; Mookane Village, Botswana</p>
        <p>Home grown. Hand picked. Always reliable.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
