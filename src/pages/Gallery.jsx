import { useMemo, useRef, useState } from 'react';
import Reveal from '../components/ui/Reveal';
import SectionHead from '../components/ui/SectionHead';
import { Blob } from '../components/ui/Blobs';
import Band from '../components/ui/Band';
import Photo from '../components/ui/Photo';
import Lightbox from '../components/ui/Lightbox';
import Reel from '../components/ui/Reel';
import { Instagram, Arrow, Plus } from '../components/ui/Icons';
import { INSTAGRAM_URL, INSTAGRAM_HANDLE } from '../siteConfig';

/**
 * Every photograph here was taken at Mookane Village. Captions describe only
 * what is actually in the frame.
 *
 * The set is grouped into chapters rather than shown as one long wall — in
 * order they tell the farm's own sequence, from bare ground to the shelf.
 *
 * `shape` is chosen per photograph so the crop suits the subject:
 *   round — a single subject with a clear centre
 *   blob  — texture that reads the same however it is cut
 *   wide  — landscapes that need the horizon
 *   tall  — upright subjects
 *   leaf / petal — alternating soft corners for everything else
 */
const chapters = [
  {
    id: 'open-field',
    kicker: 'Chapter one',
    title: 'It began in the open.',
    photos: [
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
    ],
  },
  {
    id: 'tunnels',
    kicker: 'Chapter two',
    title: 'The tunnels go up.',
    photos: [
      { src: '/farm/tunnels-exterior.jpg', caption: 'The tunnels from outside', shape: 'wide' },
      { src: '/farm/tunnels-from-road.jpg', caption: 'Seen from the track', shape: 'wide' },
      { src: '/farm/tunnel-edge.jpg', caption: 'Where the netting meets the veld', shape: 'leaf' },
      { src: '/farm/beds-empty.jpg', caption: 'Empty beds, waiting', shape: 'wide' },
      { src: '/farm/beds-ready.jpg', caption: 'Shaped and mulched', shape: 'petal' },
      { src: '/farm/beds-prepared.jpg', caption: 'Lined and ready to plant', shape: 'tall' },
      { src: '/farm/beds-lined.jpg', caption: 'Mulch down the length of it', shape: 'petal' },
      { src: '/farm/tunnel-frame.jpg', caption: 'Looking up at the frame', shape: 'leaf' },
      { src: '/farm/tunnels-distance.jpg', caption: 'From across the yard', shape: 'leaf' },
    ],
  },
  {
    id: 'seedlings',
    kicker: 'Chapter three',
    title: 'It starts as a seedling.',
    photos: [
      { src: '/farm/nursery-trays.jpg', caption: 'The nursery, under cover', shape: 'wide' },
      { src: '/farm/seedling-beds.jpg', caption: 'Trays in the beds', shape: 'leaf' },
      { src: '/farm/seedling-in-hand.jpg', caption: 'One seedling, lifted', shape: 'round' },
      { src: '/farm/seedling-cupped.jpg', caption: 'Cupped in both hands', shape: 'round' },
      { src: '/farm/seedling-planted.jpg', caption: 'Into the bag it goes', shape: 'blob' },
      { src: '/farm/root-ball.jpg', caption: 'What the roots look like', shape: 'petal' },
      { src: '/farm/roots-gloved.jpg', caption: 'Pulled and checked', shape: 'leaf' },
      { src: '/farm/root-ball-held.jpg', caption: 'A whole root ball', shape: 'round' },
      { src: '/farm/seedlings-carried.jpg', caption: 'Carrying trays down the row', shape: 'tall' },
    ],
  },
  {
    id: 'planting',
    kicker: 'Chapter four',
    title: 'Planted out.',
    photos: [
      { src: '/farm/tunnel-new-bags.jpg', caption: 'A tunnel freshly laid out', shape: 'wide' },
      { src: '/farm/placing-bags.jpg', caption: 'Setting out the bags', shape: 'leaf' },
      { src: '/farm/planting-bags.jpg', caption: 'Bag by bag down the row', shape: 'petal' },
      { src: '/farm/planting-row.jpg', caption: 'Working the line', shape: 'tall' },
      { src: '/farm/pipe-and-bags.jpg', caption: 'Pipe in, bags down', shape: 'leaf' },
      { src: '/farm/bags-young.jpg', caption: 'First leaves up', shape: 'petal' },
      { src: '/farm/rows-planted.jpg', caption: 'Planted and watered in', shape: 'leaf' },
    ],
  },
  {
    id: 'growing',
    kicker: 'Chapter five',
    title: 'Growing on.',
    photos: [
      { src: '/farm/rows-wide.jpg', caption: 'Row on row under cover', shape: 'wide' },
      { src: '/farm/rows-young.jpg', caption: 'Coming up', shape: 'leaf' },
      { src: '/farm/rows-receding.jpg', caption: 'All the way down', shape: 'petal' },
      { src: '/farm/rows-avenue.jpg', caption: 'An avenue of plants', shape: 'leaf' },
      { src: '/farm/rows-staggered.jpg', caption: 'Staggered down the tunnel', shape: 'petal' },
      { src: '/farm/tunnel-mature.jpg', caption: 'Full height', shape: 'tall' },
      { src: '/farm/fruit-in-bags.jpg', caption: 'Carrying fruit', shape: 'wide' },
      { src: '/farm/plant-laden.jpg', caption: 'Loaded', shape: 'leaf' },
      { src: '/farm/plant-full.jpg', caption: 'A plant in full', shape: 'petal' },
      { src: '/farm/truss-wall.jpg', caption: 'Trusses all the way up', shape: 'leaf' },
      { src: '/farm/rows-mature.jpg', caption: 'Shoulder height', shape: 'petal' },
      { src: '/farm/rows-fruiting.jpg', caption: 'Fruit down both sides', shape: 'leaf' },
      { src: '/farm/plant-in-tunnel.jpg', caption: 'One plant, full span', shape: 'tall' },
      { src: '/farm/row-walk.jpg', caption: 'Walking the row', shape: 'petal' },
    ],
  },
  {
    id: 'close',
    kicker: 'Chapter six',
    title: 'Close enough to touch.',
    photos: [
      { src: '/farm/green-truss-dew.jpg', caption: 'Still green, still wet', shape: 'round' },
      { src: '/farm/truss-closeup.jpg', caption: 'A truss up close', shape: 'blob' },
      { src: '/farm/green-cluster.jpg', caption: 'Four on a stem', shape: 'round' },
      { src: '/farm/fruit-forming.jpg', caption: 'Just set', shape: 'petal' },
      { src: '/farm/heavy-truss.jpg', caption: 'Weighing the stem down', shape: 'leaf' },
      { src: '/farm/green-in-hand.jpg', caption: 'Green in the hand', shape: 'round' },
      { src: '/farm/ripening-in-hand.jpg', caption: 'Turning', shape: 'blob' },
      { src: '/farm/ripe-in-hand.jpg', caption: 'Ready', shape: 'round' },
      { src: '/farm/gloved-work.jpg', caption: 'Working the stem', shape: 'leaf' },
      { src: '/farm/flower-truss.jpg', caption: 'Flowering', shape: 'round' },
      { src: '/farm/truss-held.jpg', caption: 'A truss in the hand', shape: 'blob' },
      { src: '/farm/stem-in-hand.jpg', caption: 'Checking the stem', shape: 'petal' },
    ],
  },
  {
    id: 'packed',
    kicker: 'Chapter seven',
    title: 'Picked, packed, sold.',
    photos: [
      { src: '/farm/harvesting.jpg', caption: 'Picking', shape: 'tall' },
      { src: '/farm/sorting-indoors.jpg', caption: 'Sorting under the shed', shape: 'leaf' },
      { src: '/farm/bag-in-hand.jpg', caption: 'The 13 on the bag', shape: 'round' },
      { src: '/farm/bag-over-pile.jpg', caption: 'Straight off the pile', shape: 'blob' },
      { src: '/farm/bags-crated.jpg', caption: 'Bagged and crated', shape: 'petal' },
      { src: '/farm/bags-stacked.jpg', caption: 'Stacked for the run', shape: 'leaf' },
      { src: '/farm/crate-of-bags.jpg', caption: 'A crate, ready', shape: 'petal' },
      { src: '/farm/crate-carried.jpg', caption: 'Out to the vehicle', shape: 'leaf' },
      { src: '/farm/dispatch.jpg', caption: 'Dispatch', shape: 'petal' },
      { src: '/farm/retail-shelf.jpg', caption: 'On the shelf', shape: 'tall' },
      { src: '/farm/shelf-full.jpg', caption: 'Faced up', shape: 'leaf' },
      { src: '/farm/shelf-wide.jpg', caption: 'Among the rest', shape: 'petal' },
      { src: '/farm/at-the-shelf.jpg', caption: 'Checking the shelf', shape: 'wide' },
      { src: '/farm/for-sale-board.jpg', caption: 'Cooked and served', shape: 'leaf' },
      { src: '/farm/plated.jpg', caption: 'On the plate', shape: 'round' },
      { src: '/farm/shelf-stocking.jpg', caption: 'Stocking the shelf', shape: 'petal' },
      { src: '/farm/shelf-reaching.jpg', caption: 'Reaching for the 13', shape: 'leaf' },
    ],
  },
  {
    id: 'people',
    kicker: 'Chapter eight',
    title: 'The people who do it.',
    photos: [
      { src: '/farm/team-lineup.jpg', caption: 'The team', shape: 'tall' },
      { src: '/farm/team-morning.jpg', caption: 'Before the heat', shape: 'leaf' },
      { src: '/farm/team-group.jpg', caption: 'Gathered', shape: 'petal' },
      { src: '/farm/two-smiling.jpg', caption: 'Setho Mokgadi, managing director', shape: 'tall' },
      { src: '/farm/pair-at-wall.jpg', caption: 'Two of the crew', shape: 'leaf' },
      { src: '/farm/in-the-veld.jpg', caption: 'Out on the land', shape: 'petal' },
      { src: '/farm/walking-out.jpg', caption: 'Heading out', shape: 'round' },
      { src: '/farm/team-at-dusk.jpg', caption: 'Last light', shape: 'leaf' },
      { src: '/farm/team-row.jpg', caption: 'Lined up', shape: 'petal' },
      { src: '/farm/pair-outside.jpg', caption: 'Two of the crew, outside', shape: 'leaf' },
    ],
  },
  {
    id: 'storm',
    kicker: 'Chapter nine',
    title: 'And then the storm.',
    photos: [
      { src: '/farm/storm-aftermath.jpg', caption: 'The frame folded over a crop still carrying fruit', shape: 'wide' },
      { src: '/farm/storm-wreckage.jpg', caption: 'Bags on their sides, netting down, tomatoes ripe', shape: 'tall' },
    ],
  },
];

