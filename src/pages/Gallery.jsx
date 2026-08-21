import Reveal from '../components/ui/Reveal';
import SectionHead from '../components/ui/SectionHead';
import { Blob } from '../components/ui/Blobs';
import { Instagram, Arrow } from '../components/ui/Icons';
import { INSTAGRAM_URL, INSTAGRAM_HANDLE } from '../siteConfig';

const photos = [
  { src: '/hero.png', caption: 'First light in the greenhouse, Mookane Village', shape: 'wide' },
  { src: '/tomatoes.png', caption: 'Crate day — ask for 13 by name', shape: 'tall' },
  { src: '/cuttings.png', caption: 'No seeds. Stems, roots and patience.' },
  { src: '/lifestyle.png', caption: 'Straight from the ground to you' },
  { src: '/tomatoes.png', caption: "Food Lover's SquareMart, Gaborone" },
  { src: '/hero.png', caption: 'Smart hands, smarter farming', shape: 'wide' },
  { src: '/cuttings.png', caption: 'Season two, day one' },
  { src: '/lifestyle.png', caption: 'The people behind the number' },
];

const Gallery = () => (
  <section className="section section--top">
    <Blob color="soft-red" size={420} top={-160} left="-12%" />
    <Blob color="yellow" size={18} top="18%" right="9%" />
    <Blob color="soft-lime" size={320} bottom="2%" right="-10%" />

    <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
      <SectionHead
        eyebrow="The journey, documented"
        dot="var(--c-red)"
        title={<>In the <span className="t-green">field</span>.</>}
        lede="Hover a frame to read it."
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
        <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn btn--red">
          <Instagram size={17} /> More on {INSTAGRAM_HANDLE} <Arrow size={15} />
        </a>
      </Reveal>
    </div>
  </section>
);

export default Gallery;
