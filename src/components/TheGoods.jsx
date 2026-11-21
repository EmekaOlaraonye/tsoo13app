import Reveal from './ui/Reveal';
import SectionHead from './ui/SectionHead';
import { Blob } from './ui/Blobs';
import { Tomato } from './ui/Tomato';
import ProcessFlow from './ProcessFlow';
import Photo from './ui/Photo';
import Band from './ui/Band';

/**
 * There is one crop here, not four. Every photograph in the set — the
 * trusses, the packhouse pile, the crates, the run into town — shows the same
 * large round tomato, so the old Cherry / Plum / Season's blend split was a
 * product line the farm does not have.
 *
 * Two cards, and they stop at the bag. The third used to invite people to
 * come and buy at Mookane; Setho cut it, along with the selling step in the
 * flow below, because the page should say what the thing is and how it
 * reaches you, not sell it. The page ends on the flow.
 */
const produce = [
  {
    id: 'tomato',
    name: 'The tomato',
    tagline: 'Round, full size, ripened on the plant.',
    desc: 'One crop, carried the whole way at Mookane — seedling, bag, truss, crate. Grown hydroponically on borehole water, never in the ground.',
    badge: 'Home grown',
    image: '/farm/ripening-in-hand.jpg',
    alt: 'A ripe tomato held on the truss, still attached to the plant',
    color: 'var(--c-red)',
    chip: 'var(--c-red-deep)',
  },
  {
    id: 'bag',
    name: 'The 13 bag',
    tagline: 'Look for the number.',
    desc: 'Produced in Botswana, borehole water used for irrigation — it says so on the front. Graded, bagged and packed by hand.',
    badge: 'Hand packed',
    image: '/farm/goods-on-the-scale.jpg',
    alt: 'A TSOO...13 bag of tomatoes on the scale, the weight showing',
    color: 'var(--c-yellow)',
    chip: 'var(--c-yellow-ink)',
  },
];

/**
 * The rest of the goods folder, start to finish: the tray, the bag, the
 * pile it comes off, and the chiller. The pile frame is the one file in
 * that folder that was already on the site — it is in the gallery as
 * bag-over-pile — so it is reused rather than published twice.
 */
const strip = [
  { src: '/farm/goods-seedling-tray.jpg', cap: 'Lifted out of the tray', alt: 'A seedling lifted from a nursery tray' },
  { src: '/farm/goods-young-bags.jpg', cap: 'One plant, one bag', alt: 'Young tomato plants, each in its own grow bag' },
  { src: '/farm/bag-over-pile.jpg', cap: 'Straight off the pile', alt: 'A TSOO...13 bag held over a pile of loose tomatoes' },
  { src: '/farm/goods-shelf-chiller.jpg', cap: 'Faced up in the chiller', alt: 'Bags of tomatoes faced up in a chilled display' },
];

const ProduceCard = ({ item, index }) => (
  <Reveal delay={(index % 4) * 0.07}>
    <article className="card" style={{ '--card-accent': item.color }}>
      <div className="card__media">
        <Photo className="card__img" src={item.image} alt={item.alt} />
        <span className="card__wash" aria-hidden="true" />
        <span
          className="chip"
          style={{
            position: 'absolute',
            top: '1rem',
            left: '1rem',
            '--chip-bg': item.chip,
            '--chip-fg': 'var(--white)',
          }}
        >
          {item.badge}
        </span>
      </div>
      <div className="card__body">
        <h3 className="card__title">{item.name}</h3>
        <p style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--ink)' }}>{item.tagline}</p>
        <span className="card__rule" />
        <p className="body-sm">{item.desc}</p>
      </div>
    </article>
  </Reveal>
);

/**
 * The page ran three photograph grids straight down: two produce cards, then
 * four tiles, then the six-step flow. Same rectangle, three times, and by the
 * third one the eye had stopped reading. The order below varies the width and
 * the count instead — one wide frame, a pair, a strip of small squares, a
 * full-bleed break, then the sequence.
 */