const Gallery = () => {
  // One flat list behind the chapters, so the lightbox can run start to
  // finish across the whole set rather than stopping at a chapter edge.
  const all = useMemo(() => chapters.flatMap((c) => c.photos), []);
  const [open, setOpen] = useState(null);
  const lastTrigger = useRef(null);

  const openAt = (src, el) => {
    lastTrigger.current = el;
    setOpen(all.findIndex((p) => p.src === src));
  };

  const close = () => {
    setOpen(null);
    lastTrigger.current?.focus();
  };

  const step = (d) => setOpen((i) => (i + d + all.length) % all.length);

  return (
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
          lede={`${all.length} photographs from Mookane Village, in the order it happened. Tap any frame to open it.`}
        />

        {chapters.map((chapter, ci) => (
          <section key={chapter.id} className="chapter" aria-labelledby={`ch-${chapter.id}`}>
            <Reveal variant="left" className="chapter__head">
              <p className="eyebrow" style={{ '--eyebrow-dot': 'var(--c-lime)' }}>{chapter.kicker}</p>
              <h2 id={`ch-${chapter.id}`} className="display display--md chapter__title">{chapter.title}</h2>
              <span className="chapter__rule" aria-hidden="true" />
            </Reveal>

            <div className="mosaic">
              {chapter.photos.map((photo, i) => (
                <Reveal
                  key={photo.src}
                  delay={(i % 4) * 0.05}
                  variant="scale"
                  className={`mosaic__item mosaic__item--${photo.shape}`}
                >
                  <button
                    type="button"
                    className="mosaic__btn"
                    onClick={(e) => openAt(photo.src, e.currentTarget)}
                    aria-label={`Open: ${photo.caption}`}
                  >
                    <Photo src={photo.src} alt={photo.caption} eager={ci === 0 && i < 2} />
                    <span className="mosaic__cap">
                      {photo.caption}
                      <span className="mosaic__zoom" aria-hidden="true"><Plus size={13} /></span>
                    </span>
                  </button>
                </Reveal>
              ))}
            </div>
          </section>
        ))}

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
        <Lightbox photos={all} index={open} onClose={close} onStep={step} />
      )}
    </section>
  );
};

export default Gallery;
