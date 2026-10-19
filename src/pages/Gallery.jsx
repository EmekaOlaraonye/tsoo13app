import Reveal from '../components/ui/Reveal';
import SectionHead from '../components/ui/SectionHead';
import { Blob } from '../components/ui/Blobs';
import Band from '../components/ui/Band';
import { Instagram, Arrow } from '../components/ui/Icons';
import { INSTAGRAM_URL, INSTAGRAM_HANDLE } from '../siteConfig';
import Photo from '../components/ui/Photo';

/**
 * Real photographs from the farm at Mookane Village. Captions describe only
 * what is actually in the frame — no claims the picture doesn't support.
 *
 * `shape` is chosen per photograph rather than by grid position, so the crop
 * suits the subject:
 *   round  — a single subject with a clear centre, nothing to lose at the edges
 *   blob   — texture that reads the same however it's cut
 *   wide   — landscapes that need the horizon
 *   tall   — upright subjects
 *   leaf / petal — alternating soft corners for everything else
 */
const photos = [
  { src: '/farm/tomatoes-on-vine.jpg', caption: 'Weeks out from the crate', shape: 'round' },
  { src: '/farm/farm-gate.jpg', caption: 'The gate at Mookane Village', shape: 'wide' },
  { src: '/farm/tunnel-grow-bags.jpg', caption: 'Under net — rows of grow bags', shape: 'leaf' },
  { src: '/farm/packing-table.jpg', caption: 'Packing day', shape: 'petal' },
  { src: '/farm/harvest-pile.jpg', caption: "A morning's picking", shape: 'blob' },
  { src: '/farm/tunnels-sunset.jpg', caption: 'Shade-net tunnels at last light', shape: 'wide' },
  { src: '/farm/retail-shelf.jpg', caption: 'Packed, branded, on the shelf', shape: 'leaf' },
  { src: '/farm/planting-cocobag.jpg', caption: 'Planting into coco-coir', shape: 'tall' },
  { src: '/farm/hydroponic-truss.jpg', caption: 'A truss coming on in the tunnel', shape: 'round' },
  { src: '/farm/training-group.jpg', caption: 'A Day the Tsoo...13 Way', shape: 'wide' },
  { src: '/farm/solar-pump.jpg', caption: 'Solar on the pump house', shape: 'petal' },
  { src: '/farm/cabbage-crates.jpg', caption: 'Cabbages crated at the gate', shape: 'leaf' },
  { src: '/farm/green-truss.jpg', caption: 'Still green, still coming', shape: 'round' },
  { src: '/farm/rows-at-sunset.jpg', caption: 'Open field, end of the day', shape: 'wide' },
  { src: '/farm/irrigation-trench.jpg', caption: 'Laying the main line', shape: 'petal' },
  { src: '/farm/team-in-field.jpg', caption: '#AskFor13, out in the rows', shape: 'tall' },
  { src: '/farm/wheelbarrows-harvest.jpg', caption: 'Out of the field by barrow', shape: 'leaf' },
  { src: '/farm/tunnel-tour.jpg', caption: 'Walking farmers through the tunnels', shape: 'wide' },
  { src: '/farm/reservoir-fill.jpg', caption: 'Filling the reservoir', shape: 'blob' },
  { src: '/farm/cabbage-field.jpg', caption: 'Not only tomatoes', shape: 'petal' },

  // Building the place — the infrastructure years
  { src: '/farm/bare-field.jpg', caption: 'Before any of it', shape: 'leaf' },
  { src: '/farm/breaking-ground.jpg', caption: 'Breaking ground', shape: 'petal' },
  { src: '/farm/poles-delivered.jpg', caption: 'Poles on the sand, waiting', shape: 'round' },
  { src: '/farm/pipe-delivery.jpg', caption: 'Pipe arriving by bakkie', shape: 'tall' },
  { src: '/farm/pipe-fittings.jpg', caption: 'Fittings in the trench', shape: 'blob' },
  { src: '/farm/power-line.jpg', caption: 'Getting power to the plot', shape: 'leaf' },
  { src: '/farm/water-source.jpg', caption: 'The water it runs on', shape: 'petal' },
  { src: '/farm/drip-lines.jpg', caption: 'Drip line through the rows', shape: 'wide' },

  // What comes up
  { src: '/farm/young-field.jpg', caption: 'A few weeks in', shape: 'wide' },
  { src: '/farm/tomato-rows.jpg', caption: 'Staked and climbing', shape: 'leaf' },
  { src: '/farm/irrigated-rows.jpg', caption: 'Watered down the row', shape: 'petal' },
  { src: '/farm/flood-irrigation.jpg', caption: 'Flooding the beds', shape: 'tall' },
  { src: '/farm/greens-rows.jpg', caption: 'Greens, row on row', shape: 'wide' },
  { src: '/farm/leafy-rows.jpg', caption: 'Another crop, another season', shape: 'blob' },
  { src: '/farm/field-walk.jpg', caption: 'Walking the field together', shape: 'leaf' },
  { src: '/farm/training-day.jpg', caption: 'Open day, out on the land', shape: 'petal' },
];

const Gallery = () => (
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
        lede="Hover or tap a frame to read it."
      />

      <div className="mosaic">
        {photos.map((photo, i) => (
          <Reveal
            key={i}
            delay={(i % 4) * 0.06}
            variant="scale"
            className={`mosaic__item ${photo.shape ? `mosaic__item--${photo.shape}` : ''}`}
          >
            <Photo src={photo.src} alt={photo.caption} />
            <span className="mosaic__cap">{photo.caption}</span>
          </Reveal>
        ))}
      </div>

      <Band
        image="/farm/rows-at-sunset.jpg"
        alt="Open field rows at Mookane Village at sunset"
        kicker="Mookane Village"
        line="Every frame on this page was taken on the farm."
      />

      <Reveal delay={0.15} style={{ textAlign: 'center', marginTop: '3rem' }}>
        <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn btn--instagram">
          <Instagram size={17} /> More on {INSTAGRAM_HANDLE} <Arrow size={15} />
        </a>
      </Reveal>
    </div>
  </section>
);

export default Gallery;
