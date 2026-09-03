import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Arrow, ChevronDown, Play, Check } from './ui/Icons';
import { Blob } from './ui/Blobs';
import { Tomato } from './ui/Tomato';
import logo from '../assets/13logotx-cropped.png';

const taglines = [
  'farming. creating. growing.',
  '#askfor13',
  'home grown, hand picked',
  'Mookane → you',
  'different start, same 13 quality',
  'youth run, Botswana built',
];

const badgeTones = [
  { bg: 'var(--c-red-soft)', fg: 'var(--c-red-deep)' },
  { bg: 'var(--c-green-soft)', fg: 'var(--c-green)' },
  { bg: 'var(--c-yellow-soft)', fg: 'var(--c-yellow-ink)' },
  { bg: 'var(--c-lime-soft)', fg: 'var(--c-lime-ink)' },
];

const ease = [0.16, 1, 0.3, 1];

/**
 * The "..." of Tsoo...13, drawn as three tomatoes — the brand's two motifs
 * folded into one mark. They drift on a stagger, so the gutter beside the
 * logo reads as a deliberate detail rather than a stray dot.
 */
const ellipsisTomatoes = [
  { size: 40, color: 'var(--c-red)', rotate: -12, opacity: 0.9, drift: -10, duration: 5.2 },
  { size: 28, color: 'var(--c-yellow)', rotate: 9, opacity: 0.85, drift: -7, duration: 4.4 },
  { size: 20, color: 'var(--c-lime-ink)', rotate: -6, opacity: 0.7, drift: -5, duration: 6, outline: true },
];

const TomatoEllipsis = () => (
  <div className="hero__vine hero__accent" aria-hidden="true">
    {ellipsisTomatoes.map((t, i) => (
      <motion.span
        key={t.size}
        style={{ display: 'block', width: t.size, height: t.size, marginLeft: i * 6 }}
        animate={{ y: [0, t.drift, 0] }}
        transition={{ duration: t.duration, delay: i * 0.45, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Tomato
          color={t.color}
          size={t.size}
          rotate={t.rotate}
          opacity={t.opacity}
          outline={t.outline}
          style={{ position: 'relative' }}
        />
      </motion.span>
    ))}
  </div>
);

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const frameY = useTransform(scrollYProgress, [0, 1], ['0%', '-9%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section className="hero" ref={ref}>
      {/* Colour moments on the white canvas.
          These stay clear of the logo — its PNG carries a white background, and the
          grid's stacking context stops mix-blend-mode from knocking it out. */}
      {/* Sized to sit behind the tomato photo in the two-column layout — once
          the grid collapses to one column that photo moves away, so this
          needs to shrink out of the logo's way instead (see .hero__blob--top). */}
      <Blob color="soft-lime" size={520} top={-200} right="-10%" className="hero__blob--top" />
      <Blob color="soft-yellow" size={320} bottom={-110} left="-8%" />
      <TomatoEllipsis />
      <Blob color="green" size={12} bottom="6%" left="7%" />
      <Blob color="yellow" ring size={30} top="8%" right="40%" className="hero__accent" />
      <Tomato color="var(--c-green-lt)" size={150} bottom="0%" left="20%" opacity={0.07} rotate={9} outline className="hero__accent" />

      <div className="wrap">
        <div className="hero__grid">
          {/* ---------- Left: the logo leads ---------- */}
          <motion.div className="hero__intro" style={{ y: contentY, opacity: fade }}>
            <motion.img
              src={logo}
              alt="Tsoo...13"
              className="hero__logo"
              initial={{ opacity: 0, scale: 0.92, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, ease }}
            />

            <motion.p
              className="lede"
              style={{ marginTop: '2rem', maxWidth: '34ch' }}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.32, ease }}
            >
              A young Botswana company. It started in the soil at Mookane —
              it hasn&apos;t stood still since.
            </motion.p>

            <motion.div
              style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '2rem' }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.44, ease }}
            >
              <Link to="/journey" className="btn btn--red">
                See how we got here <Arrow size={16} />
              </Link>
              <a href="#film" className="btn btn--ghost">
                <Play size={15} /> Watch the film
              </a>
            </motion.div>
          </motion.div>

          {/* ---------- Right: the picture does the talking ---------- */}
          <motion.div
            style={{ position: 'relative', y: frameY }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.2, ease }}
          >
            <span className="blob blob--yellow hero__dot hero__dot--a" />
            <span className="blob blob--red hero__dot hero__dot--a2" />
            <span className="blob blob--lime hero__dot hero__dot--b" />
            <span className="blob blob--ring hero__dot hero__dot--b2" style={{ borderColor: 'var(--c-yellow)' }} />

            <div className="hero__frame">
              <img
                src="/tomatoes.png"
                alt="Tsoo...13 tomatoes packed and stacked at market"
                className="hero__img"
                fetchPriority="high"
              />
              <span className="hero__frame-tint" />
              <span className="hero__frame-scrim" />

              <div style={{ position: 'absolute', top: '1.1rem', right: '1.1rem' }}>
                <span className="chip chip--float">Mookane &rarr; You</span>
              </div>

              <div
                style={{
                  position: 'absolute',
                  left: '1.5rem',
                  right: '1.5rem',
                  bottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'space-between',
                  gap: '1rem',
                }}
              >
                <p
                  className="display display--sm"
                  style={{ color: 'var(--white)', textShadow: '0 2px 24px rgba(0,0,0,.5)' }}
                >
                  Ask for 13<br />by name.
                </p>
                <span className="chip" style={{ '--chip-bg': 'var(--c-red)', '--chip-fg': 'var(--white)' }}>
                  On shelves now
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="hero__cue"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          aria-hidden="true"
        >
          <ChevronDown size={22} className="hero__cue-arrow" />
        </motion.div>

        <motion.div
          className="hero__badges"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease }}
        >
          {taglines.map((text, i) => {
            const tone = badgeTones[i % badgeTones.length];
            return (
              <span
                key={text}
                className="chip hero__badge"
                style={{ '--chip-bg': tone.bg, '--chip-fg': tone.fg }}
              >
                <Check size={12} />
                {text}
              </span>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
