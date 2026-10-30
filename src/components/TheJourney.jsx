import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import Reveal from './ui/Reveal';
import SectionHead from './ui/SectionHead';
import { Blob } from './ui/Blobs';
import { Tomato } from './ui/Tomato';
import { Plus, Arrow } from './ui/Icons';
import ProcessFlow from './ProcessFlow';
import Delivery from './Delivery';
import OpenDay from './OpenDay';
import Montage from './ui/Montage';
import MeetTheFamily from './MeetTheFamily';
import SeeTheFarm from './SeeTheFarm';
import Band from './ui/Band';
import Photo from './ui/Photo';
import StormFilm from './ui/StormFilm';

/**
 * Open field -> under net -> the tunnels -> the storm -> rebuilding.
 *
 * This is the sequence as the farm tells it, and it is a sequence of growing
 * systems, each one an answer to what beat the last. The storm is the hinge:
 * it hit at the peak, in 2025, and the structures came down. Farming is step
 * one of the story, not the identity of the brand — but the story only means
 * anything if the low point is actually in it.
 *
 * The structures in the photographs are greenhouse tunnels, per the farm.
 */
const steps = [
  {
    id: 'field',
    stage: 'The Open Field',
    year: '01',
    title: 'It started in\nthe open field.',
    line: 'Rows straight into the ground at Mookane, and the weather got a vote in everything.',
    reveal: 'Floods, frost, pests, sun — in the open there was nothing between the crop and whatever the season did next. Fires were lit through the night against the frost. Enough came through to prove people would buy it. Not nearly enough to build on.',
    tags: ['Mookane Village', 'Open ground'],
    image: '/farm/field-rows.jpg',
    alt: 'Rows of tomatoes growing in the open field at Mookane',
    color: 'var(--c-lime)',
    soft: 'var(--c-lime-soft)',
    ink: true,
  },
  {
    id: 'nets',
    stage: 'Under Net',
    year: '02',
    title: 'So we moved\nunder net.',
    line: 'Under shade net, and off the soil entirely — grown in bags instead.',
    reveal: 'Going soilless took the ground out of the equation: no soil-borne disease, water and feed measured to the plant rather than poured at it. The net took the worst of the sun off. Rain and frost still found their way in.',
    tags: ['Shade net', 'Soilless'],
    image: '/farm/bags-young.jpg',
    alt: 'Young plants growing in their bags, up off the ground',
    color: 'var(--c-yellow)',
    soft: 'var(--c-yellow-soft)',
    ink: true,
  },
  {
    id: 'tunnels',
    stage: 'The Tunnels',
    year: '03',
    title: 'Then the\ngreenhouse tunnels.',
    line: 'Fully enclosed, and the best this farm has run — rows at full height, fruit the whole way down them.',
    reveal: 'This was the peak. The crop under cover from planting to picking, the packhouse busy, and Tsoo...13 bags leaving Mookane for Gaborone every week.',
    tags: ['Full enclosure', 'Peak season'],
    image: '/farm/tunnel-mature.jpg',
    alt: 'Inside a greenhouse tunnel, the steel frame overhead and a crop carrying fruit below',
    // Portrait in a 16:11 panel: sit high so the roof frame stays in shot
    // above the crop, which is the whole point of this one.
    focus: 'center 33%',
    color: 'var(--c-red)',
    soft: 'var(--c-red-soft)',
  },
  {
    id: 'storm',
    stage: 'The Storm',
    year: '04',
    title: 'Then the\nstorm hit.',
    line: 'At the peak of it, in 2025, the structures came down.',
    reveal: 'Everything built to keep the weather out was, in one afternoon, the thing the weather took. It was filmed as it happened — the clip is further down this page.',
    tags: ['2025', 'The lowest point'],
    image: '/film/tsoo13-storm-still.jpg',
    alt: 'Structures flattened across the yard in the rain',
    color: 'var(--c-green-lt)',
    soft: 'var(--c-green-soft)',
  },
  {
    id: 'rebuild',
    stage: 'Rebuilding',
    year: '05',
    title: 'Now we\nbuild it back.',
    line: 'Still picking, still packing, still selling — and putting the structures back up at the same time.',
    reveal: 'Supply has not stopped: bags still go out while the rebuild runs alongside them. Everything learned out in the field, under the net and inside the tunnels goes into what gets built this time.',
    tags: ['Rebuilding', 'Still supplying'],
    image: '/farm/retail-shelf.jpg',
    alt: 'Bags of Tsoo...13 tomatoes on the shelf',
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
        <Photo src={step.image} alt={step.alt} style={step.focus ? { objectPosition: step.focus } : undefined} />
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

      {/* Lifted above the decorative blobs, which are positioned with z-index 0
          and so paint over any unpositioned content. The timeline itself was
          immune (its panels and media are each positioned), but the plain
          sections below it were not. Every other section does the same. */}
      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
        <SectionHead
          as={standalone ? 'h1' : 'h2'}
          eyebrow="The journey"
          dot="var(--c-lime)"
          color="var(--c-green)"
          variant="left"
          title={<>How we got <span className="t-red">from there</span> to here.</>}
          lede="Five stops, from one plot of open soil to a rebuild — by way of the afternoon it all came down."
        />

        <div className="tl" ref={railRef}>
          <div className="tl__rail" aria-hidden="true">
            <motion.div className="tl__rail-fill" style={{ scaleY: fill }} />
          </div>

          {steps.map((step, i) => (
            <Step key={step.id} step={step} index={i} />
          ))}
        </div>

        <StormFilm />

        <OpenDay />

        <Band
          image="/farm/tunnels-from-road.jpg"
          alt="The greenhouse tunnels at Mookane Village seen from the track"
          kicker="A Day the 13 Way"
          line="A farmer's best friend is another farmer."
          attribution="— from our own open-day invitation"
          quote
        />

        <ProcessFlow />
        <Delivery />
        <MeetTheFamily />
        <SeeTheFarm />

        <Montage />

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
