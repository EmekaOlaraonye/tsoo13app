import { useRef, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Reveal from './ui/Reveal';
import SectionHead from './ui/SectionHead';
import { Blob } from './ui/Blobs';
import { Tomato } from './ui/Tomato';
import { Plus, Play } from './ui/Icons';
import Photo from './ui/Photo';
import Band from './ui/Band';
import { STORM } from '../siteConfig';

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
    reveal: 'Floods, frost, pests, sun — in the open there was nothing between the crop and whatever the season did next. Fires were lit through the night against the frost. Some seasons that worked and some it did not, and there was no way to tell which until it was over. Growing in the open meant farming the weather, not the crop.',
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
    reveal: 'Black net overhead, and the crop up out of the ground in long coco-coir bags — water and feed measured to each plant instead of poured at a field. The net knocked the worst of the sun back and the fruit set better for it. Rain and frost still found their way in.',
    tags: ['Shade net', 'Soilless'],
    image: '/farm/net-grower-bag.jpg',
    alt: 'Tomatoes ripening under the black net, the plants running along long coco-coir grower bags',
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
    reveal: 'This was the peak. Plants standing in their own grow bags down the length of every house, the crop under cover from planting to picking, the packhouse busy, and Tsoo...13 bags leaving Mookane for market every week.',
    tags: ['Full enclosure', 'Peak season'],
    image: '/farm/fruit-in-bags.jpg',
    alt: 'Tomato plants heavy with fruit, each standing in its own grow bag down the row',
    color: 'var(--c-red)',
    soft: 'var(--c-red-soft)',
  },
  {
    id: 'storm',
    stage: 'The Storm',
    year: '04',
    title: 'Then the\nstorm hit.',
    line: 'At the peak of it, in 2025, the structures came down.',
    reveal: 'Everything built to keep the weather out was, in one afternoon, the thing the weather took. Somebody kept filming.',
    tags: ['2025', 'The lowest point'],
    image: '/film/tsoo13-storm-still.jpg',
    // The footage belongs to this beat, not to a section further down the
    // page that most people never reached. Same panel, same frame — it
    // just plays when you ask it to.
    clip: STORM.src,
    clipLabel: 'Watch the storm, as it happened',
    clipRuntime: STORM.runtime,
    alt: 'Structures flattened across the yard in the rain',
    color: 'var(--c-green-lt)',
    soft: 'var(--c-green-soft)',
  },
  {
    id: 'rebuild',
    stage: 'Rebuilding',
    year: '05',
    title: 'Now we\nbuild it back.',
    line: 'Frames back up, houses re-skinned, bags relaid. The whole of the work, right now.',
    reveal: 'There is nothing to pick, pack or sell right now — this is the rebuild, and it is the whole of the work. Frames back up, houses re-skinned, bags relaid. Everything learned out in the field, under the net and inside the tunnels goes into what gets built this time.',
    tags: ['Rebuilding', 'In progress'],
    image: '/farm/tunnel-frame.jpg',
    alt: 'A new tunnel frame going up, a finished house standing behind it',
    // Two thirds of this frame is sky; sit low so the steelwork and the
    // people on it are what the letterbox actually shows.
    focus: 'center 56%',
    color: 'var(--c-red)',
    soft: 'var(--c-red-soft)',
    final: true,
  },
];

const Step = ({ step, index }) => {
  const side = index % 2 === 0 ? 'left' : 'right';
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const play = () => {
    setPlaying(true);
    videoRef.current?.play().catch(() => {});
  };

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

      {/* Hover (or focus) the photograph to open the rest of the chapter.
          A step with a clip swaps the photograph for the film in place, so
          the panel keeps its shape and its position in the story. */}
      <div className="tl__media" tabIndex={playing ? -1 : 0} role="group" aria-label={`${step.stage} — ${step.reveal}`}>
        {playing ? (
          <video
            ref={videoRef}
            src={step.clip}
            poster={step.image}
            controls
            playsInline
            className="tl__video"
            onEnded={() => setPlaying(false)}
          />
        ) : (
          <>
            <Photo src={step.image} alt={step.alt} style={step.focus ? { objectPosition: step.focus } : undefined} />
            <span className="tl__media-tint" aria-hidden="true" />
            {step.clip ? (
              <button type="button" className="tl__clip" onClick={play}>
                <span className="tl__clip-play" aria-hidden="true"><Play size={18} /></span>
                <span>
                  {step.clipLabel}
                  <em>{step.clipRuntime}</em>
                </span>
              </button>
            ) : (
              <span className="chip chip--float tl__hint" aria-hidden="true">
                <Plus size={13} /> More
              </span>
            )}
            <div className="tl__reveal">
              <p>{step.reveal}</p>
            </div>
          </>
        )}
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
    <>
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

      </div>
    </section>

    {/* Setho's ending: the line the whole page has been making, and stop.
        Everything that used to follow has moved — the flow to Goods, the
        family to the Team page, the 2025 montage to the gallery — or gone. */}
    <Band
      bleed
      image="/farm/rows-avenue.jpg"
      alt="Looking down the rows inside a tunnel, three people working"
      kicker="Mookane Village"
      line="Open ground, then net, then tunnels. The tomato never changed."
    />
  </>
  );
};

export default TheJourney;
