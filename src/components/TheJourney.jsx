import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import Reveal from './ui/Reveal';
import SectionHead from './ui/SectionHead';
import { Blob } from './ui/Blobs';
import { Plus, Arrow } from './ui/Icons';

/**
 * Origin -> Evolution -> Growth -> Today -> What's next.
 * Farming is step one of the story, not the identity of the brand.
 */
const steps = [
  {
    id: 'origin',
    stage: 'Origin',
    year: '01',
    title: 'It started\nwith farming.',
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
    id: 'adapt',
    stage: 'Evolution',
    year: '02',
    title: 'The seedlings\ndidn’t make it.',
    line: 'So we stopped buying seeds and started growing from cuttings.',
    reveal: 'Stems, roots and patience instead. The cuttings flowered faster than the parent plant. Different start, same 13 quality — that became the way we solve everything.',
    tags: ['Cuttings over seeds', 'Boer maak ’n plan'],
    image: '/cuttings.png',
    alt: 'A tomato cutting rooting in a pot inside the greenhouse',
    color: 'var(--c-yellow)',
    soft: 'var(--c-yellow-soft)',
    ink: true,
  },
  {
    id: 'reach',
    stage: 'Growth',
    year: '03',
    title: 'Then the city\ncalled.',
    line: 'Gaborone asked for it. We packed crates and showed up.',
    reveal: 'Food Lover’s SquareMart first, then SuperSpar Acacia. The bags went out stamped with a number instead of a brand — and people started asking for it by that number.',
    tags: ['Food Lover’s SquareMart', 'SuperSpar Acacia'],
    image: '/tomatoes.png',
    alt: 'Crates of Tsoo...13 tomatoes stacked at market',
    color: 'var(--c-red)',
    soft: 'var(--c-red-soft)',
  },
  {
    id: 'today',
    stage: 'Today',
    year: '04',
    title: 'One name.\nSharper vision.',
    line: 'We came back to the name that meant family, and built a company around it.',
    reveal: 'Tsoo...13 is a young team running growing, packing, brand and distribution ourselves — backed by leadership training from MCW and Aspire Leaders.',
    tags: ['Youth run', 'Smart hands, smarter farming'],
    image: '/lifestyle.png',
    alt: 'The Tsoo...13 operation today',
    color: 'var(--c-green-lt)',
    soft: 'var(--c-green-soft)',
  },
  {
    id: 'next',
    stage: 'What’s next',
    year: '05',
    title: 'We’re not\ndone growing.',
    line: 'More crops, more shelves, more young people running the show.',
    reveal: 'The plan: widen the range beyond tomatoes, reach every major retailer in Botswana, and prove a company this young can be the one everybody asks for by name.',
    tags: ['New crops', 'National reach'],
    image: '/tomatoes.png',
    alt: 'Fresh produce ready to move',
    color: 'var(--c-red-deep)',
    soft: 'var(--c-red-soft)',
  },
];

const Step = ({ step, index }) => {
  const side = index % 2 === 0 ? 'left' : 'right';

  return (
    <Reveal
      className={`tl__step tl__step--${side}`}
      style={{ '--step': step.color, '--step-soft': step.soft }}
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
              style={{ '--chip-bg': step.soft, '--chip-fg': step.ink ? 'var(--ink-2)' : step.color }}
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
      style={{ background: 'var(--white)' }}
    >
      <Blob color="soft-lime" size={430} top={-150} right="-12%" />
      <Blob color="soft-red" size={300} bottom="12%" left="-10%" />
      <Blob color="yellow" size={14} top="18%" left="8%" />

      <div className="wrap">
        <SectionHead
          eyebrow="The journey"
          dot="var(--c-lime)"
          title={<>How we got <span className="t-red">from there</span> to here.</>}
          lede="Five stops, from one plot of soil to a name people ask for."
        />

        <div className="tl" ref={railRef}>
          <div className="tl__rail" aria-hidden="true">
            <motion.div className="tl__rail-fill" style={{ scaleY: fill }} />
          </div>

          {steps.map((step, i) => (
            <Step key={step.id} step={step} index={i} />
          ))}
        </div>

        <Reveal style={{ textAlign: 'center', marginTop: '1rem' }}>
          <Link to="/goods" className="btn btn--ink">
            See what we grow <Arrow size={16} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
};

export default TheJourney;
