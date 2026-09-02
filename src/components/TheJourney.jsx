import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import Reveal from './ui/Reveal';
import SectionHead from './ui/SectionHead';
import { Blob } from './ui/Blobs';
import { Tomato } from './ui/Tomato';
import { Plus, Arrow } from './ui/Icons';
import ProcessFlow from './ProcessFlow';
import MeetTheFamily from './MeetTheFamily';
import SeeTheFarm from './SeeTheFarm';

/**
 * The start -> First harvest -> Getting real -> The storm -> We built again -> The comeback.
 * Farming is step one of the story, not the identity of the brand — but the
 * story only means anything if the low point is actually in it.
 */
const steps = [
  {
    id: 'start',
    stage: 'The Start',
    year: '01',
    title: 'It started\nwith a farm.',
    line: 'One plot of soil in Mookane Village and a family name on the box.',
    reveal: 'Tsoo...13 — "from our family to yours". No warehouse, no logo, no plan beyond growing something people would come back for.',
    tags: ['Mookane Village', 'Family run'],
    image: '/hero.png',
    alt: 'Early morning inside the greenhouse at Mookane Village',
    color: 'var(--c-lime)',
    soft: 'var(--c-lime-soft)',
    ink: true,
  },
  {
    id: 'harvest',
    stage: 'First Harvest',
    year: '02',
    title: 'Then came the\nfirst harvest.',
    line: 'The crop came in, and it was real — proof the idea actually worked.',
    reveal: 'No machinery to speak of, just early mornings and a plot that finally paid off. Nothing about the business was certain yet — but the farming part, at least, was no longer a maybe.',
    tags: ['First crop', 'Proof it worked'],
    image: '/tomatoes.png',
    alt: 'The first crates of tomatoes from Mookane Village',
    color: 'var(--c-yellow)',
    soft: 'var(--c-yellow-soft)',
    ink: true,
  },
  {
    id: 'real',
    stage: 'Getting Real',
    year: '03',
    title: 'Then things\ngot real.',
    line: 'Demand outgrew the plot fast — more hands, more hours, more learned the hard way.',
    reveal: 'Growing enough to eat is one thing. Growing enough to sell, pack and deliver on time is another. This is where farming quietly turned into a business, whether we were ready or not.',
    tags: ['Scaling up', 'Learning fast'],
    image: '/cuttings.png',
    alt: 'Tending rows of seedlings as the operation grew',
    color: 'var(--c-red)',
    soft: 'var(--c-red-soft)',
  },
  {
    id: 'storm',
    stage: 'The Storm',
    year: '04',
    title: 'Then the\nstorm hit.',
    line: 'A whole season of seedlings didn’t make it. It could have ended right there.',
    reveal: 'Losing a run of seedlings was the closest this ever came to stopping. Instead of just buying more seed and hoping, we asked a harder question — was there a better way to grow at all?',
    tags: ['Seedling loss', 'The lowest point'],
    image: '/cuttings.png',
    alt: 'The seedlings that did not make it',
    color: 'var(--c-green-lt)',
    soft: 'var(--c-green-soft)',
  },
  {
    id: 'rebuild',
    stage: 'We Built Again',
    year: '05',
    title: 'So we\nbuilt again.',
    line: 'No more seeds. Stems, roots and patience — and this time, a plan behind it too.',
    reveal: 'The cuttings method came directly out of that failure: faster to flower, cheaper to run, entirely ours. MCW and Aspire Leaders followed soon after — this time, we built the operation to actually last.',
    tags: ['Cuttings over seeds', 'MCW & Aspire Leaders'],
    image: '/lifestyle.png',
    alt: 'The cuttings method, rebuilt from the ground up',
    color: 'var(--c-yellow)',
    soft: 'var(--c-yellow-soft)',
    ink: true,
  },
  {
    id: 'comeback',
    stage: 'The Comeback',
    year: '06',
    title: 'This is\nthe comeback.',
    line: 'Food Lover’s SquareMart. SuperSpar Acacia. A name people ask for instead of a brand.',
    reveal: 'Tsoo...13 is a young team running growing, packing, brand and distribution ourselves. Mookane to Gaborone, and the destination keeps moving — this is still only the start of it.',
    tags: ['On shelves now', 'Youth run'],
    image: '/tomatoes.png',
    alt: 'Tsoo...13 tomatoes on shelves today',
    color: 'var(--c-red)',
    soft: 'var(--c-red-soft)',
    final: true,
  },
];

