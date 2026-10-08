import Reveal from './ui/Reveal';

/**
 * The short version of the journey timeline — how one tomato actually gets
 * from the ground to a shelf. Sits inside the Journey page, right after the
 * long-form story. Each stage is shown with a photograph of that stage
 * actually happening on the farm.
 */
const steps = [
  { n: '01', label: 'Seedlings', body: 'Cuttings started, not bought seed — roots before anything else.', image: '/farm/planting-cocobag.jpg', alt: 'Planting into coco-coir grow bags' },
  { n: '02', label: 'Greenhouse', body: 'Planted out and given the conditions to actually thrive.', image: '/farm/tunnel-prepared.jpg', alt: 'Prepared rows inside a shade-net tunnel' },
  { n: '03', label: 'Care', body: 'Watered, watched and tended, day in and day out.', image: '/farm/in-the-rows.jpg', alt: 'Tending the crop in the rows' },
  { n: '04', label: 'Harvest', body: 'Picked by hand, at the moment it is ready — not before.', image: '/farm/wheelbarrows-harvest.jpg', alt: 'Wheelbarrows of harvested tomatoes' },
  { n: '05', label: 'Packing', body: 'Bagged and stamped with the number, not a logo.', image: '/farm/packing-table.jpg', alt: 'Packing tomatoes into branded punnets' },
  { n: '06', label: 'Delivery', body: 'Mookane to Gaborone, the same day it is packed.', image: '/farm/harvest-crate.jpg', alt: 'Crated tomatoes ready to move' },
  { n: '07', label: 'Shelves', body: 'Food Lover’s SquareMart, SuperSpar Acacia — and counting.', image: '/farm/retail-shelf.jpg', alt: 'Packed Tsoo...13 tomatoes on a retail shelf' },
  { n: '08', label: 'Reviews', body: 'Ask for 13 by name, then tell us how it went.', image: '/farm/packed-punnets.jpg', alt: 'Branded punnets of Tsoo...13 tomatoes' },
];

const ProcessFlow = () => (
  <div className="flow" style={{ marginTop: 'clamp(3rem, 6vw, 5rem)' }}>
    <Reveal>
      <p className="eyebrow" style={{ '--eyebrow-dot': 'var(--c-red)', marginBottom: '1rem' }}>
        Start to shelf
      </p>
      <h3 className="display display--md" style={{ color: 'var(--c-green)', marginBottom: '0.5rem' }}>
        How one tomato<br />gets to you.
      </h3>
    </Reveal>

    <div className="grid grid--4" style={{ marginTop: '2rem' }}>
      {steps.map((step, i) => (
        <Reveal key={step.n} delay={(i % 4) * 0.06} className="flow__item">
          <div className="flow__media">
            <img src={step.image} alt={step.alt} loading="lazy" />
            <span className="flow__num">{step.n}</span>
          </div>
          <p className="flow__label">{step.label}</p>
          <p className="body-sm">{step.body}</p>
        </Reveal>
      ))}
    </div>
  </div>
);

export default ProcessFlow;
