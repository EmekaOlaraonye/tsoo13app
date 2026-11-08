import Reveal from './ui/Reveal';
import SectionHead from './ui/SectionHead';
import Photo from './ui/Photo';
import { Blob } from './ui/Blobs';
import { Tomato } from './ui/Tomato';

/**
 * The Team.
 *
 * Deliberately not an org chart. The point Setho wanted made is that no one
 * person grows, packs, drives, brands and sells a crop — it takes a set of
 * skills that happen to sit in one family, and the thing works because those
 * skills are practised, not because the titles are tidy.
 *
 * So: one name carries a title, Sonny Mokgadi as managing director, and
 * nobody else does. The rest are captioned by what they are doing in the
 * photograph. Captions name only the people Setho has confirmed.
 */
const skills = [
  { skill: 'Growing', body: 'Seedlings, cuttings, feed and the early starts. The part that cannot be rushed or bought in.', color: 'var(--c-lime)', soft: 'var(--c-lime-soft)' },
  { skill: 'Packing', body: 'Graded and bagged by hand at Mookane, to the same standard every crate.', color: 'var(--c-green-lt)', soft: 'var(--c-green-soft)' },
  { skill: 'Logistics', body: 'Loaded and driven in ourselves — no agent, no depot, nobody in between.', color: 'var(--c-red)', soft: 'var(--c-red-soft)' },
  { skill: 'Branding', body: 'The number on the bag, and the reason people learn to ask for it.', color: 'var(--c-yellow-ink)', soft: 'var(--c-yellow-soft)' },
  { skill: 'Sales', body: 'The conversations that turn a crop into an order, and an order into a regular.', color: 'var(--c-red)', soft: 'var(--c-red-soft)' },
  { skill: 'Leadership', body: 'Holding the plan together through a season that does not care about the plan.', color: 'var(--c-green)', soft: 'var(--c-green-soft)' },
];

/**
 * Captions say what someone is doing, not what they are called at work.
 * Photographs Setho has not yet matched to a name stay described by the work
 * in them — a wrong name under a face is worse than no name.
 */
const shots = [
  { src: '/farm/team-lineup.jpg', cap: 'The team at Mookane Village', alt: 'The Tsoo...13 team lined up at Mookane Village' },
  { src: '/farm/two-smiling.jpg', cap: 'Out in the rows, mid-pick', alt: 'A young woman holding up a tomato in the rows, a colleague behind her' },
  { src: '/farm/gloved-work.jpg', cap: 'Working the stem by hand', alt: 'Gloved hands working a tomato stem' },
  { src: '/farm/team-group.jpg', cap: 'The crew, before the heat', alt: 'The Tsoo...13 crew together at the start of the day' },
  { src: '/farm/pipe-and-bags.jpg', cap: 'Setting the irrigation line', alt: 'Two people planning the irrigation line over newly laid grower bags' },
  { src: '/farm/sorting-indoors.jpg', cap: 'Sorting and bagging under the shed', alt: 'Sorting and bagging tomatoes under the packing shed' },
];

const TheTeam = () => (
  <section className="section section--top" id="team">
    <Blob color="soft-lime" size={400} top={-150} right="-12%" />
    <Blob color="red" size={16} top="22%" left="7%" />
    <Tomato color="var(--c-green)" size={110} bottom="6%" right="5%" opacity={0.12} rotate={12} outline />

    <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
      <SectionHead
        as="h1"
        eyebrow="From our family to yours"
        dot="var(--c-lime)"
        color="var(--c-green)"
        variant="left"
        title={<>The <span className="t-red">team</span>.</>}
        lede="One person cannot grow a crop, pack it, drive it in and sell it. It takes a collective of skills, and this one is well oiled — practised on the same ground, through the same seasons, for years."
      />

      <Reveal style={{ marginTop: 'clamp(2rem, 4vw, 3rem)' }}>
        <div className="team__lead">
          <p className="eyebrow" style={{ '--eyebrow-dot': 'var(--c-green)', marginBottom: '0.85rem' }}>
            Who leads it
          </p>
          <h2 className="display display--md" style={{ color: 'var(--c-green)', marginBottom: '0.6rem' }}>
            Sonny Mokgadi,<br />managing director.
          </h2>
          <p className="lede" style={{ maxWidth: '50ch' }}>
            An agricultural background, and the one holding the whole of it
            together — the growing plan, the rebuild, and the people doing both.
          </p>
          <p className="body-sm" style={{ maxWidth: '54ch', marginTop: '1rem' }}>
            Alongside him: Leiso Mokgadi, Mokgacha Mokgadi and Thato Mokgadi.
            Three generations have farmed this ground.
          </p>
        </div>
      </Reveal>

      <Reveal style={{ marginTop: 'clamp(2.5rem, 5vw, 4rem)' }}>
        <p className="eyebrow" style={{ '--eyebrow-dot': 'var(--c-red)', marginBottom: '1rem' }}>
          What it takes
        </p>
        <h2 className="display display--md" style={{ color: 'var(--c-red)' }}>
          Six skills, one crop.
        </h2>
      </Reveal>

      <div className="team__skills">
        {skills.map((item, i) => (
          <Reveal key={item.skill} delay={(i % 3) * 0.07}>
            <div className="family__card">
              <span className="family__avatar" style={{ background: item.soft, color: item.color }}>
                13
              </span>
              <p className="family__role">{item.skill}</p>
              <p className="body-sm">{item.body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal style={{ marginTop: 'clamp(2.5rem, 5vw, 4rem)' }}>
        <p className="eyebrow" style={{ '--eyebrow-dot': 'var(--c-yellow)', marginBottom: '1rem' }}>
          On the ground
        </p>
      </Reveal>

      <div className="team__shots">
        {shots.map((shot, i) => (
          <Reveal key={shot.src} delay={(i % 3) * 0.06} variant="scale" className="team__shot">
            <Photo src={shot.src} alt={shot.alt} />
            <span className="team__shot-cap">{shot.cap}</span>
          </Reveal>
        ))}
      </div>

    </div>
  </section>
);

export default TheTeam;
