import { useMemo, useRef, useState } from 'react';
import Reveal from '../components/ui/Reveal';
import SectionHead from '../components/ui/SectionHead';
import { Blob } from '../components/ui/Blobs';
import Band from '../components/ui/Band';
import Photo from '../components/ui/Photo';
import Lightbox from '../components/ui/Lightbox';
import Reel from '../components/ui/Reel';
import Montage from '../components/ui/Montage';
import FollowUs from '../components/FollowUs';
import { Instagram, Arrow, Plus, Play } from '../components/ui/Icons';
import { INSTAGRAM_URL, INSTAGRAM_HANDLE } from '../siteConfig';

/**
 * Every frame here was taken at Mookane Village. Captions describe only what
 * is actually in the frame.
 *
 * One roll, no chapters. This page used to be eleven titled sections with a
 * sticky index above them; Setho asked for the opposite — "exactly like a
 * phone gallery where there's a mix of photos & videos throughout", nothing
 * grouped, nothing announced. So the headings, the chapter rules and the
 * index are gone, and the stills and the clips run together in one wall.
 *
 * The order is still the order it happened, because that is also how a phone
 * gallery is ordered: you scroll and the farm gets older or younger. What
 * changed is that nothing tells you where one part ends and the next starts.
 * The clips are deliberately spaced so no two land side by side.
 *
 * `shape` is chosen per frame so the crop suits the subject:
 *   round — a single subject with a clear centre
 *   blob  — texture that reads the same however it is cut
 *   wide  — landscapes that need the horizon
 *   tall  — upright subjects
 *   leaf / petal — alternating soft corners for everything else
 *
 * A clip is marked `kind: 'video'` and plays where it sits.
 */
