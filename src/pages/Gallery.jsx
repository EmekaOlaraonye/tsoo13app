import { useMemo, useRef, useState } from 'react';
import Reveal from '../components/ui/Reveal';
import SectionHead from '../components/ui/SectionHead';
import { Blob } from '../components/ui/Blobs';
import Band from '../components/ui/Band';
import Photo from '../components/ui/Photo';
import Lightbox from '../components/ui/Lightbox';
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
    id: 'before',
    kicker: 'Chapter one',
    title: 'Before any of it.',
    photos: [
      { src: '/farm/bare-field.jpg', caption: 'Bare ground, red soil', shape: 'wide' },
      { src: '/farm/breaking-ground.jpg', caption: 'Breaking ground', shape: 'leaf' },
      { src: '/farm/water-source.jpg', caption: 'The water it runs on', shape: 'blob' },
      { src: '/farm/poles-delivered.jpg', caption: 'Poles on the sand, waiting', shape: 'petal' },
    ],
  },
  {
    id: 'building',
    kicker: 'Chapter two',
    title: 'Building it.',
    photos: [
      { src: '/farm/irrigation-trench.jpg', caption: 'Laying the main line', shape: 'wide' },
      { src: '/farm/pipe-delivery.jpg', caption: 'Pipe arriving by bakkie', shape: 'tall' },
      { src: '/farm/pipe-fittings.jpg', caption: 'Fittings in the trench', shape: 'round' },
      { src: '/farm/power-line.jpg', caption: 'Getting power to the plot', shape: 'leaf' },
      { src: '/farm/reservoir-fill.jpg', caption: 'Filling the reservoir', shape: 'petal' },
      { src: '/farm/solar-pump.jpg', caption: 'Solar on the pump house', shape: 'leaf' },
      { src: '/farm/drip-lines.jpg', caption: 'Drip line through the rows', shape: 'wide' },
      { src: '/farm/farm-gate.jpg', caption: 'The gate at Mookane Village', shape: 'wide' },
    ],
  },
  {
    id: 'tunnels',
    kicker: 'Chapter three',
    title: 'Under the tunnels.',
    photos: [
      { src: '/farm/tunnel-prepared.jpg', caption: 'Beds prepared, ready to plant', shape: 'wide' },
      { src: '/farm/planting-cocobag.jpg', caption: 'Planting into coco-coir', shape: 'tall' },
      { src: '/farm/cocobag-drip.jpg', caption: 'Coco-coir and drip line', shape: 'blob' },
      { src: '/farm/tunnel-grow-bags.jpg', caption: 'Row on row of grow bags', shape: 'leaf' },
      { src: '/farm/hydroponic-truss.jpg', caption: 'A truss coming on', shape: 'round' },
      { src: '/farm/tunnel-interior.jpg', caption: 'Inside, looking down the line', shape: 'petal' },
      { src: '/farm/tunnels-sunset.jpg', caption: 'Shade net at last light', shape: 'wide' },
    ],
  },
  {
    id: 'field',
    kicker: 'Chapter four',
    title: 'Out in the open field.',
    photos: [
      { src: '/farm/young-field.jpg', caption: 'A few weeks in', shape: 'wide' },
      { src: '/farm/field-rows-open.jpg', caption: 'Rows running to the fence', shape: 'leaf' },
      { src: '/farm/tomato-rows.jpg', caption: 'Staked and climbing', shape: 'petal' },
      { src: '/farm/staked-rows.jpg', caption: 'Held up through the season', shape: 'blob' },
      { src: '/farm/irrigated-rows.jpg', caption: 'Watered down the row', shape: 'leaf' },
      { src: '/farm/flood-irrigation.jpg', caption: 'Flooding the beds', shape: 'tall' },
      { src: '/farm/green-truss.jpg', caption: 'Still green, still coming', shape: 'round' },
      { src: '/farm/rows-at-sunset.jpg', caption: 'End of the day', shape: 'wide' },
      { src: '/farm/leafy-rows.jpg', caption: 'Beds between tomato seasons', shape: 'petal' },
      { src: '/farm/cabbage-field.jpg', caption: 'Rotation rows', shape: 'leaf' },
    ],
  },
  {
    id: 'harvest',
    kicker: 'Chapter five',
    title: 'Picked, packed, gone.',
    photos: [
      { src: '/farm/tomatoes-on-vine.jpg', caption: 'Weeks out from the crate', shape: 'round' },
      { src: '/farm/wheelbarrows-harvest.jpg', caption: 'Out of the field by barrow', shape: 'wide' },
      { src: '/farm/harvest-pile.jpg', caption: "A morning's picking", shape: 'blob' },
      { src: '/farm/harvest-crate.jpg', caption: 'Crated and counted', shape: 'leaf' },
      { src: '/farm/packing-table.jpg', caption: 'Packing day', shape: 'petal' },
      { src: '/farm/packed-punnets.jpg', caption: 'Bagged and stamped', shape: 'tall' },
      { src: '/farm/retail-shelf.jpg', caption: 'On the shelf in Gaborone', shape: 'wide' },
    ],
  },
  {
    id: 'sharing',
    kicker: 'Chapter six',
    title: 'Passing it on.',
    photos: [
      { src: '/farm/training-group.jpg', caption: 'A Day the Tsoo...13 Way', shape: 'wide' },
      { src: '/farm/training-demo.jpg', caption: 'Out at the pump, explaining it', shape: 'leaf' },
      { src: '/farm/training-session.jpg', caption: 'Sharing the method, not guarding it', shape: 'petal' },
      { src: '/farm/tunnel-tour.jpg', caption: 'Walking farmers through the tunnels', shape: 'wide' },
      { src: '/farm/greenhouse-visit.jpg', caption: 'Visitors in the tunnels', shape: 'blob' },
      { src: '/farm/visitors-field.jpg', caption: 'Out on the land together', shape: 'leaf' },
      { src: '/farm/field-walk.jpg', caption: 'Walking the field', shape: 'petal' },
      { src: '/farm/training-day.jpg', caption: 'Open day on the land', shape: 'round' },
      { src: '/farm/team-in-field.jpg', caption: '#AskFor13, out in the rows', shape: 'tall' },
      { src: '/farm/team-member.jpg', caption: 'Wearing the 13', shape: 'tall' },
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

      {open !== null && (
        <Lightbox photos={all} index={open} onClose={close} onStep={step} />
      )}
    </section>
  );
};

export default Gallery;
