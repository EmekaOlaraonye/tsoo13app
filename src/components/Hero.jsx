import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Arrow, Play } from './ui/Icons';
import { Blob } from './ui/Blobs';
import Marquee from './ui/Marquee';
import logo from '../assets/tsoo13.png';

const taglines = [
  'farming. creating. growing.',
  '#askfor13',
  'home grown, hand picked',
  'Mookane to Gaborone',
  'different start, same 13 quality',
  'youth run, Botswana built',
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
      <Blob color="soft-lime" size={520} top={-200} right="-10%" />
      <Blob color="soft-yellow" size={320} bottom={-110} left="-8%" />
      <Blob color="red" size={18} top="54%" left="3%" />
      <Blob color="green" size={12} bottom="16%" left="12%" />
      <Blob color="yellow" size={24} top="8%" right="40%" />

      <div className="wrap">
        <div className="hero__grid">
          {/* ---------- Left: the logo leads ---------- */}
          <motion.div style={{ y: contentY, opacity: fade }}>
            <motion.img
              src={logo}
              alt="Tsoo...13 — from our family to yours"
              className="hero__logo"
              initial={{ opacity: 0, scale: 0.92, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, ease }}
            />

            <motion.h1
              className="display hero__title"
              style={{ marginTop: '0.4rem' }}
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease }}
            >
              <span className="t-green">Farming.</span><br />
              <span className="t-red">Creating.</span><br />
              <span className="mark" style={{ '--mark': 'var(--c-yellow)' }}>Growing.</span>
            </motion.h1>

            <motion.p
              className="lede"
              style={{ marginTop: '1.6rem', maxWidth: '34ch' }}
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

            <motion.div
              className="hero__cue"
              style={{ marginTop: '2.5rem' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.75 }}
            >
              <span className="hero__cue-line" />
              Scroll — there&apos;s a story
            </motion.div>
          </motion.div>

          {/* ---------- Right: the picture does the talking ---------- */}
          <motion.div
            style={{ position: 'relative', y: frameY }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.2, ease }}
          >
            <span
              className="blob blob--yellow"
              style={{ width: 118, height: 118, top: -34, left: -34, zIndex: 2 }}
            />
            <span
              className="blob blob--lime"
              style={{ width: 62, height: 62, bottom: 46, left: -26, zIndex: 2 }}
            />

            <div className="hero__frame">
              <img
                src="/tomatoes.png"
                alt="Tsoo...13 tomatoes packed and stacked at market"
                className="hero__img"
                fetchPriority="high"
              />
              <span className="hero__frame-tint" />

              <div style={{ position: 'absolute', top: '1.1rem', right: '1.1rem' }}>
                <span className="chip chip--float">Mookane &rarr; Gaborone</span>
              </div>

              <div
                style={{
                  position: 'absolute',
                  left: '1.25rem',
                  right: '1.25rem',
                  bottom: '1.25rem',
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
      </div>

      <Marquee items={taglines} bg="var(--c-red)" fg="var(--white)" speed="42s" />
    </section>
  );
};

export default Hero;