const frames = [
  // Open ground, where it started.
  { src: '/farm/field-rows.jpg', caption: 'Rows straight into the ground', shape: 'wide' },
  { src: '/farm/field-late.jpg', caption: 'Open ground, late light', shape: 'wide' },
  { src: '/farm/field-leafy.jpg', caption: 'Leafy and coming on', shape: 'leaf' },
  { src: '/farm/field-planted.jpg', caption: 'Out on the beds', shape: 'tall' },
  { src: '/farm/pipe-work.jpg', caption: 'Laying the irrigation by hand', shape: 'tall' },
  { src: '/farm/pipe-delivery.jpg', caption: 'A kilometre of pipe, off the back of the bakkie', shape: 'tall' },
  { src: '/farm/flood-channel.jpg', caption: 'The water that came through', shape: 'tall' },
  { src: '/farm/frost-fires.jpg', caption: 'Fires lit against the frost, before dawn', shape: 'wide' },
  { src: '/farm/farm-gate.jpg', caption: 'The name on the fence', shape: 'wide' },
  { src: '/farm/in-the-veld.jpg', caption: 'Out on the land at Mookane', shape: 'tall' },

  // Under net, in the long bags.
  { src: '/farm/net-house-rows.jpg', caption: 'Long bags down the length of the house', shape: 'wide' },
  { src: '/farm/net-grower-bag.jpg', caption: 'One plant, one coco-coir bag', shape: 'tall' },
  { src: '/farm/net-bags-laid.jpg', caption: 'Laying the bags out on the sheeting', shape: 'tall' },

  // The tunnels go up.
  { src: '/farm/tunnels-exterior.jpg', caption: 'The tunnels from outside', shape: 'wide' },
  { src: '/farm/tunnels-from-road.jpg', caption: 'Seen from the track', shape: 'wide' },
  { kind: 'video', src: '/film/clips/frame-going-up.mp4', poster: '/film/clips/frame-going-up.jpg', caption: 'Half-skinned, going up', shape: 'wide' },
  { src: '/farm/tunnel-edge.jpg', caption: 'Where the netting meets the veld', shape: 'leaf' },
  { src: '/farm/tunnel-frame.jpg', caption: 'Looking up at the frame', shape: 'leaf' },
  { src: '/farm/beds-empty.jpg', caption: 'Empty beds, waiting', shape: 'wide' },
  { src: '/farm/beds-ready.jpg', caption: 'Shaped and mulched', shape: 'petal' },
  { kind: 'video', src: '/film/clips/roof-skin.mp4', poster: '/film/clips/roof-skin.jpg', caption: 'The roof going on', shape: 'wide' },
  { src: '/farm/beds-prepared.jpg', caption: 'Lined and ready to plant', shape: 'tall' },
  { src: '/farm/beds-lined.jpg', caption: 'Mulch down the length of it', shape: 'petal' },
  { src: '/farm/tunnels-distance.jpg', caption: 'From across the yard', shape: 'leaf' },

  // It starts as a seedling.
  { src: '/farm/nursery-trays.jpg', caption: 'The nursery, under cover', shape: 'wide' },
  { src: '/farm/seedling-beds.jpg', caption: 'Trays in the beds', shape: 'leaf' },
  { src: '/farm/seedling-in-hand.jpg', caption: 'One seedling, lifted', shape: 'round' },
  { src: '/farm/seedling-cupped.jpg', caption: 'Cupped in both hands', shape: 'round' },
  { kind: 'video', src: '/film/clips/trays-watered.mp4', poster: '/film/clips/trays-watered.jpg', caption: 'Trays getting their water', shape: 'wide' },
  { src: '/farm/seedling-planted.jpg', caption: 'Into the bag it goes', shape: 'blob' },
  { src: '/farm/root-ball.jpg', caption: 'What the roots look like', shape: 'petal' },
  { src: '/farm/roots-gloved.jpg', caption: 'Pulled and checked', shape: 'leaf' },
  { src: '/farm/root-ball-held.jpg', caption: 'A whole root ball', shape: 'round' },
  { src: '/farm/seedlings-carried.jpg', caption: 'Carrying trays down the row', shape: 'tall' },

  // Planted out.
  { src: '/farm/tunnel-new-bags.jpg', caption: 'A tunnel freshly laid out', shape: 'wide' },
  { src: '/farm/placing-bags.jpg', caption: 'Setting out the bags', shape: 'leaf' },
  { src: '/farm/planting-bags.jpg', caption: 'Bag by bag down the row', shape: 'petal' },
  { kind: 'video', src: '/film/clips/beds-in-rows.mp4', poster: '/film/clips/beds-in-rows.jpg', caption: 'Beds shaped, ready to plant', shape: 'wide' },
  { src: '/farm/planting-row.jpg', caption: 'Working the line', shape: 'tall' },
  { src: '/farm/pipe-and-bags.jpg', caption: 'Pipe in, bags down', shape: 'leaf' },
  { src: '/farm/bags-young.jpg', caption: 'First leaves up', shape: 'petal' },
  { src: '/farm/rows-planted.jpg', caption: 'Planted and watered in', shape: 'leaf' },

  // Growing on.
  { src: '/farm/rows-wide.jpg', caption: 'Row on row under cover', shape: 'wide' },
  { src: '/farm/rows-young.jpg', caption: 'Coming up', shape: 'leaf' },
  { src: '/farm/rows-receding.jpg', caption: 'All the way down', shape: 'petal' },
  { src: '/farm/rows-avenue.jpg', caption: 'An avenue of plants', shape: 'leaf' },
  { src: '/farm/rows-staggered.jpg', caption: 'Staggered down the tunnel', shape: 'petal' },
  { kind: 'video', src: '/film/clips/row-of-fruit.mp4', poster: '/film/clips/row-of-fruit.jpg', caption: 'Down the row, fruit set', shape: 'tall' },
  { src: '/farm/tunnel-mature.jpg', caption: 'Full height', shape: 'tall' },
  { src: '/farm/fruit-in-bags.jpg', caption: 'Carrying fruit', shape: 'wide' },
  { src: '/farm/plant-laden.jpg', caption: 'Loaded', shape: 'leaf' },
  { src: '/farm/plant-full.jpg', caption: 'A plant in full', shape: 'petal' },
  { src: '/farm/truss-wall.jpg', caption: 'Trusses all the way up', shape: 'leaf' },
  { src: '/farm/rows-mature.jpg', caption: 'Shoulder height', shape: 'petal' },
  { src: '/farm/rows-fruiting.jpg', caption: 'Fruit down both sides', shape: 'leaf' },
  { kind: 'video', src: '/film/clips/walking-the-row.mp4', poster: '/film/clips/walking-the-row.jpg', caption: 'Walking it, end to end', shape: 'tall' },
  { src: '/farm/plant-in-tunnel.jpg', caption: 'One plant, full span', shape: 'tall' },
  { src: '/farm/row-walk.jpg', caption: 'Walking the row', shape: 'petal' },

  // Close enough to touch.
  { src: '/farm/green-truss-dew.jpg', caption: 'Still green, still wet', shape: 'round' },
  { src: '/farm/truss-closeup.jpg', caption: 'A truss up close', shape: 'blob' },
  { src: '/farm/green-cluster.jpg', caption: 'Four on a stem', shape: 'round' },
  { src: '/farm/fruit-forming.jpg', caption: 'Just set', shape: 'petal' },
  { src: '/farm/flower-truss.jpg', caption: 'Flowering', shape: 'round' },
  { src: '/farm/heavy-truss.jpg', caption: 'Weighing the stem down', shape: 'leaf' },
  { src: '/farm/green-in-hand.jpg', caption: 'Green in the hand', shape: 'round' },
  { src: '/farm/ripening-in-hand.jpg', caption: 'Turning', shape: 'blob' },
  { src: '/farm/ripe-in-hand.jpg', caption: 'Ready', shape: 'round' },
  { src: '/farm/gloved-work.jpg', caption: 'Working the stem', shape: 'leaf' },
  { src: '/farm/truss-held.jpg', caption: 'A truss in the hand', shape: 'blob' },
  { src: '/farm/stem-in-hand.jpg', caption: 'Checking the stem', shape: 'petal' },

  // The people who do it.
  { src: '/farm/team-lineup.jpg', caption: 'The team', shape: 'tall' },
  { src: '/farm/team-morning.jpg', caption: 'Before the heat', shape: 'leaf' },
  { src: '/farm/team-group.jpg', caption: 'Gathered', shape: 'petal' },
  { src: '/farm/two-smiling.jpg', caption: 'Out in the rows, mid-pick', shape: 'tall' },
  { kind: 'video', src: '/film/clips/working-the-wall.mp4', poster: '/film/clips/working-the-wall.jpg', caption: 'Working the wall', shape: 'wide' },
  { src: '/farm/pair-at-wall.jpg', caption: 'Two of the crew', shape: 'leaf' },
  { src: '/farm/walking-out.jpg', caption: 'Heading out', shape: 'round' },
  { src: '/farm/team-row.jpg', caption: 'Lined up', shape: 'petal' },
  { src: '/farm/pair-outside.jpg', caption: 'Two of the crew, outside', shape: 'leaf' },
  { src: '/farm/team-at-dusk.jpg', caption: 'Last light', shape: 'leaf' },

  // Picked and packed.
  { src: '/farm/harvesting.jpg', caption: 'Picking', shape: 'tall' },
  { src: '/farm/sorting-indoors.jpg', caption: 'Sorting under the shed', shape: 'leaf' },
  { src: '/farm/bag-in-hand.jpg', caption: 'The 13 on the bag', shape: 'round' },
  { src: '/farm/bag-over-pile.jpg', caption: 'Straight off the pile', shape: 'blob' },
  { src: '/farm/bags-crated.jpg', caption: 'Bagged and crated', shape: 'petal' },
  { src: '/farm/bags-stacked.jpg', caption: 'Stacked for the run', shape: 'leaf' },
  { src: '/farm/crate-of-bags.jpg', caption: 'A crate, ready', shape: 'petal' },
  { src: '/farm/crate-carried.jpg', caption: 'Out to the vehicle', shape: 'leaf' },

  // Out the gate, into town. These stay: they happened, and the captions
  // describe what is in the frame rather than claiming where the tomatoes
  // are this week.
  { src: '/farm/dispatch.jpg', caption: 'Dispatch', shape: 'wide' },
  { src: '/farm/roadside-stall.jpg', caption: 'Crates out in town', shape: 'leaf' },
  { src: '/farm/retail-shelf.jpg', caption: 'Back when we were on the shelf', shape: 'tall' },
  { src: '/farm/shelf-full.jpg', caption: 'Faced up', shape: 'leaf' },
  { src: '/farm/at-the-shelf.jpg', caption: 'Checking the facing', shape: 'wide' },
  { src: '/farm/shelf-reaching.jpg', caption: 'Reaching for the 13', shape: 'leaf' },
  { src: '/farm/for-sale-board.jpg', caption: 'Cooked and served', shape: 'petal' },
  { src: '/farm/plated.jpg', caption: 'On the plate', shape: 'round' },

  // And then the storm.
  { src: '/farm/storm-aftermath.jpg', caption: 'The frame folded over a crop still carrying fruit', shape: 'wide' },
];

