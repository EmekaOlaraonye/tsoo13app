import Reveal from './ui/Reveal';
import Photo from './ui/Photo';

/**
 * "A Day the 13 Way" — the open days.
 *
 * These photographs are older and lower resolution than the rest of the site,
 * and they stay. Nothing in the 2025 set shows the open field, the frost fires
 * or a yard full of other farmers, and those are the years that made the rest
 * make sense.
 *
 * The poster is the farm's own: 20 November 2021, P1300, Mookane Village,
 * hydroponics and open field on the programme.
 */
const shots = [
  {
    src: '/farm/open-day-group.jpg',
    caption: 'Other farmers, out in the rows',
    alt: 'A group of visiting farmers standing among crop rows at Mookane',
  },
  {
    src: '/farm/open-day-flyer.jpg',
    caption: 'The invitation, November 2021',
    alt: 'Poster reading A Day the Tsoo...13 Way, 20/11/2021, Mookane Village, hydroponics and open field',
    whole: true,
  },
  {
    src: '/farm/packing-crowd.jpg',
    caption: 'Everyone on the bagging at once',
    alt: 'A crew of people bagging tomatoes into crates together under the shed',
  },
];

const OpenDay = () => (
  <div className="dlv">
    <Reveal>
      <p className="eyebrow" style={{ '--eyebrow-dot': 'var(--c-lime)', marginBottom: '1rem' }}>
        A Day the 13 Way
      </p>
      <h3 className="display display--md" style={{ color: 'var(--c-green)', marginBottom: '0.5rem' }}>
        We open the gate.
      </h3>
      <p className="lede" style={{ maxWidth: '52ch' }}>
        Once in a while the farm stops being only ours for a day. Other growers
        come out to Mookane and we walk them through the whole of it —
        hydroponics, the open field, the spraying programmes, the layout, and
        the pitfalls we have already paid for. A farmer&apos;s best friend is
        another farmer.
      </p>
    </Reveal>

    <div className="dlv__row">
      {shots.map((shot, i) => (
        <Reveal
          key={shot.src}
          variant="scale"
          delay={0.08 + i * 0.06}
          className={`dlv__tile${shot.whole ? ' dlv__tile--whole' : ''}`}
        >
          <Photo src={shot.src} alt={shot.alt} />
          <span className="dlv__cap">{shot.caption}</span>
        </Reveal>
      ))}
    </div>
  </div>
);

export default OpenDay;