const TheGoods = ({ standalone = false }) => (
  <>
  <section id="goods" className={`section ${standalone ? 'section--top' : ''}`}>
    <Blob color="soft-red" size={420} top={-160} right="-12%" />
    <Blob color="lime" size={18} top="13%" left="58%" />
    <Blob color="soft-yellow" size={280} bottom="6%" left="-8%" />
    <Tomato color="var(--c-red)" size={110} top={90} right="8%" opacity={0.16} rotate={18} />
    <Tomato color="var(--c-green-lt)" size={80} bottom="14%" left="4%" opacity={0.18} rotate={-20} outline />

    <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
      <SectionHead
        as={standalone ? 'h1' : 'h2'}
        eyebrow="Straight from the ground"
        dot="var(--c-red)"
        variant="right"
        title={<>The <span className="t-green">goods</span>.</>}
        lede="One tomato, grown and packed at Mookane. Home grown, hand picked, always reliable — that is the whole of what the 13 on the bag means."
      />

      <Reveal
        variant="scale"
        style={{
          position: 'relative',
          borderRadius: 'var(--r-xl)',
          overflow: 'hidden',
          aspectRatio: '21 / 9',
          marginBottom: 'clamp(2.5rem, 5vw, 4rem)',
          boxShadow: 'var(--shadow-lg)',
        }}
      >
        {/* A 21:9 frame wants a panoramic photograph. dispatch.jpg is
            1050x1400 — portrait — so three quarters of it was cropped away
            and what survived read as a dark cluttered crate. This one is
            1400x646 and barely crops at all. */}
        <Photo
          src="/farm/rows-wide.jpg"
          alt="Row on row of tomato plants under cover at Mookane"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <span
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(100deg, rgba(20,21,15,.88) 0%, rgba(20,21,15,.6) 45%, rgba(20,21,15,.18) 80%)',
          }}
        />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', padding: 'clamp(1.5rem, 5vw, 3.5rem)' }}>
          <div>
            <p className="eyebrow" style={{ '--eyebrow-dot': 'var(--c-yellow)', color: 'rgba(255,255,255,.75)', marginBottom: '1rem' }}>
              The product
            </p>
            <h2 className="display display--lg" style={{ color: 'var(--white)', maxWidth: '16ch' }}>
              Grown here.<br />Packed here.<br />
              <span style={{ color: 'var(--c-yellow)' }}>Handed your way.</span>
            </h2>
          </div>
        </div>
      </Reveal>

      {/* Two cards, so a four-up grid would leave two empty columns. */}
      <div className="grid grid--2">
        {produce.map((item, i) => (
          <ProduceCard key={item.id} item={item} index={i} />
        ))}
      </div>

      {/* The quietest of the three blocks, on purpose: small squares, caption
          set underneath in the page's own ink rather than burned white over
          the picture. Four tall portrait tiles here read as a second set of
          cards competing with the pair above them. */}
      <div className="goods__strip">
        {strip.map((shot, i) => (
          <Reveal key={shot.src} delay={(i % 4) * 0.06} className="goods__cell">
            <figure>
              <div className="goods__shot">
                <Photo src={shot.src} alt={shot.alt} />
              </div>
              <figcaption className="goods__cap">{shot.cap}</figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </div>
  </section>

  {/* One dark full-width moment between the two halves of the page, so the
      flow below arrives as a new thought rather than as a fourth grid. */}
  <Band
    bleed
    image="/farm/net-house-rows.jpg"
    alt="Grower bags being laid out down the rows under the net house, several people working the length of it"
    kicker="Mookane Village"
    line="There is a hand on it at every stage."
  />

  {/* Moved off the journey, which now ends at the log. This is the last
      thing on the page by Setho's instruction — nothing follows it. */}
  <section className="section section--paper">
    <div className="wrap">
      <ProcessFlow />
    </div>
  </section>
  </>
);

export default TheGoods;
