import Reveal from './ui/Reveal';
import Photo from './ui/Photo';

/**
 * The short version of the journey timeline — how one tomato actually gets
 * from the ground to the shelf it ends up on. Sits inside the Journey page, right after the
 * long-form story. Each stage is shown with a photograph of that stage
 * actually happening on the farm.
 */
const steps = [
  { n: '01', label: 'Seedlings', body: 'Cuttings started, not bought seed — roots before anything else.', image: '/farm/planting-row.jpg', alt: 'Planting out along the row' },
  { n: '02', label: 'Greenhouse', body: 'Planted out and given the conditions to actually thrive.', image: '/farm/beds-prepared.jpg', alt: 'Beds shaped and lined, ready to plant' },
  { n: '03', label: 'Care', body: 'Watered, watched and tended, day in and day out.', image: '/farm/gloved-work.jpg', alt: 'Working the stem by hand' },
  { n: '04', label: 'Harvest', body: 'Picked by hand, at the moment it is ready — not before.', image: '/farm/harvesting.jpg', alt: 'Picking in the tunnel' },
  { n: '05', label: 'Packing', body: 'Bagged and stamped with the number, not a logo.', image: '/farm/sorting-indoors.jpg', alt: 'Sorting and bagging under the shed' },
  { n: '06', label: 'Delivery', body: 'Loaded and driven in ourselves, the same day it is packed.', image: '/farm/crate-of-bags.jpg', alt: 'A crate of bagged tomatoes, ready' },
  { n: '07', label: 'Selling', body: 'Out the gate and into town, under the number rather than a logo.', image: '/farm/roadside-stall.jpg', alt: 'Crates of Tsoo...13 bags at a roadside stall in town' },
  { n: '08', label: 'On the shelf', body: 'Faced up under the number, where someone reaches for it.', image: '/farm/retail-shelf.jpg', alt: 'Bags of Tsoo...13 tomatoes on the shelf' },
];

const ProcessFlow = () => (
  <div className="flow" style={{ marginTop: 'clamp(3rem, 6vw, 5rem)' }}>
    <Reveal>
      <p className="eyebrow" style={{ '--eyebrow-dot': 'var(--c-red)', marginBottom: '1rem' }}>
        Start to finish
      </p>
      <h3 className="display display--md" style={{ color: 'var(--c-green)', marginBottom: '0.5rem' }}>
        How one tomato<br />gets to you.
      </h3>
    </Reveal>

    <div className="flow__grid">
      {steps.map((step, i) => (
        <Reveal key={step.n} delay={(i % 4) * 0.06} className="flow__item">
          <div className="flow__media">
            <Photo src={step.image} alt={step.alt} />
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
