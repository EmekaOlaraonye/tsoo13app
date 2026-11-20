import Reveal from './ui/Reveal';
import SectionHead from './ui/SectionHead';
import Photo from './ui/Photo';
import { Blob } from './ui/Blobs';
import { Tomato } from './ui/Tomato';

/**
 * The Team.
 *
 * Deliberately not an org chart. The words on this page are Setho's own,
 * from the 5 November notes, and the point they make is that no one person
 * grows, packs, drives, brands and sells a crop — it takes a set of skills
 * that happen to sit in one family, and the thing works because those skills
 * are practised, not because the titles are tidy.
 *
 * So: one name carries a title, Sonny Mokgadi as managing director, and
 * nobody else does. Everyone else is captioned by what they are doing in the
 * photograph, because a wrong name under a face is worse than no name and
 * the name-to-face list has not come through yet.
 */

/**
 * The six skills are the six things named in the paragraph that sits
 * directly above them, in the same order. They used to be a slightly
 * different six — "Growing", "Sales", "Leadership" — which meant the prose
 * and the cards were quietly listing different things on the same screen.
 */
const skills = [
  { skill: 'Cultivation', body: 'Careful, patient growing. The part that cannot be rushed, bought in or faked.', color: 'var(--c-lime)', soft: 'var(--c-lime-soft)' },
  { skill: 'Harvest', body: 'A sharp eye on the truss — picked at the moment it is ready, by hand, every time.', color: 'var(--c-green-lt)', soft: 'var(--c-green-soft)' },
  { skill: 'Packing', body: 'Meticulous. Graded and bagged at Mookane to the same standard, crate after crate.', color: 'var(--c-yellow-ink)', soft: 'var(--c-yellow-soft)' },
  { skill: 'Logistics', body: 'Loaded and driven in ourselves, so what leaves the farm arrives fresh and on time.', color: 'var(--c-red)', soft: 'var(--c-red-soft)' },
  { skill: 'Brand', body: 'The number on the bag, and telling our story honestly enough that people learn to ask for it.', color: 'var(--c-green)', soft: 'var(--c-green-soft)' },
  { skill: 'Relationships', body: 'The conversations that turn a customer into a regular, and keep them one.', color: 'var(--c-red)', soft: 'var(--c-red-soft)' },
];

/**
 * Captions say what someone is doing, not what they are called at work.
 * Split three and three, with the paragraph about the skills between them.
 */
const firstShots = [
  { src: '/farm/team-lineup.jpg', cap: 'The team at Mookane Village', alt: 'The Tsoo...13 team lined up at Mookane Village' },
  { src: '/farm/two-smiling.jpg', cap: 'Out in the rows, mid-pick', alt: 'A young woman holding up a tomato in the rows, a colleague behind her' },
  { src: '/farm/team-group.jpg', cap: 'The crew, before the heat', alt: 'The Tsoo...13 crew together at the start of the day' },
];

const secondShots = [
  { src: '/farm/gloved-work.jpg', cap: 'Working the stem by hand', alt: 'Gloved hands working a tomato stem' },
  { src: '/farm/pipe-and-bags.jpg', cap: 'Setting the irrigation line', alt: 'Two people planning the irrigation line over newly laid grower bags' },
  { src: '/farm/sorting-indoors.jpg', cap: 'Sorting and bagging under the shed', alt: 'Sorting and bagging tomatoes under the packing shed' },
];

const Shots = ({ shots }) => (
  <div className="team__shots">
    {shots.map((shot, i) => (
      <Reveal key={shot.src} delay={(i % 3) * 0.06} variant="scale" className="team__shot">
        <Photo src={shot.src} alt={shot.alt} />
        <span className="team__shot-cap">{shot.cap}</span>
      </Reveal>
    ))}
  </div>
);

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
        lede="Different hands. Different skills. One team. Many moving parts, one shared standard."
      />

      <Reveal style={{ marginTop: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
        <p className="body" style={{ maxWidth: '62ch' }}>
          From the first seed to the final delivery it takes a collective
          effort to bring everything together. Different people, different
          strengths and different responsibilities — all working towards the
          same thing: producing quality we are proud to put our name on.
        </p>
      </Reveal>

      <Reveal style={{ marginTop: 'clamp(2.5rem, 5vw, 4rem)' }}>
        <div className="team__lead">
          <p className="eyebrow" style={{ '--eyebrow-dot': 'var(--c-green)', marginBottom: '0.85rem' }}>
            Who leads it
          </p>
          <h2 className="display display--md" style={{ color: 'var(--c-green)', marginBottom: '0.9rem' }}>
            A great tomato is never<br />the work of one person.
          </h2>
          <p className="lede" style={{ maxWidth: '52ch' }}>
            It starts long before harvest and does not end until it is on your
            table. At Tsoo&hellip;13, every crate carries the effort of a whole
            team &mdash; each doing their part so the rest can do theirs.
          </p>
          <p className="body-sm" style={{ maxWidth: '54ch', marginTop: '1.1rem' }}>
            Led with purpose by <strong>Sonny Mokgadi</strong>, our managing
            director, who sets the standard. We work to grow it right, pick it
            right and deliver it right, every single time.
          </p>
        </div>
      </Reveal>

      <div style={{ marginTop: 'clamp(2rem, 4vw, 3rem)' }}>
        <Shots shots={firstShots} />
      </div>

      <Reveal style={{ marginTop: 'clamp(2.5rem, 5vw, 4rem)' }}>
        <p className="eyebrow" style={{ '--eyebrow-dot': 'var(--c-red)', marginBottom: '1rem' }}>
          What it takes
        </p>
        <h2 className="display display--md" style={{ color: 'var(--c-red)', marginBottom: '1.1rem' }}>
          More than green fingers.
        </h2>
        <p className="body" style={{ maxWidth: '62ch' }}>
          Growing hydroponic tomatoes at this quality takes careful
          cultivation, a sharp eye at harvest, meticulous packing, logistics
          that keep things fresh and on time, a brand that tells our story
          honestly, and people who build lasting relationships with the
          customers we serve. No single skill does it alone. Each one is only
          as strong as the one beside it &mdash; and that is where the quality
          comes from.
        </p>
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

      <Shots shots={secondShots} />
    </div>
  </section>
);

export default TheTeam;
