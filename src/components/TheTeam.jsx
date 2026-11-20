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
 * All twenty photographs from the team folder, in two blocks with the
 * paragraph about the skills between them.
 *
 * A caption carries a name only where Setho has confirmed that exact
 * photograph; everything else describes the work instead, because a wrong
 * name under a face is worse than no name at all. Where two people are in
 * frame the caption says which one is named, so the name cannot be read
 * off onto the wrong person.
 *
 * To name another: add `who` to its entry here. Nothing else changes.
 */
const firstShots = [
  { src: '/farm/team-thirteen-backs.jpg', cap: 'Thirteen on every back', alt: 'The crew standing together, the number 13 printed on the back of every overall' },
  { src: '/farm/team-outside-tunnel.jpg', cap: 'The crew, outside the tunnel', alt: 'The team gathered outside one of the greenhouse tunnels' },
  { src: '/farm/team-crate-carry.jpg', who: 'Setho Mokgadi', cap: 'in front, passing the crate', alt: 'Setho Mokgadi in the foreground passing a picking crate to a colleague between the rows' },
  { src: '/farm/team-in-the-sun.jpg', who: 'Mophato Mokgadi', cap: 'holding one up to the lens', alt: 'Mophato Mokgadi in a sun hat and branded shirt among the plants, a tomato held close to the camera' },
  { src: '/farm/team-two-with-bags.jpg', cap: 'Two bags, ready to go', alt: 'Two of the crew holding up bags of tomatoes' },
  { src: '/farm/team-three-in-row.jpg', who: 'Sonny Mokgadi', cap: 'left, with his brothers', alt: 'Sonny Mokgadi on the left with his two brothers, standing together in a planted row' },
  { src: '/farm/team-in-the-rows.jpg', cap: 'Down among the plants', alt: 'Crew working low down among the tomato plants' },
  { src: '/farm/team-checking-crop.jpg', cap: 'Checking the crop', alt: 'A member of the crew checking plants along the row' },
];

const secondShots = [
  { src: '/farm/team-ladder-pass.jpg', cap: 'Passing it up', alt: 'One person on a ladder taking a tool passed up by another' },
  { src: '/farm/team-ladder-work.jpg', cap: 'Up the ladder, under the roof', alt: 'Working high up under the tunnel roof from a ladder' },
  { src: '/farm/team-laying-beds.jpg', cap: 'Setting out the beds', alt: 'The crew shaping and setting out beds in the red soil' },
  { src: '/farm/team-setting-posts.jpg', cap: 'Setting the posts', alt: 'The crew setting a post and running a line along a new bed' },
  { src: '/farm/team-planting-out.jpg', cap: 'Planting out, bag by bag', alt: 'Planting out along a long row of grow bags' },
  { src: '/farm/team-tractor-thirteen.jpg', who: 'Leiso Mokgadi', cap: 'climbing up, thirteen on the back', alt: 'Leiso Mokgadi climbing onto the tractor, the number 13 on the back of the overall' },
  { src: '/farm/team-tractor-seat.jpg', who: 'Leiso Mokgadi', cap: 'at the wheel', alt: 'Leiso Mokgadi at the wheel of the tractor' },
  { src: '/farm/team-nursery-rows.jpg', cap: 'Working the nursery', alt: 'Working among rows of black grow bags under cover' },
  { src: '/farm/team-bag-rows.jpg', cap: 'Down the rows of bags', alt: 'Bending to the plants down a long row of grow bags' },
  { src: '/farm/team-tunnel-length.jpg', cap: 'The length of the tunnel', alt: 'Two people working at the far end of a planted tunnel' },
  { src: '/farm/team-on-the-land.jpg', who: 'Setho Mokgadi', cap: 'out on the land', alt: 'Setho Mokgadi standing out in the veld in an #askfor13 top, holding the farm’s sun mark' },
  { src: '/farm/team-lea-stand.jpg', cap: 'At the Local Enterprise Authority stand', alt: 'Two people talking in front of a Local Enterprise Authority banner' },
];

const Shots = ({ shots }) => (
  <div className="team__shots">
    {shots.map((shot, i) => (
      <Reveal key={shot.src} delay={(i % 3) * 0.06} variant="scale" className="team__shot">
        <Photo src={shot.src} alt={shot.alt} />
        <span className="team__shot-cap">
          {shot.who && <b className="team__shot-who">{shot.who}</b>}
          {shot.cap}
        </span>
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
            table. At TSOO&hellip;13, every crate carries the effort of a whole
            team &mdash; each doing their part so the rest can do theirs.
          </p>
          <p className="body-sm" style={{ maxWidth: '54ch', marginTop: '1.1rem' }}>
            Led with purpose by <strong>Sonny Mokgadi</strong>, our managing
            director, who sets the standard. We work to grow it right, pick it
            right and deliver it right, every single time.
          </p>
          {/* Restored at Setho's request. It was dropped when the page was
              rebuilt on the copy from the 5 November notes, which did not
              carry it. "Three generations" is the Patriot on Sunday's own
              line about this ground, not ours. */}
          <p className="body-sm" style={{ maxWidth: '54ch', marginTop: '1rem' }}>
            Alongside him: Leiso Mokgadi, Mokgacha Mokgadi and Thato Mokgadi.
            Three generations have farmed this ground.
          </p>
        </div>
      </Reveal>

      {/* Thato is named in the sentence above but is in none of the twenty
          photographs in the team folder, so she had no face on this page.
          This sits here rather than in either grid below on purpose: those
          hold eight and twelve, which divide by both the two-column and the
          four-column layouts, and a twenty-first tile would leave a ragged
          row at every width. It is also the right place for it — directly
          under the sentence that names her. */}
      <Reveal
        variant="scale"
        className="team__shot team__shot--wide"
        style={{ marginTop: 'clamp(1.5rem, 3vw, 2.25rem)' }}
      >
        <Photo
          src="/farm/thato-at-mookane.jpg"
          alt="Thato Mokgadi talking a group of visitors through the open field at Mookane"
        />
        <span className="team__shot-cap">
          <b className="team__shot-who">Thato Mokgadi</b>
          walking visitors through the open field
        </span>
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
