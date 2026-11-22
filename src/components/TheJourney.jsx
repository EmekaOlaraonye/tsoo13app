import { useRef, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Reveal from './ui/Reveal';
import SectionHead from './ui/SectionHead';
import { Blob } from './ui/Blobs';
import { Tomato } from './ui/Tomato';
import { ChevronDown } from './ui/Icons';
import Photo from './ui/Photo';
import Band from './ui/Band';
import RebuildLog from './RebuildLog';
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
    deep: 'var(--c-lime-ink)',
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
    deep: 'var(--c-yellow-ink)',
    soft: 'var(--c-yellow-soft)',
    ink: true,
  },
  {
    id: 'tunnels',
    stage: 'The Tunnels',
    year: '03',
    title: 'Then the\ngreenhouse tunnels.',
    line: 'Fully enclosed, and the best this farm has run — rows at full height, fruit the whole way down them.',
    reveal: 'This was the peak. Plants standing in their own grow bags down the length of every house, the crop under cover from planting to picking, the packhouse busy, and TSOO...13 bags leaving Mookane for market every week.',
    tags: ['Full enclosure', 'Peak season'],
    // Back to tunnel-mature, which is the frame 4b94b1b chose on purpose —
    // "Put the tunnel in the tunnel beat" — and which stood here until I
    // swapped it for fruit-in-bags in cb7d2e5 without being asked to. The
    // swap was wrong on the plain reading: this beat is about full
    // enclosure, and fruit-in-bags is a close-up of fruit and grow bags with
    // no structure anywhere in it. You cannot illustrate "fully enclosed"
    // with a photograph that contains no enclosure.
    image: '/farm/tunnel-mature.jpg',
    alt: 'Inside a greenhouse tunnel at Mookane, the frame and sheeting overhead and the crop in full canopy the length of the house',
    color: 'var(--c-red)',
    deep: 'var(--c-red-deep)',
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
    clipLabel: 'Click here for the clip',
    clipRuntime: STORM.runtime,
    alt: 'Structures flattened across the yard in the rain',
    color: 'var(--c-green-lt)',
    deep: 'var(--c-green)',
    soft: 'var(--c-green-soft)',
  },
  {
    id: 'rebuild',
    // Rewritten 22 November 2026, when Setho said the build is finished.
    // This beat was written in the present tense — "the whole of the work,
    // right now", "nothing to pick, pack or sell right now" — which is the
    // kind of copy that quietly turns into a lie the moment the thing it
    // describes is over. It stops at the build being done: the houses are up
    // and skinned. It does not say the farm is selling again, because nobody
    // has told me that and the photograph cannot.
    stage: 'Rebuilt',
    year: '05',
    title: 'And we\nbuilt it back.',
    line: 'Frames back up, houses re-skinned, bags relaid. The houses are standing again.',
    reveal: 'Everything learned out in the open field, under the net and inside the tunnels went into what got built this time. The frames are up, the houses are re-skinned and the bags are back down the rows. The build is finished.',
    tags: ['The rebuild', 'Finished'],
    image: '/farm/tunnels-exterior.jpg',
    alt: 'Three finished greenhouse houses standing re-skinned at Mookane, new pipework trenched in across the ground in front of them',
    color: 'var(--c-red)',
    deep: 'var(--c-red-deep)',
    soft: 'var(--c-red-soft)',
  },
];

