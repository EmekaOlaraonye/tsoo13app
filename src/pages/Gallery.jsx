import Reveal from '../components/ui/Reveal';
import SectionHead from '../components/ui/SectionHead';
import { Blob } from '../components/ui/Blobs';
import { Instagram, Arrow } from '../components/ui/Icons';
import { INSTAGRAM_URL, INSTAGRAM_HANDLE } from '../siteConfig';

/**
 * Real photographs from the farm at Mookane Village. Captions describe only
 * what is actually in the frame — no claims the picture doesn't support.
 */
const photos = [
  { src: '/farm/tomatoes-on-vine.jpg', caption: 'Weeks out from the crate' },
  { src: '/farm/farm-gate.jpg', caption: 'The gate at Mookane Village', shape: 'wide' },
  { src: '/farm/tunnel-grow-bags.jpg', caption: 'Under net — rows of grow bags' },
  { src: '/farm/packing-table.jpg', caption: 'Packing day' },
  { src: '/farm/harvest-pile.jpg', caption: "A morning's picking" },
  { src: '/farm/tunnels-sunset.jpg', caption: 'Shade-net tunnels at last light', shape: 'wide' },
  { src: '/farm/retail-shelf.jpg', caption: 'Packed, branded, on the shelf' },
  { src: '/farm/planting-cocobag.jpg', caption: 'Planting into coco-coir', shape: 'tall' },
  { src: '/farm/hydroponic-truss.jpg', caption: 'A truss coming on in the tunnel' },
  { src: '/farm/training-group.jpg', caption: 'A Day the Tsoo...13 Way', shape: 'wide' },
  { src: '/farm/solar-pump.jpg', caption: 'Solar on the pump house' },
  { src: '/farm/cabbage-crates.jpg', caption: 'Cabbages crated at the gate' },
  { src: '/farm/green-truss.jpg', caption: 'Still green, still coming' },
  { src: '/farm/rows-at-sunset.jpg', caption: 'Open field, end of the day', shape: 'wide' },
  { src: '/farm/irrigation-trench.jpg', caption: 'Laying the main line' },
  { src: '/farm/team-in-field.jpg', caption: '#AskFor13, out in the rows' },
  { src: '/farm/wheelbarrows-harvest.jpg', caption: 'Out of the field by barrow' },
  { src: '/farm/tunnel-tour.jpg', caption: 'Walking farmers through the tunnels', shape: 'wide' },
  { src: '/farm/reservoir-fill.jpg', caption: 'Filling the reservoir' },
  { src: '/farm/cabbage-field.jpg', caption: 'Not only tomatoes' },
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
            y={16}
            className={`mosaic__item ${photo.shape ? `mosaic__item--${photo.shape}` : ''}`}
          >
            <img src={photo.src} alt={photo.caption} loading="lazy" />
            <span className="mosaic__cap">{photo.caption}</span>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.15} style={{ textAlign: 'center', marginTop: '3rem' }}>
        <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn btn--instagram">
          <Instagram size={17} /> More on {INSTAGRAM_HANDLE} <Arrow size={15} />
        </a>
      </Reveal>
    </div>
  </section>
);

export default Gallery;