/**
 * A clip from the 2025 footage, sitting in the wall beside the stills.
 *
 * Setho liked the clips but not the compilation they were cut into, so they
 * are spread through the roll instead. Each one is short, silent and
 * `preload="none"` behind its own poster frame, so a page of ninety
 * photographs does not also download seven videos nobody pressed.
 */
const ClipTile = ({ clip }) => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const start = () => {
    setPlaying(true);
    videoRef.current?.play().catch(() => {});
  };

  return (
    <button type="button" className="mosaic__btn mosaic__btn--clip" onClick={start} aria-label={`Play: ${clip.caption}`}>
      <video
        ref={videoRef}
        src={clip.src}
        poster={clip.poster}
        preload="none"
        muted
        loop
        playsInline
        onPlay={() => setPlaying(true)}
      />
      {!playing && (
        <>
          <span className="mosaic__play" aria-hidden="true"><Play size={18} /></span>
          <span className="mosaic__cap">
            {clip.caption}
            <span className="mosaic__zoom" aria-hidden="true"><Play size={11} /></span>
          </span>
        </>
      )}
    </button>
  );
};

const Gallery = () => {
  // One flat list behind the wall, so the lightbox runs start to finish
  // across the whole set. Clips are left out of it: they play where they
  // sit, and letting them into this array would throw every index in the
  // viewer out of step.
  const stills = useMemo(() => frames.filter((f) => f.kind !== 'video'), []);
  const clipCount = frames.length - stills.length;

  const [open, setOpen] = useState(null);
  const lastTrigger = useRef(null);

  const openAt = (src, el) => {
    lastTrigger.current = el;
    setOpen(stills.findIndex((p) => p.src === src));
  };

  const close = () => {
    setOpen(null);
    lastTrigger.current?.focus();
  };

  const step = (d) => setOpen((i) => (i + d + stills.length) % stills.length);

  return (
    <>
    <section className="section section--top" style={{ background: 'radial-gradient(90% 60% at 85% 0%, var(--c-red-soft) 0%, var(--white) 60%)' }}>
      <Blob color="yellow" size={18} top="18%" right="9%" />
      <Blob color="soft-lime" size={320} bottom="2%" right="-10%" />

      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
        <SectionHead
          as="h1"
          eyebrow="The journey, documented"
          dot="var(--c-red)"
          variant="left"
          title={<>In the <span className="t-green">field</span>.</>}
          lede={`${stills.length} photographs and ${clipCount} clips from Mookane Village, in the order it happened. Tap any frame to open it.`}
        />

        {/* The year, first — Setho's call. It is the one thing on this page
            that is a whole story on its own, so it opens rather than being
            buried under ninety stills. */}
        <div style={{ marginTop: 'clamp(2rem, 4vw, 3rem)' }}>
          <Montage />
        </div>

        <div className="mosaic" style={{ marginTop: 'clamp(2.5rem, 5vw, 4rem)' }}>
          {frames.map((frame, i) => (
            <Reveal
              key={frame.src}
              delay={(i % 4) * 0.05}
              variant="scale"
              className={`mosaic__item mosaic__item--${frame.shape}`}
            >
              {frame.kind === 'video' ? <ClipTile clip={frame} /> : (
              <button
                type="button"
                className="mosaic__btn"
                onClick={(e) => openAt(frame.src, e.currentTarget)}
                aria-label={`Open: ${frame.caption}`}
              >
                <Photo src={frame.src} alt={frame.caption} eager={i < 2} />
                <span className="mosaic__cap">
                  {frame.caption}
                  <span className="mosaic__zoom" aria-hidden="true"><Plus size={13} /></span>
                </span>
              </button>
              )}
            </Reveal>
          ))}
        </div>

        <Reel />

        <Band
          image="/farm/fruit-in-bags.jpg"
          alt="Tomato plants carrying fruit in grow bags inside the tunnels"
          kicker="Mookane Village"
          line="Every frame on this page was taken on the farm."
        />

        <Reveal delay={0.15} style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn btn--instagram">
            <Instagram size={17} /> More on {INSTAGRAM_HANDLE} <Arrow size={15} />
          </a>
        </Reveal>
      </div>

      {open !== null && (
        <Lightbox photos={stills} index={open} onClose={close} onStep={step} />
      )}
    </section>

    {/* After the gallery, as Setho asked — all three channels, not just
        the one. */}
    <FollowUs />
    </>
  );
};

export default Gallery;
