import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Arrow, ChevronDown, Play, Check } from './ui/Icons';
import { Blob } from './ui/Blobs';
import logo from '../assets/cleartsoo-cropped.png';

const taglines = [
  'farming. creating. growing.',
  '#askfor13',
  'home grown, hand picked',
  'Mookane → Gaborone → beyond',
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
      <Blob color="red" size={18} top="54%" left="3%" className="hero__accent" />
      <Blob color="green" size={12} bottom="6%" left="7%" />
      <Blob color="yellow" size={24} top="8%" right="40%" className="hero__accent" />

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
            <span className="blob blob--lime hero__dot hero__dot--b" />

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
                <span className="chip chip--float">Mookane &rarr; Gaborone &rarr; beyond</span>
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
