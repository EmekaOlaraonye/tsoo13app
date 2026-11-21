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
  { n: '01', label: 'Seedlings', body: 'Started here and raised here — roots before anything else.', image: '/farm/goods-seedling-roots.jpg', alt: 'A seedling held in an open hand, its roots washed clean' },
  { n: '02', label: 'Care', body: 'Watered, watched and tended, day in and day out.', image: '/farm/goods-pruning.jpg', alt: 'A gloved hand working a tomato plant with secateurs' },
  { n: '03', label: 'Harvest', body: 'Picked by hand, at the moment it is ready.', image: '/farm/harvesting.jpg', alt: 'Picking in the tunnel' },
  { n: '04', label: 'Pack', body: 'Graded, bagged and stamped with the number, not a logo.', image: '/farm/goods-sealing-bag.jpg', alt: 'Hands closing a TSOO...13 bag of tomatoes' },
  { n: '05', label: 'Delivery', body: 'Loaded and driven in ourselves, the same day it is packed.', image: '/farm/goods-loading-crates.jpg', alt: 'Crates of bagged tomatoes being loaded in town' },
  { n: '06', label: 'Shelf', body: 'Faced up under the number, where someone reaches for it.', image: '/farm/goods-shelf-stocked.jpg', alt: 'Bags of TSOO...13 tomatoes stocked on the shelf' },
];

const ProcessFlow = () => (
  <div className="flow" style={{ marginTop: 'clamp(3rem, 6vw, 5rem)' }}>
    <Reveal>
      <p className="eyebrow" style={{ '--eyebrow-dot': 'var(--c-red)', marginBottom: '1rem' }}>
        Start to finish
      </p>
      <h2 className="display display--md" style={{ color: 'var(--c-green)', marginBottom: '0.5rem' }}>
        How one tomato<br />gets to you.
      </h2>
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
