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
 * Captions describe only what is actually in the frame.
 *
 * This used to open by saying every frame here was taken at Mookane Village,
 * and the band at the foot of the page said the same thing. That stopped
 * being true when the fifty photographs from Setho's gallery folder came in:
 * a few of them are plainly somewhere else — a hillside with mountains behind
 * it, which Mookane does not have. Rather than drop the photographs, which
 * were asked for by name, the three places that made the claim now say what
 * is actually true of the set.
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
  { src: '/farm/g-the-ground-as-it-was.jpg', caption: 'The ground as it was', shape: 'tall' },
  { kind: 'video', src: '/film/clips/breaking-the-ground.mp4', poster: '/film/clips/breaking-the-ground.jpg', caption: 'Breaking the ground', shape: 'tall' },
  { src: '/farm/field-rows.jpg', caption: 'Rows straight into the ground', shape: 'wide' },
  { src: '/farm/field-late.jpg', caption: 'Open ground, late light', shape: 'wide' },
  { src: '/farm/g-on-the-hill.jpg', caption: 'Out on the hill', shape: 'tall' },
  { src: '/farm/field-leafy.jpg', caption: 'Leafy and coming on', shape: 'leaf' },
  { kind: 'video', src: '/film/clips/tractor-turning.mp4', poster: '/film/clips/tractor-turning.jpg', caption: 'The tractor, turning the ground', shape: 'tall' },
  { src: '/farm/field-planted.jpg', caption: 'Out on the beds', shape: 'tall' },
  { src: '/farm/g-walking-the-ground.jpg', caption: 'A walk across the ground', shape: 'tall' },
  { src: '/farm/pipe-work.jpg', caption: 'Laying the irrigation by hand', shape: 'tall' },
  { src: '/farm/g-pipe-in-trench.jpg', caption: 'Pipe into the trench', shape: 'tall' },
  { kind: 'video', src: '/film/clips/drip-down-the-row.mp4', poster: '/film/clips/drip-down-the-row.jpg', caption: 'The drip line, down the row', shape: 'tall' },
  { src: '/farm/g-laying-the-line.jpg', caption: 'Laying the line, backs bent', shape: 'wide' },
  { src: '/farm/pipe-delivery.jpg', caption: 'A kilometre of pipe, off the back of the bakkie', shape: 'tall' },
  { src: '/farm/g-fitting-the-line.jpg', caption: 'Fitting the main line', shape: 'tall' },
  { src: '/farm/g-raising-the-pole.jpg', caption: 'Raising the pole', shape: 'tall' },
  { kind: 'video', src: '/film/clips/setting-the-pole.mp4', poster: '/film/clips/setting-the-pole.jpg', caption: 'Setting the pole', shape: 'tall' },
  { src: '/farm/g-laying-sheeting.jpg', caption: 'Laying the sheeting', shape: 'tall' },
  { src: '/farm/flood-channel.jpg', caption: 'The water that came through', shape: 'tall' },
  { src: '/farm/frost-fires.jpg', caption: 'Fires lit against the frost, before dawn', shape: 'wide' },
  { src: '/farm/g-the-open-field.jpg', caption: 'The open field', shape: 'tall' },
  { src: '/farm/g-walking-open-rows.jpg', caption: 'Walking the open rows', shape: 'tall' },
  { src: '/farm/g-greens-open-field.jpg', caption: 'Greens in the open field', shape: 'tall' },
  { src: '/farm/a-cabbage-rows.jpg', caption: 'Cabbages in the open field', shape: 'wide' },
  { src: '/farm/a-vine-rows.jpg', caption: 'Vines out in the open', shape: 'wide' },
  { src: '/farm/g-white-flowers.jpg', caption: 'In flower', shape: 'wide' },
  { src: '/farm/g-in-flower.jpg', caption: 'Coming into flower', shape: 'tall' },
  { src: '/farm/g-lifted-out.jpg', caption: 'Lifted out of the ground', shape: 'tall' },
  { src: '/farm/g-a-bunch-cut.jpg', caption: 'A bunch, cut', shape: 'tall' },
  { src: '/farm/g-on-the-bush.jpg', caption: 'On the bush', shape: 'round' },
  { src: '/farm/g-over-the-field.jpg', caption: 'Over the field', shape: 'petal' },
  { src: '/farm/farm-gate.jpg', caption: 'The name on the fence', shape: 'wide' },
  { src: '/farm/g-at-the-sign.jpg', caption: 'In front of the sign', shape: 'wide' },
  { src: '/farm/in-the-veld.jpg', caption: 'Out on the land at Mookane', shape: 'tall' },
  { src: '/farm/g-across-the-yard.jpg', caption: 'Across the yard', shape: 'tall' },
  { src: '/farm/g-block-work.jpg', caption: 'The block work going up', shape: 'tall' },
  { src: '/farm/a-solar-roof.jpg', caption: 'Solar on the roof', shape: 'wide' },
  { src: '/farm/g-on-the-stem.jpg', caption: 'On the stem', shape: 'tall' },
  { src: '/farm/g-under-the-tree.jpg', caption: 'Under the tree', shape: 'tall' },

  // Under net, in the long bags.
  { src: '/farm/net-house-rows.jpg', caption: 'Long bags down the length of the house', shape: 'wide' },
  { src: '/farm/net-grower-bag.jpg', caption: 'One plant, one coco-coir bag', shape: 'tall' },
  { src: '/farm/net-bags-laid.jpg', caption: 'Laying the bags out on the sheeting', shape: 'tall' },

  // The tunnels go up.
  { src: '/farm/tunnels-exterior.jpg', caption: 'The tunnels from outside', shape: 'wide' },
  { src: '/farm/tunnels-from-road.jpg', caption: 'Seen from the track', shape: 'wide' },
  { kind: 'video', src: '/film/clips/frame-going-up.mp4', poster: '/film/clips/frame-going-up.jpg', caption: 'Half-skinned, going up', shape: 'wide' },
  { src: '/farm/tunnel-edge.jpg', caption: 'Where the netting meets the veld', shape: 'leaf' },
  { kind: 'video', src: '/film/clips/up-the-ladder.mp4', poster: '/film/clips/up-the-ladder.jpg', caption: 'Up the ladder, under the roof', shape: 'tall' },
  { src: '/farm/g-crew-outside-tunnel.jpg', caption: 'The crew outside the tunnel', shape: 'tall' },
  { src: '/farm/tunnel-frame.jpg', caption: 'Looking up at the frame', shape: 'leaf' },
  { src: '/farm/beds-empty.jpg', caption: 'Empty beds, waiting', shape: 'wide' },
  { src: '/farm/beds-ready.jpg', caption: 'Shaped and mulched', shape: 'petal' },
  { kind: 'video', src: '/film/clips/roof-skin.mp4', poster: '/film/clips/roof-skin.jpg', caption: 'The roof going on', shape: 'wide' },
  { src: '/farm/beds-prepared.jpg', caption: 'Lined and ready to plant', shape: 'tall' },
  { src: '/farm/beds-lined.jpg', caption: 'Mulch down the length of it', shape: 'petal' },
  { src: '/farm/g-tunnels-first-light.jpg', caption: 'The tunnels at first light', shape: 'wide' },
  { src: '/farm/tunnels-distance.jpg', caption: 'From across the yard', shape: 'leaf' },

  // It starts as a seedling.
  { src: '/farm/nursery-trays.jpg', caption: 'The nursery, under cover', shape: 'wide' },
  { src: '/farm/seedling-beds.jpg', caption: 'Trays in the beds', shape: 'leaf' },
  { src: '/farm/g-bag-rows-waiting.jpg', caption: 'Rows of bags, waiting', shape: 'tall' },
  { src: '/farm/seedling-in-hand.jpg', caption: 'One seedling, lifted', shape: 'round' },
  { src: '/farm/seedling-cupped.jpg', caption: 'Cupped in both hands', shape: 'round' },
  { kind: 'video', src: '/film/clips/trays-watered.mp4', poster: '/film/clips/trays-watered.jpg', caption: 'Trays getting their water', shape: 'wide' },
  { src: '/farm/seedling-planted.jpg', caption: 'Into the bag it goes', shape: 'blob' },
  { src: '/farm/g-planted-by-hand.jpg', caption: 'Planted by hand', shape: 'tall' },
  { src: '/farm/root-ball.jpg', caption: 'What the roots look like', shape: 'petal' },
  { kind: 'video', src: '/film/clips/seedling-into-bag.mp4', poster: '/film/clips/seedling-into-bag.jpg', caption: 'One seedling, one bag', shape: 'tall' },
  { src: '/farm/roots-gloved.jpg', caption: 'Pulled and checked', shape: 'leaf' },
  { src: '/farm/g-pulling-roots.jpg', caption: 'Pulling out the old roots', shape: 'tall' },
  { src: '/farm/root-ball-held.jpg', caption: 'A whole root ball', shape: 'round' },
  { src: '/farm/seedlings-carried.jpg', caption: 'Carrying trays down the row', shape: 'tall' },

  // Planted out.
  { src: '/farm/tunnel-new-bags.jpg', caption: 'A tunnel freshly laid out', shape: 'wide' },
  { src: '/farm/placing-bags.jpg', caption: 'Setting out the bags', shape: 'leaf' },
  { src: '/farm/g-among-the-bags.jpg', caption: 'In among the bags', shape: 'tall' },
  { src: '/farm/planting-bags.jpg', caption: 'Bag by bag down the row', shape: 'petal' },
  { kind: 'video', src: '/film/clips/beds-in-rows.mp4', poster: '/film/clips/beds-in-rows.jpg', caption: 'Beds shaped, ready to plant', shape: 'wide' },
  { src: '/farm/planting-row.jpg', caption: 'Working the line', shape: 'tall' },
  { src: '/farm/g-down-the-line.jpg', caption: 'Working down the line', shape: 'tall' },
  { src: '/farm/pipe-and-bags.jpg', caption: 'Pipe in, bags down', shape: 'leaf' },
  { kind: 'video', src: '/film/clips/into-the-ground.mp4', poster: '/film/clips/into-the-ground.jpg', caption: 'Into the ground', shape: 'wide' },
  { src: '/farm/bags-young.jpg', caption: 'First leaves up', shape: 'petal' },
  { src: '/farm/rows-planted.jpg', caption: 'Planted and watered in', shape: 'leaf' },
  { kind: 'video', src: '/film/clips/tying-the-line.mp4', poster: '/film/clips/tying-the-line.jpg', caption: 'Working the plants by hand', shape: 'tall' },

  // Growing on.
  { src: '/farm/rows-wide.jpg', caption: 'Row on row under cover', shape: 'wide' },
  { src: '/farm/rows-young.jpg', caption: 'Coming up', shape: 'leaf' },
  { kind: 'video', src: '/film/clips/row-on-row.mp4', poster: '/film/clips/row-on-row.jpg', caption: 'Row on row, under cover', shape: 'tall' },
  { src: '/farm/g-down-the-row.jpg', caption: 'Down the row with the sprayer', shape: 'tall' },
  { src: '/farm/rows-receding.jpg', caption: 'All the way down', shape: 'petal' },
  { kind: 'video', src: '/film/clips/sprayer-down-the-row.mp4', poster: '/film/clips/sprayer-down-the-row.jpg', caption: 'Down the row with the sprayer', shape: 'tall' },
  { src: '/farm/rows-avenue.jpg', caption: 'An avenue of plants', shape: 'leaf' },
  { src: '/farm/rows-staggered.jpg', caption: 'Staggered down the tunnel', shape: 'petal' },
  { kind: 'video', src: '/film/clips/row-of-fruit.mp4', poster: '/film/clips/row-of-fruit.jpg', caption: 'Down the row, fruit set', shape: 'tall' },
  { src: '/farm/tunnel-mature.jpg', caption: 'Full height', shape: 'tall' },
  { src: '/farm/g-the-length-of-it.jpg', caption: 'The length of it, in fruit', shape: 'tall' },
  { src: '/farm/fruit-in-bags.jpg', caption: 'Carrying fruit', shape: 'wide' },
  { kind: 'video', src: '/film/clips/down-the-tunnel.mp4', poster: '/film/clips/down-the-tunnel.jpg', caption: 'Down the length of the tunnel', shape: 'tall' },
  { src: '/farm/plant-laden.jpg', caption: 'Loaded', shape: 'leaf' },
  { src: '/farm/g-among-the-plants.jpg', caption: 'In among the plants', shape: 'wide' },
  { src: '/farm/plant-full.jpg', caption: 'A plant in full', shape: 'petal' },
  { src: '/farm/truss-wall.jpg', caption: 'Trusses all the way up', shape: 'leaf' },
  { kind: 'video', src: '/film/clips/high-in-the-rows.mp4', poster: '/film/clips/high-in-the-rows.jpg', caption: 'High in the rows', shape: 'tall' },
  { src: '/farm/rows-mature.jpg', caption: 'Shoulder height', shape: 'petal' },
  { src: '/farm/rows-fruiting.jpg', caption: 'Fruit down both sides', shape: 'leaf' },
  { kind: 'video', src: '/film/clips/walking-the-row.mp4', poster: '/film/clips/walking-the-row.jpg', caption: 'Walking it, end to end', shape: 'tall' },
  { src: '/farm/plant-in-tunnel.jpg', caption: 'One plant, full span', shape: 'tall' },
  { src: '/farm/g-the-reading.jpg', caption: 'The reading in the tunnel', shape: 'tall' },
  { src: '/farm/row-walk.jpg', caption: 'Walking the row', shape: 'petal' },
  { kind: 'video', src: '/film/clips/walking-the-path.mp4', poster: '/film/clips/walking-the-path.jpg', caption: 'Walking the path between rows', shape: 'tall' },

  // Close enough to touch.
  { src: '/farm/green-truss-dew.jpg', caption: 'Still green, still wet', shape: 'round' },
  { src: '/farm/truss-closeup.jpg', caption: 'A truss up close', shape: 'blob' },
  { src: '/farm/g-truss-coming-on.jpg', caption: 'A truss coming on', shape: 'tall' },
  { src: '/farm/green-cluster.jpg', caption: 'Four on a stem', shape: 'round' },
  { kind: 'video', src: '/film/clips/green-on-the-truss.mp4', poster: '/film/clips/green-on-the-truss.jpg', caption: 'Green on the truss', shape: 'tall' },
  { src: '/farm/fruit-forming.jpg', caption: 'Just set', shape: 'petal' },
  { src: '/farm/flower-truss.jpg', caption: 'Flowering', shape: 'round' },
  { src: '/farm/heavy-truss.jpg', caption: 'Weighing the stem down', shape: 'leaf' },
  { src: '/farm/g-turning-on-the-vine.jpg', caption: 'Turning on the vine', shape: 'tall' },
  { src: '/farm/green-in-hand.jpg', caption: 'Green in the hand', shape: 'round' },
  { src: '/farm/ripening-in-hand.jpg', caption: 'Turning', shape: 'blob' },
  { src: '/farm/ripe-in-hand.jpg', caption: 'Ready', shape: 'round' },
  { src: '/farm/gloved-work.jpg', caption: 'Working the stem', shape: 'leaf' },
  { src: '/farm/truss-held.jpg', caption: 'A truss in the hand', shape: 'blob' },
  { src: '/farm/stem-in-hand.jpg', caption: 'Checking the stem', shape: 'petal' },

  // The people who do it.
  { src: '/farm/team-lineup.jpg', caption: 'The team', shape: 'tall' },
  { src: '/farm/team-morning.jpg', caption: 'Before the heat', shape: 'leaf' },
  { src: '/farm/g-a-handshake.jpg', caption: 'A handshake at the farm', shape: 'tall' },
  { src: '/farm/team-group.jpg', caption: 'Gathered', shape: 'petal' },
  { src: '/farm/two-smiling.jpg', caption: 'Out in the rows, mid-pick', shape: 'tall' },
  { kind: 'video', src: '/film/clips/working-the-wall.mp4', poster: '/film/clips/working-the-wall.jpg', caption: 'Working the wall', shape: 'wide' },
  { src: '/farm/pair-at-wall.jpg', caption: 'Two of the crew', shape: 'leaf' },
  { src: '/farm/g-bag-held-up.jpg', caption: 'A bag, held up', shape: 'tall' },
  { src: '/farm/walking-out.jpg', caption: 'Heading out', shape: 'round' },
  { src: '/farm/g-up-on-the-tractor.jpg', caption: 'Up on the tractor', shape: 'tall' },
  { src: '/farm/team-row.jpg', caption: 'Lined up', shape: 'petal' },
  { src: '/farm/g-behind-the-camera.jpg', caption: 'Behind the camera', shape: 'round' },
  { src: '/farm/pair-outside.jpg', caption: 'Two of the crew, outside', shape: 'leaf' },
  { src: '/farm/g-by-the-bakkie.jpg', caption: 'By the bakkie', shape: 'petal' },
  { src: '/farm/g-two-tomatoes.jpg', caption: 'Two tomatoes, one face', shape: 'round' },
  { src: '/farm/g-wearing-the-sun.jpg', caption: 'Wearing the sun', shape: 'blob' },
  { src: '/farm/g-from-our-family.jpg', caption: 'From our family to yours', shape: 'petal' },
  { src: '/farm/team-at-dusk.jpg', caption: 'Last light', shape: 'leaf' },

  // Picked and packed.
  { src: '/farm/harvesting.jpg', caption: 'Picking', shape: 'tall' },
  { kind: 'video', src: '/film/clips/picking-in-the-row.mp4', poster: '/film/clips/picking-in-the-row.jpg', caption: 'Picking in the row', shape: 'tall' },
  { src: '/farm/sorting-indoors.jpg', caption: 'Sorting under the shed', shape: 'leaf' },
  { src: '/farm/bag-in-hand.jpg', caption: 'The 13 on the bag', shape: 'round' },
  { src: '/farm/bag-over-pile.jpg', caption: 'Straight off the pile', shape: 'blob' },
  { kind: 'video', src: '/film/clips/sealing-the-bags.mp4', poster: '/film/clips/sealing-the-bags.jpg', caption: 'Sealing the bags', shape: 'tall' },
  { src: '/farm/bags-crated.jpg', caption: 'Bagged and crated', shape: 'petal' },
  { src: '/farm/bags-stacked.jpg', caption: 'Stacked for the run', shape: 'leaf' },
  { src: '/farm/crate-of-bags.jpg', caption: 'A crate, ready', shape: 'petal' },
  { kind: 'video', src: '/film/clips/bags-in-the-crate.mp4', poster: '/film/clips/bags-in-the-crate.jpg', caption: 'Bags in the crate', shape: 'tall' },
  { src: '/farm/a-boxed-stacked.jpg', caption: 'Boxed and stacked', shape: 'tall' },
  { src: '/farm/crate-carried.jpg', caption: 'Out to the vehicle', shape: 'leaf' },

  // Out the gate, and what happens to it after. The shelf frames stay: they
  // happened, and the captions describe what is in the frame rather than
  // claiming where the tomatoes are this week.
  { src: '/farm/dispatch.jpg', caption: 'Dispatch', shape: 'wide' },
  { src: '/farm/roadside-stall.jpg', caption: 'Crates out in town', shape: 'leaf' },
  { src: '/farm/g-on-the-sand.jpg', caption: 'Set down on the sand', shape: 'tall' },
  { src: '/farm/retail-shelf.jpg', caption: 'Back when we were on the shelf', shape: 'tall' },
  { src: '/farm/shelf-full.jpg', caption: 'Faced up', shape: 'leaf' },
  { src: '/farm/at-the-shelf.jpg', caption: 'Checking the facing', shape: 'wide' },
  { src: '/farm/shelf-reaching.jpg', caption: 'Reaching for the 13', shape: 'leaf' },
  { src: '/farm/g-dried-tray.jpg', caption: 'Halved and dried on the tray', shape: 'tall' },
  { src: '/farm/g-on-the-board.jpg', caption: 'On the board', shape: 'tall' },
  { src: '/farm/g-plated-up.jpg', caption: 'Plated up', shape: 'tall' },
  { src: '/farm/g-bag-on-the-board.jpg', caption: 'The bag on the board', shape: 'wide' },
  { src: '/farm/g-set-on-the-table.jpg', caption: 'Set down on the table', shape: 'petal' },
  { src: '/farm/g-cut-open.jpg', caption: 'Cut open', shape: 'round' },
  { src: '/farm/for-sale-board.jpg', caption: 'Cooked and served', shape: 'petal' },
  { src: '/farm/plated.jpg', caption: 'On the plate', shape: 'round' },

  // And then the storm.
  { src: '/farm/storm-aftermath.jpg', caption: 'The frame folded over a crop still carrying fruit', shape: 'wide' },
];

/**
 * A clip from the 2025 footage, sitting in the wall beside the stills.
 *
 * Setho liked the clips but not the compilation they were cut into, so they
 * are spread through the roll instead, and the seventeen phone videos that
 * came later were speed-ramped into the same eight-to-twelve-second shape and
 * spread the same way. None sits next to another.
 *
 * Each is silent and `preload="none"` behind its own poster frame, so a page
 * of a hundred and forty photographs does not also pull thirty megabytes of
 * video nobody pressed. The audio is stripped at encode rather than muted in
 * the markup, so there is no track to download either.
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
          lede={`${stills.length} photographs and ${clipCount} clips, most of them at Mookane Village, in the order it happened. Tap any frame to open it.`}
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
                {/* The caption is printed in the tile and is already the button's
                    accessible name, so repeating it here made a screen reader
                    say it twice. */}
                <Photo src={frame.src} alt="" eager={i < 2} />
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
          line="Every frame on this page is ours."
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