const Step = ({ step, index }) => {
  const side = index % 2 === 0 ? 'left' : 'right';

  return (
    <Reveal
      className={`tl__step tl__step--${side} ${step.final ? 'tl__step--final' : ''}`}
      style={{ '--step': step.color, '--step-soft': step.soft }}
      variant={step.final ? 'scale' : 'up'}
      delay={0.05}
    >
      <span className="tl__connector" aria-hidden="true" />

      <span className="tl__node" style={{ color: step.ink ? 'var(--ink)' : 'var(--white)' }}>
        {step.year}
      </span>

      <div className="tl__panel">
        <p className="eyebrow" style={{ '--eyebrow-dot': step.color }}>{step.stage}</p>
        <p className="tl__year" aria-hidden="true">{step.year}</p>
        <h3 className="display display--md" style={{ whiteSpace: 'pre-line', margin: '0.4rem 0 0.9rem' }}>
          {step.title}
        </h3>
        <p className="lede" style={{ maxWidth: '32ch', fontSize: '1.02rem' }}>{step.line}</p>
        <div className="tl__tags" style={{ marginTop: '1.1rem' }}>
          {step.tags.map((tag) => (
            <span
              key={tag}
              className="chip"
              style={
                step.final
                  ? { '--chip-bg': 'rgba(255,255,255,.2)', '--chip-fg': 'var(--white)' }
                  : { '--chip-bg': step.soft, '--chip-fg': step.ink ? 'var(--ink-2)' : step.color }
              }
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Hover (or focus) the photograph to open the rest of the chapter */}
      <div className="tl__media" tabIndex={0} role="group" aria-label={`${step.stage} — ${step.reveal}`}>
        <img src={step.image} alt={step.alt} loading="lazy" />
        <span className="tl__media-tint" aria-hidden="true" />
        <span className="chip chip--float tl__hint" aria-hidden="true">
          <Plus size={13} /> More
        </span>
        <div className="tl__reveal">
          <p>{step.reveal}</p>
        </div>
      </div>
    </Reveal>
  );
};

const TheJourney = ({ standalone = false }) => {
  const railRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ['start 72%', 'end 60%'],
  });
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <section
      id="journey"
      className={`section ${standalone ? 'section--top' : ''}`}
      style={{ background: 'radial-gradient(120% 70% at 15% 0%, var(--c-yellow-soft) 0%, var(--white) 55%)' }}
    >
      <Blob color="soft-lime" size={430} top={-150} right="-12%" />
      <Blob color="soft-red" size={300} bottom="12%" left="-10%" />
      <Blob color="yellow" size={220} top="30%" left="-6%" opacity={0.4} />
      <Blob color="yellow" size={14} top="18%" left="8%" />
      <Tomato color="var(--c-yellow-ink)" size={100} top="8%" right="6%" opacity={0.15} rotate={10} outline />
      <Tomato color="var(--c-lime)" size={90} bottom="6%" right="10%" opacity={0.16} rotate={-16} />

      <div className="wrap">
        <SectionHead
          eyebrow="The journey"
          dot="var(--c-lime)"
          color="var(--c-green)"
          variant="left"
          title={<>How we got <span className="t-red">from there</span> to here.</>}
          lede="Six stops, from one plot of soil to wherever comes next — storm included."
        />

        <div className="tl" ref={railRef}>
          <div className="tl__rail" aria-hidden="true">
            <motion.div className="tl__rail-fill" style={{ scaleY: fill }} />
          </div>

          {steps.map((step, i) => (
            <Step key={step.id} step={step} index={i} />
          ))}
        </div>

        <ProcessFlow />
        <MeetTheFamily />
        <SeeTheFarm />

        <Reveal style={{ textAlign: 'center', marginTop: 'clamp(3rem, 6vw, 5rem)' }}>
          <Link to="/goods" className="btn btn--ink">
            See what we grow <Arrow size={16} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
};

export default TheJourney;
