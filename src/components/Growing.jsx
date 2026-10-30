import Reveal from './ui/Reveal';
import SectionHead from './ui/SectionHead';
import { Blob } from './ui/Blobs';
import { Tomato } from './ui/Tomato';
import Photo from './ui/Photo';

/**
 * How the crop is actually grown.
 *
 * This was the largest gap on the site: hydroponics appeared in exactly one
 * sentence, on one section of one page, when it is the thing that most
 * separates this farm from the next one. The farm's own 2021 open-day post
 * billed Mookane as "a working commercial SMART Hydroponic and Open Field
 * Farm" — so the word is theirs, not ours.
 *
 * Nothing here is claimed beyond what the photographs and the bag show:
 * plants in substrate rather than soil, a drip line to every bag, and
 * borehole water, which is printed on the packaging.
 */
const steps = [
  {
    src: '/farm/root-ball.jpg',
    caption: 'Roots in substrate, not soil',
    alt: 'A root ball lifted out of a grow bag, dense white roots in substrate',
  },
  {
    src: '/farm/gloved-work.jpg',
    caption: 'One seedling, one bag',
    alt: 'Gloved hands planting a young tomato seedling into its grow bag',
  },
  {
    src: '/farm/pipe-and-bags.jpg',
    caption: 'A drip line down every row',
    alt: 'Irrigation pipe coiled beside rows of grow bags laid out inside the tunnel',
  },
  {
    src: '/farm/water-reservoir.jpg',
    caption: 'Borehole water into the reservoir',
    alt: 'Water running from a pipe into a lined reservoir at the farm',
  },
];

const Growing = () => (
  <section id="growing" className="section">
    <Blob color="soft-lime" size={400} top={-140} left="-10%" />
    <Blob color="soft-yellow" size={280} bottom="8%" right="-8%" />
    <Blob color="lime" size={16} top="22%" right="9%" />
    <Tomato color="var(--c-green-lt)" size={95} bottom="12%" right="5%" opacity={0.14} rotate={14} outline />

    <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
      <SectionHead
        eyebrow="How it grows"
        dot="var(--c-lime)"
        color="var(--c-green)"
        title={<>Soilless, and fed <span className="t-red">by the litre</span>.</>}
        lede="The crop never goes in the ground. Every plant stands in its own bag of substrate with a drip line run to it, so water and feed are measured to the plant instead of poured at a field. No soil also means no soil-borne disease carried from one crop into the next. The water comes off our own borehole — it is printed on the front of every bag."
      />

      <div className="dlv__row dlv__row--four">
        {steps.map((step, i) => (
          <Reveal key={step.src} variant="scale" delay={0.06 * i} className="dlv__tile">
            <Photo src={step.src} alt={step.alt} />
            <span className="dlv__cap">{step.caption}</span>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2}>
        <p className="body-sm" style={{ marginTop: '1.5rem', maxWidth: '58ch', color: 'var(--ink-3)' }}>
          We have run it this way long enough to teach it. The 2021 open day was
          advertised, in our own words, as a day on &ldquo;a working commercial
          SMART Hydroponic and Open Field Farm&rdquo;.
        </p>
      </Reveal>
    </div>
  </section>
);

export default Growing;
