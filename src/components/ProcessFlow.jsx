import Reveal from './ui/Reveal';
import Photo from './ui/Photo';

/**
 * The short version of the journey — how one tomato actually gets from the
 * ground to the person holding it. Each stage is shown with a photograph of
 * that stage happening on the farm. It is the last thing on the Goods page.
 *
 * Six stages, set by Setho: seedlings, care, harvest, pack, delivery, shelf.
 * Two went: "Greenhouse", which was really the same beat as planting out,
 * and "Selling", which said twice over what Delivery already said — so
 * Delivery took its photograph, the run into town, which is the better
 * picture of the two.
 */
const steps = [
  { n: '01', label: 'Seedlings', body: 'Started here and raised here — roots before anything else.', image: '/farm/planting-row.jpg', alt: 'Planting out along the row' },
  { n: '02', label: 'Care', body: 'Watered, watched and tended, day in and day out.', image: '/farm/gloved-work.jpg', alt: 'Working the stem by hand' },
  { n: '03', label: 'Harvest', body: 'Picked by hand, at the moment it is ready.', image: '/farm/harvesting.jpg', alt: 'Picking in the tunnel' },
  { n: '04', label: 'Pack', body: 'Graded, bagged and stamped with the number, not a logo.', image: '/farm/sorting-indoors.jpg', alt: 'Sorting and bagging under the shed' },
  { n: '05', label: 'Delivery', body: 'Loaded and driven in ourselves, the same day it is packed.', image: '/farm/roadside-stall.jpg', alt: 'Crates of Tsoo...13 bags off the back, in town' },
  { n: '06', label: 'Shelf', body: 'Faced up under the number, where someone reaches for it.', image: '/farm/retail-shelf.jpg', alt: 'Bags of Tsoo...13 tomatoes on the shelf' },
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