const Step = ({ step, index }) => {
  const side = index % 2 === 0 ? 'left' : 'right';
  const [playing, setPlaying] = useState(false);
  const [open, setOpen] = useState(false);
  const videoRef = useRef(null);

  const play = () => {
    setPlaying(true);
    videoRef.current?.play().catch(() => {});
  };

  return (
    <Reveal
      className={`tl__step tl__step--${side} ${step.final ? 'tl__step--final' : ''}`}
      style={{ '--step': step.color, '--step-deep': step.deep, '--step-soft': step.soft }}
      variant={step.final ? 'scale' : 'up'}
      delay={0.05}
    >
      <span className="tl__connector" aria-hidden="true" />

      {/* Always white. The numeral used to be dark ink on the two pale
          steps, which was right while the node took --step; now that it takes
          the deep variant for contrast, every node is dark and dark-on-dark
          is what that conditional produced. */}
      <span className="tl__node" style={{ color: 'var(--white)' }}>
        {step.year}
      </span>

      <div className="tl__panel">
        <p className="eyebrow" style={{ '--eyebrow-dot': step.color }}>{step.stage}</p>
        <p className="tl__year" aria-hidden="true">{step.year}</p>
        <h2 className="display display--md" style={{ whiteSpace: 'pre-line', margin: '0.4rem 0 0.9rem' }}>
          {step.title}
        </h2>
        <p className="lede" style={{ maxWidth: '32ch', fontSize: '1.02rem' }}>{step.line}</p>

        {/* The rest of the beat, on request. It used to slide up over the
            photograph on hover, which meant a phone never saw it open and a
            screen reader met it as the accessible name of a div. A plain
            disclosure says the same thing to everybody.

            The label stays put and the chevron turns, so the control does not
            resize when pressed; aria-expanded carries the state. The stage
            name is appended to the accessible name because six buttons all
            called "Read the chapter" are no use in a list of buttons — and it
            still contains the visible text, which WCAG 2.5.3 requires. */}
        <button
          type="button"
          className="tl__more"
          aria-expanded={open}
          aria-controls={`${step.id}-chapter`}
          aria-label={`Read the chapter: ${step.stage}`}
          onClick={() => setOpen((v) => !v)}
        >
          <span>Read the chapter</span>
          <ChevronDown size={15} />
        </button>

        <div className="tl__chapter" id={`${step.id}-chapter`} hidden={!open}>
          <p>{step.reveal}</p>
        </div>

        {step.clip && !playing && (
          <button type="button" className="tl__cliplink" onClick={play}>
            <span>{step.clipLabel}</span> <em>({step.clipRuntime})</em>
          </button>
        )}
        <div className="tl__tags" style={{ marginTop: '1.1rem' }}>
          {step.tags.map((tag) => (
            <span
              key={tag}
              className="chip"
              style={
                step.final
                  ? { '--chip-bg': 'rgba(255,255,255,.2)', '--chip-fg': 'var(--white)' }
                  : { '--chip-bg': step.soft, '--chip-fg': step.ink ? 'var(--ink-2)' : step.deep }
              }
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* A photograph, and nothing else — no tab stop, no role, no text
          hidden behind a gesture. A step with a clip swaps it for the film in
          place, so the panel keeps its shape and its position in the story. */}
      <div className="tl__media">
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
        {/* Four of the six pages opened on the same deep green, so the palette
            was doing nothing to tell them apart. Each page takes its own
            heading colour now and the set covers the whole range: green on
            grows and news, olive here, red on the goods, amber on the team,
            the light green on the gallery. */}
        <SectionHead
          as={standalone ? 'h1' : 'h2'}
          eyebrow="The journey"
          dot="var(--c-lime)"
          color="var(--c-lime-ink)"
          variant="left"
          title={<>How we got <span className="t-red">from there</span> to here.</>}
          lede="Five stops, from one plot of open soil to the houses standing again — by way of the afternoon it all came down."
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

    {/* The journey's last stop is "now we build it back". This is that,
        written down as it goes — so the story does not end on a sentence
        about the present that will quietly go stale. */}
    <RebuildLog />

    {/* Setho's ending: the line the whole page has been making, and stop.
        Everything that used to follow has moved — the flow to Goods, the
        family to the Team page, the 2025 montage to the gallery — or gone. */}
    {/* Back to rows-avenue at Setho's call, and he is right.
        I swapped it for field-rows.jpg on the arithmetic — the band slot is
        about 2.9:1 and this frame is 1050x1400, so three quarters of it is
        cropped away. What the arithmetic missed is that this photograph is
        composed down a central avenue, so what survives the crop is exactly
        the subject: the path, the rows either side, the people working them.
        field-rows.jpg loses nothing to the crop and has nothing to lose — it
        is two thirds sky over bare stakes, and it is already the photograph
        on step 01 of this same page, so the band repeated it.
        Crop maths tells you how much of a frame you keep. It does not tell
        you whether the part you keep is the part worth having. */}
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
